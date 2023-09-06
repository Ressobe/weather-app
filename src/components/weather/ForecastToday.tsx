import { ForecastWeather } from "../../types";
import { getDaysForecast } from "../../utils";

export default function ForecastToday({
  forecastWeather,
}: {
  forecastWeather: ForecastWeather;
}) {
  const today = getDaysForecast(forecastWeather, 1)[0];
  return (
    <>
      {today.weatherData.map((item, idx) => {
        
        const [hour, minute] = item.dt_txt.split(" ")[1].split(":");

        return (
          <li key={idx}>
            <img
              src={`/icons/${item.weather[0].icon}.png`}
              className='inline-block mr-4'
              width='40px'
            />
            <span className=''>
              {Math.round(item.main.temp)}&#176;
            </span>
            <span className='mx-4'>
                {hour}:{minute}
            </span>
          </li>
        );
      })}
    </>
  );
}
