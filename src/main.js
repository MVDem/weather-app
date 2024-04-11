<<<<<<< HEAD

import './style.scss';
import { get5DayForecast, getCityKey, getCurrentWeather, getLocationCity, searchCity } from './http/client.js';
=======
import './style.scss';
import {
  get5DayForecast,
  getCityKey,
  getCurrentWeather,
  getLocationCity,
  searchCity,
} from './http/client.js';
import { renderWeather } from './utils.js';
>>>>>>> 51cd285 (added weather render function)

document.addEventListener('DOMContentLoaded', init);

export async function init() {
<<<<<<< HEAD
    const currCity = await getLocationCity();
    getCurrentWeather(currCity.key).then((resolve) => {
        console.log(`Current weather in ${currCity.name} is: ${resolve[0].WeatherText}`);    
    })
=======
  const currCity = await getLocationCity();
  getCurrentWeather(currCity.key).then((resolve) => {
    console.log(
      `Current weather in ${currCity.name} is: ${resolve[0].WeatherText}`
    );
  });
>>>>>>> 51cd285 (added weather render function)
}

const bookmarkEl = document.querySelector('#bookmark');
bookmarkEl.addEventListener('click', (event) => {
  const buttonEl = event.currentTarget;
  if (buttonEl.classList.contains('active')) {
    buttonEl.classList.remove('active');
  } else {
    buttonEl.classList.add('active');
  }
  const cityName = document.querySelector('#bookmark-city-name').textContent;
  console.log(cityName);
});

const burgerEl = document.querySelector('#burger');
burgerEl.addEventListener('click', () => {
  const dropdownEl = document.querySelector('#header-dropdown');
  if (dropdownEl.classList.contains('hidden')) {
    dropdownEl.classList.remove('hidden');
  } else {
    dropdownEl.classList.add('hidden');
  }
});

const searchFormEl = document.querySelector('[data-show-city]');

searchFormEl.addEventListener('submit', () => {
  event.preventDefault();
  const data = new FormData(event.target);
  const cityName = data.get('city');
  console.log(cityName);
  // request
  const dataFromServer = [12, 13, 14, 15, 16];
  renderWeather(dataFromServer);
});

const unitsRadioBtn = document.querySelector('#header-units-radioBtn');
unitsRadioBtn.addEventListener('change', (event) => {
  console.log(event.target.value);
});