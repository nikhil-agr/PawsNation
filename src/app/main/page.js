"use client";
import React, { useEffect, useRef, useState } from "react";
import Home from "../../components/Home";
import Info from "@/components/Info";
import Page2 from "@/components/Page2";
// import OldBreeds from "@/components/Breeds";
// import LocomotiveScroll from "locomotive-scroll";

// const page = () => {
//   const [locomotiveScroll, setLocomotiveScroll] = useState(null);
//   const scrollRef = useRef(null);
  
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     })
//     // import("locomotive-scroll").then((LocomotiveScroll) => {
//     //   setLocomotiveScroll(new LocomotiveScroll.default());
//     // });
//   }, []);

//   return (
//     <main className="scroll-container" ref={scrollRef}>
//       <Home />
//       <Page2 />
//       <Info />
//       {/* <main> */}
//         <OldBreeds />
//     </main>
//   );
// };

// export default page;

// import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Breeds component to prevent SSR and improve loading performance
const Breeds = dynamic(() => import("@/components/OldBreeds"), { ssr: false });

const Page = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    // Load LocomotiveScroll dynamically
    import("locomotive-scroll").then((LocomotiveScroll) => {
      const scrollInstance = new LocomotiveScroll.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
      setLocomotiveScroll(scrollInstance);
    });

    // Cleanup function to destroy the scroll instance
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Pass locomotiveScroll instance to Home component if needed */}
      <Home locomotiveScroll={locomotiveScroll} />
      <Page2 />
      <Info />
      {/* Render Breeds component */}
      <Breeds />
    </>
  );
};

export default Page;
