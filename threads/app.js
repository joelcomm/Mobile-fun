// ─── State ───────────────────────────────────────────────────────
const MIN_STRAND = 3;
let currentPuzzleIndex = PUZZLES.indexOf(Daily.dealFromDeck(PUZZLES, 1)[0]);
let selected = [];
let solvedGroups = [];
let mistakesLeft = 4;
let guessHistory = [];
let previousGuesses = [];
let remainingWords = [];
let gameOver = false;

// ─── DOM refs ────────────────────────────────────────────────────
const grid = document.getElementById("grid");
const solvedArea = document.getElementById("solved-area");
const mistakeDots = document.getElementById("mistake-dots");
const btnShuffle = document.getElementById("btn-shuffle");
const btnDeselect = document.getElementById("btn-deselect");
const btnSubmit = document.getElementById("btn-submit");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayResults = document.getElementById("overlay-results");
const overlayAnswers = document.getElementById("overlay-answers");
const looseThreads = document.getElementById("loose-threads");
const nextCd = document.getElementById("next-cd");
const btnShare = document.getElementById("btn-share");
const btnPrevPuzzle = document.getElementById("btn-prev-puzzle");
const btnNextPuzzle = document.getElementById("btn-next-puzzle");
const puzzleLabel = document.getElementById("puzzle-label");
const toast = document.getElementById("toast");

// ─── Init ────────────────────────────────────────────────────────
function initPuzzle() {
  const puzzle = PUZZLES[currentPuzzleIndex];
  selected = [];
  solvedGroups = [];
  mistakesLeft = 4;
  guessHistory = [];
  previousGuesses = [];
  gameOver = false;

  remainingWords = [];
  puzzle.groups.forEach(g => {
    g.words.forEach(w => remainingWords.push({ word: w }));
  });
  (puzzle.decoys || []).forEach(w => remainingWords.push({ word: w }));

  shuffle(remainingWords);
  renderGrid();
  renderSolved();
  renderMistakes();
  updateButtons();
  updatePuzzleNav();
  overlay.classList.add("hidden");
}

// ─── Render ──────────────────────────────────────────────────────
function renderGrid() {
  grid.innerHTML = "";
  remainingWords.forEach(item => {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.textContent = item.word;
    tile.dataset.word = item.word;
    if (selected.includes(item.word)) tile.classList.add("selected");
    tile.addEventListener("click", () => handleTileClick(item.word));
    grid.appendChild(tile);
  });
}

function renderSolved() {
  solvedArea.innerHTML = "";
  solvedGroups.forEach(g => {
    const div = document.createElement("div");
    div.className = "solved-group accent-" + g._accent;
    div.innerHTML =
      '<div class="solved-category">' + g.category + '</div>' +
      '<div class="solved-words">' + g.words.join(", ") + '</div>';
    solvedArea.appendChild(div);
  });
}

function renderMistakes() {
  mistakeDots.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (i >= mistakesLeft) dot.classList.add("used");
    mistakeDots.appendChild(dot);
  }
}

function updateButtons() {
  btnDeselect.disabled = selected.length === 0;
  btnSubmit.disabled = selected.length < MIN_STRAND;
}

function updatePuzzleNav() {
  puzzleLabel.textContent = Daily.getDateString();
  btnPrevPuzzle.style.display = 'none';
  btnNextPuzzle.style.display = 'none';
}

// ─── Tile interaction ────────────────────────────────────────────
function handleTileClick(word) {
  if (gameOver) return;

  if (selected.includes(word)) {
    selected = selected.filter(w => w !== word);
  } else {
    selected.push(word);
  }

  renderGrid();
  updateButtons();
}

// ─── Submit guess ────────────────────────────────────────────────
function submitGuess() {
  if (selected.length < MIN_STRAND || gameOver) return;

  const puzzle = PUZZLES[currentPuzzleIndex];
  const sortedGuess = [...selected].sort().join("|");

  if (previousGuesses.includes(sortedGuess)) {
    showToast("Already pulled that thread");
    return;
  }
  previousGuesses.push(sortedGuess);

  const matched = puzzle.groups.find(g =>
    g.words.length === selected.length &&
    [...g.words].sort().join("|") === sortedGuess
  );

  guessHistory.push({ size: selected.length, correct: !!matched });

  if (matched) handleCorrectGuess(matched);
  else handleWrongGuess(diagnoseGuess(puzzle, selected));
}

