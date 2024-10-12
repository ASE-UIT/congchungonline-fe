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

    if (response && response.data && response.data.tokens) {
      const { access, refresh } = response.data.tokens;

      Cookies.set('accessToken', access.token, { expires: 7, secure: true, sameSite: 'Strict' });

      Cookies.set('refreshToken', refresh.token, { expires: 7, secure: true, sameSite: 'Strict' });

      Cookies.set('user', JSON.stringify(response.data.user), { expires: 7, secure: true, sameSite: 'Strict' });

      return response.data;
    } else {
      throw new Error('Tokens not found in response');
    }
  } catch (error) {
    if (error.response) {
      throw error.response.data.message || 'Login failed';
    }
    throw new Error('An error occurred while logging in.');
  }
};

const logout = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) throw new Error('No refresh token found');

    await axios.post(`${AUTH_ENDPOINT}/logout`, { refreshToken });

    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('user');
  } catch (error) {
    if (error.response) {
      throw error.response.data.message || 'Logout failed';
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

    const { access } = response.data.tokens;

    return { userToken: access.token };
  } catch (error) {
    Cookies.remove('refreshToken');

    throw error.response ? error.response.data.message || 'Token refresh failed' : 'Network Error';
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
