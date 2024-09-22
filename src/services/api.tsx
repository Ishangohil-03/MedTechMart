import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api', // Change to your server's IP/URL if running on a different device
    baseURL: ' http://192.168.56.1:5000/api'
});

export const getProducts = () => api.get('/products');
export const getProductById = (id: number) => api.get(`/products/${id}`);
export const createProduct = (product: any) => api.post('/products', product);
export const updateProduct = (id: number, product: any) => api.put(`/products/${id}`, product);
export const deleteProduct = (id: number) => api.delete(`/products/${id}`);
