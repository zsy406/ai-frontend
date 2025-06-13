import axios from 'axios';
import { Order } from '../types/order';

const API_URL = 'http://www.order.ai/api/order';

export const createOrder = async (order: Order) => {
    const response = await axios.post(API_URL, order);
    return response.data;
};

export const getOrder = async (orderId: string) => {
    const response = await axios.get(`${API_URL}/${orderId}`);
    return response.data;
};

export const getOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};