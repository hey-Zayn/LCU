"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Section9Card from "./Section9Card";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section9 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(".text_animation_section9");

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

  const details = [
    {
      "id": 1,
      "name": "John Ball",
      "title": "President | Automotive Solutions LLC",
      "rating": 5,
      "text": [
     
        "Terry's team delivered everything promised - their AI-powered marketing strategies and relentless work ethic transformed our lead generation. Highly recommend for any service business!"
      ],
      "schema": {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Digital Marketing Services"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "keywords": ["lead generation", "SEO results", "marketing agency"]
      }
    },
    {
      "id": 2,
      "name": "Jesse Stosic",
      "title": "Operations Manager | Heritage Medical Group",
      "rating": 5,
      "text": [
       
        "Elijah at ForwardSols was our hero! His technical expertise in Google Business Profile compliance and white-hat recovery methods saved our $1.2M/year patient acquisition channel. Worth every penny!"
      ],
      "schema": {
        "@type": "Review",
        "itemReviewed": {
          "@type": "Service",
          "name": "Google Business Profile Recovery"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "keywords": ["GBP recovery", "local SEO", "business listings"]
      }
    }
  ]

  useLayoutEffect(() => {
    if (isPaused || !slideRefs.current[currentSlide]) return;

    slideRefs.current.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 0, x: "100%" });
      }
    });

    gsap.to(slideRefs.current[currentSlide], {
      opacity: 1,
      x: "0%",
      duration: 0.8,
      ease: "power2.out",
    });

    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % details.length);
    }, 3300);

    return () => clearTimeout(timer);
  }, [currentSlide, isPaused]);

  const handlePrevClick = () => {
    setCurrentSlide((prev) => (prev - 1 + details.length) % details.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % details.length);
  };

  return (
    <div className="text-white relative w-full min-h-[600px] h-auto max-sm:h-full md:h-[100%] lg:h-[100%] 2xl:h-[80vh] mt-20 bg-black overflow-hidden">
      <div className="w-full max-sm:h-10 h-16 bg-gradient-to-b from-black to-transparent z-20 absolute top-0 left-0" />
      {/* <img
        src="/dev/images/border_line.svg"
        className="absolute opacity-100 w-[75%] h-full -top-75 left-40 z-20 pointer-events-none"
        alt=""
      /> */}
      <div className="bg-[url('/dev/images/blue_bg.avif')] bg-cover bg-center w-full h-full relative top-0 left-0 opacity-90 max-sm:h-[150vh]">
        <img
          src="/dev/images/left_sidebar.svg"
          className="absolute opacity-100 w-10 top-20 max-sm:left-5 left-20 max-sm:h-[73%] h-[80%] z-2 pointer-events-none"
          alt=""
        />

        <img
          src="/dev/images/right_sidebar.svg"
          className="absolute w-10 max-sm:right-5 top-20 right-20 max-sm:h-[73%] h-[80%] z-2 pointer-events-none"
          alt=""
        />

        <div className="w-full h-full">
          <div className="relative h-full">
            <div className="text-center items-center justify-center flex flex-col pt-16">
              <h1 className="w-[50%] max-sm:w-[80%] text-center pb-0 max-sm:mt-10 text-2xl max-sm:text-2xl 2xl:text-6xl md:text-2xl font-bold text_animation_section9">
                Real Revenue Impact for Our Clients
              </h1>
              <p className="w-[65%] 2xl:text-2xl text-center  px-0 mx-0 text-xl max-sm:text-sm mt-5 max-sm:mt-4 md:mt-[2%] text_animation_section9">
                <span className="text-5xl text-green-600">2X</span> Services : Google My Business, Direct Marketing, Content
                Marketing, Advertising Active Campaign
              </p>
            </div>
            
            <div className="relative w-full max-sm:mx-6 h-full md:h-[450px] mt-12 overflow-hidden">
              {details.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 pointer-events-auto z-30"
                      : "opacity-0 pointer-events-none z-20"
                  }`}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <Section9Card
                    data={item}
                    className="text_animation_section9"
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 max-sm:bottom-30 left-1/2 transform -translate-x-1/2 flex gap-6 items-center justify-center z-30">
              <button
                className=" cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={handlePrevClick}
              >
                <img
                  src="/dev/images/left_arrow.svg"
                  alt="Previous"
                  className="w-15 h-15 sm:w-15 sm:h-15"
                />
              </button>
              <button
                className=" cursor-pointer transition-all duration-300 flex items-center justify-center"
                onClick={handleNextClick}
              >
                <img
                  src="/dev/images/right_arrow.svg"
                  alt="Next"
                  className="w-15 h-15 sm:w-15 sm:h-15"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-sm:h-10 h-16 bg-gradient-to-t from-black to-transparent z-20 absolute bottom-0 left-0" />
    </div>
  );
};

export default Section9;