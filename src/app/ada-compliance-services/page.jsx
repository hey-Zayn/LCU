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
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );



  const SEOTpyes = [
    {
      title: "Strategic Keyword Research & Planning",
      dis: "We conduct comprehensive keyword analysis to identify high-value search terms that align with your business goals. Our data-driven approach combines search volume analysis, competitor benchmarking, and intent mapping to build a targeted strategy that drives qualified traffic.",
    },
    {
      title: "Premium Link Acquisition",
      dis: "Our white-hat link building focuses on securing authoritative backlinks from industry-relevant sources. We employ proven outreach strategies, digital PR, and content partnerships to build a natural, diverse link profile that boosts domain authority and rankings.",
    },
    {
      title: "Technical SEO Optimization",
      dis: "We optimize your website's technical infrastructure for peak search performance. Our audits address critical factors like page speed, mobile responsiveness, crawlability, and indexation to ensure search engines can efficiently access and understand your content.",
    },
    {
      title: "Local Search Visibility",
      dis: "Our local SEO services maximize your presence in geo-targeted searches. We optimize your Google Business Profile, manage local citations, implement structured data markup, and build location-specific content to connect you with nearby customers.",
    },
    {
      title: "On-Page Content Optimization",
      dis: "We enhance your web pages with strategic keyword placement, semantic HTML markup, and engaging content architecture. Our approach balances search engine requirements with user experience to improve rankings while increasing engagement.",
    },
    {
      title: "Off-Page Authority Building",
      dis: "We develop your digital footprint through brand mentions, social signals, and industry partnerships. Our off-page strategies establish thought leadership while driving referral traffic and improving search credibility.",
    },
    {
      title: "Amazon Product Visibility",
      dis: "Our Amazon SEO specialists optimize product listings with conversion-focused keywords, enhanced A+ content, and review management strategies to maximize visibility in Amazon's search results and increase sales velocity.",
    },
    {
      title: "Conversion Rate Optimization",
      dis: "We analyze user behavior to identify and eliminate conversion barriers. Through A/B testing, heatmap analysis, and funnel optimization, we transform more visitors into customers while increasing average order values.",
    },
    {
      title: "E-Commerce Search Optimization",
      dis: "We optimize online stores for both product discoverability and conversion. Our solutions include category structure optimization, product schema markup, internal linking strategies, and seasonal content planning tailored for retail search algorithms.",
    },
  ];

  const FAQS = [
    {
      title: "What is landing page optimization?",
      dis: "Landing page optimization (LPO) is the process of systematically improving key elements on your conversion pages to maximize visitor engagement and lead generation. This involves strategic testing of headlines, copywriting, visual hierarchy, form placement, and trust signals to create high-performing pages tailored to your audience's intent.",
    },
    {
      title: "Why is landing page optimization important for my business?",
      dis: "Optimized landing pages directly impact your revenue by increasing conversion rates by 25-300% on average. They ensure your marketing dollars work harder by reducing bounce rates, improving ad relevance scores, and creating seamless user journeys that guide visitors toward your desired action - whether that's purchases, signups, or inquiries.",
    },
    {
      title: "How does landing page optimization affect SEO?",
      dis: "Well-optimized landing pages satisfy Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) criteria by aligning content with user intent. Technical LPO improvements like faster load speeds (under 2.5 seconds), mobile responsiveness, and semantic HTML structure also contribute to higher rankings while maintaining conversion effectiveness.",
    },
    {
      title: "How long does it take to see results from landing page optimization?",
      dis: "Initial improvements in engagement metrics (time-on-page, scroll depth) typically appear within 7-14 days. Meaningful conversion rate lifts become measurable after 2-3 full optimization cycles (usually 4-8 weeks). For competitive industries, allow 3-6 months to see full impact as we refine based on performance data and user behavior patterns.",
    },
    {
      title: "What's the difference between A/B testing and full landing page optimization?",
      dis: "A/B testing compares two versions of a single element (like a CTA button), while comprehensive LPO involves multivariate testing of all page components combined with technical SEO enhancements, user psychology principles, and funnel analysis to create a complete high-converting experience.",
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      features: [
        { title: "SEO Audits", detail: "Introductory website audit" },
        {
          title: "Keyword Research & Strategy",
          detail: "Targeted plan with 10 keywords",
        },
        { title: "On-Page SEO", detail: "Basic meta tag implementation" },
        { title: "Off-Page SEO", detail: "Starter backlink strategy" },
        { title: "Technical SEO", detail: "Essential technical tweaks" },
        { title: "Content Creation & Optimization", detail: "Not included" },
      ],
      featured: false,
    },
    {
      name: "Standard Package",
      features: [
        { title: "SEO Audits", detail: "Detailed SEO performance review" },
        {
          title: "Keyword Research & Strategy",
          detail: "Focused keyword plan for 25 terms",
        },
        { title: "On-Page SEO", detail: "Comprehensive on-page upgrades" },
        { title: "Off-Page SEO", detail: "Moderate link-building plan" },
        { title: "Technical SEO", detail: "Advanced diagnostics and fixes" },
        {
          title: "Content Creation & Optimization",
          detail: "Up to 4 articles or pages monthly",
        },
      ],
      featured: false,
    },
    {
      name: "Premium Package",
      features: [
        { title: "SEO Audits", detail: "Complete website and technical audit" },
        {
          title: "Keyword Research & Strategy",
          detail: "In-depth analysis with 50 key phrases",
        },
        { title: "On-Page SEO", detail: "Advanced optimization methods" },
        { title: "Off-Page SEO", detail: "Robust backlink development" },
        {
          title: "Technical SEO",
          detail: "High-level technical optimization strategy",
        },
        {
          title: "Content Creation & Optimization",
          detail: "8 optimized pieces per month",
        },
      ],
      featured: true,
    },
    {
      name: "Enterprise Package",
      features: [
        {
          title: "SEO Audits",
          detail: "Extensive audit including competitor insights",
        },
        {
          title: "Keyword Research & Strategy",
          detail: "Tailored keyword strategy with 100+ terms",
        },
        { title: "On-Page SEO", detail: "Complete website optimization" },
        {
          title: "Off-Page SEO",
          detail: "Strategic outreach and digital PR campaigns",
        },
        {
          title: "Technical SEO",
          detail: "Custom solutions for enterprise-level platforms",
        },
        {
          title: "Content Creation & Optimization",
          detail: "Unlimited high-quality content delivery",
        },
      ],
      featured: false,
    },
  ];


  return (
    <>
      <div ref={sectionRef} className="w-full h-fullbg-black">
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
              E-commerce Website Design
            </h1>
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
                Is your business ranking on the first page of Google?
              </h1>
              <p className="mb-8 leading-relaxed">
                Even if it is, are you confident that it will stay there for long? Imagine having a business with an amazing business model ready to bring the competition a challenge but your business has no we of getting there without good rankings. Our SEO Specialists are aware of the fluctuating policies caused in the digital market, that is Search Engine Optimization. With growing competition all around you it is not a luxury but a necessity to have your business rank on top of google.
              </p>
              <div className="flex justify-center ">
                <Link href={`/Contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Connect Now
                </button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Get Free SEO Audit Report now!
              </h1>
              <p className="mb-8 leading-relaxed">
                Is your site well-optimized? Get an Audit.
                Allow us to tell you what your competitors are doing to stay on top of search and how you can outrank them with a concise yet effective plan.
              </p>
              <div className="flex justify-center">
                <Link href={`/Contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
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

        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Core SEO Services
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEOTpyes?.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="section2-img-left"
          className="w-full  text-white body-font"
        >
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                When to get SEO?

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  If any of these are the reason that sound familiar then you have come to the right company because when it comes to Search Engine Optimization (SEO), we are the masters of Google’s ever-changing algorithm. Our SEO Specialists are aware of the fluctuating policies caused in the digital market, that is Search Engine Optimization. With growing competition all around you it is not a luxury but a necessity to have your business rank on top of google.
                </p>

              </div>
              <Link href={`/Contact`}><button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                Book a Demo
              </button>
              </Link>
            </div>
          </div>
        </section>



        <section className="py-12 px-4 sm:px-6 lg:px-8bg-black">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border  border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    }bg-black`}
                >
                  <div
                    className={`p-6 ${pkg.featured
                      ? "bg-[#4F1DD7] text-white"
                      : " bg-[#D9345E] text-white"
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
                          <h3 className="font-medium text-white ">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full h-fullpx-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">FAQs: Your Questions Answered</h1>
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
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
                    <AccordionTrigger className=" text-white md:text-2xl lg:text-2xl hover:no-underline hover:text-pink-800 cursor-pointer">
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
