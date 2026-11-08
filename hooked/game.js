/* Hooked — pick the opening line that stops the scroll. 5 rounds a day.
 * Data: hooks.js (HOOKS). Each pair has a winner (w), a weaker version (l) and why the winner works.
 * Optional crowd results: set HOOKED_VOTE_URL in hooks.js to an endpoint that accepts
 * POST {id, pick} and answers GET ?id=... with {w, l} vote counts. Empty = off. */
(function () {
  var TOTAL_ROUNDS = 5;
  var KEY = 'hooked';
  var MIN_CROWD = 30; // votes needed before a crowd % is shown

  var dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnNext: document.getElementById('btn-next'),
    nextCd: document.getElementById('next-cd'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    streakBar: document.getElementById('streak-bar'),
    topicLabel: document.getElementById('topic-label'),
    options: document.getElementById('statements'),
    feedback: document.getElementById('feedback'),
    feedbackResult: document.getElementById('feedback-result'),
    feedbackExplain: document.getElementById('feedback-explain'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalGrid: document.getElementById('final-grid'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score'),
    btnShare: document.getElementById('btn-share')
  };

  var state = {};
  var lastResult = null; // { correct, grid } for Share on X
  var cdTimer = null;

  var VOTE_URL = (typeof HOOKED_VOTE_URL === 'string') ? HOOKED_VOTE_URL : '';

  function gridOf(results) {
    return results.map(function (ok) { return ok ? '🟩' : '🟥'; }).join('');
  }

  // Spoiler-free: the player's tally and grid only, never the hooks themselves.
  function shareText(r) {
    return 'Which hook stops the scroll? I picked ' + r.correct + '/' + TOTAL_ROUNDS +
      ' winners on today\'s Hooked #' + Daily.getDayNumber() + ' 🎣\n' + r.grid + '\nCan you beat it?';
  }

  function shareToX() {
    if (!lastResult) return;
    var url = window.AcumenX ? AcumenX.cardUrl(KEY) : 'https://games.aiforeveryoneshow.com/hooked/x-card/';
    if (window.AcumenX) AcumenX.postToX(shareText(lastResult), url);
    else window.open('https://x.com/intent/post?text=' + encodeURIComponent(shareText(lastResult)) + '&url=' + encodeURIComponent(url), '_blank', 'noopener');
  }

  function rankFor(correct) {
    if (correct >= 5) return 'HOOK MASTER';
    if (correct === 4) return 'SCROLL STOPPER';
    if (correct === 3) return 'SHARP EYE';
    if (correct === 2) return 'GETTING WARMER';
    return 'STILL SCROLLING';
  }

  function todaysRounds() { return Daily.dealFromDeck(HOOKS, TOTAL_ROUNDS); }

  function startCountdown() {
    function tick() {
      dom.nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW HOOKS IN</span>' + Daily.formatCountdown();
    }
    tick();
    if (cdTimer) clearInterval(cdTimer);
    cdTimer = setInterval(tick, 1000);
  }

  function init() {
    Daily.injectDailyInfo('#title-screen', KEY);
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnNext.addEventListener('click', nextRound);
    dom.options.addEventListener('click', handlePick);
    if (dom.btnShare) dom.btnShare.addEventListener('click', shareToX);

    var completed = Daily.getDailyResult(KEY);
    if (completed) {
      var results = completed.results || [];
      lastResult = { correct: completed.correct || 0, grid: gridOf(results) };
      renderGameOver(completed.score, completed.correct || 0, results, completed.maxStreak || 0);
      if (!results.length && dom.btnShare) dom.btnShare.classList.add('hidden');
      return;
    }
    var p = Daily.getProgress(KEY);
    if (p && p.day === Daily.getDayNumber()) {
      state = newState();
      state.current = p.current;
      state.score = p.score;
      state.streak = p.streak;
      state.maxStreak = p.maxStreak;
      state.results = p.results || [];
      if (state.current >= TOTAL_ROUNDS) { Daily.clearProgress(KEY); endGame(); return; }
      showScreen('game');
      showRound();
    }
  }

  function newState() {
    return {
      rounds: todaysRounds(),
      rng: Daily.createRng(Daily.getDayNumber() * 7351),
      current: 0, score: 0, streak: 0, maxStreak: 0, results: [], answered: false
    };
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    var b = localStorage.getItem('hooked-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    state = newState();
    showScreen('game');
    showRound();
  }

  // The order of the two hooks is seeded per round, so it's the same for every player
  // but the winner isn't always on top.
  function orderFor(index) {
    var r = Daily.createRng(Daily.getDayNumber() * 7351 + index * 101);
    return r() < 0.5 ? ['w', 'l'] : ['l', 'w'];
  }

  function showRound() {
    var round = state.rounds[state.current];
    state.answered = false;
    dom.roundLabel.textContent = (state.current + 1) + ' / ' + TOTAL_ROUNDS;
    dom.scoreLabel.textContent = state.score;
    dom.streakBar.style.setProperty('--progress', (state.current / TOTAL_ROUNDS * 100) + '%');
    dom.topicLabel.textContent = round.topic;
    dom.feedback.classList.add('hidden');
    dom.options.innerHTML = '';
    orderFor(state.current).forEach(function (which) {
      var btn = document.createElement('button');
      btn.className = 'stmt-btn';
      btn.dataset.which = which;
      btn.textContent = round[which];
      dom.options.appendChild(btn);
    });
  }

  function sendVote(id, pick) {
    if (!VOTE_URL) return;
    try {
      fetch(VOTE_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: id, pick: pick }), keepalive: true }).catch(function () {});
    } catch (e) {}
  }

  function showCrowd(id) {
    if (!VOTE_URL) return;
    fetch(VOTE_URL + (VOTE_URL.indexOf('?') === -1 ? '?' : '&') + 'id=' + encodeURIComponent(id))
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (t) {
        if (!t) return;
        var total = (t.w || 0) + (t.l || 0);
        if (total < MIN_CROWD) return;
        var pct = Math.round((t.w || 0) / total * 100);
        var el = document.createElement('span');
        el.style.cssText = 'display:block;font-weight:800;margin-top:6px';
        el.textContent = pct + '% of players picked the winner.';
        dom.feedbackExplain.appendChild(el);
      })
      .catch(function () {});
  }

  function handlePick(e) {
    var btn = e.target.closest('.stmt-btn');
    if (!btn || state.answered) return;
    state.answered = true;

    var round = state.rounds[state.current];
    var ok = btn.dataset.which === 'w';
    state.results.push(ok);
    if (ok) {
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;
      state.score += 100 + Math.min(state.streak - 1, 4) * 20;
    } else {
      state.streak = 0;
    }
    dom.scoreLabel.textContent = state.score;
    sendVote(round.id, btn.dataset.which);

    dom.options.querySelectorAll('.stmt-btn').forEach(function (b) {
      var isW = b.dataset.which === 'w';
      b.classList.add('locked');
      var label = document.createElement('span');
      label.className = 'stmt-label ' + (isW ? 'true-label' : 'false-label');
      label.textContent = isW ? 'STOPS THE SCROLL' : 'SCROLLED PAST';
      b.appendChild(label);
      if (b === btn) b.classList.add(ok ? 'correct-pick' : 'wrong-pick');
      else if (isW) b.classList.add('reveal-lie');
    });

    dom.feedbackResult.textContent = ok ? 'HOOKED!' : 'NOPE!';
    dom.feedbackResult.className = 'feedback-result ' + (ok ? 'correct' : 'wrong');
    dom.feedbackExplain.textContent = round.why;
    showCrowd(round.id);
    dom.feedback.classList.remove('hidden');

    Daily.saveProgress(KEY, {
      day: Daily.getDayNumber(),
      current: state.current + 1,
      score: state.score, streak: state.streak, maxStreak: state.maxStreak, results: state.results
    });
  }

  function nextRound() {
    state.current++;
    if (state.current >= TOTAL_ROUNDS) {
      Daily.clearProgress(KEY);
      endGame();
    } else {
      showRound();
    }
  }

  function renderGameOver(score, correct, results, maxStreak) {
    showScreen('gameover');
    dom.finalScore.textContent = score;
    dom.finalRank.textContent = rankFor(correct);
    dom.finalGrid.textContent = gridOf(results);
    dom.finalStats.innerHTML = correct + ' / ' + TOTAL_ROUNDS + ' winners picked<br>Best streak: ' + maxStreak;
    dom.streakBar.style.setProperty('--progress', '100%');
    startCountdown();
  }

  function endGame() {
    var correct = state.results.filter(Boolean).length;
    lastResult = { correct: correct, grid: gridOf(state.results) };
    Daily.saveDailyResult(KEY, state.score, { correct: correct, results: state.results, maxStreak: state.maxStreak });
    var prev = parseInt(localStorage.getItem('hooked-best') || '0', 10);
    if (state.score > prev) localStorage.setItem('hooked-best', state.score);
    showBest();
    renderGameOver(state.score, correct, state.results, state.maxStreak);
  }

  init();
})();
