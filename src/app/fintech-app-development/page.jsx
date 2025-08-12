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
import Head from 'next/head';

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

  const FintechServices = [
    {
      title: "Custom Fintech App Development",
      dis: "Build secure, scalable fintech applications tailored to your business needs. Our fintech app development services include payment gateways, digital wallets, and blockchain solutions with robust security features.",
    },
    {
      title: "Mobile Banking App Development",
      dis: "Create user-friendly mobile banking applications with advanced features like biometric authentication, real-time transactions, and personalized financial insights through our fintech mobile app development services.",
    },
    {
      title: "AI-Powered Financial Solutions",
      dis: "Implement AI and machine learning in your fintech applications for fraud detection, risk assessment, and personalized financial recommendations with our cutting-edge fintech app development expertise.",
    },
    {
      title: "Blockchain & Cryptocurrency Solutions",
      dis: "Develop secure blockchain platforms and cryptocurrency wallets with our specialized fintech app development team, ensuring compliance with financial regulations.",
    },
    {
      title: "Payment Gateway Integration",
      dis: "Seamlessly integrate multiple payment options into your fintech application with our fintech development services, supporting global transactions and various payment methods.",
    },
    {
      title: "RegTech Compliance Solutions",
      dis: "Build regulatory technology solutions that automate compliance processes with KYC, AML, and other financial regulations through our fintech app development services.",
    },
    {
      title: "Wealth Management Platforms",
      dis: "Create sophisticated investment and wealth management applications with portfolio tracking, robo-advisory, and market analysis features.",
    },
    {
      title: "Peer-to-Peer Lending Systems",
      dis: "Develop secure P2P lending platforms with credit scoring, loan management, and risk assessment capabilities through our fintech app development expertise.",
    },
  ];

  const FAQS = [
    {
      title: "Why choose your fintech app development company?",
      dis: "As a leading fintech app development company, we combine financial expertise with technical excellence. Our team delivers secure, compliant, and innovative solutions tailored to your specific requirements in banking, payments, or financial services.",
    },
    {
      title: "What's the cost of fintech app development?",
      dis: "Fintech app development cost varies based on features, complexity, and compliance requirements. Our fintech app development services start with a detailed consultation to provide accurate estimates based on your specific needs.",
    },
    {
      title: "How long does fintech mobile app development take?",
      dis: "The timeline for fintech mobile app development depends on project scope. A basic MVP takes 3-6 months, while complex solutions may require 9-12 months. Our fintech app developers follow agile methodologies to ensure timely delivery.",
    },
    {
      title: "Do you provide ongoing support after development?",
      dis: "Yes, our fintech app development services include post-launch support, maintenance, and updates to ensure your application remains secure, compliant, and up-to-date with the latest financial technologies.",
    },
  ];

  const packages = [
    {
      name: "Basic Fintech App Package",
      features: [
        { title: "Core Banking Features", detail: "Account management, transactions, and basic reporting" },
        {
          title: "Standard Security",
          detail: "SSL encryption and basic authentication for your fintech app",
        },
        { title: "Payment Integration", detail: "Single payment gateway integration" },
        { title: "Basic Dashboard", detail: "Simple user interface with essential financial data" },
        { title: "Compliance", detail: "Basic regulatory requirements implementation" },
        { title: "3 Months Support", detail: "Post-launch bug fixes and minor updates" },
      ],
      featured: false,
    },
    {
      name: "Advanced Fintech Solution",
      features: [
        { title: "Multi-Currency Support", detail: "Handle global transactions in your fintech mobile app" },
        {
          title: "Enhanced Security",
          detail: "Biometric authentication and advanced encryption",
        },
        { title: "Multiple Payment Options", detail: "Integration with 3+ payment processors" },
        { title: "AI Features", detail: "Basic fraud detection and financial insights" },
        { title: "Custom Reporting", detail: "Tailored financial analytics dashboard" },
        {
          title: "6 Months Support",
          detail: "Including minor feature enhancements",
        },
      ],
      featured: false,
    },
    {
      name: "Enterprise Fintech Platform",
      features: [
        { title: "Full Banking Suite", detail: "Complete digital banking solution" },
        {
          title: "Blockchain Integration",
          detail: "Cryptocurrency and smart contract capabilities",
        },
        { title: "Advanced AI/ML", detail: "Predictive analytics and risk assessment" },
        { title: "White-label Solution", detail: "Custom branding for your fintech app" },
        { title: "Multi-Platform", detail: "iOS, Android, and web applications" },
        {
          title: "1 Year Support",
          detail: "Priority support with regular feature updates",
        },
      ],
      featured: true,
    },
    {
      name: "Custom Fintech Development",
      features: [
        { title: "Tailored Solution", detail: "Completely custom fintech application" },
        {
          title: "Regulatory Compliance",
          detail: "Full KYC/AML and financial regulation implementation",
        },
        { title: "Enterprise Security", detail: "Bank-grade security protocols" },
        { title: "Third-party Integrations", detail: "Connect with banking APIs and financial systems" },
        { title: "Scalable Architecture", detail: "Handles millions of transactions" },
        {
          title: "Dedicated Team",
          detail: "Personalized development and ongoing support",
        },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Fintech App Development Company | Custom Financial Solutions</title>
        <meta name="description" content="Leading fintech app development company offering custom mobile banking, payment solutions, and financial technology services. Secure, scalable fintech applications tailored to your needs." />
        <meta name="keywords" content="fintech app development company, fintech app development services, fintech mobile app development, custom fintech app development, fintech app developers, fintech app development cost" />
        <meta property="og:title" content="Fintech App Development Company | Custom Financial Solutions" />
        <meta property="og:description" content="Expert fintech app development services for banking, payments, and financial technology solutions. Secure, compliant, and innovative applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/fintech-app-development" />
        <link rel="canonical" href="https://www.forwardsols.com/fintech-app-development" />
      </Head>

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
              Fintech App Development Services
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Transform financial services with secure, innovative fintech applications developed by industry experts
            </p>
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
                Innovative Fintech App Development Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                As a premier fintech app development company, we create cutting-edge financial technology solutions that drive digital transformation. Our fintech app development services encompass mobile banking applications, payment gateways, investment platforms, and regulatory technology solutions - all built with security, compliance, and user experience at the forefront.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Connect With Our Fintech Experts
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Our Fintech App Development Services?
              </h1>
              <p className=" leading-relaxed mb-4">
                In the competitive financial technology sector, you need a partner with both technical expertise and financial industry knowledge:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Financial Industry Expertise</strong> – Our fintech app developers understand banking regulations, compliance requirements, and financial workflows
                </li>
                <li className="text-white/80 text-base">
                  <strong>Secure Development Practices</strong> – We implement bank-grade security protocols in all our fintech mobile app development projects
                </li>
                <li className="text-white/80 text-base">
                  <strong>Custom Solutions</strong> – Tailored fintech applications designed for your specific business model and customer needs
                </li>
                <li className="text-white/80 text-base">
                  <strong>Cutting-edge Technology</strong> – Blockchain, AI, machine learning, and biometric authentication integration
                </li>
                <li className="text-white/80 text-base">
                  <strong>End-to-End Services</strong> – From concept to deployment and ongoing maintenance for your fintech application
                </li>
              </ul>
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
          <div className="text-center">
            <h1 className="text-white font-bold text-5xl max-sm:text-3xl">
              Comprehensive Fintech App Development Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              End-to-end solutions for all your financial technology needs
            </p>
          </div>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {FintechServices?.map((card, index) => (
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
                Our Fintech App Development Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a structured approach to deliver successful fintech applications:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Requirement Analysis</strong> – Understand your business model, target audience, and compliance needs
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Prototyping & Design</strong> – Create UX/UI designs focused on financial workflows and security
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Secure Development</strong> – Build your fintech application with robust security measures
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Compliance Testing</strong> – Rigorous testing for security vulnerabilities and regulatory requirements
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Deployment & Maintenance</strong> – Launch and provide ongoing support for your fintech solution
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get a Free Fintech App Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Fintech App Development Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions tailored to different business needs and budgets
              </p>
            </div>
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
                    <div className="mt-6 text-center">
                      <Link href="/contact">
                        <button className={`px-4 py-2 rounded-md ${pkg.featured ? 'bg-white text-[#4F1DD7]' : 'bg-[#D9345E] text-white'} font-medium`}>
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full h-fullpx-4 py-4 text-white">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Fintech App Development FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our fintech services</p>
          </div>
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