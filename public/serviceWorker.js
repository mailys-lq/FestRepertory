self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa')
      .then(cache => {
        return cache.addAll([
          '/',
          '/serviceWorker.js',
          '/index.html',
          '/manifest.json',
          'wolf.png'
        ])
        .then(() => self.skipWaiting())
      })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.matche(event.request)
    .then(response => {
      return response || fetch(event.request)
    })
  )
})