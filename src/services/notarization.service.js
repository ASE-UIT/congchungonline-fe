import axios from 'axios';
import { API_BASE_URL } from './config';

const NOTARIZATION_ENDPOINT = `${API_BASE_URL}/notarization`;

const getStatusById = async (documentId) => {
  try {
    const response = await axios.get(`${NOTARIZATION_ENDPOINT}/getStatusById/${documentId}`);
    return response.data;
  } catch (error) {
    const status = error.response?.status;
    const message = error.response?.data?.message;
    throw { status, message };
  }
};

const NotarizationService = {
  getStatusById,
};

export default NotarizationService;
