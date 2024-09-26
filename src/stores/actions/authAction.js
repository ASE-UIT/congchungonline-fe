import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

export const userLogin = createAsyncThunk(
	"auth/login",
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password);
			return { user: response.user, userToken: response.tokens.access.token };
		} catch (status) {
			return thunkAPI.rejectWithValue(status);
		}
	}
);
