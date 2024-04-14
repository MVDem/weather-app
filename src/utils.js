import { getPhoto } from './http/unsplash';

export const STATE_OPERATION = {
  add: 'add',
  remove: 'remove',
};

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const renderCityName = (cityName, isFavorite) => {
  const cityNameEl = document.querySelector('#city-name');
  const htmlStr = /*html*/ `
          <h1 id="bookmark-city-name">${cityName}</h1>
          <button id="bookmark" class="header__starBtn ${isFavorite ? 'favorite' : ''}">
          </button>`;
  cityNameEl.innerHTML = htmlStr;
};

export { renderCityName };

async function renderCityPhoto(name) {
  const photoUrl = await getPhoto(name);
  const headerEl = document.querySelector('header');
  headerEl.style.backgroundImage = `url(${photoUrl})`;
}

export { renderCityPhoto };

const renderWeather = (data, units) => {
  const forecastTodayListEl = document.querySelector('#forecast-today');
  const date = new Date(data.LocalObservationDateTime);
  const logo = data.WeatherIcon < 10 ? '0' + data.WeatherIcon : data.WeatherIcon;
  const temp = data.Temperature[units].Value + data.Temperature[units].Unit;
  const feelTemperature = data.RealFeelTemperature[units].Value + data.RealFeelTemperature[units].Unit;
  const wind = data.Wind.Speed[units].Value + data.Wind.Speed[units].Unit + ' ' + data.Wind.Direction.English;
  const windGust = data.WindGust.Speed[units].Value + data.WindGust.Speed[units].Unit;
  const UVIndex = data.UVIndexText + ' - ' + data.UVIndex;
  const visibility = data.Visibility[units].Value + data.Visibility[units].Unit;
  const pressure = data.Pressure[units].Value + data.Pressure[units].Unit;
  const htmlStr = /*html*/ `
            <h3 class='forecastToday__date'>${days[date.getDay()]}, ${date.getDate()}<sup>th</sup></h3>
            <div class='forecastToday__logo'>
              <img src='https://developer.accuweather.com/sites/default/files/${logo}-s.png'/>
            </div>
            <div  class='forecastToday__info'>
              <p>Temperature: ${temp}, feels like ${feelTemperature}</p>
              <p>Wind: ${wind}</p>
              <p>WindGust: ${windGust}</p>
              <p>UV Index: ${UVIndex}</p>
              <p>Visibility: ${visibility}</p>
              <p>Pressure: ${pressure}</p>
            </div>`;
  forecastTodayListEl.innerHTML = htmlStr;
};

const render5DaysWeather = (data) => {
  const forecastListEl = document.querySelector('#forecast-list');
  forecastListEl.innerHTML = '';
  for (let i = 1; i < data.length; i++) {
    renderDaysForecast(data[i]);
  }
};

const renderDaysForecast = (data) => {
  const forecastListEl = document.querySelector('#forecast-list');
  const forecastItemEl = document.createElement('li');
  forecastItemEl.classList.add('forecastItem');
  const date = new Date(data.Date);
  const logo = data.Day.Icon < 10 ? '0' + data.Day.Icon : data.Day.Icon;
  const logoNight = data.Night.Icon < 10 ? '0' + data.Night.Icon : data.Night.Icon;
  const temperatureMax = data.Temperature.Maximum.Value + data.Temperature.Maximum.Unit;
  const temperatureMin = data.Temperature.Maximum.Value + data.Temperature.Maximum.Unit;
  const windDay = data.Day.Wind.Speed.Value + data.Day.Wind.Speed.Unit + ' ' + data.Day.Wind.Direction.English;
  const windNight = data.Night.Wind.Speed.Value + data.Night.Wind.Speed.Unit + ' ' + data.Night.Wind.Direction.English;
  const htmlStr = /*html*/ `
            <div class='forecastItem__date'>
              <h3>${days[date.getDay()]}</h3>
              <h4>${date.getDate() + months[date.getMonth()]}</h4>
            </div> 
            <div class='forecastItem__innerContainer'>
              <div class='forecastItem__logo'>
                <img src='https://developer.accuweather.com/sites/default/files/${logo}-s.png'/>
              </div>
              <div class='forecastItem__info'>
                <p>Temperature: ${temperatureMax}</p>
                <p>Wind: ${windDay}</p>
              </div>
            </div>
            <div class='forecastItem__innerContainer'>
              <div class='forecastItem__logo'>
                <img src='https://developer.accuweather.com/sites/default/files/${logoNight}-s.png'/>
              </div>
              <div class='forecastItem__info'>
                <p>Temperature: ${temperatureMin}</p>
                <p>Wind: ${windNight}</p>
              </div>
            </div>`;
  forecastItemEl.innerHTML = htmlStr;
  forecastListEl.appendChild(forecastItemEl);
};

export { renderWeather, render5DaysWeather };

const manageFavorite = (favoriteArr, city, operation) => {
  if (operation === STATE_OPERATION.add) favoriteArr.push(city);
  if (operation === STATE_OPERATION.remove) {
    return favoriteArr.filter((cityEl) => cityEl !== city);
  }
};

export { manageFavorite };

const renderFavorites = (favoriteArr) => {
  const favoritesListEl = document.querySelector('.header__dropdown > ul');
  favoritesListEl.innerHTML = '';
  let favoritesHTML = '';
  favoriteArr.forEach((cityStr) => {
    favoritesHTML += `<li class='dropdown__list-item'>${cityStr}</li>`;
  });
  favoritesHTML ? favoritesListEl.insertAdjacentHTML('beforeend', favoritesHTML) : '';
};

export { renderFavorites };
