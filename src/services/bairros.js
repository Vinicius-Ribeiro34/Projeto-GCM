import DB from './databaseBairros';

const onRequestError = (e) => {
  console.log('Database Erro [BAIRROS]', e);
}

export const addBairros = (bairro) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['bairro'], 'readwrite');
    const store = transaction.objectStore('bairro');
    store.add(bairro);
  }
}

export const getBairros = (callback) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['bairro'], 'readonly');
    const store = transaction.objectStore('bairro');
    store.getAll().onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}

export const getBairrosById = (callback, id) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['bairro'], 'readonly');
    const store = transaction.objectStore('bairro');
    store.get(id).onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}