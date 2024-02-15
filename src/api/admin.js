import axios from "../config/axios";

export const addProduct = data => axios.post('/admin/product', data);
// export const uploadMainImage = form => axios.patch('/admin/product', form)
export const getAllProductTypes = () => axios.get('/admin/product/types');