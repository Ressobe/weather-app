import { useState } from "react";
import { ForecastWeather } from "../../types";
import ForecastNextDays from "./ForecastNextDays";
import ForecastToday from "./ForecastToday";

type ForecastProps = {
  forecastWeather: ForecastWeather | undefined;
  className?: string;
};

export default function Forecast({
  forecastWeather,
}: ForecastProps) {
  
  const [category, setCategory] = useState<'forecast' | 'today'>("forecast");
  if (!forecastWeather) return;


  return (
    <section className='text-on_surface flex flex-col gap-10  justify-center items-center h-full '>
      <span className="flex justify-between mb-5 gap-5">
        <button onClick={() => setCategory('forecast')}>
          <h1 className={`font-bold text-4xl inline-block ${category === 'forecast' ? "underline underline-offset-[12px]" : "opacity-70"}`}>Forecast</h1>
        </button>

        <button onClick={() => setCategory('today')}>
          <h1 className={`font-bold text-4xl inline-block ${category === 'today' ? "underline underline-offset-[12px]" : "opacity-70"}`}>Today</h1>
        </button>
      </span>
        {
          category === "forecast" ? (
            <ul className='flex min-h-[18rem] flex-col gap-5 '>
              <ForecastNextDays forecastWeather={forecastWeather} />
            </ul>
          ) : (
            <ul className='flex max-h-72 flex-col gap-5 overflow-y-scroll'>
              <ForecastToday forecastWeather={forecastWeather} />
            </ul>
          )
        }
    </section>
  );
}
