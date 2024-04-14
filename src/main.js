import "./style.css";
import {
  get5DayForecast,
  getCityKey,
  getCurrentWeather,
  getLocationCity,
  searchCity,
} from "./http/client.js";

document.addEventListener("DOMContentLoaded", init);

export async function init() {

}

// this function should be removed when "client.test.js" is finished
function testClient() {
  getLocationCity().then((city) => {
    console.log(city);
    getCurrentWeather(city.Key).then((resolve) => {
      console.log(
        `Current weather in ${city.LocalizedName} is: ${resolve[0].WeatherText}`
      );
    });
  });

  searchCity("Tel").then((cityArr) => {
    console.log(cityArr);
  });

  getCityKey("Tel Aviv").then((cityKey) => {
    console.log(cityKey);
  });

  getCurrentWeather("215854").then((weather) => {
    console.log(weather);
  });

  getCurrentWeather("215854", true).then((weather) => {
    console.log(weather);
  });

  get5DayForecast("215854").then((forecast) => {
    console.log(forecast);
  });

  get5DayForecast("215854", true).then((forecast) => {
    console.log(forecast);
  });
}
