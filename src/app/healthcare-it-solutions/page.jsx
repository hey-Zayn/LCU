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

  const healthcareServices = [
    {
      title: "Electronic Health Records (EHR) Solutions",
      dis: "Comprehensive EHR systems that streamline patient data management, improve care coordination, and ensure compliance with healthcare regulations. Our healthcare IT solutions integrate seamlessly with existing workflows.",
    },
    {
      title: "Telemedicine Platform Development",
      dis: "Custom telehealth solutions that enable remote consultations, virtual visits, and secure patient-provider communication. Our IT solutions for healthcare industry include HIPAA-compliant video conferencing and messaging.",
    },
    {
      title: "Healthcare Data Analytics",
      dis: "Advanced analytics platforms that transform clinical and operational data into actionable insights. Our healthcare IT consulting services help organizations make data-driven decisions.",
    },
    {
      title: "Medical Practice Management Software",
      dis: "End-to-end practice management solutions for scheduling, billing, claims processing, and revenue cycle management. We're among the leading healthcare IT solutions providers for ambulatory practices.",
    },
    {
      title: "Patient Portal Development",
      dis: "Secure patient engagement platforms that allow access to medical records, appointment scheduling, prescription refills, and bill payment. Our IT solutions for healthcare improve patient satisfaction and outcomes.",
    },
    {
      title: "Healthcare CRM Systems",
      dis: "Custom customer relationship management solutions tailored for healthcare providers, payers, and pharmaceutical companies. Our healthcare IT solutions companies specialize in patient journey optimization.",
    },
    {
      title: "Healthcare Interoperability Solutions",
      dis: "HL7/FHIR-compliant integration services that connect disparate healthcare systems. We provide IT solutions for healthcare industry that break down data silos.",
    },
    {
      title: "Regulatory Compliance Solutions",
      dis: "HIPAA, GDPR, and other compliance-focused healthcare IT solutions that protect patient data and ensure regulatory adherence. Our healthcare IT consulting services include risk assessments and audits.",
    },
  ];

  const FAQS = [
    {
      title: "What are healthcare IT solutions?",
      dis: "Healthcare IT solutions encompass the technologies, software, and services that improve healthcare delivery, management, and administration. As leading healthcare IT solutions providers, we offer EHR systems, telemedicine platforms, practice management software, data analytics, and interoperability solutions that help healthcare organizations enhance patient care while optimizing operations.",
    },
    {
      title: "Why should healthcare organizations invest in IT solutions?",
      dis: "Healthcare IT solutions deliver numerous benefits: Improved patient care coordination, Enhanced operational efficiency, Better data security and compliance, Increased revenue through optimized billing, Valuable insights from healthcare analytics. Our IT solutions for healthcare industry help organizations meet regulatory requirements while improving patient outcomes.",
    },
    {
      title: "How do you ensure data security in healthcare IT solutions?",
      dis: "As trusted healthcare IT solutions providers, we implement multiple security measures: HIPAA-compliant infrastructure, End-to-end encryption, Regular security audits, Role-based access controls, Data backup and disaster recovery. Our healthcare IT consulting services include comprehensive security assessments to identify and address vulnerabilities.",
    },
    {
      title: "What makes your healthcare IT solutions different?",
      dis: "ForwardSols stands out among healthcare IT solutions companies by offering: Custom solutions tailored to specific healthcare verticals, Seamless integration with existing systems, User-friendly interfaces designed for healthcare workflows, Ongoing support and training, Proven track record with hospitals, clinics, and payers. Our IT solutions for healthcare are built by experts who understand clinical and administrative needs.",
    },
    {
      title: "How long does it take to implement healthcare IT solutions?",
      dis: "Implementation timelines vary based on solution complexity: Basic systems (EHR, practice management): 4-8 weeks, Telemedicine platforms: 6-10 weeks, Enterprise-wide solutions: 12-20 weeks, Custom development projects: 16-24 weeks. As experienced healthcare IT solutions providers, we provide detailed project plans and milestones during the discovery phase.",
    },
  ];

  const packages = [
    {
      name: "Basic Healthcare IT Package",
      features: [
        { title: "EHR System Implementation", detail: "Core electronic health records functionality" },
        { title: "Basic Telehealth Capabilities", detail: "Secure video consultations" },
        { title: "Practice Management", detail: "Scheduling and billing features" },
        { title: "HIPAA Compliance", detail: "Essential security measures" },
        { title: "1 Month Support", detail: "Post-implementation assistance" },
      ],
      featured: false,
    },
    {
      name: "Advanced Healthcare Solutions",
      features: [
        { title: "Custom EHR Configuration", detail: "Tailored to your specialty" },
        { title: "Comprehensive Telemedicine", detail: "With patient portal integration" },
        { title: "Revenue Cycle Management", detail: "Advanced billing and claims" },
        { title: "Interoperability", detail: "HL7/FHIR standards compliance" },
        { title: "3 Months Support", detail: "Including minor updates" },
      ],
      featured: false,
    },
    {
      name: "Enterprise Healthcare IT Suite",
      features: [
        { title: "Full EHR Customization", detail: "With clinical decision support" },
        { title: "Omnichannel Telehealth", detail: "Video, messaging, remote monitoring" },
        { title: "Advanced Analytics", detail: "Predictive modeling and reporting" },
        { title: "Enterprise Integration", detail: "Connect all departments and systems" },
        { title: "12 Months Support", detail: "With quarterly enhancements" },
      ],
      featured: true,
    },
    {
      name: "Custom Healthcare IT Solutions",
      features: [
        { title: "Tailored Development", detail: "Built to your exact specifications" },
        { title: "AI/ML Integration", detail: "For diagnostics and operational efficiency" },
        { title: "IoT Device Connectivity", detail: "Wearables and medical equipment" },
        { title: "Blockchain Security", detail: "For sensitive health data" },
        { title: "Dedicated Account Manager", detail: "Priority support and consulting" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Healthcare IT Solutions | EHR, Telemedicine & Analytics | ForwardSols</title>
        <meta name="description" content="ForwardSols provides comprehensive healthcare IT solutions including EHR systems, telemedicine platforms, practice management software, and healthcare data analytics. Trusted by hospitals, clinics, and healthcare providers." />
        <meta name="keywords" content="healthcare IT solutions, IT solutions for healthcare, healthcare IT consulting services, IT solutions for healthcare industry, healthcare IT solutions providers, healthcare IT solutions companies" />
        <meta property="og:title" content="Healthcare IT Solutions | EHR & Telemedicine Systems | ForwardSols" />
        <meta property="og:description" content="Innovative healthcare IT solutions that improve patient care and streamline operations. Custom EHR, telemedicine, and analytics platforms for healthcare organizations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forwardsols.com/healthcare-it-solutions" />
        <link rel="canonical" href="https://forwardsols.com/healthcare-it-solutions" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="healthcare-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Healthcare IT Solutions
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Transforming healthcare delivery with innovative technology solutions
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
                Comprehensive Healthcare IT Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                ForwardSols delivers cutting-edge healthcare IT solutions that empower providers to deliver better patient care while optimizing operations. As a leading provider of IT solutions for healthcare industry, we specialize in EHR systems, telemedicine platforms, practice management software, and healthcare data analytics.
              </p>
              <p className="mb-8 leading-relaxed">
                Our healthcare IT consulting services help organizations navigate digital transformation, ensuring seamless implementation and adoption of technology solutions. Whether you're a hospital, clinic, or healthcare network, we provide tailored IT solutions for healthcare that address your unique challenges.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Request Consultation
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Our Healthcare IT Solutions?
              </h1>
              <p className="leading-relaxed mb-4">
                As one of the top healthcare IT solutions providers, we offer:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Clinical Expertise</strong> - Solutions designed by healthcare IT specialists who understand clinical workflows
                </li>
                <li className="text-white/80 text-base">
                  <strong>Regulatory Compliance</strong> - HIPAA, GDPR, and other healthcare regulations built into our solutions
                </li>
                <li className="text-white/80 text-base">
                  <strong>Interoperability</strong> - Seamless integration with existing systems and devices
                </li>
                <li className="text-white/80 text-base">
                  <strong>Proven Results</strong> - Demonstrated improvements in patient care and operational efficiency
                </li>
                <li className="text-white/80 text-base">
                  <strong>Ongoing Support</strong> - 24/7 technical assistance and regular updates
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our healthcare IT consulting services ensure you select and implement the right solutions for your organization's needs and budget.
              </p>
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

        {/* Core Services */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <div className="text-center">
            <h1 className="text-white font-bold text-5xl max-sm:text-3xl">
              Our Healthcare IT Solutions
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive technology solutions for every aspect of healthcare delivery
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {healthcareServices?.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Our Healthcare IT Implementation Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a structured approach to ensure successful healthcare IT implementations:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Needs Assessment</strong> - Understand your clinical and operational requirements
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Solution Design</strong> - Create customized healthcare IT solutions
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Configuration & Integration</strong> - Implement with minimal disruption
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Staff Training</strong> - Ensure smooth adoption across your organization
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Go-Live Support</strong> - On-site assistance during launch
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Ongoing Optimization</strong> - Continuous improvements and updates
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get Implementation Plan
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Solution Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions tailored to healthcare organizations of all sizes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    }`}
                >
                  <div
                    className={`p-6 ${pkg.featured
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
                    <div className="mt-6 text-center">
                      <Link href="/contact">
                        <button className={`px-4 py-2 rounded-md ${pkg.featured ? 'bg-white text-[#4F1DD7]' : 'bg-[#D9345E] text-white'} font-medium`}>
                          Request Demo
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full h-full px-4 py-4 text-white">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Healthcare IT Solutions FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our healthcare technology services</p>
          </div>
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
              {FAQS?.map((card, index) => (
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