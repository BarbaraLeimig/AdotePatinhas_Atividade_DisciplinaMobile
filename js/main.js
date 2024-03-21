if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => {
                console.log('Registrando service worker', reg);
            }) .catch((err) => {
                console.log('Algo de errado aconteceu',err);
            });
    });
}