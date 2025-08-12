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

  const blockchainServices = [
    {
      title: "Blockchain Development Services",
      dis: "End-to-end blockchain solutions including smart contracts, dApps, and enterprise blockchain implementation. Our blockchain development services help businesses leverage distributed ledger technology.",
    },
    {
      title: "Blockchain Consulting",
      dis: "Strategic guidance for blockchain adoption, technology selection, and implementation roadmap. Our blockchain consulting services help organizations identify the best use cases for their industry.",
    },
    {
      title: "Blockchain for Identity Management",
      dis: "Secure digital identity solutions using blockchain technology. We implement blockchain identity verification systems that enhance security while improving user experience.",
    },
    {
      title: "Blockchain in Supply Chain",
      dis: "Transparent and tamper-proof supply chain solutions using blockchain. Track products from origin to consumer with our blockchain supply chain solutions.",
    },
    {
      title: "Blockchain for Financial Services",
      dis: "Transform banking, payments, and trade finance with blockchain technology. Our financial blockchain solutions reduce costs while increasing transparency.",
    },
    {
      title: "Blockchain Integration Services",
      dis: "Seamlessly integrate blockchain with your existing systems and workflows. Our blockchain API integration services connect blockchain with your CRM, ERP, and other business applications.",
    },
    {
      title: "Smart Contract Development",
      dis: "Secure, audited smart contracts for various blockchain platforms. Our Ethereum, Hyperledger, and other blockchain smart contracts automate business processes.",
    },
    {
      title: "Blockchain Security Services",
      dis: "Comprehensive security audits and penetration testing for blockchain applications. Protect your dApps and smart contracts with our blockchain security services.",
    },
  ];

  const FAQS = [
    {
      title: "What industries benefit most from blockchain technology?",
      dis: "Our blockchain solutions serve diverse sectors including finance (blockchain for payments), healthcare (blockchain for medical records), supply chain (blockchain logistics), retail (blockchain for retail industry), and government (blockchain for government contracts). We specialize in industry-specific blockchain implementations.",
    },
    {
      title: "How do you ensure the security of blockchain solutions?",
      dis: "We follow blockchain security best practices including smart contract audits, penetration testing, and proper key management. Our blockchain security services include comprehensive threat modeling and security assessments.",
    },
    {
      title: "Can you integrate blockchain with our existing systems?",
      dis: "Absolutely. As a leading blockchain development company, we specialize in blockchain integration with existing databases, CRMs, and business intelligence tools. Our blockchain API services ensure seamless operation within your tech stack.",
    },
    {
      title: "What blockchain platforms do you work with?",
      dis: "We have expertise in Ethereum, Hyperledger, Corda, Binance Smart Chain, and other enterprise blockchain platforms. We help select the right blockchain for your specific use case.",
    },
    {
      title: "Do you provide ongoing support after deployment?",
      dis: "Yes, we offer comprehensive blockchain maintenance packages including network monitoring, smart contract upgrades, and 24/7 technical support from our blockchain experts.",
    },
  ];

  const packages = [
    {
      name: "Starter Blockchain Package",
      features: [
        { title: "Basic Blockchain Implementation", detail: "Pre-built solution with limited customization" },
        { title: "Single Platform Integration", detail: "Connect with 1-2 business systems" },
        { title: "Email Support", detail: "Business hours support via email" },
        { title: "Basic Documentation", detail: "Technical guide and user manual" },
      ],
      featured: false,
    },
    {
      name: "Professional Blockchain Solution",
      features: [
        { title: "Custom Blockchain Development", detail: "Tailored to your specific business needs" },
        { title: "Multi-Platform Integration", detail: "Connect with 3-5 business systems" },
        { title: "Smart Contract Development", detail: "Basic smart contracts for your use case" },
        { title: "Priority Support", detail: "24/7 email and chat support" },
        { title: "Security Audit", detail: "Basic security review of your implementation" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Blockchain Platform",
      features: [
        { title: "Custom Enterprise Solution", detail: "For complex organizational needs" },
        { title: "Full System Integration", detail: "Seamless connection with all business systems" },
        { title: "Advanced Smart Contracts", detail: "Complex business logic automation" },
        { title: "Dedicated Account Manager", detail: "Strategic guidance and support" },
        { title: "Comprehensive Security", detail: "Penetration testing and threat modeling" },
      ],
      featured: false,
    },
    {
      name: "Blockchain Transformation Package",
      features: [
        { title: "Multi-Platform Blockchain", detail: "Interoperability between different blockchains" },
        { title: "AI + Blockchain Integration", detail: "Combine AI with blockchain for advanced solutions" },
        { title: "Tokenization Services", detail: "Digital asset creation and management" },
        { title: "Custom Dashboards", detail: "Real-time blockchain analytics" },
        { title: "Ongoing Optimization", detail: "Continuous improvement services" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Blockchain Development Services | Enterprise Blockchain Solutions | ForwardSols</title>
        <meta name="description" content="ForwardSols provides expert blockchain development services including smart contracts, dApps, and enterprise blockchain solutions. Transform your business with secure blockchain technology." />
        <meta name="keywords" content="blockchain development, blockchain consulting, blockchain for identity management, blockchain in supply chain, blockchain integration services, smart contract development, blockchain security services, enterprise blockchain" />
        <meta property="og:title" content="Blockchain Development Services | Enterprise Blockchain Solutions | ForwardSols" />
        <meta property="og:description" content="Professional blockchain development services creating secure, decentralized solutions for businesses. Custom blockchain implementations with smart contracts and dApps." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/blockchain-services" />
        <meta property="og:image" content="https://www.forwardsols.com/images/blockchain-services.jpg" />
        <link rel="canonical" href="https://www.forwardsols.com/blockchain-services" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="blockchain-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Blockchain Development Services
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Transform your business with secure, decentralized blockchain solutions
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
                Enterprise Blockchain Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                As a leading blockchain development company, ForwardSols creates secure, decentralized solutions that transform business processes. Our blockchain services help organizations leverage distributed ledger technology for increased transparency, security, and efficiency.
              </p>
              <p className="mb-8 leading-relaxed">
                Whether you need blockchain consulting to identify use cases or full-scale blockchain development services, we deliver solutions that create competitive advantages in your industry.
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
                Why Choose Our Blockchain Services?
              </h1>
              <p className="leading-relaxed mb-4">
                ForwardSols stands out among blockchain service providers because we deliver:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Industry-Specific Solutions</strong> - Tailored blockchain for finance, healthcare, supply chain and more
                </li>
                <li className="text-white/80 text-base">
                  <strong>Multi-Platform Expertise</strong> - Ethereum, Hyperledger, Corda, and other enterprise blockchains
                </li>
                <li className="text-white/80 text-base">
                  <strong>Seamless Integration</strong> - Blockchain API services that connect with your existing systems
                </li>
                <li className="text-white/80 text-base">
                  <strong>Security-First Approach</strong> - Comprehensive blockchain security audits and testing
                </li>
                <li className="text-white/80 text-base">
                  <strong>Full-Cycle Development</strong> - From blockchain consulting to deployment and maintenance
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our blockchain consultants combine technical expertise with business acumen to create solutions that drive measurable results.
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
              Blockchain Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive blockchain solutions for every business need
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {blockchainServices?.map((card, index) => (
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
                Our Blockchain Development Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven methodology for successful blockchain implementation:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Discovery & Planning</strong> - Understanding your business objectives and technical requirements
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Architecture Design</strong> - Selecting the right blockchain platform and designing the solution
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Development</strong> - Building smart contracts, dApps, and backend systems
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Testing & Security Audit</strong> - Rigorous testing and security review
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Deployment</strong> - Implementing the solution in your production environment
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Maintenance & Support</strong> - Ongoing optimization and updates
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Start Your Blockchain Project
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Blockchain Service Packages</h2>
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Blockchain FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our blockchain services</p>
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