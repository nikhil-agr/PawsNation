import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
function Hero() {
  const [dogData, setDogData] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    let breedName = e.nativeEvent.target[0].value;
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breedName}`)
      .then((data) => {
        if (!data.ok) {
          // throw new Error("API not working");
          alert("incorrect name");
        }
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setDogData(data);
      });
    return 0;
  }

  return (
    <div className="hero__header">
      <div className="vdo bg-slate-950">
        <video
          className="opacity-70"
          src="/Videos/doggie-2.mp4"
          autoPlay
          muted
          loop
        ></video>
        <p className="absolute top-[70%] text-6xl text-center left-1/2 -translate-y-1/2 -translate-x-1/2 text-white font-bold">
          "Unlock Your Paw-sibilities. Explore Our Breed Options"
        </p>
      </div>
      <div className="textt">
        <div>
          <h1 className="text-5xl font-Poppins font-semibold uppercase text-center mt-32 text-[#212121]">
            Search to know about specific species
          </h1>
        </div>
        <div className="cont flex justify-center items-center h-56">
          {/* <div className="bar">
            <FaSearch id="search-icons" />
            <form
              action=""
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              >
              <input placeholder="type to search..." />
              </form>
            </div> */}
          <div class="relative rounded-full flex justify-center overflow-hidden bg-white shadow-xl w-1/4">
            <form
              action=""
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                type="text"
                name="text"
                placeholder="Golden"
                class="input bg-transparent outline-none border-none px-2 uppercase py-5 w-1/3 font-sans text-lg font-semibold"
              />
            </form>
            <div class="absolute right-2 top-[0.4em]">
              <button class="w-14 h-14 rounded-full bg-violet-500 group shadow-xl flex items-center justify-center relative overflow-hidden">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="relative z-10"
                >
                  <path
                    d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                    fill="white"
                    fill-opacity="0.01"
                  ></path>
                  <path
                    d="M42.8496 18.7067L21.0628 44.6712"
                    stroke="white"
                    stroke-width="3.76603"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                    stroke="white"
                    stroke-width="3.76603"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div class="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                <div class="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
              </button>
            </div>
          </div>

          {dogData ? (
            <div className="flex gap-20 max-w-96 absolute top-[160vh] -translate-y-1/2 left-[50%] -translate-x-1/2 mt-16">
              <div className=" flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={`https://cdn2.thedogapi.com/images/${dogData[0].reference_image_id}.jpg`}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {dogData[0].name}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {dogData[0].temperament}
                  </p>
                  <p>
                    Weight: {dogData[0].weight.imperial} (imperial),{" "}
                    {dogData[0].weight.metric} (metric)
                  </p>
                  <p>
                    Height: {dogData[0].height.imperial} (imperial),{" "}
                    {dogData[0].height.metric} (metric)
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    ADOPT NOW
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