function diagnoseGuess(puzzle, guess) {
  const decoySet = new Set(puzzle.decoys || []);
  if (guess.some(w => decoySet.has(w))) return "One of those is a loose thread";
  let best = 0, bestSize = 0;
  puzzle.groups.forEach(g => {
    const overlap = guess.filter(w => g.words.includes(w)).length;
    if (overlap > best) { best = overlap; bestSize = g.words.length; }
  });
  if (best === bestSize && guess.length === bestSize + 1) return "So close — drop one word";
  if (best === guess.length && best === bestSize - 1) return "So close — one word missing";
  return null;
}

function handleCorrectGuess(group) {
  const tiles = getSelectedTiles();

  tiles.forEach((tile, i) => {
    setTimeout(() => tile.classList.add("bounce"), i * 80);
  });

  setTimeout(() => {
    remainingWords = remainingWords.filter(item => !selected.includes(item.word));
    group._accent = solvedGroups.length;
    solvedGroups.push(group);
    selected = [];

    renderSolved();
    renderGrid();
    updateButtons();

    if (solvedGroups.length === PUZZLES[currentPuzzleIndex].groups.length) {
      setTimeout(() => endGame(true), 600);
    }
  }, 500);
}

function handleWrongGuess(hint) {
  const tiles = getSelectedTiles();

  tiles.forEach(tile => tile.classList.add("shake"));

  if (hint) showToast(hint);

  mistakesLeft--;
  renderMistakes();

  setTimeout(() => {
    tiles.forEach(tile => tile.classList.remove("shake"));

    if (mistakesLeft <= 0) {
      revealAll();
    } else {
      renderGrid();
      updateButtons();
    }
  }, 600);
}

function revealAll() {
  const puzzle = PUZZLES[currentPuzzleIndex];
  const unsolvedGroups = puzzle.groups
    .filter(g => !solvedGroups.find(sg => sg.category === g.category));

  let delay = 0;
  unsolvedGroups.forEach(group => {
    setTimeout(() => {
      remainingWords = remainingWords.filter(item => !group.words.includes(item.word));
      group._accent = solvedGroups.length;
      solvedGroups.push(group);
      selected = [];
      renderSolved();
      renderGrid();
      updateButtons();
    }, delay);
    delay += 600;
  });

  setTimeout(() => endGame(false), delay + 400);
}

function getSelectedTiles() {
  return Array.from(grid.querySelectorAll(".tile")).filter(
    tile => selected.includes(tile.dataset.word)
  );
}

// ─── End game ────────────────────────────────────────────────────
function endGame(won) {
  gameOver = true;
  Daily.saveDailyResult('threads', won ? (mistakesLeft + 1) * 25 : 0, {
    won: won,
    guessHistory: guessHistory
  });

  overlayTitle.textContent = won ? "You got it!" : "Next time!";

  buildResultsDisplay(guessHistory);
  buildAnswersDisplay();

  overlay.classList.remove("hidden");

  function tickCd() {
    nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW PUZZLE IN</span>' + Daily.formatCountdown();
  }
  tickCd();
  setInterval(tickCd, 1000);
}

function buildResultsDisplay(history) {
  overlayResults.innerHTML = "";
  history.forEach(g => {
    const row = document.createElement("div");
    row.className = "result-row";
    for (let i = 0; i < g.size; i++) {
      const block = document.createElement("div");
      block.className = "result-block " + (g.correct ? "correct" : "wrong");
      row.appendChild(block);
    }
    const mark = document.createElement("span");
    mark.className = "result-mark";
    mark.textContent = g.correct ? " ✓" : " ✗";
    row.appendChild(mark);
    overlayResults.appendChild(row);
  });
}

