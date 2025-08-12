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

// High-volume, low-difficulty SEO keywords for staffing
const SEO_KEYWORDS = [
  "staffing agency",
  "temp agency",
  "recruitment agency",
  "staffing solutions",
  "temporary staffing",
  "permanent staffing",
  "executive search",
  "contract staffing",
  "IT staffing",
  "healthcare staffing",
  "top staffing company",
  "best staffing agency",
  "forwardsols.com",
  "staffing services",
  "job placement services",
  "talent acquisition",
  "workforce solutions",
  "employment agency",
  "staff augmentation",
  "remote staffing",
  "on-demand staffing",
];

const STAFFING_SERVICES = [
  {
    title: "Temporary Staffing Agency",
    dis: "Forwardsols.com provides top-rated temporary staffing solutions for businesses seeking flexible workforce management. Our temp agency connects you with pre-vetted professionals for short-term projects, seasonal peaks, and urgent staffing needs.",
  },
  {
    title: "Permanent Staffing Solutions",
    dis: "Hire the best permanent employees with our expert recruitment agency services. We use advanced talent acquisition strategies to match your company with high-quality, long-term candidates who fit your culture and business goals.",
  },
  {
    title: "Executive Search & Headhunting",
    dis: "Our executive search team specializes in C-level and senior management recruitment. We identify and attract top leadership talent to drive your business growth and innovation.",
  },
  {
    title: "Contract Staffing Services",
    dis: "Access skilled contract professionals for IT, healthcare, finance, and more. Forwardsols.com delivers fast, reliable contract staffing to help you scale your workforce on demand.",
  },
  {
    title: "Industry-Specific Staffing",
    dis: "From IT staffing to healthcare staffing, our industry-focused recruiters understand your unique requirements. We deliver specialized staffing solutions for technology, healthcare, finance, manufacturing, and more.",
  },
  {
    title: "Remote & On-Demand Staffing",
    dis: "Hire remote staff or scale your team instantly with our on-demand staffing services. Forwardsols.com connects you with qualified remote professionals for any project or business need.",
  },
  {
    title: "Talent Pipeline Development",
    dis: "Build a future-ready workforce with our proactive talent pipeline development. We source, engage, and nurture top candidates so you can hire faster and smarter.",
  },
  {
    title: "Workforce Consulting & Strategy",
    dis: "Optimize your hiring process and workforce planning with our strategic consulting. We help you reduce hiring costs, improve retention, and achieve your business objectives.",
  },
];

const FAQS = [
  {
    title: "What makes Forwardsols.com the best staffing agency?",
    dis: "Forwardsols.com is a leading staffing agency offering customized staffing solutions, fast placements, and access to a large pool of qualified candidates. Our recruitment experts use proven strategies to deliver top talent for your business.",
  },
  {
    title: "How quickly can you fill my open positions?",
    dis: "Our temp agency and recruitment team can fill urgent roles within 24-72 hours, depending on your requirements. We maintain a robust talent pipeline for rapid placements.",
  },
  {
    title: "Do you offer staffing for specialized industries?",
    dis: "Yes, we provide industry-specific staffing for IT, healthcare, finance, manufacturing, and more. Our recruiters have deep expertise in each sector to ensure the best fit.",
  },
  {
    title: "What is your candidate screening process?",
    dis: "We conduct comprehensive background checks, skills assessments, and in-depth interviews to ensure every candidate meets your standards and company culture.",
  },
  {
    title: "Can you help with remote staffing?",
    dis: "Absolutely! Forwardsols.com offers remote staffing solutions, connecting you with top remote professionals for any role or project.",
  },
];

