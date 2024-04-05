"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";
import CustomEase from "gsap/CustomEase";
import LocomotiveScroll from "locomotive-scroll";
import "./style.css";
import { useGSAP } from "@gsap/react";
import "@/app/locomotive-scroll.css";

gsap.registerPlugin(Flip);
gsap.registerPlugin(CustomEase);

export default function App() {
  const [isFlip, setIsFlip] = useState(false);
  const scrollerRef = useRef(null);
  
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollerRef.current,
      smooth: true,
    });

    const gallery = document.querySelector(".img-gallery-container");
    const images = gsap.utils.toArray(".img");
    
    let rotationValues = [10, -5, 2, -2];
    
    CustomEase.create("cubic", "0.83, 0, 0.17, 1");
    
    function applyRotation() {
      images.forEach((img, index) => {
        const rotation = isFlip ? 0 : rotationValues[index];
        gsap.to(img, {
          rotate: rotation,
          duration: 2,
          ease: "cubic",
          delay: 0.155,
        });
      });
    }
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      setIsFlip(!isFlip);
      setTimeout(() => {
        button.textContent = isFlip ? "Hide All Images" : "Explore Breeds";
      }, 1000);
      
      let state = Flip.getState(".img-gallery-container, .img");
      gallery.classList.toggle("order");
      images.forEach((img) => {
        img.classList.toggle("reorder");
      });
      Flip.from(state, {
        absolute: true,
        duration: 2,
        rotate: 0,
        stagger: 0.05,
        ease: "cubic",
        onStart: () => {
          applyRotation();
        },
        onComplete: () => {
          scroll.destroy();
        },
      });
    });

    // return () => {
    //   // button.removeEventListener("click", () => {
    //     scroll.destroy();
    //   // });
    // };
  }, [isFlip]);

  return (
    <div
      // data-scroll
      // data-scroll-speed="0.5"
      className="w-full h-screen py-20 px-10 mt-[50vh] font-NeueMontreal relative overflow-x-hidden"
    >
      <div
        className="img-gallery scroll-container"
       
        // data-scroll-container
      >
        <div className="img-gallery-container order"  ref={scrollerRef} data-scroll>
          <div className="img reorder">
            <img src="/Images/husky.jpg" alt="" />
          </div>
          <div className="img reorder">
            <img src="/Images/doberman.jpg" alt="" />
          </div>
          <div className="img reorder">
            <img src="/Images/unknown.jpg" alt="" />
          </div>
          <div className="img reorder">
            <img src="/Images/corgi.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="hero">
        <h1>PawsNation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="btn">Explore Breeds</div>
    </div>
  );
}
