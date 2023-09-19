import {
  AirPollution,
  ForecastWeather,
  CurrentWeather,
  GeoApiResponse,
} from "./types";

export const GEO = "http://api.openweathermap.org/geo/1.0";
export const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5/";
export const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const DEFAULT_CITY = "Warszawa";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ff3c227715mshbe703ef0330d933p1180b6jsnb7b9f4ae561b",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

async function callApi(url: string, options?: object) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export async function getCurrentWeather(
  city: string,
  units = "metric",
  lang = "en"
): Promise<CurrentWeather> {
  const [lat, lon] = await getCords(city);
  const url = `${OPEN_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=${lang}`;
  const response = await callApi(url);
  return response as CurrentWeather;
}
export async function getCurrentWeather2(
  lat: string,
  lon: string,
  units = "metric",
  lang = "en"
): Promise<CurrentWeather> {
  const url = `${OPEN_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=${lang}`;
  const response = await callApi(url);
  return response as CurrentWeather;
}

export async function getCords(city: string) {
  const url = `${GEO}/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;
  const cords = await callApi(url);
  return [cords[0]["lat"], cords[0]["lon"]];
}

export async function getCities(city: string) {
  const url = `${GEO}/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;
  const cords = await callApi(url);
  return cords as GeoApiResponse[];
}

export async function getForecastWeather(city: string, units = "metric") {
  const [lat, lon] = await getCords(city);
  const url = `${OPEN_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  const response = await callApi(url);
  return response as ForecastWeather;
}

export async function getAirPollution(city: string, units = "metric") {
  const [lat, lon] = await getCords(city);
  const url = `${OPEN_WEATHER_API}/air_pollution?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  const response = await callApi(url);
  return response as AirPollution;
}
