// bump V to push an update to installed copies
const V="grain-v7",FILES=["./","index.html","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png"];
addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)));skipWaiting();});
addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>clients.claim())));
addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
