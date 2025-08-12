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
    title: "Targeted Keyword Research and Strategy",
    dis: "Gain a competitive edge with our in-depth keyword research and strategic planning. Our SEO specialists analyze your industry landscape and current keyword performance to identify high-potential search terms that will drive relevant traffic and improve your rankings.",
  },
  {
    title: "Strategic Link Building for Authority",
    dis: "Elevate your website's authority and search engine trust with our strategic link building approach. We secure valuable backlinks from reputable and relevant sources, understanding that quality over quantity is key to achieving sustainable ranking improvements.",
  },
  {
    title: "Comprehensive Technical SEO Services",
    dis: "Ensure your website's technical health is optimized for search engine crawlers and user experience. Our technical SEO services address site speed, mobile responsiveness, indexability, and other crucial factors that impact your website's ability to rank effectively.",
  },
  {
    title: "Local SEO Optimization for Local Visibility",
    dis: "Connect with local customers actively searching for your services. Our local SEO strategies focus on optimizing your Google Business Profile (GBP), enhancing local citations, and managing your online reputation to increase your visibility within your target geographic area.",
  },
  {
    title: "Effective On-Page SEO for Relevance",
    dis: "Improve your website's content and structure to align perfectly with target keywords and user search intent. Our on-page SEO services ensure that your website's elements are optimized to communicate relevance and value to both search engines and your audience.",
  },
  {
    title: "Strategic Off-Page SEO for Brand Building",
    dis: "Extend your online influence and build a strong brand presence with our strategic off-page SEO efforts. We focus on activities that enhance your website's reputation and visibility beyond your own site, establishing you as a trusted authority in your industry.",
  },
  {
    title: "Amazon SEO to Maximize Product Discovery",
    dis: "Increase the discoverability of your products on Amazon's vast marketplace. Our specialized Amazon SEO services optimize your product listings to rank higher in Amazon searches, connecting you with millions of potential buyers actively looking for products like yours.",
  },
  {
    title: "Data-Driven Conversion Rate Optimization (CRO)",
    dis: "Transform more website visitors into paying customers with our data-driven Conversion Rate Optimization (CRO) services. We analyze user behavior and implement strategic changes to your website to improve conversion rates and maximize your online revenue and customer lifetime value.",
  },
  {
    title: "E-commerce SEO Solutions for Online Growth",
    dis: "Drive sustainable growth for your online store with our tailored e-commerce SEO solutions. We focus on optimizing your product pages, category pages, and overall website structure to attract qualified traffic, improve user experience, and increase online sales and customer retention.",
  },
];

const FAQS = [
  {
    title: "What Does Landing Page Optimization Entail?",
    dis: "Landing page optimization is the systematic process of enhancing the various elements of a specific webpage (the landing page) to improve its effectiveness in achieving a desired outcome, such as generating leads or completing sales. This involves refining content, visual design, calls-to-action, and underlying SEO elements to create a more compelling and user-friendly experience.",
  },
  {
    title: "Why is Investing in Landing Page Optimization Crucial for Business Success?",
    dis: "Strategically optimizing your landing pages ensures they are highly aligned with your marketing campaigns and the specific needs of your target audience. This focused approach leads to significantly improved conversion rates, a higher return on your advertising spend, better organic search engine performance due to increased engagement, and ultimately, a more efficient path to achieving your business objectives.",
  },
  {
    title: "In What Ways Does Landing Page Optimization Impact My Website's SEO?",
    dis: "Effective landing page optimization directly contributes to stronger SEO by incorporating relevant keywords naturally within the content and meta information, improving user engagement metrics (like bounce rate and time on page), and providing a seamless and valuable user experience. These factors signal to search engines that your landing page is a relevant and high-quality resource, leading to potential improvements in organic rankings and increased visibility.",
  },
  {
    title: "What is a Realistic Timeline for Seeing Results from Landing Page Optimization Efforts?",
    dis: "The timeframe for observing measurable results from landing page optimization can vary based on several influencing factors, including the current traffic volume to your landing page, the scope and effectiveness of the optimization strategies implemented, the competitive intensity of your industry, and the responsiveness of search engine algorithms. Generally, you might begin to see positive shifts in traffic, user engagement, and conversion metrics within a few weeks to a couple of months of consistent optimization and performance monitoring.",
  },
];

