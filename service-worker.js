// Service Worker actualizado para Capibara Snake - 2024
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "capibarasnake-cache-v2";
const offlineFallbackPage = "index.html";

const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "capibara_sprite.png",
  "brigada_capibara_logo.png",
  "fondo_escuela.png",
  "icon-192.png",
  "icon-512.png",
  "bully0.png",
  "bully1.png",
  "bully2.png",
  "bully3.png",
  "bully4.png",
  "bully5.png",
  "background_music.mp3",
  "pop.mp3",
  "boing.mp3",
  "triumph.mp3",
  "step.mp3",
  "screenshot1.png",
  "screenshot2.png"
];

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;
        if (preloadResp) return preloadResp;
        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  } else {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});