(function () {
  const MAX_LIVES = 3;
  const BASE_TIME = 4000; // ms per word
  const MIN_TIME = 1500;
  const SPEEDUP = 80; // ms faster each word

  const dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnLeft: document.getElementById('btn-left'),
    btnRight: document.getElementById('btn-right'),
    btnReplay: document.getElementById('btn-replay'),
    labelLeft: document.getElementById('label-left'),
    labelRight: document.getElementById('label-right'),
    scoreLabel: document.getElementById('score-label'),
    livesLabel: document.getElementById('lives-label'),
    timerFill: document.getElementById('timer-fill'),
    categoryHint: document.getElementById('category-hint'),
    wordDisplay: document.getElementById('word-display'),
    flashFeedback: document.getElementById('flash-feedback'),
    streakLabel: document.getElementById('streak-label'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score')
  };

  let state = {};
  let timerRaf = null;

  function init() {
    Daily.injectDailyInfo('#title-screen', 'reflex');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnReplay.addEventListener('click', startGame);
    dom.btnLeft.addEventListener('click', function () { answer('left'); });
    dom.btnRight.addEventListener('click', function () { answer('right'); });
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    const b = localStorage.getItem('reflex-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 6067);
    state = {
      score: 0,
      lives: MAX_LIVES,
      streak: 0,
      maxStreak: 0,
      wordsAnswered: 0,
      categoriesUsed: 0,
      wordQueue: [],
      currentWord: null,
      currentCategory: null,
      answered: false,
      timeLimit: BASE_TIME,
      rng: rng,
      categoryOrder: Daily.seededShuffle([...CATEGORIES], rng),
      categoryIdx: 0
    };

    showScreen('game');
    loadNextCategory();
  }

  function loadNextCategory() {
    const cat = state.categoryOrder[state.categoryIdx % state.categoryOrder.length];
    state.categoryIdx++;
    state.currentCategory = cat;
    state.wordQueue = Daily.seededShuffle([...cat.words], state.rng);
    state.categoriesUsed++;

    dom.labelLeft.textContent = cat.left;
    dom.labelRight.textContent = cat.right;
    dom.categoryHint.textContent = cat.left + ' or ' + cat.right + '?';

    showNextWord();
  }

  function showNextWord() {
    if (state.wordQueue.length === 0) {
      loadNextCategory();
      return;
    }

    state.currentWord = state.wordQueue.pop();
    state.answered = false;

    dom.wordDisplay.textContent = state.currentWord.text;
    dom.wordDisplay.className = 'word-display pop-in';
    dom.flashFeedback.textContent = '';
    dom.flashFeedback.style.color = '';

    updateHUD();
    startTimer();
  }

  function updateHUD() {
    dom.scoreLabel.textContent = state.score;
    let hearts = '';
    for (let i = 0; i < MAX_LIVES; i++) {
      hearts += i < state.lives ? '\u2764\uFE0F' : '\u{1F5A4}';
    }
    dom.livesLabel.textContent = hearts;
    dom.streakLabel.textContent = state.streak > 1 ? 'STREAK: ' + state.streak : '';
  }

  function startTimer() {
    const start = performance.now();
    const duration = state.timeLimit;

    dom.timerFill.style.transition = 'none';
    dom.timerFill.style.width = '100%';
    dom.timerFill.classList.remove('urgent');

    cancelAnimationFrame(timerRaf);

    function tick(now) {
      if (state.answered) return;
      const elapsed = now - start;
      const pct = Math.max(0, 1 - elapsed / duration) * 100;
      dom.timerFill.style.width = pct + '%';

      if (pct < 30) dom.timerFill.classList.add('urgent');

      if (elapsed >= duration) {
        // Time's up
        timeOut();
        return;
      }
      timerRaf = requestAnimationFrame(tick);
    }

    timerRaf = requestAnimationFrame(tick);
  }

  function timeOut() {
    if (state.answered) return;
    state.answered = true;
    state.lives--;
    state.streak = 0;

    dom.wordDisplay.className = 'word-display wrong-word';
    dom.flashFeedback.textContent = 'TOO SLOW!';
    dom.flashFeedback.style.color = '#e84057';

    updateHUD();

    if (state.lives <= 0) {
      setTimeout(endGame, 800);
    } else {
      setTimeout(showNextWord, 800);
    }
  }

  function answer(side) {
    if (state.answered) return;
    state.answered = true;
    cancelAnimationFrame(timerRaf);

    const correct = state.currentWord.side === side;

    if (correct) {
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;
      state.wordsAnswered++;

      const streakBonus = Math.min(state.streak - 1, 5) * 5;
      state.score += 10 + streakBonus;

      dom.wordDisplay.className = 'word-display correct-word';
      dom.flashFeedback.textContent = '+' + (10 + streakBonus);
      dom.flashFeedback.style.color = '#3ecf72';

      // Speed up
      state.timeLimit = Math.max(MIN_TIME, state.timeLimit - SPEEDUP);
    } else {
      state.lives--;
      state.streak = 0;

      dom.wordDisplay.className = 'word-display wrong-word';
      dom.flashFeedback.textContent = 'WRONG';
      dom.flashFeedback.style.color = '#e84057';
    }

    updateHUD();

    if (state.lives <= 0) {
      setTimeout(endGame, 800);
    } else {
      setTimeout(showNextWord, 500);
    }
  }

  function endGame() {
    cancelAnimationFrame(timerRaf);
    showScreen('gameover');

    dom.finalScore.textContent = state.score;

    let rank;
    if (state.score >= 300) rank = 'LIGHTNING FAST';
    else if (state.score >= 200) rank = 'QUICK THINKER';
    else if (state.score >= 120) rank = 'SOLID REFLEXES';
    else if (state.score >= 60) rank = 'WARMING UP';
    else rank = 'SLOW STARTER';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.wordsAnswered + ' words sorted correctly<br>' +
      'Best streak: ' + state.maxStreak + '<br>' +
      state.categoriesUsed + ' categories played';

    Daily.saveDailyResult('reflex', state.score);
    const prev = parseInt(localStorage.getItem('reflex-best') || '0');
    if (state.score > prev) localStorage.setItem('reflex-best', state.score);
    showBest();
  }

  init();
})();
