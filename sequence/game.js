(function () {
  var TOTAL_ROUNDS = 10;

  var dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnNext: document.getElementById('btn-next'),
    nextCd: document.getElementById('next-cd'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    progressBar: document.getElementById('progress-bar'),
    seqRow: document.getElementById('seq-row'),
    choices: document.getElementById('choices'),
    feedback: document.getElementById('feedback'),
    feedbackResult: document.getElementById('feedback-result'),
    feedbackHint: document.getElementById('feedback-hint'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score')
  };

  var state = {};

  function init() {
    Daily.injectDailyInfo('#title-screen', 'sequence');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnNext.addEventListener('click', nextRound);
    dom.choices.addEventListener('click', handlePick);
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    var b = localStorage.getItem('sequence-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 6199);
    state = {
      rounds: Daily.pick(SEQUENCES, TOTAL_ROUNDS, rng),
      rng: rng,
      current: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      answered: false
    };
    showScreen('game');
    showRound();
  }

  function showRound() {
    var round = state.rounds[state.current];
    state.answered = false;

    dom.roundLabel.textContent = (state.current + 1) + ' / ' + TOTAL_ROUNDS;
    dom.scoreLabel.textContent = state.score;
    dom.progressBar.style.setProperty('--progress', (state.current / TOTAL_ROUNDS * 100) + '%');
    dom.feedback.classList.add('hidden');

    // Build sequence display
    dom.seqRow.innerHTML = '';
    round.seq.forEach(function (val, i) {
      if (i > 0) {
        var arrow = document.createElement('span');
        arrow.className = 'seq-arrow';
        arrow.textContent = ',';
        dom.seqRow.appendChild(arrow);
      }
      var el = document.createElement('div');
      el.className = 'seq-num';
      if (val === '?') {
        el.className += ' mystery';
        el.textContent = '?';
        el.id = 'mystery-cell';
      } else {
        el.textContent = val;
      }
      dom.seqRow.appendChild(el);
    });

    // Build shuffled choices
    var shuffled = Daily.seededShuffle(round.choices.slice(), state.rng);
    dom.choices.innerHTML = '';
    shuffled.forEach(function (val) {
      var btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.dataset.value = val;
      btn.textContent = val;
      dom.choices.appendChild(btn);
    });
  }

  function handlePick(e) {
    var btn = e.target.closest('.choice-btn');
    if (!btn || state.answered) return;
    state.answered = true;

    var round = state.rounds[state.current];
    var picked = parseInt(btn.dataset.value);
    var isCorrect = picked === round.answer;

    if (isCorrect) {
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;
      state.correctCount++;
      var base = 100;
      var streakBonus = Math.min(state.streak - 1, 5) * 20;
      state.score += base + streakBonus;
    } else {
      state.streak = 0;
    }

    dom.scoreLabel.textContent = state.score;

    // Lock all buttons and highlight
    var allBtns = dom.choices.querySelectorAll('.choice-btn');
    allBtns.forEach(function (b) {
      b.classList.add('locked');
      var v = parseInt(b.dataset.value);
      if (v === round.answer && !isCorrect) {
        b.classList.add('correct-reveal');
      }
    });

    if (isCorrect) {
      btn.classList.add('correct-pick');
    } else {
      btn.classList.add('wrong-pick');
    }

    // Update mystery cell
    var mystery = document.getElementById('mystery-cell');
    if (mystery) {
      mystery.textContent = round.answer;
      mystery.classList.add('revealed');
      mystery.classList.add(isCorrect ? 'correct-reveal' : 'wrong-reveal');
    }

    // Feedback
    dom.feedbackResult.textContent = isCorrect ? 'CORRECT!' : 'WRONG';
    dom.feedbackResult.className = 'feedback-result ' + (isCorrect ? 'correct' : 'wrong');
    dom.feedbackHint.textContent = round.hint;
    dom.feedback.classList.remove('hidden');
  }

  function nextRound() {
    state.current++;
    if (state.current >= TOTAL_ROUNDS) {
      endGame();
    } else {
      showRound();
    }
  }

  function endGame() {
    showScreen('gameover');

    dom.finalScore.textContent = state.score;

    var pct = Math.round((state.correctCount / TOTAL_ROUNDS) * 100);
    var rank;
    if (pct >= 100) rank = 'PERFECT SEQUENCE';
    else if (pct >= 80) rank = 'PATTERN MASTER';
    else if (pct >= 60) rank = 'SHARP MIND';
    else if (pct >= 40) rank = 'GETTING THERE';
    else rank = 'KEEP TRYING';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.correctCount + ' / ' + TOTAL_ROUNDS + ' correct (' + pct + '%)<br>' +
      'Best streak: ' + state.maxStreak;

    Daily.saveDailyResult('sequence', state.score);
    var prev = parseInt(localStorage.getItem('sequence-best') || '0');
    if (state.score > prev) {
      localStorage.setItem('sequence-best', state.score);
    }
    showBest();

    dom.progressBar.style.setProperty('--progress', '100%');

    function tickCd() {
      dom.nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW PUZZLE IN</span>' + Daily.formatCountdown();
    }
    tickCd();
    setInterval(tickCd, 1000);
  }

  init();
})();
