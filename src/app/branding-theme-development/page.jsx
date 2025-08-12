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
    title: "Achieve Higher Rankings with Expert Keyword Research & Strategy",
    dis: "Partner with Corecentrix Business Solutions, a results-driven SEO firm, to identify high-performing keywords specific to your industry. Our SEO professionals conduct thorough analysis of your current keyword rankings and develop a tailored strategy to elevate your website's visibility and attract qualified traffic.",
  },
  {
    title: "Boost Your Website's Authority with Strategic Link Building",
    dis: "Improve your search engine rankings and establish stronger domain authority through our specialized link building services. We focus on acquiring valuable backlinks from authoritative and relevant websites, enhancing your website's credibility and improving its position in search results.",
  },
  {
    title: "Optimize Site Health & Performance with Comprehensive Technical SEO",
    dis: "Enhance your website's speed, crawlability, and overall technical foundation with our expert technical SEO services. By addressing crucial back-end elements, we ensure search engines can efficiently index and understand your content, leading to improved rankings and a seamless user experience.",
  },
  {
    title: "Target Local Audiences with Effective Local SEO Optimization",
    dis: "Grow your local business and connect with high-intent customers in your service area through our proven local SEO strategies. We optimize your Google Business Profile (GBP) and manage your online reputation to enhance your local search presence and drive increased local engagement and conversions.",
  },
  {
    title: "Drive More Organic Traffic with Strategic On-Page SEO",
    dis: "Improve your website's relevance and attract a consistent flow of high-quality organic visitors with our comprehensive on-page SEO services. We meticulously optimize your content, meta elements, headings, and internal linking structure to align with search engine best practices, significantly enhancing your website's authority and driving improved search engine rankings.",
  },
  {
    title: "Strengthen Your Brand with Powerful Off-Page SEO Strategies",
    dis: "Build a strong online reputation and expand your digital footprint with our strategic off-page SEO services. Partner with our experienced SEO firm to build trust, establish industry leadership, and significantly increase your website's visibility and reach across the internet through strategic brand mentions and external signals.",
  },
  {
    title: "Maximize Your Amazon Sales with Expert Amazon SEO",
    dis: "Increase the visibility of your products on Amazon and connect with millions of eager buyers through our specialized Amazon SEO services. We optimize your product listings with relevant keywords, compelling descriptions, and high-quality images to rank higher in buyer searches and drive significant sales growth.",
  },
  {
    title: "Increase Conversions with Data-Driven Conversion Rate Optimization (CRO)",
    dis: "Transform more website visitors into valuable customers with Corecentrix's expert Conversion Rate Optimization (CRO) services. We leverage in-depth user behavior analysis and implement data-backed strategies to improve engagement, streamline your sales funnel, and significantly increase your conversion rates and overall online profitability.",
  },
  {
    title: "Boost Your E-commerce Growth with Strategic E-commerce SEO",
    dis: "Elevate the performance of your online store and foster enduring customer loyalty with our tailored e-commerce SEO strategies. We meticulously optimize your product pages, category pages, and website structure to deliver a seamless, user-friendly, and conversion-focused shopping experience, driving targeted traffic and significantly boosting online sales and customer retention.",
  },
];

const FAQS = [
  {
    title: "What Are the Key Elements of Successful Landing Page Optimization?",
    dis: "Successful landing page optimization involves a strategic approach to designing and refining key elements such as compelling and highly relevant content, a clear and intuitive user interface, prominent and persuasive call-to-action buttons, optimized forms, and robust SEO techniques, all meticulously crafted to maximize visitor conversion rates into valuable leads or loyal customers.",
  },
  {
    title: "Why Is Strategic Landing Page Optimization Crucial for Business Growth?",
    dis: "Investing in strategic landing page optimization is a fundamental pillar for aligning your online marketing endeavors with overarching business objectives and fostering sustainable growth. It yields significantly enhanced conversion rates, improved search engine rankings for strategically targeted keywords, and a substantial increase in the influx of qualified traffic, ultimately propelling superior business outcomes and a more robust long-term return on marketing investment.",
  },
  {
    title: "How Does Expert Landing Page Optimization Positively Impact My Website's SEO?",
    dis: "The implementation of expert landing page optimization intrinsically incorporates essential SEO best practices, such as the strategic integration of relevant and high-value keywords within the page content and meta descriptions, coupled with the establishment of a clean and semantically structured HTML framework, fast loading speeds, and mobile responsiveness. This synergistic approach enhances the visibility and appeal of your landing pages to search engines, directly contributing to improved rankings and a greater influx of organic traffic.",
  },
  {
    title: "What Is the Typical Timeframe to Observe Measurable Results from Landing Page Optimization?",
    dis: "The anticipated timeframe for observing measurable and significant results from dedicated landing page optimization initiatives can vary depending on several dynamic and interconnected factors, including the competitive intensity within your specific industry niche, the efficacy and sophistication of the optimization strategies meticulously implemented, the volume of traffic to the landing page, and the baseline performance metrics of your landing page prior to optimization. Generally, discernible improvements in website traffic volume and visitor conversion rates can be realistically expected within a period spanning from a few weeks to several months.",
  },
];

