(function () {
  const ROUNDS = 10;
  const MAX_ATTEMPTS = 3;

  const dom = {
    titleScreen: document.getElementById('title-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    btnStart: document.getElementById('btn-start'),
    btnLock: document.getElementById('btn-lock'),
    btnNextRound: document.getElementById('btn-next-round'),
    btnReplay: document.getElementById('btn-replay'),
    roundLabel: document.getElementById('round-label'),
    scoreLabel: document.getElementById('score-label'),
    progressBar: document.getElementById('progress-bar'),
    categoryLabel: document.getElementById('category-label'),
    instructionLabel: document.getElementById('instruction-label'),
    attemptsLabel: document.getElementById('attempts-label'),
    sortableList: document.getElementById('sortable-list'),
    roundFeedback: document.getElementById('round-feedback'),
    rfText: document.getElementById('rf-text'),
    rfCorrectOrder: document.getElementById('rf-correct-order'),
    finalScore: document.getElementById('final-score'),
    finalRank: document.getElementById('final-rank'),
    finalStats: document.getElementById('final-stats'),
    bestScore: document.getElementById('best-score')
  };

  let state = {};
  let dragState = null;

  function init() {
    Daily.injectDailyInfo('#title-screen', 'lineup');
    showBest();
    dom.btnStart.addEventListener('click', startGame);
    dom.btnLock.addEventListener('click', lockIn);
    dom.btnNextRound.addEventListener('click', nextRound);
    dom.btnReplay.addEventListener('click', startGame);
    setupDrag();
  }

  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    const b = localStorage.getItem('lineup-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b;
  }

  function startGame() {
    var rng = Daily.createRng(Daily.getDayNumber() * 2027);
    state = {
      puzzles: Daily.pick(PUZZLES, ROUNDS, rng),
      rng: rng,
      current: 0,
      score: 0,
      perfectCount: 0,
      totalAttempts: 0
    };
    showScreen('game');
    showRound();
  }

  function showRound() {
    const puzzle = state.puzzles[state.current];
    state.attempts = 0;
    state.locked = false;

    dom.roundLabel.textContent = (state.current + 1) + ' / ' + ROUNDS;
    dom.scoreLabel.textContent = state.score;
    dom.progressBar.style.setProperty('--progress', (state.current / ROUNDS * 100) + '%');
    dom.categoryLabel.textContent = puzzle.category;
    dom.instructionLabel.textContent = puzzle.instruction;
    dom.roundFeedback.classList.add('hidden');
    dom.btnLock.classList.remove('hidden');
    dom.btnLock.disabled = false;
    updateAttempts();

    // Create shuffled items
    const sorted = puzzle.items.slice().sort((a, b) => a.value - b.value);
    state.correctOrder = sorted.map(item => item.label);

    const shuffledItems = Daily.seededShuffle(puzzle.items.slice(), state.rng);
    renderList(shuffledItems.map(item => item.label));
  }

  function renderList(labels) {
    dom.sortableList.innerHTML = '';
    labels.forEach((label, i) => {
      const el = document.createElement('div');
      el.className = 'sort-item';
      el.dataset.label = label;
      el.innerHTML =
        '<div class="sort-num">' + (i + 1) + '</div>' +
        '<div class="sort-label">' + label + '</div>' +
        '<div class="sort-handle">&#x2630;</div>';
      dom.sortableList.appendChild(el);
    });
  }

  function updateAttempts() {
    const remaining = MAX_ATTEMPTS - state.attempts;
    let dots = '';
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      dots += i < remaining ? '&#x25CF; ' : '&#x25CB; ';
    }
    dom.attemptsLabel.innerHTML = 'Attempts: ' + dots;
  }

  function getCurrentOrder() {
    return Array.from(dom.sortableList.querySelectorAll('.sort-item')).map(el => el.dataset.label);
  }

  function lockIn() {
    if (state.locked) return;
    state.attempts++;
    state.totalAttempts++;
    updateAttempts();

    const order = getCurrentOrder();
    let correctCount = 0;
    const items = dom.sortableList.querySelectorAll('.sort-item');

    items.forEach((el, i) => {
      el.classList.remove('correct-pos', 'wrong-pos');
      if (order[i] === state.correctOrder[i]) {
        el.classList.add('correct-pos');
        correctCount++;
      } else {
        el.classList.add('wrong-pos');
      }
    });

    if (correctCount === 5) {
      // Perfect or solved
      const pts = [300, 200, 100][state.attempts - 1] || 100;
      state.score += pts;
      if (state.attempts === 1) state.perfectCount++;
      finishRound(true, pts);
    } else if (state.attempts >= MAX_ATTEMPTS) {
      finishRound(false, 0);
    } else {
      // Still has attempts — clear wrong highlights after a moment
      setTimeout(() => {
        items.forEach(el => el.classList.remove('wrong-pos'));
        // Re-number
        items.forEach((el, i) => {
          el.querySelector('.sort-num').textContent = i + 1;
        });
      }, 800);
    }

    dom.scoreLabel.textContent = state.score;
  }

  function finishRound(solved, pts) {
    state.locked = true;
    dom.btnLock.classList.add('hidden');

    if (solved) {
      const label = state.attempts === 1 ? 'PERFECT!' : 'SOLVED!';
      dom.rfText.textContent = label + ' +' + pts;
      dom.rfText.className = 'rf-text ' + (state.attempts === 1 ? 'perfect' : 'close');
    } else {
      dom.rfText.textContent = 'OUT OF ATTEMPTS';
      dom.rfText.className = 'rf-text miss';
    }

    // Show correct order
    dom.rfCorrectOrder.innerHTML = '<p style="font-size:12px;letter-spacing:2px;color:#a0a0b0;margin-bottom:8px;">CORRECT ORDER</p>';
    state.correctOrder.forEach((label, i) => {
      const d = document.createElement('div');
      d.className = 'rf-item';
      d.innerHTML = (i + 1) + '. <span>' + label + '</span>';
      dom.rfCorrectOrder.appendChild(d);
    });

    dom.roundFeedback.classList.remove('hidden');
  }

  function nextRound() {
    state.current++;
    if (state.current >= ROUNDS) {
      endGame();
    } else {
      showRound();
    }
  }

  function endGame() {
    showScreen('gameover');
    dom.finalScore.textContent = state.score;

    const maxPossible = ROUNDS * 300;
    const pct = Math.round(state.score / maxPossible * 100);
    let rank;
    if (pct >= 90) rank = 'GRAND MASTER';
    else if (pct >= 70) rank = 'SHARP MIND';
    else if (pct >= 50) rank = 'SOLID EFFORT';
    else if (pct >= 30) rank = 'KEEP TRYING';
    else rank = 'SCRAMBLED';

    dom.finalRank.textContent = rank;
    dom.finalStats.innerHTML =
      state.perfectCount + ' perfect rounds (1st attempt)<br>' +
      'Average attempts: ' + (state.totalAttempts / ROUNDS).toFixed(1);

    Daily.saveDailyResult('lineup', state.score);
    const prev = parseInt(localStorage.getItem('lineup-best') || '0');
    if (state.score > prev) localStorage.setItem('lineup-best', state.score);
    showBest();
    dom.progressBar.style.setProperty('--progress', '100%');
  }

  // ---- Touch drag-to-reorder ----
  function setupDrag() {
    const list = dom.sortableList;
    let dragged = null;
    let placeholder = null;
    let startY = 0;
    let startIndex = 0;

    list.addEventListener('touchstart', onTouchStart, { passive: false });
    list.addEventListener('touchmove', onTouchMove, { passive: false });
    list.addEventListener('touchend', onTouchEnd);

    // Mouse fallback
    list.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function getItems() {
      return Array.from(list.querySelectorAll('.sort-item:not(.placeholder)'));
    }

    function onTouchStart(e) {
      if (state.locked) return;
      const item = e.target.closest('.sort-item');
      if (!item) return;
      e.preventDefault();
      startDrag(item, e.touches[0].clientY);
    }

    function onTouchMove(e) {
      if (!dragged) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientY);
    }

    function onTouchEnd() {
      if (!dragged) return;
      endDrag();
    }

    function onMouseDown(e) {
      if (state.locked) return;
      const item = e.target.closest('.sort-item');
      if (!item) return;
      e.preventDefault();
      startDrag(item, e.clientY);
    }

    function onMouseMove(e) {
      if (!dragged) return;
      e.preventDefault();
      moveDrag(e.clientY);
    }

    function onMouseUp() {
      if (!dragged) return;
      endDrag();
    }

    function startDrag(item, y) {
      dragged = item;
      startY = y;
      startIndex = getItems().indexOf(item);
      item.classList.add('dragging');

      dragState = {
        offsetY: 0,
        itemHeight: item.offsetHeight + 10 // gap
      };
    }

    function moveDrag(y) {
      if (!dragged) return;
      const delta = y - startY;
      dragged.style.transform = 'translateY(' + delta + 'px) scale(1.03)';

      const items = getItems();
      const draggedIdx = items.indexOf(dragged);
      const moveBy = Math.round(delta / dragState.itemHeight);
      const targetIdx = Math.max(0, Math.min(items.length - 1, startIndex + moveBy));

      if (targetIdx !== draggedIdx) {
        if (targetIdx > draggedIdx) {
          list.insertBefore(dragged, items[targetIdx].nextSibling);
        } else {
          list.insertBefore(dragged, items[targetIdx]);
        }
        // Recalc startY so movement stays smooth
        startY = y - (targetIdx - startIndex) * dragState.itemHeight + (targetIdx - startIndex) * dragState.itemHeight;
        startY = y;
        startIndex = targetIdx;
      }
    }

    function endDrag() {
      if (!dragged) return;
      dragged.classList.remove('dragging');
      dragged.style.transform = '';
      dragged = null;
      dragState = null;

      // Re-number
      getItems().forEach((el, i) => {
        el.querySelector('.sort-num').textContent = i + 1;
      });
    }
  }

  init();
})();
