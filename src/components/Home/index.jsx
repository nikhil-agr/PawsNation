"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Page2 from "../Page2";
import Info from "../Info";

const Index = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to("#dog-img", {
      opacity: 1,
      duration: 2,
      delay: 0.7,
      ease: "power2.in",
    });
    gsap.to("#voice", {
      x: 290,
      duration: 2.5,
      delay: 0.5,
      ease: "power2.out",
    });
  });

  return (
    <>
      <div
        className="bg-[#F1F1F1] relative h-screen w-full text-zinc-800"
        ref={container}
      >
        <div className="w-3/5 absolute top-44 text-[12vw] tracking-normal leading-[8.5vw] font-Days-One font-FoundersGrotesk left-20 uppercase h-56">
          <h2 className="relative font-light z-1">Find Your</h2>
          <div className="img-container relative my-20 flex items-center">
            <Image
              className="opacity-0 absolute left-0 -top-[130px] z-0"
              id="dog-img"
              src={"/Images/doggy.png"}
              alt="doggy"
              width={320}
              height={20}
            />
            <h2 id="voice" className="absolute left-2 font-light">
              Furry
            </h2>
          </div>
          <h2 className="relative font-light">Soulmate</h2>
        </div>
        <div className="line absolute top-[75%] h-[0.5px] bg-zinc-400 w-full"></div>
        <div className="w-full font-Chelsea-Market font-bold uppercase top-[75vh] py-3 absolute px-20 flex items-center justify-around text-sm text-[#555843]">
          <h1>Fill your life with pawsitivity</h1>
          <h1>let your life be ‘pawsome’</h1>
          <h1>A Furry Therapist awaits you</h1>
        </div>
      </div>
      <Page2 />
      <Info />
    </>
  );
};

export default Index;
