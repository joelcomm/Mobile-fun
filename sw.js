// Bump the version whenever cached game assets (css/js/images/fonts) change, or returning visitors keep the old copies.
// Pages (html) are fetched network-first, so a redeploy shows up on the next visit without a bump.
var CACHE_NAME = 'acumen-v8';

var ASSETS = [
  '/',
  '/index.html',
  '/daily.js',
  '/x-embed.js',
  '/stats.html',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/theme/fonts/Titan-One.woff2',
  '/img/cards/threads.jpg',
  '/img/cards/alibi.jpg',
  '/img/cards/bluff.jpg',
  '/img/cards/lineup.jpg',
  '/img/cards/echo.jpg',
  '/img/cards/cipher.jpg',
  '/img/cards/reflex.jpg',
  '/img/cards/vanish.jpg',
  '/img/cards/sequence.jpg',
  '/img/cards/rank.jpg',
  '/img/cards/puptown.jpg',
  '/img/cards/poundbreak.jpg',
  '/img/cards/constellation.jpg',
  '/theme/theme.css',
  '/theme/threads.css',
  '/theme/alibi.css',
  '/theme/bluff.css',
  '/theme/lineup.css',
  '/theme/echo.css',
  '/theme/cipher.css',
  '/theme/reflex.css',
  '/theme/vanish.css',
  '/theme/sequence.css',
  '/theme/rank.css',
  '/theme/fonts/Lilita-One.woff2',
  '/theme/fonts/Alfa-Slab-One.woff2',
  '/theme/fonts/Rye.woff2',
  '/theme/fonts/Anton.woff2',
  '/theme/fonts/Audiowide.woff2',
  '/theme/fonts/Black-Ops-One.woff2',
  '/theme/fonts/Racing-Sans-One.woff2',
  '/theme/fonts/Bungee.woff2',
  '/theme/fonts/Orbitron.woff2',
  '/threads/index.html',
  '/threads/app.js',
  '/threads/puzzles.js',
  '/threads/style.css',
  '/alibi/index.html',
  '/alibi/game.js',
  '/alibi/puzzles.js',
  '/alibi/style.css',
  '/bluff/index.html',
  '/bluff/game.js',
  '/bluff/facts.js',
  '/bluff/style.css',
  '/lineup/index.html',
  '/lineup/game.js',
  '/lineup/puzzles.js',
  '/lineup/style.css',
  '/echo/index.html',
  '/echo/game.js',
  '/echo/style.css',
  '/cipher/index.html',
  '/cipher/game.js',
  '/cipher/quotes.js',
  '/cipher/style.css',
  '/reflex/index.html',
  '/reflex/game.js',
  '/reflex/data.js',
  '/reflex/style.css',
  '/sequence/index.html',
  '/sequence/game.js',
  '/sequence/data.js',
  '/sequence/style.css',
  '/rank/index.html',
  '/rank/game.js',
  '/rank/style.css'
];

// De-duplicate: Cache.addAll rejects duplicate URLs, which used to make the whole install fail.
ASSETS = ASSETS.filter(function (u, i) { return ASSETS.indexOf(u) === i; });

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // One file at a time, so a single missing/failed file can never block an update.
      return Promise.all(ASSETS.map(function (url) {
        return cache.add(new Request(url, { cache: 'reload' })).catch(function () {});
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var isPage = req.mode === 'navigate' || (req.headers.get('accept') || '').indexOf('text/html') !== -1;

  if (isPage) {
    // Network first: always show the latest page when online; use the cached copy only when offline.
    event.respondWith(
      fetch(req).then(function (response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(req, clone); });
        }
        return response;
      }).catch(function () {
        return caches.match(req).then(function (cached) { return cached || caches.match('/index.html'); });
      })
    );
    return;
  }

  // Everything else (scripts, styles, images, fonts): cache first.
  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(req, clone); });
        }
        return response;
      });
    })
  );
});
