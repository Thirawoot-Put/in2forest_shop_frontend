import axios from "../config/axios";

export const createUserOrder = (data) => axios.post("/order", data);
