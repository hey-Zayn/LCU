"use client";

import React, { useRef } from "react";
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
import Link from "next/link";
import ServiceForm from "@/Dev//Components/ServiceForm";
import Head from "next/head";

const SEO_SERVICES = [
  {
    title: "Best Media Buying Services",
    dis: "Boost your business growth with our top-rated media buying services. Our expert team leverages data-driven strategies to deliver high-ROI ad placements across Google Ads, Facebook Ads, Instagram Ads, and more. Reach your target audience with precision and maximize your advertising budget.",
  },
  {
    title: "Programmatic Advertising Solutions",
    dis: "Automate your digital advertising with our advanced programmatic ad buying solutions. We use real-time bidding and AI-powered optimization to ensure your ads appear on high-converting platforms, increasing your brand visibility and driving quality leads.",
  },
  {
    title: "Cross-Channel Ad Campaign Management",
    dis: "Achieve consistent results with our cross-channel campaign management. We synchronize your advertising across search engines, social media, and display networks for maximum reach and engagement, ensuring your brand message is seen everywhere your audience is.",
  },
  {
    title: "Performance Tracking & Analytics",
    dis: "Track every click and conversion with our comprehensive ad performance analytics. We provide transparent reporting and actionable insights to help you optimize your campaigns and achieve the best possible return on ad spend (ROAS).",
  },
  {
    title: "Creative Ad Strategy & Development",
    dis: "Stand out with high-impact ad creatives. Our creative team designs compelling ad copy and visuals that drive engagement and conversions, tailored to your brand and audience for maximum effectiveness.",
  },
  {
    title: "Advanced Audience Targeting",
    dis: "Reach your ideal customers with advanced audience targeting and segmentation. We use demographic, behavioral, and interest-based data to ensure your ads are seen by users most likely to convert.",
  },
  {
    title: "Native Advertising Solutions",
    dis: "Increase brand trust and engagement with native advertising. We create seamless ad experiences that blend naturally with platform content, resulting in higher click-through rates and improved brand perception.",
  },
  {
    title: "Video Advertising Campaigns",
    dis: "Capture attention and drive conversions with high-quality video ads. We produce and distribute video content across YouTube, Facebook, Instagram, and other top platforms to maximize your reach.",
  },
  {
    title: "Retargeting & Remarketing Strategies",
    dis: "Re-engage website visitors and boost conversions with our retargeting and remarketing campaigns. Stay top-of-mind and recover lost leads with strategic ad placements across the web.",
  },
];

const FAQS = [
  {
    title: "What is Media Buying and Why is it Important?",
    dis: "Media buying is the process of purchasing ad space on digital and traditional platforms to promote your business. Effective media buying ensures your ads reach the right audience at the lowest cost, maximizing your ROI and driving business growth.",
  },
  {
    title: "How Can Media Buying Increase My ROI?",
    dis: "Professional media buying uses data-driven strategies, advanced targeting, and real-time optimization to ensure your ad spend delivers the highest possible return. Our experts negotiate the best rates and placements for your campaigns.",
  },
  {
    title: "What Platforms Do You Buy Media On?",
    dis: "We buy media across all major platforms, including Google Ads, Facebook, Instagram, LinkedIn, YouTube, programmatic networks, and more. Our cross-channel approach ensures your brand is everywhere your audience is.",
  },
  {
    title: "How Do You Measure Media Buying Success?",
    dis: "We track key performance indicators such as impressions, clicks, conversions, and ROAS. Our transparent reporting and analytics help you understand campaign performance and make data-driven decisions.",
  },
];

