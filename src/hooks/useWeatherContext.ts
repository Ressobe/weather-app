import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      "useWeatherContext must be used within in a WeatherContextProvider"
    );
  }
  return context;
}
