/* Hooked — one featured pair of posts a day, made for X.
 * Vote on which post is more likely to get engagement, then see what the majority said.
 * Next day: yesterday's final majority and your Crowd Streak (days in a row you sided with the
 * final majority). Standalone: needs hooks.js (HOOKS, HOOKED_API, HOOKED_START); x-embed.js optional. */
(function () {
  var API = String(window.HOOKED_API || (typeof HOOKED_API === 'string' ? HOOKED_API : '')).replace(/\/+$/, '');
  var START = typeof HOOKED_START === 'string' ? HOOKED_START : '2026-11-14';
  var FEW = 5;            // below this many votes, don't call a majority yet
  var CARD_URL = 'https://games.aiforeveryoneshow.com/hooked/x-card/';
  var QUESTION = 'Which of these two posts is more likely to get engagement?';

  /* ---------- dates ---------- */
  function utcDay(d) { return (d || new Date()).toISOString().slice(0, 10); }
  function addDays(day, n) { var d = new Date(day + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return utcDay(d); }
  function dayIndex(day) { return Math.round((Date.parse(day + 'T00:00:00Z') - Date.parse(START + 'T00:00:00Z')) / 86400000); }
  function niceDate(day) {
    var d = new Date(day + 'T00:00:00Z');
    return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', timeZone: 'UTC' });
  }

  /* ---------- deterministic pair order ---------- */
  function rng(seed) {
    var s = seed | 0;
    return function () {
      s = s + 0x6D2B79F5 | 0;
      var t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  var ORDER = (function () {
    var a = HOOKS.slice(), r = rng(20261114);
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  })();
  var BY_ID = {};
  HOOKS.forEach(function (h) { BY_ID[h.id] = h; });
  function pairFor(day) { var i = dayIndex(day); return i < 0 ? null : ORDER[i % ORDER.length]; }
  function sidesFor(day) { return rng(dayIndex(day) * 7919 + 17)() < 0.5 ? ['w', 'l'] : ['l', 'w']; }

  /* ---------- local storage ---------- */
  function load(k, def) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch (e) { return def; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function voterId() {
    var v = load('hooked-voter2', null);
    if (!v || !/^[A-Za-z0-9_-]{16,64}$/.test(v)) {
      var a = new Uint8Array(18); window.crypto.getRandomValues(a);
      var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
      v = Array.prototype.map.call(a, function (b) { return abc[b % 64]; }).join('');
      save('hooked-voter2', v);
    }
    return v;
  }
  var history = load('hooked-history', {});   // { 'YYYY-MM-DD': { id, pick } }

  /* ---------- api ---------- */
  function api(path, opts) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var t = setTimeout(function () { if (ctrl) ctrl.abort(); }, 9000);
    opts = opts || {};
    opts.signal = ctrl ? ctrl.signal : undefined;
    opts.cache = 'no-store';
    return fetch(API + path, opts).then(function (r) {
      clearTimeout(t);
      return r.json().then(function (j) { if (!r.ok && !(j && typeof j.w === 'number')) throw new Error(j && j.error || r.status); return j; });
    });
  }

  /* ---------- helpers ---------- */
  var $ = function (id) { return document.getElementById(id); };
  function pct(a, n) { return n ? Math.round(a / n * 100) : 0; }
  function fmt(n) { return Number(n).toLocaleString('en-US'); }
  function majorityOf(r) { return r.w === r.l ? null : (r.w > r.l ? 'w' : 'l'); }
  function short(s, n) { n = n || 70; return s.length > n ? s.slice(0, n - 3).replace(/\s+\S*$/, '') + '…' : s; }

  var TODAY = utcDay();
  var YESTERDAY = addDays(TODAY, -1);
  var PAIR = pairFor(TODAY);
  var SIDES = sidesFor(TODAY);
  var days = {};          // day -> {w, l, id}
  var streak = 0;
  var lastResult = null;  // today's tally after voting

  function computeStreak() {
    var s = 0, d = YESTERDAY;
    while (dayIndex(d) >= 0) {
      var h = history[d], r = days[d];
      if (!h || !r || h.id !== r.id) break;
      var m = majorityOf(r);
      if (!m || m !== h.pick || r.w + r.l < FEW) break;
      s++; d = addDays(d, -1);
    }
    return s;
  }

  /* ---------- render ---------- */
  function renderHeader() {
    var n = dayIndex(TODAY) + 1;
    $('hk-day').textContent = '#' + n + ' · ' + niceDate(TODAY);
    $('hk-topic').textContent = PAIR.topic;
  }

  function renderYesterday() {
    var box = $('hk-yesterday');
    var r = days[YESTERDAY], p = r && BY_ID[r.id];
    if (!r || !p || r.w + r.l < FEW) { box.classList.add('hidden'); return; }
    var m = majorityOf(r), mine = history[YESTERDAY];
    var html = '<span class="hk-y-label">Yesterday:</span> ';
    if (!m) html += 'a dead heat, ' + fmt(r.w) + '–' + fmt(r.l) + '.';
    else html += pct(m === 'w' ? r.w : r.l, r.w + r.l) + '% of ' + fmt(r.w + r.l) + ' voters said “' + esc(short(p[m])) + '” would get more engagement.';
    if (mine && mine.id === r.id && m) html += mine.pick === m ? ' <b class="hk-ok">You called it ✅</b>' : ' <b class="hk-no">You went the other way</b>';
    box.innerHTML = html;
    box.classList.remove('hidden');
  }

  function renderStreak() {
    var el = $('hk-streak');
    el.textContent = streak > 0 ? 'Crowd Streak ' + streak + ' 🔥' : '';
    el.classList.toggle('hidden', !streak);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function letter(side) { return SIDES.indexOf(side) ? 'B' : 'A'; }

  function renderOptions() {
    var box = $('hk-options');
    box.innerHTML = '';
    SIDES.forEach(function (side) {
      var L = letter(side);
      var b = document.createElement('button');
      b.className = 'hk-post';
      b.dataset.side = side;
      b.innerHTML = '<span class="hk-av hk-av-' + L + '">' + L + '</span><span class="hk-body">' +
        '<span class="hk-name">Post ' + L + ' <span>· Version ' + (L === 'A' ? 1 : 2) + '</span></span>' +
        '<span class="hk-text">' + esc(PAIR[side]) + '</span></span>';
      box.appendChild(b);
    });
  }

  function renderAsk() {
    var t = days[TODAY], n = t && t.id === PAIR.id ? t.w + t.l : 0;
    $('hk-ask').textContent = 'Tap a post to vote' + (n ? ' · ' + fmt(n) + ' vote' + (n === 1 ? '' : 's') + ' so far' : '');
  }

  function renderResult(r, myPick) {
    var n = r.w + r.l, m = majorityOf(r), few = n < FEW;
    document.body.classList.add('hk-voted');
    $('hk-options').classList.add('hidden');
    $('hk-ask').classList.add('hidden');
    var poll = $('hk-poll');
    poll.innerHTML = '';
    SIDES.forEach(function (side) {
      var share = pct(side === 'w' ? r.w : r.l, n), top = !few && !!m && side === m;
      var row = document.createElement('div');
      row.className = 'hk-row' + (top ? ' hk-top' : '') + (side === myPick ? ' hk-mine' : '');
      row.innerHTML = '<i style="width:' + (few ? 0 : share) + '%"></i>' +
        '<span class="hk-row-t">' + letter(side) + ' · ' + esc(PAIR[side]) + '</span>' +
        '<span class="hk-row-p">' + (few ? '' : share + '%') + (top ? ' ✓' : '') + '</span>';
      poll.appendChild(row);
    });
    poll.classList.remove('hidden');
    var mine = 'You voted ' + letter(myPick), msg;
    if (few) msg = mine + ' · You’re one of the first votes today. Check back later to see what the majority says.';
    else if (!m) msg = mine + ' · Dead heat so far · ' + fmt(n) + ' votes';
    else if (m === myPick) msg = mine + ' · You’re with the majority so far · ' + fmt(n) + ' votes';
    else msg = mine + ' · You’re in the minority so far · ' + fmt(n) + ' votes';
    $('hk-msg').textContent = msg;
    $('hk-note').innerHTML = '<b>Editor’s note:</b> we’d bet on Post ' + letter('w') + '. ' + esc(PAIR.why) +
      ' The final majority locks in at midnight UTC.';
    $('hk-after').classList.remove('hidden');
    lastResult = { r: r, pick: myPick };
  }

  function shareText() {
    var n = dayIndex(TODAY) + 1, r = lastResult && lastResult.r, pick = lastResult && lastResult.pick;
    var tot = r ? r.w + r.l : 0, m = r && majorityOf(r);
    var line;
    if (!r || tot < FEW || !m) line = 'I voted on today’s Hooked #' + n + ' 🎣';
    else if (m === pick) line = 'I’m with the majority (' + pct(m === 'w' ? r.w : r.l, tot) + '%) on today’s Hooked #' + n + ' 🎣';
    else line = 'I’m in the minority (' + pct(pick === 'w' ? r.w : r.l, tot) + '%) on today’s Hooked #' + n + ' 🎣';
    if (streak >= 2) line += '\nCrowd Streak: ' + streak + ' 🔥';
    return line + '\n\n' + QUESTION + ' Vote and see what the majority said:';
  }
  function share() {
    if (window.AcumenX) AcumenX.postToX(shareText(), CARD_URL);
    else window.open('https://x.com/intent/post?text=' + encodeURIComponent(shareText()) + '&url=' + encodeURIComponent(CARD_URL), '_blank', 'noopener');
  }

  function countdown() {
    var now = new Date(), next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1), ms = next - now;
    function p(x) { return (x < 10 ? '0' : '') + x; }
    $('hk-cd').textContent = 'New posts in ' + p(Math.floor(ms / 3600000)) + ':' + p(Math.floor(ms % 3600000 / 60000)) + ':' + p(Math.floor(ms % 60000 / 1000));
    if (ms < 1000) setTimeout(function () { location.reload(); }, 1500);
  }

  function setError(t) { var e = $('hk-error'); e.textContent = t || ''; e.classList.toggle('hidden', !t); }

  /* ---------- flow ---------- */
  function vote(side) {
    if (document.body.classList.contains('hk-busy')) return;
    document.body.classList.add('hk-busy');
    setError('');
    api('/vote', { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day: TODAY, id: PAIR.id, pick: side, voter: voterId() }) })
      .then(function (res) {
        document.body.classList.remove('hk-busy');
        if (res.error === 'voting closed for that day') { location.reload(); return; }
        if (res.error === 'daily limit') { setError('Too many votes from your network today. Try again tomorrow.'); return; }
        if (!res.ok && typeof res.w !== 'number') throw new Error(res.error);
        history[TODAY] = { id: PAIR.id, pick: side };
        save('hooked-history', history);
        renderResult(res, side);
      })
      .catch(function () {
        document.body.classList.remove('hk-busy');
        setError('Couldn’t record your vote. Check your connection and tap again.');
      });
  }

  function init() {
    if (!PAIR) { $('hk-ask').textContent = 'Hooked starts soon.'; return; }
    renderHeader();
    renderOptions();
    $('hk-question').innerHTML = esc(QUESTION) + ' <span class="hk-q2">Vote and see what the majority said!</span>';
    $('hk-options').addEventListener('click', function (e) {
      var b = e.target.closest('.hk-post');
      if (b && !b.disabled) vote(b.dataset.side);
    });
    $('hk-share').addEventListener('click', share);
    countdown(); setInterval(countdown, 1000);

    var from = addDays(TODAY, -45);
    if (from < START) from = START;
    api('/days?from=' + from + '&to=' + TODAY).then(function (res) {
      (res.days || []).forEach(function (d) { days[d.day] = d; });
      streak = computeStreak();
      renderYesterday();
      renderStreak();
      renderAsk();
      var mine = history[TODAY];
      if (mine && mine.id === PAIR.id) renderResult(days[TODAY] || { w: 0, l: 0 }, mine.pick);
    }).catch(function () {
      var mine = history[TODAY];
      if (mine && mine.id === PAIR.id) setError('Couldn’t load the latest votes. Check your connection.');
    });
  }

  init();
})();
