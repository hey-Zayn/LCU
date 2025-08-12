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
    title: "HR Outsourcing Services",
    dis: "Boost productivity and reduce costs with our top-rated HR outsourcing services. We handle payroll, benefits administration, compliance, and employee management so you can focus on business growth. Trusted by leading companies for reliable HR solutions.",
  },
  {
    title: "Payroll Outsourcing Solutions",
    dis: "Streamline your payroll process with our expert payroll outsourcing. Ensure accuracy, compliance, and timely payments while minimizing errors and saving valuable time. Let ForwardSols manage your payroll efficiently.",
  },
  {
    title: "Employee Benefits Administration",
    dis: "Attract and retain top talent with our comprehensive employee benefits administration. We manage health insurance, retirement plans, and perks, ensuring your workforce stays motivated and your business remains competitive.",
  },
  {
    title: "HR Compliance Management",
    dis: "Stay compliant with ever-changing labor laws and regulations. Our HR compliance management services protect your business from costly penalties and legal risks, giving you peace of mind.",
  },
  {
    title: "Talent Acquisition & Recruitment",
    dis: "Hire the best candidates faster with our talent acquisition and recruitment process outsourcing. We source, screen, and onboard top talent, helping you build a high-performing team.",
  },
  {
    title: "HR Technology Integration",
    dis: "Leverage the latest HR technology for seamless operations. We implement and manage HRIS, payroll software, and digital onboarding tools to optimize your HR processes.",
  },
];

const FAQS = [
  {
    title: "What is HR outsourcing and how does it benefit my business?",
    dis: "HR outsourcing is the process of delegating human resources functions to a specialized provider like ForwardSols. It helps businesses save time, reduce costs, ensure compliance, and access expert HR support without hiring a full in-house team.",
  },
  {
    title: "Why choose ForwardSols for HR outsourcing?",
    dis: "ForwardSols offers affordable, scalable, and customized HR outsourcing solutions. Our team uses the latest HR technology and best practices to deliver reliable payroll, compliance, and employee management services.",
  },
  {
    title: "Can small businesses benefit from HR outsourcing?",
    dis: "Absolutely! Small businesses can access professional HR services, reduce administrative burdens, and stay compliant with regulations, all while focusing on core business activities.",
  },
  {
    title: "What HR functions can be outsourced?",
    dis: "You can outsource payroll, benefits administration, recruitment, compliance management, employee relations, and HR technology integration. We tailor our services to your unique needs.",
  },
];

const HR_PACKAGES = [
  {
    name: "Starter HR Outsourcing",
    features: [
      { title: "Payroll Processing", detail: "Accurate, on-time payroll with tax compliance" },
      { title: "Employee Data Management", detail: "Secure digital records and document storage" },
      { title: "Basic Compliance Support", detail: "Essential labor law compliance and updates" },
      { title: "Recruitment Assistance", detail: "Job postings and candidate screening" },
      { title: "Employee Handbook", detail: "Standard workplace policies and guidelines" },
    ],
    featured: false,
  },
  {
    name: "Growth HR Package",
    features: [
      { title: "Full Payroll & Benefits", detail: "Comprehensive payroll and benefits administration" },
      { title: "Recruitment Process Outsourcing", detail: "End-to-end hiring and onboarding" },
      { title: "Performance Management", detail: "Employee evaluation and feedback systems" },
      { title: "Compliance & Risk Management", detail: "Regular audits and risk assessments" },
      { title: "Employee Relations", detail: "Conflict resolution and workplace policy guidance" },
    ],
    featured: false,
  },
  {
    name: "Premium HR Solutions",
    features: [
      { title: "Strategic HR Consulting", detail: "Custom HR strategies for business growth" },
      { title: "Leadership Development", detail: "Executive coaching and training" },
      { title: "Advanced HR Technology", detail: "HRIS and digital onboarding solutions" },
      { title: "Comprehensive Training", detail: "Employee development and skills training" },
      { title: "Workforce Analytics", detail: "Data-driven HR insights and planning" },
    ],
    featured: true,
  },
  {
    name: "Enterprise HR Management",
    features: [
      { title: "Custom HR Strategy", detail: "Tailored solutions for complex organizations" },
      { title: "Global Compliance", detail: "International labor law and workforce management" },
      { title: "Organizational Development", detail: "Culture building and change management" },
      { title: "Talent Management", detail: "Acquisition and retention strategies" },
      { title: "24/7 HR Support", detail: "Round-the-clock HR advisory services" },
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
        <title>HR Outsourcing Services | Payroll, Compliance & Recruitment | ForwardSols</title>
        <meta
          name="description"
          content="ForwardSols offers top HR outsourcing services including payroll, compliance, employee benefits, and recruitment. Streamline your HR operations and grow your business with our expert solutions. Visit https://www.forwardsols.com/ for a free consultation."
        />
        <meta
          name="keywords"
          content="HR outsourcing, payroll outsourcing, HR services, employee benefits administration, HR compliance, talent acquisition, HR technology, HR solutions, HR management, HRIS, best HR outsourcing company, affordable HR outsourcing, small business HR outsourcing, ForwardSols"
        />
        <link rel="canonical" href="https://www.forwardsols.com/hr-outsourcing" />
        <meta property="og:title" content="HR Outsourcing Services | Payroll, Compliance & Recruitment | ForwardSols" />
        <meta property="og:description" content="Streamline your HR with ForwardSols. Expert payroll, compliance, benefits, and recruitment outsourcing for businesses of all sizes. Get a free HR consultation today!" />
        <meta property="og:url" content="https://www.forwardsols.com/hr-outsourcing" />
        <meta property="og:type" content="website" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- HERO SECTION ----------------------------- */}
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
              HR Outsourcing Services
            </h1>
           
          </div>
        </div>

        {/* ----------------------------- WHY OUTSOURCE HR ----------------------------- */}
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
                Why Choose HR Outsourcing?
              </h2>
              <p className="mb-8 leading-relaxed">
                Struggling with HR compliance, payroll errors, or time-consuming employee management? ForwardSols delivers <strong>cost-effective HR outsourcing</strong> so you can focus on business growth. Our solutions reduce HR costs, improve compliance, and ensure your workforce is managed by experts. <br />
              
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Free HR Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- CORE SERVICES ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Best HR Outsourcing Services for Your Business
          </h2>
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
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- WHEN TO OUTSOURCE HR ----------------------------- */}
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
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                When Should You Outsource HR?
              </h2>
              <p className="mb-1 leading-relaxed">
                If your business is growing, facing compliance challenges, or spending too much time on HR admin, it's time to outsource HR. ForwardSols provides <strong>affordable HR outsourcing</strong> for small businesses and enterprises. We help you stay compliant, attract top talent, and reduce HR costs. <br />
                </p>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- HR PACKAGES ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white font-bold text-4xl text-center mb-10">HR Outsourcing Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HR_PACKAGES.map((pkg, index) => (
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
                    <h3 className="text-xl font-bold text-center">{pkg.name}</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="border-b border-gray-100 pb-2 last:border-0"
                        >
                          <h4 className="font-medium text-white">{feature.title}</h4>
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

        {/* ----------------------------- FAQ SECTION ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            HR Outsourcing FAQs
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
              {FAQS.map((card, index) => (
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
