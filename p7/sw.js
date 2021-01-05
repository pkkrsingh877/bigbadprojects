const cacheName = 'ig-static-v1';

const staticAssets = [
    './',
    './icon.png',
    './main.css',
    './footer.css',
    './header.css',
    './index.html',
    './index.js',
    './manifest.webmanifest'
];

self.addEventListener('install', async (e) => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    // return self.skipWaiting();
});

self.addEventListener('activate', e => {
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);

    if (url.origin === location.origin) {
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(newtworkAndCache(req));
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.push(req, fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}