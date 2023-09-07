const cacheName = 'cache-v1';

const resourcesToPreach = [
    '/',
    'index.html',
]
self.addEventListener('install', event=>{
    console.log("Install Event")
    event.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            return cache.addAll(resourcesToPreach)
        })
    )
})
self.addEventListener('activate', event=>{
    console.log("Activate Event")
})
self.addEventListener('fetch', event=>{
    console.log("fetch intercepted for:", event.reqest.url)
    event.respondWith(caches.match(event.reqest)
    .then(cacheResponse =>{
        return cacheResponse || fetch(event.reqest)
    })
    )
})
