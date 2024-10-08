import axios from 'axios';
import { API_BASE_URL } from './config';
import Cookies from 'js-cookie';
import axiosConfig from './axiosConfig';

const AUTH_ENDPOINT = `${API_BASE_URL}/auth`;

const login = async (email, password) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/login`, {
      email,
      password,
    });
    console.log('Response:', response);

    if (response && response.data && response.data.tokens && response.data.tokens.refresh) {
      console.log('Refresh Token:', response.data.tokens.refresh.token);
      Cookies.set('refreshToken', response.data.tokens.refresh.token, {
        expires: 7,
      });
    } else {
      throw new Error('Refresh token not found in response');
    }

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    }
    throw new Error('An error occurred while logging in.');
  }
};

const logout = async (refreshToken) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/logout`, { refreshToken });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    } else {
      throw new Error('Network Error');
    }
  }
};

const refreshAccessToken = async () => {
  const refreshToken = Cookies.get('refreshToken');
  if (!refreshToken) throw new Error('No refresh token found');

  try {
    const response = await axiosConfig.post(`${AUTH_ENDPOINT}/refresh-tokens`, {
      refreshToken,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    } else {
      throw new Error('Network Error');
    }
  }
};

const register = async (name, email, password) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/register`, {
      name,
      email,
      password,
    });

    if (response.status === 201) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    }
    throw new Error('An error occurred while registering.');
  }
};

const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${AUTH_ENDPOINT}/forgot-password`, { email });
    if (response.status === 204) {
      return response;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw error.response;
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
