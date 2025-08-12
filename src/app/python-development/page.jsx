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

  const pythonServices = [
    {
      title: "Python Web Development Services",
      dis: "Build scalable web applications with Django, Flask, and FastAPI. Our Python developers create high-performance solutions tailored to your business needs.",
    },
    {
      title: "Python API Development",
      dis: "Design and implement RESTful and GraphQL APIs with Python for seamless integration between systems and services.",
    },
    {
      title: "Python for Data Science & AI",
      dis: "Leverage Python's powerful libraries for machine learning, data analysis, and artificial intelligence solutions.",
    },
    {
      title: "Python E-commerce Development",
      dis: "Create robust online stores with Python frameworks like Django and WooCommerce integration.",
    },
    {
      title: "Python Mobile App Development",
      dis: "Develop cross-platform mobile applications using Python frameworks like Kivy and BeeWare.",
    },
    {
      title: "Python Automation Solutions",
      dis: "Automate repetitive tasks and business processes with Python scripts and bots.",
    },
    {
      title: "Python Game Development",
      dis: "Create engaging 2D and 3D games using Python with Pygame and other game development libraries.",
    },
    {
      title: "Python Maintenance & Support",
      dis: "Ongoing support, updates, and optimization for your existing Python applications.",
    },
  ];

  const FAQS = [
    {
      title: "Why should I hire Python developers from ForwardSols?",
      dis: "Our Python development team combines technical expertise with industry experience to deliver scalable, efficient solutions. We follow best practices in Python web development and software engineering.",
    },
    {
      title: "What Python frameworks do you work with?",
      dis: "We specialize in Django, Flask, FastAPI for web development; NumPy, Pandas for data science; PyTorch, TensorFlow for AI; and Pygame for game development.",
    },
    {
      title: "How much does it cost to hire Python developers?",
      dis: "Python developer salaries vary based on experience and project complexity. Contact us for a customized quote based on your specific requirements.",
    },
    {
      title: "Can you help migrate my existing application to Python?",
      dis: "Yes, we offer Python migration services to help you modernize legacy systems and take advantage of Python's capabilities.",
    },
    {
      title: "Do you provide dedicated Python developers for hire?",
      dis: "We offer both project-based Python development services and dedicated Python developers for long-term engagements.",
    },
  ];

  const packages = [
    {
      name: "Basic Python Development",
      features: [
        { title: "Requirements Analysis", detail: "Understand your business goals and technical needs" },
        { title: "Basic Application Setup", detail: "Python environment and framework configuration" },
        { title: "Core Functionality", detail: "Implementation of essential features" },
        { title: "Database Integration", detail: "Connect with PostgreSQL, MySQL or MongoDB" },
        { title: "Basic Deployment", detail: "App deployed to your preferred platform" },
      ],
      featured: false,
    },
    {
      name: "Advanced Python Solutions",
      features: [
        { title: "Custom Python Development", detail: "Tailored solutions for complex business needs" },
        { title: "API Development", detail: "RESTful or GraphQL APIs with Python" },
        { title: "Authentication System", detail: "Secure user management with JWT/OAuth" },
        { title: "Performance Optimization", detail: "Code profiling and optimization" },
        { title: "Testing & QA", detail: "Comprehensive testing for reliability" },
      ],
      featured: false,
    },
    {
      name: "Enterprise Python Platform",
      features: [
        { title: "Scalable Architecture", detail: "Microservices and cloud-native design" },
        { title: "AI/ML Integration", detail: "Machine learning models with Python" },
        { title: "CI/CD Pipeline", detail: "Automated testing and deployment" },
        { title: "Advanced Security", detail: "OWASP standards implementation" },
        { title: "24/7 Monitoring", detail: "Performance tracking and alerts" },
      ],
      featured: true,
    },
    {
      name: "Python Development Team",
      features: [
        { title: "Dedicated Developers", detail: "Full-time Python experts for your project" },
        { title: "Project Management", detail: "Agile development methodology" },
        { title: "Regular Updates", detail: "Sprint reviews and progress reports" },
        { title: "Technical Support", detail: "Ongoing maintenance and updates" },
        { title: "Knowledge Transfer", detail: "Documentation and training" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Python Development Services | Hire Python Developers | ForwardSols</title>
        <meta name="description" content="ForwardSols provides expert Python development services. Hire skilled Python developers for web development, AI solutions, and custom software development." />
        <meta name="keywords" content="Python development, Python web development, hire Python developers, Python development services, Python programming, Django development, Flask development" />
        <meta property="og:title" content="Python Development Services | Hire Python Developers | ForwardSols" />
        <meta property="og:description" content="Expert Python development services for web applications, APIs, AI solutions, and custom software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forwardsols.com/python-development" />
        <link rel="canonical" href="https://forwardsols.com/python-development" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="python-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Python Development <br /> Services
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Expert Python developers building scalable web applications, APIs, and AI solutions
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
                Custom Python Development Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                ForwardSols provides comprehensive Python development services for businesses of all sizes. 
                Our Python developers specialize in building robust web applications, RESTful APIs, data science solutions, 
                and automation tools using Django, Flask, FastAPI and other Python frameworks. Whether you need to hire 
                Python developers for a short-term project or build a dedicated development team, we deliver high-quality, 
                scalable solutions tailored to your requirements.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Hire Python Developers
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
                Why Choose Our Python Development Services?
              </h1>
              <p className="leading-relaxed mb-4">
                Python is one of the most versatile programming languages, and our developers leverage its full potential:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Experienced Python Developers</strong> - Our team has 5+ years of Python development experience
                </li>
                <li className="text-white/80 text-base">
                  <strong>Full-Cycle Development</strong> - From concept to deployment and maintenance
                </li>
                <li className="text-white/80 text-base">
                  <strong>Agile Methodology</strong> - Iterative development with regular deliverables
                </li>
                <li className="text-white/80 text-base">
                  <strong>Quality Assurance</strong> - Rigorous testing for bug-free applications
                </li>
                <li className="text-white/80 text-base">
                  <strong>Cost-Effective Solutions</strong> - Competitive Python developer rates without compromising quality
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

        {/* Core Services */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <div className="text-center">
            <h1 className="text-white font-bold text-5xl max-sm:text-3xl">
              Our Python Development Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive Python solutions tailored to your business requirements
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {pythonServices?.map((card, index) => (
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
                Our Python Development Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a structured approach to deliver high-quality Python solutions:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Requirement Analysis</strong> - Understand your business objectives and technical needs
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Planning & Architecture</strong> - Design system architecture and select appropriate Python frameworks
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Development</strong> - Agile sprints with regular deliverables and feedback
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Testing</strong> - Comprehensive QA including unit tests, integration tests, and security audits
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Deployment & Maintenance</strong> - Cloud deployment and ongoing support
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Python Development Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible engagement models to meet your Python development needs
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Python Development FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our Python services</p>
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