(function () {
  const TILE_COUNT = 6;
  const START_LENGTH = 3;
  const FLASH_ON = 500;
  const FLASH_OFF = 300;

  const dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    nextCd: document.getElementById('next-cd'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    statusLabel: document.getElementById('status-label'),
    tileGrid: document.getElementById('tile-grid'),
    inputDots: document.getElementById('input-dots'),
    hintLabel: document.getElementById('hint-label'),
    finalRound: document.getElementById('final-round'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    bestScore: document.getElementById('best-score')
  };

  const tiles = dom.tileGrid.querySelectorAll('.tile');
  let state = {};

  function init() {
    Daily.injectDailyInfo('#title-screen', 'echo');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.tileGrid.addEventListener('click', handleTap);
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    const b = localStorage.getItem('echo-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b + ' pts';
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 3037);
    state = {
      round: 1,
      score: 0,
      seqLength: START_LENGTH,
      sequence: [],
      reversed: [],
      inputIndex: 0,
      phase: 'idle',
      rng: rng
    };
    showScreen('game');
    startRound();
  }

  function startRound() {
    state.phase = 'showing';
    state.inputIndex = 0;

    // Generate sequence
    state.sequence = [];
    for (let i = 0; i < state.seqLength; i++) {
      state.sequence.push(Math.floor(state.rng() * TILE_COUNT));
    }
    state.reversed = [...state.sequence].reverse();

    dom.roundLabel.textContent = 'ROUND ' + state.round;
    dom.scoreLabel.textContent = state.score;
    dom.statusLabel.textContent = 'WATCH';
    dom.statusLabel.className = 'status-label watching';
    dom.hintLabel.textContent = state.seqLength + ' tiles — remember the reverse!';
    setTilesDisabled(true);
    renderDots();

    // Flash sequence
    let i = 0;
    function flashNext() {
      if (i >= state.sequence.length) {
        // Done showing — player's turn
        setTimeout(() => {
          state.phase = 'input';
          dom.statusLabel.textContent = 'YOUR TURN — REVERSE ORDER';
          dom.statusLabel.className = 'status-label your-turn';
          dom.hintLabel.textContent = 'Tap tile ' + (state.inputIndex + 1) + ' of ' + state.seqLength;
          setTilesDisabled(false);
        }, 400);
        return;
      }
      const tileIdx = state.sequence[i];
      flashTile(tileIdx, FLASH_ON, () => {
        i++;
        setTimeout(flashNext, FLASH_OFF);
      });
    }

    setTimeout(flashNext, 600);
  }

  function flashTile(idx, duration, cb) {
    const tile = tiles[idx];
    tile.classList.add('flash-' + idx);
    setTimeout(() => {
      tile.classList.remove('flash-' + idx);
      if (cb) setTimeout(cb, 50);
    }, duration);
  }

  function setTilesDisabled(disabled) {
    tiles.forEach(t => {
      if (disabled) t.classList.add('disabled');
      else t.classList.remove('disabled');
    });
  }

  function renderDots() {
    dom.inputDots.innerHTML = '';
    for (let i = 0; i < state.seqLength; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot';
      if (i < state.inputIndex) dot.classList.add('filled');
      dom.inputDots.appendChild(dot);
    }
  }

  function handleTap(e) {
    const tile = e.target.closest('.tile');
    if (!tile || state.phase !== 'input') return;

    const tapped = parseInt(tile.dataset.tile);
    const expected = state.reversed[state.inputIndex];

    if (tapped === expected) {
      // Correct
      tile.classList.add('correct-flash');
      setTimeout(() => tile.classList.remove('correct-flash'), 200);

      state.inputIndex++;
      renderDots();
      const dots = dom.inputDots.querySelectorAll('.dot');
      if (dots[state.inputIndex - 1]) dots[state.inputIndex - 1].classList.add('correct-dot');

      dom.hintLabel.textContent = 'Tap tile ' + (state.inputIndex + 1) + ' of ' + state.seqLength;

      if (state.inputIndex >= state.seqLength) {
        // Round complete!
        state.phase = 'result';
        setTilesDisabled(true);

        const roundPoints = state.seqLength * 50;
        state.score += roundPoints;
        dom.scoreLabel.textContent = state.score;

        dom.statusLabel.textContent = 'PERFECT! +' + roundPoints;
        dom.statusLabel.className = 'status-label correct';
        dom.hintLabel.textContent = '';

        // Fill all dots
        dom.inputDots.querySelectorAll('.dot').forEach(d => d.classList.add('correct-dot'));

        setTimeout(() => {
          state.round++;
          state.seqLength++;
          startRound();
        }, 1500);
      }
    } else {
      // Wrong
      state.phase = 'result';
      tile.classList.add('wrong-flash');
      setTimeout(() => tile.classList.remove('wrong-flash'), 400);

      setTilesDisabled(true);
      dom.statusLabel.textContent = 'WRONG!';
      dom.statusLabel.className = 'status-label wrong';

      const dots = dom.inputDots.querySelectorAll('.dot');
      if (dots[state.inputIndex]) dots[state.inputIndex].classList.add('wrong-dot');

      // Flash correct tile
      setTimeout(() => {
        flashTile(expected, 600, () => {
          dom.hintLabel.textContent = 'The next tile was ' + getColorName(expected);
          setTimeout(endGame, 1200);
        });
      }, 500);
    }
  }

  function getColorName(idx) {
    return ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'][idx];
  }

  function endGame() {
    showScreen('gameover');
    dom.finalRound.textContent = 'Reached Round ' + state.round;
    dom.finalScore.textContent = state.score;

    let rank;
    if (state.round >= 15) rank = 'ECHO MASTER';
    else if (state.round >= 10) rank = 'SHARP MEMORY';
    else if (state.round >= 7) rank = 'GETTING THERE';
    else if (state.round >= 4) rank = 'WARMING UP';
    else rank = 'KEEP PRACTICING';

    dom.finalRank.textContent = rank;

    Daily.saveDailyResult('echo', state.score);
    const prev = parseInt(localStorage.getItem('echo-best') || '0');
    if (state.score > prev) localStorage.setItem('echo-best', state.score);
    showBest();

    function tickCd() {
      dom.nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW PUZZLE IN</span>' + Daily.formatCountdown();
    }
    tickCd();
    setInterval(tickCd, 1000);
  }

  init();
})();
