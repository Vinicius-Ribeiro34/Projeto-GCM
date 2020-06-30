let arquivos = [
  "/",
  "src/App.css",
  "src/index.css",
  "src/main.css",
  "src/App.js",
  "src/App.test.js",
  "src/index.js",
  "src/setupTests.js",
  "src/main.js",
  "src/Table.js",
  "src/TelaInicial.js",
  "src/adicionarEnvolvido.js",
  "src/adicionarOcorrencia.js",
  "src/adicionarVeiculo.js",
  "src/BuscarOcorrencia.js",
  "src/ListarOcorrencias.js",
  "src/Indicadores.js",
  "src/IndicadoresRegiao.js",
  "src/IndicadoresOcorrencias.js",
  "src/components/Header.js",
  "src/components/PopUp.js",
  "src/components/TableEnvolvidos.js",
  "src/components/TableOcorrencia.js",
  "src/components/TableVeiculos.js",
  "src/img/logo-gcm.jpg",
  "src/Passos/PrimeiroPasso.js",
  "src/Passos/SegundoPasso.js",
  "src/Passos/TerceiroPasso.js",
  "src/Passos/QuartoPasso.js",
  "src/Passos/QuintoPasso.js",
  "src/Passos/PassoFinal.js",
  "src/services/bairros.js",
  "src/services/codNat.js",
  "src/services/databaseBairros.js",
  "src/services/databaseCodNat.js",
  "src/services/databaseOcorrencia.js",
  "src/services/ocorrencia.js",
  "src/sw/registra.js",
  "public/brazao192.png",
  "public/brazao512.png",
  "public/favicon.ico",
  "public/manifest.json"
  

]

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

export function register(config) {   
  window.addEventListener('load', () => {

    const swUrl = `/service-worker.js`;

    navigator.serviceWorker.register('/registra.js')
      .then(function (registration) {
      checkValidServiceWorker(swUrl, config);
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
      register.addAll(arquivos); //Adicionei para carregar os arquivos quando instalado   
    }, function (err) {
      // registration failed :(
      registerValidSW(swUrl, config);
      console.log('ServiceWorker registration failed: ', err);
    });
  });

  window.addEventListener("fetch", function (event) {

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
      let resposta = respostaCache ? respostaCache : fetch(pedido)
      return resposta

    })

    event.respondWith(promiseResposta)

  });

}

function registerValidSW(swUrl, config) {
navigator.serviceWorker
  .register(swUrl)
  .then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log(
              'New content is available and will be used when all ' +
                'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
            );
            alert("Instalado - Ok");

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
           }
        }
      };
    };
  })
  .catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl, {
  headers: { 'Service-Worker': 'script' },
})
  .then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (
      response.status === 404 ||
      (contentType != null && contentType.indexOf('javascript') === -1)
    ) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })
  .catch(() => {
    alert("Aplicativo rodando em modo offline");
    console.log(
      'No internet connection found. App is running in offline mode.'
    );
  });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
