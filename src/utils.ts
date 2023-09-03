import { ForecastItem, ForecastWeather } from "./types";

export function convertUnixTimeStamp(timestamp: number) {
  const milliseconds = timestamp * 1000;
  const dateObj = new Date(milliseconds);
  const timeFormatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return timeFormatter.format(dateObj);
}

export function getDate() {
  const dateFormatter = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
  return dateFormatter.format(new Date());
}

export function getTime() {
  const timeFormatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return timeFormatter.format(new Date());
}

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getNameOfDay() {
  const dateFormatter = new Intl.DateTimeFormat("en", {
    weekday: "long",
  });
  return dateFormatter.format(new Date());
}

export function filterWeatherForDay(data: ForecastWeather, targetDay: number) {
  return data.list.filter((item) => {
    // Extract the date from the dt timestamp (in seconds)
    const date = new Date(item.dt * 1000); // Convert to milliseconds
    const day = date.getDate();

    // Compare the day with the target day
    return day === targetDay;
  });
}

type forecastDays = Array<{ date: string; weatherData: ForecastItem[] }>;

export function getDaysForecast(
  apiResponse: ForecastWeather,
  numberOfDays: number
): forecastDays {
  const currentDate = new Date();
  const weatherDataForNext5Days = [];

  for (let i = 1; i <= numberOfDays; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + i);
    const weatherForNextDay = filterWeatherForDay(
      apiResponse,
      nextDay.getDate()
    );
    weatherDataForNext5Days.push({
      date: nextDay.toDateString(), // Date in a human-readable format
      weatherData: weatherForNextDay,
    });
  }

  return weatherDataForNext5Days;
}
