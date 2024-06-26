let newWorker;
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js").then((reg) => {
    reg.addEventListener("updatefound", () => {
      newWorker = reg.installing;
    });
  });
  let refreshing;
  navigator.serviceWorker.addEventListener("controllerchange", function () {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}
