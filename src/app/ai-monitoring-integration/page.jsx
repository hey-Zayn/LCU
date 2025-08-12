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

  const SEOTpyes = [
    {
      title: "AI Development & Automation Services",
      dis: "Build custom AI models to automate repetitive tasks and enhance decision-making. Our AI integration solutions are tailored to your specific business needs, ensuring maximum efficiency and productivity gains.",
    },
    {
      title: "AI-Powered Web Development & Optimization",
      dis: "Advanced AI integration for websites delivering faster performance, enhanced security, and superior user experience improvements. We create responsive, scalable websites that drive engagement and conversions.",
    },
    {
      title: "AI-Driven SEO & Digital Growth",
      dis: "Data-driven SEO strategies with AI-powered analytics for higher search rankings and increased organic traffic. Our AI business integration approach combines technical SEO with content optimization.",
    },
    {
      title: "AI Business Process Integration",
      dis: "Streamline operations with AI monitoring across CRM, ERP, and cloud services. Our AI integration consulting ensures seamless data flow and real-time insights across all systems.",
    },
    {
      title: "AI Predictive Analytics Solutions",
      dis: "Leverage AI-powered predictive models to forecast trends, anticipate customer behavior, and make data-driven decisions with confidence through our AI data integration services.",
    },
    {
      title: "AI Chatbot Integration Services",
      dis: "Implement intelligent chatbots with seamless AI integration for 24/7 customer support, lead generation, and personalized user interactions across multiple channels.",
    },
    {
      title: "AI Data Visualization Tools",
      dis: "Transform complex data into actionable insights with interactive dashboards and real-time reporting powered by advanced AI integration algorithms.",
    },
    {
      title: "Cloud AI Integration Solutions",
      dis: "Deploy scalable AI integration services on cloud platforms for enhanced flexibility, security, and cost-efficiency in your operations.",
    },
  ];

  const FAQS = [
    {
      title: "What is AI Monitoring Integration?",
      dis: "AI Monitoring Integration uses artificial intelligence to track, analyze, and optimize business processes in real time. Our AI integration services help businesses automate workflows and gain valuable insights.",
    },
    {
      title: "How does AI improve SEO?",
      dis: "Our AI integration tools analyze search trends, optimize content, and enhance rankings faster than manual methods. We specialize in AI-powered SEO strategies that deliver measurable results.",
    },
    {
      title: "Do you offer custom AI integration solutions?",
      dis: "Yes! We provide tailored AI integration consulting based on your specific business needs, whether you need AI data integration, chatbot implementation, or full-scale AI business process automation.",
    },
    {
      title: "Is there a free trial for your AI integration services?",
      dis: "Contact us to learn about our trial options for AI monitoring integration and get started with transforming your business operations today.",
    },
  ];

  const packages = [
    {
      name: "Starter AI Integration Package",
      features: [
        { title: "System Health Monitoring", detail: "Basic real-time monitoring of critical system metrics with AI integration" },
        {
          title: "AI-Powered Alerts",
          detail: "Customizable notifications for system anomalies using AI monitoring",
        },
        { title: "Data Integration", detail: "Seamless AI integration with 3 core business systems" },
        { title: "Performance Dashboards", detail: "Essential visualization of key operational metrics" },
        { title: "Security Monitoring", detail: "Fundamental AI threat detection and prevention" },
        { title: "Monthly Reporting", detail: "Comprehensive system performance analysis" },
      ],
      featured: false,
    },
    {
      name: "Advanced AI Monitoring Solutions",
      features: [
        { title: "Predictive Analytics", detail: "AI-driven forecasting of system performance trends" },
        {
          title: "Automated Workflows",
          detail: "AI integration with 10+ business applications",
        },
        { title: "Custom AI Models", detail: "Tailored machine learning solutions for your operations" },
        { title: "24/7 System Monitoring", detail: "Continuous AI oversight with immediate response" },
        { title: "API Integration", detail: "Seamless AI connection with existing enterprise systems" },
        {
          title: "Quarterly Optimization",
          detail: "Regular AI system performance enhancements",
        },
      ],
      featured: false,
    },
    {
      name: "Enterprise AI Integration Suite",
      features: [
        { title: "Full System Integration", detail: "End-to-end AI monitoring across all business units" },
        {
          title: "AI-Driven Decision Support",
          detail: "Advanced analytics for strategic business decisions",
        },
        { title: "Custom Automation", detail: "Tailored AI solutions for complex processes" },
        { title: "Cybersecurity AI", detail: "Proactive threat detection and mitigation" },
        { title: "Scalable Infrastructure", detail: "Cloud-based AI solutions for growth" },
        {
          title: "Dedicated AI Team",
          detail: "Personalized support and continuous improvement",
        },
      ],
      featured: true,
    },
    {
      name: "AI Transformation Integration Package",
      features: [
        { title: "Digital Transformation Strategy", detail: "Roadmap for AI adoption and integration" },
        {
          title: "Enterprise AI Platform",
          detail: "Unified system for all AI monitoring needs",
        },
        { title: "Machine Learning Operations", detail: "Full lifecycle management of AI models" },
        { title: "IoT Integration", detail: "AI connection with smart devices and sensors" },
        { title: "Business Intelligence", detail: "AI analytics for operational optimization" },
        {
          title: "Executive AI Insights",
          detail: "Strategic reports and recommendations",
        },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>AI Integration Services | AI Monitoring & Business Automation Solutions</title>
        <meta name="description" content="Expert AI integration services for businesses. We provide AI monitoring, automation, data integration, and custom AI solutions to optimize your operations and boost efficiency." />
        <meta name="keywords" content="AI integration, AI monitoring, AI integration services, business AI solutions, AI automation, AI data integration, AI consulting, AI business integration" />
        <meta property="og:title" content="AI Integration Services | Business Automation Solutions" />
        <meta property="og:description" content="Transform your business with our AI integration services. Custom AI monitoring, automation, and data integration solutions tailored to your needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/ai-integration" />
        <link rel="canonical" href="https://www.forwardsols.com/ai-integration" />
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
              AI Integration Services & Solutions
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Transform your business with our comprehensive AI monitoring integration and automation solutions
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
                Boost Efficiency with AI-Powered Monitoring & Integration
              </h1>
              <p className="mb-8 leading-relaxed">
                Our AI integration services provide cutting-edge solutions to automate, optimize, and secure your business processes. From custom AI development and web solutions to AI-powered SEO and business process automation, we help you stay ahead with intelligent monitoring and seamless integrations. Our AI integration consulting ensures you get the most value from your technology investments.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Connect Now
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
                Why Choose Our AI Integration Services?
              </h1>
              <p className=" leading-relaxed mb-4">
                Modern businesses need real-time insights, automation, and scalability—our AI integration solutions deliver exactly that through:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Smart Automation</strong> – Reduce manual tasks with AI-driven workflows and business process integration
                </li>
                <li className="text-white/80 text-base">
                  <strong>Seamless Integrations</strong> – Connect your apps, databases, and APIs effortlessly with our AI integration services
                </li>
                <li className="text-white/80 text-base">
                  <strong>Proactive Monitoring</strong> – Detect anomalies and optimize performance instantly with AI monitoring
                </li>
                <li className="text-white/80 text-base">
                  <strong>AI-Powered SEO & Web Development</strong> – Enhanced strategies for better online visibility and performance
                </li>
                <li className="text-white/80 text-base">
                  <strong>Scalable Business Growth</strong> – Custom AI solutions tailored to your evolving needs
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
              Comprehensive AI Integration Solutions
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Our AI integration services cover all aspects of business automation and optimization
            </p>
          </div>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEOTpyes?.map((card, index) => (
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
                Our AI Integration Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven methodology for successful AI implementation:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Consultation</strong> – Assess your business needs and AI integration opportunities
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Custom AI Setup</strong> – Deploy tailored monitoring and automation tools
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Integration & Testing</strong> – Ensure seamless connectivity with your existing systems
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Ongoing Support</strong> – 24/7 monitoring, updates, and optimization
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Request AI Integration Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Integration Service Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose the right AI integration solution for your business needs and budget
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">AI Integration FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our AI services</p>
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