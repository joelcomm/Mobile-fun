(function () {
  const TOTAL_ROUNDS = 10;
  const MAX_HINTS = 3;

  const dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnCheck: document.getElementById('btn-check'),
    btnHint: document.getElementById('btn-hint'),
    btnNext: document.getElementById('btn-next'),
    nextCd: document.getElementById('next-cd'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    progressBar: document.getElementById('progress-bar'),
    cipherDisplay: document.getElementById('cipher-display'),
    authorLabel: document.getElementById('author-label'),
    selectedInfo: document.getElementById('selected-info'),
    letterPicker: document.getElementById('letter-picker'),
    roundFeedback: document.getElementById('round-feedback'),
    rfText: document.getElementById('rf-text'),
    rfQuote: document.getElementById('rf-quote'),
    rfPts: document.getElementById('rf-pts'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score'),
    gameActions: document.querySelector('.game-actions')
  };

  let state = {};

  function init() {
    Daily.injectDailyInfo('#title-screen', 'cipher');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnCheck.addEventListener('click', checkSolution);
    dom.btnHint.addEventListener('click', useHint);
    dom.btnNext.addEventListener('click', nextRound);
    dom.cipherDisplay.addEventListener('click', onCipherClick);
    dom.letterPicker.addEventListener('click', onPickerClick);
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    const b = localStorage.getItem('cipher-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function generateCipherMap(text, rng) {
    // Get unique letters in the text
    const letters = [];
    for (const ch of text.toUpperCase()) {
      if (/[A-Z]/.test(ch) && !letters.includes(ch)) letters.push(ch);
    }

    // Create shuffled mapping ensuring no letter maps to itself
    let shuffled;
    do {
      shuffled = Daily.seededShuffle([...letters], rng);
    } while (shuffled.some((ch, i) => ch === letters[i]));

    const map = {};
    const reverseMap = {};
    letters.forEach((ch, i) => {
      map[ch] = shuffled[i];
      reverseMap[shuffled[i]] = ch;
    });

    return { map, reverseMap };
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 5059);
    state = {
      quotes: Daily.pick(QUOTES, TOTAL_ROUNDS, rng),
      dailyRng: rng,
      current: 0,
      score: 0,
      solvedCount: 0,
      hintsUsedTotal: 0,
      noHintSolves: 0
    };
    showScreen('game');
    showRound();
  }

  function showRound() {
    const quote = state.quotes[state.current];
    const { map, reverseMap } = generateCipherMap(quote.text, state.dailyRng);
    state.cipherMap = map;         // original -> cipher
    state.reverseMap = reverseMap; // cipher -> original
    state.playerMap = {};          // cipher -> player's guess
    state.lockedLetters = {};      // cipher letters that are locked (from hints)
    state.selectedCipher = null;
    state.hintsUsed = 0;
    state.roundDone = false;

    // Encode the text
    state.originalText = quote.text.toUpperCase();
    state.encodedText = '';
    for (const ch of state.originalText) {
      if (/[A-Z]/.test(ch)) {
        state.encodedText += map[ch];
      } else {
        state.encodedText += ch;
      }
    }

    dom.roundLabel.textContent = (state.current + 1) + ' / ' + TOTAL_ROUNDS;
    dom.scoreLabel.textContent = state.score;
    dom.progressBar.style.setProperty('--progress', (state.current / TOTAL_ROUNDS * 100) + '%');
    dom.authorLabel.textContent = '— ' + quote.author;
    dom.selectedInfo.textContent = '';
    dom.roundFeedback.classList.add('hidden');
    dom.gameActions.style.display = 'flex';
    dom.btnHint.disabled = false;
    dom.btnHint.textContent = 'HINT (' + (MAX_HINTS - state.hintsUsed) + ')';

    renderCipher();
    renderPicker();
  }

  function renderCipher() {
    dom.cipherDisplay.innerHTML = '';

    // Split into words
    const words = state.encodedText.split(' ');
    const origWords = state.originalText.split(' ');

    words.forEach((word, wi) => {
      const wordEl = document.createElement('span');
      wordEl.className = 'cipher-word';

      for (let i = 0; i < word.length; i++) {
        const coded = word[i];
        if (/[A-Z]/.test(coded)) {
          const charEl = document.createElement('span');
          charEl.className = 'cipher-char';
          if (state.lockedLetters[coded]) charEl.classList.add('locked');
          if (state.selectedCipher === coded) charEl.classList.add('selected');
          charEl.dataset.cipher = coded;

          const codedEl = document.createElement('span');
          codedEl.className = 'cipher-coded';
          codedEl.textContent = coded;

          const decodedEl = document.createElement('span');
          decodedEl.className = 'cipher-decoded';
          decodedEl.textContent = state.playerMap[coded] || state.lockedLetters[coded] || '';

          charEl.appendChild(decodedEl);
          charEl.appendChild(codedEl);
          wordEl.appendChild(charEl);
        } else {
          const punctEl = document.createElement('span');
          punctEl.className = 'cipher-punct';
          punctEl.textContent = coded;
          wordEl.appendChild(punctEl);
        }
      }

      dom.cipherDisplay.appendChild(wordEl);
    });
  }

  function renderPicker() {
    dom.letterPicker.innerHTML = '';
    const usedLetters = Object.values(state.playerMap);
    const lockedValues = Object.values(state.lockedLetters);

    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
      const btn = document.createElement('button');
      btn.className = 'pick-btn';
      btn.dataset.letter = letter;
      btn.textContent = letter;
      if (usedLetters.includes(letter) || lockedValues.includes(letter)) {
        btn.classList.add('used');
      }
      dom.letterPicker.appendChild(btn);
    });
  }

  function onCipherClick(e) {
    const charEl = e.target.closest('.cipher-char');
    if (!charEl || state.roundDone) return;
    const cipher = charEl.dataset.cipher;
    if (state.lockedLetters[cipher]) return; // locked by hint

    if (state.selectedCipher === cipher) {
      // Deselect — clear mapping
      state.selectedCipher = null;
      delete state.playerMap[cipher];
      dom.selectedInfo.textContent = '';
    } else {
      state.selectedCipher = cipher;
      dom.selectedInfo.textContent = 'Replace ' + cipher + ' with...';
    }

    renderCipher();
    renderPicker();
  }

  function onPickerClick(e) {
    const btn = e.target.closest('.pick-btn');
    if (!btn || state.roundDone || !state.selectedCipher) return;

    const letter = btn.dataset.letter;

    // Remove any existing mapping that uses this letter
    for (const key in state.playerMap) {
      if (state.playerMap[key] === letter) {
        delete state.playerMap[key];
      }
    }

    state.playerMap[state.selectedCipher] = letter;
    state.selectedCipher = null;
    dom.selectedInfo.textContent = '';

    renderCipher();
    renderPicker();
  }

  function checkSolution() {
    if (state.roundDone) return;

    // Check if all letters are mapped correctly
    let allCorrect = true;
    let allFilled = true;

    const cipherLetters = new Set();
    for (const ch of state.encodedText) {
      if (/[A-Z]/.test(ch)) cipherLetters.add(ch);
    }

    for (const cipher of cipherLetters) {
      const expected = state.reverseMap[cipher];
      const guessed = state.playerMap[cipher] || state.lockedLetters[cipher];
      if (!guessed) { allFilled = false; allCorrect = false; break; }
      if (guessed !== expected) { allCorrect = false; }
    }

    if (!allFilled) {
      dom.selectedInfo.textContent = 'Fill in all letters first!';
      setTimeout(() => { if (!state.roundDone) dom.selectedInfo.textContent = ''; }, 2000);
      return;
    }

    state.roundDone = true;
    dom.gameActions.style.display = 'none';

    if (allCorrect) {
      state.solvedCount++;
      const hintPenalty = state.hintsUsed * 30;
      const pts = Math.max(50, 200 - hintPenalty);
      state.score += pts;
      if (state.hintsUsed === 0) state.noHintSolves++;

      // Show correct
      dom.cipherDisplay.querySelectorAll('.cipher-char').forEach(el => {
        el.classList.add('correct-char');
      });

      dom.rfText.textContent = 'DECODED!';
      dom.rfText.className = 'rf-text correct';
      dom.rfPts.textContent = '+' + pts + ' pts' + (state.hintsUsed > 0 ? ' (' + state.hintsUsed + ' hints used)' : ' (no hints!)');
    } else {
      // Show the correct answer
      const chars = dom.cipherDisplay.querySelectorAll('.cipher-char');
      chars.forEach(el => {
        const cipher = el.dataset.cipher;
        const decoded = el.querySelector('.cipher-decoded');
        decoded.textContent = state.reverseMap[cipher];
      });

      dom.rfText.textContent = 'NOT QUITE';
      dom.rfText.className = 'rf-text wrong';
      dom.rfPts.textContent = '0 pts';
    }

    const q = state.quotes[state.current];
    dom.rfQuote.textContent = '"' + q.text + '"';
    dom.roundFeedback.classList.remove('hidden');
    dom.scoreLabel.textContent = state.score;
  }

  function useHint() {
    if (state.roundDone || state.hintsUsed >= MAX_HINTS) return;

    // Find an unrevealed cipher letter
    const cipherLetters = new Set();
    for (const ch of state.encodedText) {
      if (/[A-Z]/.test(ch)) cipherLetters.add(ch);
    }

    const unrevealed = [...cipherLetters].filter(
      c => !state.lockedLetters[c]
    );

    if (unrevealed.length === 0) return;

    const pick = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    state.lockedLetters[pick] = state.reverseMap[pick];
    delete state.playerMap[pick]; // Remove player guess if any

    state.hintsUsed++;
    state.hintsUsedTotal++;

    dom.btnHint.textContent = 'HINT (' + (MAX_HINTS - state.hintsUsed) + ')';
    if (state.hintsUsed >= MAX_HINTS) dom.btnHint.disabled = true;

    if (state.selectedCipher === pick) {
      state.selectedCipher = null;
      dom.selectedInfo.textContent = '';
    }

    renderCipher();
    renderPicker();
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

    const pct = Math.round((state.solvedCount / TOTAL_ROUNDS) * 100);
    let rank;
    if (pct >= 90) rank = 'CODEBREAKER';
    else if (pct >= 70) rank = 'CRYPTOGRAPHER';
    else if (pct >= 50) rank = 'PUZZLE SOLVER';
    else if (pct >= 30) rank = 'APPRENTICE';
    else rank = 'STILL ENCRYPTED';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.solvedCount + ' / ' + TOTAL_ROUNDS + ' decoded<br>' +
      state.noHintSolves + ' solved without hints<br>' +
      state.hintsUsedTotal + ' total hints used';

    Daily.saveDailyResult('cipher', state.score);
    const prev = parseInt(localStorage.getItem('cipher-best') || '0');
    if (state.score > prev) localStorage.setItem('cipher-best', state.score);
    showBest();

    function tickCd() {
      dom.nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW PUZZLE IN</span>' + Daily.formatCountdown();
    }
    tickCd();
    setInterval(tickCd, 1000);
  }

  init();
})();
