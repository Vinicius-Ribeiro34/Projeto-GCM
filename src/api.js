import axios from 'axios';

 const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://gcm-mogi.herokuapp.com/bairros'
});

export default api;