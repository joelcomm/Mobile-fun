/* Hooked — pick the opening line that stops the scroll.
 *
 * Every answer comes from real players. The vote API (HOOKED_API in hooks.js) freezes all vote
 * totals at the start of each UTC day; that snapshot is the day's answer key, so every player
 * gets the same rounds and the same answers all day.
 *
 *  - Scored rounds: pairs with at least MIN_VOTES votes and a clear majority (MAJORITY).
 *    You score when you pick the hook most players picked.
 *  - Vote rounds: pairs that don't have enough votes yet. Unscored; today's votes become
 *    tomorrow's answers.
 *
 * The editor's reasoning (why) is shown after each pick as an opinion, never as the answer. */
(function () {
  var KEY = 'hooked';
  var SCORED_PER_DAY = 5;
  var VOTES_PER_DAY = 2;      // vote rounds once there are enough scored pairs
  var TOTAL_WHEN_SHORT = 7;   // while the answer pool is small, vote rounds fill up to this many rounds
  var MIN_VOTES = 30;
  var MAJORITY = 0.55;
  var LIVE_MIN = 10;          // votes needed before a live "so far" split is shown

  var API = (typeof HOOKED_API === 'string' ? HOOKED_API : '').replace(/\/+$/, '');

  var $ = function (id) { return document.getElementById(id); };
  var dom = {
    titleScreen: $('title-screen'), gameScreen: $('game-screen'), gameoverScreen: $('gameover-screen'),
    btnStart: $('btn-start'), btnNext: $('btn-next'), nextCd: $('next-cd'), status: $('hk-status'),
    roundLabel: $('round-label'), scoreLabel: $('score-label'), streakBar: $('streak-bar'),
    topicLabel: $('topic-label'), instruction: $('instruction-label'), options: $('statements'),
    feedback: $('feedback'), feedbackResult: $('feedback-result'), feedbackExplain: $('feedback-explain'),
    finalScore: $('final-score'), finalRank: $('final-rank'), finalGrid: $('final-grid'), finalStats: $('final-stats'),
    bestScore: $('best-score'), btnShare: $('btn-share')
  };

  HOOKS.forEach(function (h, i) { h._i = i; });

  var state = {};
  var lastShare = null;
  var cdTimer = null;

  /* ---------- voter id + local vote record ---------- */
  function voterId() {
    var v = null;
    try { v = localStorage.getItem('hooked-voter'); } catch (e) {}
    if (!v || !/^[A-Za-z0-9_-]{16,64}$/.test(v)) {
      var a = new Uint8Array(18);
      window.crypto.getRandomValues(a);
      var abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
      v = Array.prototype.map.call(a, function (b) { return abc[b % 64]; }).join('');
      try { localStorage.setItem('hooked-voter', v); } catch (e) {}
    }
    return v;
  }
  function markVoted(id) {
    try {
      var list = JSON.parse(localStorage.getItem('hooked-voted') || '[]');
      if (list.indexOf(id) === -1) { list.push(id); localStorage.setItem('hooked-voted', JSON.stringify(list)); }
    } catch (e) {}
  }

  /* ---------- API ---------- */
  function getJSON(path) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var t = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);
    return fetch(API + path, { signal: ctrl ? ctrl.signal : undefined, cache: 'no-store' })
      .then(function (r) { clearTimeout(t); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
  }
  function postVote(id, pick) {
    markVoted(id);
    return fetch(API + '/vote', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, keepalive: true,
      body: JSON.stringify({ id: id, pick: pick, voter: voterId() })
    }).then(function (r) { return r.json(); }).catch(function () { return null; });
  }

  /* ---------- the day's rounds, built from the frozen snapshot ---------- */
  function counts(tallies, id) { var t = tallies[id]; return t ? { w: t[0] || 0, l: t[1] || 0 } : { w: 0, l: 0 }; }

  function buildRounds(tallies) {
    var graduated = [], pending = [];
    HOOKS.forEach(function (h) {
      var c = counts(tallies, h.id), n = c.w + c.l;
      if (n >= MIN_VOTES) {
        // pairs that land close to 50/50 are retired: there's no clear crowd answer
        if (Math.max(c.w, c.l) / n >= MAJORITY) graduated.push(h);
      } else {
        pending.push({ h: h, n: n });
      }
    });
    var scored = graduated.length >= SCORED_PER_DAY ? Daily.dealFromDeck(graduated, SCORED_PER_DAY) : graduated.slice();
    var voteN = scored.length >= SCORED_PER_DAY ? VOTES_PER_DAY : TOTAL_WHEN_SHORT - scored.length;
    pending.sort(function (a, b) { return a.n - b.n || a.h._i - b.h._i; });
    var votes = pending.slice(0, voteN).map(function (p) { return p.h; });
    return scored.map(function (h) { var c = counts(tallies, h.id); return { kind: 'scored', h: h, w: c.w, l: c.l }; })
      .concat(votes.map(function (h) { return { kind: 'vote', h: h }; }));
  }

  // Same order for every player, but the editor's pick isn't always on top.
  function orderFor(index) {
    var r = Daily.createRng(Daily.getDayNumber() * 7351 + index * 101);
    return r() < 0.5 ? ['w', 'l'] : ['l', 'w'];
  }

  /* ---------- screens ---------- */
  function showScreen(name) {
    dom.titleScreen.classList.add('hidden');
    dom.gameScreen.classList.add('hidden');
    dom.gameoverScreen.classList.add('hidden');
    $(name + '-screen').classList.remove('hidden');
  }
  function setStatus(text) { if (dom.status) { dom.status.textContent = text || ''; dom.status.classList.toggle('hidden', !text); } }
  function showBest() { var b = localStorage.getItem('hooked-best'); if (b) dom.bestScore.textContent = 'BEST: ' + b; }

  function startCountdown() {
    function tick() {
      dom.nextCd.innerHTML = '<span style="display:block;font-size:11px;letter-spacing:2px;color:#6b6b80;margin-bottom:4px">NEW HOOKS IN</span>' + Daily.formatCountdown();
    }
    tick();
    if (cdTimer) clearInterval(cdTimer);
    cdTimer = setInterval(tick, 1000);
  }

  /* ---------- flow ---------- */
  function init() {
    Daily.injectDailyInfo('#title-screen', KEY);
    showBest();
    dom.btnNext.addEventListener('click', nextRound);
    dom.options.addEventListener('click', handlePick);
    if (dom.btnShare) dom.btnShare.addEventListener('click', shareToX);

    var completed = Daily.getDailyResult(KEY);
    if (completed) { renderGameOver(completed); return; }

    if (!API) {
      dom.btnStart.disabled = true;
      dom.btnStart.textContent = 'OPENS SOON';
      setStatus('Hooked is warming up. Every answer comes from real players’ votes, and voting opens soon.');
      return;
    }
    dom.btnStart.addEventListener('click', function () { load(null); });
    var p = Daily.getProgress(KEY);
    if (p) load(p);
  }

  function load(progress) {
    dom.btnStart.disabled = true;
    dom.btnStart.textContent = 'LOADING…';
    setStatus('');
    getJSON('/today').then(function (snap) {
      var rounds = buildRounds((snap && snap.tallies) || {});
      if (!rounds.length) throw new Error('no rounds');
      state = { rounds: rounds, current: 0, score: 0, streak: 0, maxStreak: 0, results: [], answered: false };
      if (progress) {
        state.current = progress.current || 0; state.score = progress.score || 0; state.streak = progress.streak || 0;
        state.maxStreak = progress.maxStreak || 0; state.results = progress.results || [];
        if (state.current >= rounds.length) { Daily.clearProgress(KEY); endGame(); return; }
      }
      showScreen('game');
      showRound();
    }).catch(function () {
      showScreen('title');
      dom.btnStart.disabled = false;
      dom.btnStart.textContent = 'TRY AGAIN';
      setStatus('Couldn’t load today’s player votes. Check your connection and try again.');
    });
  }

  function showRound() {
    var r = state.rounds[state.current];
    state.answered = false;
    dom.roundLabel.textContent = (state.current + 1) + ' / ' + state.rounds.length;
    dom.scoreLabel.textContent = state.score;
    dom.streakBar.style.setProperty('--progress', (state.current / state.rounds.length * 100) + '%');
    dom.topicLabel.textContent = r.h.topic;
    dom.instruction.textContent = r.kind === 'scored' ? 'TAP THE HOOK THAT STOPS YOUR SCROLL' : 'BONUS VOTE · SETS TOMORROW’S ANSWER';
    dom.feedback.classList.add('hidden');
    dom.options.innerHTML = '';
    orderFor(state.current).forEach(function (which) {
      var btn = document.createElement('button');
      btn.className = 'stmt-btn';
      btn.dataset.which = which;
      btn.textContent = r.h[which];
      dom.options.appendChild(btn);
    });
  }

  function pct(a, n) { return n ? Math.round(a / n * 100) : 0; }
  function fmt(n) { return n.toLocaleString('en-US'); }
  function quote(s) { return '“' + (s.length > 60 ? s.slice(0, 57).replace(/\s+\S*$/, '') + '…' : s) + '”'; }

  function editorTake(h, crowdSide) {
    if (crowdSide === 'w') return 'Editor’s take: ' + h.why;
    if (crowdSide === 'l') return 'Our editors picked the other one, ' + quote(h.w) + ' ' + h.why;
    return 'Editor’s pick: ' + quote(h.w) + ' ' + h.why;
  }

  function addLabel(btn, text, good) {
    var s = document.createElement('span');
    s.className = 'stmt-label ' + (good ? 'true-label' : 'false-label');
    s.textContent = text;
    btn.appendChild(s);
  }

  function handlePick(e) {
    var btn = e.target.closest('.stmt-btn');
    if (!btn || state.answered) return;
    state.answered = true;
    var r = state.rounds[state.current];
    var pick = btn.dataset.which;
    var btns = dom.options.querySelectorAll('.stmt-btn');
    btns.forEach(function (b) { b.classList.add('locked'); });
    var sent = postVote(r.h.id, pick);

    if (r.kind === 'scored') {
      var n = r.w + r.l;
      var crowd = r.w >= r.l ? 'w' : 'l';
      var ok = pick === crowd;
      state.results.push(ok ? 'ok' : 'miss');
      if (ok) {
        state.streak++;
        if (state.streak > state.maxStreak) state.maxStreak = state.streak;
        state.score += 100 + Math.min(state.streak - 1, 4) * 20;
      } else {
        state.streak = 0;
      }
      btns.forEach(function (b) {
        var side = b.dataset.which, share = pct(side === 'w' ? r.w : r.l, n);
        addLabel(b, side === crowd ? share + '% · CROWD PICK' : share + '%', side === crowd);
        if (b === btn) b.classList.add(ok ? 'correct-pick' : 'wrong-pick');
        else if (side === crowd) b.classList.add('reveal-lie');
      });
      dom.feedbackResult.textContent = ok ? 'WITH THE CROWD!' : 'THE CROWD DISAGREED';
      dom.feedbackResult.className = 'feedback-result ' + (ok ? 'correct' : 'wrong');
      dom.feedbackExplain.textContent = 'Crowd pick: ' + pct(crowd === 'w' ? r.w : r.l, n) + '% of ' + fmt(n) +
        ' players. ' + editorTake(r.h, crowd);
    } else {
      state.results.push('vote');
      btn.classList.add('correct-pick');
      addLabel(btn, 'YOUR VOTE', true);
      dom.feedbackResult.textContent = 'VOTE COUNTED';
      dom.feedbackResult.className = 'feedback-result correct';
      dom.feedbackExplain.textContent = 'Tomorrow, this pair’s answer comes from votes like yours.';
      sent.then(function (res) {
        if (!res || typeof res.w !== 'number' || state.rounds[state.current] !== r) return;
        var tot = res.w + res.l, mine = pick === 'w' ? res.w : res.l;
        var lead = tot >= LIVE_MIN
          ? 'So far ' + pct(mine, tot) + '% of ' + fmt(tot) + ' players agree with you. '
          : 'You’re one of the first to vote on this pair. ';
        if (res.counted === false) lead = 'You already voted on this pair. ' + lead;
        dom.feedbackResult.textContent = res.counted === false ? 'ALREADY VOTED' : 'VOTE COUNTED';
        dom.feedbackExplain.textContent = lead + editorTake(r.h, null);
      });
    }
    dom.scoreLabel.textContent = state.score;
    dom.feedback.classList.remove('hidden');
    Daily.saveProgress(KEY, {
      current: state.current + 1, score: state.score, streak: state.streak,
      maxStreak: state.maxStreak, results: state.results
    });
  }

  function nextRound() {
    state.current++;
    if (state.current >= state.rounds.length) { Daily.clearProgress(KEY); endGame(); }
    else showRound();
  }

  function rankFor(correct, scored) {
    if (!scored) return 'FOUNDING VOTER';
    var f = correct / scored;
    if (f >= 1) return 'CROWD WHISPERER';
    if (f >= 0.8) return 'SCROLL STOPPER';
    if (f >= 0.6) return 'SHARP EYE';
    if (f >= 0.4) return 'GETTING WARMER';
    return 'AGAINST THE GRAIN';
  }
  function gridOf(results) {
    return results.filter(function (x) { return x !== 'vote'; })
      .map(function (x) { return x === 'ok' ? '🟩' : '🟥'; }).join('');
  }

  function endGame() {
    var scored = state.results.filter(function (x) { return x !== 'vote'; }).length;
    var correct = state.results.filter(function (x) { return x === 'ok'; }).length;
    var data = { correct: correct, scored: scored, votes: state.results.length - scored, results: state.results, maxStreak: state.maxStreak };
    Daily.saveDailyResult(KEY, state.score, data);
    var prev = parseInt(localStorage.getItem('hooked-best') || '0', 10);
    if (state.score > prev) localStorage.setItem('hooked-best', state.score);
    showBest();
    data.score = state.score;
    renderGameOver(data);
  }

  function renderGameOver(d) {
    showScreen('gameover');
    var results = d.results || [];
    var scored = typeof d.scored === 'number' ? d.scored : results.filter(function (x) { return x !== 'vote'; }).length;
    var correct = d.correct || 0;
    dom.finalScore.textContent = d.score || 0;
    dom.finalRank.textContent = rankFor(correct, scored);
    dom.finalGrid.textContent = gridOf(results);
    var lines = [];
    if (scored) lines.push(correct + ' / ' + scored + ' matched the crowd');
    if (d.votes) lines.push(d.votes + ' bonus vote' + (d.votes === 1 ? '' : 's') + ' cast for tomorrow');
    if (scored) lines.push('Best streak: ' + (d.maxStreak || 0));
    dom.finalStats.innerHTML = lines.join('<br>');
    lastShare = { correct: correct, scored: scored, grid: gridOf(results) };
    if (!results.length && dom.btnShare) dom.btnShare.classList.add('hidden');
    dom.streakBar.style.setProperty('--progress', '100%');
    startCountdown();
  }

  // Spoiler-free: the player's tally and grid only, never the hooks.
  function shareText(s) {
    var day = Daily.getDayNumber();
    if (!s.scored) return 'I cast my votes on today\'s Hooked #' + day + ' 🎣 Tomorrow\'s answers come from players like me.\nWhich hook stops your scroll?';
    return 'Which hook stops the scroll? I matched the crowd on ' + s.correct + '/' + s.scored +
      ' on today\'s Hooked #' + day + ' 🎣\n' + s.grid + '\nCan you beat it?';
  }
  function shareToX() {
    if (!lastShare) return;
    var url = window.AcumenX ? AcumenX.cardUrl(KEY) : 'https://games.aiforeveryoneshow.com/hooked/x-card/';
    if (window.AcumenX) AcumenX.postToX(shareText(lastShare), url);
    else window.open('https://x.com/intent/post?text=' + encodeURIComponent(shareText(lastShare)) + '&url=' + encodeURIComponent(url), '_blank', 'noopener');
  }

  init();
})();
