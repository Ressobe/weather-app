import { ForecastWeather } from "../../types";
import { getDaysForecast } from "../../utils";

type ForecastProps = {
  forecastWeather: ForecastWeather | undefined;
  className?: string;
};

export default function Forecast({
  forecastWeather,
  className,
}: ForecastProps) {
  if (!forecastWeather) return;

  const forecastDays = getDaysForecast(forecastWeather, 5);

  return (
    <div
      className={`${className} flex flex-col justify-center items-center`}
    >
      <section className="bg-on_background text-on_surface  py-32 flex flex-col gap-10 justify-center items-center rounded-3xl min-w-full">
        <h1 className="font-bold text-5xl block p-6">5 days forecast</h1>
        <ul className="flex flex-col gap-5">
          {forecastDays.map((item, idx) => {
            const [day, month, numberOfDay] = item.date.split(" ");

            return (
              <li key={idx}>
                <img
                  src={`/icons/${item.weatherData[2].weather[0].icon}.png`}
                  className="inline-block mr-4"
                  width="40px"
                />
                <span className="">
                  {Math.round(item.weatherData[2].main.temp)}&#176;
                </span>
                <span className="mx-4">
                  {numberOfDay} {month}
                </span>
                <span>{day}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
