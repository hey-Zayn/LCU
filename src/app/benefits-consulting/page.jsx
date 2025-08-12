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
    title: "Employee Benefits Consulting Services",
    dis: "Maximize your employee retention and satisfaction with our expert employee benefits consulting. We design cost-effective, competitive benefits packages that attract top talent and reduce turnover. Get a free benefits analysis at https://www.forwardsols.com/.",
  },
  {
    title: "Group Health Insurance Optimization",
    dis: "Lower your group health insurance costs while improving coverage. Our consultants negotiate with top providers and tailor plans to your workforce, ensuring compliance and cost savings. Discover more at https://www.forwardsols.com/.",
  },
  {
    title: "Retirement Plan Consulting",
    dis: "Boost employee loyalty with optimized 401(k) and retirement plans. We help you navigate fiduciary responsibilities, compliance, and plan design for maximum participation and satisfaction.",
  },
  {
    title: "Voluntary Benefits Solutions",
    dis: "Enhance your benefits offering with voluntary benefits like dental, vision, and supplemental insurance. We help you implement high-value, low-cost options that employees love.",
  },
  {
    title: "Benefits Compliance & ACA Consulting",
    dis: "Stay compliant with ACA, ERISA, and DOL regulations. Our benefits compliance experts minimize your risk and administrative burden, keeping your business audit-ready.",
  },
  {
    title: "Benefits Communication & Enrollment Support",
    dis: "Increase employee engagement and benefits utilization with clear, effective communication strategies and digital enrollment tools. We make benefits easy to understand and access.",
  },
  {
    title: "Cost Containment & Benefits Benchmarking",
    dis: "Reduce benefits spend without sacrificing quality. Our benchmarking and cost containment strategies ensure your offerings are competitive and sustainable.",
  },
  {
    title: "HR Technology & Benefits Administration",
    dis: "Streamline your HR processes with integrated benefits administration platforms. We help you select and implement the best HR tech for your business.",
  },
];

const FAQS = [
  {
    title: "What is employee benefits consulting?",
    dis: "Employee benefits consulting involves expert analysis and design of your company's benefits programs to maximize value, control costs, and ensure compliance. At https://www.forwardsols.com/, we help you create a benefits strategy that attracts and retains top talent.",
  },
  {
    title: "How can benefits consulting reduce my business costs?",
    dis: "Our consultants identify inefficiencies, negotiate better rates, and recommend cost-effective benefits solutions. We help you optimize your benefits spend while maintaining high employee satisfaction.",
  },
  {
    title: "Why is benefits compliance important?",
    dis: "Benefits compliance protects your business from costly penalties and legal risks. We ensure your programs meet all ACA, ERISA, and DOL requirements, giving you peace of mind.",
  },
  {
    title: "How quickly can I improve my employee benefits program?",
    dis: "Most businesses see measurable improvements within 1-3 months of working with our benefits consultants. We provide ongoing support for continuous optimization.",
  },
];

const PACKAGES = [
  {
    name: "Starter Benefits Consulting",
    features: [
      { title: "Benefits Assessment", detail: "Initial review of current benefits and costs" },
      { title: "Compliance Check", detail: "ACA and ERISA compliance review" },
      { title: "Benchmarking", detail: "Compare your benefits to industry standards" },
      { title: "Quick Wins", detail: "Immediate cost-saving recommendations" },
    ],
    featured: false,
  },
  {
    name: "Growth Benefits Strategy",
    features: [
      { title: "Custom Plan Design", detail: "Tailored benefits strategy for your business" },
      { title: "Provider Negotiation", detail: "Get the best rates and coverage" },
      { title: "Employee Engagement", detail: "Communication and enrollment support" },
      { title: "Ongoing Optimization", detail: "Quarterly reviews and updates" },
    ],
    featured: true,
  },
  {
    name: "Enterprise Benefits Solution",
    features: [
      { title: "Full Benefits Overhaul", detail: "Comprehensive redesign and implementation" },
      { title: "HR Tech Integration", detail: "Benefits administration platform setup" },
      { title: "Advanced Analytics", detail: "Utilization and cost reporting" },
      { title: "Dedicated Consultant", detail: "Personalized support for your HR team" },
    ],
    featured: false,
  },
  {
    name: "Premium Compliance & Support",
    features: [
      { title: "Regulatory Monitoring", detail: "Stay ahead of all compliance changes" },
      { title: "Audit Support", detail: "Assistance with DOL and IRS audits" },
      { title: "Employee Education", detail: "Workshops and digital resources" },
      { title: "24/7 Support", detail: "On-demand consulting for urgent needs" },
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
        <title>Employee Benefits Consulting Services | Forward Solutions</title>
        <meta
          name="description"
          content="Forward Solutions offers expert employee benefits consulting, group health insurance optimization, and compliance services. Attract and retain top talent with cost-effective, competitive benefits. Visit https://www.forwardsols.com/ for a free consultation."
        />
        <meta
          name="keywords"
          content="employee benefits consulting, group health insurance, benefits compliance, ACA consulting, retirement plan consulting, voluntary benefits, HR technology, benefits benchmarking, cost containment, employee retention, attract top talent, benefits administration, https://www.forwardsols.com/"
        />
        <link rel="canonical" href="https://www.forwardsols.com/benefits-consulting" />
        <meta property="og:title" content="Employee Benefits Consulting Services | Forward Solutions" />
        <meta property="og:description" content="Maximize employee retention and reduce costs with expert benefits consulting from Forward Solutions. Get a free benefits analysis today." />
        <meta property="og:url" content="https://www.forwardsols.com/benefits-consulting" />
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
              Employee Benefits
            </h1>
           
          </div>
        </div>

        {/* ----------------------------- SECTION 2: WHY CHOOSE US ----------------------------- */}
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
                Why Forward Solutions for Employee Benefits Consulting?
              </h2>
              <p className="mb-8 leading-relaxed">
                At Forward Solutions, we deliver high-impact employee benefits consulting that drives employee retention, reduces costs, and ensures compliance. Our data-driven approach and industry expertise help you build a benefits package that stands out in today's competitive job market. <br /><br />
                <strong>Ready to transform your benefits strategy?</strong>
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Your Free Benefits Analysis
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- SECTION 3: BENEFITS STRATEGY ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Optimize Your Employee Benefits for Maximum ROI
              </h2>
              <p className="mb-8 leading-relaxed">
                Is your current benefits program helping you attract and retain the best employees? Our consultants analyze your benefits, benchmark against industry leaders, and deliver actionable strategies to improve employee satisfaction and reduce costs. <br />
                <span className="">Contact us today for a custom benefits review.</span>
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
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

        {/* ----------------------------- SECTION 4: CORE SERVICES ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Top Employee Benefits Consulting Services
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

        {/* ----------------------------- SECTION 5: WHEN TO CONSIDER ----------------------------- */}
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
                When Should You Hire a Benefits Consultant?
              </h2>
              <p className="mb-1 leading-relaxed">
                If your business is facing rising benefits costs, compliance challenges, or low employee engagement, it's time to consult the experts. At Forward Solutions, we provide tailored solutions for small businesses, startups, and enterprises. Stay ahead of industry trends and regulatory changes with our proactive consulting.
              </p>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- SECTION 6: PACKAGES ----------------------------- */}
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

        {/* ----------------------------- SECTION 7: FAQ ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Employee Benefits Consulting FAQs
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
