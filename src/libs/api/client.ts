import axios from "axios";
import Cookies from "universal-cookie";
import { redirect } from "react-router-dom";

const clientAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

clientAPI.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const access_token = cookies.get("access_token");

  if (!!access_token && config.headers) {
    config.headers.Authorization = "Bearer " + access_token;
  }

  return config;
});

export default clientAPI;
