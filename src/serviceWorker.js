let arquivos = [
  "/",
  "src/App.css",
  "src/main.css",
  "src/App.js",
  "src/index.js",
  "src/main.js",
  "src/components/Table.js",
  "src/pages/TelaInicial.js",
  "src/helpers/adicionarEnvolvido.js",
  "src/helpers/adicionarOcorrencia.js",
  "src/helpers/adicionarVeiculo.js",
  "src/pages/Registra.js",
  "src/pages/BuscarOcorrencia.js",
  "src/pages/ListarOcorrencias.js",
  "src/pages/Indicadores.js",
  "src/pages/IndicadoresRegiao.js",
  "src/pages/IndicadoresOcorrencias.js",
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
  "src/services/api.js",
  "src/routes/Route.js",
  "src/sw/registra.js",
  "public/brazao192.png",
  "public/brazao512.png",
  "public/favicon.ico",
  "public/manifest.json",
];

export function register(config) {
  window.addEventListener("load", () => {
    const swUrl = `/service-worker.js`;

    navigator.serviceWorker.register("/registra.js").then(
      function (registration) {
        checkValidServiceWorker(swUrl, config);
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
        register.addAll(arquivos); //Adicionei para carregar os arquivos quando instalado
      },
      function (err) {
        registerValidSW(swUrl, config);
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });

  window.addEventListener("fetch", function (event) {
    let pedido = event.request;
    let promiseResposta = caches.match(pedido).then((respostaCache) => {
      let resposta = respostaCache ? respostaCache : fetch(pedido);
      return resposta;
    });

    event.respondWith(promiseResposta);
  });
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.log(
                "New content is available and will be used when all " +
                  "tabs for this page are closed. See https://bit.ly/CRA-PWA."
              );
              alert("Instalado - Ok");

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log("Content is cached for offline use.");

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      alert("Aplicativo rodando em modo offline");
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}

export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
