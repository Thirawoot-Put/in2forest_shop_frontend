import axios from "../config/axios";

export const getAllProductTypes = () => axios.get('/user/types');
export const getAllProduct = () => axios.get('/user/product');
export const getProductById = (id) => axios.get(`/user/product/${id}`)
export const getAllTypesWithProducts = () => axios.get('/user/product/types')