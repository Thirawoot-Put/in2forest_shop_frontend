import axios from 'axios';
import { getToken } from '../utils/local-storage';

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.request.use(
    function (config) {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, function (error) {
        return Promise.reject(error);
    }
)

export default axios;