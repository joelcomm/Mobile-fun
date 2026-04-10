(function () {
  const TOTAL_ROUNDS = 15;

  const dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnNext: document.getElementById('btn-next'),
    btnReplay: document.getElementById('btn-replay'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    streakBar: document.getElementById('streak-bar'),
    topicLabel: document.getElementById('topic-label'),
    statements: document.getElementById('statements'),
    feedback: document.getElementById('feedback'),
    feedbackResult: document.getElementById('feedback-result'),
    feedbackExplain: document.getElementById('feedback-explain'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score')
  };

  let state = {};

  function init() {
    Daily.injectDailyInfo('#title-screen', 'bluff');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnNext.addEventListener('click', nextRound);
    dom.btnReplay.addEventListener('click', startGame);
    dom.statements.addEventListener('click', handlePick);
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    const b = localStorage.getItem('bluff-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 1013);
    state = {
      rounds: Daily.pick(FACTS, TOTAL_ROUNDS, rng),
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
    const round = state.rounds[state.current];
    state.answered = false;

    dom.roundLabel.textContent = (state.current + 1) + ' / ' + TOTAL_ROUNDS;
    dom.scoreLabel.textContent = state.score;
    dom.streakBar.style.setProperty('--progress', ((state.current) / TOTAL_ROUNDS * 100) + '%');
    dom.topicLabel.textContent = round.topic;
    dom.feedback.classList.add('hidden');

    // Shuffle statement order
    const indices = Daily.seededShuffle([0, 1, 2], state.rng);
    dom.statements.innerHTML = '';
    indices.forEach(i => {
      const s = round.statements[i];
      const btn = document.createElement('button');
      btn.className = 'stmt-btn';
      btn.dataset.index = i;
      btn.textContent = s.text;
      dom.statements.appendChild(btn);
    });
  }

  function handlePick(e) {
    const btn = e.target.closest('.stmt-btn');
    if (!btn || state.answered) return;
    state.answered = true;

    const round = state.rounds[state.current];
    const pickedIndex = parseInt(btn.dataset.index);
    const pickedStatement = round.statements[pickedIndex];
    const isCorrect = !pickedStatement.real;

    // Score
    if (isCorrect) {
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;
      state.correctCount++;
      const base = 100;
      const streakBonus = Math.min(state.streak - 1, 5) * 20;
      state.score += base + streakBonus;
    } else {
      state.streak = 0;
    }

    dom.scoreLabel.textContent = state.score;

    // Highlight buttons
    const allBtns = dom.statements.querySelectorAll('.stmt-btn');
    allBtns.forEach(b => {
      const idx = parseInt(b.dataset.index);
      const stmt = round.statements[idx];
      b.classList.add('locked');

      const label = document.createElement('span');
      label.className = 'stmt-label ' + (stmt.real ? 'true-label' : 'false-label');
      label.textContent = stmt.real ? 'TRUE' : 'THE BLUFF';
      b.appendChild(label);

      if (b === btn) {
        b.classList.add(isCorrect ? 'correct-pick' : 'wrong-pick');
      } else if (!stmt.real) {
        b.classList.add('reveal-lie');
      }
    });

    // Feedback
    dom.feedbackResult.textContent = isCorrect ? 'CORRECT!' : 'WRONG!';
    dom.feedbackResult.className = 'feedback-result ' + (isCorrect ? 'correct' : 'wrong');
    dom.feedbackExplain.textContent = round.explanation;
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

    const pct = Math.round((state.correctCount / TOTAL_ROUNDS) * 100);
    let rank;
    if (pct >= 93) rank = 'HUMAN LIE DETECTOR';
    else if (pct >= 80) rank = 'BLUFF MASTER';
    else if (pct >= 67) rank = 'SHARP EYE';
    else if (pct >= 47) rank = 'GETTING WARMER';
    else rank = 'GULLIBLE';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.correctCount + ' / ' + TOTAL_ROUNDS + ' correct (' + pct + '%)<br>' +
      'Best streak: ' + state.maxStreak;

    Daily.saveDailyResult('bluff', state.score);
    const prev = parseInt(localStorage.getItem('bluff-best') || '0');
    if (state.score > prev) {
      localStorage.setItem('bluff-best', state.score);
    }
    showBest();

    dom.streakBar.style.setProperty('--progress', '100%');
  }

  init();
})();
