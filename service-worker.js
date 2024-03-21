var cacheName = "pwaAdotePatinhas-v1.0";

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) =>
        cache.addAll([
          "./index.html",
          "./css/bootstrap.css",
          "./css/css_slider.css",
          "./css/font-awesome.min.css",
          "./css/style.css",
          "./js/hideURLBar.js",
          "./images/1.jpg",
          "./images/about2.jpg",
          "./images/wh1.jpg",
          "./images/wh2.jpg",
          "./images/wh3.jpg",
          "./images/wh4.jpg",
          "./images/bg.jpg",
          "./images/move-top.png",
          "./AppIcons/Assets.xcassets/128.png",
          "./AppIcons/Assets.xcassets/144.png",
          "./AppIcons/Assets.xcassets/152.png",
          "./AppIcons/Assets.xcassets/167.png",
          "./AppIcons/Assets.xcassets/180.png",
          "./AppIcons/Assets.xcassets/196.png",
          "./AppIcons/Assets.xcassets/256.png",
          "./AppIcons/Assets.xcassets/512.png",
        ])
      )
  );
});

self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", (event) => {
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
        return caches.match(event.request);
    }
  });
});
''