import { Weather } from "./types";

export const GEO = "http://api.openweathermap.org/geo/1.0";
export const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5/";
export const OPEN_WEATHER_API_KEY = "0e5f3fe5505c6d06452416fd5256f98d";

async function callApi(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getCurrentWeather(
  lat: number,
  lon: number,
  units: string
): Promise<Weather> {
  const url = `${OPEN_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  console.log(url);
  const response = await callApi(url);

  return {
    city: response["name"],
    wind_speed: response["wind"]["speed"],
    pressure: response["main"]["pressure"],
    visibility: response["visibility"],
    air_quality: 1,
    temp: response["main"]["temp"],
    humidity: response["main"]["humidity"],
    description: response["weather"]["0"]["description"],
    sunset: response["sys"]["sunset"],
    sunrise: response["sys"]["sunrise"],
    rain: response["rain"] ? response["rain"]["1h"] : 0,
  };
}

export async function getCords(city: string) {
  const url = `${GEO}/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;
  const cords = await callApi(url);
  return [cords[0]["lat"], cords[0]["lon"]];
}

export async function getForecastWeather(
  lat: number,
  lon: number,
  units: string
) {
  const url = `${OPEN_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${units}&lang=pl`;
  console.log(url);
  const response = await callApi(url);

  const r = response.list.slice(0, 5).map((item) => {
    const { temp_min, temp_max } = item["main"];
    const description = item["weather"][0]["main"];
    return { description, temp_min, temp_max };
  });
  return r;
}
