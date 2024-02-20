import axios from "../config/axios";

export const updateUserInfo = (id, data) => axios.patch(`/user/${id}`, data);
export const addNewAddress = (data) => axios.post("/user/address", data);
export const getAllAddresses = (id) => axios.get(`/user/address/${id}`);
