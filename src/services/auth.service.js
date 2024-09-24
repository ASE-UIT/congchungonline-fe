import axios from "axios";
import { AUTH_ENDPOINT } from "./config";

const login = async (email, password) => {
	try {
		const response = await axios.post(`${AUTH_ENDPOINT}/login`, {
			email,
			password,
		});
		return response.data;
	} catch (error) {
		if (error.response) {
			throw error.response.status;
		} else {
			throw new Error("Network Error");
		}
	}
};

const AuthService = {
	login,
};

export default AuthService;
