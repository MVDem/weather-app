import { UNSPLASH_API_KEY } from '../config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.unsplash.com/photos/`,
});

export async function getPhoto(name) {
  try {
    return (await axiosInstance.get(`random?orientation=landscape&query=${name}&client_id=${UNSPLASH_API_KEY}`)).data
      .urls.regular;
  } catch (error) {
    console.error('Error while fetching city photo', error);
    return './default-background.jpg';
  }
}
