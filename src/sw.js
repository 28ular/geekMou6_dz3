const CACHE_NAME = "todo-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js"
];

// Устанавливаем SW и кешируем файлы
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Отдаём файлы из кеша, если нет сети
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
