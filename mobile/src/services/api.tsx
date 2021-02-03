import axios from "axios";

const api = axios.create({
  baseURL: "https://xilogoritmo-api.herokuapp.com/"
});

export default api;
