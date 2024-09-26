import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../actions/authAction";

const userToken = localStorage.getItem("userToken")
	? localStorage.getItem("userToken")
	: null;

const initialState = {
	loading: false,
	userInfo: null,
	userToken,
	error: null,
	isAuthenticated: !!userToken,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout(state) {
			state.userInfo = null;
			state.userToken = null;
			state.isAuthenticated = false;
			localStorage.removeItem("userToken");
		},
	},
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
			localStorage.setItem("userToken", payload.userToken);
		});
		builder.addCase(userLogin.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = payload;
			state.isAuthenticated = false;
		});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
