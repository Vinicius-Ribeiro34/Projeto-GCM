import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gcm-mogi-prod.herokuapp.com',
});

export default api;
