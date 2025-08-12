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
import Head from "next/head";

const SEO_SERVICES = [
  {
    title: "Business Consulting Services",
    dis: "Unlock your company's full potential with our top-rated business consulting services. At Forward Solutions, we deliver data-driven strategies, operational efficiency, and digital transformation to help you achieve sustainable growth. Visit https://www.forwardsols.com/ for expert guidance.",
  },
  {
    title: "Digital Transformation Consulting",
    dis: "Accelerate your digital transformation journey with our expert consultants. We specialize in cloud migration, process automation, and technology integration to future-proof your business. Partner with Forward Solutions for innovative digital solutions.",
  },
  {
    title: "Strategic Planning & Market Analysis",
    dis: "Gain a competitive edge with our strategic planning and market analysis services. We use proven frameworks and in-depth research to identify growth opportunities and optimize your market positioning.",
  },
  {
    title: "Operational Excellence Consulting",
    dis: "Streamline your operations and maximize ROI with our operational excellence consulting. We identify inefficiencies, implement best practices, and drive measurable improvements across your organization.",
  },
  {
    title: "Change Management Consulting",
    dis: "Ensure smooth transitions and successful project implementations with our change management consulting. We help you manage organizational change, minimize resistance, and boost employee engagement.",
  },
  {
    title: "Financial Advisory & Risk Management",
    dis: "Optimize your financial performance and mitigate risks with our financial advisory and risk management services. We provide actionable insights for budgeting, forecasting, and compliance.",
  },
  {
    title: "Leadership Development & Training",
    dis: "Empower your team with leadership development and corporate training programs. Our tailored workshops and coaching sessions foster innovation, collaboration, and high performance.",
  },
  {
    title: "Custom Consulting Solutions",
    dis: "Every business is unique. We offer custom consulting solutions tailored to your specific needs, from process improvement to global expansion. Discover how Forward Solutions can help you thrive.",
  },
  {
    title: "Enterprise Consulting for Growth",
    dis: "Scale your enterprise with our growth-focused consulting services. We support mergers & acquisitions, international expansion, and enterprise-level digital transformation.",
  },
];

const FAQS = [
  {
    title: "What are the benefits of business consulting services?",
    dis: "Business consulting services provide expert insights, proven strategies, and actionable plans to help your company grow, improve efficiency, and stay ahead of competitors. At Forward Solutions, we tailor our approach to your unique business needs for maximum impact.",
  },
  {
    title: "How does digital transformation consulting work?",
    dis: "Digital transformation consulting involves assessing your current technology landscape, identifying opportunities for automation and innovation, and implementing solutions that drive business growth. Our team ensures a seamless transition to modern digital platforms.",
  },
  {
    title: "Why choose Forward Solutions for consulting?",
    dis: "Forward Solutions is a leading consulting firm with a proven track record of delivering results. Our consultants combine industry expertise, data-driven insights, and a client-first approach to help you achieve your business goals. Learn more at https://www.forwardsols.com/.",
  },
  {
    title: "How do I get started with consulting services?",
    dis: "Getting started is easy! Simply contact us through our website or book a free consultation. We'll assess your needs and recommend the best consulting solutions for your business.",
  },
];

