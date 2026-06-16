(function () {
  'use strict';

  var MAX_GUESSES = 4;
  var PENALTY_WRONG = 20;
  var PENALTY_HINT = 15;
  var SCORE_FLOOR = 10;
  var GAME_KEY = 'threads';

  var puzzle, score, guessesLeft, hintsUsed, guesses, solved, hintLetters;

  var $titleScreen = document.getElementById('title-screen');
  var $gameScreen = document.getElementById('game-screen');
  var $overlay = document.getElementById('overlay');
  var $helpOverlay = document.getElementById('help-overlay');
  var $toast = document.getElementById('toast');
  var $input = document.getElementById('guess-input');
  var $btnGuess = document.getElementById('btn-guess');
  var $btnHint = document.getElementById('btn-hint');
  var $btnStart = document.getElementById('btn-start');
  var $btnShare = document.getElementById('btn-share');
  var $btnCloseHelp = document.getElementById('btn-close-help');
  var $scoreValue = document.getElementById('score-value');
  var $hintDisplay = document.getElementById('hint-display');
  var $hintText = document.getElementById('hint-text');
  var $mistakeDots = document.getElementById('mistake-dots');

  Daily.injectDailyInfo('#title-screen', GAME_KEY);

  $btnStart.addEventListener('click', startGame);
  $btnGuess.addEventListener('click', submitGuess);
  $btnHint.addEventListener('click', useHint);
  $btnShare.addEventListener('click', shareResult);
  $btnCloseHelp.addEventListener('click', function () {
    $helpOverlay.classList.add('hidden');
  });

  $input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !$btnGuess.disabled) submitGuess();
  });

  $input.addEventListener('input', function () {
    $btnGuess.disabled = $input.value.trim().length === 0;
  });

  function startGame() {
    var deals = Daily.dealFromDeck(PUZZLES, 1);
    puzzle = deals[0];

    var progress = Daily.getProgress(GAME_KEY);
    if (progress && progress.puzzleId === puzzle.id) {
      score = progress.score;
      guessesLeft = progress.guessesLeft;
      hintsUsed = progress.hintsUsed;
      guesses = progress.guesses || [];
      solved = progress.solved || false;
      hintLetters = progress.hintLetters || [];
    } else {
      score = 100;
      guessesLeft = MAX_GUESSES;
      hintsUsed = 0;
      guesses = [];
      solved = false;
      hintLetters = [];
    }

    $titleScreen.classList.add('hidden');
    $gameScreen.classList.remove('hidden');
    renderGame();

    if (solved) {
      showOverlay(true);
    } else if (guessesLeft <= 0) {
      showOverlay(false);
    }
  }

  function renderGame() {
    for (var i = 0; i < 3; i++) {
      var $cue = document.getElementById('cue-' + i);
      $cue.textContent = puzzle.cues[i];
      $cue.classList.toggle('solved', solved);
    }

    renderDots();
    updateScore();
    renderHints();

    if (solved || guessesLeft <= 0) {
      $input.disabled = true;
      $btnGuess.disabled = true;
      $btnHint.disabled = true;
      if (solved) {
        $input.value = puzzle.answer;
        $input.classList.add('correct');
        showLinks();
      }
    }
  }

  function renderDots() {
    var html = '';
    for (var i = 0; i < MAX_GUESSES; i++) {
      html += '<span class="dot' + (i >= guessesLeft ? ' used' : '') + '"></span>';
    }
    $mistakeDots.innerHTML = html;
  }

  function updateScore() {
    $scoreValue.textContent = score;
  }

  function renderHints() {
    if (hintLetters.length > 0) {
      $hintDisplay.classList.remove('hidden');
      var display = '';
      var answer = puzzle.answer;
      for (var i = 0; i < answer.length; i++) {
        if (hintLetters.indexOf(i) !== -1) {
          display += answer[i];
        } else {
          display += '_';
        }
      }
      $hintText.textContent = display;
    } else {
      $hintDisplay.classList.add('hidden');
    }

    $btnHint.disabled = solved || guessesLeft <= 0 || hintLetters.length >= puzzle.answer.length - 1;
  }

  function showLinks() {
    var $linkArea = document.getElementById('link-area');
    $linkArea.classList.remove('hidden');
    for (var i = 0; i < 3; i++) {
      document.getElementById('link-' + i).textContent = puzzle.links[i];
    }
  }

  function submitGuess() {
    if (solved || guessesLeft <= 0) return;

    var guess = $input.value.trim().toUpperCase();
    if (!guess) return;

    if (guesses.indexOf(guess) !== -1) {
      showToast('Already guessed!');
      return;
    }

    guesses.push(guess);

    if (guess === puzzle.answer.toUpperCase()) {
      solved = true;
      score = Math.max(score, SCORE_FLOOR);
      $input.classList.add('correct');
      $input.disabled = true;
      $btnGuess.disabled = true;
      $btnHint.disabled = true;

      for (var i = 0; i < 3; i++) {
        document.getElementById('cue-' + i).classList.add('solved');
      }
      showLinks();

      Daily.saveDailyResult(GAME_KEY, score, {
        guesses: guesses.length,
        hints: hintsUsed,
        answer: puzzle.answer
      });
      Daily.clearProgress(GAME_KEY);

      setTimeout(function () { showOverlay(true); }, 800);
    } else {
      guessesLeft--;
      score = Math.max(score - PENALTY_WRONG, 0);

      $input.classList.add('wrong');
      setTimeout(function () { $input.classList.remove('wrong'); }, 500);
      $input.value = '';
      $btnGuess.disabled = true;

      renderDots();
      updateScore();

      if (guessesLeft <= 0) {
        score = 0;
        updateScore();
        $input.disabled = true;
        $btnGuess.disabled = true;
        $btnHint.disabled = true;

        Daily.saveDailyResult(GAME_KEY, 0, {
          guesses: guesses.length,
          hints: hintsUsed,
          answer: puzzle.answer
        });
        Daily.clearProgress(GAME_KEY);

        setTimeout(function () { showOverlay(false); }, 600);
      } else {
        saveProgress();
        var remaining = MAX_GUESSES - guessesLeft;
        if (remaining === 1) {
          showToast('Not quite!');
        } else {
          showToast(guessesLeft + ' guess' + (guessesLeft === 1 ? '' : 'es') + ' left');
        }
      }
    }
  }

  function useHint() {
    if (solved || guessesLeft <= 0) return;

    var answer = puzzle.answer;
    var unrevealed = [];
    for (var i = 0; i < answer.length; i++) {
      if (hintLetters.indexOf(i) === -1) unrevealed.push(i);
    }

    if (unrevealed.length <= 1) return;

    var idx = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    hintLetters.push(idx);
    hintsUsed++;
    score = Math.max(score - PENALTY_HINT, 0);

    updateScore();
    renderHints();
    saveProgress();
  }

  function saveProgress() {
    Daily.saveProgress(GAME_KEY, {
      puzzleId: puzzle.id,
      score: score,
      guessesLeft: guessesLeft,
      hintsUsed: hintsUsed,
      guesses: guesses,
      solved: solved,
      hintLetters: hintLetters
    });
  }

  function showOverlay(won) {
    $overlay.classList.remove('hidden');

    var $title = document.getElementById('overlay-title');
    var $answer = document.getElementById('overlay-answer');
    var $links = document.getElementById('overlay-links');
    var $score = document.getElementById('overlay-score');
    var $stats = document.getElementById('overlay-stats');

    $title.textContent = won ? 'Linked!' : 'Missing!';

    $answer.textContent = puzzle.answer;

    var linksHtml = '';
    for (var i = 0; i < 3; i++) {
      linksHtml += '<div class="overlay-link-row">' +
        '<span class="overlay-link-cue">' + puzzle.cues[i] + '</span>' +
        '<span class="overlay-link-arrow">&rarr;</span>' +
        '<span class="overlay-link-phrase">' + puzzle.links[i] + '</span>' +
        '</div>';
    }
    $links.innerHTML = linksHtml;

    var finalScore = won ? score : 0;
    $score.innerHTML = '<span class="big-score' + (won ? '' : ' lost') + '">' + finalScore + '</span>';

    var statsText = guesses.length + ' guess' + (guesses.length === 1 ? '' : 'es');
    if (hintsUsed > 0) statsText += ' &middot; ' + hintsUsed + ' hint' + (hintsUsed === 1 ? '' : 's');
    var streak = Daily.getStreak(GAME_KEY);
    if (streak > 0) statsText += ' &middot; ' + streak + ' day streak';
    $stats.innerHTML = statsText;

    var $cd = document.getElementById('next-cd');
    function tick() { $cd.textContent = 'Next puzzle in ' + Daily.formatCountdown(); }
    tick();
    setInterval(tick, 1000);
  }

  function shareResult() {
    var won = solved;
    var finalScore = won ? score : 0;
    var date = Daily.getDateString();

    var text = 'Missing Link — ' + date + '\n';
    text += won ? 'Linked!' : 'Missing!';
    text += ' Score: ' + finalScore + '\n';
    text += puzzle.cues.join(' · ') + ' → ' + (won ? puzzle.answer : '???') + '\n';
    text += guesses.length + ' guess' + (guesses.length === 1 ? '' : 'es');
    if (hintsUsed > 0) text += ', ' + hintsUsed + ' hint' + (hintsUsed === 1 ? '' : 's');
    text += '\nPlay at acumen.fun';

    if (navigator.share) {
      navigator.share({ text: text }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('Copied to clipboard!');
      });
    }
  }

  var toastTimer;
  function showToast(msg) {
    $toast.textContent = msg;
    $toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      $toast.classList.add('hidden');
    }, 2000);
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }

})();
