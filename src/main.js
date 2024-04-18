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

const state = {
  favorite: ['Tel Aviv', 'Nes Ziyyona', 'Moscow', 'Samara', 'Tokyo', 'London'],
  currentCityIndex: 0,
  theme: 'dark',
  units: 'Metric',
  currCity: '',
};

document.addEventListener('DOMContentLoaded', init);

export async function init() {
  const currCity = await getLocationCity();
  state.currCity = currCity.LocalizedName;
  displayCity(currCity);
  renderFavorites(state.favorite);
  navigateFavorites();
  chooseFavorite();
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
  await searchTargetCity(cityName);
});

const unitsRadioBtn = document.querySelector('#header-units-radioBtn');
unitsRadioBtn.addEventListener('change', (event) => {
  state.units = event.target.value;
  searchTargetCity(state.currCity);
});

const unitsRadioBtnLight = document.querySelector('#header-units-radioBtnLight');
unitsRadioBtnLight.addEventListener('change', switchStylesheet);

function switchStylesheet() {
  const body = document.body;
  const isLight = body.classList.contains('light');

  if (isLight) {
    state.theme = 'dark';
    body.classList.remove('light');
  } else {
    state.theme = 'light';
    body.classList.add('light');
  }
}
function displayCity(cityObj) {
  const isFavorite = state.favorite.includes(cityObj.LocalizedName);
  renderCityPhoto(cityObj.LocalizedName);

  renderCityName(cityObj.LocalizedName, isFavorite);

  getCurrentWeather(cityObj.Key, true)
    .then((resolve) => {
      if (!resolve) throw new Error('Cannot show current weather 🌪️');
      renderWeather(resolve[0], state.units);
    })
    .catch((error) => showFailMessage(error.message || 'Something went wrong'));

  get5DayForecast(cityObj.Key, true, state.units === 'Metric')
    .then((data) => {
      if (data === null) throw new Error('Cannot show forecast weather 🌪️');
      render5DaysWeather(data.DailyForecasts);
    })
    .catch((error) => showFailMessage(error.message || 'Something went wrong'));
  toogleFavoriteCity();
}

function toogleFavoriteCity() {
  const bookmarkEl = document.querySelector('#bookmark');

  bookmarkEl.addEventListener('click', (event) => {
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
    chooseFavorite();
    checkFavoriteLength();
  });
}

function chooseFavorite() {
  const favorites = document.querySelectorAll('.header__dropdown > ul > li');
  favorites.forEach((el) => {
    el.addEventListener('click', async (e) => {
      const cityData = await searchCity(el.textContent);

      if (cityData === null || !cityData.length) throw new Error('City was not found');
      state.currCity = cityData[0].LocalizedName;

      displayCity(cityData[0]);
    });
  });
}

function navigateFavorites() {
  const prevBtnEl = document.querySelector('#prev-page');
  const nextBtnEl = document.querySelector('#next-page');
  if (state.favorite.length < 2) return;

  state.currentCityIndex = state.favorite.indexOf(state.currCity);

  prevBtnEl.classList.remove('disabled');
  prevBtnEl.addEventListener('click', async () => {
    if (state.currentCityIndex <= 0) state.currentCityIndex = state.favorite.length - 1;
    else state.currentCityIndex -= 1;
    await searchTargetCity(state.favorite[state.currentCityIndex]);
  });

  nextBtnEl.classList.remove('disabled');
  nextBtnEl.addEventListener('click', async () => {
    if (state.currentCityIndex === state.favorite.length - 1) state.currentCityIndex = 0;
    else state.currentCityIndex += 1;
    await searchTargetCity(state.favorite[state.currentCityIndex]);
  });
}

async function searchTargetCity(cityStr) {
  state.currCity = cityStr;
  try {
    const cityData = await searchCity(cityStr);

    if (cityData === null || !cityData.length) throw new Error('City was not found');
    state.currCity = cityData[0].LocalizedName;

    displayCity(cityData[0]);
  } catch (error) {
    showFailMessage(error.message);
  }
}

function checkFavoriteLength() {
  const prevBtnEl = document.querySelector('#prev-page');
  const nextBtnEl = document.querySelector('#next-page');
  if (state.favorite.length < 2) {
    nextBtnEl.classList.add('disabled');
    prevBtnEl.classList.add('disabled');
  }
}

// trigger diff commit for pr creation to add reviews
