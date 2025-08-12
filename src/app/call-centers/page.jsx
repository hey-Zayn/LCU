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

// SEO-optimized keywords: call center services, outsource call center, inbound call center, outbound call center, customer support, 24/7 call center, multilingual call center, best call center company, call center solutions, business process outsourcing, BPO, live call agents, virtual call center, call center for small business, affordable call center, lead generation, appointment setting, call center USA, call center India, call center Philippines

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

  // SEO-optimized service features
  const callCenterServices = [
    {
      title: "24/7 Call Center Support",
      dis: "Never miss a customer call with our 24/7 call center services. Our live agents ensure your business is always available, improving customer satisfaction and retention.",
    },
    {
      title: "Multilingual Call Center Solutions",
      dis: "Expand globally with our multilingual call center agents. We support English, Spanish, French, and more to help you connect with customers worldwide.",
    },
    {
      title: "Inbound & Outbound Call Center",
      dis: "Boost your business with expert inbound customer support and outbound lead generation, appointment setting, and telemarketing services.",
    },
    {
      title: "Affordable Call Center for Small Business",
      dis: "Get enterprise-level call center solutions at affordable rates. Perfect for startups and small businesses looking to scale efficiently.",
    },
    {
      title: "Omnichannel Customer Support",
      dis: "Deliver seamless customer experiences across phone, email, live chat, and social media with our integrated omnichannel call center platform.",
    },
    {
      title: "Business Process Outsourcing (BPO)",
      dis: "Outsource your call center operations to Forward Solutions and focus on your core business. We handle customer support, order processing, and more.",
    },
  ];

  const callCenterBenefits = [
    {
      title: "Best Call Center Company",
      dis: "Partner with a top-rated call center company trusted by global brands. We deliver measurable results and superior customer experiences.",
    },
    {
      title: "Scalable Call Center Solutions",
      dis: "Easily scale your call center team up or down based on seasonal demand or business growth, ensuring cost-effective operations.",
    },
    {
      title: "Advanced Call Center Technology",
      dis: "Leverage AI-powered tools, CRM integration, and real-time analytics to optimize every customer interaction and drive business growth.",
    },
    {
      title: "Quality Assurance & Compliance",
      dis: "Our rigorous quality assurance processes and compliance standards guarantee high-quality service and data security for your business.",
    },
    {
      title: "Virtual Call Center Agents",
      dis: "Access a global pool of professional virtual call center agents, reducing overhead and increasing flexibility for your business.",
    },
    {
      title: "Lead Generation & Sales Support",
      dis: "Increase your sales pipeline with expert outbound calling, lead qualification, and appointment setting services.",
    },
  ];

  const FAQS = [
    {
      title: "What are the benefits of outsourcing call center services?",
      dis: "Outsourcing your call center to Forward Solutions at https://www.forwardsols.com/ reduces costs, provides 24/7 customer support, and gives you access to experienced agents and advanced technology. This allows your business to focus on core operations while we handle customer interactions.",
    },
    {
      title: "How does a multilingual call center help my business?",
      dis: "A multilingual call center enables you to serve customers in their native language, improving satisfaction and expanding your reach to global markets. Our agents are fluent in multiple languages, ensuring seamless communication.",
    },
    {
      title: "Is your call center suitable for small businesses?",
      dis: "Absolutely! We offer affordable call center solutions tailored for small businesses and startups. Our flexible plans allow you to scale as your business grows.",
    },
    {
      title: "What industries do you serve?",
      dis: "We provide call center services for eCommerce, healthcare, finance, real estate, travel, SaaS, and more. Visit https://www.forwardsols.com/ to see our industry expertise.",
    },
    {
      title: "How do I get started with Forward Solutions?",
      dis: "Getting started is easy! Contact us through our website at https://www.forwardsols.com/contact to request a free consultation and custom quote.",
    },
  ];

  return (
    <>
      <Head>
        <title>Best Call Center Services | Outsource Call Center Solutions | Forward Solutions</title>
        <meta
          name="description"
          content="Forward Solutions offers 24/7 call center services, inbound & outbound support, multilingual agents, and affordable BPO solutions. Outsource your call center to the best company for customer support, lead generation, and business growth. Visit https://www.forwardsols.com/."
        />
        <meta
          name="keywords"
          content="call center services, outsource call center, inbound call center, outbound call center, customer support, 24/7 call center, multilingual call center, best call center company, call center solutions, business process outsourcing, BPO, live call agents, virtual call center, call center for small business, affordable call center, lead generation, appointment setting, call center USA, call center India, call center Philippines"
        />
        <link rel="canonical" href="https://www.forwardsols.com/call-centers" />
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
               Call Center
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                #1 Call Center Company for Outsourcing Success
              </h2>
              <p className="mb-8 leading-relaxed">
                Forward Solutions is your trusted partner for <strong>call center outsourcing</strong>. Our expert agents deliver <strong>24/7 customer support</strong>, <strong>lead generation</strong>, and <strong>multilingual call center services</strong> to help your business grow. With advanced technology and a focus on quality, we ensure every customer interaction is seamless and professional.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Outsourcing Today
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: Core Call Center Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Top-Rated Call Center Services
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {callCenterServices.map((card, index) => (
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

        {/* ----------------------------- Section: Why Outsource to Us ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Outsource Your Call Center to Forward Solutions?
              </h2>
              <p className="mb-8 leading-relaxed">
                Our <strong>call center outsourcing</strong> solutions are designed for businesses seeking <strong>cost-effective</strong>, <strong>scalable</strong>, and <strong>high-quality customer support</strong>. We use the latest technology, provide multilingual agents, and guarantee measurable results for your business.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Request a Quote
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

        {/* ----------------------------- Section: More Benefits ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Why Forward Solutions is the Best Call Center Company
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {callCenterBenefits.map((card, index) => (
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

        {/* ----------------------------- Section: Video & Demo ----------------------------- */}
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
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8 ">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Experience the Power of a Professional Call Center
              </h2>
              <p className="mb-1 leading-relaxed">
                Discover how Forward Solutions can transform your customer support and sales. Book a free demo and see why we are the <strong>best call center company</strong> for businesses of all sizes.
              </p>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Call Center Services FAQs
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
