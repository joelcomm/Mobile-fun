/* Hooked — past pairs with their final majorities (newest first, last 60 days). */
(function () {
  var API = String(typeof HOOKED_API === 'string' ? HOOKED_API : '').replace(/\/+$/, '');
  var START = typeof HOOKED_START === 'string' ? HOOKED_START : '2026-11-14';
  var BY_ID = {}; HOOKS.forEach(function (h) { BY_ID[h.id] = h; });
  var mine = {}; try { mine = JSON.parse(localStorage.getItem('hooked-history')) || {}; } catch (e) {}
  function utcDay(d) { return (d || new Date()).toISOString().slice(0, 10); }
  function addDays(day, n) { var d = new Date(day + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return utcDay(d); }
  function num(day) { return Math.round((Date.parse(day + 'T00:00:00Z') - Date.parse(START + 'T00:00:00Z')) / 86400000) + 1; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function nice(day) { return new Date(day + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }); }
  var list = document.getElementById('pp-list');
  var today = utcDay(), to = addDays(today, -1), from = addDays(to, -59);
  if (from < START) from = START;
  if (to < START) { list.innerHTML = '<p class="pp-empty">No finished days yet. Come back tomorrow.</p>'; return; }
  fetch(API + '/days?from=' + from + '&to=' + to, { cache: 'no-store' }).then(function (r) { return r.json(); }).then(function (res) {
    var days = (res.days || []).filter(function (d) { return d.final && BY_ID[d.id] && d.w + d.l > 0; }).reverse();
    if (!days.length) { list.innerHTML = '<p class="pp-empty">No finished days yet. Come back tomorrow.</p>'; return; }
    list.innerHTML = days.map(function (d) {
      var p = BY_ID[d.id], n = d.w + d.l, top = d.w === d.l ? null : (d.w > d.l ? 'w' : 'l');
      var me = mine[d.day] && mine[d.day].id === d.id ? mine[d.day].pick : null;
      function opt(side, L) {
        var c = side === 'w' ? d.w : d.l, pc = Math.round(c / n * 100), isTop = side === top;
        return '<div class="hk-row' + (isTop ? ' hk-top' : '') + '"><i style="width:' + pc + '%"></i>' +
          '<span class="hk-row-t">' + L + ' \u00B7 ' + esc(p[side]) + '</span><span class="hk-row-p">' + pc + '%' + (isTop ? ' \u2713' : '') + '</span></div>';
      }
      return '<article class="pp"><div class="pp-h"><span>#' + num(d.day) + ' · ' + nice(d.day) + '</span><b>' + n.toLocaleString('en-US') + ' votes</b></div>' +
        opt('w', 'A') + opt('l', 'B') + (me ? '<p class="pp-mine">You voted ' + (me === 'w' ? 'A' : 'B') + (top ? (me === top ? ' \u00B7 You called it \u2705' : ' \u00B7 The majority went the other way') : '') + '</p>' : '') +
        '<p class="pp-n"><b>Editor\u2019s note:</b> we\u2019d have bet on A. ' + esc(p.why) + '</p></article>';
    }).join('');
  }).catch(function () { list.innerHTML = '<p class="pp-empty">Couldn’t load past results. Check your connection.</p>'; });
})();
