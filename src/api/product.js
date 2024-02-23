import axios from "../config/axios";

export const getAllProductTypes = () => axios.get("/products/types");
export const getAllProduct = () => axios.get("/products");
export const getProductById = (id) => axios.get(`/products/${id}`);
export const getAllTypesWithProducts = () =>
  axios.get("/products/products-types");
