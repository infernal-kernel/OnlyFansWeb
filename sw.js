const CACHE_NAME = 'onlyfans-pwa-v1';
const urlsToCache = [
  '/onlyfans/',
  '/onlyfans/index.html',
  '/onlyfans/styles.css',
  '/onlyfans/script.js',
  '/onlyfans/manifest.json',
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/OnlyFans_logo_2021.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.error('Error caché:', err);
      });
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    }).catch(err => {
      console.error('Fallo fetch:', err);
    })
  );
});
