// ─── Config ──────────────────────────────────────
const ROUNDS_PER_GAME = 5;
const SCENE_TIME = 10000;
const QUESTION_TIME = 8000;
const PTS_QUESTION = 30;
const PTS_LIE = 60;

// ─── State ───────────────────────────────────────
let sceneOrder = [];
let roundIndex = 0;
let score = 0;
let roundResults = [];
let currentRound = {};
let questionIndex = 0;
let timerRAF = null;
let timerStart = 0;
let timerDuration = 0;
let answered = false;

// ─── DOM ─────────────────────────────────────────
const screens = {
  title: document.getElementById('title-screen'),
  scene: document.getElementById('scene-screen'),
  question: document.getElementById('question-screen'),
  lie: document.getElementById('lie-screen'),
  result: document.getElementById('result-screen'),
  gameover: document.getElementById('gameover-screen')
};

const dom = {
  bestScore: document.getElementById('best-score'),
  roundLabel: document.getElementById('round-label'),
  sceneText: document.getElementById('scene-text'),
  sceneTimerBar: document.getElementById('scene-timer-bar'),
  sceneCountdown: document.getElementById('scene-countdown'),
  qProgress: document.getElementById('q-progress'),
  qScore: document.getElementById('q-score'),
  qTimerBar: document.getElementById('q-timer-bar'),
  qText: document.getElementById('q-text'),
  qOptions: document.getElementById('q-options'),
  lieOptions: document.getElementById('lie-options'),
  resultTitle: document.getElementById('result-title'),
  resultSceneName: document.getElementById('result-scene-name'),
  resultQuestions: document.getElementById('result-questions'),
  resultLie: document.getElementById('result-lie'),
  resultBreakdown: document.getElementById('result-breakdown'),
  resultExplanation: document.getElementById('result-explanation'),
  btnNextRound: document.getElementById('btn-next-round'),
  finalScore: document.getElementById('final-score'),
  rankTitle: document.getElementById('rank-title'),
  roundSummary: document.getElementById('round-summary'),
  finalStats: document.getElementById('final-stats')
};

// ─── Screen Management ───────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[name].classList.remove('hidden');
  screens[name].classList.add('animate-in');
  setTimeout(() => screens[name].classList.remove('animate-in'), 400);
}

// ─── Timer ───────────────────────────────────────
function startTimer(durationMs, barEl, onTick, onExpire) {
  cancelTimer();
  timerStart = performance.now();
  timerDuration = durationMs;
  barEl.style.width = '100%';
  barEl.classList.remove('urgent');

  function tick(now) {
    const elapsed = now - timerStart;
    const remaining = Math.max(0, durationMs - elapsed);
    const pct = (remaining / durationMs) * 100;
    barEl.style.width = pct + '%';

    if (remaining < 3000) barEl.classList.add('urgent');

    if (onTick) onTick(remaining);

    if (remaining <= 0) {
      barEl.style.width = '0%';
      if (onExpire) onExpire();
      return;
    }
    timerRAF = requestAnimationFrame(tick);
  }
  timerRAF = requestAnimationFrame(tick);
}

function cancelTimer() {
  if (timerRAF) {
    cancelAnimationFrame(timerRAF);
    timerRAF = null;
  }
}

// ─── Game Init ───────────────────────────────────
function initGame() {
  sceneOrder = shuffle([...Array(SCENES.length).keys()]).slice(0, ROUNDS_PER_GAME);
  roundIndex = 0;
  score = 0;
  roundResults = [];
  showBestScore();
}

function showBestScore() {
  const best = localStorage.getItem('witness-best');
  dom.bestScore.textContent = best ? 'Best: ' + best : '';
}

// ─── Start Round ─────────────────────────────────
function startRound() {
  const scene = SCENES[sceneOrder[roundIndex]];
  currentRound = {
    sceneId: scene.id,
    answers: [],
    lieAnswer: -1,
    lieCorrect: false,
    questionPts: 0,
    liePts: 0,
    speedPts: 0
  };

  dom.roundLabel.textContent = 'SCENE ' + (roundIndex + 1) + ' OF ' + ROUNDS_PER_GAME;
  dom.sceneText.textContent = scene.text;
  showScreen('scene');

  startTimer(SCENE_TIME, dom.sceneTimerBar,
    (remaining) => {
      dom.sceneCountdown.textContent = Math.ceil(remaining / 1000) + 's';
    },
    () => {
      dom.sceneCountdown.textContent = '0s';
      startQuestions();
    }
  );
}

