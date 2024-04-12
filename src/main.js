import './style.scss';
import {
  get5DayForecast,
  getCityKey,
  getCurrentWeather,
  getLocationCity,
  searchCity,
} from './http/client.js';
import { renderWeather, renderCityName, renderCityPhoto } from './utils.js';

document.addEventListener('DOMContentLoaded', init);

export async function init() {
  const currCity = await getLocationCity();
  renderCityPhoto(currCity.name);

  renderCityName(currCity.name, true); // true if city is favorite

  getCurrentWeather(currCity.key).then((resolve) => {
    console.log(
      `Current weather in ${currCity.name} is: ${resolve[0].WeatherText}`
    );
  });

  get5DayForecast(currCity.key).then((data) => {
    renderWeather(data.DailyForecasts);
  });

  if (true) {
    //true if state.length > 0
    const prevBtnEl = document.querySelector('#prev-page');
    prevBtnEl.addEventListener('click', () => {
      console.log('render prev city from state');
      //render prev city from state
    });

    const nextBtnEl = document.querySelector('#next-page');
    nextBtnEl.classList.remove('disabled');
    nextBtnEl.addEventListener('click', () => {
      prevBtnEl.classList.remove('disabled');
      console.log('render next city from state');
      //render next city from state
    });
  }
}

const bookmarkEl = document.querySelector('#bookmark');
bookmarkEl?.addEventListener('click', (event) => {
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

searchFormEl.addEventListener('submit', (event) => {
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
