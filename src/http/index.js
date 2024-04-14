import axios from "axios";
import { API_KEY } from "../config";

const axiosInstance = axios.create({
  baseURL: `http://dataservice.accuweather.com/`,
  params: {
    apikey: API_KEY,
  },
});

export default axiosInstance;
