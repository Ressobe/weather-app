import { useQueries, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  DEFAULT_CITY,
  getAirPollution,
  getCurrentWeather,
  getForecastWeather,
} from "../api";
import Loading from "./status/LoadingPage";
import ErrorPage from "./status/ErrorPage";
import Weather from "./weather/Weather";
import TodayHighlights from "./weather/TodayHighlights";
import Forecast from "./weather/Forecast";
import SearchBar from "./search/SearchBar";
import CurrentLocation from "./search/CurrentLocation";
import Logo from "./search/Logo";
import useWindow from "../hooks/useWindow";

function checkCity() {
  const city = localStorage.getItem("city");
  if (!city) {
    return DEFAULT_CITY;
  }
  return city;
}

function App() {
  const queryClient = useQueryClient();

  const [city, setCity] = useState(checkCity());
  const [units, setUnits] = useState("metric");
  const windowSize = useWindow();

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

  const isLoading =
    weather[0].isLoading || weather[1].isLoading || weather[2].isLoading;

  const isError =
    weather[0].isError || weather[1].isError || weather[2].isError;

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  return (
    <main className=''>
      {windowSize.innerWidth > 1400 ? (
        <div className='flex flex-wrap gap-5 justify-between items-center pt-6 px-4 mx-12'>
          <CurrentLocation mobileView={false} setLocation={setCity} />
          <SearchBar mobileView={false} onSearch={setCity} />
          <Logo mobileView={false} />
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-between items-center pt-6 px-4 mx-12">
          <SearchBar mobileView={true} onSearch={setCity} />
          <div className="flex gap-10 items-center justify-center">
          <CurrentLocation mobileView={true} setLocation={setCity} />
          <Logo mobileView={true} />
          </div>
        </div>
      )}
      <section className='my-20 mx-10 gap-10 flex flex-col 2xl:flex-row justify-center'>
        <div className='flex flex-col lg:flex-row justify-center'>
          <Weather className='' currentWeather={weather[0].data} />
          <Forecast className='' forecastWeather={weather[1].data} />
        </div>
        <div className='flex justify-center'>
          <TodayHighlights
            className=''
            currentWeather={weather[0].data}
            airPollution={weather[2].data}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
