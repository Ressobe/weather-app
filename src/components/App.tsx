import { useQueries } from "@tanstack/react-query";
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
  const [city, setCity] = useState(checkCity());
  const units = "metric";
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
    <main className="">
      {windowSize.innerWidth > 1400 ? (
        <div className="flex flex-wrap gap-5 justify-between items-center pt-6 px-4 mx-12">
          <CurrentLocation mobileView={false} setLocation={setCity} />
          <SearchBar defaultCity={city} mobileView={false} onSearch={setCity} />
          <Logo mobileView={false} />
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-between items-center pt-6 px-4 mx-12">
          <SearchBar defaultCity={city} mobileView={true} onSearch={setCity} />
          <div className="flex gap-10 items-center justify-center">
            <CurrentLocation mobileView={true} setLocation={setCity} />
            <Logo mobileView={true} />
          </div>
        </div>
      )}

      <section className="my-20 mx-10 gap-10 flex flex-col 2xl:flex-row justify-center">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-wrap 2xl:flex-nowrap justify-center items-center gap-20  bg-on_background rounded-3xl p-20">
            <Weather currentWeather={weather[0].data} city={city} />
            <Forecast forecastWeather={weather[1].data} />
          </div>
        </div>
        <div className="flex justify-center">
          <TodayHighlights
            currentWeather={weather[0].data}
            airPollution={weather[2].data}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
