import axios from 'axios';

const clientAPI = axios.create({
  baseURL: 'http://localhost:4000',
  headers:{
    'Access-Control-Allow-Origin': '*'
  }
});

clientAPI.interceptors.request.use(
  config => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      config.headers.Authorization = 'Bearer ' + access_token;
      // config.headers['Access-Control-Allow-Origin'] = '*';
      // config.headers['Access-Control-Allow-Credentials'] = 'true';
      
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default clientAPI;
