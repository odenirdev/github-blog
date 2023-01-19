import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.response.use(function (response) {
  return Promise.resolve(response.data);
});
