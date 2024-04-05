import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../Hero/style.css";

function ScrollSection() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      {
      }
      pin.kill();
    };
  }, []);

  function get_random_images() {
    let url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        display_image(data.message);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  }

  function display_image(image_url) {
    document.getElementById("image").src = image_url;
  }

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex flex-col">
            <div className="absolute top-20 font-semibold text-5xl text-[#212121]">
              Our Image Gallery
            </div>
            <div className="section-1">
              <img
                id="image"
                src="/Images/dog-gr.jpg"
                className="w-full h-96 rounded-xl"
              />
            </div>
            <button
              className="bg-[#2C7865] text-[#FEFDED] rounded-xl p-3 m-1 fixed bottom-20 w-64 text-xl"
              onClick={get_random_images}
            >
              Click for more photos
            </button>
          </div>
          <div className="scroll-section">
            <div className="flex gap-10">
              <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-10 w-10 text-white transition-all"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </span>
                    <div class="space-y-6 pt-10 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p>Make the adoption transition as smooth as possible.</p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          href="#"
                          class="text-sky-500 transition-all duration-300 group-hover:text-white"
                        >
                          Read the docs &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-10 w-10 text-white transition-all"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </span>
                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p>
                        Learn how shelters/rescue groups are adapting. Find out
                        how you can help dogs and cats.
                      </p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          href="#"
                          class="text-sky-500 transition-all duration-300 group-hover:text-white"
                        >
                          Read the docs &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
                <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                  <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-10 w-10 text-white transition-all"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </span>
                    <div class="space-y-6 pt-10 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                      <p>
                        Get answer to all the you questions you haven’t thought
                        of for your adoption.
                      </p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          href="#"
                          class="text-sky-500 transition-all duration-300 group-hover:text-white"
                        >
                          Read the docs &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-section">
            <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
              <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-[#212121]">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
                <div className=" ">
                  <p className=" font-normal text-base leading-6 text-[#212121] lg:w-8/12 md:w-9/12 ">
                    Here are few of the most frequently asked questions by our
                    valueable customers
                  </p>
                </div>

                <div className=" border-b-2 border-zinc-800 pb-2 flex justify-center items-center md:mt-0 mt-10 md:w-auto w-full ">
                  <input
                    placeholder="Search"
                    type="text"
                    aria-label="Search"
                    className="bg-transparent lg:w-96 md:w-72 w-full focus:outline-none placeholder-[#212121] text-base font-normal text-gray-600 leading-4 "
                  />
                  <svg
                    className=" cursor-pointer"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 11.3333C9.244 11.3333 11.3333 9.244 11.3333 6.66667C11.3333 4.08934 9.244 2 6.66667 2C4.08934 2 2 4.08934 2 6.66667C2 9.244 4.08934 11.3333 6.66667 11.3333Z"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 14L10 10"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className=" flex md:flex-row md:justify-around md:items-center flex-col md:space-x-8 md:mt-16 mt-8">
                <div className=" md:w-5/12 lg:w-4/12 w-full ">
                  <img
                    src="/Images/c-dog-4.jpg"
                    alt="Img of Glass bottle"
                    className="w-full md:block hidden"
                  />
                  <img
                    src="https://i.ibb.co/gZMfQJq/pexels-ron-lach-8128069-1-1.png"
                    alt="Img of Glass bottle"
                    className="w-full md:hidden block "
                  />
                </div>
                <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-semibold text-xl leading-5 text-[#212121]">
                        What kind of dog is right for me
                      </h3>
                      <button
                        aria-label="too"
                        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="#212121"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={show ? "hidden" : "block"}
                            d="M10 4.1665V15.8332"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={
                        "font-normal text-[#212121] text-base leading-6 mt-4 w-11/12 " +
                        (show ? "block" : "hidden")
                      }
                    >
                      Consider your lifestyle, living space, and experience
                      level with dogs. High-energy dogs need active owners,
                      while smaller breeds might be better for apartments.
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-zinc-950 my-7"> </div>

                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-semibold text-xl leading-5 text-[#212121]">
                        Can I meet the dog before adopting?
                      </h3>
                      <button
                        aria-label="too"
                        className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => setShow2(!show2)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={show2 ? "hidden" : "block"}
                            d="M10 4.1665V15.8332"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={
                        "font-normal text-base leading-6 text-[#212121] mt-4 w-11/12 " +
                        (show2 ? "block" : "hidden")
                      }
                    >
                      Most shelters encourage meet-and-greets so you and the dog
                      can see if you're a good fit.
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-zinc-950 my-7"> </div>

                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-semibold text-xl leading-5 text-[#212121]">
                        What supplies will I need?
                      </h3>
                      <button
                        aria-label="too"
                        className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => setShow3(!show3)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={show3 ? "hidden" : "block"}
                            d="M10 4.1665V15.8332"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={
                        "font-normal text-base leading-6 text-[#212121] mt-4 w-11/12 " +
                        (show3 ? "block" : "hidden")
                      }
                    >
                      Food, water bowls, leash, collar, bed, crate (optional),
                      toys, and poop bags.
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-zinc-950 my-7"> </div>

                  <div>
                    <div className=" flex justify-between items-center cursor-pointer">
                      <h3 className=" font-semibold text-xl leading-5 text-[#212121]">
                        Can I adopt a senior dog?
                      </h3>
                      <button
                        aria-label="too"
                        className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={() => setShow4(!show4)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className={show4 ? "hidden" : "block"}
                            d="M10 4.1665V15.8332"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.16602 10H15.8327"
                            stroke="#212121"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <p
                      className={
                        "font-normal text-base leading-6 text-[#212121] mt-4 w-11/12 " +
                        (show4 ? "blcok" : "hidden")
                      }
                    >
                      Senior dogs can be wonderful companions and often require
                      less exercise. Shelters can give you more information on
                      senior dog care.
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-zinc-950 my-7"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
