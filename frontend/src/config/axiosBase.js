import axios from "axios";

let BASE_URL =
  import.meta.env.MODE == "production" ? "/api" : "http://localhost:2000/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
