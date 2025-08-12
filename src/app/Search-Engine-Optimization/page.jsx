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
import Head from 'next/head';

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

  const seoServices = [
    {
      title: "On-Site Search Engine Optimization",
      dis: "Comprehensive on-page optimization including keyword research, content optimization, meta tags, URL structure, and internal linking to improve your search rankings and organic traffic.",
    },
    {
      title: "Technical SEO Services",
      dis: "Identify and fix technical issues that hurt your rankings. We analyze site speed, mobile-friendliness, indexability, structured data, and more to create a search-engine-friendly website.",
    },
    {
      title: "Content Strategy & SEO Content Writing",
      dis: "Data-driven content marketing that attracts qualified traffic. Our search engine optimization services focus on creating valuable, keyword-optimized content that ranks and converts.",
    },
    {
      title: "Enterprise SEO Solutions",
      dis: "Scalable SEO strategies for large websites and corporations with complex structures and competitive industries.",
    },
    {
      title: "E-Commerce Search Engine Optimization",
      dis: "Specialized optimization for online stores including product page SEO, category optimization, and technical enhancements to increase visibility and sales.",
    },
    {
      title: "Industry-Specific SEO Services",
      dis: "Custom SEO strategies for hotels, restaurants, healthcare, legal, and other specialized industries with unique search behaviors and competition.",
    },
    {
      title: "Link Building Services",
      dis: "White-hat link acquisition strategies to build your domain authority. We secure high-quality backlinks from reputable sources to boost your search rankings.",
    },
    {
      title: "Search Engine Optimization for Press Releases",
      dis: "Optimized press release distribution that improves online visibility and earns valuable backlinks from authoritative sources.",
    },
  ];

  const FAQS = [
    {
      title: "What is search engine optimization (SEO) and why is it important?",
      dis: "Search Engine Optimization (SEO) is the practice of improving your website's visibility in organic search results. It's crucial because 93% of online experiences begin with search engines, and websites on the first page receive 95% of web traffic. Our professional search engine optimization services help businesses attract more qualified visitors without paying for ads, resulting in sustainable growth and higher ROI.",
    },
    {
      title: "How long does SEO take to show results?",
      dis: "SEO is a long-term strategy that typically shows initial results within 3-6 months, with more significant improvements appearing after 6-12 months of consistent optimization. The timeline varies based on your industry competitiveness, website age, and current technical health. Unlike paid ads, search engine optimization results compound over time, delivering increasing value the longer you maintain your optimization efforts.",
    },
    {
      title: "What makes your search engine optimization services different?",
      dis: "ForwardSols stands out among SEO companies with our data-driven approach, transparent reporting, and customized strategies. We don't use cookie-cutter solutions - every search engine optimization campaign is tailored to your specific business goals, audience, and competitive landscape. Our SEO experts combine technical expertise with creative content strategies to deliver sustainable growth.",
    },
    {
      title: "Do you offer search engine optimization for specific industries?",
      dis: "Yes! We specialize in industry-specific search engine optimization services for hotels, restaurants, healthcare providers, law firms, and other specialized businesses. Each industry has unique search behaviors and competition, requiring customized SEO strategies. Our team has experience optimizing websites across multiple verticals to maximize visibility in relevant search results.",
    },
    {
      title: "How do you measure search engine optimization success?",
      dis: "We track comprehensive KPIs including keyword rankings, organic traffic growth, conversion rates, bounce rates, and revenue from organic sources. Our monthly reports provide transparent insights into your search engine optimization campaign's performance, with clear explanations of what's working and where we need to adjust strategies. We focus on metrics that directly impact your bottom line, not just vanity numbers.",
    },
  ];

  const packages = [
    {
      name: "Basic Search Engine Optimization",
      features: [
        { title: "Keyword Research (15 Keywords)", detail: "Targeted phrase analysis" },
        { title: "On-Page Optimization", detail: "Basic meta tags and content adjustments" },
        { title: "Technical SEO Audit", detail: "Initial website health check" },
        { title: "Monthly Reporting", detail: "Performance tracking" },
        { title: "1 Blog Post/Month", detail: "Basic content creation" },
      ],
      featured: false,
    },
    {
      name: "Advanced Search Engine Optimization",
      features: [
        { title: "Keyword Research (30 Keywords)", detail: "Comprehensive phrase analysis" },
        { title: "Full On-Site SEO", detail: "Complete content and technical optimization" },
        { title: "Content Strategy", detail: "Editorial calendar development" },
        { title: "Weekly Reporting", detail: "Detailed performance analysis" },
        { title: "2 Blog Posts/Month", detail: "Quality content creation" },
      ],
      featured: true,
    },
    {
      name: "Enterprise SEO Solution",
      features: [
        { title: "Comprehensive Keyword Strategy", detail: "50+ keyword targets" },
        { title: "Full Technical Overhaul", detail: "Site structure and performance" },
        { title: "Advanced Link Building", detail: "Authority-building campaigns" },
        { title: "Custom Analytics Dashboard", detail: "Real-time performance tracking" },
        { title: "4 Blog Posts/Month", detail: "Premium content creation" },
      ],
      featured: false,
    },
    {
      name: "Custom SEO Program",
      features: [
        { title: "Tailored Strategy", detail: "Built for your specific goals" },
        { title: "Dedicated SEO Team", detail: "Experts assigned to your account" },
        { title: "Competitor Analysis", detail: "Comprehensive market research" },
        { title: "Conversion Optimization", detail: "Maximize lead generation" },
        { title: "Unlimited Content Support", detail: "As-needed content creation" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Professional Search Engine Optimization (SEO) Services | ForwardSols</title>
        <meta name="description" content="ForwardSols offers comprehensive search engine optimization services including on-site SEO, technical optimization, content strategy, and link building. Increase your search rankings and organic traffic." />
        <meta name="keywords" content="search engine optimization, SEO services, professional SEO, on-site SEO, technical SEO, content optimization, link building, enterprise SEO" />
        <meta property="og:title" content="Professional Search Engine Optimization (SEO) Services | ForwardSols" />
        <meta property="og:description" content="Boost your online visibility with our proven search engine optimization strategies. Increase organic traffic and conversions with our expert SEO services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forwardsols.com/search-engine-optimization" />
        <link rel="canonical" href="https://forwardsols.com/search-engine-optimization" />
      </Head>

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
              Search Engine Optimization
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Dominate organic search results and drive qualified traffic to your website
            </p>
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Professional Search Engine Optimization Services
              </h1>
              <p className="mb-8 leading-relaxed">
                At ForwardSols, we deliver comprehensive search engine optimization services that help businesses rank higher, attract more qualified traffic, and generate more leads and sales. Our data-driven SEO strategies combine technical expertise, content marketing, and authoritative link building to deliver sustainable growth.
              </p>
              <p className="mb-8 leading-relaxed">
                Our search engine optimization services are tailored to your specific business goals and industry requirements. We stay ahead of algorithm updates and industry trends to keep your rankings stable and growing in competitive search results.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Your Free SEO Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Our Search Engine Optimization Services?
              </h1>
              <p className="leading-relaxed mb-4">
                As a leading provider of professional search engine optimization services, we offer:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Proven Results</strong> - Documented case studies showing increased traffic and conversions
                </li>
                <li className="text-white/80 text-base">
                  <strong>Transparent Reporting</strong> - Clear metrics showing exactly how your campaign performs
                </li>
                <li className="text-white/80 text-base">
                  <strong>White-Hat Techniques</strong> - Only Google-approved strategies for sustainable growth
                </li>
                <li className="text-white/80 text-base">
                  <strong>Industry Specialization</strong> - Custom search engine optimization for your business type
                </li>
                <li className="text-white/80 text-base">
                  <strong>Ongoing Optimization</strong> - Continuous improvements to maintain and grow your rankings
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our search engine optimization experts combine technical skills with marketing knowledge to deliver campaigns that actually move the needle for your business.
              </p>
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

        {/* Core Services */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <div className="text-center">
            <h1 className="text-white font-bold text-5xl max-sm:text-3xl">
              Our Search Engine Optimization Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive SEO solutions tailored to your business goals and industry requirements
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {seoServices?.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Our Search Engine Optimization Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven 6-step methodology for successful SEO campaigns:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Discovery & Analysis</strong> - Comprehensive audit of your current SEO performance
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Keyword Research</strong> - Identifying high-value search terms for your business
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Technical Optimization</strong> - Fixing website infrastructure issues
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Content Strategy</strong> - Creating optimized, valuable content
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Link Building</strong> - Earning authoritative backlinks
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Ongoing Optimization</strong> - Continuous improvements and reporting
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get Your Custom SEO Plan
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Search Engine Optimization Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions designed for businesses at every stage
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    }`}
                >
                  <div
                    className={`p-6 ${pkg.featured
                      ? "bg-[#4F1DD7] text-white"
                      : "bg-[#D9345E] text-white"
                      }`}
                  >
                    <h2 className="text-xl font-bold text-center">
                      {pkg.name}
                    </h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="border-b border-gray-100 pb-2 last:border-0"
                        >
                          <h3 className="font-medium text-white">
                            {feature.title}
                          </h3>
                          {feature.detail && (
                            <p className="text-white/50 text-sm mt-1">
                              {feature.detail}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-center">
                      <Link href="/contact">
                        <button className={`px-4 py-2 rounded-md ${pkg.featured ? 'bg-white text-[#4F1DD7]' : 'bg-[#D9345E] text-white'} font-medium`}>
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full h-full px-4 py-4 text-white">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Search Engine Optimization FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our professional SEO services</p>
          </div>
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
              {FAQS?.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`} className={``}>
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