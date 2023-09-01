import { CurrentWeather } from "../../types";
import { capitalize, getNameOfDay, getTime } from "../../utils";

type WeatherProps = {
  currentWeather: CurrentWeather | undefined;
};
export default function Weather({ currentWeather }: WeatherProps) {
  if (!currentWeather) return;

  return <div>HI</div>;
  // return (
  //   <div className="flex justify-center items-center h-full">
  //     <section className="bg-white mr-10  rounded-3xl h-full p-16 ">
  //       <h1 className="font-bold text-6xl mt-4">Now</h1>
  //       <svg
  //         className="w-64 my-6"
  //         xmlns="http://www.w3.org/2000/svg"
  //         viewBox="0 0 24 24"
  //         id="cloud"
  //       >
  //         <path d="M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z"></path>
  //       </svg>
  //       <h1 className="font-bold text-8xl">
  //         {Math.round(currentWeather.main.temp)} &#176;
  //       </h1>
  //       <p className="my-4 flex flex-row justify-start items-center gap-2">
  //         <span>{capitalize(currentWeather.weather[0].description)}</span>
  //       </p>

  //       <div className="h-0.5 border opacity-60 mt-10"></div>

  //       <CurrentDay />
  //       <div className="mt-8 text-left">
  //         <span className="text-bold text-2xl flex items-center gap-3">
  //           <svg
  //             xmlns="http://www.w3.org/2000/svg"
  //             height="1em"
  //             viewBox="0 0 384 512"
  //           >
  //             <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
  //           </svg>
  //         </span>
  //       </div>
  //     </section>
  //   </div>
  // );
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
      <span className="">{getNameOfDay()},</span>{" "}
      <span className="text-slate-400">{getTime()}</span>
    </div>
  );
}
