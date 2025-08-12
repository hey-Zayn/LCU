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

  const chatGPTServices = [
    {
      title: "ChatGPT API Integration",
      dis: "Seamlessly integrate ChatGPT's powerful AI into your existing systems with our expert API integration services. We specialize in connecting ChatGPT with your CRM, ERP, and business applications.",
    },
    {
      title: "ChatGPT Website Integration",
      dis: "Enhance user engagement by integrating ChatGPT directly into your website. Our solutions create intelligent chatbots and virtual assistants that provide 24/7 customer support.",
    },
    {
      title: "ChatGPT Excel Integration",
      dis: "Transform your spreadsheets with AI-powered automation. Our ChatGPT Excel integration enables natural language data analysis, formula generation, and report automation.",
    },
    {
      title: "ChatGPT Salesforce Integration",
      dis: "Boost your CRM capabilities with AI-powered insights. Our Salesforce and ChatGPT integration automates data entry, generates reports, and enhances customer interactions.",
    },
    {
      title: "ChatGPT Slack Integration",
      dis: "Bring AI directly into your team collaboration space. Our Slack integration delivers instant answers, meeting summaries, and task automation within your existing workflows.",
    },
    {
      title: "ChatGPT Microsoft Teams Integration",
      dis: "Enhance productivity with AI in your daily communications. Our Teams integration provides real-time assistance during meetings, email drafting, and document analysis.",
    },
    {
      title: "ChatGPT Zapier Integration",
      dis: "Connect ChatGPT with thousands of apps through Zapier. Automate workflows between ChatGPT and your favorite business tools without coding.",
    },
    {
      title: "Custom ChatGPT Integration Solutions",
      dis: "Tailored AI integration services for your unique business needs. We develop custom solutions that connect ChatGPT with your proprietary systems and applications.",
    },
  ];

  const FAQS = [
    {
      title: "What platforms can you integrate with ChatGPT?",
      dis: "Our ChatGPT integration services cover all major platforms including: Microsoft Office (Excel, Word, Outlook), Google Workspace (Docs, Sheets), CRM systems (Salesforce, HubSpot), collaboration tools (Slack, Teams), and custom business applications. We specialize in ChatGPT API integration for seamless connectivity.",
    },
    {
      title: "How long does ChatGPT integration typically take?",
      dis: "Implementation time varies based on complexity: Basic ChatGPT website integration (1-2 weeks), Standard API integrations (2-4 weeks), Custom enterprise solutions (4-8 weeks). We provide detailed timelines after assessing your specific requirements for ChatGPT app integration.",
    },
    {
      title: "Can you integrate ChatGPT with our existing AI systems?",
      dis: "Absolutely. As specialists in ChatGPT integration with other systems, we regularly combine multiple AI platforms to create comprehensive solutions. Our team ensures seamless interoperability between ChatGPT and your current AI infrastructure.",
    },
    {
      title: "What makes your ChatGPT integration services different?",
      dis: "ForwardSols offers: Enterprise-grade security for all integrations, Custom training for your specific use case, Ongoing maintenance and updates, Performance optimization, and White-glove support. Our ChatGPT integration solutions are designed for scalability and reliability.",
    },
    {
      title: "Do you provide training after integration?",
      dis: "Yes, we offer comprehensive training packages including: Administrator training for IT teams, End-user guides for employees, Best practices documentation, and Ongoing support sessions. For ChatGPT Slack integration or other specific platforms, we provide platform-specific training materials.",
    },
  ];

  const packages = [
    {
      name: "Basic ChatGPT Integration",
      features: [
        { title: "Single Platform Integration", detail: "Connect ChatGPT with one business system" },
        { title: "Standard API Configuration", detail: "Pre-built implementation with limited customization" },
        { title: "Email Support", detail: "Business hours support via email" },
        { title: "Basic Documentation", detail: "Integration guide and user manual" },
      ],
      featured: false,
    },
    {
      name: "Professional ChatGPT Integration",
      features: [
        { title: "Multi-Platform Integration", detail: "Connect with 3-5 business systems" },
        { title: "Custom Workflow Automation", detail: "Tailored to your specific processes" },
        { title: "Priority Support", detail: "24/7 email and chat support" },
        { title: "Advanced Analytics", detail: "Usage metrics and performance insights" },
        { title: "Training Sessions", detail: "2 hours of staff training" },
      ],
      featured: true,
    },
    {
      name: "Enterprise ChatGPT Integration",
      features: [
        { title: "Full System Integration", detail: "Seamless connection across all platforms" },
        { title: "Custom API Development", detail: "Bespoke solutions for complex needs" },
        { title: "Dedicated Account Manager", detail: "Strategic guidance and support" },
        { title: "Comprehensive Training", detail: "Department-specific training programs" },
        { title: "Security Audit", detail: "Full security review and compliance check" },
      ],
      featured: false,
    },
    {
      name: "Custom AI Integration Suite",
      features: [
        { title: "Multi-AI Platform Integration", detail: "Combine ChatGPT with other AI services" },
        { title: "Custom Dashboard", detail: "Unified control panel for all integrations" },
        { title: "API Access", detail: "For complete system control" },
        { title: "Continuous Optimization", detail: "Regular performance enhancements" },
        { title: "SLA Guarantee", detail: "99.9% uptime guarantee" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>ChatGPT Integration Services | AI Solutions | ForwardSols</title>
        <meta name="description" content="Expert ChatGPT integration services for businesses. Connect ChatGPT with your website, CRM, and business applications. Custom AI solutions by ForwardSols." />
        <meta name="keywords" content="ChatGPT integration, ChatGPT API integration, ChatGPT website integration, ChatGPT Excel integration, ChatGPT Salesforce integration, ChatGPT Slack integration, best ChatGPT integrations, how to integrate ChatGPT" />
        <meta property="og:title" content="ChatGPT Integration Services | AI Solutions | ForwardSols" />
        <meta property="og:description" content="Professional ChatGPT integration services connecting AI to your business systems. Custom solutions for websites, CRMs, and productivity tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/chatgpt-integration" />
        <meta property="og:image" content="https://www.forwardsols.com/images/chatgpt-integration-services.jpg" />
        <link rel="canonical" href="https://www.forwardsols.com/chatgpt-integration" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="chatgpt-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              ChatGPT Integration Services
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Power your business with seamless AI integration across all your platforms
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
                Custom ChatGPT Integration Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                As a leading ChatGPT integration service provider, ForwardSols creates intelligent connections between OpenAI's powerful AI and your business systems. Our ChatGPT integration services transform how you work with data, customers, and teams.
              </p>
              <p className="mb-8 leading-relaxed">
                Whether you need ChatGPT API integration for your backend systems or user-facing ChatGPT website integration for customer support, we deliver solutions that enhance productivity, automate workflows, and create competitive advantages.
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

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Our ChatGPT Integration Services?
              </h1>
              <p className="leading-relaxed mb-4">
                ForwardSols stands out among ChatGPT integration providers because we deliver:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Platform Expertise</strong> - Specialized in ChatGPT integration with Excel, Salesforce, Slack, and more
                </li>
                <li className="text-white/80 text-base">
                  <strong>Custom Solutions</strong> - Tailored ChatGPT app integration for your unique workflows
                </li>
                <li className="text-white/80 text-base">
                  <strong>Seamless Deployment</strong> - Smooth ChatGPT API integration with minimal disruption
                </li>
                <li className="text-white/80 text-base">
                  <strong>Enterprise Security</strong> - Robust protection for your data in all integrations
                </li>
                <li className="text-white/80 text-base">
                  <strong>Ongoing Support</strong> - Continuous optimization and maintenance
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our ChatGPT integration specialists combine technical expertise with business acumen to create solutions that drive measurable results.
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
              ChatGPT Integration Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive AI integration solutions for every business need
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {chatGPTServices?.map((card, index) => (
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
                Our ChatGPT Integration Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven methodology for successful ChatGPT implementation:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Requirement Analysis</strong> - Understanding your business objectives and technical environment
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Platform Selection</strong> - Determining the best ChatGPT integration approach (API, plugin, or custom)
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Development</strong> - Building the integration with security and scalability in mind
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Testing</strong> - Rigorous validation across all use cases and edge conditions
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Deployment</strong> - Implementing the solution with minimal disruption
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Training & Optimization</strong> - Ensuring your team gets maximum value from the integration
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Start Your ChatGPT Integration Project
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">ChatGPT Integration Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions for businesses of all sizes
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

        {/* FAQs */}
        <section className="w-full h-full px-4 py-4 text-white">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">ChatGPT Integration FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our ChatGPT integration services</p>
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