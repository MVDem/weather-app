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
  favorite: [
    'Tel Aviv',
    'Nes Ziyyona',
    // { LocalizedName: 'Tel Aviv', Key: '215854' },
    // { LocalizedName: 'Jerusalem', Key: '213225' },
    // { LocalizedName: 'Nes Ziyyona', Key: '212560' },
  ],
  currentCityIndex: 0,
  theme: 'dark',
  units: 'C',
  currCity: '',
};

document.addEventListener('DOMContentLoaded', init);

export async function init() {
  const currCity = await getLocationCity();
  displayCity(currCity);
  renderFavorites(state.favorite);
  // navigateFavorites();
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
  try {
    const cityData = await searchCity(cityName);

    if (cityData === null || !cityData.length) throw new Error('City was not found');
    state.currCity = cityData[0].LocalizedName;

    displayCity(cityData[0]);
  } catch (error) {
    showFailMessage(error.message);
  }
});

const unitsRadioBtn = document.querySelector('#header-units-radioBtn');
unitsRadioBtn.addEventListener('change', (event) => {});

function displayCity(cityObj) {
  const isFavorite = state.favorite.includes(cityObj.LocalizedName);
  try {
    renderCityPhoto(cityObj.LocalizedName, state.theme);

    renderCityName(cityObj.LocalizedName, isFavorite);

    getCurrentWeather(cityObj.Key, true).then((resolve) => {
      renderWeather(resolve[0]);
    });

    get5DayForecast(cityObj.Key, true).then((data) => {
      render5DaysWeather(data.DailyForecasts);
    });
    toogleFavoriteCity();
  } catch (error) {
    showFailMessage(error.message || 'Something went wrong');
  }
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
    // navigateFavorites();
  });
}

function chooseFavorite() {
  const favorites = document.querySelectorAll('.header__dropdown > ul > li');

  favorites.forEach((el) => {
    el.addEventListener('click', async (e) => {
      console.log(e);
      const cityData = await searchCity(el.textContent);
      console.log('cityData: ', cityData);

      if (cityData === null || !cityData.length) throw new Error('City was not found');
      state.currCity = cityData[0].LocalizedName;

      displayCity(cityData[0]);
    });
  });
}

// function navigateFavorites() {
//   if (state.favorite.length < 1) {
//     nextBtnEl.classList.add('disabled');
//     prevBtnEl.classList.add('disabled');
//     return;
//   }

//   const indexCurrentCity = state.favorite.indexOf(state.currCity);

//   state.currentCityIndex = indexCurrentCity >= 0 ? indexCurrentObj : 0;

//   const prevBtnEl = document.querySelector('#prev-page');
//   prevBtnEl.classList.remove('disabled');
//   prevBtnEl.addEventListener('click', () => {
//     if (state.currentCityIndex === 0) state.currentCityIndex = state.favorite.length - 1;
//     else state.currentCityIndex -= 1;
//     console.log('currentCityIndex: prev ', state.currentCityIndex);
//     displayCity(state.favorite[state.currentCityIndex]);
//   });

//   const nextBtnEl = document.querySelector('#next-page');
//   nextBtnEl.classList.remove('disabled');
//   nextBtnEl.addEventListener('click', () => {
//     if (state.currentCityIndex === state.favorite.length - 1) state.currentCityIndex = 0;
//     else state.currentCityIndex += 1;
//     console.log('currentCityIndex: next', state.currentCityIndex);
//     displayCity(state.favorite[state.currentCityIndex]);
//   });
// }
