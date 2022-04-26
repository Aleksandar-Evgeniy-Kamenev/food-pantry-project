import axios from 'axios';
const API_URL = 'http://localhost:3000/api/auth/';
export const register = (email: string, password: string, role: string) => {
  const roles: Array<string> = [];
  roles.push(role);
  return axios.post(API_URL + 'signup', {
    email,
    password,
    roles,
  });
};
export const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
export const logout = () => {
  localStorage.removeItem('user');
};
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  return null;
};
