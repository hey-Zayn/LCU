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

  const EducationServices = [
    {
      title: "Custom Online Education Platform Development",
      dis: "Build scalable, interactive online education platforms tailored to your institution's needs. Our solutions include LMS integration, course management, and student engagement tools for high-quality virtual learning experiences.",
    },
    {
      title: "AI-Powered Educational Platforms",
      dis: "Implement artificial intelligence in your education platform for personalized learning paths, automated grading, and intelligent tutoring systems that enhance student outcomes.",
    },
    {
      title: "Video Platform for Education",
      dis: "Develop specialized video platforms for education with features like live streaming, interactive video lessons, and secure content delivery optimized for learning.",
    },
    {
      title: "Mobile Learning Applications",
      dis: "Create mobile-optimized educational platforms that enable students to learn anytime, anywhere with offline access and push notifications for course updates.",
    },
    {
      title: "Corporate Training Platforms",
      dis: "Build custom continuing education platforms for employee training and professional development with certification tracking and compliance management.",
    },
    {
      title: "Student Engagement Tools",
      dis: "Integrate interactive elements like quizzes, discussion forums, and gamification into your educational platform to boost participation and retention.",
    },
    {
      title: "LMS Integration Services",
      dis: "Seamlessly connect your education platform with leading learning management systems (LMS) for comprehensive course administration and reporting.",
    },
    {
      title: "Accessibility-Compliant Solutions",
      dis: "Develop inclusive educational platforms that meet WCAG standards, ensuring equal access for all learners regardless of ability.",
    },
  ];

  const FAQS = [
    {
      title: "Why choose your online education platform development services?",
      dis: "As a leading education platform developer, we combine pedagogical expertise with technical excellence. Our team creates engaging, scalable solutions tailored to schools, universities, and corporate training needs, focusing on user experience and learning outcomes.",
    },
    {
      title: "What features should a high-quality online education platform include?",
      dis: "Top-tier educational platforms typically include course management, interactive content delivery, assessment tools, progress tracking, discussion forums, mobile accessibility, and robust reporting. We customize features based on your specific educational goals and audience needs.",
    },
    {
      title: "How long does it take to develop a custom online education platform?",
      dis: "Development timelines vary based on complexity. A basic MVP can be ready in 3-4 months, while comprehensive solutions may take 6-12 months. We follow agile methodologies to deliver functional components incrementally.",
    },
    {
      title: "Can you integrate our education platform with existing systems?",
      dis: "Yes, we specialize in integrating educational platforms with SIS, CRM, payment gateways, and third-party tools. Our API-first approach ensures seamless connectivity with your existing technology stack.",
    },
  ];

  const packages = [
    {
      name: "Basic Education Platform",
      features: [
        { title: "Course Management", detail: "Basic course creation and content delivery" },
        {
          title: "User Management",
          detail: "Student and instructor accounts with basic roles",
        },
        { title: "Assessment Tools", detail: "Quizzes and simple grading system" },
        { title: "Basic Reporting", detail: "Student progress and completion tracking" },
        { title: "3 Months Support", detail: "Post-launch bug fixes and minor updates" },
      ],
      featured: false,
    },
    {
      name: "Advanced Learning Platform",
      features: [
        { title: "Interactive Content", detail: "Support for videos, simulations, and SCORM" },
        {
          title: "Certification",
          detail: "Automated certificate generation for course completion",
        },
        { title: "Discussion Forums", detail: "Integrated community features" },
        { title: "Mobile Responsive", detail: "Optimized for all devices" },
        { title: "Advanced Analytics", detail: "Detailed learning analytics dashboard" },
        {
          title: "6 Months Support",
          detail: "Including minor feature enhancements",
        },
      ],
      featured: false,
    },
    {
      name: "Enterprise Education Platform",
      features: [
        { title: "Custom Branding", detail: "White-label solution with your identity" },
        {
          title: "AI Features",
          detail: "Personalized recommendations and adaptive learning",
        },
        { title: "Multiple Integrations", detail: "LMS, SIS, and payment systems" },
        { title: "Scalable Infrastructure", detail: "Handles thousands of concurrent users" },
        { title: "Advanced Security", detail: "SSO, data encryption, and compliance" },
        {
          title: "1 Year Support",
          detail: "Priority support with regular updates",
        },
      ],
      featured: true,
    },
    {
      name: "Custom Education Solution",
      features: [
        { title: "Tailored Platform", detail: "Built to your exact specifications" },
        {
          title: "Specialized Features",
          detail: "VR labs, proctoring, or other unique requirements",
        },
        { title: "API-First Architecture", detail: "Easy integration with future systems" },
        { title: "Dedicated Team", detail: "Personalized development approach" },
        { title: "Compliance Ready", detail: "ADA, GDPR, FERPA as needed" },
        {
          title: "Ongoing Partnership",
          detail: "Continuous improvement and innovation",
        },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Leading Online Education Platform Development Company | ForwardSols</title>
        <meta name="description" content="ForwardSols builds high-quality online education platforms with AI, video learning, and LMS integration. Custom solutions for schools, universities, and corporate training." />
        <meta name="keywords" content="online education platforms, best online education platforms, high-quality online education platforms, leading virtual education platforms, education platform development, custom LMS platform" />
        <meta property="og:title" content="Leading Online Education Platform Development Company | ForwardSols" />
        <meta property="og:description" content="Expert online education platform development with AI, video learning, and LMS integration. Custom solutions for schools, universities, and corporate training." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/online-education-platforms" />
        <link rel="canonical" href="https://www.forwardsols.com/online-education-platforms" />
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
              Online Education Platform Development
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Build high-quality virtual education platforms that engage learners and deliver measurable results
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
                Custom Online Education Platform Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                As a premier education platform development company, we create cutting-edge online learning solutions that transform how knowledge is delivered and consumed. Our online education platforms combine engaging content delivery with powerful learning management tools, serving K-12 schools, higher education institutions, and corporate training programs worldwide.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Connect With Our Education Experts
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
                Why Choose Our Online Education Platform Services?
              </h1>
              <p className=" leading-relaxed mb-4">
                In the competitive edtech sector, you need a partner with both technical expertise and pedagogical knowledge:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Education Industry Expertise</strong> – Our team understands learning theories, instructional design, and academic workflows
                </li>
                <li className="text-white/80 text-base">
                  <strong>Proven Technology Stack</strong> – We use reliable frameworks and scalable infrastructure for your education platform
                </li>
                <li className="text-white/80 text-base">
                  <strong>Custom Solutions</strong> – Tailored online educational platforms designed for your specific audience and curriculum
                </li>
                <li className="text-white/80 text-base">
                  <strong>Innovative Features</strong> – AI personalization, VR labs, gamification, and interactive video learning
                </li>
                <li className="text-white/80 text-base">
                  <strong>Comprehensive Services</strong> – From platform development to content migration and instructor training
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
              Comprehensive Online Education Platform Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              End-to-end solutions for all your virtual learning needs
            </p>
          </div>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {EducationServices?.map((card, index) => (
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
                Our Education Platform Development Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a structured approach to deliver successful online learning platforms:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Needs Assessment</strong> – Understand your learning objectives, target audience, and technical requirements
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Instructional Design</strong> – Plan engaging learning experiences and course structures
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Platform Development</strong> – Build your custom education platform with focus on usability and accessibility
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Quality Assurance</strong> – Rigorous testing for functionality, performance, and compliance
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Launch & Training</strong> – Deploy your platform and train administrators and instructors
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get a Free Education Platform Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Online Education Platform Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Flexible solutions tailored to different educational needs and budgets
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Online Education Platform FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our education platform services</p>
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