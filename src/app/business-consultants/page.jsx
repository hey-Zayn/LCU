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

const SEO_SERVICES = [
  {
    title: "Business Consulting Services",
    dis: "Unlock business growth with expert business consulting services from Forward Solutions. Our consultants deliver proven strategies for business process improvement, digital transformation, and revenue growth. Partner with us to achieve measurable results and sustainable success.",
  },
  {
    title: "Small Business Consulting",
    dis: "Accelerate your small business with tailored consulting solutions. We help startups and established companies optimize operations, reduce costs, and increase profitability using data-driven strategies and industry best practices.",
  },
  {
    title: "Digital Transformation Consulting",
    dis: "Transform your business with our digital transformation consulting. We implement the latest technologies, automate workflows, and enhance your online presence to drive efficiency and competitive advantage.",
  },
  {
    title: "Business Strategy Development",
    dis: "Develop a winning business strategy with Forward Solutions. Our experts analyze your market, identify growth opportunities, and create actionable plans to maximize your business potential.",
  },
  {
    title: "Process Optimization & Automation",
    dis: "Streamline your business processes and boost productivity with our process optimization and automation services. We identify bottlenecks and implement solutions that save time and resources.",
  },
  {
    title: "Market Research & Competitive Analysis",
    dis: "Stay ahead of the competition with in-depth market research and competitive analysis. We provide actionable insights to help you make informed decisions and capture new market opportunities.",
  },
  {
    title: "Financial Planning & Management",
    dis: "Secure your business’s financial future with expert financial planning and management consulting. We help you improve cash flow, budgeting, and profitability for long-term growth.",
  },
  {
    title: "Leadership & Team Development",
    dis: "Build high-performing teams and develop strong leaders with our leadership and team development programs. We offer customized training to enhance management skills and organizational culture.",
  },
  {
    title: "Change Management Consulting",
    dis: "Navigate organizational change with confidence. Our change management consultants ensure smooth transitions, employee engagement, and successful implementation of new initiatives.",
  },
];

const FAQS = [
  {
    title: "What are the benefits of hiring a business consultant?",
    dis: "Hiring a business consultant provides expert guidance, fresh perspectives, and proven strategies to solve complex challenges, improve efficiency, and drive business growth. At Forward Solutions, our consultants deliver measurable results tailored to your unique needs.",
  },
  {
    title: "How does Forward Solutions ensure business growth?",
    dis: "We use data-driven analysis, industry best practices, and customized strategies to identify growth opportunities, optimize operations, and enhance your competitive edge. Our focus is on delivering ROI and sustainable success.",
  },
  {
    title: "What industries do you serve?",
    dis: "Forward Solutions serves a wide range of industries including technology, healthcare, finance, retail, manufacturing, and professional services. Our business consulting expertise is adaptable to any sector.",
  },
  {
    title: "How do I get started with Forward Solutions?",
    dis: "Getting started is easy. Simply contact us through our website at https://www.forwardsols.com/contact to schedule a free consultation. Our team will assess your needs and recommend the best solutions for your business.",
  },
];

