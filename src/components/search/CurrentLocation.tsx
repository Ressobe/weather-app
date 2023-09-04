import { FormEvent } from "react";
import { getCords, getCords2, getCurrentWeather2 } from "../../api";

type CurrentLocationProps = {
  handleRefetch: (e: FormEvent) => void;
};

export default function CurrentLocation({
  handleRefetch,
}: CurrentLocationProps) {

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  
  async function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    // console.log(await getCurrentWeather2(crd.latitude, crd.longitude))
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const handleClick = () => {

   console.log( getCords2("Warszawa"));
    // navigator.geolocation.getCurrentPosition(success, error, options);
  }

  return (
      <button onClick={handleClick} className='bg-primary px-6 py-2 rounded-lg text-lg inline-flex justify-center items-center font-bold'>
        <Icon />
        Current Location
      </button>
  );
}

function Icon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='2em'
      viewBox='0 0 512 512'
      className='fill-on_primary inline-block mr-2  '
    >
      <path d='M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z' />
    </svg>
  );
}
