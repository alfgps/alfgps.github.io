var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/js/init.js',
  '/js/materialize.min.js',
  '/css/materialize.css',
  '/css/materialize.css',
  '/css/style.css',
  '/css/styles.css'
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});