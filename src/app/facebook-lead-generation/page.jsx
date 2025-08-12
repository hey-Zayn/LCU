"use client";

import React, { useRef } from "react";
import Head from "next/head";
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

// SEO-Optimized Facebook Lead Generation Services
const facebookLeadServices = [
  {
    title: "Precision Facebook Audience Targeting",
    dis: "Utilize advanced Facebook Ads targeting to reach your ideal customers by demographics, interests, behaviors, and lookalike audiences. Maximize your ROI with laser-focused Facebook lead generation strategies.",
  },
  {
    title: "High-Converting Facebook Lead Ads",
    dis: "Design and launch compelling Facebook lead ad campaigns with persuasive copy and creative visuals. Drive qualified leads and boost conversions for your business with proven Facebook marketing techniques.",
  },
  {
    title: "Optimized Facebook Lead Forms",
    dis: "Increase your conversion rates with user-friendly, mobile-optimized Facebook lead forms. Collect high-quality leads with minimal friction and seamless user experience.",
  },
  {
    title: "Facebook Retargeting & Remarketing",
    dis: "Re-engage website visitors and warm audiences with strategic Facebook retargeting campaigns. Nurture leads through the sales funnel and increase your customer acquisition rate.",
  },
  {
    title: "A/B Testing & Campaign Optimization",
    dis: "Continuously improve your Facebook lead generation campaigns with data-driven A/B testing. Optimize ad creatives, targeting, and bidding for the best results.",
  },
  {
    title: "Automated Lead Nurturing Integration",
    dis: "Integrate Facebook leads directly into your CRM or email marketing system. Automate follow-ups and nurture leads to accelerate your sales pipeline.",
  },
  {
    title: "Comprehensive Analytics & Reporting",
    dis: "Track every aspect of your Facebook lead generation campaigns with transparent analytics. Get detailed reports on cost per lead, conversion rates, and campaign performance.",
  },
];

// SEO-Optimized FAQs
const faqs = [
  {
    title: "What is Facebook Lead Generation and how can it help my business?",
    dis: "Facebook Lead Generation is a digital marketing strategy that uses Facebook Ads to capture potential customer information through optimized lead forms. It helps businesses grow their customer base, increase sales, and improve ROI by targeting the right audience on Facebook.",
  },
  {
    title: "Why choose Forward Solutions for Facebook Lead Generation Services?",
    dis: "Forward Solutions is a leading Facebook Lead Generation agency with expertise in advanced targeting, creative ad strategies, and continuous optimization. We deliver high-quality, sales-ready leads and maximize your return on investment.",
  },
  {
    title: "How fast can I see results from Facebook Lead Generation campaigns?",
    dis: "Most clients see qualified leads within the first week of campaign launch. Optimal results are typically achieved within 2-4 weeks as we refine targeting and creative elements for maximum performance.",
  },
  {
    title: "Is Facebook Lead Generation suitable for my industry?",
    dis: "Yes! Facebook Lead Generation is effective for B2B and B2C businesses across industries, including real estate, healthcare, education, e-commerce, and professional services. If you want to grow your customer base, our service is right for you.",
  },
];