// ─── Questions ───────────────────────────────────
function startQuestions() {
  questionIndex = 0;
  showScreen('question');
  dom.qScore.textContent = score;
  showQuestion();
}

function showQuestion() {
  const scene = SCENES[sceneOrder[roundIndex]];
  const q = scene.questions[questionIndex];
  answered = false;

  dom.qProgress.textContent = 'Q' + (questionIndex + 1) + ' OF 5';
  dom.qText.textContent = q.q;
  dom.qOptions.innerHTML = '';

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.dataset.index = i;
    dom.qOptions.appendChild(btn);
  });

  const qStart = performance.now();

  startTimer(QUESTION_TIME, dom.qTimerBar, null, () => {
    if (!answered) answerQuestion(-1, qStart);
  });
}

function answerQuestion(selected, qStart) {
  if (answered) return;
  answered = true;
  cancelTimer();

  const scene = SCENES[sceneOrder[roundIndex]];
  const q = scene.questions[questionIndex];
  const correct = selected === q.answer;
  const timeMs = performance.now() - qStart;

  let pts = 0;
  let speed = 0;
  if (correct) {
    pts = PTS_QUESTION;
    speed = Math.max(0, Math.round((QUESTION_TIME - timeMs) / QUESTION_TIME * 5));
    pts += speed;
  }

  currentRound.answers.push({ selected, correct, pts, speed });
  currentRound.questionPts += correct ? PTS_QUESTION : 0;
  currentRound.speedPts += speed;
  score += pts;
  dom.qScore.textContent = score;

  // Visual feedback
  const btns = dom.qOptions.querySelectorAll('.option-btn');
  btns.forEach(b => b.classList.add('disabled'));

  if (selected >= 0) {
    btns[selected].classList.add(correct ? 'correct' : 'wrong');
  }
  if (!correct) {
    btns[q.answer].classList.add('reveal-correct');
  }

  setTimeout(() => {
    questionIndex++;
    if (questionIndex < 5) {
      showQuestion();
    } else {
      showLieDetection();
    }
  }, 800);
}

// ─── Question Click Handler ──────────────────────
dom.qOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('.option-btn');
  if (!btn || answered) return;
  const idx = parseInt(btn.dataset.index);
  const qStart = timerStart;
  answerQuestion(idx, qStart);
});

// ─── Lie Detection ───────────────────────────────
function showLieDetection() {
  const scene = SCENES[sceneOrder[roundIndex]];
  showScreen('lie');

  dom.lieOptions.innerHTML = '';
  scene.lieOptions.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'lie-btn';
    btn.textContent = opt;
    btn.dataset.index = i;
    dom.lieOptions.appendChild(btn);
  });
}

dom.lieOptions.addEventListener('click', (e) => {
  const btn = e.target.closest('.lie-btn');
  if (!btn) return;

  const idx = parseInt(btn.dataset.index);
  const scene = SCENES[sceneOrder[roundIndex]];
  const correct = idx === scene.lieCorrectIndex;

  currentRound.lieAnswer = idx;
  currentRound.lieCorrect = correct;
  currentRound.liePts = correct ? PTS_LIE : 0;
  score += currentRound.liePts;

  // Visual feedback
  const btns = dom.lieOptions.querySelectorAll('.lie-btn');
  btns.forEach(b => {
    b.style.pointerEvents = 'none';
  });

  btn.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) {
    btns[scene.lieCorrectIndex].classList.add('reveal-correct');
  }

  setTimeout(() => showRoundResult(), 1000);
});

