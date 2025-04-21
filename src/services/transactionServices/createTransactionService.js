import {API_BASE_URL} from '../../config/api';
import axios from 'axios';

export const createTransactionService = async (routeData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}transactions`, routeData);
        return response.data;
    } catch (error) {
        console.error('Error al agregar un nuevo cliente:', error);
        return null;
    }
};