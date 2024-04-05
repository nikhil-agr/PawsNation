"use client"
import { useGSAP } from "@gsap/react";
import "./Home.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [client, setclient] = useState(false)

    useEffect(() => {
        setclient(true)
    }, [])


    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".Container",
                start: "50% 50%",
                end: "150% 50%",
                // markers: true,
                scrub: true,
                pin: true,
            },
        });

        tl.to(".top-content", { rotateX: "110deg", opacity: 0, duration: 1.5 }, "rc");
        tl.to(".btm-content", { rotateX: "-110deg", opacity: 0, duration: 1.5 }, "rc");
        tl.to(".img", { width: "100%", height: "100%", duration: 5 }, "rc");
    }, []);

    return (
        <>
            <div className="bg-white main font-Magra">
                <div className="Container">
                    <div className="top-con">
                        <div className="top-content">
                            <p>PAWSNATION</p>
                            <h1 className="text-7xl">
                                GET YOURSELF <br />A FURRY FREIND
                            </h1>
                        </div>
                    </div>
                    <div className="img">
                        {client && (
                            <video src="/Videos/doggie-1.mp4" autoPlay loop muted></video>
                        )}
                    </div>
                    <div className="btm-con">
                        <div className="btm-content">
                            <h1 className="text-7xl">BECAUSE, WHY NOT</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}