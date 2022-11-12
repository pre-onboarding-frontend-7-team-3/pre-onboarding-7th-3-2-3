import axios from 'axios';
import storage from '../../utils/webStorageUtils';

const clientAPI = axios.create({
  baseURL: 'http://localhost:4000',
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
