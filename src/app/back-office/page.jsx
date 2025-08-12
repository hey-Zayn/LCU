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

  // SEO-optimized, high-volume, low-difficulty keywords for back office services
  const SEOTypes = [
    {
      title: "Back Office Outsourcing Services",
      dis: "Maximize efficiency and reduce costs with professional back office outsourcing services from Forward Solutions. Our expert team streamlines your business operations, automates repetitive tasks, and ensures data accuracy for scalable growth. Discover why businesses trust https://www.forwardsols.com/ for reliable back office support.",
    },
    {
      title: "Business Process Automation Solutions",
      dis: "Accelerate your business with advanced business process automation. We implement cutting-edge automation tools to eliminate manual processes, boost productivity, and enhance workflow management. Partner with Forward Solutions for seamless business process automation.",
    },
    {
      title: "Data Entry and Management Services",
      dis: "Ensure data integrity and security with our data entry and management services. Our specialists handle high-volume data processing, cleansing, and validation, helping your business make data-driven decisions. Choose https://www.forwardsols.com/ for accurate and secure data management.",
    },
    {
      title: "Payroll and HR Administration",
      dis: "Simplify payroll processing and HR administration with Forward Solutions. Our back office experts manage payroll, benefits, and compliance, allowing you to focus on core business activities. Experience hassle-free HR support with our tailored solutions.",
    },
    {
      title: "Accounting and Bookkeeping Services",
      dis: "Gain financial clarity with our comprehensive accounting and bookkeeping services. We provide real-time financial reporting, expense tracking, and tax-ready documentation to keep your business compliant and profitable.",
    },
    {
      title: "Document Management and Digitalization",
      dis: "Transform your document workflow with secure document management and digitalization. Forward Solutions digitizes, organizes, and stores your business documents for easy retrieval and regulatory compliance.",
    },
    {
      title: "Regulatory Compliance & Risk Management",
      dis: "Stay ahead of regulations with our compliance and risk management solutions. We monitor industry standards, implement best practices, and reduce operational risks for your business.",
    },
    {
      title: "Customer Support Back Office Solutions",
      dis: "Enhance customer satisfaction with dedicated back office customer support. Our team manages inquiries, order processing, and after-sales support to deliver a seamless customer experience.",
    },
    {
      title: "IT Infrastructure & Cloud Management",
      dis: "Secure your business with robust IT infrastructure and cloud management services. We ensure system reliability, data protection, and business continuity for organizations of all sizes.",
    },
  ];

  const FAQS = [
    {
      title: "What are the advantages of back office outsourcing?",
      dis: "Back office outsourcing reduces operational costs, increases efficiency, and allows your business to focus on core competencies. By leveraging Forward Solutions' expertise, you gain access to advanced technology, skilled professionals, and scalable solutions tailored to your needs.",
    },
    {
      title: "How does business process automation benefit my company?",
      dis: "Business process automation eliminates manual tasks, reduces errors, and accelerates workflow. This leads to faster turnaround times, improved accuracy, and significant cost savings for your organization.",
    },
    {
      title: "Is my business data secure with Forward Solutions?",
      dis: "Absolutely. At https://www.forwardsols.com/, we prioritize data security with robust encryption, access controls, and compliance with industry standards. Your sensitive information is protected at every stage of our process.",
    },
    {
      title: "How quickly can I implement back office solutions?",
      dis: "Implementation timelines vary based on your business requirements. Most clients experience a smooth transition within a few weeks, with minimal disruption to daily operations. Our team ensures a seamless onboarding process.",
    },
  ];

  const packages = [
    {
      name: "Starter Back Office Package",
      features: [
        { title: "Basic Data Entry & Processing", detail: "Accurate and efficient data entry for small businesses" },
        { title: "Payroll Setup & Management", detail: "Streamlined payroll processing and compliance" },
        { title: "Document Digitalization", detail: "Digitize and organize essential business documents" },
        { title: "Email & Admin Support", detail: "Professional administrative support for daily tasks" },
        { title: "Basic IT Support", detail: "Setup and maintenance of essential IT infrastructure" },
      ],
      featured: false,
    },
    {
      name: "Growth Automation Package",
      features: [
        { title: "Business Process Automation", detail: "Automate repetitive tasks and workflows" },
        { title: "Advanced Bookkeeping", detail: "Comprehensive financial tracking and reporting" },
        { title: "HR & Benefits Administration", detail: "Full-service HR support and benefits management" },
        { title: "Regulatory Compliance Monitoring", detail: "Ongoing compliance checks and risk mitigation" },
        { title: "Cloud Storage Solutions", detail: "Secure cloud-based document management" },
      ],
      featured: false,
    },
    {
      name: "Premium Back Office Suite",
      features: [
        { title: "End-to-End Back Office Outsourcing", detail: "Complete management of all back office functions" },
        { title: "Real-Time Analytics & Reporting", detail: "Business intelligence dashboards and insights" },
        { title: "Enterprise Payroll & HR", detail: "Scalable payroll and HR solutions for large teams" },
        { title: "IT Infrastructure Management", detail: "Proactive IT support and cloud management" },
        { title: "Dedicated Account Manager", detail: "Personalized support and strategic guidance" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Transformation Package",
      features: [
        { title: "Custom Process Reengineering", detail: "Tailored solutions for complex business needs" },
        { title: "Global Compliance & Risk Management", detail: "International regulatory support and risk controls" },
        { title: "AI-Powered Automation", detail: "Leverage AI for smarter, faster operations" },
        { title: "Multi-Channel Customer Support", detail: "Omnichannel back office support for global clients" },
        { title: "Business Continuity Planning", detail: "Disaster recovery and operational resilience" },
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Back Office Outsourcing Services | Business Process Automation | Forward Solutions</title>
        <meta
          name="description"
          content="Boost efficiency and cut costs with top-rated back office outsourcing, business process automation, payroll, data entry, and compliance solutions. Trusted by businesses worldwide. Visit https://www.forwardsols.com/ for expert support."
        />
        <meta
          name="keywords"
          content="back office outsourcing, business process automation, data entry services, payroll processing, HR administration, document management, compliance solutions, IT infrastructure, cloud management, Forward Solutions"
        />
        <link rel="canonical" href="https://www.forwardsols.com/back-office" />
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
              Back Office Outsourcing & Automation
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
                Unlock Business Growth with Back Office Outsourcing
              </h1>
              <p className="mb-8 leading-relaxed">
                Are you searching for ways to reduce operational costs and improve efficiency? Forward Solutions delivers industry-leading back office outsourcing, business process automation, and data management services. Our team of experts leverages the latest technology to automate workflows, streamline payroll, and ensure regulatory compliance. Join hundreds of businesses who trust <b>https://www.forwardsols.com/</b> for reliable, scalable back office solutions that drive real results.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Call to Action ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Optimize Your Back Office for Maximum ROI
              </h1>
              <p className="mb-8 leading-relaxed">
                Is your back office holding your business back? Let Forward Solutions assess your current operations and implement high-impact automation, data entry, and compliance solutions. Our proven strategies help you save time, reduce errors, and focus on what matters most—growing your business.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Request a Free Consultation
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
            Back Office Services We Offer
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEOTypes?.map((card, index) => (
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
                When to Invest in Back Office Solutions?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your business is struggling with operational efficiency, data management, or administrative tasks, our back office solutions are here to transform your operations. We specialize in streamlining processes, implementing automation, and optimizing workflows to help your business run smoothly. With our expertise in back office management, we can help you reduce costs, improve accuracy, and focus on your core business activities.
                </p>

              </div>
              <Link href={`/contact`}><button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
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
        <ServiceForm />
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
