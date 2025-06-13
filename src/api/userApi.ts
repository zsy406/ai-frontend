import axios from 'axios';
import { User } from '../types/user';

const API_URL = 'http://www.user.ai/api/user';

export const registerUser = async (userData: User) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

export const getUserDetails = async (userId: string) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};