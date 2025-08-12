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

  const chatbotServices = [
    {
      title: "Custom AI Chatbot Development",
      dis: "Bespoke AI chatbot solutions tailored to your business needs. Our AI chatbot development services create intelligent virtual assistants that understand natural language and provide human-like responses.",
    },
    {
      title: "Enterprise AI Chatbot Solutions",
      dis: "Scalable chatbot platforms for large organizations with complex requirements. Our enterprise AI chatbot development service integrates with your existing systems for seamless operations.",
    },
    {
      title: "E-commerce Chatbot Development",
      dis: "AI-powered shopping assistants that boost conversions and customer satisfaction. We develop chatbots for 1x2 betting platforms and other niche e-commerce applications.",
    },
    {
      title: "Multilingual Chatbot Development",
      dis: "AI chatbots that communicate fluently in multiple languages, breaking down barriers for global businesses. Our AI chatbot developers specialize in localization.",
    },
    {
      title: "Voice-Enabled Chatbot Solutions",
      dis: "Conversational AI interfaces that understand and respond to voice commands. Perfect for hands-free customer interactions.",
    },
    {
      title: "Chatbot Integration Services",
      dis: "Seamless connection of your AI chatbot with CRM, ERP, and other business systems. Our AI chatbot development company ensures smooth data flow across platforms.",
    },
    {
      title: "Chatbot Analytics & Optimization",
      dis: "Continuous improvement of your chatbot's performance through detailed analytics and machine learning. We provide ongoing AI chatbot development services to enhance effectiveness.",
    },
    {
      title: "Chatbot Maintenance & Support",
      dis: "24/7 monitoring and regular updates for your AI chatbot. Our US-based AI chatbot development team provides reliable ongoing support.",
    },
  ];

  const FAQS = [
    {
      title: "What industries benefit from your AI chatbot development services?",
      dis: "Our AI chatbot solutions serve diverse sectors including e-commerce (including 1x2 betting platforms), healthcare, finance, education, and customer service. We tailor our enterprise AI chatbot development service to each industry's specific requirements and compliance standards.",
    },
    {
      title: "How long does it take to develop a custom AI chatbot?",
      dis: "Development timelines vary based on complexity, but most projects take 4-12 weeks. Our AI chatbot development process includes discovery, design, development, testing, and deployment phases. We provide clear timelines during our initial consultation.",
    },
    {
      title: "Can you integrate chatbots with our existing business systems?",
      dis: "Absolutely. As a leading AI chatbot development company, we specialize in integrating chatbots with CRM platforms, payment systems, databases, and proprietary software through APIs and custom middleware solutions.",
    },
    {
      title: "What makes your AI chatbot development services different?",
      dis: "ForwardSols combines technical expertise with deep industry knowledge. Our AI chatbot developers focus on creating solutions that: Understand context and intent accurately, Learn from interactions to improve over time, Maintain brand voice consistently, Handle complex queries effectively, and Scale with your business growth.",
    },
    {
      title: "Do you provide ongoing support after chatbot deployment?",
      dis: "Yes, we offer comprehensive maintenance packages for our AI chatbot development services, including: Regular performance audits, Conversation flow optimizations, New feature implementation, Security updates, and 24/7 technical support from our US-based team.",
    },
  ];

  const packages = [
    {
      name: "Starter Chatbot Package",
      features: [
        { title: "Basic AI Chatbot", detail: "Pre-built solution with limited customization" },
        { title: "Standard Integration", detail: "Connect with 1-2 business systems" },
        { title: "Email Support", detail: "Business hours support via email" },
        { title: "Basic Analytics", detail: "Conversation metrics and reporting" },
      ],
      featured: false,
    },
    {
      name: "Professional Chatbot Solution",
      features: [
        { title: "Custom AI Development", detail: "Tailored to your specific needs" },
        { title: "Multi-Channel Deployment", detail: "Website, mobile app, and messaging platforms" },
        { title: "Advanced Integration", detail: "Connect with 3-5 business systems" },
        { title: "Priority Support", detail: "24/7 email and chat support" },
        { title: "Enhanced Analytics", detail: "Sentiment analysis and performance insights" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Chatbot Platform",
      features: [
        { title: "Custom Enterprise Solution", detail: "For complex organizational needs" },
        { title: "Omnichannel Deployment", detail: "All customer touchpoints" },
        { title: "Full System Integration", detail: "Seamless connection with all business systems" },
        { title: "Dedicated Account Manager", detail: "Strategic guidance and support" },
        { title: "Advanced AI Capabilities", detail: "Machine learning and predictive analytics" },
      ],
      featured: false,
    },
    {
      name: "Chatbot Transformation Package",
      features: [
        { title: "Custom AI Development", detail: "Bespoke solution for your unique requirements" },
        { title: "Voice & Text Capabilities", detail: "Multimodal interaction options" },
        { title: "API Access", detail: "For complete system control" },
        { title: "White-label Branding", detail: "Fully customized to your brand" },
        { title: "Ongoing Optimization", detail: "Continuous improvement services" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>AI Chatbot Development Services | Custom Chatbot Solutions</title>
        <meta name="description" content="ForwardSols provides custom AI chatbot development services for businesses. Enterprise-grade chatbot solutions with natural language processing and seamless integrations." />
        <meta name="keywords" content="AI chatbot development services, AI chatbot development company, AI chatbot development, enterprise AI chatbot development service, developing AI chatbots for 1x2 betting, AI chatbot developer, AI chatbot app development services, AI chatbot development in USA" />
        <meta property="og:title" content="AI Chatbot Development Services | Custom Chatbot Solutions" />
        <meta property="og:description" content="Professional AI chatbot development services creating intelligent virtual assistants for businesses. Custom solutions with natural language processing and machine learning." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/ai-chatbot-development" />
        <meta property="og:image" content="https://www.forwardsols.com/images/ai-chatbot-development.jpg" />
        <link rel="canonical" href="https://www.forwardsols.com/ai-chatbot-development" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="chatbot-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              AI Chatbot Development Services
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Intelligent chatbot solutions that transform customer interactions and streamline operations
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
                Custom AI Chatbot Development
              </h1>
              <p className="mb-8 leading-relaxed">
                As a leading AI chatbot development company, ForwardSols creates intelligent virtual assistants that understand, learn, and respond like humans. Our AI chatbot development services combine cutting-edge natural language processing with your unique business requirements.
              </p>
              <p className="mb-8 leading-relaxed">
                Whether you need an enterprise AI chatbot development service or a specialized solution for 1x2 betting platforms, our US-based team delivers chatbots that drive engagement, reduce costs, and improve customer satisfaction.
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
                Why Choose Our AI Chatbot Development Services?
              </h1>
              <p className="leading-relaxed mb-4">
                ForwardSols stands out among AI chatbot development companies because we deliver:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Industry-Specific Solutions</strong> - Tailored AI chatbots for your business vertical
                </li>
                <li className="text-white/80 text-base">
                  <strong>Advanced NLP Capabilities</strong> - Human-like understanding and responses
                </li>
                <li className="text-white/80 text-base">
                  <strong>Seamless Integrations</strong> - Connect with your existing tech stack
                </li>
                <li className="text-white/80 text-base">
                  <strong>Continuous Learning</strong> - Chatbots that improve over time
                </li>
                <li className="text-white/80 text-base">
                  <strong>US-Based Development</strong> - Quality assurance and data security
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our AI chatbot developers combine technical expertise with business acumen to create solutions that drive real results.
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
              AI Chatbot Development Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive chatbot solutions for every business need
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {chatbotServices?.map((card, index) => (
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
                Our AI Chatbot Development Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven methodology for successful chatbot implementation:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Discovery Workshop</strong> - Understanding your business objectives and technical requirements
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Conversation Design</strong> - Mapping user journeys and dialog flows
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>AI Model Training</strong> - Teaching your chatbot industry-specific language
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Development & Testing</strong> - Building and refining your custom solution
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Deployment</strong> - Launching your chatbot across channels
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Optimization</strong> - Continuous improvement based on user interactions
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Start Your Chatbot Project
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Chatbot Development Packages</h2>
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">AI Chatbot Development FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our chatbot services</p>
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