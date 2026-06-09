(function () {
  var TOTAL_ROUNDS = 5;

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
    wordGrid: document.getElementById('word-grid'),
    feedback: document.getElementById('feedback'),
    fbResult: document.getElementById('fb-result'),
    fbCategory: document.getElementById('fb-category'),
    fbExplain: document.getElementById('fb-explain'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score')
  };

  var state = {};

  function init() {
    Daily.injectDailyInfo('#title-screen', 'alibi');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnNext.addEventListener('click', nextRound);
    dom.wordGrid.addEventListener('click', handlePick);

    var completed = Daily.getDailyResult('alibi');
    if (completed) {
      dom.finalScore.textContent = completed.score;
      dom.finalRank.textContent = completed.rank || '';
      dom.finalStats.innerHTML = completed.stats || '';
      dom.progressBar.style.setProperty('--progress', '100%');
      showScreen('gameover');
      function tickCd() {
        dom.nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW PUZZLE IN</span>' + Daily.formatCountdown();
      }
      tickCd();
      setInterval(tickCd, 1000);
    }
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    var b = localStorage.getItem('alibi-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 9091);
    state = {
      rounds: Daily.dealFromDeck(ALIBI_PUZZLES, TOTAL_ROUNDS),
      rng: rng,
      current: 0,
      score: 0,
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

    // Build 9 words: 8 alibi + 1 culprit, shuffled
    var wordsNeeded = Math.min(8, round.words.length);
    var alibiWords = Daily.pick(round.words, wordsNeeded, state.rng);
    var allWords = alibiWords.concat([round.culprit]);
    var shuffled = Daily.seededShuffle(allWords, state.rng);

    dom.wordGrid.innerHTML = '';
    shuffled.forEach(function (word) {
      var btn = document.createElement('button');
      btn.className = 'word-btn';
      btn.dataset.word = word;
      btn.dataset.isCulprit = word === round.culprit ? '1' : '0';
      btn.textContent = word;
      dom.wordGrid.appendChild(btn);
    });
  }

  function handlePick(e) {
    var btn = e.target.closest('.word-btn');
    if (!btn || state.answered) return;
    state.answered = true;

    var round = state.rounds[state.current];
    var isCulprit = btn.dataset.isCulprit === '1';

    if (isCulprit) {
      state.correctCount++;
      state.score += 100;
      btn.classList.add('correct-pick');
      dom.fbResult.textContent = 'CAUGHT!';
      dom.fbResult.className = 'fb-result correct';
    } else {
      btn.classList.add('wrong-pick');
      dom.fbResult.textContent = 'WRONG!';
      dom.fbResult.className = 'fb-result wrong';
    }

    // Lock all buttons and highlight
    var btns = dom.wordGrid.querySelectorAll('.word-btn');
    btns.forEach(function (b) {
      b.classList.add('locked');
      if (b.dataset.isCulprit === '0') {
        b.classList.add('alibi-word');
      } else if (!isCulprit) {
        b.classList.add('revealed-culprit');
      }
    });

    dom.fbCategory.textContent = 'Alibi: ' + round.category;
    dom.fbExplain.textContent = round.culprit + ' — ' + round.culpritHint;
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

    var pct = Math.round((state.correctCount / TOTAL_ROUNDS) * 100);
    var rank;
    if (pct >= 90) rank = 'CHIEF DETECTIVE';
    else if (pct >= 70) rank = 'INVESTIGATOR';
    else if (pct >= 50) rank = 'OFFICER';
    else if (pct >= 30) rank = 'ROOKIE';
    else rank = 'SUSPECT';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.correctCount + ' / ' + TOTAL_ROUNDS + ' culprits caught (' + pct + '%)';

    Daily.saveDailyResult('alibi', state.score, {
      rank: rank,
      stats: dom.finalStats.innerHTML
    });
    var prev = parseInt(localStorage.getItem('alibi-best') || '0');
    if (state.score > prev) localStorage.setItem('alibi-best', state.score);
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
