import {} from './http/client';
import './style.css';
import { get5DayForecast, getCityKey, getCurrentWeather, getLocationCity, searchCity } from './http/client.js';

document.addEventListener('DOMContentLoaded', init);

export async function init() {
    const currCity = await getLocationCity();
    getCurrentWeather(currCity.key).then((resolve) => {
        console.log(`Current weather in ${currCity.name} is: ${resolve[0].WeatherText}`);    
    })
}
