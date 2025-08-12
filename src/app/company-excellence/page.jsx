"use client";

import React, {useRef } from "react";
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
    title: "Keyword Research and Strategy Services",
    dis: "Unlock your website's ranking potential with our expert keyword research and strategy. We identify the search terms your target audience uses, analyze your current rankings, and develop a data-driven plan to achieve higher visibility in search results.",
  },
  {
    title: "High-Quality Link Building Services",
    dis: "Boost your website's authority and search engine rankings with our strategic link building services. We focus on acquiring valuable backlinks from reputable and relevant websites, understanding that quality links are crucial for improved online presence.",
  },
  {
    title: "Technical SEO Audit and Optimization",
    dis: "Improve your website's foundation for better search engine crawling and indexing. Our technical SEO services address crucial backend elements like site speed, mobile-friendliness, and site architecture to enhance overall SEO performance and user experience.",
  },
  {
    title: "Local SEO Services to Reach Local Customers",
    dis: "Attract more local customers with our targeted local SEO services. We optimize your Google Business Profile (formerly GMB), manage your online reputation, and implement local search strategies to increase your visibility among high-intent local consumers.",
  },
  {
    title: "On-Page SEO Optimization for Higher Rankings",
    dis: "Enhance your website's content and structure to align with search engine best practices and target keywords. Our on-page SEO services ensure your website is relevant, user-friendly, and optimized for improved search engine rankings and organic traffic.",
  },
  {
    title: "Off-Page SEO for Brand Authority and Visibility",
    dis: "Build a strong brand reputation and expand your online reach with our effective off-page SEO strategies. We help you establish industry authority through various external efforts, increasing your website's visibility and credibility.",
  },
  {
    title: "Amazon SEO Optimization to Increase Product Visibility",
    dis: "Maximize your product visibility on Amazon and connect with millions of eager buyers. Our Amazon SEO services optimize your product listings to improve search rankings within the Amazon marketplace and drive more sales.",
  },
  {
    title: "Conversion Rate Optimization (CRO) to Maximize Results",
    dis: "Turn more website visitors into valuable customers with our data-driven Conversion Rate Optimization (CRO) services. We analyze user behavior and implement strategies to improve your website's effectiveness in achieving your business goals and increasing customer lifetime value.",
  },
  {
    title: "E-commerce SEO Services to Drive Online Sales",
    dis: "Improve your online store's visibility in search engines and provide a seamless shopping experience for your customers. Our e-commerce SEO services focus on attracting and retaining customers, ultimately driving more sales and increasing customer loyalty.",
  },
];

const FAQS = [
  {
    title: "What is Landing Page Optimization and Why is it Important?",
    dis: "Landing page optimization is the process of designing and improving specific web pages (landing pages) to increase the percentage of visitors who complete a desired action, such as filling out a form or making a purchase. It's crucial for maximizing the effectiveness of your marketing campaigns and improving your return on investment by converting more traffic into leads or customers.",
  },
  {
    title: "Why is Landing Page Optimization Important for My Business Growth?",
    dis: "Optimizing your landing pages ensures they are highly relevant to your marketing efforts and target audience. This leads to significantly higher conversion rates, improved quality scores in paid advertising, better organic search engine rankings due to increased engagement, and ultimately, more qualified leads and increased revenue for your business.",
  },
  {
    title: "How Does Effective Landing Page Optimization Impact SEO Performance?",
    dis: "Well-optimized landing pages contribute positively to your SEO efforts by incorporating relevant keywords, providing high-quality and engaging content, improving user experience metrics like bounce rate and time on page, and encouraging conversions. Search engines recognize these factors, leading to improved visibility and higher organic rankings for your landing pages and overall website.",
  },
  {
    title: "What is the Typical Timeframe to See Results from Landing Page Optimization?",
    dis: "The time it takes to see tangible results from landing page optimization can vary depending on several factors, including the volume of traffic to your landing page, the extent of the optimizations implemented, the competitiveness of your industry, and the search engine algorithms' updates. Generally, you might start observing improvements in traffic, engagement, and conversion rates within a few weeks to a few months of implementing effective optimization strategies and consistently monitoring performance.",
  },
];

const packages = [
  {
    name: "Basic SEO Package - Foundational Optimization",
    features: [
      { title: "Initial SEO Audit", detail: "Basic website health check" },
      {
        title: "Keyword Research & Strategy",
        detail: "Identification of up to 10 target keywords",
      },
      { title: "On-Page SEO Fundamentals", detail: "Meta tags and basic content optimization" },
      { title: "Basic Off-Page SEO", detail: "Directory and citation building" },
      { title: "Technical SEO Review", detail: "Initial technical issue identification" },
      { title: "Content Recommendations", detail: "General content suggestions" },
    ],
    featured: false,
  },
  {
    name: "Standard SEO Package - Enhanced Optimization",
    features: [
      { title: "Comprehensive SEO Audit", detail: "In-depth site analysis and competitor overview" },
      {
        title: "Strategic Keyword Research & Mapping",
        detail: "Targeting up to 25 relevant keywords with page mapping",
      },
      { title: "Full On-Page SEO Implementation", detail: "Content optimization, header tags, image alt text" },
      { title: "Moderate Link Building Outreach", detail: "Guest post outreach and resource link building" },
      { title: "Technical SEO Optimization", detail: "Site speed improvements and mobile-friendliness checks" },
      {
        title: "Content Creation & Optimization",
        detail: "Creation and optimization of up to 4 blog posts per month",
      },
    ],
    featured: false,
  },
  {
    name: "Premium SEO Package - Advanced Performance",
    features: [
      { title: "Advanced SEO Audit & Competitive Analysis", detail: "Detailed technical, content, and UX audit with thorough competitor analysis" },
      {
        title: "Extensive Keyword Research & Strategy",
        detail: "Targeting up to 50 high-value keywords and long-tail variations",
      },
      { title: "Advanced On-Page SEO Techniques", detail: "Schema markup implementation and structured data optimization" },
      { title: "Aggressive and Strategic Link Building", detail: "High-authority backlink acquisition and content promotion" },
      { title: "Comprehensive Technical SEO Optimization", detail: "Site architecture optimization and crawl error resolution" },
      {
        title: "High-Quality Content Creation & Optimization",
        detail: "Creation and optimization of up to 8 in-depth articles per month",
      },
    ],
    featured: true,
  },
  {
    name: "Enterprise SEO Package - Custom & Scalable Solutions",
    features: [
      { title: "In-Depth SEO Audit and Custom Strategy", detail: "Tailored audit with bespoke strategy development based on your unique business goals" },
      {
        title: "Custom Keyword Strategy & Ongoing Optimization",
        detail: "Identification of 100+ target keywords with continuous monitoring and refinement",
      },
      { title: "Complete On-Page SEO Overhaul & Optimization", detail: "Holistic website optimization for maximum relevance" },
      { title: "Advanced Off-Page SEO & PR Strategies", detail: "Strategic outreach, PR campaigns, and brand building initiatives" },
      { title: "Custom Technical SEO Solutions & Implementation", detail: "Tailored technical solutions to address complex website issues" },
      {
        title: "Unlimited Content Creation & Comprehensive Optimization",
        detail: "Ongoing content strategy, creation, and optimization across various formats",
      },
    ],
    featured: false,
  },
];

  return (
    <>
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
             Company Excellence
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



        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border  border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    }`}
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
        <ServiceForm/>
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
