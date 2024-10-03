import axios from 'axios';
import { API_BASE_URL } from './config';

const NOTARIZATION_ENDPOINT = `${API_BASE_URL}/notarization`;

const getStatusById = async (id) => {
    try {
        const response = await axios.get(`${NOTARIZATION_ENDPOINT}/getStatusById/${id}`);

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw 404;
        } else {
            throw error;
        }
    }
};


const NotarizationService = {
    getStatusById
};

export default NotarizationService;