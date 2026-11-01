/* daily.js — Missing Link's own daily-puzzle system (resets at midnight UTC).
 * Self-contained: no reference to the hub's shared daily.js, and no
 * localStorage for player progress — persistence goes through the
 * Playables SDK's saveData/loadData (one JSON blob, loaded once at boot). */
var Daily = (function () {
  var EPOCH = Date.UTC(2026, 7, 30); // Aug 30, 2026 — day 1 = Aug 31, 2026

  function getDayNumber() {
    var now = new Date();
    var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    return Math.floor((utc - EPOCH) / 86400000);
  }

  // Mulberry32 seeded PRNG
  function createRng(seed) {
    var s = seed | 0;
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

  // Deal-from-deck: shuffle the full pool once per cycle, then deal
  // sequential chunks so no puzzle repeats within a cycle.
  function dealFromDeck(pool, perDay) {
    var day = getDayNumber();
    var cycleLen = Math.floor(pool.length / perDay);
    if (cycleLen < 1) cycleLen = 1;
    var cycle = Math.floor(day / cycleLen);
    var dayInCycle = day % cycleLen;
    var rng = createRng(cycle * 99991 + 7);
    var shuffled = seededShuffle(pool, rng);
    var start = dayInCycle * perDay;
    return shuffled.slice(start, start + perDay);
  }

  function getDateString() {
    var d = new Date();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getUTCDay()] + ', ' + months[d.getUTCMonth()] + ' ' + d.getUTCDate() + ', ' + d.getUTCFullYear();
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

  // ── Persistence: one JSON blob through the Playables SDK ──────────────
  var state = { daily: null, streak: null, progress: null };
  var ready = false;

  function init() {
    return PlayablesSDK.loadData().then(function (raw) {
      if (raw) {
        try {
          var parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') state = parsed;
        } catch (e) {}
      }
      ready = true;
      return state;
    });
  }

  function persist() {
    // Fire-and-forget: state is already updated in memory before this is
    // called, so synchronous reads elsewhere stay correct regardless of
    // when the save round-trip actually completes.
    PlayablesSDK.saveData(JSON.stringify(state)).catch(function () {});
  }

  function getDailyResult() {
    if (state.daily && state.daily.day === getDayNumber()) return state.daily;
    return null;
  }

  function saveDailyResult(score, extra) {
    var day = getDayNumber();
    if (getDailyResult()) return; // first play only
    var data = { day: day, score: score };
    if (extra) for (var k in extra) data[k] = extra[k];
    state.daily = data;

    var prev = state.streak || {};
    var count = 1;
    if (prev.lastDay === day - 1) count = (prev.count || 0) + 1;
    else if (prev.lastDay === day) count = prev.count || 1;
    state.streak = { lastDay: day, count: count };

    persist();
  }

  function getStreak() {
    var d = state.streak;
    if (!d) return 0;
    var day = getDayNumber();
    if (d.lastDay === day || d.lastDay === day - 1) return d.count || 0;
    return 0;
  }

  function saveProgress(data) {
    data.day = getDayNumber();
    state.progress = data;
    persist();
  }

  function getProgress() {
    var s = state.progress;
    if (s && s.day === getDayNumber()) return s;
    if (s) { state.progress = null; persist(); }
    return null;
  }

  function clearProgress() {
    if (state.progress) {
      state.progress = null;
      persist();
    }
  }

  /* Inject daily header + played-today info into the title screen */
  function injectDailyInfo(containerSel) {
    if (!document.getElementById('daily-css')) {
      var st = document.createElement('style');
      st.id = 'daily-css';
      st.textContent =
        '.daily-hdr{text-align:center;margin-bottom:12px}' +
        '.daily-badge{display:inline-block;padding:3px 12px;border-radius:4px;font-size:11px;font-weight:800;letter-spacing:2px;background:rgba(192,136,64,.1);color:#c08840;margin-bottom:6px}' +
        '.daily-date{font-size:14px;letter-spacing:1px;color:#6b6b80}' +
        '.daily-streak{font-size:14px;color:#c08840;letter-spacing:1px;margin-top:2px}' +
        '.daily-done{text-align:center;margin:12px 0;padding:16px;background:rgba(26,154,69,.06);border:1px solid rgba(26,154,69,.15);border-radius:10px}' +
        '.daily-done-lbl{font-size:13px;font-weight:700;color:#1a9a45;letter-spacing:2px;margin-bottom:4px}' +
        '.daily-done-score{font-size:32px;font-weight:900;color:#1a9a45}' +
        '.daily-cd{font-size:13px;color:#6b6b80;letter-spacing:1px;margin-top:8px}';
      document.head.appendChild(st);
    }

    var el = document.querySelector(containerSel);
    if (!el) return;

    var hdr = document.createElement('div');
    hdr.className = 'daily-hdr';
    var html = '<div class="daily-badge">DAILY PUZZLE</div><p class="daily-date">' + getDateString() + '</p>';
    var streak = getStreak();
    if (streak > 0) html += '<p class="daily-streak">🔥 ' + streak + ' day streak</p>';
    hdr.innerHTML = html;
    el.insertBefore(hdr, el.firstChild);

    var res = getDailyResult();
    if (res) {
      var box = document.createElement('div');
      box.className = 'daily-done';
      box.innerHTML =
        '<p class="daily-done-lbl">COMPLETED TODAY</p>' +
        '<p class="daily-done-score">' + res.score + '</p>' +
        '<p class="daily-cd" id="daily-cd"></p>';
      var btn = el.querySelector('.btn-main');
      if (btn) {
        btn.style.display = 'none';
        el.insertBefore(box, btn);
      }
      var cdEl = box.querySelector('#daily-cd');
      var cdTimer = null;
      function tick() { cdEl.textContent = 'New puzzle in ' + formatCountdown(); }
      function start() { tick(); cdTimer = setInterval(tick, 1000); }
      function stop() { if (cdTimer) { clearInterval(cdTimer); cdTimer = null; } }
      start();
      timers.push({ stop: stop, start: start });
    }
  }

  // Interval handles created above need to stop while YouTube pauses the
  // game (and restart on resume), per the Integration requirement
  // ("pause all execution... resume only when onResume is called").
  var timers = [];
  function pauseAll() { timers.forEach(function (t) { t.stop(); }); }
  function resumeAll() { timers.forEach(function (t) { t.start(); }); }

  return {
    getDayNumber: getDayNumber,
    createRng: createRng,
    seededShuffle: seededShuffle,
    dealFromDeck: dealFromDeck,
    getDateString: getDateString,
    formatCountdown: formatCountdown,
    init: init,
    isReady: function () { return ready; },
    getDailyResult: getDailyResult,
    saveDailyResult: saveDailyResult,
    getStreak: getStreak,
    saveProgress: saveProgress,
    getProgress: getProgress,
    clearProgress: clearProgress,
    injectDailyInfo: injectDailyInfo,
    pauseAll: pauseAll,
    resumeAll: resumeAll
  };
})();
