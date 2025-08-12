"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import BusinessOperations from "@/Dev//Components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ServiceForm from "@/Dev//Components/ServiceForm";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

// SEO-optimized keywords for Social Media Marketing
const SEO_KEYWORDS = [
  "social media marketing services",
  "social media management",
  "social media advertising",
  "social media strategy",
  "Facebook marketing",
  "Instagram marketing",
  "LinkedIn marketing",
  "Twitter marketing",
  "social media agency",
  "social media content creation",
  "social media optimization",
  "brand awareness",
  "increase followers",
  "engagement rate",
  "social media campaigns",
  "best social media marketing company",
  "digital marketing agency",
  "online presence",
  "social media analytics",
  "ROI social media"
].join(", ");

const DOMAIN = "https://www.forwardsols.com/";

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

  // SEO-optimized service cards
  const socialMediaServices = [
    {
      title: "Social Media Strategy & Consulting",
      dis: "Unlock your brand’s full potential with a custom social media strategy. Our experts at Forward Solutions analyze your target audience, competitors, and industry trends to develop a data-driven plan that maximizes engagement, brand awareness, and ROI. Get ahead with the best social media marketing services in the industry.",
    },
    {
      title: "Content Creation & Social Media Management",
      dis: "Boost your online presence with high-quality, engaging content tailored for Facebook, Instagram, LinkedIn, and more. We handle everything from content calendars to daily posting, community management, and real-time engagement to grow your followers and increase your engagement rate.",
    },
    {
      title: "Paid Social Media Advertising",
      dis: "Drive targeted traffic and conversions with expertly managed social media ad campaigns. Our team creates and optimizes Facebook Ads, Instagram Ads, and LinkedIn Ads to ensure maximum ROI, lower cost-per-click, and measurable results for your business.",
    },
    {
      title: "Social Media Analytics & Reporting",
      dis: "Track your success with in-depth analytics and transparent reporting. We monitor key metrics like reach, impressions, engagement, and conversions, providing actionable insights to continually optimize your campaigns for the best results.",
    },
    {
      title: "Brand Reputation & Community Management",
      dis: "Protect and enhance your brand reputation with proactive community management. We respond to comments, messages, and reviews promptly, ensuring your audience feels valued and your brand image remains positive across all platforms.",
    },
  ];

  return (
    <>
      <Head>
        <title>Social Media Marketing Services | Forward Solutions</title>
        <meta
          name="description"
          content="Boost your brand with Forward Solutions' top-rated social media marketing services. We offer expert social media management, advertising, content creation, and analytics to grow your business online. Contact the best social media marketing agency today!"
        />
        <meta
          name="keywords"
          content={SEO_KEYWORDS}
        />
        <meta property="og:title" content="Social Media Marketing Services | Forward Solutions" />
        <meta
          property="og:description"
          content="Forward Solutions is your trusted partner for social media marketing, management, and advertising. Increase your followers, engagement, and ROI with our expert team."
        />
        <meta property="og:url" content={`${DOMAIN}social-media-marketing`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${DOMAIN}images/social-media-marketing-og.jpg`} />
        <link rel="canonical" href={`${DOMAIN}social-media-marketing`} />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- Hero Section ----------------------------- */}
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
              Social Media <br /> Marketing Services
            </h1>
           
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Choose Us ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 max-sm:py-10 md:flex-row flex-col items-center">
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
              <h2
                // ref={headingRef}
                className="max-sm:text-2xl text-3xl mb-4 font-bold text-white"
              >
                Why Forward Solutions for Social Media Marketing?
              </h2>
              <p  className="mb-8 leading-relaxed">
                As a top-rated social media marketing company, Forward Solutions delivers measurable results. Our certified experts use the latest tools and trends to increase your brand awareness, drive website traffic, and generate high-quality leads. We specialize in social media management, paid advertising, and content creation for businesses of all sizes.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button
                    // ref={ctaRef}
                    className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Start Growing Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Our Approach ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Data-Driven Social Media Campaigns for Maximum ROI
              </h2>
              <p className="mb-8 leading-relaxed">
                Our social media marketing approach is powered by advanced analytics and audience insights. We create precision-targeted campaigns that resonate with your ideal customers, optimize content for each platform’s algorithm, and continually refine strategies to boost engagement, increase followers, and drive conversions. Partner with Forward Solutions for transparent reporting and real business growth.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Request a Free Consultation
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

        {/* ----------------------------- Section 4: Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Social Media Marketing Services
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {socialMediaServices.map((card, index) => (
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

        {/* ----------------------------- Section 5: CTA & Form ----------------------------- */}
          <ServiceForm />
       

                <BusinessOperations />
            </div>
        </>
    );
};

export default page;