const PACKAGES = [
  {
    name: "Starter Consulting Package – Business Growth Essentials",
    features: [
      { title: "Initial Business Assessment", detail: "Comprehensive review of your current business model and operations." },
      { title: "Market Opportunity Analysis", detail: "Identify high-potential markets and growth opportunities." },
      { title: "Actionable Strategy Roadmap", detail: "Step-by-step plan for immediate business improvements." },
      { title: "Performance Metrics Review", detail: "Key performance indicators to track your progress." },
      { title: "1:1 Strategy Session", detail: "Personalized session with a senior consultant." },
    ],
    featured: false,
  },
  {
    name: "Professional Consulting Package – Digital Transformation",
    features: [
      { title: "In-Depth Digital Audit", detail: "Evaluate your digital presence and technology stack." },
      { title: "Process Automation Plan", detail: "Identify and automate manual business processes." },
      { title: "Technology Integration", detail: "Seamless integration of new digital tools and platforms." },
      { title: "Change Management Support", detail: "Guidance for smooth organizational transitions." },
      { title: "Ongoing Performance Tracking", detail: "Monthly reports and optimization recommendations." },
    ],
    featured: false,
  },
  {
    name: "Executive Consulting Package – Enterprise Solutions",
    features: [
      { title: "Enterprise-Wide Assessment", detail: "Holistic review of all business units and functions." },
      { title: "Corporate Strategy Development", detail: "Long-term strategic planning for sustainable growth." },
      { title: "Risk Management Framework", detail: "Comprehensive risk assessment and mitigation strategies." },
      { title: "Leadership Training", detail: "Executive coaching and leadership development programs." },
      { title: "Global Expansion Support", detail: "Strategies for international market entry and growth." },
    ],
    featured: true,
  },
  {
    name: "Custom Consulting Package – Tailored Solutions",
    features: [
      { title: "Bespoke Consulting Engagement", detail: "Fully customized solutions for your unique business challenges." },
      { title: "Dedicated Project Manager", detail: "Single point of contact for seamless communication." },
      { title: "Advanced Data Analytics", detail: "Leverage data for smarter business decisions." },
      { title: "Continuous Improvement Program", detail: "Ongoing support and optimization." },
      { title: "Priority Support", detail: "Access to our senior consulting team for urgent needs." },
    ],
    featured: false,
  },
];

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

  return (
    <>
      <Head>
        <title>Business Consulting Services | Digital Transformation Consulting | Forward Solutions</title>
        <meta
          name="description"
          content="Forward Solutions offers top-rated business consulting services, digital transformation consulting, and strategic planning to help your business grow. Visit https://www.forwardsols.com/ for expert consulting solutions."
        />
        <meta
          name="keywords"
          content="business consulting services, digital transformation consulting, business growth, strategic planning, operational efficiency, consulting firm, leadership development, risk management, enterprise consulting, https://www.forwardsols.com/"
        />
        <link rel="canonical" href="https://www.forwardsols.com/consulting" />
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
              Business Consulting Services
            </h1>
            
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Choose Us ----------------------------- */}
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Forward Solutions for Business Consulting?
              </h2>
              <p className="mb-8 leading-relaxed">
                Forward Solutions is a leading business consulting firm specializing in digital transformation, operational efficiency, and strategic growth. Our expert consultants use proven methodologies and the latest technology to deliver measurable results. Whether you need to optimize processes, expand into new markets, or drive innovation, we provide tailored solutions for your business success.
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

        {/* ----------------------------- Section 3: Our Approach ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Our Proven Consulting Approach
              </h2>
              <p className="mb-8 leading-relaxed">
                At Forward Solutions, we combine industry expertise, data analytics, and innovative thinking to deliver high-impact consulting services. Our approach includes in-depth business analysis, strategic planning, and hands-on implementation to ensure your business achieves its goals efficiently and effectively.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
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

        {/* ----------------------------- Section 4: Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Core Consulting Services
          </h2>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEO_SERVICES.map((card, index) => (
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

        {/* ----------------------------- Section 5: When to Consider Consulting ----------------------------- */}
        <section id="section2-img-left" className="w-full  text-white body-font">
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                When Should You Hire a Business Consultant?
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your business is struggling with growth, digital adoption, or operational challenges, it's time to consult the experts. Forward Solutions helps companies of all sizes overcome obstacles, implement best practices, and achieve measurable results. Book a free demo to see how we can help your business thrive.
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 6: Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${
                    pkg.featured
                      ? "border  border-[#4F1DD7] transform md:-translate-y-4"
                      : "border border-[#D9345E]"
                  }`}
                >
                  <div
                    className={`p-6 ${
                      pkg.featured
                        ? "bg-[#4F1DD7] text-white"
                        : " bg-[#D9345E] text-white"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-center">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="border-b border-gray-100 pb-2 last:border-0"
                        >
                          <h4 className="font-medium text-white ">
                            {feature.title}
                          </h4>
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

        {/* ----------------------------- Section 7: FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
            Frequently Asked Questions
          </h2>
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
              {FAQS.map((card, index) => (
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
