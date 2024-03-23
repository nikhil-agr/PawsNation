"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "./menu.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/centres", label: "Adoption Centres" },
  { path: "/petinfo", label: "Pet Info" },
  { path: "/help", label: "Help" },
];

const Menu = () => {
  const [isClient, setIsClient] = useState(false);
  const container = useRef();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      setIsClient(true);
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%,100% 0%, 100% 100%,0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY || currentScrollY < 100) {
      setIsMenuVisible(true);
    } else {
      setIsMenuVisible(false);
      setTimeout(() => setIsMenuVisible(true), 1000); // Set the menu to visible after 1 second
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const pathname = usePathname();
  const blurClass = pathname === "/" ? "" : "backdrop-blur-lg";

  return (
    <div className="menu-container font-NeueMontreal" ref={container}>
      <div
        className={`menu-bar fixed top-0 left-0 py-[28px] px-[6em] z-[2] ${blurClass} w-full flex items-center justify-between transition-all duration-500 ease-in-out ${
          isMenuVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="menu-logo font-semibold uppercase font-Anta text-2xl">
          <Link href={"/"}>PawsNation</Link>
        </div>
        <div
          className="menu-open cursor-pointer font-semibold text-xl"
          onClick={toggleMenu}
        >
          Menu
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar flex items-center justify-between">
          <div className="menu-logo font-semibold uppercase font-Anta text-2xl">
            <Link href={"/"}>PawsNation</Link>
          </div>
          <div className="menu-close font-semibold" onClick={toggleMenu}>
            <p className="text-black text-xl no-underline font-semibold">
              Close
            </p>
          </div>
        </div>
        <div className="menu-copy">
          <div className="menu-links px-56 py-16">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item uppercase" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <Link href={"/"}>X &#8599;</Link>
              <Link href={"/"}>Instagram &#8599;</Link>
              <Link href={"/"}>Facebook &#8599;</Link>
            </div>
            <div className="menu-info-col text-xl leading-tight">
              <p className="text-black no-underline uppercase">
                pawsnation@gmail.com
              </p>
              <p className="text-black no-underline uppercase">1234567890</p>
            </div>
          </div>
        </div>
        {isClient && (
          <div className="menu-preview">
            <video src="/Videos/dog.mp4" autoPlay loop muted></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
