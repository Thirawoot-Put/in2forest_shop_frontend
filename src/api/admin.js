import axios from "../config/axios";

export const addProduct = data => axios.post('/admin/product', data);
export const deleteProduct = (id) => axios.delete(`/admin/product/${id}`)
export const editProductById = (id, data) => axios.patch(`/admin/product/${id}`, data)
