import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout, refreshAccessToken } from '../actions/authAction';
import Cookies from 'js-cookie';

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

const initialState = {
  loading: false,
  userInfo: null,
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
  },
});

export default authSlice.reducer;
