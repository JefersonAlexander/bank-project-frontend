import {API_BASE_URL} from '../../config/api';
import axios from 'axios';

export const createCustomerService = async (routeData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}customers`, routeData);
        return response.data;
    } catch (error) {
        console.error('Error al agregar un nuevo cliente:', error);
        return null;
    }
};

