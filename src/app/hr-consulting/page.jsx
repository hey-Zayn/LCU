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

const seoServices = [
  {
    title: "HR Consulting Services",
    dis: "Forwardsols offers expert HR consulting services to help businesses optimize human resources, improve employee retention, and ensure HR compliance. Our HR consultants provide tailored solutions for workforce planning, talent acquisition, and HR strategy to drive business growth.",
  },
  {
    title: "Talent Acquisition & Recruitment",
    dis: "Attract top talent with Forwardsols' recruitment process outsourcing and talent acquisition strategies. We streamline your hiring process, enhance employer branding, and ensure you hire the best candidates for your business success.",
  },
  {
    title: "Employee Engagement Solutions",
    dis: "Boost employee engagement and satisfaction with Forwardsols. Our HR experts design employee engagement programs, recognition systems, and workplace culture strategies to reduce turnover and increase productivity.",
  },
  {
    title: "HR Compliance & Risk Management",
    dis: "Stay compliant with labor laws and minimize HR risks. Forwardsols provides HR compliance audits, policy development, and risk management solutions to protect your business and ensure legal compliance.",
  },
  {
    title: "Performance Management Systems",
    dis: "Implement effective performance management systems with Forwardsols. We help you set clear KPIs, conduct fair evaluations, and create feedback mechanisms to align employee performance with business goals.",
  },
  {
    title: "Compensation & Benefits Consulting",
    dis: "Design competitive compensation and benefits packages with Forwardsols. We benchmark your pay structure, optimize benefits, and help you attract and retain top talent while managing costs.",
  },
  {
    title: "Leadership Development & Training",
    dis: "Develop future leaders with Forwardsols' leadership training programs. We offer management development, communication skills, and succession planning to build a strong leadership pipeline.",
  },
  {
    title: "Organizational Development & Change Management",
    dis: "Navigate organizational change with Forwardsols. Our HR consultants guide you through restructuring, change management, and organizational development to ensure smooth transitions and sustained growth.",
  },
  {
    title: "HR Technology Implementation",
    dis: "Upgrade your HR operations with the latest HR technology. Forwardsols assists with HRIS implementation, HR software selection, and digital transformation for efficient, data-driven HR management.",
  },
];

const faqs = [
  {
    title: "What is HR consulting and why do I need it?",
    dis: "HR consulting helps businesses optimize their human resources, improve compliance, and implement best HR practices. Forwardsols' HR consultants provide expert guidance to streamline HR processes, reduce costs, and drive business growth.",
  },
  {
    title: "How can Forwardsols improve my talent acquisition?",
    dis: "We use proven recruitment strategies, employer branding, and advanced screening to attract and hire top talent. Our talent acquisition solutions help you build a high-performing team quickly and efficiently.",
  },
  {
    title: "What are the benefits of employee engagement programs?",
    dis: "Employee engagement programs increase job satisfaction, reduce turnover, and boost productivity. Forwardsols designs custom engagement solutions to create a positive workplace culture and retain your best employees.",
  },
  {
    title: "How does HR compliance protect my business?",
    dis: "HR compliance ensures your business follows labor laws and regulations, reducing the risk of legal issues and penalties. Forwardsols provides compliance audits, policy development, and ongoing support to keep your business protected.",
  },
];

const hrPackages = [
  {
    name: "Essential HR Consulting",
    features: [
      { title: "HR Audit", detail: "Comprehensive review of current HR policies and practices" },
      { title: "Compliance Check", detail: "Ensure adherence to labor laws and regulations" },
      { title: "Basic Talent Acquisition", detail: "Streamlined recruitment and onboarding" },
      { title: "Employee Handbook", detail: "Custom employee handbook creation" },
    ],
    featured: false,
  },
  {
    name: "Growth HR Solutions",
    features: [
      { title: "Advanced Recruitment", detail: "Employer branding and candidate assessment" },
      { title: "Performance Management", detail: "KPI setting and evaluation systems" },
      { title: "Employee Engagement", detail: "Recognition programs and satisfaction surveys" },
      { title: "HR Technology Setup", detail: "HRIS implementation and training" },
    ],
    featured: false,
  },
  {
    name: "Premium HR Strategy",
    features: [
      { title: "Strategic Workforce Planning", detail: "Forecasting and talent pipeline development" },
      { title: "Leadership Development", detail: "Management training and succession planning" },
      { title: "Compensation Benchmarking", detail: "Competitive salary and benefits analysis" },
      { title: "Change Management", detail: "Organizational development and transformation" },
    ],
    featured: true,
  },
  {
    name: "Custom HR Solutions",
    features: [
      { title: "Tailored HR Consulting", detail: "Solutions designed for your unique business needs" },
      { title: "Ongoing HR Support", detail: "Continuous guidance and HR process optimization" },
      { title: "Risk Management", detail: "Proactive identification and mitigation of HR risks" },
      { title: "Policy Development", detail: "Custom HR policies and procedures" },
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
        <title>HR Consulting Services | HR Solutions & Talent Acquisition | Forwardsols</title>
        <meta
          name="description"
          content="Forwardsols provides expert HR consulting services, talent acquisition, employee engagement, HR compliance, and workforce planning to help your business grow. Contact us for custom HR solutions."
        />
        <meta
          name="keywords"
          content="HR consulting, HR services, talent acquisition, employee engagement, HR compliance, workforce planning, HR outsourcing, HR solutions, HR strategy, HR audit, HRIS, HR technology, leadership development, organizational development, forwardsols"
        />
        <meta property="og:title" content="HR Consulting Services | HR Solutions & Talent Acquisition | Forwardsols" />
        <meta property="og:description" content="Forwardsols offers top-rated HR consulting, talent acquisition, employee engagement, and HR compliance solutions for business growth." />
        <meta property="og:url" content="https://forwardsols.com/hr-consulting" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forwardsols.com/hr-consulting" />
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
              HR Consulting
            </h1>
           
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Choose Forwardsols ----------------------------- */}
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
                Why Choose Forwardsols for HR Consulting?
              </h2>
              <p className="mb-8 leading-relaxed">
                Forwardsols delivers top-rated HR consulting services designed to optimize your workforce, reduce HR costs, and ensure compliance. Our HR experts use proven strategies for talent acquisition, employee engagement, and HR technology implementation, helping your business achieve sustainable growth and a competitive edge.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get a Free HR Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Optimize Your HR ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Optimize Your HR for Business Success
              </h2>
              <p className="mb-8 leading-relaxed">
                Is your HR department driving business results? Forwardsols evaluates your HR processes, identifies gaps, and implements actionable solutions to improve employee retention, boost productivity, and align your workforce with your business goals.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Now
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

        {/* ----------------------------- Core HR Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            HR Consulting Services We Offer
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {seoServices.map((card, index) => (
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

        {/* ----------------------------- When to Consider HR Consulting ----------------------------- */}
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
                When Should You Hire an HR Consultant?
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your business is struggling with high employee turnover, compliance issues, or inefficient HR processes, it's time to consult Forwardsols. Our HR experts provide custom solutions for talent management, HR audits, and workforce planning to help your business thrive in a competitive market.
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

        {/* ----------------------------- HR Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hrPackages.map((pkg, index) => (
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

        {/* ----------------------------- FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            HR Consulting FAQs
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
        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
