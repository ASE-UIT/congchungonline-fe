// src/store/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../services/user.service';

// Async action to fetch user data
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (id) => {
  try {
    const response = await UserService.getUserById(id);
    const data = await response.json();
    return data;
  } catch (error) {}
});

const initialState = {
  role: '',
  identification: '',
  phone: '',
  city: '',
  district: '',
  ward: '',
  street: '',
  isEmailVerified: false,
  name: '',
  email: '',
  id: '',
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, startLoading, stopLoading, setError } = userSlice.actions;
export default userSlice.reducer;