const packages = [
  {
    name: "Basic SEO Package",
    features: [
      { title: "Initial Website SEO Assessment", detail: "A foundational audit to understand your website's current SEO health and identify initial areas for improvement." },
      {
        title: "Targeted Keyword Research & Strategy (10 Keywords)",
        detail: "Identification of up to 10 primary keywords to focus initial optimization efforts and attract relevant traffic.",
      },
      { title: "Core On-Page SEO Implementation", detail: "Basic optimization of key on-page elements, including title tags, meta descriptions, and header tags." },
      { title: "Foundational Off-Page Link Building", detail: "Commencement of foundational link acquisition strategies to build initial domain authority and trust signals." },
      { title: "Basic Technical SEO Review & Recommendations", detail: "Identification and elementary recommendations for critical technical SEO issues impacting website performance and indexability." },
      { title: "Introductory Content Strategy Guidance", detail: "Initial recommendations for content development direction and primary topic focus to align with target keywords." },
    ],
    featured: false,
  },
  {
    name: "Standard SEO Package",
    features: [
      { title: "Comprehensive Website SEO Performance Analysis", detail: "A detailed evaluation of your website's overall SEO performance metrics and identification of key areas for strategic improvement and growth." },
      {
        title: "In-Depth Keyword Research & Strategic Targeting (25 Keywords)",
        detail: "Identification and strategic targeting of up to 25 relevant and competitive keywords to drive significant organic growth and attract a wider audience.",
      },
      { title: "Full-Scale On-Page SEO Optimization", detail: "Complete optimization of all crucial on-page ranking factors, including content optimization, internal linking, and image optimization." },
      { title: "Strategic Off-Page Link Building & Targeted Outreach", detail: "Implementation of targeted link building and outreach campaigns to build substantial domain authority and improve search visibility across relevant platforms." },
      { title: "Complete Technical SEO Audit & Remediation", detail: "Thorough identification and effective resolution of technical SEO challenges hindering website performance, crawlability, and indexability." },
      {
        title: "Strategic Content Creation & Optimization (4 Assets/Month)",
        detail: "Creation and optimization of four strategically aligned, SEO-focused content assets per month designed to attract and engage your target audience and drive conversions through valuable information.",
      },
    ],
    featured: false,
  },
  {
    name: "Premium SEO Package",
    features: [
      { title: "Advanced Technical & Site Speed Optimization Audit", detail: "A thorough audit focusing on technical SEO excellence and optimal website loading speed for enhanced user experience, improved search engine rankings, and better conversion rates." },
      {
        title: "Dominant Keyword Research & Comprehensive Market Strategy (50 Keywords)",
        detail: "Identification and strategic targeting of up to 50 high-impact keywords to achieve maximum market visibility and expansive organic reach within your industry landscape.",
      },
      { title: "Advanced On-Page SEO Optimization Techniques", detail: "Implementation of advanced and sophisticated on-page optimization methodologies for superior search engine performance, enhanced user engagement, and increased content relevance." },
      { title: "High-Impact & Targeted Link Building Initiatives", detail: "Aggressive and precisely targeted link acquisition and outreach strategies focused on securing high-authority backlinks and valuable referral traffic from relevant industry sources." },
      { title: "Advanced Technical SEO Solutions & Proactive Implementation", detail: "Implementation of complex technical SEO solutions for peak website performance, optimal search engine indexability, enhanced security protocols, and improved mobile experience." },
      {
        title: "High-Quality Content Creation & Strategic Optimization (8 Assets/Month)",
        detail: "Creation and optimization of eight premium, strategically aligned SEO-focused content assets per month designed to establish thought leadership, attract a wider audience, and drive significant conversions through authoritative and engaging information.",
      },
    ],
    featured: true,
  },
  {
    name: "Enterprise SEO Package",
    features: [
      { title: "Comprehensive SEO Audit & Deep Competitive Landscape Analysis", detail: "An in-depth analysis of your website's SEO standing and a thorough examination of key industry competitors to identify strategic advantages and untapped opportunities for market leadership." },
      {
        title: "Customized, High-ROI Keyword Strategy & Market Leadership Plan (100+ Keywords)",
        detail: "Development of a bespoke, high-ROI keyword strategy targeting 100+ high-potential keywords to achieve and maintain sustained market leadership and maximize organic traffic from diverse search queries.",
      },
      { title: "Complete Website On-Page SEO Overhaul & Advanced Optimization", detail: "Full-scale optimization of all website content and structural elements, employing advanced techniques for maximum search engine visibility, user engagement, and content relevance across all devices." },
      { title: "High-Authority Link Building & Strategic PR-Driven Outreach", detail: "Implementation of advanced outreach and strategic public relations initiatives to secure high-quality, authoritative backlinks and build significant brand recognition and trust within your industry through strategic partnerships and media placements." },
      { title: "Tailored Technical SEO Solutions & Continuous Optimization", detail: "Development and ongoing implementation of custom technical SEO solutions meticulously designed for your unique website and business needs to ensure optimal performance, scalability, security, and seamless user experience across all platforms." },
      {
        title: "Unlimited Strategic Content Creation & Comprehensive Optimization",
        detail: "Ongoing creation and comprehensive optimization of a limitless volume of content strategically aligned with your overarching SEO objectives and market dominance goals to continuously attract, engage, and convert your target audience at scale across all stages of the buyer's journey.",
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
             Branding Theme Development
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
