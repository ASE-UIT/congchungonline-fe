import axios from 'axios';
import { API_BASE_URL } from './config';
import axiosConfig from '../utils/axiosConfig';

const AUTH_ENDPOINT = `${API_BASE_URL}/auth`;

const login = async (email, password) => {
  const response = await axiosConfig.post(`${AUTH_ENDPOINT}/login`, {
    email,
    password,
  });

  localStorage.setItem('userInfo', JSON.stringify(response.data.user));

  return response.data;
};

const logout = async (refreshToken) => {
  try {
    await axiosConfig.post(`${AUTH_ENDPOINT}/logout`, { refreshToken });

    localStorage.removeItem('userInfo');
  } catch (error) {
    if (error.response) {
      throw error.response.data.message || 'Logout failed';
    } else {
      throw new Error('Network Error');
    }
  }
};

const refreshAccessToken = async (refreshToken) => {
  return await axiosConfig.post(`${AUTH_ENDPOINT}/refresh-tokens`, {
    refreshToken,
  });
};

const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/register`, {
      name,
      email,
      password,
    });

    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      throw error.response.data.message || 'Registration failed';
    }
    throw new Error('An error occurred while registering.');
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/forgot-password`, { email });
    if (response.status === 204) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      throw error.response.data.message || 'Error sending password reset email';
    }
    throw new Error('An error occurred while sending reset password email.');
  }
};

const AuthService = {
  login,
  logout,
  refreshAccessToken,
  register,
  forgotPassword,
};

export default AuthService;
