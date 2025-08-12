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

  const machineLearningServices = [
    {
      title: "Custom Machine Learning Solutions",
      dis: "Tailored machine learning models designed for your specific business needs. Our machine learning development services create predictive analytics systems that transform your data into actionable insights.",
    },
    {
      title: "Machine Learning for Predictive Analytics",
      dis: "Advanced predictive modeling using machine learning algorithms to forecast trends, customer behavior, and market changes with exceptional accuracy.",
    },
    {
      title: "Machine Learning Model Deployment",
      dis: "End-to-end solutions from model development to production deployment, ensuring seamless integration with your existing infrastructure.",
    },
    {
      title: "Machine Learning for Healthcare",
      dis: "Specialized AI solutions for medical diagnosis, patient monitoring, and drug discovery using cutting-edge machine learning techniques.",
    },
    {
      title: "Machine Learning in Finance",
      dis: "Fraud detection, risk assessment, and algorithmic trading solutions powered by sophisticated machine learning algorithms.",
    },
    {
      title: "Computer Vision & Image Processing",
      dis: "Machine learning solutions for image recognition, object detection, and visual data analysis across industries.",
    },
    {
      title: "Natural Language Processing",
      dis: "Text analysis, sentiment analysis, and chatbot development using state-of-the-art NLP and machine learning technologies.",
    },
    {
      title: "Machine Learning Consulting",
      dis: "Expert guidance on implementing machine learning solutions, from strategy to execution, tailored to your business objectives.",
    },
  ];

  const FAQS = [
    {
      title: "What industries benefit from your machine learning services?",
      dis: "Our machine learning solutions serve diverse sectors including healthcare (machine learning for medicine), finance (fraud detection using machine learning), manufacturing (machine learning for manufacturing), retail, and more. We specialize in creating industry-specific solutions that address unique challenges.",
    },
    {
      title: "How do you ensure the quality of machine learning models?",
      dis: "We follow rigorous machine learning best practices including proper training/testing splits (machine learning training data), cross-validation, and continuous monitoring. Our team specializes in different machine learning models and selects the optimal approach for each use case.",
    },
    {
      title: "Can you integrate machine learning with our existing systems?",
      dis: "Absolutely. As a leading machine learning development firm, we specialize in integrating machine learning solutions with existing databases, CRMs, and business intelligence tools. Our machine learning deployment services ensure seamless operation within your tech stack.",
    },
    {
      title: "What makes your machine learning services different?",
      dis: "ForwardSols combines deep technical expertise in machine learning algorithms with practical business acumen. We focus on creating solutions that: Deliver measurable ROI, Are explainable and transparent, Handle real-world data challenges, Scale with your business needs, and Comply with industry regulations.",
    },
    {
      title: "Do you provide ongoing support after deployment?",
      dis: "Yes, we offer comprehensive machine learning maintenance packages including: Model performance monitoring, Regular retraining with new data, Feature engineering updates, and 24/7 technical support from our machine learning experts.",
    },
  ];

  const packages = [
    {
      name: "Starter Machine Learning Package",
      features: [
        { title: "Basic Predictive Model", detail: "Pre-built solution with limited customization" },
        { title: "Standard Integration", detail: "Connect with 1-2 business systems" },
        { title: "Email Support", detail: "Business hours support via email" },
        { title: "Basic Performance Metrics", detail: "Model accuracy and performance reporting" },
      ],
      featured: false,
    },
    {
      name: "Professional Machine Learning Solution",
      features: [
        { title: "Custom Model Development", detail: "Tailored to your specific needs" },
        { title: "Advanced Algorithms", detail: "Selection of optimal machine learning models" },
        { title: "Comprehensive Integration", detail: "Connect with 3-5 business systems" },
        { title: "Priority Support", detail: "24/7 email and chat support" },
        { title: "Advanced Analytics", detail: "Detailed model performance insights" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Machine Learning Platform",
      features: [
        { title: "Custom Enterprise Solution", detail: "For complex organizational needs" },
        { title: "End-to-End Pipeline", detail: "From data preprocessing to deployment" },
        { title: "Full System Integration", detail: "Seamless connection with all business systems" },
        { title: "Dedicated Account Manager", detail: "Strategic guidance and support" },
        { title: "Continuous Learning", detail: "Models that improve over time" },
      ],
      featured: false,
    },
    {
      name: "Machine Learning Transformation Package",
      features: [
        { title: "Custom AI Development", detail: "Bespoke solution for your unique requirements" },
        { title: "Explainable AI", detail: "Transparent model decision-making" },
        { title: "API Access", detail: "For complete system control" },
        { title: "Custom Dashboards", detail: "Real-time model performance monitoring" },
        { title: "Ongoing Optimization", detail: "Continuous improvement services" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Machine Learning Services | Custom AI Solutions | ForwardSols</title>
        <meta name="description" content="ForwardSols provides expert machine learning services including predictive modeling, AI development, and data science solutions. Transform your business with custom ML solutions." />
        <meta name="keywords" content="machine learning services, machine learning consulting, predictive analytics machine learning, machine learning for healthcare, machine learning for finance, machine learning model deployment, best machine learning software, machine learning development firm" />
        <meta property="og:title" content="Machine Learning Services | Custom AI Solutions | ForwardSols" />
        <meta property="og:description" content="Professional machine learning services creating intelligent solutions for businesses. Custom machine learning models with predictive analytics and AI capabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.forwardsols.com/machine-learning-services" />
        <meta property="og:image" content="https://www.forwardsols.com/images/machine-learning-services.jpg" />
        <link rel="canonical" href="https://www.forwardsols.com/machine-learning-services" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="ml-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Machine Learning Services
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Transform your business with custom machine learning solutions and predictive analytics
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
                Custom Machine Learning Development
              </h1>
              <p className="mb-8 leading-relaxed">
                As a leading machine learning development firm, ForwardSols creates intelligent solutions that extract valuable insights from your data. Our machine learning services combine cutting-edge algorithms with your unique business requirements.
              </p>
              <p className="mb-8 leading-relaxed">
                Whether you need predictive analytics, computer vision, or natural language processing solutions, our team delivers machine learning models that drive decision-making, automate processes, and create competitive advantages.
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
                Why Choose Our Machine Learning Services?
              </h1>
              <p className="leading-relaxed mb-4">
                ForwardSols stands out among machine learning service providers because we deliver:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>Industry-Specific Solutions</strong> - Tailored machine learning for healthcare, finance, manufacturing and more
                </li>
                <li className="text-white/80 text-base">
                  <strong>Advanced Algorithms</strong> - From supervised learning to deep neural networks
                </li>
                <li className="text-white/80 text-base">
                  <strong>Seamless Deployment</strong> - Machine learning model deployment that integrates with your systems
                </li>
                <li className="text-white/80 text-base">
                  <strong>Explainable AI</strong> - Models you can understand and trust
                </li>
                <li className="text-white/80 text-base">
                  <strong>Full-Cycle Development</strong> - From data preparation to production monitoring
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our machine learning consultants combine technical expertise with business acumen to create solutions that drive measurable results.
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
              Machine Learning Services
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Comprehensive machine learning solutions for every business need
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {machineLearningServices?.map((card, index) => (
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
                Our Machine Learning Development Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We follow a proven methodology for successful machine learning implementation:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Discovery & Planning</strong> - Understanding your business objectives and data landscape
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Data Preparation</strong> - Cleaning, labeling, and feature engineering for optimal model performance
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Model Development</strong> - Selecting and training the best machine learning algorithms for your use case
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Evaluation & Testing</strong> - Rigorous validation using proper machine learning metrics
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Deployment</strong> - Implementing the model into your production environment
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Monitoring & Optimization</strong> - Continuous improvement based on real-world performance
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Start Your Machine Learning Project
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Machine Learning Service Packages</h2>
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
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Machine Learning FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our machine learning services</p>
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