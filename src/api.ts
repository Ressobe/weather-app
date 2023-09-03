import { AirPollution, ForecastWeather, CurrentWeather } from "./types";

export const GEO = "http://api.openweathermap.org/geo/1.0";
export const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5/";
export const OPEN_WEATHER_API_KEY = "0e5f3fe5505c6d06452416fd5256f98d";
export const DEFAULT_CITY = "Warszawa";

async function callApi(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCurrentWeather(
  city: string,
  units: string
): Promise<CurrentWeather> {
  const [lat, lon] = await getCords(city);
  const url = `${OPEN_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  const response = await callApi(url);
  return response as CurrentWeather;
}

export async function getCords(city: string) {
  const url = `${GEO}/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;
  const cords = await callApi(url);
  return [cords[0]["lat"], cords[0]["lon"]];
}

export async function getForecastWeather(city: string, units: string) {
  const [lat, lon] = await getCords(city);
  const url = `${OPEN_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  const response = await callApi(url);
  return response as ForecastWeather;
}

export async function getAirPollution(city: string, units: string) {
  const [lat, lon] = await getCords(city);
  const url = `${OPEN_WEATHER_API}/air_pollution?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  const response = await callApi(url);
  return response as AirPollution;
}
