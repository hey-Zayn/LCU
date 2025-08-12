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

// SEO Meta Tags for Next.js Head
import Head from "next/head";

const SEO_SERVICES = [
  {
    title: "B2B Digital Advertising Services",
    dis: "Boost your B2B lead generation and brand visibility with our data-driven B2B digital advertising solutions. We specialize in high-converting campaigns on LinkedIn, Google Ads, and industry-specific platforms to maximize your ROI.",
  },
  {
    title: "LinkedIn B2B Lead Generation",
    dis: "Leverage LinkedIn's powerful targeting to reach decision-makers and generate qualified B2B leads. Our LinkedIn advertising experts create compelling campaigns that drive business growth and increase your sales pipeline.",
  },
  {
    title: "Account-Based Marketing (ABM) for B2B",
    dis: "Accelerate your B2B sales with precision-targeted ABM campaigns. We identify high-value accounts, personalize messaging, and deliver ads that convert prospects into loyal clients.",
  },
  {
    title: "B2B PPC Management",
    dis: "Maximize your advertising budget with our expert B2B PPC management. We optimize Google Ads and Bing Ads campaigns for high-intent keywords, ensuring your business appears in front of the right audience at the right time.",
  },
  {
    title: "B2B Retargeting & Remarketing",
    dis: "Re-engage website visitors and nurture warm leads with advanced B2B retargeting strategies. Our remarketing campaigns increase conversion rates and lower your cost per acquisition.",
  },
  {
    title: "B2B Content Marketing & Paid Promotion",
    dis: "Amplify your B2B content with strategic paid promotion. We combine SEO-optimized content with targeted advertising to attract, engage, and convert your ideal business customers.",
  },
  {
    title: "B2B Advertising Analytics & Reporting",
    dis: "Track every click, conversion, and ROI with our comprehensive B2B advertising analytics. We provide transparent, actionable reports to help you make data-driven marketing decisions.",
  },
  {
    title: "Cross-Channel B2B Advertising",
    dis: "Create a unified B2B advertising strategy across LinkedIn, Google, Facebook, and more. We ensure consistent messaging and optimal performance on every channel.",
  },
  {
    title: "B2B Marketing Strategy Consulting",
    dis: "Get expert B2B marketing consulting to develop a winning advertising strategy. We align your campaigns with your business goals for maximum impact and growth.",
  },
];

const FAQS = [
  {
    title: "What is B2B advertising and why is it important?",
    dis: "B2B advertising targets businesses and decision-makers, not individual consumers. It's essential for generating high-quality leads, building brand authority, and accelerating business growth in competitive markets.",
  },
  {
    title: "Which platforms are best for B2B advertising?",
    dis: "LinkedIn, Google Ads, and industry-specific platforms are the most effective for B2B advertising. LinkedIn is ideal for targeting professionals, while Google Ads captures high-intent search traffic.",
  },
  {
    title: "How quickly can I see results from B2B advertising?",
    dis: "Most B2B advertising campaigns start showing measurable results within 1-3 months. The timeline depends on your industry, budget, and campaign objectives.",
  },
  {
    title: "How do you measure B2B advertising success?",
    dis: "We track key metrics such as qualified leads, conversion rates, cost per lead (CPL), and return on ad spend (ROAS). Our detailed analytics ensure your campaigns deliver maximum ROI.",
  },
];

