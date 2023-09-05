import { FormEvent, useEffect, useState } from "react";
import { getCities } from "../../api";
import { GeoApiResponse } from "../../types";
import ArrowLeftIcon from "./ArrowLeftIcon";
import SearchIcon from "./SearchIcon";
import ClearIcon from "./ClearIcon";
import Prompt from "./Prompt";

type SearchBarProps = {
  onSearch: (city: string) => void;
  mobileView: boolean;
};

export default function SearchBar({ onSearch, mobileView }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [prompt, setPrompt] = useState<GeoApiResponse[] | null>(null);

  const checkInputValue = (city: string) => {
    if (city.length === 0) return false;
    return true;
  };

  useEffect(() => {
    if (!checkInputValue(inputValue)) {
      setPrompt(null);
    } else {
      const fetchData = async () => {
        setPrompt(await getCities(inputValue));
      };
      fetchData();
    }
  }, [inputValue]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkInputValue(inputValue)) return;
    onSearch(inputValue);
    setInputValue("");
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {mobileView ? (
        <>
          {expanded ? (
            <form
              onSubmit={handleSubmit}
              className='relative w-full bg-on_background text-on_surface font-bold text-xl rounded-lg'
            >
              <div className='w-full py-2'>
                <button type='button' onClick={() => setExpanded(false)}>
                  <ArrowLeftIcon
                    width='2em'
                    className='inline-block fill-on_surface hover:opacity-80'
                  />
                </button>
                <input
                  type='search'
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  placeholder='Search city ... '
                  className=' inline-block outline-none p-2  bg-on_background rounded-lg'
                />
                <Clear
                  enable={inputValue.length > 0 ? true : false}
                  clearFunction={setInputValue}
                />
                <Prompt prompt={prompt} />
              </div>
            </form>
          ) : (
            <div className='h-full px-3 py-2.5 bg-on_background rounded-lg'>
              <button type='button' onClick={() => setExpanded(true)}>
                <SearchIcon
                  width='2em'
                  className='mx-2 inline-block fill-on_surface hover:opacity-80 active:opacity-70'
                />
              </button>
            </div>
          )}
        </>
      ) : (
        <form
          onSubmit={handleSubmit}
          className='w-1/3 relative bg-on_background text-on_surface font-bold text-xl rounded-lg'
        >
          <div className='relative w-full py-2'>
            <SearchIcon
              width='2em'
              className='mx-2 inline-block fill-on_surface'
            />
            <input
              type='search'
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder='Search city ... '
              className=' inline-block outline-none p-2  bg-on_background rounded-lg'
            />
            <Clear
              enable={inputValue.length > 0 ? true : false}
              clearFunction={setInputValue}
            />
            <Prompt prompt={prompt} />
          </div>
        </form>
      )}
    </>
  );
}

function Clear({
  enable,
  clearFunction,
}: {
  enable: boolean;
  clearFunction: (text: string) => void;
}) {
  if (!enable) return;
  return (
    <button onClick={() => clearFunction("")} type='button'>
      <ClearIcon
        width='1em'
        className='absolute right-0 top-1/3 mr-4 active:opacity-80 inline-block fill-on_surface'
      />
    </button>
  );
}
