"use client";

import Image from "next/image";

export const ProfileCard = (props) => {
  const { contact, rating, timings, vetAvailable, location, name, photo } =
    props;

  let ratingStars = "";
  for (let i = 0; i < Math.ceil(rating); i++) {
    ratingStars += "⭐";
  }

  let timeData = timings.split(":");

  return (
    <div className="containerPikaPika">
      <div
        id="CardDiv"
        className="bg-[#fff] shadow-2xl animate-[borderAnime_4s_ease-in-out_infinite] hover:shadow-lg cardPikaPika rounded-lg "
      >
        <div className="relative imagePikaPika">
          <Image
            src={photo}
            alt={name}
            className="object-cover object-center rounded-xl h-60 w-full"
            width={400}
            height={400}
          />
          <h2 className="text-xl text-center font-semibold mt-2">{name}</h2>
        </div>
        <div className="p-4 grid place-content-center text-center contentPikaPika gap-0.5">
          <p className="text-gray-600 ">📍 {location}</p>
          <p className="text-gray-600">📞 {contact}</p>
          {<p className="text-gray-600">{ratingStars}</p>}
          <p className="text-gray-600">🗓️ {timeData[0]}</p>
          <p className="text-gray-600 mb-3">🕛 {timeData[1]}</p>
          {vetAvailable === "Yes" ? (
            <p
              id="vetPresent"
              className={`px-4 py-2 rounded-lg bg-green-500 text-center text-white font-bold cursor-pointer`}
            >
              Vet Available
            </p>
          ) : (
            <p
              id="vetPresent"
              className={`px-4 py-2 rounded-lg bg-red-500 text-center text-white font-bold cursor-pointer`}
            >
              Vet Not Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
