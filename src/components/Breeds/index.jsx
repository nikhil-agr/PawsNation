"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";
import LocomotiveScroll from "locomotive-scroll";
import "./style.css"; // Import your custom styles

const App = () => {
  const scrollerRef = useRef(null);
  const [isFlip, setIsFlip] = useState(false);
  const imagesRef = useRef([]); // Ref to store image elements

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollerRef.current,
      smooth: true,
    });

    gsap.registerPlugin(Flip);
    gsap.registerPlugin(CustomEase);
    CustomEase.create("cubic", "0.83, 0, 0.17, 1");

    const gallery = document.querySelector(".img-gallery-container");
    const images = gsap.utils.toArray(".img");
    const button = document.querySelector(".btn");

    imagesRef.current = images; // Store image elements for future use

    button.addEventListener("click", () => {
      setIsFlip(!isFlip);
      // setTimeout(() => {
      //   button.textContent = isFlip ? "Hide All Images" : "Explore Some Breeds";
      // }, 1000);

      let state = Flip.getState(".img-gallery-container, .img");
      gallery.classList.toggle("order");
      images.forEach((img) => img.classList.toggle("reorder"));

      Flip.from(state, {
        absolute: true,
        duration: 2,
        rotate: 0,
        stagger: 0.05,
        ease: "cubic",
        onStart: applyRotation,
        onComplete: () => scroll.destroy(),
      });
    });

    const applyRotation = () => {
      images.forEach((img, index) => {
        const rotation = isFlip ? 0 : rotationValues[index];
        gsap.to(img, {
          rotate: rotation,
          duration: 2,
          ease: "cubic",
          delay: 0.155,
        });
      });
    };

    const rotationValues = [10, -5, 2, -2]; // Rotation values for each image

    return () => {
      scroll.destroy();
      button.removeEventListener("click", () => {}); // Cleanup event listener
    };
  }, []);

  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      className="w-full h-screen py-20 px-10 font-NeueMontreal relative overflow-x-hidden"
    >
      <div
        className="img-gallery scroll-container"
        ref={scrollerRef}
        data-scroll-container
      >
        <div className="img-gallery-container order" data-scroll>
          {Array(4) // Render 4 image elements
            .fill(null)
            .map((_, index) => (
              <div className="img reorder" key={index}>
                <img src="./Images/breeds.webp" alt="" />
              </div>
            ))}
        </div>
      </div>
      <div className="hero">
        <h1>PawsNation</h1>
        <p>See How cute these breeds are</p>
      </div>
      <div className="btn">
        {isFlip ? 'Hide All Images' : 'Explore Breeds'}
         {/* Explore Breeds */}
         </div>
    </div>
  );
};

export default App;
