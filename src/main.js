import './style.scss';
import {
  get5DayForecast,
  getCityKey,
  getCurrentWeather,
  getLocationCity,
  searchCity,
} from './http/client.js';
import { renderWeather } from './utils.js';

document.addEventListener('DOMContentLoaded', init);

export async function init() {
  const currCity = await getLocationCity();
  getCurrentWeather(currCity.key).then((resolve) => {
    console.log(
      `Current weather in ${currCity.name} is: ${resolve[0].WeatherText}`
    );
  });
  get5DayForecast(currCity.key).then((data) => {
    renderWeather(data.DailyForecasts);
  });
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
});

const unitsRadioBtn = document.querySelector('#header-units-radioBtn');
unitsRadioBtn.addEventListener('change', (event) => {
  console.log(event.target.value);
});
