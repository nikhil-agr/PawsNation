'use client'
import React, { useEffect, useState } from "react";
import Home from "../../components/Home";
import Info from "@/components/Info";
import Page2 from "@/components/Page2";

const page = () => {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    import("locomotive-scroll").then((LocomotiveScroll) => {
      setLocomotiveScroll(new LocomotiveScroll.default());
    });
  }, []);

  return (
    <>
      <Home />
      <Page2 />
      <Info />
    </>
  );
};

export default page;
