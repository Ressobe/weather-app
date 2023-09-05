export default function Logo({mobileView} : {mobileView: boolean}) {
  return (
    <div className='text-primary font-bold text-4xl flex justify-center items-center'>
      <img src='/icon.svg' className='inline-block mr-5' width='60px' />
      {mobileView ? null : <span className='text-on_surface'>WeatherXXX</span>}
      </div>
  );
}