const PACKAGES = [
  {
    name: "Essential Staffing Package",
    features: [
      { title: "Temporary Staffing", detail: "Fast placement for short-term needs" },
      { title: "Basic Screening", detail: "Background & reference checks" },
      { title: "Job Board Promotion", detail: "Standard listings" },
      { title: "Interview Scheduling", detail: "Efficient coordination" },
      { title: "30-Day Guarantee", detail: "Free replacement within 30 days" },
    ],
    featured: false,
  },
  {
    name: "Professional Staffing Package",
    features: [
      { title: "Temp & Contract Staffing", detail: "Flexible workforce solutions" },
      { title: "Advanced Screening", detail: "Skills & personality assessments" },
      { title: "Industry-Specific Search", detail: "Targeted recruitment" },
      { title: "Candidate Preparation", detail: "Interview coaching" },
      { title: "60-Day Guarantee", detail: "Free replacement within 60 days" },
    ],
    featured: false,
  },
  {
    name: "Executive Staffing Package",
    features: [
      { title: "Executive Search", detail: "C-level & senior management" },
      { title: "Comprehensive Vetting", detail: "In-depth background checks" },
      { title: "Custom Search Strategy", detail: "Tailored headhunting" },
      { title: "Onboarding Support", detail: "Smooth integration" },
      { title: "90-Day Guarantee", detail: "Free replacement within 90 days" },
    ],
    featured: true,
  },
  {
    name: "Enterprise Workforce Package",
    features: [
      { title: "Full-Service Staffing", detail: "End-to-end workforce solutions" },
      { title: "Global Recruitment", detail: "International placements" },
      { title: "Talent Pipeline", detail: "Proactive sourcing" },
      { title: "Workforce Consulting", detail: "Strategic planning" },
      { title: "120-Day Guarantee", detail: "Free replacement within 120 days" },
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
        <title>Staffing Agency | Temp & Recruitment Services | Forwardsols.com</title>
        <meta
          name="description"
          content="Forwardsols.com is a top staffing agency offering temporary staffing, permanent placement, executive search, and contract staffing solutions. Hire the best talent fast with our recruitment experts."
        />
        <meta
          name="keywords"
          content={SEO_KEYWORDS.join(", ")}
        />
        <meta property="og:title" content="Staffing Agency | Temp & Recruitment Services | Forwardsols.com" />
        <meta property="og:description" content="Hire top talent with Forwardsols.com - your trusted staffing agency for temp, contract, and permanent staffing solutions. Fast placements, expert recruiters, and industry-specific hiring." />
        <meta property="og:url" content="https://forwardsols.com/staffing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://forwardsols.com/staffing" />
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
             
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
            Staffing Agency
            </h1>
            
            
          </div>
        </div>

        {/* ----------------------------- Why Choose Forwardsols.com ----------------------------- */}
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
                Why Choose Forwardsols.com for Staffing?
              </h2>
              <ul className="mb-8 leading-relaxed list-disc pl-5 text-lg">
                <li>Fast, reliable staffing solutions for all industries</li>
                <li>Access to a large pool of pre-screened candidates</li>
                <li>Expert recruiters with industry-specific knowledge</li>
                <li>Flexible temp, contract, and permanent staffing</li>
                <li>Competitive pricing and satisfaction guarantee</li>
              </ul>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Hiring Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Staffing Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Staffing & Recruitment Services
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {STAFFING_SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-base font-medium">{service.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- When to Use Staffing Solutions ----------------------------- */}
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
                When Should You Use Staffing Services?
              </h2>
              <ul className="mb-4 leading-relaxed list-disc pl-5 text-lg">
                <li>Struggling to fill open positions quickly?</li>
                <li>Need to scale your workforce for a project or busy season?</li>
                <li>Looking for specialized talent or executive leadership?</li>
                <li>Want to reduce hiring costs and time-to-hire?</li>
                <li>Need remote or on-demand staff for flexibility?</li>
              </ul>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Staffing Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white font-bold text-4xl text-center mb-10">
              Flexible Staffing Packages for Every Business
            </h2>
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
                    <h3 className="text-xl font-bold text-center">{pkg.name}</h3>
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

        {/* ----------------------------- FAQs Section ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Staffing Agency FAQs
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
              {FAQS.map((faq, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-white md:text-2xl lg:text-2xl hover:no-underline hover:text-pink-800 cursor-pointer">
                      {faq.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-white md:text-lg">
                      {faq.dis}
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
