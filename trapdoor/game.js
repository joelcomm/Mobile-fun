// ─── Config ──────────────────────────────────────────────────────
const BOARD_SIZE = 5;
const NUM_TRAPS = 5;
const SCORE_TABLE = { 3: 1, 4: 3, 5: 5, 6: 8, 7: 11 };

// Dice faces (Boggle-style distribution for good boards)
const DICE = [
  "AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS", "AOOTTW",
  "CIMOTU", "DEILRX", "DELRVY", "DISTTY", "EEGHNW",
  "EEINSU", "EHRTVW", "EIOSST", "ELRTTY", "HIMNQU",
  "HLNNRZ", "AAAFRS", "AEEGMU", "AEGMNN", "CCENST",
  "DHLNOR", "FIPRSY", "GORRVW", "IPRRRY", "NOOTUW"
];

// ─── State ───────────────────────────────────────────────────────
let board = [];           // 5x5 array of { letter, isTrap, fallen }
let selectedPath = [];    // array of {row, col}
let foundWords = [];
let score = 0;
let trapsRevealed = 0;
let gameActive = false;

// ─── DOM ─────────────────────────────────────────────────────────
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const boardEl = document.getElementById("board");
const currentWordEl = document.getElementById("current-word");
const wordStatusEl = document.getElementById("word-status");
const scoreEl = document.getElementById("score");
const trapsLeftEl = document.getElementById("traps-left");
const foundCountEl = document.getElementById("found-count");
const toast = document.getElementById("toast");

// ─── Board Generation ────────────────────────────────────────────
function generateBoard() {
  const shuffledDice = shuffle([...DICE]);
  board = [];
  for (let r = 0; r < BOARD_SIZE; r++) {
    board[r] = [];
    for (let c = 0; c < BOARD_SIZE; c++) {
      const die = shuffledDice[r * BOARD_SIZE + c];
      const letter = die[Math.floor(Math.random() * die.length)];
      board[r][c] = { letter: letter === "Q" ? "QU" : letter, isTrap: false, fallen: false };
    }
  }

  // Place traps — avoid making too many vowels traps
  const positions = [];
  for (let r = 0; r < BOARD_SIZE; r++)
    for (let c = 0; c < BOARD_SIZE; c++)
      positions.push({ r, c });

  shuffle(positions);

  let placed = 0;
  for (const pos of positions) {
    if (placed >= NUM_TRAPS) break;
    board[pos.r][pos.c].isTrap = true;
    placed++;
  }
}

// ─── Rendering ───────────────────────────────────────────────────
function renderBoard() {
  boardEl.innerHTML = "";
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const cell = board[r][c];
      const el = document.createElement("div");
      el.className = "cell";
      el.dataset.row = r;
      el.dataset.col = c;
      el.textContent = cell.letter;

      if (cell.fallen) {
        el.classList.add("fallen-done");
      }

      // Touch/mouse events
      el.addEventListener("pointerdown", (e) => onPointerDown(e, r, c));
      el.addEventListener("pointerenter", (e) => onPointerEnter(e, r, c));

      boardEl.appendChild(el);
    }
  }
}

function updateCurrentWord() {
  const word = getSelectedWord();
  currentWordEl.textContent = word || "\u00A0";
}

function updateScoreDisplay() {
  scoreEl.textContent = score;
  trapsLeftEl.textContent = NUM_TRAPS - trapsRevealed;
  foundCountEl.textContent = foundWords.length;
}

function highlightSelected() {
  const cells = boardEl.querySelectorAll(".cell");
  cells.forEach(c => c.classList.remove("selected"));
  selectedPath.forEach(pos => {
    const idx = pos.row * BOARD_SIZE + pos.col;
    cells[idx].classList.add("selected");
  });
}

// ─── Input Handling ──────────────────────────────────────────────
let isDrawing = false;

function onPointerDown(e, r, c) {
  if (!gameActive || board[r][c].fallen) return;
  e.preventDefault();
  isDrawing = true;
  selectedPath = [{ row: r, col: c }];
  highlightSelected();
  updateCurrentWord();
  wordStatusEl.innerHTML = "";
  // Capture pointer for drag
  e.target.setPointerCapture?.(e.pointerId);
}

function onPointerEnter(e, r, c) {
  if (!isDrawing || !gameActive || board[r][c].fallen) return;

  const last = selectedPath[selectedPath.length - 1];
  if (!last) return;

  // Check adjacency
  const dr = Math.abs(r - last.row);
  const dc = Math.abs(c - last.col);
  if (dr > 1 || dc > 1 || (dr === 0 && dc === 0)) return;

  // Allow backtracking (undo last)
  if (selectedPath.length >= 2) {
    const prev = selectedPath[selectedPath.length - 2];
    if (prev.row === r && prev.col === c) {
      selectedPath.pop();
      highlightSelected();
      updateCurrentWord();
      return;
    }
  }

  // No revisiting
  if (selectedPath.some(p => p.row === r && p.col === c)) return;

  selectedPath.push({ row: r, col: c });
  highlightSelected();
  updateCurrentWord();
}

// Use pointermove on board for smooth dragging
boardEl.addEventListener("pointermove", (e) => {
  if (!isDrawing) return;
  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (el && el.classList.contains("cell") && !el.classList.contains("fallen-done")) {
    const r = parseInt(el.dataset.row);
    const c = parseInt(el.dataset.col);
    onPointerEnter(e, r, c);
  }
});

