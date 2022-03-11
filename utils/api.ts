import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

export const fetcher = (url) => api.get(url).then((res) => res.data);

export default api;