const PACKAGES = [
  {
    name: "Essential Consulting Package",
    features: [
      { title: "Business Health Assessment", detail: "Comprehensive review of your business operations, identifying strengths, weaknesses, and growth opportunities." },
      { title: "Market Positioning Analysis", detail: "In-depth analysis of your market position and competitor landscape to inform strategic decisions." },
      { title: "Website & Online Presence Audit", detail: "Evaluation of your website and digital footprint to boost visibility and lead generation." },
      { title: "Monthly Performance Reporting", detail: "Detailed reports tracking KPIs and progress towards business goals." },
    ],
    featured: false,
  },
  {
    name: "Growth Accelerator Package",
    features: [
      { title: "Advanced Market Research", detail: "Data-driven research to uncover new market opportunities and customer segments." },
      { title: "Digital Marketing Strategy", detail: "Custom digital marketing plan to increase brand awareness and drive qualified leads." },
      { title: "Process Automation Setup", detail: "Implementation of automation tools to streamline repetitive tasks and improve efficiency." },
      { title: "Quarterly Strategy Sessions", detail: "Regular strategy reviews to adapt and optimize your business growth plan." },
    ],
    featured: false,
  },
  {
    name: "Premium Business Transformation",
    features: [
      { title: "Full Digital Transformation", detail: "End-to-end digital transformation services, including technology integration and workflow automation." },
      { title: "Leadership Coaching", detail: "Personalized coaching for executives and managers to enhance leadership skills and team performance." },
      { title: "Brand Development", detail: "Comprehensive brand strategy to position your business as an industry leader." },
      { title: "Ongoing Strategic Advisory", detail: "Continuous support and expert advice to ensure long-term business success." },
    ],
    featured: true,
  },
  {
    name: "Enterprise Growth Solution",
    features: [
      { title: "Enterprise Process Optimization", detail: "Large-scale process improvement for established businesses seeking operational excellence." },
      { title: "Custom CRM Integration", detail: "Tailored CRM solutions to improve customer relationships and sales pipeline management." },
      { title: "Corporate Reputation Management", detail: "Proactive strategies to build and protect your brand’s reputation online." },
      { title: "Dedicated Account Manager", detail: "Personalized support from a dedicated business consultant for your enterprise." },
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
        <title>Business Consulting Services | Business Growth Consultants | Forward Solutions</title>
        <meta
          name="description"
          content="Forward Solutions offers top-rated business consulting services for small businesses and enterprises. Boost your business growth, optimize operations, and achieve digital transformation with our expert consultants. Visit https://www.forwardsols.com/ for a free consultation."
        />
        <meta
          name="keywords"
          content="business consulting services, business consultants, small business consulting, business growth, digital transformation consulting, process optimization, business strategy, market research, business process improvement, business advisory, business consulting firm, business consulting company, business consulting agency, business consulting solutions, business consulting experts, business consulting for startups"
        />
        <meta property="og:title" content="Business Consulting Services | Business Growth Consultants | Forward Solutions" />
        <meta property="og:description" content="Unlock business growth with Forward Solutions. Our business consultants deliver proven strategies for digital transformation, process optimization, and revenue growth. Visit https://www.forwardsols.com/ to learn more." />
        <meta property="og:url" content="https://www.forwardsols.com/business-consultants" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.forwardsols.com/business-consultants" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- Hero Section ----------------------------- */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Business Consulting Services
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: Value Proposition ----------------------------- */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Accelerate Your Business Growth with Forward Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                Are you searching for the best business consulting services to drive business growth and digital transformation? At Forward Solutions, our expert business consultants deliver high-impact strategies for small businesses and enterprises. We specialize in business process improvement, market research, and digital transformation consulting to help you outperform competitors and achieve sustainable success. Discover how our business consulting firm can optimize your operations and maximize your ROI.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get a Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Why Choose Us ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Forward Solutions is the Top Business Consulting Firm
              </h1>
              <p className="mb-8 leading-relaxed">
                Forward Solutions stands out among business consulting companies for our results-driven approach, industry expertise, and commitment to client success. Our business consultants use proven frameworks and the latest technology to deliver measurable improvements in revenue, efficiency, and market share. Whether you need small business consulting or enterprise transformation, we provide customized solutions that deliver real value.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
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

        {/* ----------------------------- Section 4: Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Business Consulting Solutions
          </h1>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {SEO_SERVICES.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 5: About Our Approach ----------------------------- */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Data-Driven Business Consulting for Lasting Results
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  At Forward Solutions, we use data-driven insights and innovative strategies to help businesses adapt to changing markets and achieve long-term growth. Our business consulting experts provide tailored solutions in digital transformation, process optimization, and market expansion. Let us help you unlock your business’s full potential and stay ahead of the competition.
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 6: Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg, index) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 7: FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Frequently Asked Questions About Business Consulting
          </h1>
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
              {FAQS.map((card, index) => (
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
