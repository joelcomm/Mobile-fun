/* acumen-core.js — the Acumen profile: one daily Acumen Score, streaks, history,
 * plus thin wrappers over native iOS features (haptics, share sheet, local
 * notifications) via Capacitor, with web fallbacks so it still runs in a browser.
 *
 * Every game page includes this file and calls AcumenCore.record(game, pct)
 * exactly once when the daily puzzle ends (pct = 0..100, accuracy for that game).
 *
 * Acumen Score (0-1000) = sum over the 4 core games of round(pct * 2.5).
 * Unplayed games count 0, so finishing the whole case file matters.
 */
(function () {
  'use strict';

  var GAMES = [
    { key: 'bluff',   name: 'Bluff',        verb: 'Catch the lie',     color: '#DC2626', path: 'bluff/index.html',   icon: '\uD83C\uDCCF' },
    { key: 'alibi',   name: 'Alibi',        verb: 'Find the culprit',  color: '#0D9488', path: 'alibi/index.html',   icon: '\uD83D\uDD75\uFE0F' },
    { key: 'threads', name: 'Missing Link', verb: 'Crack the link',    color: '#D97706', path: 'threads/index.html', icon: '\uD83E\uDDF5' },
    { key: 'rank',    name: 'Rank',         verb: 'Rank the truth',    color: '#DB2777', path: 'rank/index.html',    icon: '\uD83D\uDCCA' }
  ];
  var PER_GAME_MAX = 250;
  var STORE_KEY = 'acumen.v2.profile';
  var REMINDER_KEY = 'acumen.v2.reminder';
  var EPOCH = Date.UTC(2026, 7, 30); // matches Daily: day 1 = Aug 31, 2026

  var TITLES = [
    { min: 900, name: 'Chief Inspector' },
    { min: 750, name: 'Detective' },
    { min: 600, name: 'Investigator' },
    { min: 400, name: 'Officer' },
    { min: 200, name: 'Rookie' },
    { min: 0,   name: 'Bystander' }
  ];

  /* ── helpers ─────────────────────────────────────────── */
  function dayNumber() {
    var n = new Date();
    return Math.floor((Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()) - EPOCH) / 86400000);
  }
  function plugin(name) {
    try { return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins[name] || null; } catch (e) { return null; }
  }
  function isNative() {
    try { return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()); } catch (e) { return false; }
  }
  function gameByKey(k) { for (var i = 0; i < GAMES.length; i++) if (GAMES[i].key === k) return GAMES[i]; return null; }
  function pointsFor(pct) { return Math.max(0, Math.min(PER_GAME_MAX, Math.round(pct * PER_GAME_MAX / 100))); }
  function titleFor(score) { for (var i = 0; i < TITLES.length; i++) if (score >= TITLES[i].min) return TITLES[i].name; return TITLES[TITLES.length - 1].name; }

  /* ── persistence (localStorage + Capacitor Preferences mirror) ── */
  var profile = { v: 2, days: {} };
  function loadLocal() {
    try {
      var p = JSON.parse(localStorage.getItem(STORE_KEY) || 'null');
      if (p && p.days) profile = p;
    } catch (e) {}
  }
  function persist() {
    var s = JSON.stringify(profile);
    try { localStorage.setItem(STORE_KEY, s); } catch (e) {}
    var prefs = plugin('Preferences');
    if (prefs) { try { prefs.set({ key: STORE_KEY, value: s }); } catch (e) {} }
  }
  loadLocal();
  var readyPromise = new Promise(function (resolve) {
    var prefs = plugin('Preferences');
    if (!prefs) return resolve();
    // If WKWebView storage was purged, restore from the native mirror.
    prefs.get({ key: STORE_KEY }).then(function (r) {
      if (r && r.value) {
        try {
          var p = JSON.parse(r.value);
          if (p && p.days && Object.keys(p.days).length > Object.keys(profile.days).length) {
            profile = p;
            try { localStorage.setItem(STORE_KEY, r.value); } catch (e) {}
          }
        } catch (e) {}
      }
      resolve();
    }).catch(resolve);
  });

  /* ── scoring ─────────────────────────────────────────── */
  function dayEntry(day) { return profile.days[String(day)] || {}; }
  function dayScore(day) {
    var e = dayEntry(day), t = 0;
    GAMES.forEach(function (g) { if (e[g.key]) t += pointsFor(e[g.key].pct); });
    return t;
  }
  function doneCount(day) {
    var e = dayEntry(day), n = 0;
    GAMES.forEach(function (g) { if (e[g.key]) n++; });
    return n;
  }
  function playedDays() {
    return Object.keys(profile.days).map(Number).filter(function (d) { return doneCount(d) > 0; }).sort(function (a, b) { return a - b; });
  }

  function record(game, pct, extra) {
    var g = gameByKey(game);
    if (!g) return null;
    var day = dayNumber();
    var key = String(day);
    var entry = profile.days[key] || (profile.days[key] = {});
    if (entry[game]) return summary(); // first play of the day counts
    entry[game] = { pct: Math.max(0, Math.min(100, Math.round(pct))), at: Date.now() };
    if (extra) entry[game].extra = extra;
    persist();
    try { document.dispatchEvent(new CustomEvent('acumen:recorded', { detail: { game: game } })); } catch (e) {}
    if (document.readyState !== 'loading') showResultBar(); else document.addEventListener('DOMContentLoaded', showResultBar);
    return summary();
  }

  function streaks() {
    var today = dayNumber();
    function run(pred) {
      var d = pred(today) ? today : today - 1; // today not finished yet doesn't break it
      var n = 0;
      while (pred(d)) { n++; d--; }
      return n;
    }
    var any = run(function (d) { return doneCount(d) > 0; });
    var full = run(function (d) { return doneCount(d) === GAMES.length; });
    // longest ever
    var days = playedDays(), best = 0, cur = 0, prev = null;
    days.forEach(function (d) { cur = (prev !== null && d === prev + 1) ? cur + 1 : 1; if (cur > best) best = cur; prev = d; });
    return { current: any, closed: full, longest: best };
  }

  function rating() {
    // Acumen Rating = average daily score over the last 7 days you played
    var days = playedDays().slice(-7);
    if (!days.length) return 0;
    var t = 0; days.forEach(function (d) { t += dayScore(d); });
    return Math.round(t / days.length);
  }

  function summary() {
    var day = dayNumber();
    var e = dayEntry(day);
    var games = GAMES.map(function (g) {
      return { key: g.key, name: g.name, done: !!e[g.key], pct: e[g.key] ? e[g.key].pct : null, points: e[g.key] ? pointsFor(e[g.key].pct) : 0 };
    });
    var s = dayScore(day);
    var st = streaks();
    return { day: day, score: s, max: PER_GAME_MAX * GAMES.length, title: titleFor(s), done: doneCount(day), total: GAMES.length, games: games, streak: st.current, closedStreak: st.closed, longest: st.longest, rating: rating(), ratingTitle: titleFor(rating()) };
  }

  function stats() {
    var days = playedDays();
    var per = GAMES.map(function (g) {
      var plays = 0, sum = 0, best = 0, perfect = 0;
      days.forEach(function (d) { var r = dayEntry(d)[g.key]; if (r) { plays++; sum += r.pct; if (r.pct > best) best = r.pct; if (r.pct === 100) perfect++; } });
      return { key: g.key, name: g.name, color: g.color, icon: g.icon, plays: plays, avg: plays ? Math.round(sum / plays) : 0, best: best, perfect: perfect };
    });
    var totalScore = 0, bestDay = 0, closed = 0;
    days.forEach(function (d) { var s = dayScore(d); totalScore += s; if (s > bestDay) bestDay = s; if (doneCount(d) === GAMES.length) closed++; });
    var today = dayNumber(), hist = [];
    for (var i = 13; i >= 0; i--) { var d = today - i; hist.push({ day: d, score: dayScore(d), done: doneCount(d) }); }
    return { daysPlayed: days.length, avgDaily: days.length ? Math.round(totalScore / days.length) : 0, bestDay: bestDay, casesClosed: closed, perGame: per, history: hist, streaks: streaks(), rating: rating(), ratingTitle: titleFor(rating()) };
  }

  /* ── share ───────────────────────────────────────────── */
  function shareText() {
    var s = summary();
    var squares = s.games.map(function (g) { return !g.done ? '\u2B1C' : (g.pct >= 80 ? '\uD83D\uDFE9' : (g.pct >= 50 ? '\uD83D\uDFE8' : '\uD83D\uDFE5')); }).join('');
    return 'ACUMEN Case #' + s.day + ' \u2014 ' + s.score + '/' + s.max + ' \u00B7 ' + s.title + '\n' +
      squares + '  \uD83D\uDD25 ' + s.streak + '-day streak\n' +
      'Bluff \u00B7 Alibi \u00B7 Missing Link \u00B7 Rank';
  }
  function share(text, title) {
    text = text || shareText();
    var sh = plugin('Share');
    if (sh && isNative()) {
      return sh.share({ title: title || 'My Acumen score', text: text, dialogTitle: 'Share your Acumen score' }).catch(function () {});
    }
    if (navigator.share) return navigator.share({ title: title || 'My Acumen score', text: text }).catch(function () {});
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text).then(function () { toast('Copied to clipboard'); });
    return Promise.resolve();
  }

  /* ── haptics ─────────────────────────────────────────── */
  function haptic(kind) {
    var h = plugin('Haptics');
    try {
      if (h && isNative()) {
        if (kind === 'success') return h.notification({ type: 'SUCCESS' });
        if (kind === 'error') return h.notification({ type: 'ERROR' });
        if (kind === 'warning') return h.notification({ type: 'WARNING' });
        if (kind === 'heavy') return h.impact({ style: 'HEAVY' });
        return h.impact({ style: 'LIGHT' });
      }
      if (navigator.vibrate) navigator.vibrate(kind === 'success' ? [15, 40, 15] : kind === 'error' ? 60 : 10);
    } catch (e) {}
  }
  var lastHaptic = 0;
  function installHaptics() {
    document.addEventListener('click', function (ev) {
      var t = ev.target && ev.target.closest && ev.target.closest('button, .word-btn, .stmt-btn, .btn-main, .game-card, a.tap');
      if (t) haptic('light');
    }, true);
    // Outcome feedback: react when a game flags an answer right/wrong.
    if (!window.MutationObserver) return;
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i], el = m.target;
        if (!el.classList) continue;
        var old = m.oldValue || '';
        var wasCorrect = / ?(correct-pick|correct)( |$)/.test(old), wasWrong = / ?(wrong-pick|wrong)( |$)/.test(old);
        var nowCorrect = el.classList.contains('correct-pick') || (el.tagName === 'INPUT' && el.classList.contains('correct'));
        var nowWrong = el.classList.contains('wrong-pick') || (el.tagName === 'INPUT' && el.classList.contains('wrong'));
        var now = Date.now();
        if (now - lastHaptic < 250) continue;
        if (nowCorrect && !wasCorrect) { lastHaptic = now; haptic('success'); }
        else if (nowWrong && !wasWrong) { lastHaptic = now; haptic('error'); }
      }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'], attributeOldValue: true, subtree: true });
  }

  /* ── daily reminder (local notification) ─────────────── */
  function getReminder() {
    try { return JSON.parse(localStorage.getItem(REMINDER_KEY) || 'null') || { enabled: false, hour: 8, minute: 0 }; }
    catch (e) { return { enabled: false, hour: 8, minute: 0 }; }
  }
  function setReminder(enabled, hour, minute) {
    var cfg = { enabled: !!enabled, hour: hour, minute: minute };
    var ln = plugin('LocalNotifications');
    if (!ln || !isNative()) {
      try { localStorage.setItem(REMINDER_KEY, JSON.stringify(cfg)); } catch (e) {}
      return Promise.resolve({ ok: false, reason: 'unsupported' });
    }
    function cancel() { return ln.cancel({ notifications: [{ id: 1001 }] }).catch(function () {}); }
    if (!enabled) {
      return cancel().then(function () { try { localStorage.setItem(REMINDER_KEY, JSON.stringify(cfg)); } catch (e) {} return { ok: true }; });
    }
    return ln.requestPermissions().then(function (p) {
      if (p.display !== 'granted') { cfg.enabled = false; try { localStorage.setItem(REMINDER_KEY, JSON.stringify(cfg)); } catch (e) {} return { ok: false, reason: 'denied' }; }
      return cancel().then(function () {
        return ln.schedule({ notifications: [{
          id: 1001,
          title: 'Today\u2019s case file is open',
          body: 'Four new cases are waiting. Solve them to keep your Acumen streak alive.',
          schedule: { on: { hour: hour, minute: minute }, allowWhileIdle: true }
        }] });
      }).then(function () { try { localStorage.setItem(REMINDER_KEY, JSON.stringify(cfg)); } catch (e) {} return { ok: true }; });
    }).catch(function () { return { ok: false, reason: 'error' }; });
  }

  /* ── UI bits injected into game pages ────────────────── */
  function toast(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px)+90px);transform:translateX(-50%);background:#131A2B;color:#fff;padding:10px 18px;border-radius:10px;font:700 13px Inter,-apple-system,sans-serif;z-index:100000;letter-spacing:.5px';
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  function showResultBar() {
    if (document.getElementById('acumen-bar') || !document.body) return;
    var s = summary();
    var bar = document.createElement('div');
    bar.id = 'acumen-bar';
    bar.style.cssText = 'position:fixed;left:12px;right:12px;bottom:calc(env(safe-area-inset-bottom,0px) + 12px);z-index:99999;max-width:456px;margin:0 auto;background:#131A2B;color:#fff;border-radius:16px;padding:12px 14px;display:flex;align-items:center;gap:12px;box-shadow:0 8px 30px rgba(0,0,0,.28);font-family:Inter,-apple-system,sans-serif';
    bar.innerHTML =
      '<div style="flex:1;min-width:0">' +
        '<div style="font-size:10px;font-weight:800;letter-spacing:2px;color:#E8A317">ACUMEN SCORE TODAY</div>' +
        '<div style="font-size:22px;font-weight:900;line-height:1.15">' + s.score + '<span style="font-size:12px;font-weight:700;opacity:.6"> / ' + s.max + '</span></div>' +
        '<div style="font-size:11px;opacity:.7;margin-top:1px">' + s.done + ' of ' + s.total + ' cases \u00B7 ' + s.title + (s.streak > 1 ? ' \u00B7 \uD83D\uDD25 ' + s.streak : '') + '</div>' +
      '</div>' +
      '<button id="acumen-bar-share" style="all:unset;cursor:pointer;background:#E8A317;color:#131A2B;font:800 12px Inter,sans-serif;letter-spacing:1.5px;padding:10px 12px;border-radius:10px">SHARE</button>' +
      '<a href="../index.html" style="text-decoration:none;background:rgba(255,255,255,.12);color:#fff;font:800 12px Inter,sans-serif;letter-spacing:1.5px;padding:10px 12px;border-radius:10px">HOME</a>' +
      '<button id="acumen-bar-x" aria-label="Dismiss" style="all:unset;cursor:pointer;opacity:.5;font:700 18px sans-serif;padding:0 2px">\u00D7</button>';
    document.body.appendChild(bar);
    document.getElementById('acumen-bar-share').addEventListener('click', function () { share(); });
    document.getElementById('acumen-bar-x').addEventListener('click', function () { bar.remove(); });
  }

  function ensureHomeChip() {
    if (!document.body) return;
    if (document.querySelector('.back-link, a[href*="app.html"], a[href$="index.html"], #acumen-home')) return;
    var a = document.createElement('a');
    a.id = 'acumen-home';
    a.href = '../index.html';
    a.textContent = '\u2039 ACUMEN';
    a.style.cssText = 'position:fixed;top:calc(env(safe-area-inset-top,0px) + 10px);left:12px;z-index:9999;background:rgba(19,26,43,.92);color:#fff;text-decoration:none;font:800 11px Inter,-apple-system,sans-serif;letter-spacing:2px;padding:8px 12px;border-radius:10px';
    document.body.appendChild(a);
  }

  function boot() {
    installHaptics();
    // Only game pages (not the hub / stats) get the home chip
    if (/\/(bluff|alibi|threads|rank)\//.test(location.pathname)) ensureHomeChip();
    // If the game was already completed earlier today, show the bar on re-entry
    if (/\/(bluff|alibi|threads|rank)\//.test(location.pathname)) {
      var g = location.pathname.match(/\/(bluff|alibi|threads|rank)\//)[1];
      readyPromise.then(function () { if (dayEntry(dayNumber())[g]) showResultBar(); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

  window.AcumenCore = {
    GAMES: GAMES, PER_GAME_MAX: PER_GAME_MAX, TITLES: TITLES,
    dayNumber: dayNumber, record: record, summary: summary, stats: stats, rating: rating, streaks: streaks,
    shareText: shareText, share: share, haptic: haptic,
    getReminder: getReminder, setReminder: setReminder,
    isNative: isNative, ready: function () { return readyPromise; }, toast: toast, pointsFor: pointsFor, titleFor: titleFor
  };
})();
