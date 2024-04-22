import { screen, getByText, within } from '@testing-library/dom';
import { renderCityName, renderCityPhoto, renderWeather, render5DaysWeather } from './utils';
import { get5DayForecast, getLocationCity, getCurrentWeather } from './http/client';
import { getMock5DayForecast, getMockCurrentWeather } from './mock/mock-data';

jest.mock('./http/client', () => ({
  get5DayForecast: jest.fn(),
  getCurrentWeather: jest.fn(),
  getLocationCity: jest.fn(),
}));

import loadHtml from './mock/loadHTML';
const TEXTS = {
  CITY_NAME: 'Jerusalem',
};

const mockLoacationCity = {
  LocalizedName: 'Tel Aviv',
  Key: '215854',
  Country: 'Israel',
};

describe('Render Tests', () => {
  beforeAll(async () => {
    await loadHtml('../../index.html');

    getLocationCity.mockImplementationOnce(() => Promise.resolve(mockLoacationCity));
    get5DayForecast.mockImplementationOnce(() => Promise.resolve(getMock5DayForecast));
    getCurrentWeather.mockImplementationOnce(() => Promise.resolve(getMockCurrentWeather));

    renderCityName(TEXTS.CITY_NAME);
    renderCityPhoto(TEXTS.CITY_NAME);
    getLocationCity().then((city) => {
      get5DayForecast(city.key, true).then((data) => render5DaysWeather(data.DailyForecasts));
      getCurrentWeather(city.key, true).then((data) => renderWeather(data[0]));
    });
  });

  describe('renderCityName', () => {
    test('should render city name', () => {
      expect(screen.getByText(TEXTS.CITY_NAME)).toBeInTheDocument();
      // expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('renderCityPhoto', () => {
    test('should render city photo as a background', () => {
      const element = screen.getByTestId('header');
      const { backgroundImage } = window.getComputedStyle(element);
      expect(backgroundImage).not.toBe('none');
    });
  });

  describe('renderWeather', () => {
    test('should render current weather', () => {
      const container = document.querySelector('.forecastToday__info');
      expect(getByText(container, /Temperature:\s*\d+/)).toBeInTheDocument();
    });

    test('should render 5 day forecast', () => {
      const forecastListEl = document.querySelector('#forecast-list');
      expect(forecastListEl.childNodes.length).toBe(4);
      for (const item of forecastListEl.childNodes) {
        expect(item).toBeInTheDocument();
        const tempEls = within(item).getAllByText(/Temperature:\s*\d+/);
        expect(tempEls.length).toBe(2);
      }
    });
  });
});
