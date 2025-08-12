"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head";
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

// SEO-optimized keywords: customer service outsourcing, 24/7 customer support, omnichannel support, live chat support, AI customer service, technical support, customer experience, customer retention, customer satisfaction, help desk services, best customer support company, https://www.forwardsols.com/

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ctaRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  // SEO-optimized service cards
  const coreServices = [
    {
      title: "24/7 Customer Support Outsourcing",
      dis: "Deliver exceptional customer service around the clock with our 24/7 customer support outsourcing. Our expert team ensures fast response times and high customer satisfaction for your business. Partner with https://www.forwardsols.com/ for reliable, scalable support.",
    },
    {
      title: "Omnichannel Customer Service Solutions",
      dis: "Engage your customers on their preferred channels—live chat, email, phone, and social media. Our omnichannel support platform guarantees seamless communication and a unified customer experience.",
    },
    {
      title: "AI-Powered Live Chat Support",
      dis: "Boost efficiency and reduce wait times with AI-driven live chat support. Our intelligent chatbots and virtual assistants handle routine queries, freeing your team to focus on complex issues.",
    },
    {
      title: "Technical Support & Help Desk Services",
      dis: "Resolve technical issues quickly with our dedicated help desk and technical support services. We provide step-by-step troubleshooting and proactive solutions to keep your customers happy.",
    },
    {
      title: "Customer Experience Optimization",
      dis: "Enhance every touchpoint with data-driven customer experience strategies. We analyze feedback, map customer journeys, and implement improvements that increase retention and loyalty.",
    },
    {
      title: "Customer Retention & Loyalty Programs",
      dis: "Reduce churn and increase repeat business with tailored customer retention strategies and loyalty programs. Our solutions are designed to maximize lifetime value and brand advocacy.",
    },
  ];

  const advancedServices = [
    {
      title: "Customer Service Analytics",
      dis: "Leverage advanced analytics to monitor service quality, track KPIs, and gain actionable insights. Our reporting tools help you make data-driven decisions for continuous improvement.",
    },
    {
      title: "Customer Onboarding & Training",
      dis: "Ensure a smooth onboarding process for new customers with personalized training and support. We help your clients get the most out of your products and services from day one.",
    },
    {
      title: "Multilingual Customer Support",
      dis: "Expand globally with our multilingual customer service team. We provide support in multiple languages to help you reach and retain international customers.",
    },
    {
      title: "Customer Feedback Management",
      dis: "Collect, analyze, and act on customer feedback to improve your offerings. Our feedback management solutions drive innovation and customer-centric growth.",
    },
    {
      title: "Proactive Customer Engagement",
      dis: "Anticipate customer needs and resolve issues before they escalate. Our proactive engagement strategies increase satisfaction and build long-term relationships.",
    },
    {
      title: "Scalable Outsourced Support Teams",
      dis: "Scale your support operations effortlessly with our flexible outsourcing solutions. Whether you need seasonal support or rapid growth, https://www.forwardsols.com/ has you covered.",
    },
  ];

  // SEO-optimized FAQs
  const FAQS = [
    {
      title: "What are the benefits of outsourcing customer service to Forward Solutions?",
      dis: "Outsourcing customer service to https://www.forwardsols.com/ reduces operational costs, provides 24/7 support, improves customer satisfaction, and allows your business to focus on core activities while we handle your customer interactions.",
    },
    {
      title: "How does omnichannel support improve customer experience?",
      dis: "Omnichannel support ensures your customers can reach you via live chat, email, phone, or social media, creating a seamless and consistent experience that increases engagement and loyalty.",
    },
    {
      title: "Can AI-powered chatbots handle complex customer queries?",
      dis: "Our AI-powered chatbots efficiently manage routine inquiries and escalate complex issues to human agents, ensuring fast, accurate, and personalized support for every customer.",
    },
    {
      title: "Is your customer support available 24/7?",
      dis: "Yes! Our customer support outsourcing services are available 24/7, 365 days a year, so your customers always receive timely assistance—no matter their time zone.",
    },
    {
      title: "How do you ensure high customer satisfaction rates?",
      dis: "We use real-time analytics, quality monitoring, and regular training to ensure our support team delivers the best customer experience. Our focus is on first-contact resolution and personalized service.",
    },
  ];

  return (
    <>
      <Head>
        <title>Customer Service Outsourcing | 24/7 Support | Forward Solutions</title>
        <meta
          name="description"
          content="Boost your business with 24/7 customer service outsourcing, omnichannel support, live chat, and AI-powered solutions from Forward Solutions. Visit https://www.forwardsols.com/ for the best customer support services."
        />
        <meta
          name="keywords"
          content="customer service outsourcing, 24/7 customer support, omnichannel support, live chat support, AI customer service, technical support, customer experience, customer retention, customer satisfaction, help desk services, best customer support company, Forward Solutions, https://www.forwardsols.com/"
        />
        <link rel="canonical" href="https://www.forwardsols.com/customer-service" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- SEO Hero Section ----------------------------- */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Customer Service
            </h1>
            
           
          </div>
        </div>

        {/* ----------------------------- Section: Why Choose Forward Solutions ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 max-sm:py-10 md:flex-row flex-col items-center">
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white" >
                Why Outsource Customer Service to Forward Solutions?
              </h2>
              <p className="mb-8 leading-relaxed" >
                At Forward Solutions, we specialize in delivering world-class customer support outsourcing. Our omnichannel approach, AI-powered tools, and experienced agents ensure your customers receive fast, friendly, and effective service—every time. Reduce costs, scale effortlessly, and boost customer satisfaction with our tailored solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button
                    // ref={ctaRef}
                    className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Start Outsourcing Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Customer Service Solutions
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {coreServices.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: Advanced Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Advanced Customer Support Services
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {advancedServices.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: Dedicated Support ----------------------------- */}
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Dedicated Support for Digital Growth
              </h2>
              <p className="mb-1 leading-relaxed">
                Our dedicated support teams at Forward Solutions are available 24/7 to ensure your business never misses a beat. We provide rapid response, technical expertise, and a customer-first approach that drives loyalty and business growth.
              </p>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Customer Service Outsourcing FAQs
          </h2>
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
              {FAQS.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`}>
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
