import axios from "axios";
import Cookies from "universal-cookie";

const clientAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

clientAPI.interceptors.request.use((config) => {
  const cookies = new Cookies();
  const accessToken = cookies.get("access_token");
  if (!!accessToken) {
    config.headers.Authorization = "Bearer " + accessToken;
  }

  return config;
});

export default clientAPI;
