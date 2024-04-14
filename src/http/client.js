import axiosInstance from ".";

export async function searchCity(searchStr) {
  // We don't search with less them 3 letters
  if (searchStr.length < 3) return null;

  try {
    const result = await axiosInstance.get(
      `locations/v1/cities/autocomplete?q=${searchStr}`
    );
    return result.data;
  } catch (error) {
    console.error("Error while searching for a city:", error);
  }
  return null;
}

export async function getCityKey(cityNameStr) {
  if (cityNameStr.length == 0) return null;

  try {
    const result = await axiosInstance.get(
      `locations/v1/search?q=${cityNameStr}`
    );
    return result.data;
  } catch (error) {
    console.error("Error while getting City Key:", error);
  }
  return null;
}

export async function getCurrentWeather(cityKeyStr, details = false) {
  if (cityKeyStr.length == 0 || isNaN(cityKeyStr)) return null;

  try {
    const urlStr = `currentconditions/v1/${cityKeyStr}?details=${details}`;
    const result = await axiosInstance.get(urlStr);
    return result.data;
  } catch (error) {
    console.error("Error while getting Current Weather conditions:", error);
  }
  return null;
}

export async function get5DayForecast(cityKeyStr, details = false, metric=true) {
  if (cityKeyStr.length == 0 || isNaN(cityKeyStr)) return null;

  try {
    const urlStr = `forecasts/v1/daily/5day/${cityKeyStr}.json?details=${details}&metric=${metric}`;
    const result = await axiosInstance.get(urlStr);
    return result.data;
  } catch (error) {
    console.error("Error while getting 5 Day Forecast:", error);
  }
  return null;
}

var globalLocationCity;
const defaultLocationCity = {
  LocalizedName: "Tel Aviv",
  Key: "215854",
  Country: "Israel",
};

export async function getLocationCity() {
   if (!globalLocationCity) {
    try {
      const { latitude, longitude } = await getLocationCoordinates();
      const result = (
        await axiosInstance.get(
          `locations/v1/cities/geoposition/search?q=${latitude},${longitude}&toplevel=true`
        )
      ).data;
      globalLocationCity = {
        LocalizedName: result.LocalizedName,
        Key: result.Key,
        Country: result.Country.LocalizedName,
      };
      return globalLocationCity;
    } catch (error) {
      console.error("Error while getting location city:", error);
    }
    globalLocationCity = defaultLocationCity;
  }
  return globalLocationCity;
}

// helper function to enable return of a result of getCurrentPosition in a function
export function getLocationCoordinates() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error)
      );
    } else reject(new Error("Geolocation is not supported by this browser."));
  });
}


// {
//   "Code": "ServiceUnavailable",
//   "Message": "The allowed number of requests has been exceeded.",
//   "Reference": "/locations/v1/cities/autocomplete?q=jerus&apikey=sXUIgqs7nxy2e9xEZThg42gEVZEGghnu"
// }