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
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await AuthService.refreshAccessToken();

        const newAccessToken = refreshResponse.tokens.access.token;
        Cookies.set('accessToken', newAccessToken, { expires: 7 });
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return axiosConfig(originalRequest);
      } catch (refreshError) {
        Cookies.remove('refreshToken');
        Cookies.remove('accessToken');
        Cookies.remove('user');
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosConfig;
