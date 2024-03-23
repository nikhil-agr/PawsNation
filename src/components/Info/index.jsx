import Image from "next/image";
import React from "react";

import search from "../../../public/Images/search.svg";
import connect from "../../../public/Images/connect.png";
import adopt from "../../../public/Images/adopt.svg";
import vet from "../../../public/Images/vet.svg";

const images = [search, connect, adopt, vet];

const texts = [
  [
    "Search Pet",
    "Adopt a dog who is right for you. Simply enter your city start your search.",
  ],
  [
    "Connect",
    'Once you find a dog, click "show number" to get contact info for their dog parent or rescue. Contact them to learn more about how to meet and adopt the dog.',
  ],
  [
    "AdoptLove",
    "The rescue or dog parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.",
  ],
  [
    "Free Vet Consultation",
    "The PawsNation will help your dog to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.",
  ],
];

function Info() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.2"
      className="w-full h-[185vh] font-NeueMontreal text-[#252B48]  rounded-t-3xl bg-[#75C2F6]"
    >
      <div className="WHAT w-[80%] leading-[3.4vw] tracking-tight rounded-t-3xl text-[3.5vw] py-32 px-20">
        <h1>
          We're like Doggy Tinder, but with way less swiping and way more
          slobbery kisses! Remember, happiness is just a ‘woof’ away. So, why
          wait? Adopt, and let the furry fun begin! 🐾{" "}
        </h1>
        {/* <p>We connect amazing, adorable, tail-wagging therapists with even
      more amazing humans, creating <em>‘furever’</em> friendships that are
      tail-waggingly good. </p> */}
      </div>
      <div className="w-full h-[1px] -mt-16 bg-zinc-200"></div>
      <div className="HOW w-full px-20 py-16">
        <h1 className="text-4xl font-semibold">
          Your Dog Adoption Journey With PawsNation
        </h1>
        <div className="flex justify-around px-40 py-12 items-center">
          {/* <div className=""> */}
          <img
            src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg"
            width={400}
            alt=""
          />
          {/* <Image src="https://dm6g3jbka53hp.cloudfront.net/static-images/adopt-me-pet-02032021.jpg" alt="" width={380} height={20} /> */}
          {/* </div> */}
          <div className="flex justify-center w-1/2 flex-col gap-6 my-10">
            {images.map((image, i) => (
              <div key={i} className="flex w-[100%] gap-8 items-center">
                <Image src={image} alt="search" width={70} height={70} />
                <div className="flex flex-col">
                  <h1 className="text-2xl font-semibold">{texts[i][0]}</h1>
                  <h1 className="text-lg">{texts[i][1]}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] -mt-16 bg-zinc-200"></div>
      <div className="WHY-NOT w-full px-20 py-16 flex justify-between items-center">
        <h1 className="text-6xl w-1/2">
          <p className="flex items-center">Adopt...? <span className="text-5xl">🤔</span></p>
          <p className="flex items-center">Because Why Not? <span className="text-5xl">🤷🏻</span></p>
          <p className="flex items-center">How Can You Resist These? <span className="text-5xl">🐕</span></p>
        </h1>
        <video className="rounded-3xl" src="/Videos/dog.mp4" controls loop muted height={20} width={340}></video>
      </div>
    </div>
  );
}

export default Info;
