import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
const getAccessTokenFromURL = (url) => {
  const urlParams = new URLSearchParams(url);
  const token = urlParams.get('token');
  const refreshToken = urlParams.get('refreshToken');

  Cookies.set('accessToken', token);
  localStorage.setItem('refreshToken', refreshToken);

  return { token, refreshToken };
};

const decodeToken = (token) => {
  if (token) {
    const decoded = jwtDecode(token);
    console.log('Decoded:', decoded);

    return decoded;
  }
};

const TokenService = {
  getAccessTokenFromURL,
  decodeToken,
};

export default TokenService;
