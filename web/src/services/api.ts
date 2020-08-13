import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deploy-proffy.herokuapp.com/',
});

export default api;