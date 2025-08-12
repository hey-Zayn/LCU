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
      title: "SEO Lead Generation Services",
      dis: "Comprehensive lead generation SEO strategies including targeted keyword research, conversion-focused content optimization, and high-intent landing pages to attract and convert more qualified leads.",
    },
    {
      title: "Local SEO Lead Generation",
      dis: "Specialized local SEO services to increase leads from local searches. We optimize your Google Business Profile, local citations, and location pages to dominate local search results.",
    },
    {
      title: "SEO & Lead Generation Content Strategy",
      dis: "Data-driven content marketing that attracts and converts high-quality leads. Our SEO lead generation services focus on creating valuable, keyword-optimized content that ranks and converts visitors into customers.",
    },
    {
      title: "Technical SEO for Lead Quality",
      dis: "Improve lead quality with technical SEO enhancements that ensure your website properly captures and nurtures leads through optimized forms, fast load times, and mobile-friendly experiences.",
    },
    {
      title: "SEO Lead Generation Campaigns",
      dis: "End-to-end campaigns designed to get SEO leads consistently. We combine on-page optimization, content marketing, and conversion rate optimization to maximize lead generation.",
    },
    {
      title: "Enterprise SEO Lead Solutions",
      dis: "Scalable SEO lead generation strategies for large websites and corporations with complex sales funnels and multiple conversion points.",
    },
    {
      title: "E-Commerce SEO Leads",
      dis: "Specialized optimization for online stores to increase leads from product searches, including optimized product pages, category pages, and checkout processes.",
    },
    {
      title: "SEO Lead Tracking & Analytics",
      dis: "Advanced tracking and reporting to measure exactly how many leads your SEO efforts generate, with insights to continually improve lead quality and conversion rates.",
    },
  ];

  const FAQS = [
    {
      title: "How can SEO help generate more leads for my business?",
      dis: "SEO is one of the most effective ways to generate high-quality leads because it targets users who are actively searching for your products or services. Our SEO lead generation services focus on optimizing for high-intent keywords, creating conversion-focused content, and improving your website's ability to capture leads. Unlike paid ads, SEO leads continue coming in month after month with minimal additional investment.",
    },
    {
      title: "What's the difference between regular SEO and lead generation SEO?",
      dis: "While traditional SEO focuses primarily on rankings and traffic, lead generation SEO specifically optimizes for conversions. Our SEO and lead generation services include strategies like high-intent keyword targeting, conversion rate optimization, lead capture optimization, and nurturing sequences to turn visitors into qualified leads. We track lead-specific metrics to ensure your SEO delivers real business results.",
    },
    {
      title: "How long does it take to see results from SEO lead generation?",
      dis: "Most businesses begin seeing initial SEO leads within 3-4 months, with significant increases in lead volume typically occurring between 6-12 months. The timeline depends on your industry competitiveness, website authority, and how quickly we can implement optimizations. Unlike paid ads that stop delivering when you stop paying, SEO leads compound over time, delivering increasing value.",
    },
    {
      title: "Can you help improve the quality of our SEO leads?",
      dis: "Absolutely. Improving lead quality is a key part of our SEO lead generation services. We analyze your current lead sources, optimize for more qualified search terms, improve your messaging to attract better-fit customers, and enhance your lead capture forms to gather more relevant information. Our goal is to help you generate not just more leads, but better leads that convert into customers.",
    },
    {
      title: "Do you offer local SEO for lead generation?",
      dis: "Yes! Local SEO is incredibly effective for lead generation, especially for service-area businesses. Our local SEO lead generation services include Google Business Profile optimization, local citation building, review management, and location page optimization to help you dominate local searches and attract nearby customers ready to buy.",
    },
  ];

  const packages = [
    {
      name: "Basic SEO Lead Generation",
      features: [
        { title: "Lead-focused Keyword Research (15 Keywords)", detail: "Target high-intent phrases" },
        { title: "Conversion Optimization", detail: "Basic lead capture improvements" },
        { title: "Lead Tracking Setup", detail: "Measure SEO lead sources" },
        { title: "Monthly Lead Reporting", detail: "Track lead volume and quality" },
        { title: "1 Lead-Gen Content Piece/Month", detail: "Blog posts or landing pages" },
      ],
      featured: false,
    },
    {
      name: "Advanced Lead Generation SEO",
      features: [
        { title: "Comprehensive Keyword Strategy (30 Keywords)", detail: "Focus on commercial intent" },
        { title: "Full Conversion Optimization", detail: "Enhanced forms and CTAs" },
        { title: "Lead Nurturing Setup", detail: "Email sequences for SEO leads" },
        { title: "Weekly Lead Reporting", detail: "Detailed conversion analysis" },
        { title: "2 Lead-Gen Content Pieces/Month", detail: "High-converting content" },
      ],
      featured: true,
    },
    {
      name: "Enterprise SEO Lead Solution",
      features: [
        { title: "Advanced Intent Targeting", detail: "50+ high-value keyword targets" },
        { title: "Multi-Channel Lead Capture", detail: "Forms, chats, and calls" },
        { title: "CRM Integration", detail: "Automated lead management" },
        { title: "Custom Lead Analytics Dashboard", detail: "Real-time performance tracking" },
        { title: "4 Lead-Gen Content Pieces/Month", detail: "Premium conversion content" },
      ],
      featured: false,
    },
    {
      name: "Custom SEO Lead Program",
      features: [
        { title: "Tailored Lead Generation Strategy", detail: "Built for your sales funnel" },
        { title: "Dedicated SEO Lead Team", detail: "Experts focused on your conversions" },
        { title: "Competitor Lead Analysis", detail: "Identify missed opportunities" },
        { title: "Ongoing Conversion Optimization", detail: "Continuous improvement" },
        { title: "Unlimited Lead-Gen Content", detail: "Scale what works" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>SEO Lead Generation Services | Get More High-Quality Leads | ForwardSols</title>
        <meta name="description" content="ForwardSols specializes in SEO lead generation services that deliver qualified, ready-to-buy leads. Our proven strategies combine SEO optimization with conversion techniques to grow your business." />
        <meta name="keywords" content="SEO leads, lead generation SEO, SEO and lead generation, SEO lead generation services, improve lead quality SEO, get SEO leads, local SEO lead generation, generating leads with SEO" />
        <meta property="og:title" content="SEO Lead Generation Services | Get More High-Quality Leads | ForwardSols" />
        <meta property="og:description" content="Transform your SEO into a lead generation machine. Our specialized SEO lead generation services deliver qualified prospects ready to buy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forwardsols.com/seo-leads" />
        <link rel="canonical" href="https://forwardsols.com/seo-leads" />
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
              SEO Lead Generation
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Turn your website into a 24/7 lead generation machine with our proven SEO strategies
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
                Professional SEO Lead Generation Services
              </h1>
              <p className="mb-8 leading-relaxed">
                At ForwardSols, we specialize in <strong>SEO lead generation services</strong> that deliver consistent, high-quality leads month after month. Unlike traditional SEO that just focuses on rankings, our approach combines search optimization with proven conversion techniques to turn visitors into leads and customers.
              </p>
              <p className="mb-8 leading-relaxed">
                Our <strong>SEO and lead generation</strong> strategies target users at every stage of the buyer's journey, from initial research to ready-to-buy intent. We optimize for commercial keywords, create conversion-focused content, and enhance your website's ability to capture and nurture leads.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Your Free Lead Generation Audit
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
                Why Choose Our SEO Lead Generation Company?
              </h1>
              <p className="leading-relaxed mb-4">
                As a leading <strong>SEO lead generation company</strong>, we deliver measurable results:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Higher Quality Leads</strong> - We target commercial intent keywords to attract ready-to-buy visitors
                </li>
                <li className="text-white/80 text-base">
                  <strong>Transparent Tracking</strong> - See exactly how many leads your SEO generates
                </li>
                <li className="text-white/80 text-base">
                  <strong>Conversion Optimization</strong> - Turn more visitors into leads with proven techniques
                </li>
                <li className="text-white/80 text-base">
                  <strong>Local SEO Expertise</strong> - Dominate local searches and <strong>increase leads from local SEO</strong>
                </li>
                <li className="text-white/80 text-base">
                  <strong>Ongoing Optimization</strong> - Continuous improvements to grow lead volume and quality
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our <strong>lead generation SEO</strong> experts combine technical SEO skills with conversion rate optimization to deliver campaigns that fill your sales pipeline.
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
              Our SEO Lead Generation Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive solutions designed to <strong>get SEO leads</strong> consistently and improve lead quality
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
                Our SEO Lead Generation Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven methodology for <strong>generating leads with SEO</strong>:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Lead-focused Keyword Research</strong> - Identify high-intent commercial keywords
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Conversion Optimization Audit</strong> - Analyze your current lead capture performance
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Technical SEO for Leads</strong> - Ensure your website properly captures and tracks leads
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Lead-Gen Content Creation</strong> - Develop content that converts visitors into leads
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Landing Page Optimization</strong> - Create high-converting pages for your offers
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Ongoing Lead Tracking</strong> - Monitor lead volume, quality, and conversion rates
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get Your Custom Lead Generation Plan
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">SEO Lead Generation Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions to <strong>find SEO leads</strong> at every budget level
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">SEO Lead Generation FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about <strong>how to get SEO leads</strong> that convert</p>
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