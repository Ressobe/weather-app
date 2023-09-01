import { ForecastWeather } from "../../types";
import { filterWeatherForDay, get5daysForecast } from "../../utils";

type ForecastProps = {
  forecastWeather: ForecastWeather | undefined;
};

export default function Forecast({ forecastWeather }: ForecastProps) {
  if (!forecastWeather) return;

  const fiveDays = get5daysForecast(forecastWeather);
  const today = filterWeatherForDay(forecastWeather, new Date().getDate());

  return <div></div>;
}
//   <div className="bg-[#f6f6f8] mt-4 px-6 rounded-3xl">
//     <h1 className="font-bold text-4xl block p-6">5 days forecast</h1>
//     <div className="p-6 inline-flex gap-4">
//       {forecastWeather.map((item, idx) => {
//         return (
//           <ul
//             key={idx}
//             className="text-center w-40 bg-white px-10 py-2 rounded-lg flex flex-col items-center"
//           >
//             {/* <li className="font-bold">{forecastDays[idx]}</li> */}
//             <li>
//               <svg
//                 className="w-10 my-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 id="cloud"
//               >
//                 <path d="M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z"></path>
//               </svg>
//             </li>
//             <li className="text-sm">
//               <span>
//                 {Math.round(item.temp_max)}&#176; {Math.round(item.temp_min)}
//                 &#176;
//               </span>
//             </li>
//           </ul>
//         );
//       })}
//     </div>
//   </div>
// );
