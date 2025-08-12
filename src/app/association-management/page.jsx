"use client";

import React, {useRef } from "react";
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
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );



  const SEOTpyes = [
  {
    title: "Strategic Association Planning & Development",
    dis: "Partner with our expert team to create comprehensive association strategies that align with your organization's goals. We analyze your current structure and identify opportunities for growth and improved member engagement.",
  },
  {
    title: "Member Engagement & Retention Solutions",
    dis: "Boost your association's value proposition with our specialized member engagement services. We develop tailored programs to enhance member satisfaction, increase retention rates, and foster long-term loyalty.",
  },
  {
    title: "Association Governance & Compliance Optimization",
    dis: "Streamline your association's governance structure and ensure compliance with industry regulations. Our experts help you implement best practices for board management, policy development, and legal compliance.",
  },
  {
    title: "Local Chapter Development & Support",
    dis: "Enhance your association's local presence with our targeted chapter development strategies. We provide tools and resources to establish and grow local chapters, increasing your organization's reach and impact.",
  },
  {
    title: "Comprehensive Membership Management Solutions",
    dis: "Optimize your membership processes with our full-service management solutions. We implement efficient systems for member onboarding, data management, and communication, improving operational efficiency.",
  },
  {
    title: "Strategic Partnerships & Sponsorship Development",
    dis: "Expand your association's network and revenue streams through our partnership development services. We identify and cultivate strategic alliances that benefit your members and support your organization's mission.",
  },
  {
    title: "Professional Development & Certification Programs",
    dis: "Enhance your association's value proposition with our custom professional development solutions. We design and implement certification programs and continuing education opportunities that meet your members' needs.",
  },
  {
    title: "Association Technology & Digital Transformation",
    dis: "Modernize your association's operations with our technology solutions. We implement digital tools and platforms to improve member experiences, streamline processes, and enhance data management.",
  },
  {
    title: "Event Management & Conference Planning",
    dis: "Elevate your association's events with our comprehensive planning services. From annual conferences to local meetups, we handle all aspects of event management to ensure successful and impactful gatherings.",
  },
];

const FAQS = [
  {
    title: "What are the key benefits of professional association management?",
    dis: "Professional association management helps organizations streamline operations, enhance member engagement, ensure compliance, and drive strategic growth. It provides expertise in governance, membership development, and operational efficiency, allowing associations to focus on their core mission.",
  },
  {
    title: "How can association management improve member retention?",
    dis: "Effective association management implements tailored engagement strategies, valuable member benefits, and consistent communication to increase member satisfaction and loyalty. This leads to higher retention rates and a more vibrant member community.",
  },
  {
    title: "What services are typically included in association management?",
    dis: "Comprehensive association management services include strategic planning, membership development, governance support, event management, financial oversight, and technology implementation. These services are customized to meet each association's unique needs and goals.",
  },
  {
    title: "How long does it take to see results from association management services?",
    dis: "The timeline for seeing results varies based on the association's current state and specific goals. Many organizations begin to see improvements in member engagement and operational efficiency within 3-6 months, with more significant strategic results developing over 12-18 months.",
  },
];

const packages = [
  {
    name: "Essential Association Support",
    features: [
      { title: "Basic Governance Support", detail: "Assistance with board meetings and documentation" },
      {
        title: "Membership Database Management",
        detail: "Maintenance of member records and communications",
      },
      { title: "Event Coordination", detail: "Support for one annual conference or event" },
      { title: "Financial Reporting", detail: "Monthly financial statements and budget tracking" },
      { title: "Basic Member Services", detail: "Handling member inquiries and benefits administration" },
      { title: "Strategic Planning Assistance", detail: "Support for annual planning process" },
    ],
    featured: false,
  },
  {
    name: "Comprehensive Association Management",
    features: [
      { title: "Full Governance Support", detail: "Board development and policy implementation" },
      {
        title: "Membership Growth Strategy",
        detail: "Development and execution of recruitment and retention plans",
      },
      { title: "Event Management", detail: "Coordination of multiple events and conferences annually" },
      { title: "Financial Management", detail: "Budget development and financial oversight" },
      { title: "Member Engagement Programs", detail: "Development of value-added member services" },
      {
        title: "Strategic Planning Facilitation",
        detail: "Comprehensive strategic planning and implementation support",
      },
    ],
    featured: false,
  },
  {
    name: "Premium Association Solutions",
    features: [
      { title: "Advanced Governance Consulting", detail: "Board training and leadership development" },
      {
        title: "Integrated Membership Strategy",
        detail: "Comprehensive membership lifecycle management",
      },
      { title: "Full-Scale Event Production", detail: "End-to-end management of major conferences and events" },
      { title: "Financial Strategy Development", detail: "Long-term financial planning and analysis" },
      { title: "Custom Member Engagement Programs", detail: "Tailored programs to enhance member value" },
      {
        title: "Technology Implementation",
        detail: "Association management system setup and optimization",
      },
    ],
    featured: true,
  },
  {
    name: "Enterprise Association Partnership",
    features: [
      { title: "Executive Leadership Support", detail: "Strategic guidance for association leadership" },
      {
        title: "Comprehensive Membership Ecosystem",
        detail: "Integrated approach to membership growth and engagement",
      },
      { title: "Global Event Strategy", detail: "Coordination of international conferences and events" },
      { title: "Advanced Financial Consulting", detail: "Revenue diversification and financial modeling" },
      { title: "Custom Technology Solutions", detail: "Development of bespoke association management tools" },
      {
        title: "Continuous Strategic Innovation",
        detail: "Ongoing development of innovative programs and services",
      },
    ],
    featured: false,
  },
];

  return (
    <>
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
             Association Management
            </h1>
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
              Is your association reaching its full potential?
              </h1>
              <p className="mb-8 leading-relaxed">
              Managing an association requires strategic vision and operational excellence. From membership growth to event management and financial sustainability, every aspect demands expert attention. Our association management specialists bring decades of experience in developing comprehensive strategies that drive engagement, increase revenue, and ensure long-term success. With the right management approach, your association can become a leading voice in your industry.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Connect Now
                </button></Link>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}

        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              Transform Your Association's Management
              </h1>
              <p className="mb-8 leading-relaxed">
              Is your association operating at peak efficiency? Get a comprehensive management assessment. Our experts will analyze your current operations and provide actionable strategies to enhance member engagement, streamline operations, and boost financial performance.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
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

        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Core Services
          </h1>
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
              When to Invest in Association Management Services?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                If your organization is struggling with member engagement, event coordination, or operational efficiency, our association management services are here to help. We specialize in streamlining operations, enhancing member experiences, and implementing effective governance strategies. Our team of experts understands the unique challenges faced by associations and can help you improve communication, increase membership value, and achieve your organizational goals.
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
        <ServiceForm/>

        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
