import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.16.0.160:3333'
});

export default api;