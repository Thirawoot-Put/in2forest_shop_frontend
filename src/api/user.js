import axios from "../config/axios";

export const updateUserInfo = (id, data) => axios.patch(`/user/${id}`, data);
