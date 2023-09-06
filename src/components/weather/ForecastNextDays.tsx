import { ForecastWeather } from "../../types";
import { getDaysForecast } from "../../utils";

export default function ForecastNextDays({
  forecastWeather,
}: {
  forecastWeather: ForecastWeather;
}) {
  const forecastDays = getDaysForecast(forecastWeather, 5);
  return (
    <>
      {forecastDays.map((item, idx) => {
        if (item.weatherData[2] === undefined) return;

        const [day, month, numberOfDay] = item.date.split(" ");

        return (
          <li key={idx}>
            <img
              src={`/icons/${item.weatherData[2].weather[0].icon}.png`}
              className='inline-block mr-4'
              width='40px'
            />
            <span className=''>
              {Math.round(item.weatherData[2].main.temp)}&#176;
            </span>
            <span className='mx-4'>
              {numberOfDay} {month}
            </span>
            <span>{day}</span>
          </li>
        );
      })}
    </>
  );
}
