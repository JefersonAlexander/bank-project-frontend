import { API_BASE_URL } from '../../config/api';
import axios from 'axios';

export const getTransactionAcountService = async (accountNumber) => {
  try {
    const response = await axios.get(`${API_BASE_URL}transactions/${accountNumber}`); 
    return response.data;
  } catch (error) {
    console.error('Error al obtener las transacciones por cuenta:', error);
    return null;
  }
};