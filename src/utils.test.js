import { screen } from "@testing-library/dom";
import { renderCityName, renderCityPhoto, renderWeather } from "./utils";
import { get5DayForecast, getLocationCity } from "./http/client";

const TEXTS = {
  CITY_NAME: "Jerusalem",
};

describe("Render Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <header class="header" data-testid="header">
        <div id="sity-name"></div>
    </header>
    <div id="forecast-today" class="forecastToday"></div>
    <div class="forecast">
        <ul id="forecast-list" class="forecast__list"></ul>
    </div>`;
  });

  describe("renderCityName", () => {
    test("should render city name", () => {
      renderCityName(TEXTS.CITY_NAME);
      expect(screen.getByText(TEXTS.CITY_NAME)).toBeInTheDocument();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("renderCityPhoto", () => {
    test("should render city photo as a background", () => {
      renderCityPhoto(TEXTS.CITY_NAME);
      const element = screen.getByTestId("header");
      const { backgroundImage } = window.getComputedStyle(element);
      expect(backgroundImage).not.toBe("none");
    });
  });

  describe("renderWeather", () => {
    console.log("rednderCityPhoto");
    getLocationCity().then((city) => {
      get5DayForecast(city.key).then((data) => {
        renderWeather(data.DailyForecasts);
        test("should render current weather", () => {
          //   expect()
        });
        test("should reader 5 day forecast", () => {});
      });
    });
  });
});
