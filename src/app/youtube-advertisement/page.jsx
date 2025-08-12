"use client";

import React, {useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Dev//Components/ui/accordion";
import BusinessOperations from "@/Dev//Components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

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
    title: "Data-Driven Keyword Research & Strategy",
    dis: "Maximize your website's visibility and attract qualified traffic with our expert keyword research and strategy services. Our SEO specialists conduct in-depth analysis of your industry and target audience to identify high-potential search terms. We also analyze your current keyword performance to develop a tailored strategy for improved search engine positioning and increased organic traffic from relevant searches.",
  },
  {
    title: "Strategic Link Building for Authority & Ranking",
    dis: "Elevate your website's authority and achieve higher search engine rankings through our strategic link building services. We focus on acquiring valuable backlinks from reputable and relevant websites, understanding that strong external links are a crucial signal of authority and play a significant role in improving your SEO performance and establishing trust with search engines and your target audience.",
  },
  {
    title: "Comprehensive Technical SEO Optimization",
    dis: "Ensure a solid technical foundation for optimal search engine crawlability, indexability, and a superior user experience. Our technical SEO services address vital aspects such as site speed, mobile-friendliness, website architecture, schema markup, and crawl error resolution. By optimizing these behind-the-scenes elements, we make it easier for search engines to understand and rank your content effectively, leading to improved visibility and user satisfaction.",
  },
  {
    title: "Localized SEO Strategies for Local Business Growth",
    dis: "Attract more customers in your local area with our targeted local SEO services. We optimize your Google Business Profile (GBP), manage local citations across relevant online directories, and implement reputation management strategies to increase your visibility in local search results. This focused approach helps you connect with high-intent local customers actively searching for your products or services in your specific geographic area.",
  },
  {
    title: "Effective On-Page SEO Optimization",
    dis: "Improve your website's content and structure to align perfectly with target keywords and search engine best practices. Our on-page SEO services ensure that all visible content and underlying HTML elements are optimized to clearly communicate relevance and value to both search engines and your target audience. This optimization enhances your website's ability to rank higher for relevant searches and attract more qualified organic traffic.",
  },
  {
    title: "Strategic Off-Page SEO for Brand Authority & Visibility",
    dis: "Extend your online influence and build a strong brand presence beyond your website with our strategic off-page SEO efforts. We focus on building your website's authority and reputation through various external strategies, including high-quality content promotion, digital PR, brand mentions, and social signals. By establishing your industry expertise and enhancing your overall online visibility, we improve search engine trust and drive more relevant traffic to your site.",
  },
  {
    title: "Amazon SEO Optimization to Maximize Product Discovery",
    dis: "Increase the discoverability of your products on Amazon's vast marketplace and connect with millions of active buyers ready to make a purchase. Our specialized Amazon SEO services optimize your product listings with relevant keywords, compelling descriptions, high-quality images, and backend keywords to improve their ranking within Amazon's internal search results. This optimization drives more traffic to your product pages and ultimately boosts your sales on the platform.",
  },
  {
    title: "Data-Driven Conversion Rate Optimization (CRO)",
    dis: "Maximize your website's effectiveness in turning valuable visitors into loyal customers with our data-driven Conversion Rate Optimization (CRO) services. We analyze user behavior and implement strategic changes to your website to improve key conversion metrics such as click-through rates, bounce rates, and goal completions. Our focus is on creating a more user-friendly, persuasive, and effective online experience that guides visitors towards desired actions and increases your online revenue.",
  },
  {
    title: "E-commerce SEO Solutions for Sustainable Online Growth",
    dis: "Drive sustainable growth for your online store with our tailored e-commerce SEO solutions. We focus on optimizing your product pages, category pages, website structure, and user experience to attract qualified traffic, improve search engine rankings, increase online sales, and enhance customer retention in the competitive e-commerce landscape. Our strategies ensure your online store is easily discoverable by potential buyers and provides a convenient and seamless shopping experience.",
  },
];

