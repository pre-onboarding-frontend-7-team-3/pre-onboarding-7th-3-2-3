import axios from 'axios';

const clientAPI = axios.create({
  baseURL: 'url',
});

clientAPI.interceptors.request.use(
  config => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      config.headers.Authorization = 'Bearer ' + access_token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default clientAPI;
