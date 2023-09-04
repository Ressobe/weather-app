import { FormEvent, MutableRefObject, useCallback, useState } from "react";
import { getCords2 } from "../../api";
import { GeoApiResponse } from "../../types";

type SearchBarProps = {
  handleRefetch: (e: FormEvent) => void;
  inputRef: MutableRefObject<HTMLInputElement | null>;
};

export default function SearchBar({ handleRefetch, inputRef }: SearchBarProps) {
  const [prompt, setPrompt] = useState<GeoApiResponse[] | null>();

  const hadnleChange = useCallback(() => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      setPrompt(null);
      if (!value) return;

      const fetchData = async () => {
        setPrompt(await getCords2(value));
      };
      fetchData();
    }
  }, [inputRef]);


  return (
    <form
      onSubmit={handleRefetch}
      className='w-1/3 relative bg-on_background text-on_surface font-bold text-xl rounded-lg'
    >
      <div className='relative w-full py-2'>
        <SearchIcon width='2em' />
        <input
          type='search'
          onChange={hadnleChange}
          placeholder='Search city ... '
          className=' inline-block outline-none p-2  bg-on_background rounded-lg'
        />
        {/* {inputRef.current.value.length > 0 ? (
          <button onClick={handleClick}>
            <ClearIcon
              width='1em'
              className='absolute right-0 top-1/3 mr-4 active:opacity-80 inline-block fill-on_surface'
            />
          </button>
        ) : null} */}
      </div>
      {prompt && prompt.length > 0 ? (
        <div className='absolute bg-on_background drop-shadow-xl w-full mt-1 rounded-lg px-2 py-6'>
          {prompt.map((item, idx) => {
            return (
              <div className='flex items-center' key={idx}>
                <SearchIcon width='1em' />
                <span>
                  {item.name}, {item.country}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </form>
  );
}

function ClearIcon({ width, className }: { width: string; className: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={`${width}`}
      viewBox='0 0 384 512'
      className={`${className}`}
    >
      <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
    </svg>
  );
}

function SearchIcon({ width }: { width: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={`${width}`}
      className='mx-2 inline-block fill-on_surface'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      clipRule='evenodd'
      viewBox='0 0 128 128'
      id='search'
    >
      <path fill='none' d='M0 0h128v128H0z'></path>
      <path d='M29.18 9.265C8.587 23.684 3.575 52.11 17.994 72.703c14.42 20.593 42.845 25.604 63.438 11.185 20.593-14.42 25.605-42.844 11.186-63.437C78.198-.142 49.773-5.155 29.18 9.265Zm2.868 4.095C50.38.524 75.686 4.985 88.523 23.318c12.836 18.332 8.373 43.638-9.959 56.474-18.332 12.836-43.637 8.375-56.474-9.957-12.837-18.333-8.374-43.638 9.958-56.475Z'></path>
      <path d='M29.942 64.338c-9.803-14-6.395-33.323 7.604-43.126a2.502 2.502 0 0 0 .614-3.482 2.502 2.502 0 0 0-3.482-.614c-16.26 11.386-20.217 33.83-8.832 50.09a2.502 2.502 0 0 0 3.482.614 2.502 2.502 0 0 0 .614-3.482ZM78.014 83.364l5.09 7.27a2.502 2.502 0 0 0 3.482.614 2.502 2.502 0 0 0 .614-3.482l-5.09-7.27a2.502 2.502 0 0 0-3.482-.614 2.502 2.502 0 0 0-.614 3.482Z'></path>
      <path d='M100.341 92.914a14.841 14.841 0 0 0-15.046-6.045h-.002a3.6 3.6 0 0 0-2.38 1.666v.002a14.841 14.841 0 0 0 .534 16.207l12.357 17.648a9.337 9.337 0 0 0 13.003 2.293l1.6-1.12a9.336 9.336 0 0 0 2.292-13.003L100.34 92.914Zm-13.458-1.242a9.84 9.84 0 0 0 .659 10.204l12.357 17.648a4.34 4.34 0 0 0 6.04 1.066l1.6-1.12a4.339 4.339 0 0 0 1.064-6.04L96.246 95.78a9.839 9.839 0 0 0-9.363-4.109Z'></path>
    </svg>
  );
}
