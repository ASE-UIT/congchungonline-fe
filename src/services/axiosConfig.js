import axios from 'axios';
import { API_BASE_URL } from './config';
import Cookies from 'js-cookie';
import AuthService from './auth.service';

const axiosConfig = axios.create({
  baseURL: API_BASE_URL,
});

axiosConfig.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get('accessToken');
    console.log('Access Token:', accessToken);
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('Token expired. Refreshing token...');
      try {
        const refreshResponse = await AuthService.refreshAccessToken();

        Cookies.set('accessToken', refreshResponse.tokens.access.token);

        originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.tokens.access.token}`;

        return axiosConfig(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosConfig;
