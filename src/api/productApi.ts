import axios from 'axios';
import { Product } from '../types/product';

const API_URL = 'http://www.product.ai/api/product';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
};

export const fetchProductById = async (id: string): Promise<Product> => {
    const response = await axios.get<Product>(`${API_URL}/${id}`);
    return response.data;
};

export const createProduct = async (product: Product): Promise<Product> => {
    const response = await axios.post<Product>(API_URL, product);
    return response.data;
};