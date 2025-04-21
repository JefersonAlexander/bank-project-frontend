import {API_BASE_URL} from '../../config/api'
import axios from 'axios';

export const getAllCustomers = async () => {

    try {
        const response = await axios.get(`${API_BASE_URL}customers`);
        return response.data; // Retornar los datos de las rutas
    } catch (error) {
        console.error('Error al obtener la lista de clientes:', error);
        return null;
    }
};