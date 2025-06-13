import axios from 'axios';

const API_URL = 'http://www.cart.ai/api/cart';

export const addItem = async (item) => {
    const response = await axios.post(`${API_URL}/add`, item);
    return response.data;
};

export const removeItem = async (itemId) => {
    const response = await axios.delete(`${API_URL}/remove/${itemId}`);
    return response.data;
};

export const getCart = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};