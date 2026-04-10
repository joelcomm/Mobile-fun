/* daily.js — Shared daily game system (resets at midnight GMT) */
const Daily = (function () {
  const EPOCH = Date.UTC(2024, 0, 1); // Jan 1, 2024 00:00 UTC

  function getDayNumber() {
    const now = new Date();
    const utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return Math.floor((utc - EPOCH) / 86400000);
  }

  // Mulberry32 seeded PRNG
  function createRng(seed) {
    let s = seed | 0;
    return function () {
      s = s + 0x6D2B79F5 | 0;
      var t = Math.imul(s ^ s >>> 15, 1 | s);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(arr, rng) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function pick(arr, count, rng) {
    return seededShuffle(arr, rng).slice(0, count);
  }

  function getDateString() {
    var d = new Date();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getUTCDay()] + ', ' + months[d.getUTCMonth()] + ' ' + d.getUTCDate() + ', ' + d.getUTCFullYear();
  }

  function getDailyResult(key) {
    try {
      var s = JSON.parse(localStorage.getItem(key + '-daily') || 'null');
      if (s && s.day === getDayNumber()) return s;
    } catch (e) {}
    return null;
  }

  function saveDailyResult(key, score, extra) {
    var day = getDayNumber();
    if (getDailyResult(key)) return; // first play only
    var data = { day: day, score: score };
    if (extra) for (var k in extra) data[k] = extra[k];
    localStorage.setItem(key + '-daily', JSON.stringify(data));
    // streak
    try {
      var prev = JSON.parse(localStorage.getItem(key + '-streak') || '{}');
      var count = 1;
      if (prev.lastDay === day - 1) count = (prev.count || 0) + 1;
      else if (prev.lastDay === day) count = prev.count || 1;
      localStorage.setItem(key + '-streak', JSON.stringify({ lastDay: day, count: count }));
    } catch (e) {
      localStorage.setItem(key + '-streak', JSON.stringify({ lastDay: day, count: 1 }));
    }
  }

  function getStreak(key) {
    try {
      var d = JSON.parse(localStorage.getItem(key + '-streak') || '{}');
      var day = getDayNumber();
      if (d.lastDay === day || d.lastDay === day - 1) return d.count || 0;
    } catch (e) {}
    return 0;
  }

  function formatCountdown() {
    var now = new Date();
    var tom = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
    var ms = tom.getTime() - now.getTime();
    var h = Math.floor(ms / 3600000);
    var m = Math.floor((ms % 3600000) / 60000);
    var s = Math.floor((ms % 60000) / 1000);
    return pad(h) + ':' + pad(m) + ':' + pad(s);
  }

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  /* Inject daily header + played-today info into a game's title screen */
  function injectDailyInfo(containerSel, gameKey) {
    if (!document.getElementById('daily-css')) {
      var st = document.createElement('style');
      st.id = 'daily-css';
      st.textContent =
        '.daily-hdr{text-align:center;margin-bottom:12px}' +
        '.daily-badge{display:inline-block;padding:3px 12px;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:2px;background:rgba(245,197,66,.14);color:#f5c542;margin-bottom:6px}' +
        '.daily-date{font-size:14px;letter-spacing:1px;color:#b0b0be}' +
        '.daily-streak{font-size:14px;color:#f5c542;letter-spacing:1px;margin-top:2px}' +
        '.daily-done{text-align:center;margin:12px 0;padding:16px;background:rgba(62,207,114,.08);border:1px solid rgba(62,207,114,.2);border-radius:10px}' +
        '.daily-done-lbl{font-size:13px;font-weight:700;color:#3ecf72;letter-spacing:2px;margin-bottom:4px}' +
        '.daily-done-score{font-size:32px;font-weight:900;color:#3ecf72}' +
        '.daily-cd{font-size:13px;color:#a0a0b0;letter-spacing:1px;margin-top:8px}';
      document.head.appendChild(st);
    }

    var el = document.querySelector(containerSel);
    if (!el) return;

    // Build header
    var hdr = document.createElement('div');
    hdr.className = 'daily-hdr';
    var html = '<div class="daily-badge">DAILY PUZZLE</div><p class="daily-date">' + getDateString() + '</p>';
    var streak = getStreak(gameKey);
    if (streak > 0) html += '<p class="daily-streak">\uD83D\uDD25 ' + streak + ' day streak</p>';
    hdr.innerHTML = html;
    el.insertBefore(hdr, el.firstChild);

    // If played today show result
    var res = getDailyResult(gameKey);
    if (res) {
      var box = document.createElement('div');
      box.className = 'daily-done';
      box.innerHTML =
        '<p class="daily-done-lbl">COMPLETED TODAY</p>' +
        '<p class="daily-done-score">' + res.score + '</p>' +
        '<p class="daily-cd" id="daily-cd"></p>';
      var btn = el.querySelector('.btn-main');
      if (btn) {
        btn.textContent = 'PLAY AGAIN';
        el.insertBefore(box, btn);
      }
      var cdEl = box.querySelector('#daily-cd');
      function tick() { cdEl.textContent = 'Next puzzle in ' + formatCountdown(); }
      tick(); setInterval(tick, 1000);
    }
  }

  return {
    getDayNumber: getDayNumber,
    createRng: createRng,
    seededShuffle: seededShuffle,
    pick: pick,
    getDateString: getDateString,
    getDailyResult: getDailyResult,
    saveDailyResult: saveDailyResult,
    getStreak: getStreak,
    formatCountdown: formatCountdown,
    injectDailyInfo: injectDailyInfo
  };
})();
