"use client";
import WhyChooseus from "@/Dev//Components/WhyChooseus";
import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Dev//Components/ui/accordion";
import BusinessOperations from "@/Dev//Components/Business-operations";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { useGSAP } from "@gsap/react";
import ServiceForm from "@/Dev//Components/ServiceForm";

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);
  const headingRef = useRef(null);


  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(mainHeading.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainHeading.current,
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create animation timeline

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add animations to timeline
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
      
  }, []);

 

  return (
    <>
      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
             Tech Gear
            </h1>
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                src="./images/WP2.avif"
                className="object-cover object-center rounded w-full h-full"
                
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              Health First
              </h1>
              <p className=" leading-relaxed">
              Health First is a CMS-driven project dedicated to health and wellness topics. The platform is structured to deliver informative articles, expert tips, and video content focused on a healthy lifestyle. Custom widgets make it easy for admins to organize content according to various health categories.This CMS site utilizes engaging visuals and a light, welcoming theme that enhances the reading experience. Its designed to load quickly, even with media-rich pages, ensuring visitors have a pleasant browsing experience. Health First is an ideal resource for health professionals and enthusiasts alike.
              <br />
              <br />
              Thanks a lot, Health First, for choosing us.  
              </p>
              <h3 className="font-semibold text-xl">Website Details</h3>
              <h3 className="font-semibold">Platform: <span className="font-medium"> Other CMS</span></h3>
              

            </div>
          </div>
        </section>


        <ServiceForm/>
      

        
      </div>
    </>
  );
};

export default page;
