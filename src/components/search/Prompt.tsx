import { GeoApiResponse } from "../../types";
import SearchIcon from "./SearchIcon";

export default function Prompt({ prompt }: { prompt: GeoApiResponse[] | null }) {
  if (!prompt) return;
  if (prompt.length === 0) return;
  console.log(prompt);
  return (
    <div className='absolute bg-on_background drop-shadow-xl w-full mt-3 rounded-lg px-2 py-6'>
      {prompt.map((item, idx) => {
        return (
          <div className='flex items-center' key={idx}>
            <SearchIcon
              width='1em'
              className='mx-2 inline-block fill-on_surface'
            />
            <span>
              {item.name}, {item.country}
            </span>
          </div>
        );
      })}
    </div>
  );
}