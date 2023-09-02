import { useQueries, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  DEFAULT_CITY,
  getAirPollution,
  getCurrentWeather,
  getForecastWeather,
} from "../api";
import Loading from "./status/LoadingPage";
import ErrorPage from "./status/ErrorPage";
import SearchBar from "./search/SearchBar";
import Weather from "./weather/Weather";
import TodayHighlights from "./weather/TodayHighlights";
import Forecast from "./weather/Forecast";
import Today from "./weather/Today";

function checkCity() {
  const city = localStorage.getItem("city");
  if (!city) {
    return DEFAULT_CITY;
  }
  return city;
}

function App() {
  const queryClient = useQueryClient();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [city, setCity] = useState(() => checkCity());
  const [units, setUnits] = useState("metric");

  const weather = useQueries({
    queries: [
      {
        queryKey: ["currentWeather", city, units],
        queryFn: () => getCurrentWeather(city, units),
      },
      {
        queryKey: ["forecastWeather", city, units],
        queryFn: () => getForecastWeather(city, units),
      },
      {
        queryKey: ["airPollution", city, units],
        queryFn: () => getAirPollution(city, units),
      },
    ],
  });

  const handleRefetch = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;

    const newCity = inputRef.current.value;

    if (newCity === "") return;

    setCity(newCity);
    localStorage.setItem("city", newCity);

    queryClient.refetchQueries([
      "currentWeather",
      "forecastWeather",
      "airPollution",
    ]);
  };

  const isLoading =
    weather[0].isLoading || weather[1].isLoading || weather[2].isLoading;

  const isError =
    weather[0].isError || weather[1].isError || weather[2].isError;

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <main className="">
      <div className="flex justify-between items-center pt-6 px-4 mx-24">
        <button className="bg-primary px-6 py-2 rounded-lg text-xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2em"
            viewBox="0 0 512 512"
            className="fill-on_primary inline-block mr-2  "
          >
            <path d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
          </svg>
          Current Location
        </button>
        <SearchBar handleRefetch={handleRefetch} inputRef={inputRef} />
        <div className="text-primary font-bold text-4xl flex justify-center items-center">
          <img src="/icon.svg" className="inline-block mr-5" width="60px" />
          <span className="text-on_surface">WeatherXXX</span>
        </div>
      </div>

      <section className="my-20 gap-10 flex flex-col 2xl:flex-row justify-center  ">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <Weather className="" currentWeather={weather[0].data} />
          <Forecast className="" forecastWeather={weather[1].data} />
        </div>
        <div className="flex justify-center">
          <TodayHighlights
            className=""
            currentWeather={weather[0].data}
            airPollution={weather[2].data}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
