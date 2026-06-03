(function () {
  'use strict';

  // ─── Constants ──────────────────────────────────────────────
  var START_CASH = 1000;
  var B = 220;                 // LMSR liquidity parameter — higher = steadier prices
  var LS_CASH = 'oracle-cash';
  var LS_POOLS = 'oracle-pools';       // { id: {qy, qn} }  outstanding share quantities
  var LS_POS = 'oracle-positions';     // { id: { yes:{shares,cost}, no:{shares,cost} } }

  // ─── LMSR market maker ──────────────────────────────────────
  // Cost function C(qy,qn) = B * ln(e^(qy/B) + e^(qn/B)), computed with
  // a max-shift for numerical stability. Marginal price of YES is the
  // softmax weight on qy, so YES + NO prices always sum to 1.
  function cost(qy, qn) {
    var m = Math.max(qy, qn) / B;
    return B * (m + Math.log(Math.exp(qy / B - m) + Math.exp(qn / B - m)));
  }
  function priceYes(qy, qn) {
    var m = Math.max(qy, qn);
    var a = Math.exp((qy - m) / B);
    var b = Math.exp((qn - m) / B);
    return a / (a + b);
  }
  // Shares of `side` ('yes'|'no') bought for `dollars`, via binary search.
  function sharesForDollars(pool, side, dollars) {
    var base = cost(pool.qy, pool.qn);
    var lo = 0, hi = 1;
    // expand hi until it costs more than the budget
    while (true) {
      var c = (side === 'yes')
        ? cost(pool.qy + hi, pool.qn)
        : cost(pool.qy, pool.qn + hi);
      if (c - base >= dollars || hi > 1e7) break;
      hi *= 2;
    }
    for (var i = 0; i < 60; i++) {
      var mid = (lo + hi) / 2;
      var cm = (side === 'yes')
        ? cost(pool.qy + mid, pool.qn)
        : cost(pool.qy, pool.qn + mid);
      if (cm - base > dollars) hi = mid; else lo = mid;
    }
    return (lo + hi) / 2;
  }
  // Dollars returned for selling `shares` of `side`.
  function dollarsForShares(pool, side, shares) {
    var base = cost(pool.qy, pool.qn);
    var after = (side === 'yes')
      ? cost(pool.qy - shares, pool.qn)
      : cost(pool.qy, pool.qn - shares);
    return base - after;
  }

  // ─── Persistent state ───────────────────────────────────────
  function readJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function writeJSON(key, v) { localStorage.setItem(key, JSON.stringify(v)); }

  var cash = parseFloat(localStorage.getItem(LS_CASH));
  if (isNaN(cash)) cash = START_CASH;
  var pools = readJSON(LS_POOLS, {});
  var positions = readJSON(LS_POS, {});

  function poolFor(m) {
    if (!pools[m.id]) {
      // Seed so that priceYes == m.p:  set qn = 0, qy = B * ln(p/(1-p)).
      var p = Math.min(0.97, Math.max(0.03, m.p));
      pools[m.id] = { qy: B * Math.log(p / (1 - p)), qn: 0 };
    }
    return pools[m.id];
  }
  function posFor(id) {
    if (!positions[id]) positions[id] = { yes: { shares: 0, cost: 0 }, no: { shares: 0, cost: 0 } };
    return positions[id];
  }
  function save() {
    localStorage.setItem(LS_CASH, String(cash));
    writeJSON(LS_POOLS, pools);
    writeJSON(LS_POS, positions);
  }

  // ─── Formatting helpers ─────────────────────────────────────
  function money(n) {
    var neg = n < 0;
    n = Math.abs(n);
    var s = '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return neg ? '-' + s : s;
  }
  function pct(p) { return Math.round(p * 100) + '¢'; }      // price shown in cents (0–100)
  function prob(p) { return Math.round(p * 100) + '%'; }
  function compactVol(v) {
    if (v >= 1e6) return '$' + (v / 1e6).toFixed(1) + 'M';
    if (v >= 1e3) return '$' + Math.round(v / 1e3) + 'K';
    return '$' + v;
  }

  var MARKET_BY_ID = {};
  MARKETS.forEach(function (m) { MARKET_BY_ID[m.id] = m; });

  // ─── DOM ────────────────────────────────────────────────────
  var dom = {
    cash: document.getElementById('cash-amount'),
    portfolioBtn: document.getElementById('tab-portfolio'),
    marketsBtn: document.getElementById('tab-markets'),
    marketsView: document.getElementById('markets-view'),
    portfolioView: document.getElementById('portfolio-view'),
    detailView: document.getElementById('detail-view'),
    marketList: document.getElementById('market-list'),
    catFilter: document.getElementById('cat-filter'),
    portfolioBody: document.getElementById('portfolio-body'),
    detailBody: document.getElementById('detail-body'),
    toast: document.getElementById('toast')
  };

  var activeCat = 'All';
  var currentMarketId = null;

  // ─── Toast ──────────────────────────────────────────────────
  var toastTimer = null;
  function toast(msg, kind) {
    dom.toast.textContent = msg;
    dom.toast.className = 'toast show' + (kind ? ' ' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { dom.toast.className = 'toast'; }, 2200);
  }

  // ─── Header ─────────────────────────────────────────────────
  function renderCash() { dom.cash.textContent = money(cash); }

  // ─── Markets list ───────────────────────────────────────────
  function renderCategories() {
    var cats = ['All'];
    MARKETS.forEach(function (m) { if (cats.indexOf(m.cat) < 0) cats.push(m.cat); });
    dom.catFilter.innerHTML = cats.map(function (c) {
      return '<button class="chip' + (c === activeCat ? ' active' : '') +
        '" data-cat="' + c + '">' + c + '</button>';
    }).join('');
  }

  function renderMarkets() {
    var list = MARKETS.filter(function (m) { return activeCat === 'All' || m.cat === activeCat; });
    dom.marketList.innerHTML = list.map(function (m) {
      var pool = poolFor(m);
      var py = priceYes(pool.qy, pool.qn);
      var pos = positions[m.id];
      var held = pos && (pos.yes.shares > 0.0001 || pos.no.shares > 0.0001);
      return '' +
        '<button class="market-card" data-id="' + m.id + '">' +
          '<div class="mc-top">' +
            '<span class="mc-cat">' + m.cat + '</span>' +
            (held ? '<span class="mc-held">HOLDING</span>' : '') +
          '</div>' +
          '<div class="mc-q">' + m.q + '</div>' +
          '<div class="mc-prob"><div class="mc-prob-fill" style="width:' + (py * 100) + '%"></div>' +
            '<span class="mc-prob-num">' + prob(py) + '</span></div>' +
          '<div class="mc-actions">' +
            '<span class="pill pill-yes">YES ' + pct(py) + '</span>' +
            '<span class="pill pill-no">NO ' + pct(1 - py) + '</span>' +
            '<span class="mc-vol">' + compactVol(m.vol) + ' Vol</span>' +
          '</div>' +
        '</button>';
    }).join('');
  }

  // ─── Market detail ──────────────────────────────────────────
  var detailSide = 'yes';   // selected buy side
  var detailAmt = 25;       // selected buy amount

  function renderDetail() {
    var m = MARKET_BY_ID[currentMarketId];
    if (!m) return;
    var pool = poolFor(m);
    var py = priceYes(pool.qy, pool.qn);
    var price = detailSide === 'yes' ? py : 1 - py;
    var amt = detailAmt === 'max' ? cash : Math.min(detailAmt, cash);
    var shares = amt > 0 ? sharesForDollars(pool, detailSide, amt) : 0;
    var avg = shares > 0 ? amt / shares : price;
    var pos = posFor(m.id);

    var quickAmts = [10, 25, 50, 100];

    dom.detailBody.innerHTML = '' +
      '<button class="back-btn" id="detail-back">&larr; Markets</button>' +
      '<div class="detail-cat">' + m.cat + ' &middot; Closes ' + m.close + '</div>' +
      '<h2 class="detail-q">' + m.q + '</h2>' +
      '<div class="detail-prob-row">' +
        '<div class="detail-prob-num">' + prob(py) + '</div>' +
        '<div class="detail-prob-lbl">chance YES</div>' +
        '<div class="detail-vol">' + compactVol(m.vol) + ' volume</div>' +
      '</div>' +
      '<div class="detail-prob"><div class="detail-prob-fill" style="width:' + (py * 100) + '%"></div></div>' +
      '<p class="detail-desc">' + m.desc + '</p>' +

      // Existing position
      renderPositionBox(m, pool, pos) +

      // Trade panel
      '<div class="trade-panel">' +
        '<div class="side-toggle">' +
          '<button class="side-btn yes' + (detailSide === 'yes' ? ' active' : '') + '" data-side="yes">' +
            'YES <span>' + pct(py) + '</span></button>' +
          '<button class="side-btn no' + (detailSide === 'no' ? ' active' : '') + '" data-side="no">' +
            'NO <span>' + pct(1 - py) + '</span></button>' +
        '</div>' +
        '<div class="amt-row">' +
          quickAmts.map(function (a) {
            return '<button class="amt-btn' + (detailAmt === a ? ' active' : '') +
              '" data-amt="' + a + '">$' + a + '</button>';
          }).join('') +
          '<button class="amt-btn' + (detailAmt === 'max' ? ' active' : '') + '" data-amt="max">Max</button>' +
        '</div>' +
        '<div class="trade-summary">' +
          '<div class="ts-row"><span>Buying</span><span>' + money(amt) + ' of ' + detailSide.toUpperCase() + '</span></div>' +
          '<div class="ts-row"><span>Avg price</span><span>' + (avg * 100).toFixed(1) + '¢</span></div>' +
          '<div class="ts-row"><span>Shares</span><span>' + shares.toFixed(1) + '</span></div>' +
          '<div class="ts-row ts-payout"><span>Payout if ' + detailSide.toUpperCase() + '</span><span>' + money(shares) + '</span></div>' +
        '</div>' +
        '<button class="buy-btn ' + detailSide + '" id="buy-btn"' + (amt <= 0 ? ' disabled' : '') + '>' +
          'Buy ' + detailSide.toUpperCase() + ' &middot; ' + money(amt) + '</button>' +
      '</div>';
  }

  function renderPositionBox(m, pool, pos) {
    var py = priceYes(pool.qy, pool.qn);
    var rows = '';
    [['yes', py], ['no', 1 - py]].forEach(function (pair) {
      var side = pair[0], price = pair[1];
      var p = pos[side];
      if (p.shares > 0.0001) {
        var value = dollarsForShares(pool, side, p.shares);
        var pl = value - p.cost;
        rows += '<div class="pos-line">' +
          '<span class="pos-side ' + side + '">' + side.toUpperCase() + '</span>' +
          '<span>' + p.shares.toFixed(1) + ' sh</span>' +
          '<span>' + money(value) + '</span>' +
          '<span class="' + (pl >= 0 ? 'up' : 'down') + '">' + (pl >= 0 ? '+' : '') + money(pl) + '</span>' +
          '<button class="sell-btn" data-side="' + side + '">Sell</button>' +
        '</div>';
      }
    });
    if (!rows) return '';
    return '<div class="pos-box"><div class="pos-box-hd">Your position</div>' + rows + '</div>';
  }

  function buy() {
    var m = MARKET_BY_ID[currentMarketId];
    var pool = poolFor(m);
    var amt = Math.min(detailAmt === 'max' ? cash : detailAmt, cash);
    if (amt <= 0.009) { toast('Not enough cash', 'bad'); return; }
    var shares = sharesForDollars(pool, detailSide, amt);
    if (detailSide === 'yes') pool.qy += shares; else pool.qn += shares;
    cash -= amt;
    var p = posFor(m.id)[detailSide];
    p.shares += shares;
    p.cost += amt;
    m.vol += Math.round(amt);
    save();
    renderCash();
    renderDetail();
    toast('Bought ' + shares.toFixed(1) + ' ' + detailSide.toUpperCase() + ' shares', 'good');
  }

  function sell(side) {
    var m = MARKET_BY_ID[currentMarketId];
    var pool = poolFor(m);
    var p = posFor(m.id)[side];
    if (p.shares <= 0.0001) return;
    var proceeds = dollarsForShares(pool, side, p.shares);
    if (side === 'yes') pool.qy -= p.shares; else pool.qn -= p.shares;
    cash += proceeds;
    var soldCost = p.cost;
    var pl = proceeds - soldCost;
    p.shares = 0;
    p.cost = 0;
    m.vol += Math.round(proceeds);
    save();
    renderCash();
    renderDetail();
    toast('Sold for ' + money(proceeds) + ' (' + (pl >= 0 ? '+' : '') + money(pl) + ')',
      pl >= 0 ? 'good' : 'bad');
  }

  // ─── Portfolio ──────────────────────────────────────────────
  function renderPortfolio() {
    var holdings = [];
    var holdingsValue = 0, totalCost = 0;
    MARKETS.forEach(function (m) {
      var pos = positions[m.id];
      if (!pos) return;
      var pool = poolFor(m);
      ['yes', 'no'].forEach(function (side) {
        var p = pos[side];
        if (p.shares > 0.0001) {
          var value = dollarsForShares(pool, side, p.shares);
          holdingsValue += value;
          totalCost += p.cost;
          holdings.push({ m: m, side: side, shares: p.shares, value: value, cost: p.cost });
        }
      });
    });
    var net = cash + holdingsValue;
    var totalPL = net - START_CASH;

    var html = '' +
      '<div class="net-card">' +
        '<div class="net-lbl">Net worth</div>' +
        '<div class="net-val">' + money(net) + '</div>' +
        '<div class="net-pl ' + (totalPL >= 0 ? 'up' : 'down') + '">' +
          (totalPL >= 0 ? '▲ +' : '▼ ') + money(totalPL) +
          ' (' + (totalPL >= 0 ? '+' : '') + (totalPL / START_CASH * 100).toFixed(1) + '%)</div>' +
        '<div class="net-split">' +
          '<div><span>Cash</span><strong>' + money(cash) + '</strong></div>' +
          '<div><span>Positions</span><strong>' + money(holdingsValue) + '</strong></div>' +
        '</div>' +
      '</div>';

    if (holdings.length === 0) {
      html += '<div class="empty">' +
        '<div class="empty-icon">📈</div>' +
        '<p>No positions yet.</p>' +
        '<p class="empty-sub">Browse the markets and back your predictions.</p>' +
        '<button class="link-btn" id="go-markets">Explore markets &rarr;</button>' +
      '</div>';
    } else {
      html += '<div class="holdings-hd">Open positions</div>';
      html += holdings.map(function (h) {
        var pl = h.value - h.cost;
        return '<button class="holding-card" data-id="' + h.m.id + '">' +
          '<div class="hc-q">' + h.m.q + '</div>' +
          '<div class="hc-row">' +
            '<span class="pos-side ' + h.side + '">' + h.side.toUpperCase() + '</span>' +
            '<span class="hc-sh">' + h.shares.toFixed(1) + ' sh</span>' +
            '<span class="hc-val">' + money(h.value) + '</span>' +
            '<span class="hc-pl ' + (pl >= 0 ? 'up' : 'down') + '">' + (pl >= 0 ? '+' : '') + money(pl) + '</span>' +
          '</div>' +
        '</button>';
      }).join('');
    }

    html += '<button class="reset-btn" id="reset-btn">Reset account</button>';
    dom.portfolioBody.innerHTML = html;
  }

  // ─── View switching ─────────────────────────────────────────
  function showView(name) {
    dom.marketsView.classList.toggle('hidden', name !== 'markets');
    dom.portfolioView.classList.toggle('hidden', name !== 'portfolio');
    dom.detailView.classList.toggle('hidden', name !== 'detail');
    dom.marketsBtn.classList.toggle('active', name === 'markets');
    dom.portfolioBtn.classList.toggle('active', name === 'portfolio');
    if (name === 'markets') renderMarkets();
    if (name === 'portfolio') renderPortfolio();
    if (name === 'detail') renderDetail();
    window.scrollTo(0, 0);
  }

  function openMarket(id) {
    currentMarketId = id;
    detailSide = 'yes';
    detailAmt = 25;
    showView('detail');
  }

  // ─── Events ─────────────────────────────────────────────────
  dom.marketsBtn.addEventListener('click', function () { showView('markets'); });
  dom.portfolioBtn.addEventListener('click', function () { showView('portfolio'); });

  dom.catFilter.addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (!b) return;
    activeCat = b.getAttribute('data-cat');
    renderCategories();
    renderMarkets();
  });

  dom.marketList.addEventListener('click', function (e) {
    var c = e.target.closest('.market-card');
    if (c) openMarket(c.getAttribute('data-id'));
  });

  dom.detailBody.addEventListener('click', function (e) {
    if (e.target.closest('#detail-back')) { showView('markets'); return; }
    var sideBtn = e.target.closest('.side-btn');
    if (sideBtn) { detailSide = sideBtn.getAttribute('data-side'); renderDetail(); return; }
    var amtBtn = e.target.closest('.amt-btn');
    if (amtBtn) {
      var a = amtBtn.getAttribute('data-amt');
      detailAmt = a === 'max' ? 'max' : parseInt(a, 10);
      renderDetail();
      return;
    }
    if (e.target.closest('#buy-btn')) { buy(); return; }
    var sellBtn = e.target.closest('.sell-btn');
    if (sellBtn) { sell(sellBtn.getAttribute('data-side')); return; }
  });

  dom.portfolioBody.addEventListener('click', function (e) {
    if (e.target.closest('#go-markets')) { showView('markets'); return; }
    if (e.target.closest('#reset-btn')) {
      if (confirm('Reset your account? This clears all positions and restores ' + money(START_CASH) + '.')) {
        cash = START_CASH; pools = {}; positions = {};
        save();
        renderCash();
        renderPortfolio();
        toast('Account reset', 'good');
      }
      return;
    }
    var card = e.target.closest('.holding-card');
    if (card) openMarket(card.getAttribute('data-id'));
  });

  // ─── Init ───────────────────────────────────────────────────
  // detailAmt may be 'max'; coerce for first render math handled inline.
  renderCash();
  renderCategories();
  renderMarkets();
  showView('markets');
})();
