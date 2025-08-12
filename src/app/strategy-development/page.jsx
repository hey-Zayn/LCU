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

  // High-volume, low-difficulty SEO keywords for strategy development
  // business strategy consulting, strategic planning services, business growth strategy, digital transformation consulting, market entry strategy, competitive analysis, business process optimization, risk management consulting, corporate strategy, innovation strategy

  const STRATEGY_SERVICES = [
    {
      title: "Business Strategy Consulting",
      dis: "Unlock your company's full potential with expert business strategy consulting from Forward Solutions. Our proven methodologies help you achieve sustainable growth, maximize profitability, and outperform competitors. Visit https://www.forwardsols.com/ for a free consultation.",
    },
    {
      title: "Strategic Planning Services",
      dis: "Our strategic planning services empower your organization to set clear objectives, identify growth opportunities, and create actionable roadmaps for success. We leverage data-driven insights to ensure your business stays ahead in a competitive market.",
    },
    {
      title: "Digital Transformation Consulting",
      dis: "Transform your business with our digital transformation consulting. We help you implement cutting-edge technologies, streamline operations, and enhance customer experiences for measurable business growth.",
    },
    {
      title: "Market Entry Strategy",
      dis: "Expand into new markets with confidence. Our market entry strategy experts conduct in-depth market research, competitor analysis, and risk assessment to ensure your business succeeds in new territories.",
    },
    {
      title: "Business Process Optimization",
      dis: "Increase efficiency and reduce costs with business process optimization. We analyze your workflows, eliminate bottlenecks, and implement best practices for operational excellence.",
    },
    {
      title: "Competitive Analysis & Benchmarking",
      dis: "Stay ahead of the competition with comprehensive competitive analysis and benchmarking. We identify your strengths, weaknesses, and market opportunities to help you build a winning strategy.",
    },
    {
      title: "Risk Management Consulting",
      dis: "Protect your business from uncertainty with our risk management consulting. We develop robust risk mitigation strategies to safeguard your assets and ensure long-term stability.",
    },
    {
      title: "Corporate Strategy Development",
      dis: "Align your business units and resources with your long-term vision. Our corporate strategy development services drive organizational growth, mergers & acquisitions, and sustainable success.",
    },
    {
      title: "Innovation Strategy",
      dis: "Foster a culture of innovation and stay ahead of industry trends. We help you develop and implement innovation strategies that drive product development and market leadership.",
    },
  ];

  const FAQS = [
    {
      title: "What is business strategy consulting?",
      dis: "Business strategy consulting involves expert analysis and guidance to help organizations define their vision, set achievable goals, and create actionable plans for growth and profitability. At Forward Solutions, we tailor strategies to your unique business needs. Learn more at https://www.forwardsols.com/.",
    },
    {
      title: "How can strategic planning services benefit my business?",
      dis: "Strategic planning services provide a clear roadmap for your business, helping you prioritize initiatives, allocate resources efficiently, and adapt to market changes. This leads to improved performance and long-term success.",
    },
    {
      title: "Why is digital transformation important for business growth?",
      dis: "Digital transformation enables businesses to leverage technology for improved efficiency, customer engagement, and innovation. It is essential for staying competitive in today's fast-paced digital economy.",
    },
    {
      title: "When should I invest in a market entry strategy?",
      dis: "Invest in a market entry strategy when expanding into new regions or launching new products. Our experts at Forward Solutions ensure your entry is data-driven, risk-mitigated, and positioned for success.",
    },
  ];

  const packages = [
    {
      name: "Starter Strategy Package",
      features: [
        { title: "Initial Business Assessment", detail: "Comprehensive review of your current business model and market position" },
        { title: "SWOT Analysis", detail: "Identify strengths, weaknesses, opportunities, and threats" },
        { title: "Goal Setting", detail: "Define clear, measurable business objectives" },
        { title: "Strategic Roadmap", detail: "Actionable plan for short-term growth" },
        { title: "Consultation Session", detail: "One-on-one session with a strategy expert" },
      ],
      featured: false,
    },
    {
      name: "Growth Strategy Package",
      features: [
        { title: "In-Depth Market Research", detail: "Analyze market trends, competitors, and customer needs" },
        { title: "Business Process Optimization", detail: "Streamline operations for efficiency and cost savings" },
        { title: "Digital Transformation Plan", detail: "Integrate technology for business growth" },
        { title: "Risk Management Framework", detail: "Identify and mitigate business risks" },
        { title: "12-Month Implementation Plan", detail: "Step-by-step guide for execution" },
      ],
      featured: false,
    },
    {
      name: "Premium Strategy Package",
      features: [
        { title: "Full Corporate Strategy", detail: "Align all business units with long-term vision" },
        { title: "Innovation Strategy", detail: "Develop and implement new products/services" },
        { title: "Global Market Entry", detail: "Expand into international markets with confidence" },
        { title: "Competitive Benchmarking", detail: "Stay ahead with ongoing competitor analysis" },
        { title: "Dedicated Strategy Consultant", detail: "Personalized support throughout your journey" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Strategy Package",
      features: [
        { title: "Custom Enterprise Solutions", detail: "Tailored strategies for large organizations" },
        { title: "Mergers & Acquisitions Support", detail: "Expert guidance for M&A activities" },
        { title: "Sustainability & ESG Strategy", detail: "Integrate environmental, social, and governance best practices" },
        { title: "Organizational Change Management", detail: "Ensure smooth transitions and adoption" },
        { title: "Ongoing Strategy Execution", detail: "Continuous support for long-term success" },
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Business Strategy Consulting & Strategic Planning Services | Forward Solutions</title>
        <meta
          name="description"
          content="Forward Solutions offers expert business strategy consulting, strategic planning services, digital transformation, and market entry strategies to drive business growth. Visit https://www.forwardsols.com/ for a free consultation."
        />
        <meta
          name="keywords"
          content="business strategy consulting, strategic planning services, business growth strategy, digital transformation consulting, market entry strategy, competitive analysis, business process optimization, risk management consulting, corporate strategy, innovation strategy, Forward Solutions"
        />
        <link rel="canonical" href="https://www.forwardsols.com/strategy-development" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- Hero Section ----------------------------- */}
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
              Business Strategy Consulting
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: Value Proposition ----------------------------- */}
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
                Accelerate Business Growth with Proven Strategy Consulting
              </h1>
              <p className="mb-8 leading-relaxed">
                Are you searching for the best business strategy consulting firm to drive measurable results? At Forward Solutions, we deliver data-driven strategic planning services, digital transformation consulting, and market entry strategies that fuel business growth and maximize ROI. Our expert consultants help you outperform competitors, optimize business processes, and future-proof your organization for long-term success.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Your Free Strategy Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Why Choose Us ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Forward Solutions for Strategic Planning?
              </h1>
              <p className="mb-8 leading-relaxed">
                Our strategic planning services are trusted by businesses seeking rapid growth, operational efficiency, and digital transformation. We combine competitive analysis, risk management, and innovation strategy to deliver tailored solutions that help you dominate your market. Partner with us for actionable insights and a clear path to business success.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Learn More About Our Services
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

        {/* ----------------------------- Section 4: Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Core Strategy Consulting Services
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {STRATEGY_SERVICES?.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 5: When to Invest ----------------------------- */}
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
                When Should You Invest in Strategy Consulting?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your business is experiencing stagnant growth, facing new competition, or planning digital transformation, now is the time to invest in expert strategy consulting. At Forward Solutions, we help you identify growth opportunities, optimize operations, and build a resilient business model for the future.
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Strategy Session
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 6: Packages ----------------------------- */}
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

        {/* ----------------------------- Section 7: FAQs ----------------------------- */}
        <section className="w-full h-fullpx-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
            Frequently Asked Questions About Strategy Consulting
          </h1>
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
