import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://reqres.in/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_URL}`,
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status === 401) {
      // Lógica para não autorizado
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
