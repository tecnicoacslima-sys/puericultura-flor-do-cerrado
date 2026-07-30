// Service worker minimo do Puericultura - so existe para habilitar a instalacao
// como app (PWA). Nao faz cache de nada: cada acesso busca a versao mais
// recente na rede, igual ao app de gestantes.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
