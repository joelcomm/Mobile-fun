/* Links marked data-external escape in-app browsers (X, Facebook, Instagram, Android WebViews)
   so the full game opens in the phone's real browser:
     iOS: x-safari-https:// hands the URL to Safari (iOS 17+).
     Android: an intent:// URL hands it to the default browser.
   In a normal mobile browser (Chrome, Safari, ...) the link just opens in place, and on
   desktop in a new tab. If a hand-off is ignored, the page loads in place
   (a delayed window.open would be popup-blocked). */
(function () {
  var ua = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua);
  var isMobile = isIOS || isAndroid;
  // Chrome/Firefox/Edge on iOS are already real browsers; x-safari would bounce them to Safari
  var isOtherIOSBrowser = /CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
  var isInApp = /Twitter|TwitterAndroid|FBAN|FBAV|Instagram|Line\/|; wv\)/.test(ua) ||
    (isIOS && !isOtherIOSBrowser && !/Safari\//.test(ua));

  function openExternal(url) {
    if (!isMobile) {
      window.open(url, '_blank', 'noopener');
      return;
    }
    if (!isInApp) {
      window.location.href = url;
      return;
    }
    var handoff;
    if (isIOS) {
      handoff = 'x-safari-' + url;
    } else {
      var u = new URL(url);
      handoff = 'intent://' + u.host + u.pathname + u.search +
        '#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;' +
        'S.browser_fallback_url=' + encodeURIComponent(url) + ';end';
    }
    // If the page is still in view shortly after, the hand-off was ignored: open it here instead.
    var left = false;
    function onHide() { if (document.hidden) left = true; }
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', function () { left = true; }, { once: true });
    setTimeout(function () {
      document.removeEventListener('visibilitychange', onHide);
      if (!left && !document.hidden) window.location.href = url;
    }, 1200);
    window.location.href = handoff;
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-external]');
    if (!a) return;
    e.preventDefault();
    openExternal(a.href);
  });

  window.openExternal = openExternal;
})();
