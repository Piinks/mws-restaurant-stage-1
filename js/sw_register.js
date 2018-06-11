// Registering the Service Worker
if("serviceWorker" in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register("sw.js")
    .then(reg => {
      console.log("sw_register success");
    })
    .catch(error => {
      console.log("sw_register failed");
      console.log(error);
    });
  });
}
