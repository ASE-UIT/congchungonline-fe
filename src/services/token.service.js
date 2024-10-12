import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const getAccessTokenFromURL = (url) => {
  const urlParams = new URLSearchParams(url);
  const token = urlParams.get('token');
  const refreshToken = urlParams.get('refreshToken');

  return { token, refreshToken };
};

const decodeToken = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    console.log('Decoded:', decoded);

    return decoded;
  }
};

const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime;
};

const TokenService = {
  getAccessTokenFromURL,
  decodeToken,
  isTokenExpired,
};

export default TokenService;
