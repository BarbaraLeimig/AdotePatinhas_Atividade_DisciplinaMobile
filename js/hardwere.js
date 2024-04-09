// Este recurso de hardware é chamado no banner do index, honde á o 'Saiba mais'

var $status = document.getElementById("status");

if ("Notification" in window) {
  $status.innerText = Notification.permission;
}

function requestPermission() {
  if (!("Notification" in window)) {
    alert("Notification API not supported!");
    return;
  }

  Notification.requestPermission(function (result) {
    $status.innerText = result;
  });
}

function nonPersistentNotification() {
  if (!("Notification" in window)) {
    alert("Notification API not supported!");
    return;
  }

  try {
    var notification = new Notification("Você pode contribuir com doações para nos ajudar!");
  } catch (err) {
    alert("Notification API error: " + err);
  }
}

function persistentNotification() {
  if (!("Notification" in window) || !("ServiceWorkerRegistration" in window)) {
    alert("Persistent Notification API not supported!");
    return;
  }

  try {
    navigator.serviceWorker
      .getRegistration()
      .then((reg) => reg.showNotification("Você pode contribuir com doações para nos ajudar!"))
      .catch((err) => alert("Service Worker registration error: " + err));
  } catch (err) {
    alert("Notification API error: " + err);
  }
}