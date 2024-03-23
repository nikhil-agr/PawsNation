import React from "react";
import Marquee from "../Marquee";

const index = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.001"
      className="h-1/2 bg-[#1D5D9B] rounded-t-3xl py-20"
    >
      <Marquee> Do not Shop But Adopt </Marquee>
    </div>
  );
};

export default index;
