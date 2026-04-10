(function () {
  const TOTAL_ROUNDS = 15;
  var revealInterval = 1200; // ms between letters, set by difficulty

  const dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnNext: document.getElementById('btn-next'),
    nextPuzzleCd: document.getElementById('next-puzzle-cd'),
    btnGuess: document.getElementById('btn-guess'),
    guessInput: document.getElementById('guess-input'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    progressBar: document.getElementById('progress-bar'),
    hintLabel: document.getElementById('hint-label'),
    letterDisplay: document.getElementById('letter-display'),
    guessArea: document.getElementById('guess-area'),
    feedback: document.getElementById('feedback'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackWord: document.getElementById('feedback-word'),
    feedbackPts: document.getElementById('feedback-pts'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score')
  };

  let state = {};
  let revealTimer = null;

  function init() {
    Daily.injectDailyInfo('#title-screen', 'drift');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnNext.addEventListener('click', nextRound);
    dom.btnGuess.addEventListener('click', submitGuess);
    dom.guessInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') submitGuess();
    });

    // Difficulty picker
    var diffBtns = document.querySelectorAll('.diff-btn');
    diffBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        diffBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        revealInterval = parseInt(btn.getAttribute('data-speed'));
      });
    });
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    const b = localStorage.getItem('drift-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 4049);
    state = {
      words: Daily.pick(WORDS, TOTAL_ROUNDS, rng),
      current: 0,
      score: 0,
      correctCount: 0,
      earlyGuesses: 0
    };
    showScreen('game');
    showRound();
  }

  function showRound() {
    const round = state.words[state.current];
    state.word = round.word.toUpperCase();
    state.revealed = 0;
    state.done = false;

    dom.roundLabel.textContent = (state.current + 1) + ' / ' + TOTAL_ROUNDS;
    dom.scoreLabel.textContent = state.score;
    dom.progressBar.style.setProperty('--progress', (state.current / TOTAL_ROUNDS * 100) + '%');
    dom.hintLabel.textContent = 'Hint: ' + round.hint;
    dom.feedback.classList.add('hidden');
    dom.guessArea.style.display = 'flex';
    dom.guessInput.value = '';
    dom.guessInput.disabled = false;
    dom.guessInput.focus();

    // Build letter boxes
    dom.letterDisplay.innerHTML = '';
    for (let i = 0; i < state.word.length; i++) {
      const box = document.createElement('div');
      box.className = 'letter-box';
      box.textContent = '';
      dom.letterDisplay.appendChild(box);
    }

    // Start revealing
    revealNext();
  }

  function revealNext() {
    if (state.done || state.revealed >= state.word.length) {
      // All revealed — auto-fail if not guessed
      if (!state.done) {
        state.done = true;
        showFeedback(false, 0);
      }
      return;
    }

    // Reveal one letter
    const boxes = dom.letterDisplay.querySelectorAll('.letter-box');
    boxes[state.revealed].textContent = state.word[state.revealed];
    boxes[state.revealed].classList.add('revealed');
    state.revealed++;

    revealTimer = setTimeout(revealNext, revealInterval);
  }

  function submitGuess() {
    if (state.done) return;
    const guess = dom.guessInput.value.trim().toUpperCase();
    if (!guess) return;

    state.done = true;
    clearTimeout(revealTimer);

    const correct = guess === state.word;
    let pts = 0;

    if (correct) {
      state.correctCount++;
      const lettersShown = state.revealed;
      const total = state.word.length;
      // More points for fewer letters revealed
      const ratio = 1 - (lettersShown / total);
      pts = Math.round(50 + ratio * 150); // 50-200 pts
      if (lettersShown <= 2) state.earlyGuesses++;
      state.score += pts;
    }

    // Reveal all letters
    const boxes = dom.letterDisplay.querySelectorAll('.letter-box');
    for (let i = state.revealed; i < state.word.length; i++) {
      boxes[i].textContent = state.word[i];
    }

    showFeedback(correct, pts);
  }

  function showFeedback(correct, pts) {
    dom.guessInput.disabled = true;
    dom.guessArea.style.display = 'none';

    const boxes = dom.letterDisplay.querySelectorAll('.letter-box');
    boxes.forEach(b => {
      b.classList.remove('revealed');
      b.classList.add(correct ? 'all-correct' : 'all-wrong');
    });

    dom.feedbackText.textContent = correct ? 'CORRECT!' : 'MISSED!';
    dom.feedbackText.className = 'feedback-text ' + (correct ? 'correct' : 'wrong');
    dom.feedbackWord.textContent = state.word;
    dom.feedbackPts.textContent = correct
      ? '+' + pts + ' pts (' + state.revealed + '/' + state.word.length + ' letters shown)'
      : 'The word was ' + state.word;
    dom.feedback.classList.remove('hidden');
    dom.scoreLabel.textContent = state.score;
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
    if (pct >= 93) rank = 'WORD PSYCHIC';
    else if (pct >= 80) rank = 'QUICK THINKER';
    else if (pct >= 60) rank = 'SHARP EYE';
    else if (pct >= 40) rank = 'WARMING UP';
    else rank = 'KEEP DRIFTING';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.correctCount + ' / ' + TOTAL_ROUNDS + ' correct<br>' +
      state.earlyGuesses + ' early guesses (\u2264 2 letters)';

    Daily.saveDailyResult('drift', state.score);
    const prev = parseInt(localStorage.getItem('drift-best') || '0');
    if (state.score > prev) localStorage.setItem('drift-best', state.score);
    showBest();

    // Countdown to next puzzle
    function tickCd() {
      dom.nextPuzzleCd.innerHTML =
        '<span class="cd-label">NEW PUZZLE IN</span>' +
        '<span class="cd-time">' + Daily.formatCountdown() + '</span>';
    }
    tickCd();
    setInterval(tickCd, 1000);
  }

  init();
})();