const PACKAGES = [
  {
    name: "Starter B2B Advertising Package",
    features: [
      { title: "B2B Campaign Setup", detail: "Initial campaign planning and audience targeting" },
      { title: "Single Platform Management", detail: "LinkedIn or Google Ads management" },
      { title: "Ad Copywriting", detail: "SEO-optimized ad copy for maximum engagement" },
      { title: "Monthly Performance Reporting", detail: "Transparent analytics and recommendations" },
      { title: "Budget Optimization", detail: "Efficient allocation for best ROI" },
    ],
    featured: false,
  },
  {
    name: "Growth B2B Advertising Package",
    features: [
      { title: "Multi-Platform Campaigns", detail: "LinkedIn, Google Ads, and Facebook Ads" },
      { title: "Advanced Audience Segmentation", detail: "Target by industry, job title, and intent" },
      { title: "A/B Testing", detail: "Continuous ad creative and landing page optimization" },
      { title: "Bi-Weekly Reporting", detail: "Frequent updates and actionable insights" },
      { title: "Content Promotion", detail: "Boost SEO content with paid ads" },
    ],
    featured: false,
  },
  {
    name: "Proactive B2B Advertising Package",
    features: [
      { title: "Account-Based Marketing (ABM)", detail: "Personalized campaigns for high-value accounts" },
      { title: "Cross-Channel Strategy", detail: "Unified messaging across all platforms" },
      { title: "Weekly Optimization", detail: "Ongoing bid, budget, and creative adjustments" },
      { title: "Conversion Tracking Setup", detail: "Full-funnel analytics and reporting" },
      { title: "Custom Landing Pages", detail: "SEO-optimized for lead generation" },
    ],
    featured: true,
  },
  {
    name: "Enterprise B2B Advertising Package",
    features: [
      { title: "Full-Scale B2B Strategy", detail: "Comprehensive campaign management across all channels" },
      { title: "Custom Audience Building", detail: "Lookalike, retargeting, and CRM integration" },
      { title: "Real-Time Analytics Dashboard", detail: "24/7 access to campaign performance" },
      { title: "Dedicated Account Manager", detail: "Personalized support and strategy" },
      { title: "Advanced Retargeting", detail: "Multi-touchpoint remarketing campaigns" },
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
        <title>B2B Advertising Services | Forwardsols | B2B Lead Generation & Digital Marketing</title>
        <meta
          name="description"
          content="Maximize your B2B lead generation and ROI with Forwardsols' expert B2B advertising services. We offer LinkedIn Ads, Google Ads, ABM, PPC, and cross-channel B2B marketing for business growth. Contact us for a free consultation."
        />
        <meta
          name="keywords"
          content="B2B advertising, B2B lead generation, LinkedIn Ads, B2B PPC, Account-Based Marketing, B2B digital marketing, B2B remarketing, B2B retargeting, B2B marketing agency, B2B paid ads, B2B advertising services, B2B marketing strategy, B2B content promotion, B2B analytics, B2B campaign management, Forwardsols"
        />
        <meta property="og:title" content="B2B Advertising Services | Forwardsols" />
        <meta property="og:description" content="Drive more B2B leads and sales with Forwardsols' expert B2B advertising solutions. Get a free strategy session today." />
        <meta property="og:url" content="https://www.forwardsols.com/B2B-advertisement" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.forwardsols.com/B2B-advertisement" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- SEO-Optimized Hero Section ----------------------------- */}
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
              B2B Advertising Services
            </h1>
           
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Choose Forwardsols ----------------------------- */}
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
                Why Choose Forwardsols for B2B Advertising Success?
              </h2>
              <p className="mb-6 leading-relaxed">
                At <a href="https://www.forwardsols.com/" className="">Forwardsols</a>, we specialize in <strong>B2B advertising services</strong> that drive measurable results for your business. Our expert team leverages <strong>high-converting B2B lead generation</strong>, <strong>LinkedIn Ads management</strong>, <strong>Google Ads for B2B</strong>, and <strong>account-based marketing (ABM)</strong> to maximize your ROI and accelerate your sales pipeline. With a data-driven approach and advanced targeting, we help you reach decision-makers, generate qualified B2B leads, and boost your brand visibility across all digital channels.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-white/90 text-base">
                <li>Expert <strong>B2B PPC management</strong> for scalable growth</li>
                <li>Proven <strong>B2B digital marketing strategies</strong> tailored to your industry</li>
                <li>Advanced <strong>B2B remarketing</strong> and <strong>retargeting</strong> to nurture leads</li>
                <li>Comprehensive <strong>B2B campaign analytics</strong> and transparent reporting</li>
                <li>Dedicated support from a top-rated <strong>B2B marketing agency</strong></li>
              </ul>
              <p>
                Partner with Forwardsols and unlock the full potential of <strong>B2B paid advertising</strong>. <a href="https://www.forwardsols.com/contact" className="">Contact us</a> today for a free B2B advertising consultation and discover how we can help your business dominate your market.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: B2B Advertising Solutions ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Transform Your B2B Marketing with Proven Strategies
              </h2>
              <p className="mb-8 leading-relaxed">
                Unlock scalable growth with <strong>B2B lead generation</strong>, <strong>PPC management</strong>, and <strong>cross-channel advertising</strong>. Our campaigns are built on high-volume, low-competition keywords to ensure your business stands out and attracts the right clients. Partner with Forwardsols for <strong>cost-effective B2B advertising</strong> that delivers real business results.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
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

        {/* ----------------------------- Section 4: Core B2B Advertising Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our B2B Advertising Services
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

        {/* ----------------------------- Section 5: When to Invest in B2B Advertising ----------------------------- */}
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
                When Should You Invest in B2B Advertising?
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your business is ready to scale, launch new products, or enter new markets, <strong>B2B advertising</strong> is your key to success. Forwardsols helps you reach decision-makers, generate high-quality leads, and outperform your competitors with <strong>SEO-optimized B2B campaigns</strong> that deliver results.
                </p>
              </div>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 6: B2B Advertising Packages ----------------------------- */}
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
                          <h4 className="font-medium text-white">{feature.title}</h4>
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
            B2B Advertising FAQs
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
