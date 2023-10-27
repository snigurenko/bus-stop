import axios from 'axios';

axios.defaults.withCredentials = true;
export const $http = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

