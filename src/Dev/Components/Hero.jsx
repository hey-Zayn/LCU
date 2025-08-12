"use client";

import React, { useLayoutEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(".animation");

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full bg-black h-screen overflow-hidden"
    >
      <ParticlesBackground />

      <div className="flex flex-col h-full items-center justify-center gap-10 px-4 py-12 md:py-24 animation relative z-10">
        {/* <div className="text-5xl md:text-7xl lg:text-8xl font-medium text-white text-center md:text-left">
        Transform Your Business with 
        </div>
        <div className="text-5xl md:text-7xl lg:text-8xl font-medium text-white text-center md:text-right">
        Expert IT Solutions
        </div> */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white leading-tight">
          Transform Your Business with <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
            Expert IT Solutions
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
          ForwardSols delivers{" "}
          <strong className="font-medium text-white">
            AI-driven web development, SEO, & digital marketing services
          </strong>{" "}
          to help startups and enterprises scale faster.
        </p>
      </div>

      {/* <div className="top-15 text-1xl md:text-2xl 2xl:text-3xl underline text-center gap-10 px-4 py-12 md:py-24 relative z-10 animation">
        Search, Design, Development, Business, IT Solutions
      </div> */}

      <div className="absolute inset-x-0 bottom-0 text-center text-2xl underline max-sm:p-4 z-10">
        <div className="bg-black/70 backdrop-blur-md rounded-b-lg p-4"></div>
      </div>
    </div>
  );
};

export default Hero;
