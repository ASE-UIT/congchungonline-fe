import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, refreshAccessToken, userGoogleLogin } from '../actions/authAction';
import Cookies from 'js-cookie';

const userInfo = (() => {
  try {
    const storedUserInfo = localStorage.getItem('userInfo');
    return storedUserInfo ? JSON.parse(storedUserInfo) : null;
  } catch (error) {
    console.error('Error parsing userInfo from localStorage:', error);
    return null;
  }
})();

const userToken = localStorage.getItem('userToken') || null;

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
      localStorage.setItem('userInfo', JSON.stringify(payload.user));
      localStorage.setItem('userToken', payload.userToken);
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
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userToken');
      Cookies.remove('refreshToken');
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
      state.loading = false;
      state.userToken = payload.userToken;
      localStorage.setItem('userToken', payload.userToken);
    });
    builder.addCase(refreshAccessToken.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
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
      localStorage.setItem('userInfo', JSON.stringify(payload.user));
      localStorage.setItem('userToken', payload.userToken);
    });
    builder.addCase(userGoogleLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isAuthenticated = false;
    });
  },
});

export default authSlice.reducer;
