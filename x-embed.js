/* x-embed.js — shared helpers for the X Player Card pages of each Acumen game.
 *
 * Load it FIRST (in <head>) on:
 *   GAME/play/    the compact ~480x480 player X loads in its iframe. Set
 *                 window.ACUMEN_EMBED = true before this script.
 *   GAME/x-card/  the share URL that carries the Player Card meta tags.
 *
 * Provides window.AcumenX:
 *   isEmbed               true on play pages
 *   openExternal(url)     open in the phone's real browser when inside an in-app browser
 *   postToX(text, url)    open X's post composer with text + link
 *   cardUrl(game)         https://games.aiforeveryoneshow.com/GAME/x-card/
 */
(function () {
  'use strict';

  var SITE = 'https://games.aiforeveryoneshow.com';
  var isEmbed = !!window.ACUMEN_EMBED;

  // Third-party iframes can have storage blocked; fall back to memory so games still run.
  if (isEmbed) {
    try {
      window.localStorage.setItem('__acumen_probe', '1');
      window.localStorage.removeItem('__acumen_probe');
    } catch (e) {
      var mem = {};
      var shim = {
        getItem: function (k) { return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; },
        setItem: function (k, v) { mem[k] = String(v); },
        removeItem: function (k) { delete mem[k]; },
        clear: function () { mem = {}; },
        key: function (i) { return Object.keys(mem)[i] || null; },
        get length() { return Object.keys(mem).length; }
      };
      try { Object.defineProperty(window, 'localStorage', { value: shim, configurable: true }); } catch (e2) {}
    }
  }

  var ua = navigator.userAgent || '';
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua);
  var isMobile = isIOS || isAndroid;
  // Chrome/Firefox/Edge on iOS are already real browsers; x-safari would bounce them to Safari
  var isOtherIOSBrowser = /CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
  var isInApp = /Twitter|TwitterAndroid|FBAN|FBAV|Instagram|Line\/|; wv\)/.test(ua) ||
    (isIOS && !isOtherIOSBrowser && !/Safari\//.test(ua));

  /* In an in-app browser (X, Facebook, Instagram, Android WebView) hand the URL to the real
     browser: Safari via x-safari-https:// on iOS 17+, the default browser via intent:// on
     Android. In a normal mobile browser open in place; on desktop in a new tab. If a hand-off
     is ignored, load in place (a delayed window.open would be popup-blocked). */
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

  function postToX(text, url) {
    window.open('https://x.com/intent/post?text=' + encodeURIComponent(text) +
      (url ? '&url=' + encodeURIComponent(url) : ''), '_blank', 'noopener');
  }

  function cardUrl(game) {
    return SITE + '/' + game + '/x-card/';
  }

  // Links marked data-external always go through openExternal. On play pages, every link that
  // would leave the page (back links, ALL GAMES, links Daily injects) does too, so nothing
  // navigates away inside X's small iframe.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^(mailto|tel|javascript):/i.test(href)) return;
    if (!a.hasAttribute('data-external') && !isEmbed) return;
    var abs = new URL(href, window.location.href);
    if (isEmbed && !a.hasAttribute('data-external')) {
      if (abs.origin === window.location.origin && abs.pathname === window.location.pathname) return;
      // Relative links in the embed point at local paths; map them onto the live site
      if (abs.origin === window.location.origin) abs = new URL(abs.pathname + abs.search + abs.hash, SITE);
      if (/\/app\.html$/.test(abs.pathname)) abs = new URL('/', SITE);
    }
    e.preventDefault();
    openExternal(abs.href);
  });

  window.AcumenX = {
    isEmbed: isEmbed,
    openExternal: openExternal,
    postToX: postToX,
    cardUrl: cardUrl
  };
})();
