const renderWeather = (data) => {
  const forecastListEl = document.querySelector('#forecast-list');
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
  for (let i = 0; i < data.length; i++) {
    const forecastItemEl = document.createElement('li');
    forecastItemEl.classList.add('forecastItem');
    const date = new Date(data[i].Date);
    const htmlStr = /*html*/ `
              <img src='https://developer.accuweather.com/sites/default/files/${
                data[i].Day.Icon < 10
                  ? '0' + data[i].Day.Icon
                  : data[i].Day.Icon
              }-s.png'/>
              <p class="forecastItem__date">${
                days[date.getDay()]
              } ${date.getDate()} <sup>th</sup></p>
                <p>${
                  data[i].Temperature.Minimum.Value +
                  data[i].Temperature.Minimum.Unit
                }</p>
                <p>${data[i].Day.IconPhrase}</p>
              
            `;
    forecastItemEl.innerHTML = htmlStr;
    forecastListEl.appendChild(forecastItemEl);
  }
};

export { renderWeather };
