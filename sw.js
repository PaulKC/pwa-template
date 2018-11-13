var CACHE_NAME = 'cache-v1';
var urlsToCache = [
  '/',
  '../index.html',
  '../css/style.css',
  '../js/script.js',
  '../img/icon-192.png',
  '../img/icon-512.png',
  '../manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});