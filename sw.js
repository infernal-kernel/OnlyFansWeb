const CACHE_NAME = 'onlyfans-pwa-v1';
const urlsToCache = [
  '/onlyfans/',
  '/onlyfans/index.html',
  '/onlyfans/styles.css',
  '/onlyfans/script.js',
  '/onlyfans/manifest.json',
  'https://github.com/infernal-kernel/OnlyFansWeb/blob/aec4382b5c1cda551beacaceae6a7d6fd4d3f67b/Onlyfans-Logo-2016.png'
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
