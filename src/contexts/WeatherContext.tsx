import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Forecast, Weather } from "../types";

type WeatherContextProps = {
  children: React.ReactNode;
};

type Units = "metric" | "imperial";

type WeatherContext = {
  units: Units;
  currentWeather: Weather | null;
  forecastWeather: Forecast | null;
  setUnits: Dispatch<SetStateAction<Units>>;
  setCurrentWeather: Dispatch<SetStateAction<Weather | null>>;
  setForecastWeather: Dispatch<SetStateAction<Forecast | null>>;
};

export const WeatherContext = createContext<WeatherContext | null>(null);

export default function WeatherContextProvider({
  children,
}: WeatherContextProps) {
  const [currentWeather, setCurrentWeather] = useState<Weather | null>(null);
  const [forecastWeather, setForecastWeather] = useState<Forecast | null>(null);
  const [units, setUnits] = useState<Units>("metric");

  return (
    <WeatherContext.Provider
      value={{
        units,
        currentWeather,
        forecastWeather,
        setUnits,
        setCurrentWeather,
        setForecastWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
