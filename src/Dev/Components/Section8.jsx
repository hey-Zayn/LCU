"use client";
import React, { useEffect, useLayoutEffect } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Section8 = () => {
  gsap.registerPlugin(ScrollTrigger);
    
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(".text_animation_section8");
    
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
    
    // Clean up scroll triggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black pt-10 pb-10">
      {/* Hero Image Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full h-10 sm:h-16 bg-gradient-to-b from-black to-transparent z-10 absolute top-0 left-0" />

        <img
          src="/dev/images/hack.avif"
          alt="Our Methodologies"
          className="w-full h-auto object-cover max-h-[40vh] sm:max-h-none"
        />

        <div className="w-full h-10 sm:h-16 bg-gradient-to-t from-black to-transparent z-1 absolute bottom-0 left-0" />
      </div>

      {/* Content Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="heading-wrapper text-center my-8 sm:my-12">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text_animation_section8">
            Our Methodologies
          </h2>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Lottie Animation */}
          <div className="lottie-wrapper w-full h-full mb-8 sm:mb-12">
            <Player
              hover
              src="https://cdn.prod.website-files.com/66507fe061d349897ed2696e/667c27bdd47e7a069744da14_Frame%203647.json"
              className="w-full absolute -top-12 sm:-top-20 z-20"
            />
          </div>

          {/* Methodology Cards */}
          <div className="relative w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-white">
            {/* Agile Development */}
            <div className="relative text-center">
              <div className="flex flex-col items-center sm:absolute sm:top-[30%] lg:top-[44%] xl:top-[45%] 2xl:top-[50%]">
                <img
                  src="/dev/images/small_pin.svg"
                  alt="Agile Development"
                  className="w-4 sm:w-5 mb-2 z-21"
                />
                <h3 className="text-base sm:text-lg font-semibold transition-opacity duration-300 text_animation_section8  z-21">
                  Agile Development
                </h3>
                <p className="text-xs sm:text-sm mt-1 px-4 sm:px-0 text_animation_section8  z-21">
                  We quickly adapt to changes through multiple loops,
                  consistently delivering high-value results.
                </p>
              </div>
            </div>

            {/* Design Thinking */}
            <div className="relative text-center">
              <div className="flex flex-col items-center mt-4 sm:mt-0 max-sm:hidden">
                <img
                  src="/dev/images/large_pin.svg"
                  alt="Design Thinking"
                  className="w-5 sm:w-7 mb-2 z-21"
                />
                <h3 className="text-base sm:text-lg font-semibold text_animation_section8">
                  Design Thinking
                </h3>
                <p className="text-xs sm:text-sm mt-1 px-4 sm:px-0 text_animation_section8">
                  We prioritise a user-focused approach, creating innovative
                  solutions that effectively meet client needs.
                </p>
              </div>
            </div>

            {/* DevOps */}
            <div className="relative text-center">
              <div className="flex flex-col items-center sm:absolute sm:top-[30%] lg:top-[44%] xl:top-[45%] 2xl:top-[50%]">
                <img
                  src="/dev/images/small_pin.svg"
                  alt="DevOps"
                  className="w-4 sm:w-5 mb-2 z-21"
                />
                <h3 className="text-base sm:text-lg font-semibold text_animation_section8  z-21">
                  DevOps
                </h3>
                <p className="text-xs sm:text-sm mt-1 px-4 sm:px-0 text_animation_section8  z-21">
                  Our continuous integration and deployment practices ensure
                  rapid and reliable software releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section8;