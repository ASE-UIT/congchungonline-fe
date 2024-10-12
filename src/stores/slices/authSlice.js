import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, refreshAccessToken, userGoogleLogin } from '../actions/authAction';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
const userInfo = (() => {
  try {
    const storedUserInfo = Cookies.get('user');
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  } catch (error) {
    console.error('Error parsing userInfo from localStorage:', error);
    return null;
  }
})();

const userToken = Cookies.get('accessToken') || null;

const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  isAuthenticated: !!userToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      state.userToken = payload.userToken;
      state.isAuthenticated = true;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isAuthenticated = false;
    });
    builder.addCase(userLogout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.isAuthenticated = false;
    });
    builder.addCase(userLogout.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(refreshAccessToken.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(refreshAccessToken.fulfilled, (state, { payload }) => {
      const isTokenValid = (token) => {
        const decodedToken = jwtDecode(token);
        return decodedToken.exp * 1000 > Date.now();
      };

      if (isTokenValid(payload.userToken)) {
        state.loading = false;
        state.userToken = payload.userToken;
      } else {
        console.log('Refreshed token is invalid or expired');
        state.userToken = null;
        state.isAuthenticated = false;
      }
    });
    builder.addCase(refreshAccessToken.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload || 'Failed to refresh token';
    });
    builder.addCase(userGoogleLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userGoogleLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.user;
      state.userToken = payload.userToken;
      state.isAuthenticated = true;
    });
    builder.addCase(userGoogleLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload || 'Google login failed. Please try again.';
      state.isAuthenticated = false;
    });
  },
});

export default authSlice.reducer;
