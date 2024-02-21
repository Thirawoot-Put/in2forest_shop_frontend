import { data } from "autoprefixer";
import axios from "../config/axios";

export const createUserOrder = (data) => axios.post("/orders", data);

export const uploadPaySlip = (id, data) => axios.patch(`/payment/${id}`, data);

export const getAllUserOrders = () => axios.get("/orders");

// Admin order Api
export const adminGetAllOrders = () => axios.get("/admin/orders");
