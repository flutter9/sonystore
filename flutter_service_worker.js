'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "8d4df903a6117a5eebbd6e210b9e45cf",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "3e209d7fa644e0ca7a34eb7c7c169b02",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/4.png": "f8fb3ac4e528be91cefbd630fca4bd48",
"/assets/assets/images/5.png": "d62cdf9999f796f93db60fd19a003958",
"/assets/assets/images/2.png": "befbedbab4c0a0301282d07b8bd018ad",
"/assets/assets/images/3.png": "083504109f59e74d6d9b344f59da034c",
"/assets/assets/images/1.png": "401abaa8ef4d35caf0398a61eba66bf3"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
