import axios from "axios";

export const api = axios({
  baseURL: "localhost:8000/api/",
  timeout: 7000,
});
