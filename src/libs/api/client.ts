import axios from 'axios';
import storage from '../../utils/storage/webStorageUtils';

const clientAPI = axios.create({
  baseURL: 'http://localhost:4000',
  // baseURL: process.env.REACT_APP_SERVER_URL,
});

clientAPI.interceptors.request.use(
  config => {
    const access_token = storage.get('access_token');
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
