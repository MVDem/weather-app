import './style.scss';
import {
  get5DayForecast,
  getCityKey,
  getCurrentWeather,
  getLocationCity,
  // searchCity
} from './http/client.js';
import { showFailMessage } from './toastify-utils.js';
import { renderWeather, renderCityName, renderCityPhoto, render5DaysWeather } from './utils.js';
import axiosInstance from './http/index.js';

document.addEventListener('DOMContentLoaded', init);

export async function init() {
  const currCity = await getLocationCity();
  renderCityPhoto(currCity.name);

  renderCityName(currCity.name, true); // true if city is favorite

  getCurrentWeather(currCity.key, true).then((resolve) => {
    renderWeather(resolve[0]);
  });

  get5DayForecast(currCity.key, true).then((data) => {
    render5DaysWeather(data.DailyForecasts);
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

async function searchCity(searchStr) {
  // We don't search with less them 3 letters
  if (searchStr.length < 3) return null;

  try {
    const result = await axiosInstance.get(
      `locations/v1/cities/autocomplete?q=${searchStr}&apikey=5lh4NrHAf8LhGiQtw7yQKCuYrmGFg7Ai`
    );
    return result.data;
  } catch (error) {
    console.error('Error while searching for a city:', error);
  }
}

async function getCurrentWeather1(cityKeyStr, details = false) {
  console.log('cityKeyStr: ', cityKeyStr);
  if (cityKeyStr.length == 0 || isNaN(cityKeyStr)) return null;

  try {
    const urlStr = `currentconditions/v1/${Number(
      cityKeyStr
    )}?apikey=5lh4NrHAf8LhGiQtw7yQKCuYrmGFg7Ai&details=${details}`;
    const result = await axiosInstance.get(urlStr);
    return result.data;
  } catch (error) {
    console.error('Error while getting Current Weather conditions:', error);
  }
}

async function get5DayForecast1(cityKeyStr, details = false, metric = true) {
  console.log('cityKeyStr: ', cityKeyStr);
  if (cityKeyStr.length == 0 || isNaN(cityKeyStr)) return null;

  try {
    const urlStr = `forecasts/v1/daily/5day/${Number(
      cityKeyStr
    )}.json?apikey=5lh4NrHAf8LhGiQtw7yQKCuYrmGFg7Ai&details=${details}&metric=${metric}`;
    const result = await axiosInstance.get(urlStr);
    return result.data;
  } catch (error) {
    console.error('Error while getting 5 Day Forecast:', error);
  }
}

searchFormEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const cityName = data.get('city');
  console.log(cityName);
  try {
    const [cityData] = await searchCity(cityName);
    console.log('cityData: ', cityData);

    renderCityPhoto(cityData.LocalizedName);

    renderCityName(cityData.LocalizedName, true);

    getCurrentWeather(cityData.Key, true).then((resolve) => {
      renderWeather(resolve[0]);
    });

    get5DayForecast(cityData.Key, true).then((data) => {
      render5DaysWeather(data.DailyForecasts);
    });
  } catch (error) {
    showFailMessage(error.message);
  }
});

const unitsRadioBtn = document.querySelector('#header-units-radioBtn');
unitsRadioBtn.addEventListener('change', (event) => {
  console.log(event.target.value);
});
