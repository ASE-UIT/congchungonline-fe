import axiosConfig from './axiosConfig';
import { API_BASE_URL } from './config';
const USER_ENDPOINT = `${API_BASE_URL}/users`;
const USER_EMAIL_ENDPOINT = `${API_BASE_URL}/users/search-user-by-email/`;

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

const getUserByEmail = async (email) => {
  try {
    const response = await axiosConfig.get(`${USER_EMAIL_ENDPOINT}/${email}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    } else {
      throw new Error('Network Error');
    }
  }
}

const updateUser = async (id, updateBody) => {
  try {
    const response = await axiosConfig.patch(`${USER_ENDPOINT}/${id}`, updateBody);  
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.status;
    } else {
      throw new Error('Network Error');
    }
  }
}

const UserService = {
  getUserById,
  getUserByEmail,
  updateUser,
};

export default UserService;