const PACKAGES = [
  {
    name: "Starter Media Buying Package",
    features: [
      { title: "Targeted Ad Placements", detail: "Ads on one high-traffic platform" },
      { title: "Basic Campaign Setup", detail: "Initial strategy and creative" },
      { title: "Performance Reporting", detail: "Monthly analytics report" },
      { title: "Budget Optimization", detail: "Ad spend management" },
      { title: "Email Support", detail: "Basic support for campaign queries" },
    ],
    featured: false,
  },
  {
    name: "Growth Media Buying Package",
    features: [
      { title: "Multi-Platform Campaigns", detail: "Ads on up to 3 platforms" },
      { title: "Advanced Targeting", detail: "Demographic & interest-based targeting" },
      { title: "Weekly Optimization", detail: "Regular campaign adjustments" },
      { title: "Custom Creative", detail: "Tailored ad copy & visuals" },
      { title: "Detailed Analytics", detail: "Weekly performance reports" },
    ],
    featured: true,
  },
  {
    name: "Premium Media Buying Package",
    features: [
      { title: "Omni-Channel Strategy", detail: "Ads across all major platforms" },
      { title: "AI-Powered Optimization", detail: "Real-time bidding & adjustments" },
      { title: "Video & Native Ads", detail: "High-converting creative formats" },
      { title: "Conversion Tracking", detail: "In-depth analytics & reporting" },
      { title: "Dedicated Account Manager", detail: "Personalized campaign support" },
    ],
    featured: false,
  },
  {
    name: "Enterprise Media Buying Package",
    features: [
      { title: "Custom Strategy", detail: "Fully tailored media buying plan" },
      { title: "Full-Funnel Campaigns", detail: "Awareness to conversion" },
      { title: "Predictive Analytics", detail: "AI-driven performance forecasting" },
      { title: "24/7 Optimization", detail: "Real-time campaign management" },
      { title: "Creative Studio Access", detail: "Premium ad design & video" },
    ],
    featured: false,
  },
];

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);

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

  return (
    <>
      <Head>
        <title>Media Buying Services | Best Programmatic Advertising Agency</title>
        <meta
          name="description"
          content="Boost your ROI with the best media buying services. Our expert programmatic advertising agency delivers high-converting ad campaigns on Google, Facebook, Instagram, and more. Get advanced targeting, real-time optimization, and transparent analytics."
        />
        <meta
          name="keywords"
          content="media buying, programmatic advertising, digital marketing, ad agency, Facebook ads, Google ads, Instagram ads, retargeting, remarketing, audience targeting, ad campaign management, best media buying agency, high ROI advertising, low cost advertising, performance marketing"
        />
        <meta property="og:title" content="Media Buying Services | Best Programmatic Advertising Agency" />
        <meta property="og:description" content="Maximize your advertising ROI with expert media buying and programmatic ad solutions. Get advanced targeting, real-time optimization, and transparent analytics for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/media-buying-advertisement" />
        <meta property="og:image" content="https://www.forwardsols.com/og-media-buying.jpg" />
        <link rel="canonical" href="https://www.forwardsols.com/media-buying-advertisement" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- Hero Section ----------------------------- */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Media Buying Services 
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: Value Proposition ----------------------------- */}
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Unlock Maximum ROI with Expert Media Buying Services
              </h2>
              <p className="mb-8 leading-relaxed">
                Are you searching for the best media buying agency to skyrocket your business growth? Our programmatic advertising experts deliver high-ROI ad campaigns using advanced targeting, real-time optimization, and cross-channel strategies. From Google Ads and Facebook Ads to Instagram and YouTube, we ensure your brand reaches the right audience at the lowest cost. Start optimizing your ad spend and drive more conversions today!
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get a Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Benefits ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Our Media Buying Agency?
              </h2>
              <p className="mb-8 leading-relaxed">
                As a leading programmatic advertising agency, we help businesses of all sizes achieve better results with lower ad costs. Our data-driven approach, advanced audience targeting, and transparent analytics ensure you get the most out of every advertising dollar. Let us help you dominate your market and outperform your competitors.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Learn More
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
            Top Media Buying & Programmatic Advertising Services
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {SEO_SERVICES.map((card, index) => (
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

        {/* ----------------------------- Section 5: When to Invest ----------------------------- */}
        <section id="section2-img-left" className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <video
                src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F677e58377b367216f5957cc5_Chat%20Pandas%209-transcode.mp4"
                className="object-cover object-center rounded w-full h-full"
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                When Should You Invest in Media Buying?
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  If you want to increase your brand visibility, drive targeted traffic, and achieve measurable results, now is the time to invest in professional media buying. Our agency specializes in high-ROI ad campaigns that help you reach your business goals faster and more efficiently. Get started with a free strategy session today!
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 6: Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${
                    pkg.featured
                      ? "border border-[#4F1DD7] transform md:-translate-y-4"
                      : "border border-[#D9345E]"
                  }`}
                >
                  <div
                    className={`p-6 ${
                      pkg.featured
                        ? "bg-[#4F1DD7] text-white"
                        : "bg-[#D9345E] text-white"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-center">{pkg.name}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="border-b border-gray-100 pb-2 last:border-0"
                        >
                          <h4 className="font-medium text-white">
                            {feature.title}
                          </h4>
                          {feature.detail && (
                            <p className="text-white/50 text-sm mt-1">
                              {feature.detail}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 7: FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Media Buying & Programmatic Advertising FAQs
          </h2>
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 md:flex-row flex-col items-center">
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
              {FAQS.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-white md:text-2xl lg:text-2xl hover:no-underline hover:text-pink-800 cursor-pointer">
                      {card.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-white md:text-lg">
                      {card.dis}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
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