document.addEventListener("pointerup", () => {
  if (!isDrawing) return;
  isDrawing = false;
  if (selectedPath.length >= 3) {
    submitWord();
  } else {
    selectedPath = [];
    highlightSelected();
    updateCurrentWord();
    wordStatusEl.innerHTML = "";
  }
});

// ─── Word Submission ─────────────────────────────────────────────
function getSelectedWord() {
  return selectedPath.map(p => board[p.row][p.col].letter).join("");
}

function submitWord() {
  const word = getSelectedWord();
  const cells = boardEl.querySelectorAll(".cell");

  // Check if already found
  if (foundWords.includes(word)) {
    showStatus("ALREADY FOUND", "status-duplicate");
    clearSelection();
    return;
  }

  // Check dictionary
  if (!WORDS.has(word)) {
    showStatus("NOT A WORD", "status-invalid");
    clearSelection();
    return;
  }

  // Check for trapdoors
  const trapTile = selectedPath.find(p => board[p.row][p.col].isTrap && !board[p.row][p.col].fallen);

  if (trapTile) {
    // HIT A TRAPDOOR!
    showStatus("TRAPDOOR!", "status-trapped");

    // Shake all selected tiles
    selectedPath.forEach(p => {
      const idx = p.row * BOARD_SIZE + p.col;
      cells[idx].classList.add("trapped");
    });

    // Destroy the trap tile after shake
    setTimeout(() => {
      const trapIdx = trapTile.row * BOARD_SIZE + trapTile.col;
      cells[trapIdx].classList.remove("trapped");
      cells[trapIdx].classList.add("fallen");
      board[trapTile.row][trapTile.col].fallen = true;
      trapsRevealed++;
      updateScoreDisplay();

      setTimeout(() => {
        cells[trapIdx].classList.add("fallen-done");
        cells[trapIdx].classList.remove("fallen");
      }, 400);
    }, 500);

    setTimeout(() => {
      selectedPath.forEach(p => {
        const idx = p.row * BOARD_SIZE + p.col;
        cells[idx].classList.remove("trapped");
      });
      clearSelection();
    }, 500);

    return;
  }

  // SAFE WORD — score it!
  const points = SCORE_TABLE[Math.min(word.length, 7)] || 11;
  score += points;
  foundWords.push(word);

  showStatus(`+${points} POINTS`, "status-valid");

  // Pulse animation on used tiles
  selectedPath.forEach(p => {
    const idx = p.row * BOARD_SIZE + p.col;
    cells[idx].classList.add("correct");
    setTimeout(() => cells[idx].classList.remove("correct"), 500);
  });

  updateScoreDisplay();
  clearSelection();
}

function clearSelection() {
  setTimeout(() => {
    selectedPath = [];
    highlightSelected();
    updateCurrentWord();
  }, 100);
}

function showStatus(msg, cls) {
  wordStatusEl.innerHTML = `<span class="${cls}">${msg}</span>`;
  setTimeout(() => { wordStatusEl.innerHTML = ""; }, 1500);
}

// ─── Game Flow ───────────────────────────────────────────────────
function startGame() {
  generateBoard();
  selectedPath = [];
  foundWords = [];
  score = 0;
  trapsRevealed = 0;
  gameActive = true;

  introScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  renderBoard();
  updateScoreDisplay();
  updateCurrentWord();
  wordStatusEl.innerHTML = "";
}

function endGame() {
  gameActive = false;

  // Reveal remaining traps
  const cells = boardEl.querySelectorAll(".cell");
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE; c++) {
      const idx = r * BOARD_SIZE + c;
      const cell = board[r][c];
      if (cell.fallen) continue;
      if (cell.isTrap) {
        cells[idx].classList.add("trap-revealed");
      }
    }
  }

  // Show results after a pause
  setTimeout(() => {
    gameScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");

    document.getElementById("final-score-display").textContent = score;

    const trapsHit = trapsRevealed;
    const trapsAvoided = NUM_TRAPS - trapsRevealed;

    document.getElementById("stats").innerHTML = `
      <div>${foundWords.length} word${foundWords.length !== 1 ? "s" : ""} found</div>
      <div>${trapsHit} trap${trapsHit !== 1 ? "s" : ""} triggered &middot; ${trapsAvoided} avoided</div>
    `;

    const listEl = document.getElementById("words-list");
    listEl.innerHTML = "";
    foundWords.sort((a, b) => b.length - a.length).forEach(w => {
      const tag = document.createElement("span");
      tag.className = "word-tag";
      tag.textContent = w;
      listEl.appendChild(tag);
    });
  }, 1500);
}

// ─── Events ──────────────────────────────────────────────────────
document.getElementById("btn-start").addEventListener("click", startGame);
document.getElementById("btn-done").addEventListener("click", endGame);
document.getElementById("btn-replay").addEventListener("click", startGame);

// Prevent scrolling on touch
document.addEventListener("touchmove", e => {
  if (gameActive) e.preventDefault();
}, { passive: false });

// ─── Utils ───────────────────────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Toast
let toastTimeout;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.add("hidden"), 1500);
}
