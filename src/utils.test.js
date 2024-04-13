import { screen, getByText } from "@testing-library/dom";
import {
  renderCityName,
  renderCityPhoto,
  renderWeather,
  render5DaysWeather,
} from "./utils";
import {
  get5DayForecast,
  getLocationCity,
  getCurrentWeather,
} from "./http/client";

const TEXTS = {
  CITY_NAME: "Jerusalem",
};

describe("Render Tests", () => {
  beforeAll(() => {
    document.body.innerHTML = `
    <header class="header" data-testid="header">
        <div id="sity-name"></div>
    </header>
    <main>
      <div id="forecast-today" class="forecastToday"></div>
      <div class="forecast">
        <ul id="forecast-list" class="forecast__list"></ul>
      </div>
    </main>`;

    renderCityName(TEXTS.CITY_NAME);
    renderCityPhoto(TEXTS.CITY_NAME);
    getLocationCity().then((city) => {
      get5DayForecast(city.key).then((data) => render5DaysWeather(data));
      getCurrentWeather(city.key, true).then((resolve) =>
        renderWeather(resolve[0])
      );
    });
  });

  describe("renderCityName", () => {
    test("should render city name", () => {
      expect(screen.getByText(TEXTS.CITY_NAME)).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("renderCityPhoto", () => {
    test("should render city photo as a background", () => {
      const element = screen.getByTestId("header");
      const { backgroundImage } = window.getComputedStyle(element);
      expect(backgroundImage).not.toBe("none");
    });
  });

  describe("renderWeather", () => {
    test("should render current weather", () => {
      const container = document.querySelector(".forecastToday__info");
      expect(getByText(container, /Temperature:\s*\d+/)).toBeInTheDocument();
    });

    test("should render 5 day forecast", () => {
      const forecastListEl = document.querySelector("#forecast-list");
      const forecastItems =
        forecastListEl.getElementsByClassName("forecastItem");
      for (const item of forecastItems) {
        expect(item).toBeInTheDocument();
        expect(getByText(item, /Temperature:\s*\d+/)).toBeInTheDocument();
      }
      expect(forecastListEl.childNodes.length).toBe(5)
    });
  });
});
