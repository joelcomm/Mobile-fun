// ─── State ───────────────────────────────────────────────────────
let currentPuzzleIndex = Daily.getDayNumber() % PUZZLES.length;
let selected = [];
let solvedGroups = [];
let mistakesLeft = 4;
let guessHistory = []; // track each guess for share grid
let previousGuesses = []; // prevent duplicate guesses
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
const btnNext = document.getElementById("btn-next");
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

  // Collect all words with their group level
  remainingWords = [];
  puzzle.groups.forEach(g => {
    g.words.forEach(w => {
      remainingWords.push({ word: w, level: g.level });
    });
  });

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

    if (selected.includes(item.word)) {
      tile.classList.add("selected");
    }

    tile.addEventListener("click", () => handleTileClick(item.word));
    grid.appendChild(tile);
  });
}

function renderSolved() {
  solvedArea.innerHTML = "";
  solvedGroups.forEach(g => {
    const div = document.createElement("div");
    div.className = `solved-group level-${g.level}`;
    div.innerHTML = `
      <div class="solved-category">${g.category}</div>
      <div class="solved-words">${g.words.join(", ")}</div>
    `;
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
  btnSubmit.disabled = selected.length !== 4;
}

function updatePuzzleNav() {
  puzzleLabel.textContent = Daily.getDateString();
  // Hide prev/next for daily mode
  btnPrevPuzzle.style.display = 'none';
  btnNextPuzzle.style.display = 'none';
}

// ─── Tile interaction ────────────────────────────────────────────
function handleTileClick(word) {
  if (gameOver) return;

  if (selected.includes(word)) {
    selected = selected.filter(w => w !== word);
  } else {
    if (selected.length >= 4) return;
    selected.push(word);
  }

  renderGrid();
  updateButtons();
}

// ─── Submit guess ────────────────────────────────────────────────
function submitGuess() {
  if (selected.length !== 4 || gameOver) return;

  const puzzle = PUZZLES[currentPuzzleIndex];
  const sortedGuess = [...selected].sort().join(",");

  // Check for duplicate guess
  if (previousGuesses.includes(sortedGuess)) {
    showToast("Already guessed!");
    return;
  }
  previousGuesses.push(sortedGuess);

  // Find which group (if any) the guess matches
  const matchedGroup = puzzle.groups.find(g => {
    const groupWords = [...g.words].sort().join(",");
    return groupWords === sortedGuess;
  });

  // Record guess levels for share grid
  const guessLevels = selected.map(word => {
    const group = puzzle.groups.find(g => g.words.includes(word));
    return group.level;
  });
  guessHistory.push(guessLevels);

  if (matchedGroup) {
    // Correct!
    handleCorrectGuess(matchedGroup);
  } else {
    // Wrong — check if one away
    const oneAway = checkOneAway(puzzle, selected);
    handleWrongGuess(oneAway);
  }
}

function checkOneAway(puzzle, guess) {
  return puzzle.groups.some(g => {
    const overlap = guess.filter(w => g.words.includes(w));
    return overlap.length === 3;
  });
}

function handleCorrectGuess(group) {
  // Animate selected tiles
  const tiles = getSelectedTiles();

  tiles.forEach((tile, i) => {
    setTimeout(() => tile.classList.add("bounce"), i * 80);
  });

  setTimeout(() => {
    // Remove matched words from remaining
    remainingWords = remainingWords.filter(item => !selected.includes(item.word));

    // Add to solved
    solvedGroups.push(group);
    selected = [];

    renderSolved();
    renderGrid();
    updateButtons();

    // Check if all groups solved
    if (solvedGroups.length === 4) {
      setTimeout(() => endGame(true), 600);
    }
  }, 500);
}

function handleWrongGuess(oneAway) {
  const tiles = getSelectedTiles();

  // Shake animation
  tiles.forEach(tile => tile.classList.add("shake"));

  if (oneAway) {
    showToast("One away...");
  }

  mistakesLeft--;
  renderMistakes();

  setTimeout(() => {
    tiles.forEach(tile => tile.classList.remove("shake"));

    if (mistakesLeft <= 0) {
      // Game over — reveal remaining groups
      revealAll();
    } else {
      selected = [];
      renderGrid();
      updateButtons();
    }
  }, 600);
}

function revealAll() {
  const puzzle = PUZZLES[currentPuzzleIndex];
  const unsolvedGroups = puzzle.groups
    .filter(g => !solvedGroups.find(sg => sg.category === g.category))
    .sort((a, b) => a.level - b.level);

  let delay = 0;
  unsolvedGroups.forEach(group => {
    setTimeout(() => {
      remainingWords = remainingWords.filter(item => !group.words.includes(item.word));
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
  Daily.saveDailyResult('connections', won ? (mistakesLeft + 1) * 25 : 0);

  overlayTitle.textContent = won ? "You got it!" : "Next time!";

  // Build results grid
  overlayResults.innerHTML = "";
  guessHistory.forEach(levels => {
    const row = document.createElement("div");
    row.className = "result-row";
    levels.forEach(level => {
      const dot = document.createElement("div");
      dot.className = `result-dot level-${level}`;
      row.appendChild(dot);
    });
    overlayResults.appendChild(row);
  });

  // Show answers
  const puzzle = PUZZLES[currentPuzzleIndex];
  overlayAnswers.innerHTML = "";
  puzzle.groups
    .sort((a, b) => a.level - b.level)
    .forEach(g => {
      const div = document.createElement("div");
      div.className = "answer-group";
      div.innerHTML = `
        <div class="answer-category">${g.category}</div>
        <div class="answer-words">${g.words.join(", ")}</div>
      `;
      overlayAnswers.appendChild(div);
    });

  overlay.classList.remove("hidden");
}

// ─── Share ───────────────────────────────────────────────────────
function shareResults() {
  const levelEmojis = ["🟨", "🟩", "🟦", "🟪"];
  let text = `Connections Puzzle #${currentPuzzleIndex + 1}\n`;

  guessHistory.forEach(levels => {
    text += levels.map(l => levelEmojis[l]).join("") + "\n";
  });

  if (navigator.share) {
    navigator.share({ text }).catch(() => {
      copyToClipboard(text);
    });
  } else {
    copyToClipboard(text);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Copied to clipboard!");
  }).catch(() => {
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
btnNext.addEventListener("click", () => {
  if (currentPuzzleIndex < PUZZLES.length - 1) {
    currentPuzzleIndex++;
    initPuzzle();
  }
});
btnShare.addEventListener("click", shareResults);

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
Daily.injectDailyInfo('#app header', 'connections');
initPuzzle();

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
