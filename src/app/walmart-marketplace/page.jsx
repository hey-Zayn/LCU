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
    title: "Walmart Marketplace Account Setup & Approval",
    dis: "Get your Walmart Marketplace seller account approved fast with ForwardSols. We handle all technical requirements, compliance, and documentation to ensure a smooth onboarding process. Start selling on Walmart.com with expert guidance.",
  },
  {
    title: "Walmart Product Listing Optimization",
    dis: "Boost your Walmart product rankings with keyword-rich titles, compelling descriptions, and high-converting images. Our Walmart SEO experts use advanced keyword research and listing optimization strategies to increase your product visibility and sales.",
  },
  {
    title: "Walmart Marketplace SEO Services",
    dis: "Dominate Walmart search results with our proven Walmart SEO strategies. We optimize your listings for high-volume, low-competition keywords, improve organic rankings, and drive targeted traffic to your Walmart store.",
  },
  {
    title: "Walmart Sponsored Products & PPC Management",
    dis: "Maximize your ROI with Walmart Sponsored Products campaigns. Our PPC specialists manage bids, targeting, and ad creatives to increase conversions and lower your advertising costs on Walmart Marketplace.",
  },
  {
    title: "Walmart Fulfillment Services (WFS) Integration",
    dis: "Streamline your logistics with Walmart Fulfillment Services. We integrate your inventory with WFS, ensuring fast shipping, Prime-like delivery, and higher Buy Box win rates for your Walmart listings.",
  },
  {
    title: "Walmart Marketplace Analytics & Reporting",
    dis: "Make data-driven decisions with our advanced Walmart analytics and reporting. Track sales, keyword rankings, conversion rates, and competitor performance to optimize your Walmart Marketplace strategy.",
  },
  {
    title: "Walmart Marketplace Competitor Analysis",
    dis: "Stay ahead of the competition with in-depth Walmart competitor analysis. We identify top-performing keywords, pricing strategies, and product gaps to help you outperform your rivals.",
  },
  {
    title: "Walmart Promotions & Deals Management",
    dis: "Increase sales with strategic Walmart promotions, deals, and special offers. We manage your campaigns to maximize exposure during peak shopping periods and drive more traffic to your listings.",
  },
  {
    title: "Walmart Brand Store Design & Development",
    dis: "Build a high-converting Walmart Brand Store that reflects your brand identity. Our design team creates custom storefronts optimized for user experience and sales conversions.",
  },
  {
    title: "Walmart Customer Service & Reputation Management",
    dis: "Enhance your Walmart seller reputation with proactive customer service and feedback management. We help you maintain high ratings and resolve customer issues quickly.",
  },
];

const FAQS = [
  {
    title: "How can ForwardSols help me succeed on Walmart Marketplace?",
    dis: "ForwardSols provides end-to-end Walmart Marketplace management, including account setup, product listing optimization, Walmart SEO, PPC management, and fulfillment integration. Our proven strategies help you increase sales, improve rankings, and grow your brand on Walmart.com.",
  },
  {
    title: "What are the benefits of Walmart SEO optimization?",
    dis: "Walmart SEO optimization increases your product visibility in Walmart search results, drives more organic traffic, and boosts your sales. We use high-volume, low-difficulty keywords and advanced listing strategies to help you outrank competitors.",
  },
  {
    title: "How long does it take to get approved as a Walmart Marketplace seller?",
    dis: "Walmart Marketplace account approval typically takes 1-3 weeks. Our team at ForwardSols ensures your application is complete and compliant, speeding up the approval process and minimizing delays.",
  },
  {
    title: "What is Walmart Fulfillment Services (WFS) and why should I use it?",
    dis: "Walmart Fulfillment Services (WFS) allows you to store inventory in Walmart’s warehouses, offering fast shipping and higher Buy Box win rates. Using WFS can improve your seller performance and customer satisfaction on Walmart.com.",
  },
];

