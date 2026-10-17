// Service Worker for Recipe Manager PWA (Full Offline Support)
const CACHE_NAME = 'recipe-manager-v7-offline';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './bundle.js',
  './manifest.json',
  'https://cdn.tailwindcss.com'
];

// Fallback SVG for offline images when not cached
const OFFLINE_IMAGE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f97316;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#ea580c;stop-opacity:0.9" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)" />
  <text x="50%" y="45%" font-size="64" text-anchor="middle" dominant-baseline="middle">🍳</text>
  <text x="50%" y="70%" font-size="16" font-family="system-ui, sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">Recipe Manager (Offline)</text>
</svg>`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Resilient precaching: caches each asset individually without aborting on a single network error
      return Promise.allSettled(
        PRECACHE_ASSETS.map((asset) =>
          cache.add(asset).catch((err) => {
            console.warn(`[SW] Precache skipped for ${asset}:`, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log(`[SW] Purging old cache: ${key}`);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // 1. Navigation requests (HTML document)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          if (cached) return cached;
          const fallback = await caches.match('./index.html') || await caches.match('/index.html') || await caches.match('./');
          return fallback;
        })
    );
    return;
  }

  // 2. Images: Cache-first, then network, fallback to offline SVG
  if (
    request.destination === 'image' ||
    url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i) ||
    url.hostname.includes('unsplash.com')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((networkResponse) => {
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
              const copy = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
            }
            return networkResponse;
          })
          .catch(() => {
            return new Response(OFFLINE_IMAGE_SVG, {
              headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'no-store' }
            });
          });
      })
    );
    return;
  }

  // 3. Static Assets / Scripts / CSS / CDN (Tailwind, Google Fonts, JS, CSS)
  // Stale-While-Revalidate with automatic dynamic caching
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
