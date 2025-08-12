"use client";
import WhyChooseus from "@/Dev//Components/WhyChooseus";
import React, { useEffect, useRef } from "react";
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
    title: "Boost Your Rankings with Expert Keyword Research & Strategy",
    dis: "Partner with Corecentrix Business Solutions, an experienced SEO firm, to identify the most effective search terms for your industry. Our SEO specialists analyze your current keyword performance and develop a data-driven strategy to achieve higher rankings and attract targeted traffic.",
  },
  {
    title: "Increase Website Authority with High-Quality Link Building",
    dis: "Enhance your search engine rankings through our strategic link building services. We focus on acquiring authoritative and relevant backlinks from reputable websites, boosting your website's credibility and improving its position in search results.",
  },
  {
    title: "Improve Site Performance with Comprehensive Technical SEO",
    dis: "Optimize your website's speed, crawlability, and overall technical health with our specialized SEO services. By addressing back-end issues, we ensure search engines can easily index and understand your content, leading to improved rankings and user experience.",
  },
  {
    title: "Attract Local Customers with Targeted Local SEO Services",
    dis: "Grow your local business with our effective local SEO strategies. We optimize your Google Business Profile (GBP) and manage your online presence to attract high-intent customers in your service area, increasing your local visibility and customer base.",
  },
  {
    title: "Drive Organic Traffic with Strategic On-Page SEO Optimization",
    dis: "Improve your website's relevance and attract more qualified organic visitors with our comprehensive on-page SEO services. We optimize your content, meta tags, and website structure to align with search engine best practices, enhancing your website's authority and rankings.",
  },
  {
    title: "Build Brand Authority with Effective Off-Page SEO",
    dis: "Strengthen your brand's online reputation and expand your reach with our strategic off-page SEO services. Partner with our experienced SEO firm to build trust, establish industry leadership, and increase your website's visibility across the internet.",
  },
  {
    title: "Maximize Product Visibility on Amazon with Optimized Amazon SEO",
    dis: "Increase the discoverability of your products on Amazon with our specialized Amazon SEO services. We optimize your product listings to rank higher in relevant searches, connecting you with millions of eager buyers and driving sales.",
  },
  {
    title: "Increase Conversions and Revenue with Data-Driven CRO",
    dis: "Transform more website visitors into paying customers with Corecentrix's expert Conversion Rate Optimization (CRO) services. We analyze user behavior and implement data-backed strategies to improve engagement, optimize your sales funnel, and increase your online revenue.",
  },
  {
    title: "Enhance Your Online Store with Strategic E-commerce SEO",
    dis: "Improve the performance of your e-commerce website and boost customer retention with our tailored e-commerce SEO strategies. We optimize your product pages and website structure to provide a seamless and user-friendly shopping experience, driving traffic and increasing sales.",
  },
];

const FAQS = [
  {
    title: "What Are the Key Components of Successful Landing Page Optimization?",
    dis: "Successful landing page optimization involves a strategic approach to designing and refining various elements, including compelling and relevant content, a clear and user-friendly layout, prominent call-to-action buttons, and effective SEO techniques, all aimed at maximizing visitor conversion rates.",
  },
  {
    title: "Why Is Investing in Landing Page Optimization Crucial for Business Growth?",
    dis: "Investing in landing page optimization is vital for aligning your marketing campaigns with your core business objectives. It leads to significantly improved conversion rates, enhanced search engine rankings for targeted keywords, and a higher influx of qualified traffic, ultimately driving better overall business outcomes and a stronger return on investment.",
  },
  {
    title: "How Does Strategic Landing Page Optimization Improve My Website's SEO?",
    dis: "Implementing a well-thought-out landing page optimization strategy includes the integration of essential SEO best practices, such as incorporating relevant keywords naturally within the content and meta descriptions, as well as ensuring a clean and well-structured HTML code. This makes your landing pages more visible and appealing to search engines, resulting in improved rankings and increased organic traffic.",
  },
  {
    title: "What Is the Typical Timeframe to See Measurable Results from Landing Page Optimization?",
    dis: "The time required to observe measurable results from landing page optimization efforts can vary depending on several influencing factors, including the level of competition within your specific industry, the effectiveness and sophistication of the optimization techniques employed, and the initial performance benchmarks of your landing page. Generally, noticeable improvements in website traffic and visitor conversion rates can be expected within a period ranging from a few weeks to several months.",
  },
];

