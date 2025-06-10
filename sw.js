const CACHE_NAME = 'onlyfans-pwa-v2';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './images/OnlyFans_logo_2021.png',
  './images/hero-bg.jpg',
  './images/onlyfans-192.png',
  './images/onlyfans-512.png'
];

// Evento de instalación: cacheo de recursos esenciales
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Para activar inmediatamente al instalar
      .catch(err => console.error('Error al cachear recursos:', err))
  );
});

// Evento de activación: limpieza de caches antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Evento de fetch: responde con cache, luego con red
self.addEventListener('fetch', event => {
  // Solo interceptamos peticiones GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Si existe en cache, devolvemos la versión cacheada
        if (cachedResponse) {
          return cachedResponse;
        }
        // Si no existe, hacemos fetch y lo agregamos a cache (stale-while-revalidate)
        return fetch(event.request)
          .then(networkResponse => {
            // Para evitar errores (por ejemplo, response.status 404), comprobamos
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            // Clonamos la respuesta antes de cachear
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          }).catch(err => {
            // Si falla la red, podemos devolver un fallback (por ejemplo, offline.html)
            console.error('Fetch falló, devolviendo fallback:', err);
            // Aquí podrías retornar un archivo HTML de “offline” si lo tuvieras:
            // return caches.match('/offline.html');
          });
      })
  );
});
