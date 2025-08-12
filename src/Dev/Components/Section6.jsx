"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

const Section6 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const slides = [
    {
      id: 1,
      title: "Real-Time Market Valuation Intelligence",
      details:
        "Track your business's financial health with AI-driven market analytics. Our platform monitors 17+ valuation metrics (including EBITDA multiples and industry benchmarks) to help you make data-backed decisions, attract investors, and outperform competitors.",
      image:
        "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/09/Track-Your-Business-Market-Value-400x235-1.webp",
      button_text: "Get Your Free Valuation Report",
      button_text_2: "See Sample Dashboard →",
      link: "/enterprise-level-reach",
      schema: {
        "@type": "Product",
        name: "Market Value Tracker",
        description: "AI-powered business valuation platform",
      },
    },
    {
      id: 2,
      title: "AI-Powered Website Performance Monitoring",
      details:
        "Google penalizes slow sites. Our system audits 53+ performance factors (Core Web Vitals, uptime, conversion paths) with real-time alerts. Clients average 2.3s faster load times and 40% higher engagement within 90 days.",
      image:
        "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/09/Monitor-Site-Performance-400x235-1.webp",
      button_text: "Run Free Speed Test",
      button_text_2: "View Case Studies",
      link: "/ai-monitoring-integration",
      schema: {
        "@type": "SoftwareApplication",
        name: "Site Performance Optimizer",
      },
    },
    {
      id: 3,
      title: "Dominant Search Engine Visibility",
      details:
        "Rank on page 1 for high-value keywords with our 360° visibility framework. Combining technical SEO, semantic content clusters, and AI-powered backlink strategies, we've helped clients achieve 300% more organic traffic in 6 months.",
      image:
        "https://corecentrixbusinesssolutions.com/wp-content/uploads/2024/09/Optimize-Visibility-400x235-1.webp",
      button_text: "Free SEO Audit",
      button_text_2: "Top Ranking Secrets",
      link: "/seo-content-development",
      schema: {
        "@type": "Service",
        name: "Search Visibility Optimization",
      },
    },
  ];

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(".fade-in-section6");
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

      slideRefs.current.forEach((el, index) => {
        if (el) {
          gsap.set(el, {
            opacity: index === 0 ? 1 : 0,
            x: "0%",
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const animateSlideChange = (newIndex) => {
    if (isAnimating || newIndex === currentSlide) return;

    setIsAnimating(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    gsap.to(slideRefs.current[currentSlide], {
      opacity: 0,
      x: newIndex > currentSlide ? "-100%" : "100%",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentSlide(newIndex);

        gsap.fromTo(
          slideRefs.current[newIndex],
          { opacity: 0, x: newIndex > currentSlide ? "100%" : "-100%" },
          {
            opacity: 1,
            x: "0%",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              setIsAnimating(false);
            },
          }
        );
      },
    });
  };

  const startAutoAdvanceTimer = () => {
    if (isPaused || isAnimating) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      animateSlideChange(nextSlide);
    }, 2000); // increased to 5 seconds to make behavior feel natural
  };

  useEffect(() => {
    startAutoAdvanceTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, isPaused, isAnimating]);

  const handleNextClick = () => {
    const nextSlide = (currentSlide + 1) % slides.length;
    animateSlideChange(nextSlide);
  };

  const handlePrevClick = () => {
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    animateSlideChange(prevSlide);
  };

  return (
    <div className="text-white w-full min-h-[100vh] max-sm:py-5 py-16 bg-black flex items-center justify-center overflow-x-hidden">
      <div className="relative w-full h-full max-sm:mx-5 mx-18 z-20 px-4">
        <h1 className="text-center p-8 pb-0 mt-8 max-sm:mt-0 max-sm:pt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold fade-in-section6">
          Your Business Statistics Turn Your <br className="hidden sm:block" />
          Decisions to Profit
        </h1>

        <div className="relative w-full h-[500px] sm:h-full md:h-[500px] lg:h-[550px] mt-8 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slideRefs.current[index] = el)}
              className={`absolute w-full h-full ${
                index === currentSlide ? "z-30" : "z-20"
              }`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] w-full h-full gap-8 lg:gap-12">
                <div className="flex flex-col justify-center h-full">
                  <div className="mb-6 px-4">
                    <h1 className="w-full lg:w-4/5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="w-full text-base sm:text-lg md:text-xl text-gray-300 mt-4">
                      {slide.details}
                    </p>
                    <div className="mt-8">
                      <Link href={slide.link || "#"}>
                        <div className="relative inline-block group">
                          <button className="relative z-20 text-white px-6 py-3 sm:px-8 sm:py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                            <span className="relative z-20">
                              {slide.button_text}
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
                          </button>

                          <img
                            src="/dev/images/left top.svg"
                            alt=""
                            className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 w-6 h-6"
                          />
                          <img
                            src="/dev/images/right top.svg"
                            alt=""
                            className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1 w-6 h-6"
                          />
                          <img
                            src="/dev/images/left bottom.svg"
                            alt=""
                            className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 w-6 h-6"
                          />
                          <img
                            src="/dev/images/right bottom.svg"
                            alt=""
                            className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 w-6 h-6"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center h-full">
                  <img
                    src={slide.image}
                    style={{
                      clipPath:
                        "polygon(20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px), 0% 20px)",
                    }}
                    alt=""
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl border-[#1b1b1b] object-cover mb-12 sm:mb-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start gap-3 mt-12 lg:mt-20 lg:absolute lg:bottom-8 lg:left-12 z-30">
          <button
            className="bg-black/50 cursor-pointer transition-all duration-300 flex items-center justify-center"
            onClick={handlePrevClick}
            disabled={isAnimating}
          >
            <img
              src="/dev/images/left_arrow.svg"
              alt="Previous"
              className="w-15 h-15 sm:w-15 sm:h-15"
            />
          </button>
          <button
            className="bg-black/50 cursor-pointer transition-all duration-300 flex items-center justify-center"
            onClick={handleNextClick}
            disabled={isAnimating}
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
  );
};

export default Section6;
