import { UNSPLASH_API_KEY } from '../config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `https://api.unsplash.com/search/photos/?client_id=${UNSPLASH_API_KEY}&page=1`,
});

export async function getPhoto(name) {
  try {
    //return (await axiosInstance.get(`&query=${name}`)).data.results[0].urls.full;
    return '../public/default-background.jpg';
  } catch (error) {
    console.error('Error while fetching city photo', error);
    return '../public/default-background.jpg';
  }
}
