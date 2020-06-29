import DB from './databaseOcorrencia';

const onRequestError = (e) => {
  console.log('Database Erro [OCORRENCIA]', e);
}

export const add = (ocorrencia) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['ocorrencia'], 'readwrite');
    const store = transaction.objectStore('ocorrencia');
    store.add(ocorrencia);
  }
}

export const get = (callback) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['ocorrencia'], 'readonly');
    const store = transaction.objectStore('ocorrencia');
    store.getAll().onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}

export const getOcorrenciaById = (callback, id) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['ocorrencia'], 'readonly');
    const store = transaction.objectStore('ocorrencia');
    store.get(id).onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}