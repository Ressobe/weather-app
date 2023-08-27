const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

import searchIcon from "/magnifying-glass-solid.svg";
import sunIcon from "/sun-regular.svg";


function App() {
  return (
    <main className="h-screen flex justify-center items-center bg-[#d5d6d9]">
      <div className="bg-white m-60 rounded-3xl flex">

        <section className="w-1/3 inline-block p-10">
          <div className="inline-flex items-center">
            <img src={searchIcon} className="w-6 inline-block mr-4" />
            <input type="search" placeholder="Search for places ..." className="py-2 text-2xl rounded-lg outline-none" />
          </div>
          <svg  className="w-64 my-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud"><path d="M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z"></path></svg>
          <h1 className="font-bold text-8xl">12 &#176;</h1>
          <p className="my-8 text-xl"><span className="">Monday,</span> <span className="text-slate-400">16:00</span></p>

          <div className="h-0.5 border opacity-60 "></div>

          <p className="my-4 flex flex-row justify-start items-center gap-2">
            <svg  className="w-10  inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud"><path d="M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z"></path></svg>
            <span>Mostly Cloudy</span>
          </p>
          <p className="flex flex-row justify-start items-center gap-2">
            <svg  className="w-10 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud"><path d="M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z"></path></svg>
            <span>Rain - 30%</span>
          </p>

          <div className="mt-8 text-center">
            <h1 className="text-bold text-4xl">New York, NY, USA</h1>
          </div>

        </section>

        <section className="w-2/3 bg-[#f6f6f8] p-10 rounded-r-3xl">
          <div className="p-6 inline-flex items-center justify-between w-full ">
            <h1 className="font-bold text-4xl inline-block">Week</h1>
            <div>
              <button className="mx-2  bg-black text-white w-12 h-12 p-2 font-bold text-xl rounded-full">&#176; C</button>
              <button className="mx-2 border-2 bg-white text-black w-12 h-12 p-2 font-bold text-xl rounded-full">&#176; F</button>
            </div>
          </div>

          <div className="p-6 w-full inline-flex gap-4">

            {days.map((day) => {
              return (
                <ul className="text-center w-36 bg-white px-10 py-2 rounded-lg flex flex-col items-center">
                    <li className="font-bold">{day}</li>
                    <li>
                      <svg  className="w-10 my-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="cloud"><path d="M18.42,9.21a7,7,0,0,0-13.36,1.9A4,4,0,0,0,6,19H17a5,5,0,0,0,1.42-9.79ZM17,17H6a2,2,0,0,1,0-4,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,17,17Z"></path></svg>
                    </li>
                    <li className="text-sm">
                      <span>15&#176; 3 &#176;</span> 
                    </li>
                </ul>
              );
            })}
          </div>

          <div className="p-6">
            <h1 className="font-bold text-3xl">Today's Highlights</h1>

            <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-6   ">

              <div className="p-4 rounded-lg bg-white flex flex-col justify-center items-center">
                <span className="text-slate-400 text-xl self-start">Uv Index</span>
                <div className="inline-flex justify-center items-center">
                  <img src={sunIcon} className="w-20 inline-block my-6" />
                  <span className="ml-4 font-bold text-4xl">5</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white flex flex-col justify-between items-center">
                <span className="text-slate-400 text-xl self-start">Wind status</span>
                <span className="font-bold text-4xl">7.70 km/h</span>
                <span className="text-2xl">WSW</span>
              </div>
              <div className="p-4 rounded-lg bg-white flex flex-col justify-between items-center">
                <span className="text-slate-400 text-xl self-start">Sunrise & Sunset</span>
                <span className="text-xl">6:35 AM</span>
                <span className="text-xl">5:42 PM</span>
              </div>

              <div className="p-4 rounded-lg bg-white flex flex-col justify-between items-center">
                <span className="text-slate-400 text-xl self-start">Humidity</span>
                <span className="font-bold text-4xl">12 %</span>
                <span className="text-2xl">Normal</span>
              </div>
              <div className="p-4 rounded-lg bg-white flex flex-col justify-between items-center">
                <span className="text-slate-400 text-xl self-start">Visibility</span>
                <span className="font-bold text-4xl">5.2km</span>
                <span className="text-2xl">Average</span>
              </div>
              <div className="p-4 rounded-lg bg-white flex flex-col justify-between items-center">
                <span className="text-slate-400 text-xl self-start">Air quality</span>
                <span className="font-bold text-4xl">105</span>
                <span className="text-2xl">Unhealthy</span>
              </div>

            </div>


          </div>

        </section>

      </div>
    </main>
  )
}

export default App
