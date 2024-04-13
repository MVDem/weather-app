import './style.scss';
import { get5DayForecast, getCityKey, getCurrentWeather, getLocationCity, searchCity } from './http/client.js';
import { showFailMessage } from './toastify-utils.js';
import {
  renderWeather,
  renderCityName,
  renderCityPhoto,
  render5DaysWeather,
  STATE_OPERATION,
  manageFavorite,
  renderFavorites,
} from './utils.js';
import axiosInstance from './http/index.js';

const state = {
  favorite: [],
  currentCityIndex: 0,
};

document.addEventListener('DOMContentLoaded', init);

export async function init() {
  const currCity = await getLocationCity();
  renderCity(currCity);

  if (state.favorite.length) {
    const prevBtnEl = document.querySelector('#prev-page');
    prevBtnEl.addEventListener('click', () => {
      console.log('render prev city from state');
      renderCity(state.favorite[state.currentCityIndex - 1]);
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

searchFormEl.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const cityName = data.get('city');
  try {
    const [cityData] = await searchCity(cityName);
    renderCity(cityData);
  } catch (error) {
    showFailMessage(error.message);
  }
});

const unitsRadioBtn = document.querySelector('#header-units-radioBtn');
unitsRadioBtn.addEventListener('change', (event) => {});

function renderCity(city) {
  const isFavorite = state.favorite.includes(city);
  try {
    renderCityPhoto(city.EnglishName);

    renderCityName(city.LocalizedName, isFavorite);

    getCurrentWeather(city.Key, true).then((resolve) => {
      renderWeather(resolve[0]);
    });

    get5DayForecast(city.Key, true).then((data) => {
      render5DaysWeather(data.DailyForecasts);
    });
    changeFavoriteCity();
  } catch (error) {
    showFailMessage(error.message || 'Something weht wrong');
  }
}

function changeFavoriteCity() {
  const bookmarkEl = document.querySelector('#bookmark');

  bookmarkEl?.addEventListener('click', (event) => {
    const cityName = document.querySelector('#bookmark-city-name').textContent;

    const buttonEl = event.currentTarget;
    if (buttonEl.classList.contains('favorite')) {
      buttonEl.classList.remove('favorite');
      state.favorite = manageFavorite(state.favorite, cityName, STATE_OPERATION.remove);
    } else {
      buttonEl.classList.add('favorite');
      manageFavorite(state.favorite, cityName, STATE_OPERATION.add);
    }
    renderFavorites(state.favorite);
  });
}
