if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
    });
  });
}

var deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  document.querySelector("#install-app-wrapper").style.display = 'block';
  deferredPrompt = e;
});

document.querySelector("#btn-install-app").addEventListener('click', (e) => {
  document.querySelector("#install-app-wrapper").style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then((choiceResult) => {
      deferredPrompt = null;
    });
});



