"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  const about_bottom_height = useRef(80);
  const about_top_height = useRef(-50);
  const Start = useRef("top bottom-=190");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      imagesLoaded(wrapper, { background: true }, () => {
        const elements = gsap.utils.toArray(".tex_animation");

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

        ScrollTrigger.refresh();
      });
    }, wrapperRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      const winwidth = window.innerWidth;
      const winheight = window.innerHeight;
      const isSquareScreen = winheight <= winwidth * 1.05; // Aspect ratio check for square-ish screens

      if (winwidth < 768) {
        // Mobile
        about_bottom_height.current = 500;
        about_top_height.current = -220;
        Start.current = "top bottom-=250";
      } else if (winwidth < 1280) {
        // Laptop screens
        about_bottom_height.current = 90;
        about_top_height.current = -65;
        Start.current = "top bottom-=180";
      } else if (isSquareScreen) {
        // Square-ish screens (tablets, some laptops)
        about_bottom_height.current = 90;
        about_top_height.current = -65;
        Start.current = "top bottom-=280";
      } else {
        // Rectangular screens (most desktops)
        about_bottom_height.current = 80;
        about_top_height.current = -50;
        Start.current = "top bottom-=190";
      }
    };

    // Initial setup
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    const ctx = gsap.context(() => {
      imagesLoaded(wrapperRef.current, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: Start.current,
            end: "bottom center",
            scrub: true,
            pinSpacing: false,
          },
        });

        tl.to(
          topRef.current,
          {
            yPercent: about_top_height.current,
            ease: "power2.out",
          },
          0
        );

        tl.to(
          bottomRef.current,
          {
            yPercent: about_bottom_height.current,
            ease: "power2.out",
          },
          0
        );

        tl.fromTo(
          textRef.current,
          { clipPath: "inset(55% 0 55% 0)" },
          { clipPath: "inset(0% 0 0% 0)", ease: "power2.out" },
          0.001
        );

        ScrollTrigger.refresh();
      });
    }, wrapperRef);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="z-12 max-sm:mx-5 relative max-sm:h-[40vh] pb-[30%] md:pb-0 md:h-screen lg:h-[80vh] xl:h-[80vh] 2xl:h-[60vh] bg-black"
    >
      <div
        ref={topRef}
        className="z-12 about-img-1 w-full will-change-transform"
      >
        <img
          src="/dev/images/top_about.svg"
          alt="Top Reveal"
          className="w-full max-w-4xl mx-auto block"
        />
      </div>

      <div
        ref={textRef}
        className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] top-[22%] lg:top-[30%] xl:top-[22.5%] 2xl:top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 px-4"
      >
        <p className="text-white text-sm sm:text-base md:text-sm leading-relaxed font-light tex_animation">
        ForwardSols transforms businesses with AI-powered tech solutions that drive real growth. We engineer intelligent systems to automate, optimize, and scale your operations – delivering measurable results from day one. Let's future-proof your business together.
        </p>
      </div>

      <div ref={bottomRef} className="about-img-2 w-full will-change-transform">
        <img
          src="/dev/images/bottom_about.svg"
          alt="Bottom Reveal"
          className="w-full max-w-4xl mx-auto block"
        />
      </div>
    </section>
  );
};

export default Section2;