const packages = [
  {
    name: "Basic SEO Package - Essential Optimization",
    features: [
      { title: "Initial SEO Site Audit", detail: "A foundational review of your website's SEO health." },
      {
        title: "Core Keyword Research",
        detail: "Identification of up to 10 primary target keywords.",
      },
      { title: "On-Page Element Optimization", detail: "Optimization of meta tags and basic content." },
      { title: "Basic Link Profile Building", detail: "Initial directory submissions and citation work." },
      { title: "Fundamental Technical SEO Check", detail: "Identification of key technical SEO issues." },
      { title: "Introductory Content Guidance", detail: "General recommendations for content improvement." },
    ],
    featured: false,
  },
  {
    name: "Standard SEO Package - Performance Enhancement",
    features: [
      { title: "Comprehensive SEO Audit & Analysis", detail: "Detailed website analysis and competitor landscape review." },
      {
        title: "Strategic Keyword Research & Mapping",
        detail: "Targeting up to 25 relevant keywords with page-level mapping.",
      },
      { title: "Full On-Page Optimization Implementation", detail: "In-depth content, header, and image optimization." },
      { title: "Targeted Link Building Strategies", detail: "Guest blogging outreach and resource link acquisition." },
      { title: "Technical SEO Implementation & Improvements", detail: "Site speed optimization and mobile-friendliness enhancements." },
      {
        title: "Content Creation & Optimization (4 Pieces)",
        detail: "Creation and optimization of up to four blog posts or articles per month.",
      },
    ],
    featured: false,
  },
  {
    name: "Premium SEO Package - Maximum Impact",
    features: [
      { title: "Advanced SEO Audit & Competitive Intelligence", detail: "Thorough technical, content, and user experience audit with detailed competitor insights." },
      {
        title: "Extensive Keyword Portfolio Development",
        detail: "Targeting up to 50 high-potential keywords, including long-tail variations.",
      },
      { title: "Advanced On-Page SEO & Schema Markup", detail: "Implementation of structured data and advanced on-page techniques." },
      { title: "Aggressive & High-Authority Link Building", detail: "Focus on acquiring backlinks from authoritative and relevant websites." },
      { title: "Comprehensive Technical SEO Optimization", detail: "Optimization of site architecture, crawlability, and indexation." },
      {
        title: "High-Quality Content Creation & Optimization (8 Pieces)",
        detail: "Creation and optimization of up to eight in-depth and engaging content pieces per month.",
      },
    ],
    featured: true,
  },
  {
    name: "Enterprise SEO Package - Custom Growth Solutions",
    features: [
      { title: "Custom SEO Audit & Strategic Roadmap", detail: "Tailored audit and a bespoke SEO strategy aligned with your specific business objectives." },
      {
        title: "Scalable Keyword Strategy & Optimization",
        detail: "Development of a custom keyword strategy targeting 100+ keywords with ongoing optimization.",
      },
      { title: "Holistic On-Page SEO Overhaul", detail: "Complete optimization of all on-page elements for maximum relevance and user engagement." },
      { title: "Advanced Off-Page SEO & Digital PR", detail: "Strategic outreach, PR initiatives, and brand-building campaigns." },
      { title: "Tailored Technical SEO Architecture & Solutions", detail: "Custom technical solutions to address complex website infrastructure needs." },
      {
        title: "Unlimited Content Creation & Optimization",
        detail: "Ongoing content strategy, creation, and optimization across various content formats.",
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
             Company Values
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
