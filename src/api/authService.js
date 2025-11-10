// src/api/authService.js
import api from './axios';

// Registro
export const register = async (formData) => {
  const res = await api.post('/register', formData);
  if (res.data.success) {
    localStorage.setItem('auth_token', res.data.content.token);
  }
  return res.data;
};

// Login
export const login = async (email, password) => {
  const res = await api.post('/login', { email, password });
  if (res.data.success) {
    localStorage.setItem('auth_token', res.data.content.token);
  }
  return res.data;
};

// Logout
export const logout = async () => {
  const res = await api.post('/logout');
  if (res.data.success) {
    localStorage.removeItem('auth_token');
  }
  return res.data;
};

// Verifica si hay sesión activa
export const isAuthenticated = () => !!localStorage.getItem('auth_token');
