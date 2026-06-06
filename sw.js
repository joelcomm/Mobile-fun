var CACHE_NAME = 'bestdailygames-v1';

var ASSETS = [
  '/',
  '/index.html',
  '/daily.js',
  '/stats.html',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
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
  '/rank/index.html'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ASSETS);
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
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        if (response && response.status === 200 && response.type === 'basic') {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    })
  );
});
