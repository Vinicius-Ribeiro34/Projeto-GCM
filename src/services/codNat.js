import DB from './databaseCodNat';

const onRequestError = (e) => {
  console.log('Database Erro [CODNAT]', e);
}

export const addCodNat = (codNat) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['codNat'], 'readwrite');
    const store = transaction.objectStore('codNat');
    store.add(codNat);
  }
}

export const getCodNat = (callback) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['codNat'], 'readonly');
    const store = transaction.objectStore('codNat');
    store.getAll().onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}

export const getCodNatById = (callback, id) => {
  const request = DB();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['codNat'], 'readonly');
    const store = transaction.objectStore('codNat');
    store.get(id).onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}