const PACKAGES = [
  {
    name: "Starter Walmart SEO Package",
    features: [
      { title: "Walmart Account Setup", detail: "Complete seller account registration & approval" },
      { title: "Product Listing Optimization", detail: "Up to 25 listings with keyword research" },
      { title: "Basic Walmart SEO", detail: "On-page SEO for product titles & descriptions" },
      { title: "Support", detail: "Email support" },
    ],
    featured: false,
  },
  {
    name: "Growth Walmart Seller Package",
    features: [
      { title: "Walmart Account Setup", detail: "Optimized onboarding & compliance" },
      { title: "Product Listing Optimization", detail: "Up to 100 listings with advanced SEO" },
      { title: "Walmart PPC Setup", detail: "Sponsored Products campaign setup" },
      { title: "WFS Integration", detail: "Basic Walmart Fulfillment Services setup" },
      { title: "Support", detail: "Email & chat support" },
    ],
    featured: false,
  },
  {
    name: "Premium Walmart Marketplace Package",
    features: [
      { title: "Full Account Management", detail: "End-to-end Walmart Marketplace management" },
      { title: "Unlimited Listing Optimization", detail: "Comprehensive SEO for all products" },
      { title: "Advanced Walmart SEO", detail: "Keyword research, competitor analysis, and content optimization" },
      { title: "Walmart PPC Management", detail: "Ongoing Sponsored Products optimization" },
      { title: "Analytics & Reporting", detail: "Monthly performance reports" },
    ],
    featured: true,
  },
  {
    name: "Enterprise Walmart Seller Solution",
    features: [
      { title: "Custom Account Strategy", detail: "Tailored solutions for large-scale sellers" },
      { title: "Bulk Product Uploads", detail: "Unlimited listings with bulk optimization" },
      { title: "Advanced SEO & Competitor Analysis", detail: "In-depth keyword and market research" },
      { title: "WFS & Logistics Consulting", detail: "Custom fulfillment and supply chain solutions" },
      { title: "Brand Store Design", detail: "Custom Walmart Brand Store creation" },
    ],
    featured: false,
  },
];

const DOMAIN = "https://www.forwardsols.com/";

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
        <title>Walmart Marketplace SEO Services | Walmart Seller Account Management | ForwardSols</title>
        <meta
          name="description"
          content="Boost your sales on Walmart Marketplace with ForwardSols. Expert Walmart SEO, product listing optimization, account setup, PPC management, and WFS integration. Start selling on Walmart.com today!"
        />
        <meta
          name="keywords"
          content="Walmart Marketplace SEO, Walmart SEO services, Walmart product listing optimization, Walmart seller account setup, Walmart PPC management, Walmart Fulfillment Services, Walmart Marketplace management, Walmart store optimization, Walmart SEO agency, Walmart listing SEO, Walmart account approval, Walmart Brand Store design"
        />
        <meta property="og:title" content="Walmart Marketplace SEO Services | Walmart Seller Account Management | ForwardSols" />
        <meta property="og:description" content="Get expert Walmart Marketplace SEO, product listing optimization, and account management from ForwardSols. Increase your sales and visibility on Walmart.com." />
        <meta property="og:url" content={`${DOMAIN}walmart-marketplace`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${DOMAIN}walmart-marketplace`} />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* Hero Section */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-7xl max-sm:text-4xl font-bold z-10"
            >
              Walmart Marketplace SEO & Seller Services
            </h1>
           
          </div>
        </div>

        {/* Section: Why Walmart Marketplace & ForwardSols */}
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
                Walmart Marketplace Seller Solutions for Maximum Growth
              </h2>
              <p className="mb-8 leading-relaxed">
                Are you ready to unlock the full potential of Walmart Marketplace? ForwardSols specializes in Walmart SEO, product listing optimization, and seller account management. Our proven strategies help you rank higher, increase sales, and build a powerful brand presence on Walmart.com. Whether you’re a new seller or looking to scale, our Walmart experts deliver results-driven solutions tailored to your business.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Selling on Walmart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Walmart Marketplace SEO Services */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Walmart Marketplace SEO & Seller Services
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
                    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Choose ForwardSols */}
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
                Why Choose ForwardSols for Walmart Marketplace SEO?
              </h2>
              <p className="mb-1 leading-relaxed">
                ForwardSols is a leading Walmart Marketplace SEO agency with a proven track record of helping brands succeed on Walmart.com. Our team leverages high-volume, low-competition keywords, advanced listing optimization, and data-driven strategies to maximize your sales and ROI. We stay ahead of Walmart’s algorithm updates and marketplace trends, ensuring your business remains competitive and profitable.
              </p>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Walmart Seller Packages */}
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

        {/* Section: FAQs */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Walmart Marketplace SEO FAQs
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
