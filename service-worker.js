const CACHE_NAME = 'capibara-snake-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/sounds/collect.mp3',
  '/sounds/powerup.mp3',
  '/sounds/gameover.mp3',
  '/sounds/win.mp3',
  '/background_music.mp3',
  '/pop.mp3',
  '/boing.mp3',
  '/step.mp3',
  '/triumph.mp3',
  '/capibara_sprite.jpg',
  '/bully0.png',
  '/bully1.png',
  '/bully2.png',
  '/bully3.png',
  '/bully4.png',
  '/bully5.png',
  '/fondo_escuela.png',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});