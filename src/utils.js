import { getPhoto } from './http/unsplash';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const renderWeather = (data) => {
  const forecastListEl = document.querySelector('#forecast-list');
  const forecastTodayListEl = document.querySelector('#forecast-today');
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      renderTodayForecast(data[i], forecastTodayListEl);
    } else {
      render4daysForecast(data[i], forecastListEl);
    }
  }
};

const render4daysForecast = (data, parentEl) => {
  const forecastItemEl = document.createElement('li');
  forecastItemEl.classList.add('forecastItem');
  const date = new Date(data.Date);
  const htmlStr = /*html*/ `
       <img src='https://developer.accuweather.com/sites/default/files/${
         data.Day.Icon < 10 ? '0' + data.Day.Icon : data.Day.Icon
       }-s.png'/>
       <p class="forecastItem__date">${
         days[date.getDay()]
       } ${date.getDate()} <sup>th</sup></p>
         <p>${
           data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit
         }</p>
         <p>${data.Day.IconPhrase}</p>
       
     `;
  forecastItemEl.innerHTML = htmlStr;
  parentEl.appendChild(forecastItemEl);
};

const renderTodayForecast = (data, parentEl) => {
  const date = new Date(data.Date);
  const htmlStr = /*html*/ `
        <div class="forecastToday__date">
          <p>${days[date.getDay()]} ${date.getDate()} <sup>th</sup></p>
        </div>
        <ul class="forecastToday__list">
        <li class="forecastToday__item">
            <p>Day</p>
            <img
              src="https://developer.accuweather.com/sites/default/files/${
                data.Day.Icon < 10 ? '0' + data.Day.Icon : data.Day.Icon
              }-s.png"
            />
            <p>${
              data.Temperature.Maximum.Value + data.Temperature.Maximum.Unit
            }</p>
            <p>${data.Day.IconPhrase}</p>
          </li>
          <li class="forecastToday__item">
            <p>Night</p>
            <img
              src="https://developer.accuweather.com/sites/default/files/${
                data.Night.Icon < 10 ? '0' + data.Night.Icon : data.Night.Icon
              }-s.png"
            />

            <p>${
              data.Temperature.Minimum.Value + data.Temperature.Minimum.Unit
            }</p>
            <p>${data.Night.IconPhrase}</p>
          </li>
          </ul>
      </div>
     `;
  parentEl.innerHTML = htmlStr;
};

export { renderWeather };

const renderCityName = (cityName, isFavorite) => {
  const cityNameEl = document.querySelector('#sity-name');
  const htmlStr = /*html*/ `
          <h1 id="bookmark-city-name">${cityName}</h1>
          <button id="bookmark" class="header__starBtn">
            <img src="./star${isFavorite ? '-fill' : ''}.svg" />
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
