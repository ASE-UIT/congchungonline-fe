import axiosConfig from './axiosConfig';
import { API_BASE_URL } from './config';
const USER_ENDPOINT = `${API_BASE_URL}/users`;

const getUserById = async (id) => {
  try {
    const response = await axiosConfig.get(`${USER_ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    } else {
      throw new Error('Network Error');
    }
  }
};

const UserService = {
  getUserById,
};

export default UserService;