function buildAnswersDisplay() {
  var puzzle = PUZZLES[currentPuzzleIndex];
  overlayAnswers.innerHTML = "";
  puzzle.groups.forEach(function (g) {
    var div = document.createElement("div");
    div.className = "answer-group";
    div.innerHTML =
      '<div class="answer-category">' + g.category + '</div>' +
      '<div class="answer-words">' + g.words.join(", ") + '</div>';
    overlayAnswers.appendChild(div);
  });

  looseThreads.innerHTML = "";
  var decoys = puzzle.decoys || [];
  if (decoys.length > 0) {
    var heading = document.createElement("div");
    heading.className = "loose-heading";
    heading.textContent = "Loose threads";
    looseThreads.appendChild(heading);
    var chips = document.createElement("div");
    chips.className = "loose-chips";
    decoys.forEach(function (w) {
      var chip = document.createElement("span");
      chip.className = "loose-chip";
      chip.textContent = w;
      chips.appendChild(chip);
    });
    looseThreads.appendChild(chips);
  }
}

// ─── Share ───────────────────────────────────────────────────────
function shareResults() {
  var d = Daily.getDateString();
  var text = "Threads " + d + "\n";
  guessHistory.forEach(function (g) {
    var bar = "";
    for (var i = 0; i < g.size; i++) bar += "▰";
    text += bar + (g.correct ? " ✓" : " ✗") + "\n";
  });
  var loose = (PUZZLES[currentPuzzleIndex].decoys || []).length;
  if (loose) text += loose + " loose thread" + (loose > 1 ? "s" : "") + "\n";

  if (navigator.share) {
    navigator.share({ text: text }).catch(function () {
      copyToClipboard(text);
    });
  } else {
    copyToClipboard(text);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    showToast("Copied to clipboard!");
  }).catch(function () {
    showToast("Could not copy");
  });
}

// ─── Shuffle ─────────────────────────────────────────────────────
var _connRng;
function shuffle(arr) {
  if (!_connRng) _connRng = Daily.createRng(Daily.getDayNumber() * 8089);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(_connRng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleGrid() {
  shuffle(remainingWords);
  renderGrid();
}

// ─── Toast ───────────────────────────────────────────────────────
let toastTimeout;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add("hidden"), 1800);
}

// ─── Event listeners ─────────────────────────────────────────────
btnShuffle.addEventListener("click", shuffleGrid);
btnDeselect.addEventListener("click", () => {
  selected = [];
  renderGrid();
  updateButtons();
});
btnSubmit.addEventListener("click", submitGuess);
if (btnShare) btnShare.addEventListener("click", shareResults);

btnPrevPuzzle.addEventListener("click", () => {
  if (currentPuzzleIndex > 0) {
    currentPuzzleIndex--;
    initPuzzle();
  }
});

btnNextPuzzle.addEventListener("click", () => {
  if (currentPuzzleIndex < PUZZLES.length - 1) {
    currentPuzzleIndex++;
    initPuzzle();
  }
});

// ─── Start ───────────────────────────────────────────────────────
Daily.injectDailyInfo('#app header', 'threads');
initPuzzle();

// Restore completed state if already played today
(function () {
  var threadsResult = Daily.getDailyResult('threads');
  if (!threadsResult) return;

  gameOver = true;
  var puzzle = PUZZLES[currentPuzzleIndex];

  remainingWords = [];
  solvedGroups = puzzle.groups.slice().map(function (g, i) {
    var copy = { category: g.category, words: g.words.slice(), _accent: i };
    return copy;
  });
  renderSolved();
  renderGrid();

  document.getElementById('actions').style.display = 'none';
  document.getElementById('mistakes').style.display = 'none';

  overlayTitle.textContent = threadsResult.won ? "You got it!" : "Next time!";

  overlayResults.innerHTML = "";
  if (threadsResult.guessHistory) {
    threadsResult.guessHistory.forEach(function (g) {
      if (typeof g.size === 'number') {
        var row = document.createElement("div");
        row.className = "result-row";
        for (var i = 0; i < g.size; i++) {
          var block = document.createElement("div");
          block.className = "result-block " + (g.correct ? "correct" : "wrong");
          row.appendChild(block);
        }
        var mark = document.createElement("span");
        mark.className = "result-mark";
        mark.textContent = g.correct ? " ✓" : " ✗";
        row.appendChild(mark);
        overlayResults.appendChild(row);
      }
    });
    guessHistory = threadsResult.guessHistory;
  }

  buildAnswersDisplay();

  overlay.classList.remove("hidden");

  function tickCd() {
    nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW PUZZLE IN</span>' + Daily.formatCountdown();
  }
  tickCd();
  setInterval(tickCd, 1000);
})();

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
