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
    title: "Scalable Cloud Infrastructure Solutions",
    dis: "Our cloud hosting services provide flexible and scalable infrastructure that grows with your business. We offer tailored solutions to handle traffic spikes, ensure high availability, and maintain optimal performance for your applications and websites.",
  },
  {
    title: "Enterprise-Grade Security & Compliance",
    dis: "Protect your data with our robust security measures including firewalls, DDoS protection, and regular security audits. We ensure compliance with industry standards like GDPR, HIPAA, and PCI DSS for complete peace of mind.",
  },
  {
    title: "High-Performance Cloud Hosting",
    dis: "Experience lightning-fast load times with our optimized cloud hosting solutions. We utilize SSD storage, advanced caching mechanisms, and global CDN networks to deliver exceptional performance for your digital assets.",
  },
  {
    title: "Managed Cloud Services",
    dis: "Focus on your core business while we handle the technical aspects. Our managed cloud services include 24/7 monitoring, automatic backups, software updates, and expert technical support for seamless operations.",
  },
  {
    title: "Hybrid Cloud Solutions",
    dis: "Combine the best of public and private cloud environments with our hybrid cloud solutions. We help you create a customized infrastructure that balances security, performance, and cost-effectiveness.",
  },
  {
    title: "Disaster Recovery & Business Continuity",
    dis: "Ensure uninterrupted operations with our comprehensive disaster recovery solutions. We implement automated backup systems and failover mechanisms to minimize downtime and data loss.",
  },
  {
    title: "Cloud Migration Services",
    dis: "Simplify your transition to the cloud with our expert migration services. We handle every aspect of the migration process, from planning and testing to implementation and optimization.",
  },
  {
    title: "Cost-Optimized Cloud Solutions",
    dis: "Maximize your ROI with our cost-effective cloud hosting plans. We analyze your usage patterns and recommend the most efficient resource allocation to reduce unnecessary cloud spending.",
  },
];

const FAQS = [
  {
    title: "What types of cloud hosting do you offer?",
    dis: "We provide a comprehensive range of cloud hosting solutions including public cloud, private cloud, hybrid cloud, and multi-cloud environments. Our services are tailored to meet diverse business needs, from startups to enterprise-level organizations.",
  },
  {
    title: "How do you ensure data security in the cloud?",
    dis: "We implement multiple layers of security including advanced firewalls, intrusion detection systems, data encryption, and regular security audits. Our team also provides security best practices guidance and compliance support.",
  },
  {
    title: "Can I scale my resources as my business grows?",
    dis: "Absolutely. Our cloud hosting solutions are designed for scalability. You can easily increase or decrease your resources (CPU, RAM, storage) based on your current needs, ensuring you only pay for what you use.",
  },
  {
    title: "What is your uptime guarantee?",
    dis: "We offer a 99.9% uptime SLA for all our cloud hosting services. Our redundant infrastructure and proactive monitoring ensure maximum availability for your critical applications and websites.",
  },
];

const packages = [
  {
    name: "Starter Cloud Package",
    features: [
      { title: "Basic Cloud Infrastructure", detail: "Entry-level cloud hosting with essential features for small businesses and startups" },
      {
        title: "24/7 Basic Support",
        detail: "Email and ticket-based support with standard response times",
      },
      { title: "Manual Backups", detail: "Weekly manual backups with 7-day retention" },
      { title: "Shared Resources", detail: "Shared CPU and memory resources with burstable performance" },
      { title: "Basic Security Features", detail: "Standard firewall protection and DDoS mitigation" },
      { title: "Limited Scalability", detail: "Moderate scaling options with manual resource adjustment" },
    ],
    featured: false,
  },
  {
    name: "Business Cloud Package",
    features: [
      { title: "Enhanced Cloud Infrastructure", detail: "Dedicated resources and advanced features for growing businesses" },
      {
        title: "24/7 Priority Support",
        detail: "Phone and chat support with faster response times",
      },
      { title: "Automated Backups", detail: "Daily automated backups with 14-day retention" },
      { title: "Dedicated Resources", detail: "Guaranteed CPU and memory allocation for consistent performance" },
      { title: "Advanced Security", detail: "Enhanced firewall, DDoS protection, and security monitoring" },
      {
        title: "Scalable Architecture",
        detail: "Flexible scaling options with automated resource adjustment",
      },
    ],
    featured: false,
  },
  {
    name: "Enterprise Cloud Package",
    features: [
      { title: "Premium Cloud Infrastructure", detail: "High-performance cloud hosting with enterprise-grade features" },
      {
        title: "24/7 Dedicated Support",
        detail: "Personal account manager and immediate response times",
      },
      { title: "Continuous Backups", detail: "Real-time backups with 30-day retention and point-in-time recovery" },
      { title: "High Availability", detail: "Redundant infrastructure with automatic failover" },
      { title: "Enterprise Security", detail: "Comprehensive security suite including advanced threat detection" },
      {
        title: "Unlimited Scalability",
        detail: "Seamless scaling with load balancing and auto-scaling capabilities",
      },
    ],
    featured: true,
  },
  {
    name: "Custom Cloud Solution",
    features: [
      { title: "Tailored Cloud Architecture", detail: "Fully customized cloud environment designed for your specific needs" },
      {
        title: "Dedicated Engineering Team",
        detail: "Personalized support from cloud architects and engineers",
      },
      { title: "Hybrid Cloud Options", detail: "Integration of public and private cloud environments" },
      { title: "Global Infrastructure", detail: "Multi-region deployment with edge computing capabilities" },
      { title: "Compliance & Governance", detail: "Custom security and compliance solutions for regulated industries" },
      {
        title: "Advanced Monitoring & Analytics",
        detail: "Comprehensive performance monitoring and business intelligence tools",
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
             Cloud Hosting Solutions
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
              Is your cloud infrastructure holding your business back?
              </h1>
              <p className="mb-8 leading-relaxed">
              In today's digital landscape, a robust and scalable cloud hosting solution is essential for business success. Our cloud hosting services provide the foundation for growth, ensuring high availability, optimal performance, and enterprise-grade security. Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or implement hybrid solutions, we have the expertise to take your business to the next level.
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
              Get Free Cloud Hosting Assessment Now!
              </h1>
              <p className="mb-8 leading-relaxed">
              Is your cloud infrastructure optimized for performance and cost? Get a comprehensive assessment.
              Let us analyze your current setup and show you how to enhance scalability, security, and efficiency with our expert cloud solutions.
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
            Our Core Hosting Services
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
              When to Choose Our Cloud Hosting Solutions?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                If you're looking for reliable, scalable, and secure cloud infrastructure, you've come to the right place. Our cloud hosting solutions are designed to meet the demands of modern businesses, whether you're a startup or an enterprise. We specialize in providing high-performance cloud environments with enterprise-grade security, seamless scalability, and 24/7 expert support. With the increasing need for digital transformation, having a robust cloud infrastructure is no longer optional - it's essential for business growth and continuity.
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
