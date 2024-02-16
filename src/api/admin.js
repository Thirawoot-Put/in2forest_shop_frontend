import axios from "../config/axios";

export const addProduct = data => axios.post('/admin/product', data);
export const getAllProductTypes = () => axios.get('/admin/product/types');
export const getAllProduct = () => axios.get('/admin/product');