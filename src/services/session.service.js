import axiosConfig from "./axiosConfig";
import { API_BASE_URL } from './config';

const SESSION_ENDPOINT = `${API_BASE_URL}/session`

const createSession = async (session) => {
    try {
        const response = await axiosConfig.post(`${SESSION_ENDPOINT}/createSession`, session);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
};

const getAllSessions = async () => {
    try {
        const response = await axiosConfig.get(`${SESSION_ENDPOINT}/getAllSessions`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
};

const SessionService = {
    createSession,
    getAllSessions,
};

export default SessionService;

