import axios from "axios";

const api = axios.create({
  baseURL: "https://gcm-mogi.herokuapp.com",
});

export default api;
