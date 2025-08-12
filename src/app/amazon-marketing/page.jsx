"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import BusinessOperations from "@/Dev//Components/Business-operations";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ServiceForm from "@/Dev//Components/ServiceForm";

// High-volume, low-difficulty Amazon marketing keywords for SEO
const SEO_KEYWORDS = [
  "Amazon marketing services",
  "Amazon SEO agency",
  "Amazon product listing optimization",
  "Amazon PPC management",
  "Amazon advertising services",
  "Amazon store optimization",
  "Amazon SEO expert",
  "Amazon marketing company",
  "Amazon product ranking service",
  "Amazon FBA marketing",
  "Amazon listing SEO",
  "Amazon PPC expert",
  "Amazon sales optimization",
  "Amazon A+ content optimization",
  "Amazon brand management",
  "Amazon marketing consultant",
  "Amazon SEO services",
  "Amazon product launch service",
  "Amazon keyword research",
  "Amazon conversion rate optimization",
  "forwardsols.com"
].join(", ");

const SEO_TITLE =
  "Amazon Marketing Services | Amazon SEO, PPC & Listing Optimization Agency | Forwardsols.com";

const SEO_DESCRIPTION =
  "Boost your Amazon sales with Forwardsols.com – the leading Amazon marketing agency. We offer Amazon SEO, PPC management, product listing optimization, and advertising services to help your products rank higher, get more visibility, and increase conversions. Get expert Amazon marketing strategies for FBA, private label, and brand sellers.";

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

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
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  // SEO-optimized Amazon marketing service features
  const amazonServices = [
    {
      title: "Amazon Product Listing Optimization",
      dis: "Maximize your product visibility and sales with our expert Amazon product listing optimization. We craft keyword-rich titles, bullet points, and descriptions, optimize images, and implement backend search terms to help your products rank higher and convert more shoppers.",
    },
    {
      title: "Amazon SEO & Keyword Research",
      dis: "Our Amazon SEO experts use advanced keyword research tools to identify high-volume, low-competition keywords. We strategically integrate these keywords into your listings to boost organic rankings and drive targeted traffic to your Amazon store.",
    },
    {
      title: "Amazon PPC Management & Advertising",
      dis: "Increase your ROI with our Amazon PPC management services. We create, monitor, and optimize Sponsored Products, Sponsored Brands, and Sponsored Display campaigns to lower ACoS and maximize your ad spend efficiency.",
    },
    {
      title: "Amazon Storefront & A+ Content Optimization",
      dis: "Enhance your brand presence with custom Amazon Storefront design and A+ Content. We create visually compelling, SEO-optimized content that increases engagement, builds trust, and drives more sales for your brand on Amazon.",
    },
    {
      title: "Amazon Brand Management & Reputation",
      dis: "Protect and grow your brand on Amazon with our comprehensive brand management services. We monitor reviews, manage feedback, and implement strategies to improve your seller reputation and win the Buy Box.",
    },
    {
      title: "Amazon Product Launch & Ranking Service",
      dis: "Launch new products successfully with our proven Amazon product launch strategies. We combine targeted promotions, review generation, and ranking tactics to help your products gain traction fast.",
    },
  ];

  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content="https://forwardsols.com/amazon-marketing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forwardsols.com/amazon-marketing" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ------------------------------ Amazon Marketing Hero Section ------------------------------ */}
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
              Amazon Marketing Services
            </h1>
          </div>
        </div>

        {/* ------------------------------ Amazon Marketing Intro Section ------------------------------ */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3956e49d8a96e28ec7e12_111-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1
                // ref={headingRef}
                className="max-sm:text-2xl text-3xl mb-4 font-bold text-white"
              >
                Amazon Marketing Agency – Boost Your Sales on Amazon
              </h1>
              <p 
            //   ref={textRef}
               className="mb-8 leading-relaxed">
                Forwardsols.com is your trusted Amazon marketing partner. Our Amazon SEO and PPC experts help you dominate Amazon search results, increase product visibility, and drive more sales. Whether you’re an FBA seller, private label brand, or launching a new product, our data-driven Amazon marketing services are designed to maximize your ROI and grow your business on the world’s largest e-commerce platform.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button
                    // ref={ctaRef}
                    className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Get a Free Amazon Marketing Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ Amazon Marketing Benefits Section ------------------------------ */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Forwardsols.com for Amazon Marketing?
              </h2>
              <p className="mb-8 leading-relaxed">
                <strong>Forwardsols.com</strong> delivers proven Amazon marketing strategies that help you outrank competitors and increase your sales. Our Amazon SEO services, PPC management, and product listing optimization are tailored to your business goals. We use high-volume, low-difficulty keywords, advanced analytics, and conversion-focused content to ensure your products get found and purchased. Partner with the best Amazon marketing agency to grow your brand and revenue on Amazon.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Growing on Amazon
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a39584ddade41b9a8d626c_222-transcode.mp4"
                className="object-cover object-center rounded"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          </div>
        </section>

        {/* ------------------------------ Amazon Marketing Core Services Section ------------------------------ */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Amazon Marketing Services
          </h2>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {amazonServices?.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
