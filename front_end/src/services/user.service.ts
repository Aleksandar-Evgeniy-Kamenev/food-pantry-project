import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:3000/api/test/';
export const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};
export const getCourierView = () => {
  return axios.get(API_URL + 'courier', { headers: authHeader() });
};
export const getDonorView = () => {
  return axios.get(API_URL + 'donor', { headers: authHeader() });
};
export const getReceiverView = () => {
  return axios.get(API_URL + 'reciever', { headers: authHeader() });
};
export const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', { headers: authHeader() });
};