// SEO-Optimized Packages
const packages = [
  {
    name: "Starter Facebook Lead Generation",
    features: [
      { title: "Basic Audience Targeting", detail: "Target core demographics and interests for your business" },
      { title: "Single Campaign Setup", detail: "Launch one Facebook lead ad campaign with two ad variations" },
      { title: "Lead Form Creation", detail: "Simple, conversion-focused Facebook lead form" },
      { title: "Weekly Performance Reports", detail: "Monitor campaign metrics and lead quality" },
      { title: "Monthly Optimization", detail: "Basic campaign adjustments for improved results" },
    ],
    featured: false,
  },
  {
    name: "Growth Facebook Lead Generation",
    features: [
      { title: "Advanced Audience Segmentation", detail: "Custom and lookalike audiences for higher quality leads" },
      { title: "Multiple Campaigns", detail: "Up to 3 Facebook lead ad campaigns with multiple ad variations" },
      { title: "Optimized Lead Forms", detail: "Enhanced forms for higher conversion rates" },
      { title: "A/B Testing", detail: "Continuous testing of ad creatives and targeting" },
      { title: "Bi-Weekly Optimization", detail: "Regular performance analysis and improvements" },
      { title: "Basic Retargeting", detail: "Retarget users who engage with your ads" },
    ],
    featured: true,
  },
  {
    name: "Premium Facebook Lead Generation",
    features: [
      { title: "Comprehensive Audience Research", detail: "In-depth analysis and segmentation for best results" },
      { title: "Multi-Channel Strategy", detail: "Integrated Facebook and Instagram lead campaigns" },
      { title: "Advanced Lead Form Optimization", detail: "Dynamic forms with conditional logic" },
      { title: "Full Funnel Retargeting", detail: "Nurture leads at every stage of the funnel" },
      { title: "Weekly Optimization", detail: "Detailed analysis and campaign adjustments" },
      { title: "Automated Lead Nurturing", detail: "Email and CRM integration for follow-up" },
    ],
    featured: false,
  },
  {
    name: "Enterprise Facebook Lead Generation",
    features: [
      { title: "Custom Audience Strategy", detail: "Tailored targeting based on your business goals" },
      { title: "Omni-Channel Campaigns", detail: "Lead generation across Facebook, Instagram, and Messenger" },
      { title: "AI-Powered Lead Scoring", detail: "Prioritize leads for your sales team" },
      { title: "Full Funnel Optimization", detail: "End-to-end management and optimization" },
      { title: "Daily Performance Monitoring", detail: "Real-time tracking and adjustments" },
      { title: "Dedicated Account Manager", detail: "Personalized support and strategy" },
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
        <title>Facebook Lead Generation Services | Facebook Ads Lead Generation Agency | Forward Solutions</title>
        <meta
          name="description"
          content="Boost your business growth with Forward Solutions' Facebook Lead Generation Services. Get high-quality, targeted leads with advanced Facebook Ads strategies. Start generating more leads and sales today at https://www.forwardsols.com/."
        />
        <meta
          name="keywords"
          content="Facebook Lead Generation, Facebook Ads Lead Generation, Facebook Lead Generation Services, Facebook Lead Generation Agency, Facebook Marketing, Facebook Advertising, Social Media Lead Generation, Facebook Lead Forms, Facebook Lead Campaigns, Facebook Retargeting, Facebook Lead Nurturing, Facebook Lead Optimization, Facebook Lead Management, Facebook CRM Integration, Facebook Lead Analytics, Facebook Lead Reporting, Forward Solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Forward Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.forwardsols.com/facebook-lead-generation" />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Facebook Lead Generation Services | Facebook Ads Lead Generation Agency | Forward Solutions" />
        <meta
          property="og:description"
          content="Drive more sales and qualified leads with expert Facebook Lead Generation Services from Forward Solutions. Advanced Facebook Ads, lead forms, retargeting, and CRM integration for your business growth."
        />
        <meta property="og:url" content="https://www.forwardsols.com/facebook-lead-generation" />
        <meta property="og:site_name" content="Forward Solutions" />
        <meta property="og:image" content="https://www.forwardsols.com/og-facebook-lead-gen.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Facebook Lead Generation by Forward Solutions" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facebook Lead Generation Services | Facebook Ads Lead Generation Agency | Forward Solutions" />
        <meta name="twitter:description" content="Get more leads and sales with Facebook Lead Generation Services by Forward Solutions. Advanced Facebook Ads, lead forms, and CRM integration for business growth." />
        <meta name="twitter:image" content="https://www.forwardsols.com/og-facebook-lead-gen.jpg" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- SEO Optimized Hero Section ----------------------------- */}
        <div className="w-full h-full">
          <div
            id="facebook-lead-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Facebook Lead Generation Services
            </h1>
            {/* <p className="text-white text-center text-2xl max-sm:text-lg font-medium mt-6 z-10 max-w-3xl">
              Accelerate your business growth with Forward Solutions – the leading Facebook Lead Generation Agency. Get more qualified leads, boost your sales, and grow your brand with our proven Facebook Ads strategies and advanced lead generation solutions.
            </p>
            <Link href="/contact">
              <button className="mt-8 inline-flex text-white border border-white px-8 py-4 rounded-lg text-xl hover:bg-white hover:text-black transition-colors duration-300 z-10">
                Get a Free Facebook Lead Generation Consultation
              </button>
            </Link> */}
          </div>
        </div>

        {/* ----------------------------- Why Facebook Lead Generation? ----------------------------- */}
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
                Why Invest in Facebook Lead Generation for Your Business?
              </h2>
              <p className="mb-8 leading-relaxed">
                Facebook is the world’s largest social media platform, making it the best channel for targeted lead generation. At Forward Solutions, we leverage advanced Facebook Ads, retargeting, and lead form optimization to deliver high-quality, sales-ready leads. Our data-driven approach ensures maximum ROI and sustainable business growth for your brand.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Generating Facebook Leads
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Our Facebook Lead Generation Process ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Our Proven Facebook Lead Generation Process
              </h2>
              <p className="mb-8 leading-relaxed">
                From in-depth audience research to campaign optimization, Forward Solutions manages every step of your Facebook lead generation journey. We use advanced targeting, creative ad design, and conversion-focused lead forms to deliver measurable results. Let us help you turn Facebook users into loyal customers and grow your business.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Learn More About Our Process
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

        {/* ----------------------------- Core Facebook Lead Generation Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Facebook Lead Generation Services We Offer
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {facebookLeadServices.map((card, index) => (
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

        {/* ----------------------------- When to Invest in Facebook Lead Generation ----------------------------- */}
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
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8 ">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Is Facebook Lead Generation Right for Your Business?
              </h2>
              <p className="mb-1 leading-relaxed">
                If you want to expand your customer base, increase sales, and build brand awareness, Facebook Lead Generation is the solution. Forward Solutions helps businesses of all sizes and industries capture high-quality leads directly from Facebook. Our tailored strategies ensure you get the best results and maximize your marketing investment.
              </p>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Facebook Lead Generation Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Facebook Lead Generation Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
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
                    <h3 className="text-xl font-bold text-center">
                      {pkg.name}
                    </h3>
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

        {/* ----------------------------- FAQs Section ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Facebook Lead Generation FAQs
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
              {faqs.map((card, index) => (
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

        {/* ----------------------------- Contact & Business Operations ----------------------------- */}
        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
