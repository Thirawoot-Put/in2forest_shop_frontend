import axios from "../config/axios";

export const register = (data) => axios.post("/auth/register", data);
export const login = (data) => axios.post("/auth/login", data);
export const getMe = () => axios.get("/auth/me");
export const updateUserInfo = (id, data) => axios.patch(`/user/${id}`, data);
