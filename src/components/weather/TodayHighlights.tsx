import { useMemo } from "react";
import { AirPollution, CurrentWeather } from "../../types";
import { convertUnixTimeStamp } from "../../utils";

const pollutionScale = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

type TodayHighlightsProps = {
  currentWeather: CurrentWeather | undefined;
  airPollution: AirPollution | undefined;
  className?: string;
};

export default function TodayHighlights({
  currentWeather,
  airPollution,
  className,
}: TodayHighlightsProps) {

  const humidityScale = useMemo(() => {
      const humidity = currentWeather!.main.humidity;
      if (humidity > 70) return "High";
      if (humidity <= 70 && humidity >= 40) return "Average";
      return "Low";

  }, [currentWeather])

  const visibilityScale = useMemo(() => {
      const visibility = Math.round(currentWeather!.visibility / 1000);
      if (visibility > 7) return "Good";
      if (visibility <= 7 && visibility >= 4) return "Average";
      return "Bad";
  }, [currentWeather])


  if (!currentWeather || !airPollution) return;

  return (
    <section
      className={`${className}   bg-on_background rounded-3xl p-20 block text-on_surface`}
    >
        <h1 className="font-bold text-4xl">Today's Highlights</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-rows-2 gap-5 mt-24">
          <div className="p-4 rounded-lg bg-background flex flex-col justify-between items-center">
            <p className=" text-xl ">Pressure</p>
            <p className="inline-flex h-full w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="water"
                width="4em"
                className="fill-on_surface"
              >
                <path d="M2.72,7.65a2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92,4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45,1,1,0,1,0-.56,1.92Zm18,8.08a4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45,1,1,0,1,0-.56,1.92,2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92Zm0-5a4.45,4.45,0,0,0-1,.45,2.08,2.08,0,0,1-2.1,0,4.64,4.64,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.64,4.64,0,0,0-4.54,0,2.08,2.08,0,0,1-2.1,0,4.45,4.45,0,0,0-1-.45A1,1,0,0,0,2,11.41a1,1,0,0,0,.68,1.24,2.56,2.56,0,0,1,.56.24,4,4,0,0,0,4.1,0,2.6,2.6,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.6,2.6,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,3.88,3.88,0,0,0,2-.56,2.56,2.56,0,0,1,.56-.24,1,1,0,0,0-.56-1.92Z"></path>
              </svg>
              <span className="ml-4 font-bold text-4xl">
                {currentWeather.main.pressure} hPA
              </span>
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background flex flex-col justify-between items-center">
            <p className=" text-xl">Wind status</p>
            <p className="font-bold inline-flex h-full w-full justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="windsock"
                width="4em"
                className="fill-on_surface"
              >
                <path d="M18.08,5,10,4.33h0L7,4.08V3A1,1,0,0,0,5,3V21a1,1,0,0,0,2,0V13.92l3-.25h0L18.08,13A1,1,0,0,0,19,12V6A1,1,0,0,0,18.08,5ZM9,11.75l-2,.16V6.09l2,.16Zm4-.34-2,.17V6.42l2,.17Zm4-.33-2,.17V6.75l2,.17Z"></path>
              </svg>
              <span className="ml-4 font-bold text-4xl">
                {currentWeather.wind.speed} m/s
              </span>
            </p>
          </div>

          <div className="p-4 rounded-lg bg-background flex flex-col justify-between items-center">
            <span className=" text-xl self-start">Sunrise & Sunset</span>
            <span className="text-xl flex justify-center items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="sunset"
                width="3em"
                className="inline-block fill-on_surface"
              >
                <path d="M17.66,8.34a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,6.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,8.34ZM12,6a1,1,0,0,0,1-1V4a1,1,0,0,0-2,0V5A1,1,0,0,0,12,6ZM4,12H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM5.64,8.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,7.34ZM21,12H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm7-4h-.88a5.39,5.39,0,0,0,.38-2,5.5,5.5,0,0,0-11,0,5.39,5.39,0,0,0,.38,2H6a1,1,0,0,0,0,2H18a1,1,0,0,0,0-2Zm-3.15,0H9.15a3.44,3.44,0,0,1-.65-2,3.5,3.5,0,0,1,7,0A3.44,3.44,0,0,1,14.85,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"></path>
              </svg>
              {convertUnixTimeStamp(currentWeather.sys.sunrise)}
            </span>
            <span className="text-xl flex justify-center items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="moonset"
                width="3em"
                className="inline-block fill-on_surface"
              >
                <path d="M11,19H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Zm9-4H18.84A8.18,8.18,0,0,0,20,12.05a1,1,0,0,0-.34-.93,1,1,0,0,0-1-.19,6,6,0,0,1-1.92.32,6.06,6.06,0,0,1-6.06-6,6.93,6.93,0,0,1,.1-1,1,1,0,0,0-.35-.92,1,1,0,0,0-1-.18A8.06,8.06,0,0,0,4,10.68,8,8,0,0,0,5.27,15H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Zm-3.72,0H7.83a6,6,0,0,1,.88-9.36,8.06,8.06,0,0,0,8.05,7.61,7,7,0,0,0,.79,0A6.08,6.08,0,0,1,16.28,15ZM16,19H15a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"></path>
              </svg>
              {convertUnixTimeStamp(currentWeather.sys.sunset)}
            </span>
          </div>

          <div className="p-4 rounded-lg bg-background flex flex-col justify-between items-center">
            <span className=" text-xl self-start">Humidity</span>
            <span className="font-bold text-4xl flex justify-center items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="rainy-weather"
                width="2em"
                className="fill-on_surface"
              >
                <path d="M9,7.75C9,5,6.42,3.24,6.31,3.17a1,1,0,0,0-1.12,0C5.08,3.25,2.5,5,2.5,7.75a3.25,3.25,0,0,0,6.5,0ZM5.75,9A1.25,1.25,0,0,1,4.5,7.75,3.66,3.66,0,0,1,5.75,5.3,3.61,3.61,0,0,1,7,7.75,1.25,1.25,0,0,1,5.75,9Zm6.06,1.17a1,1,0,0,0-1.12,0c-.17.12-4.19,2.9-4.19,7.08a4.75,4.75,0,0,0,9.5,0C16,13,12,10.28,11.81,10.17ZM11.25,20A2.75,2.75,0,0,1,8.5,17.25c0-2.31,1.81-4.17,2.76-5,.94.79,2.74,2.63,2.74,5A2.75,2.75,0,0,1,11.25,20ZM18.06,2.17a1,1,0,0,0-1.12,0C16.8,2.27,13.5,4.55,13.5,8a4,4,0,0,0,8,0C21.5,4.51,18.2,2.26,18.06,2.17ZM17.5,10a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72A5.39,5.39,0,0,1,19.5,8,2,2,0,0,1,17.5,10Z"></path>
              </svg>
              {currentWeather.main.humidity} %
            </span>
            <span className="text-2xl">{humidityScale}</span>
          </div>
          <div className="p-4 rounded-lg bg-background flex flex-col justify-between items-center">
            <span className=" text-xl self-start">Visibility</span>
            <span className="flex justify-center items-center gap-5 font-bold text-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 576 512"
                className="fill-on_surface"
              >
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
              </svg>
              {Math.round(currentWeather.visibility / 1000)} km
            </span>
            <span className="text-2xl">{visibilityScale}</span>
          </div>
          <div className="p-4 rounded-lg bg-background flex flex-col justify-between items-center">
            <p className=" text-xl self-start">Air quality</p>
            <p className="font-bold text-4xl flex justify-center items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
                className="fill-on_surface"
              >
                <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
              </svg>
              {airPollution.list[0].main.aqi}
            </p>
            <p className="text-2xl">
              {pollutionScale[airPollution.list[0].main.aqi - 1]}
            </p>
          </div>
      </div>  
    </section>
  );
}