const FAQS = [
  {
    title: "What Exactly is Landing Page Optimization?",
    dis: "Landing page optimization is the strategic process of designing and refining specific web pages to maximize their effectiveness in converting visitors into valuable leads or paying customers. This involves enhancing key elements such as compelling content, intuitive layout, persuasive call-to-action buttons, and strategic SEO implementation to significantly improve user experience and drive measurable, positive results for your business.",
  },
  {
    title: "Why is Landing Page Optimization Crucial for My Business?",
    dis: "Optimizing your landing pages ensures they are precisely aligned with your overarching business goals and the specific needs and expectations of your target audience. This critical alignment can dramatically increase conversion rates, improve your website's search engine rankings by enhancing user engagement, and drive more highly qualified traffic to your site, ultimately leading to superior overall business performance and a stronger return on your marketing investments.",
  },
  {
    title: "How Does Landing Page Optimization Impact SEO?",
    dis: "Effective landing page optimization directly contributes to improved SEO by incorporating fundamental best practices. This includes the strategic use of keyword-rich and relevant content, optimized meta tags and descriptions for better search engine visibility, a user-friendly page design that encourages longer engagement times, and a clean, well-structured HTML framework that search engines can easily understand. These elements collectively enhance your landing page's visibility in search engine results, leading to higher organic rankings for relevant search queries and a greater influx of valuable organic traffic to your website.",
  },
  {
    title: "What is the Expected Timeframe to See Results from Landing Page Optimization?",
    dis: "The timeframe for observing tangible results from landing page optimization can vary depending on several dynamic factors, including the competitive landscape of your industry, the effectiveness and comprehensiveness of the optimization strategies employed, and the existing performance metrics of your landing page before optimization. Generally, you can anticipate starting to see noticeable improvements in website traffic and conversion rates within a period ranging from a few weeks to a few months of consistent and well-executed optimization efforts.",
  },
];

const packages = [
  {
    name: "Basic Package",
    features: [
      { title: "SEO Audits", detail: "Basic site audit" },
      {
        title: "Keyword Research & Strategy",
        detail: "10 targeted keywords",
      },
      { title: "On-Page SEO", detail: "Meta tags optimization" },
      { title: "Off-Page SEO", detail: "Basic link building" },
      { title: "Technical SEO", detail: "Basic technical fixes" },
      { title: "Content Creation & Optimization", detail: "" },
    ],
    featured: false,
  },
  {
    name: "Standard Package",
    features: [
      { title: "SEO Audits", detail: "Comprehensive site audit" },
      {
        title: "Keyword Research & Strategy",
        detail: "25 targeted keywords",
      },
      { title: "On-Page SEO", detail: "Full on-page optimization" },
      { title: "Off-Page SEO", detail: "Moderate link building" },
      { title: "Technical SEO", detail: "Full technical audit & fixes" },
      {
        title: "Content Creation & Optimization",
        detail: "4 pieces per month",
      },
    ],
    featured: false,
  },
  {
    name: "Premium Package",
    features: [
      { title: "SEO Audits", detail: "Full technical and UK audit" },
      {
        title: "Keyword Research & Strategy",
        detail: "50 targeted keywords",
      },
      { title: "On-Page SEO", detail: "Advanced on-page techniques" },
      { title: "Off-Page SEO", detail: "Aggressive link building" },
      { title: "Technical SEO", detail: "Advanced technical optimization" },
      {
        title: "Content Creation & Optimization",
        detail: "8 pieces per month",
      },
    ],
    featured: true,
  },
  {
    name: "Enterprise Package",
    features: [
      { title: "SEO Audits", detail: "In-depth audit + competitor analysis" },
      {
        title: "Keyword Research & Strategy",
        detail: "Custom strategy with 100+ keywords",
      },
      { title: "On-Page SEO", detail: "Complete on-page overhaul" },
      { title: "Off-Page SEO", detail: "Advanced outreach + PR strategies" },
      { title: "Technical SEO", detail: "Custom technical solutions" },
      {
        title: "Content Creation & Optimization",
        detail: "Unlimited content creation",
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
             Youtube Advertisement
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