const packages = [
  {
    name: "Essential SEO Package",
    features: [
      { title: "Initial SEO Website Audit", detail: "A foundational analysis of your website's SEO performance" },
      {
        title: "Targeted Keyword Research & Basic Strategy",
        detail: "Identification of up to 10 key search terms for optimization",
      },
      { title: "Core On-Page SEO Optimization", detail: "Implementation of fundamental on-page elements and meta tag optimization" },
      { title: "Initial Off-Page Link Building", detail: "Commencement of basic link acquisition activities" },
      { title: "Fundamental Technical SEO Review", detail: "Identification and basic fixes for critical technical issues" },
      { title: "Basic Content Strategy Guidance", detail: "Initial recommendations for content development" },
    ],
    featured: false,
  },
  {
    name: "Advanced SEO Package",
    features: [
      { title: "Comprehensive Website SEO Analysis", detail: "A detailed evaluation of your website's overall SEO health" },
      {
        title: "In-Depth Keyword Research & Strategic Targeting",
        detail: "Identification and targeting of up to 25 high-potential keywords",
      },
      { title: "Full On-Page SEO Implementation", detail: "Complete optimization of all relevant on-page factors" },
      { title: "Strategic Off-Page Link Building Campaigns", detail: "Implementation of targeted link building and outreach efforts" },
      { title: "Complete Technical SEO Audit & Implementation", detail: "Thorough identification and resolution of technical SEO challenges" },
      {
        title: "Strategic Content Creation & Optimization (4 Assets)",
        detail: "Creation and optimization of four SEO-focused content assets per month",
      },
    ],
    featured: false,
  },
  {
    name: "Premium SEO Package",
    features: [
      { title: "Extensive Technical & Performance SEO Audit", detail: "A thorough audit focusing on technical SEO and website speed optimization" },
      {
        title: "Dominant Keyword Research & Comprehensive Strategy",
        detail: "Identification and strategic targeting of up to 50 high-value keywords",
      },
      { title: "Advanced On-Page SEO Optimization Techniques", detail: "Implementation of sophisticated on-page optimization methodologies" },
      { title: "High-Impact & Targeted Link Building", detail: "Aggressive and strategic link acquisition and outreach initiatives" },
      { title: "Advanced Technical SEO Solutions & Implementation", detail: "Implementation of complex technical SEO solutions for optimal performance" },
      {
        title: "High-Quality Content Creation & Optimization (8 Assets)",
        detail: "Creation and optimization of eight premium SEO-focused content assets per month",
      },
    ],
    featured: true,
  },
  {
    name: "Enterprise-Grade SEO Package",
    features: [
      { title: "In-Depth SEO Audit & Competitive Intelligence", detail: "A comprehensive analysis of your website and key industry competitors" },
      {
        title: "Customized Keyword Strategy for Maximum ROI",
        detail: "Development of a bespoke keyword strategy targeting 100+ high-opportunity keywords",
      },
      { title: "Complete Website On-Page SEO Overhaul", detail: "Full-scale optimization of all website content and structural elements" },
      { title: "High-Authority Link Building & Strategic PR Outreach", detail: "Implementation of advanced outreach and public relations strategies for high-quality backlinks" },
      { title: "Tailored Technical SEO Solutions & Ongoing Optimization", detail: "Development and implementation of custom technical SEO solutions designed for your unique needs" },
      {
        title: "Unlimited Strategic Content Creation & Optimization",
        detail: "Ongoing creation and optimization of content aligned with your overarching SEO strategy",
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
               B2B E-commerce <br/>  enabling 
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
