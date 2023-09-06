import { GeoApiResponse } from "../../types";
import SearchIcon from "./SearchIcon";

type PromptProps = {
  prompt: GeoApiResponse[] | null;
  handleClick: (city: string) => void;
}

export default function Prompt({ prompt, handleClick }: PromptProps) {
  if (!prompt) return;
  if (prompt.length === 0) return;

  return (
    <div className='absolute bg-on_background drop-shadow-xl w-full mt-3 rounded-lg px-2 py-6'>
      {prompt.map((item, idx) => {
        return (
          <button type="button"  onClick={() => {handleClick(`${item.name}, ${item.country}`)}} className='flex items-center w-full' key={idx}>
            <SearchIcon
              width='1em'
              className='mx-2 inline-block fill-on_surface'
            />
            <span>
              {item.name}, {item.country}
            </span>
          </button>
        );
      })}
    </div>
  );
}