// ─── Round Result ────────────────────────────────
function showRoundResult() {
  const scene = SCENES[sceneOrder[roundIndex]];
  const roundTotal = currentRound.questionPts + currentRound.liePts + currentRound.speedPts;

  roundResults.push({
    title: scene.title,
    total: roundTotal,
    questionPts: currentRound.questionPts,
    liePts: currentRound.liePts,
    speedPts: currentRound.speedPts,
    answers: currentRound.answers,
    lieCorrect: currentRound.lieCorrect
  });

  dom.resultTitle.textContent = 'CASE FILE #' + (roundIndex + 1);
  dom.resultSceneName.textContent = '"' + scene.title + '"';

  // Question dots
  dom.resultQuestions.innerHTML = '';
  currentRound.answers.forEach((a, i) => {
    const dot = document.createElement('div');
    dot.className = 'rq-dot ' + (a.correct ? 'right' : 'wrong-dot');
    dot.textContent = 'Q' + (i + 1);
    dom.resultQuestions.appendChild(dot);
  });

  // Lie result
  if (currentRound.lieCorrect) {
    dom.resultLie.textContent = 'LIE: CAUGHT';
    dom.resultLie.className = 'result-lie caught';
  } else {
    dom.resultLie.textContent = 'LIE: MISSED';
    dom.resultLie.className = 'result-lie missed';
  }

  // Breakdown
  dom.resultBreakdown.innerHTML =
    'Questions: ' + currentRound.questionPts + ' pts<br>' +
    'Lie Bonus: ' + currentRound.liePts + ' pts<br>' +
    'Speed: ' + currentRound.speedPts + ' pts<br>' +
    '<strong style="color:var(--accent)">Round Total: ' + roundTotal + ' pts</strong>';

  // Explanation
  dom.resultExplanation.textContent = scene.lieExplanation;

  // Button text
  if (roundIndex < ROUNDS_PER_GAME - 1) {
    dom.btnNextRound.textContent = 'NEXT SCENE';
  } else {
    dom.btnNextRound.textContent = 'FINAL REPORT';
  }

  showScreen('result');
}

// ─── Game Over ───────────────────────────────────
function showGameOver() {
  dom.finalScore.textContent = score;

  // Rank
  let rank = 'Rookie Officer';
  if (score >= 1150) rank = 'Mastermind';
  else if (score >= 1000) rank = 'Chief Inspector';
  else if (score >= 750) rank = 'Senior Inspector';
  else if (score >= 500) rank = 'Detective';
  else if (score >= 250) rank = 'Junior Detective';
  dom.rankTitle.textContent = rank;

  // Per-round summary
  dom.roundSummary.innerHTML = roundResults.map((r, i) =>
    'Scene ' + (i + 1) + ': ' + r.total + ' pts'
  ).join('<br>');

  // Stats
  const totalCorrect = roundResults.reduce((sum, r) => sum + r.answers.filter(a => a.correct).length, 0);
  const liesCaught = roundResults.filter(r => r.lieCorrect).length;
  dom.finalStats.innerHTML =
    'Questions: ' + totalCorrect + '/' + (ROUNDS_PER_GAME * 5) + '<br>' +
    'Lies Caught: ' + liesCaught + '/' + ROUNDS_PER_GAME;

  // Save best
  const best = parseInt(localStorage.getItem('witness-best') || '0');
  if (score > best) {
    localStorage.setItem('witness-best', score);
  }

  showScreen('gameover');
}

// ─── Event Listeners ─────────────────────────────
document.getElementById('btn-start').addEventListener('click', () => {
  initGame();
  startRound();
});

dom.btnNextRound.addEventListener('click', () => {
  roundIndex++;
  if (roundIndex < ROUNDS_PER_GAME) {
    startRound();
  } else {
    showGameOver();
  }
});

document.getElementById('btn-replay').addEventListener('click', () => {
  initGame();
  startRound();
});

// Prevent scrolling during gameplay
document.addEventListener('touchmove', (e) => {
  if (!screens.title.classList.contains('hidden') || !screens.gameover.classList.contains('hidden')) return;
  e.preventDefault();
}, { passive: false });

// ─── Utils ───────────────────────────────────────
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── Init ────────────────────────────────────────
showBestScore();
