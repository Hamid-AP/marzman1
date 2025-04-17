self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('marzman-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/app.js',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        '/img/jenabkhan.png',
        '/img/kolahghermezi.png',
        '/img/elsa.png',
        '/img/ladybug.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});