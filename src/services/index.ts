import axios from 'axios';

const api = axios.create({
  baseURL: 'https://limosapi.herokuapp.com',
});

export default api;
