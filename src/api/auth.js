import axios from "../config/axios";

export const register = data => axios.post('/auth/register', data);