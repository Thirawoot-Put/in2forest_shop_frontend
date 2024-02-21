import { data } from "autoprefixer";
import axios from "../config/axios";

export const createUserOrder = (data) => axios.post("/order", data);

export const uploadPaySlip = (id, data) => axios.patch(`/payment/${id}`, data);

// Admin order Api
export const adminGetAllOrders = () => axios.get("/order/admin");
