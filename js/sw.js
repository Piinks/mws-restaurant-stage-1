// Service Worker

var myCache = "restauarantReview_32";
const cacheFiles = [
  ".",
  "..",
  "../index.html",
  "../restaurant.html",
  "../css/styles.css",
  "../data/restaurants.json",
  "../img/",
  "dbhelper.js",
  "main.js",
  "restaurant_info.js",
  "sw_register.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(myCache).then(cache => {
      return cache.addAll(cacheFiles)
      .catch(error => {
        console.log("Caching failed.")
      });
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response || fetch(event.request)
        .then(fetchResponse => {
          return caches.open(myCache).then(chace => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        })
        .catch(error => {
          console.log("Error in fetch event listener")
          console.log(error)
        })
      );
    })
  );
});
