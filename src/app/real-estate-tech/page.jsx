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

  const realEstateTechServices = [
    {
      title: "Property Management Software",
      dis: "Our cutting-edge real estate tech solutions streamline property management with automated workflows, tenant screening, and maintenance tracking. Perfect for real estate tech companies looking to optimize operations.",
    },
    {
      title: "AI-Powered Valuation Tools",
      dis: "Leverage machine learning algorithms to get accurate property valuations instantly. Our real estate tech innovations help investors and agents make data-driven decisions faster.",
    },
    {
      title: "Virtual Tour Platforms",
      dis: "Immersive 3D and VR technology that transforms property showcasing. One of the most in-demand tech in real estate for modern buyers and sellers.",
    },
    {
      title: "Blockchain for Real Estate",
      dis: "Secure, transparent transaction platforms using blockchain technology. ForwardSols is at the forefront of tech-driven innovation trends in real estate.",
    },
    {
      title: "Smart Home Integration",
      dis: "Seamlessly connect IoT devices and smart home systems for modern properties. Essential tech for real estate professionals serving tech-savvy clients.",
    },
    {
      title: "CRM for Real Estate Agents",
      dis: "Specialized customer relationship management tools designed for the unique needs of real estate professionals. Our real estate tech solutions help you nurture leads more effectively.",
    },
    {
      title: "Automated Marketing Platforms",
      dis: "AI-driven marketing tools that create and optimize campaigns across channels. A must-have for real estate tech startups looking to scale quickly.",
    },
    {
      title: "Data Analytics Dashboard",
      dis: "Comprehensive market insights and performance metrics to guide your strategy. Our real estate tech platforms provide the intelligence you need to stay ahead.",
    },
  ];

  const FAQS = [
    {
      title: "What is real estate technology?",
      dis: "Real estate tech refers to innovative technologies transforming how properties are bought, sold, managed, and marketed. At ForwardSols, we develop cutting-edge real estate tech solutions including property management software, valuation tools, virtual tour platforms, and transaction management systems that are revolutionizing the industry.",
    },
    {
      title: "How can technology benefit my real estate business?",
      dis: "Implementing the right real estate tech can help you: Save time through automation, Improve accuracy with data-driven insights, Enhance customer experiences with virtual tools, Increase efficiency in transactions, Gain competitive advantage with innovative solutions. Our real estate tech platforms are designed specifically to address these business needs.",
    },
    {
      title: "What makes ForwardSols different from other real estate tech companies?",
      dis: "ForwardSols stands out among real estate tech startups with our: Focus on user-friendly interfaces, Customizable solutions for different market segments, Integration capabilities with existing systems, Dedicated support and training programs, Continuous innovation based on industry feedback. We don't just provide tech in real estate - we create solutions that solve real business challenges.",
    },
    {
      title: "Do you offer training for your real estate tech platforms?",
      dis: "Yes, we provide comprehensive training similar to Greenville Tech real estate classes or York Tech real estate courses. Our onboarding includes: Live training sessions, Video tutorials, Detailed documentation, Ongoing support. Whether you're looking for Wake Tech real estate class-level instruction or enterprise training, we adapt to your team's needs.",
    },
    {
      title: "Can your solutions integrate with my current systems?",
      dis: "Absolutely. Our real estate tech is designed for seamless integration with: MLS systems, CRM platforms, Accounting software, Marketing tools, Payment processors. We follow tech-driven innovation trends in real estate to ensure compatibility with the systems you already use.",
    },
  ];

  const packages = [
    {
      name: "Starter Real Estate Tech Package",
      features: [
        { title: "Basic Property Management", detail: "Core features for small portfolios" },
        { title: "Essential Marketing Tools", detail: "Listing syndication and basic automation" },
        { title: "Standard Support", detail: "Email support during business hours" },
        { title: "1 User License", detail: "Single user access" },
      ],
      featured: false,
    },
    {
      name: "Professional Real Estate Tech Suite",
      features: [
        { title: "Advanced Management Tools", detail: "For growing real estate businesses" },
        { title: "AI-Powered Valuations", detail: "Automated property assessments" },
        { title: "Priority Support", detail: "24/7 email and chat" },
        { title: "5 User Licenses", detail: "Small team access" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Real Estate Platform",
      features: [
        { title: "Custom Real Estate Tech Solutions", detail: "Tailored to your workflows" },
        { title: "Full System Integration", detail: "With your existing tools" },
        { title: "Dedicated Account Manager", detail: "Strategic guidance and support" },
        { title: "Unlimited Team Members", detail: "With role-based permissions" },
      ],
      featured: false,
    },
    {
      name: "Brokerage Technology Package",
      features: [
        { title: "Multi-Agent Management", detail: "Dashboard for your entire team" },
        { title: "Advanced Analytics", detail: "Performance tracking across agents" },
        { title: "White-label Branding", detail: "Customized with your brokerage identity" },
        { title: "API Access", detail: "For complete system integration" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Real Estate Technology Solutions | ForwardSols</title>
        <meta name="description" content="ForwardSols provides innovative real estate tech solutions including property management software, AI valuation tools, and virtual tour platforms. Transform your real estate business with our cutting-edge technology." />
        <meta name="keywords" content="real estate tech, real estate tech companies, tech in real estate, real estate tech startups, tech-driven innovation trends in real estate, real estate tech jobs, real estate tech conference" />
        <meta property="og:title" content="Real Estate Technology Solutions | ForwardSols" />
        <meta property="og:description" content="Cutting-edge real estate tech solutions for property management, valuations, and transactions. Innovative technology for modern real estate professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forwardsols.com/real-estate-tech" />
        <meta property="og:image" content="https://forwardsols.com/images/real-estate-tech-og.jpg" />
        <link rel="canonical" href="https://forwardsols.com/real-estate-tech" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="real-estate-tech-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Real Estate Technology Solutions
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Innovative tech solutions transforming property management, sales, and investments
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
                Cutting-Edge Real Estate Tech Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                ForwardSols develops innovative real estate tech platforms that are transforming how properties are bought, sold, and managed. Our solutions help real estate tech companies streamline operations, enhance customer experiences, and drive growth.
              </p>
              <p className="mb-8 leading-relaxed">
                From AI-powered valuation tools to blockchain transaction platforms, we're at the forefront of tech in real estate. Whether you're a real estate tech startup or an established firm, our solutions scale to meet your needs.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Request Demo
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
                Why Choose Our Real Estate Tech?
              </h1>
              <p className="leading-relaxed mb-4">
                Our real estate tech platforms stand out because:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Comprehensive Solutions</strong> - End-to-end platforms covering all aspects of real estate operations
                </li>
                <li className="text-white/80 text-base">
                  <strong>Proven Results</strong> - Used by leading real estate tech companies worldwide
                </li>
                <li className="text-white/80 text-base">
                  <strong>User-Friendly Design</strong> - Intuitive interfaces that require minimal training
                </li>
                <li className="text-white/80 text-base">
                  <strong>Data Security</strong> - Enterprise-grade protection for sensitive information
                </li>
                <li className="text-white/80 text-base">
                  <strong>Continuous Innovation</strong> - Regular updates incorporating the latest tech-driven innovation trends in real estate
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our solutions are designed to help you stay ahead in the competitive real estate tech landscape.
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
              Real Estate Tech Solutions
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive technology solutions for every aspect of real estate
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {realEstateTechServices?.map((card, index) => (
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
                Our Real Estate Tech Implementation Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We make adopting real estate technology seamless:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Needs Assessment</strong> - Understanding your specific challenges and goals
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Solution Design</strong> - Customizing our real estate tech platforms for your business
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Integration</strong> - Connecting with your existing systems and workflows
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Training</strong> - Comprehensive instruction for your team (similar to York Tech real estate courses)
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Launch</strong> - Going live with full support from our team
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Ongoing Optimization</strong> - Continuous improvements based on your feedback
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Real Estate Tech Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions for real estate professionals at every level
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Real Estate Tech FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our real estate technology</p>
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