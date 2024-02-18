import axios from "../config/axios";

export const addProductToCart = (data) => axios.post("/cart", data);
export const fetchAllInUserCart = () => axios.get("/cart");
export const deleteProductInCart = (id) => axios.delete(`/cart/${id}`);
