import axios from 'axios';
import {} from '../config';

const axiosInstance = axios.create({
  baseURL: `http://dataservice.accuweather.com/`,
});

export default axiosInstance;
