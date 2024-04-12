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
            <div class="forecastItem__info">
              <img src='https://developer.accuweather.com/sites/default/files/${
                data[i].Day.Icon < 10
                  ? '0' + data[i].Day.Icon
                  : data[i].Day.Icon
              }-s.png'/>
              <div>
                <p>${
                  data[i].Temperature.Minimum.Value +
                  data[i].Temperature.Minimum.Unit
                }</p>
                <p>${data[i].Day.IconPhrase}</p>
              </div>
            </div>
            <div class="forecastItem__date">
              <p>${days[date.getDay()]} ${date.getDate()} <sup>th</sup></p>
            </div>`;
    forecastItemEl.innerHTML = htmlStr;
    forecastListEl.appendChild(forecastItemEl);
  }
};

export { renderWeather };
