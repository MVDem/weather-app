import axiosInstance from "./index";
import { API_KEY } from "../config/index";
import {
  searchCity,
  getCityKey,
  getCurrentWeather,
  get5DayForecast,
  getLocationCity
} from "./index";

// jest.mock("axios", () => ({
//   get: jest.fn()
// }));

describe("http/client", () => {
  describe("Should be defined", () => {
    test("should have searchCity defined", () => {
      expect(searchCity).toBeDefined();
    });

    test("should have getCityKey defined", () => {
      expect(getCityKey).toBeDefined();
    });

    test("should have getCurrentWeather defined", () => {
      expect(getCurrentWeather).toBeDefined();
    });

    test("should have get5DayForecast defined", () => {
      expect(get5DayForecast).toBeDefined();
    });

    test("should have getLocationCity defined", () => {
      expect(getLocationCity).toBeDefined();
    });
  });

  describe("test searchCity method", () => {
    const usersMock = [{ LocalizedName: "Jerusalem" }, { LocalizedName: "Tel Aviv" }];
    axiosInstance.get = jest.fn().mockResolvedValue(usersMock);

    //searchCity
    describe("searchCity function", () => {
      test("should call correct query with searchCity method", () => {
        searchCity("Moscow");
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `locations/v1/cities/autocomplete?q=Moscow&apikey=${API_KEY}`
        );
      });
      test("should return null if search string has less than 3 characters", async () => {
        const result = await searchCity("M");
        expect(result).toBeNull();
      });
    });
    //getCityKey
    describe("getCityKey function", () => {
      test("should call correct query with getCityKey method", () => {
        getCityKey("Moscow");
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `locations/v1/search?q=Moscow&apikey=${API_KEY}`
        );
      });
      test("should return null if length of city name is equal 0 ", async () => {
        const result = await getCityKey("");
        expect(result).toBeNull();
      });
    });

    //getCurrentWeather
    describe("getCurrentWeather function", () => {
      test("should call correct query with getCurrentWeather method", () => {
        getCurrentWeather(11);
        expect(axiosInstance.get).toHaveBeenCalledWith(`currentconditions/v1/11?apikey=${API_KEY}`);
      });
      test("should return null if length of city key is equal 0 or not a number", async () => {
        const result = await getCurrentWeather("abc");
        expect(result).toBeNull();
      });
    });

    //get5DayForecast
    describe("get5DayForecast function", () => {
      test("should call correct query with get5DayForecast", () => {
        get5DayForecast(11);
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `forecasts/v1/daily/5day/11.json?apikey=${API_KEY}`
        );
      });
      test("should return null if length of city key is equal 0 or not a number", async () => {
        const result = await get5DayForecast("abc");
        expect(result).toBeNull();
      });
    });

    describe("getLocationCity function", () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      test("should return globalLocationCity if it exists", async () => {
        const globalLocationCity = {
          country: "Israel",
          key: "215854",
          name: "Tel Aviv"
        };
        const result = await getLocationCity();
        expect(result).toEqual(globalLocationCity);
      });

      test("should return globalLocationCity based on geolocation", async () => {
        const mockGeolocation = {
          getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
            Promise.resolve(
              success({
                coords: {
                  latitude: 31.97,
                  longitude: 34.77
                }
              })
            )
          )
        };

        const mockLocationData = {
          key: "215854",
          name: "Tel Aviv",
          Country: {
            EnglishName: "Israel"
          }
        };

        global.navigator.geolocation = mockGeolocation;

        axiosInstance.get = jest.fn().mockResolvedValueOnce({ data: mockLocationData });

        const expectedLocationCity = {
          country: "Israel",
          key: "215854",
          name: "Tel Aviv"
        };
        const result = await getLocationCity();
        expect(result).toEqual(expectedLocationCity);
      });

      test("should handle error gracefully", async () => {
        const mockGeolocation = {
          getCurrentPosition: jest
            .fn()
            .mockImplementationOnce((success, error) =>
              Promise.reject(error(new Error("Geolocation error")))
            )
        };

        global.navigator.geolocation = mockGeolocation;

        const expectedDefaultLocationCity = {
          country: "Israel",
          key: "215854",
          name: "Tel Aviv"
        };

        const result = await getLocationCity();
        expect(result).toEqual(expectedDefaultLocationCity);
      });
    });
  });
});
