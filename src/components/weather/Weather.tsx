import { CurrentWeather } from "../../types";
import { capitalize, getNameOfDay, getTime } from "../../utils";

type WeatherProps = {
  currentWeather: CurrentWeather | undefined;
  className?: string;
};
export default function Weather({ currentWeather, className }: WeatherProps) {
  if (!currentWeather) return;

  return (
    <div
      className={`${className} flex justify-center items-center h-full text-on_surface`}
    >
      <section className="bg-on_background mr-10 text-3xl rounded-3xl h-full px-12 py-10 ">
        <h1 className="font-bold text-6xl mt-4">Now</h1>
        <div className="flex my-10">
          <h1 className="font-bold text-6xl">
            {Math.round(currentWeather.main.temp)} &#176;
          </h1>
          <img
            src={`/icons/${currentWeather.weather[0].icon}.png`}
            className="inline-block mx-4"
            width="60px"
          />
        </div>
        <p className="my-4 flex flex-row justify-start items-center gap-2">
          <span>{capitalize(currentWeather.weather[0].description)}</span>
        </p>

        <div className="h-0.5 border opacity-60 mt-10"></div>

        <CurrentDay />
        <div className="mt-8 text-left">
          <span className="text-bold text-2xl flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            {currentWeather.name}
          </span>
        </div>
      </section>
    </div>
  );
}

function CurrentDay() {
  return (
    <div className="mt-16 text-2xl text-bold flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
      </svg>
      <span className="">{getNameOfDay()},</span>
      <span className="">{getTime()}</span>
    </div>
  );
}
