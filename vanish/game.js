(function () {
  var LETTER_POOL = "EEEEEEEEEEEEAAAAAAAAAIIIIIIIIIOOOOOOOONNNNNNSSSSSSTTTTTTRRRRRRLLLLLUUUUDDDDGGGBBCCMMPPFFHHVVWWYYKJXQZ".split("");

  var POINTS = { 3: 1, 4: 2, 5: 4, 6: 6, 7: 10, 8: 14 };
  function wordPoints(len) { return POINTS[Math.min(len, 8)] || 14; }
  function isValidWord(word) { return DICTIONARY.has(word.toLowerCase()); }

  var dom = {
    introScreen: document.getElementById('intro-screen'),
    gameScreen: document.getElementById('game-screen'),
    overScreen: document.getElementById('over-screen'),
    btnPlay: document.getElementById('btn-play'),
    btnClear: document.getElementById('btn-clear'),
    btnSubmit: document.getElementById('btn-submit'),
    btnReplay: document.getElementById('btn-replay'),
    scoreDisplay: document.getElementById('score-display'),
    scoreNum: document.getElementById('score-num'),
    timerFill: document.getElementById('timer-fill'),
    timerNum: document.getElementById('timer-num'),
    gridEl: document.getElementById('grid'),
    currentWord: document.getElementById('current-word'),
    message: document.getElementById('message'),
    foundList: document.getElementById('found-list'),
    finalScore: document.getElementById('final-score'),
    bestWords: document.getElementById('best-words'),
    bestScore: document.getElementById('best-score')
  };

  var grid = [];
  var selected = [];
  var foundWords = [];
  var score = 0;
  var countdown = 10;
  var timerInterval = null;
  var vanishingId = null;
  var msgTimer = null;

  function showScreen(name) {
    dom.introScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.overScreen.classList.add('hidden');
    document.getElementById(name + '-screen').classList.remove('hidden');
  }

  function showBest() {
    var b = localStorage.getItem('vanish-best');
    if (b) dom.bestScore.textContent = 'BEST: ' + b + ' pts';
  }

  function generateGrid() {
    var pool = LETTER_POOL.slice();
    var result = [];
    for (var i = 0; i < 25; i++) {
      var idx = Math.floor(Math.random() * pool.length);
      result.push({ id: i, letter: pool[idx], alive: true });
      pool.splice(idx, 1);
      if (pool.length === 0) pool = LETTER_POOL.slice();
    }
    return result;
  }

  function startGame() {
    grid = generateGrid();
    selected = [];
    foundWords = [];
    score = 0;
    countdown = 10;
    vanishingId = null;

    showScreen('game');
    renderGrid();
    renderScore();
    renderWordBar();
    renderFoundWords();
    renderTimer();
    hideMessage();

    clearInterval(timerInterval);
    timerInterval = setInterval(tick, 1000);
  }

  function tick() {
    countdown--;
    renderTimer();
    if (countdown <= 0) {
      vanishRandomCell();
      countdown = 10;
      renderTimer();
    }
  }

  function vanishRandomCell() {
    var alive = grid.filter(function (c) { return c.alive; });
    if (alive.length <= 2) return;
    var target = alive[Math.floor(Math.random() * alive.length)];
    vanishingId = target.id;
    selected = selected.filter(function (id) { return id !== target.id; });
    renderGrid();
    renderWordBar();

    setTimeout(function () {
      target.alive = false;
      vanishingId = null;
      renderGrid();
      checkGameOver();
    }, 600);
  }

  function checkGameOver() {
    var alive = grid.filter(function (c) { return c.alive; }).length;
    if (alive <= 2) {
      clearInterval(timerInterval);
      setTimeout(endGame, 800);
    }
  }

  function toggleCell(cell) {
    if (!cell.alive) return;
    var idx = selected.indexOf(cell.id);
    if (idx >= 0) {
      selected.splice(idx, 1);
    } else {
      selected.push(cell.id);
    }
    renderGrid();
    renderWordBar();
  }

  function getWord() {
    return selected.map(function (id) {
      var cell = grid.find(function (c) { return c.id === id; });
      return cell ? cell.letter : '';
    }).join('');
  }

  function submitWord() {
    var word = getWord().toLowerCase();
    if (word.length < 3) { showMessage('Too short \u2014 3 letters minimum', 'bad'); return; }
    if (foundWords.find(function (f) { return f.word === word.toUpperCase(); })) { showMessage('Already found!', 'bad'); return; }
    if (!isValidWord(word)) { showMessage('"' + word.toUpperCase() + '" not a word', 'bad'); return; }

    var pts = wordPoints(word.length);
    foundWords.unshift({ word: word.toUpperCase(), points: pts });
    score += pts;

    showMessage('+' + pts + (pts === 1 ? ' point' : ' points') + '!', 'good');
    dom.scoreDisplay.classList.add('score-flash');
    setTimeout(function () { dom.scoreDisplay.classList.remove('score-flash'); }, 400);

    selected = [];
    renderGrid();
    renderScore();
    renderWordBar();
    renderFoundWords();
  }

  function clearSelection() {
    selected = [];
    renderGrid();
    renderWordBar();
  }

  function renderGrid() {
    dom.gridEl.innerHTML = '';
    grid.forEach(function (cell) {
      var btn = document.createElement('button');
      btn.className = 'vg-cell';
      if (!cell.alive) btn.className += ' dead';
      if (selected.indexOf(cell.id) >= 0) btn.className += ' sel';
      if (vanishingId === cell.id) btn.className += ' vanishing';
      btn.disabled = !cell.alive;
      btn.textContent = cell.alive ? cell.letter : '';
      btn.addEventListener('click', function () { toggleCell(cell); });
      dom.gridEl.appendChild(btn);
    });
  }

  function renderScore() {
    dom.scoreNum.textContent = score;
  }

  function renderTimer() {
    dom.timerFill.style.width = ((countdown / 10) * 100) + '%';
    dom.timerFill.style.background = countdown <= 3 ? 'var(--danger)' : 'var(--accent)';
    dom.timerNum.textContent = countdown + 's';
    dom.timerNum.style.color = countdown <= 3 ? 'var(--danger)' : 'var(--accent)';
  }

  function renderWordBar() {
    var word = getWord();
    if (word) {
      dom.currentWord.textContent = word;
      dom.currentWord.className = 'current-word';
    } else {
      dom.currentWord.innerHTML = '<span class="placeholder">tap letters\u2026</span>';
    }
    dom.btnClear.disabled = selected.length === 0;
    dom.btnSubmit.disabled = selected.length < 3;
  }

  function renderFoundWords() {
    dom.foundList.innerHTML = '';
    if (foundWords.length === 0) {
      dom.foundList.innerHTML = '<span class="found-empty">none yet</span>';
      return;
    }
    foundWords.forEach(function (f) {
      var div = document.createElement('div');
      div.className = 'found-item';
      var wordSpan = document.createElement('span');
      wordSpan.className = 'found-word';
      wordSpan.textContent = f.word;
      var ptsSpan = document.createElement('span');
      ptsSpan.className = 'found-pts';
      ptsSpan.textContent = '+' + f.points;
      div.appendChild(wordSpan);
      div.appendChild(ptsSpan);
      dom.foundList.appendChild(div);
    });
  }

  function showMessage(text, type) {
    dom.message.textContent = text;
    dom.message.className = 'message ' + type;
    clearTimeout(msgTimer);
    msgTimer = setTimeout(hideMessage, 1800);
  }

  function hideMessage() {
    dom.message.className = 'message hidden';
  }

  function endGame() {
    showScreen('over');
    dom.finalScore.textContent = score;

    var best = foundWords.slice().sort(function (a, b) { return b.points - a.points; }).slice(0, 5);
    if (best.length > 0) {
      var html = '<div class="best-hdr">TOP WORDS</div>';
      best.forEach(function (f) {
        html += '<div class="best-row"><span>' + f.word + '</span><span class="found-pts">+' + f.points + '</span></div>';
      });
      dom.bestWords.innerHTML = html;
    } else {
      dom.bestWords.innerHTML = '';
    }

    var prev = parseInt(localStorage.getItem('vanish-best') || '0');
    if (score > prev) localStorage.setItem('vanish-best', score);
    showBest();
  }

  dom.btnPlay.addEventListener('click', startGame);
  dom.btnReplay.addEventListener('click', startGame);
  dom.btnClear.addEventListener('click', clearSelection);
  dom.btnSubmit.addEventListener('click', submitWord);

  showBest();
})();
