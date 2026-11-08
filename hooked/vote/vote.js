/* Hooked — open voting. Shows pairs that still need votes (fewest first, from today's snapshot),
 * skipping pairs this browser already voted on. Every vote goes to the same API the game uses. */
(function () {
  var MIN_VOTES = 30;   // keep in sync with game.js
  var LIVE_MIN = 10;
  var API = (typeof HOOKED_API === 'string' ? HOOKED_API : '').replace(/\/+$/, '');
  var $ = function (id) { return document.getElementById(id); };
  var queue = [], cur = null, count = 0, answered = false;

  function voted() { try { return JSON.parse(localStorage.getItem('hooked-voted') || '[]'); } catch (e) { return []; } }
  function markVoted(id) {
    try { var l = voted(); if (l.indexOf(id) === -1) { l.push(id); localStorage.setItem('hooked-voted', JSON.stringify(l)); } } catch (e) {}
  }
  function voterId() {
    var v = null;
    try { v = localStorage.getItem('hooked-voter'); } catch (e) {}
    if (!v || !/^[A-Za-z0-9_-]{16,64}$/.test(v)) {
      var a = new Uint8Array(18); window.crypto.getRandomValues(a);
      var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
      v = Array.prototype.map.call(a, function (b) { return abc[b % 64]; }).join('');
      try { localStorage.setItem('hooked-voter', v); } catch (e) {}
    }
    return v;
  }
  function show(name) {
    ['title', 'game', 'done'].forEach(function (n) { $(n + '-screen').classList.toggle('hidden', n !== name); });
  }
  function status(t) { $('hk-status').textContent = t || ''; $('hk-status').classList.toggle('hidden', !t); }
  function pct(a, n) { return n ? Math.round(a / n * 100) : 0; }

  function start() {
    if (!API) { status('Voting opens soon.'); return; }
    $('btn-start').disabled = true; $('btn-start').textContent = 'LOADING…';
    fetch(API + '/today', { cache: 'no-store' }).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (snap) {
      var t = (snap && snap.tallies) || {}, mine = voted();
      queue = HOOKS.map(function (h, i) { var c = t[h.id] || [0, 0]; return { h: h, n: (c[0] || 0) + (c[1] || 0), r: Math.random(), i: i }; })
        .filter(function (x) { return x.n < MIN_VOTES && mine.indexOf(x.h.id) === -1; })
        .sort(function (a, b) { return (a.n - b.n) || (a.r - b.r); });
      next();
    }).catch(function () {
      $('btn-start').disabled = false; $('btn-start').textContent = 'TRY AGAIN';
      status('Couldn’t reach the vote server. Check your connection and try again.');
    });
  }

  function next() {
    cur = queue.shift();
    if (!cur) { show('done'); return; }
    answered = false;
    show('game');
    $('count-label').textContent = count;
    $('topic-label').textContent = cur.h.topic;
    $('feedback').classList.add('hidden');
    var box = $('statements'); box.innerHTML = '';
    (Math.random() < 0.5 ? ['w', 'l'] : ['l', 'w']).forEach(function (side) {
      var b = document.createElement('button'); b.className = 'stmt-btn'; b.dataset.which = side; b.textContent = cur.h[side]; box.appendChild(b);
    });
  }

  function pick(e) {
    var btn = e.target.closest('.stmt-btn');
    if (!btn || answered) return;
    answered = true;
    var side = btn.dataset.which, h = cur.h;
    $('statements').querySelectorAll('.stmt-btn').forEach(function (b) { b.classList.add('locked'); });
    btn.classList.add('correct-pick');
    var s = document.createElement('span'); s.className = 'stmt-label true-label'; s.textContent = 'YOUR VOTE'; btn.appendChild(s);
    $('feedback-result').textContent = 'VOTE COUNTED';
    $('feedback-explain').textContent = 'Counting…';
    $('feedback').classList.remove('hidden');
    markVoted(h.id);
    fetch(API + '/vote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: h.id, pick: side, voter: voterId() }) })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (!res || typeof res.w !== 'number') throw 0;
        if (res.counted) count++;
        $('count-label').textContent = count;
        var tot = res.w + res.l, mine = side === 'w' ? res.w : res.l;
        $('feedback-result').textContent = res.counted === false ? (res.error === 'daily limit' ? 'DAILY LIMIT REACHED' : 'ALREADY VOTED') : 'VOTE COUNTED';
        $('feedback-explain').textContent = (tot >= LIVE_MIN
          ? 'So far ' + pct(mine, tot) + '% of ' + tot.toLocaleString('en-US') + ' players agree with you.'
          : 'You’re one of the first to vote on this pair.') + ' Editor’s pick: “' + h.w + '”';
      })
      .catch(function () { $('feedback-explain').textContent = 'Your vote couldn’t be sent. Check your connection.'; });
  }

  $('btn-start').addEventListener('click', start);
  $('btn-next').addEventListener('click', next);
  $('statements').addEventListener('click', pick);
  if (!API) { $('btn-start').disabled = true; $('btn-start').textContent = 'OPENS SOON'; status('Voting opens soon.'); }
})();
