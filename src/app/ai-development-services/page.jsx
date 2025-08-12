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

    const AIServices = [
        {
            title: "AI Software Development Services",
            dis: "Custom AI solutions tailored to your business needs. Our expert team delivers cutting-edge AI software development services with machine learning, deep learning, and predictive analytics.",
        },
        {
            title: "Generative AI Development Services",
            dis: "Build transformative generative AI applications with our specialized development services. We create AI models that generate text, images, and code to revolutionize your operations.",
        },
        {
            title: "AI Application Development Services",
            dis: "End-to-end AI application development from concept to deployment. We build intelligent apps with natural language processing and computer vision capabilities.",
        },
        {
            title: "AI Chatbot Development Services",
            dis: "Enterprise-grade conversational AI solutions. Our AI chatbot development services deliver 24/7 customer support and intelligent virtual assistants.",
        },
        {
            title: "AI/ML Development Services",
            dis: "Comprehensive machine learning solutions for data-driven decision making. Our AI/ML development services help you extract insights from complex datasets.",
        },
        {
            title: "Enterprise AI Development Services",
            dis: "Scalable AI solutions for large organizations. We implement enterprise AI systems that integrate seamlessly with your existing infrastructure.",
        },
        {
            title: "Custom AI Development Services",
            dis: "Bespoke AI systems designed for your unique requirements. Our custom AI development services solve specific business challenges with tailored solutions.",
        },
        {
            title: "AI Product Development Services",
            dis: "From MVP to full-scale deployment, we provide complete AI product development services to bring your vision to market faster.",
        },
    ];

    const FAQS = [
        {
            title: "What industries benefit from your AI development services?",
            dis: "We specialize in healthcare, finance, retail, manufacturing, and logistics, delivering industry-specific AI solutions that drive measurable results.",
        },
        {
            title: "How do you ensure the quality of your AI software development services?",
            dis: "We follow rigorous testing protocols including unit testing, integration testing, and performance validation to ensure our AI solutions meet the highest standards.",
        },
        {
            title: "What's the typical timeline for generative AI development services?",
            dis: "Most generative AI projects take 12-20 weeks depending on complexity, including data preparation, model training, and deployment.",
        },
        {
            title: "Do you provide ongoing support for AI application development services?",
            dis: "Yes, we offer comprehensive maintenance plans including model retraining, performance optimization, and feature enhancements.",
        },
        {
            title: "How do your AI chatbot development services differ from competitors?",
            dis: "Our chatbots incorporate advanced NLP, contextual understanding, and seamless integration with backend systems for superior user experiences.",
        },
    ];

    const packages = [
        {
            name: "Starter AI Package",
            features: [
                { title: "AI Consultation", detail: "Initial assessment and roadmap development" },
                { title: "Basic AI Integration", detail: "Implementation of pre-built AI models" },
                { title: "Data Processing", detail: "Basic data cleaning and preparation" },
                { title: "Monthly Maintenance", detail: "Performance monitoring and updates" },
                { title: "Documentation", detail: "Comprehensive technical documentation" },
            ],
            featured: false,
        },
        {
            name: "Advanced AI Solutions",
            features: [
                { title: "Custom Model Development", detail: "Tailored AI/ML models for your needs" },
                { title: "Natural Language Processing", detail: "Text analysis and understanding" },
                { title: "Predictive Analytics", detail: "Data-driven forecasting models" },
                { title: "API Integration", detail: "Seamless connection with your systems" },
                { title: "Quarterly Optimization", detail: "Regular model improvements" },
            ],
            featured: false,
        },
        {
            name: "Enterprise AI Platform",
            features: [
                { title: "End-to-End AI Transformation", detail: "Comprehensive AI integration" },
                { title: "Computer Vision Systems", detail: "Image and video analysis" },
                { title: "Generative AI Capabilities", detail: "Content generation solutions" },
                { title: "Scalable Infrastructure", detail: "Cloud-based AI architecture" },
                { title: "Dedicated AI Team", detail: "Personalized support and development" },
            ],
            featured: true,
        },
        {
            name: "AI Innovation Package",
            features: [
                { title: "Cutting-Edge AI Research", detail: "Implementation of latest technologies" },
                { title: "IoT Integration", detail: "AI for smart devices and sensors" },
                { title: "Real-time Decision Making", detail: "Instant analytics and insights" },
                { title: "Custom Chatbot Development", detail: "Advanced conversational AI" },
                { title: "Executive AI Reports", detail: "Strategic business intelligence" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <Head>
                <title>AI Development Services Company | Custom AI Solutions | ForwardSols</title>
                <meta name="description" content="ForwardSols provides expert AI development services including generative AI, machine learning, and chatbot solutions. Hire our AI developers for custom enterprise solutions." />
                <meta name="keywords" content="AI development services, AI software development services, generative AI development services, AI application development services, AI chatbot development services, AI/ML development services, custom AI development services, enterprise AI development services" />
                <meta property="og:title" content="AI Development Services Company | Custom AI Solutions | ForwardSols" />
                <meta property="og:description" content="Expert AI development services for businesses seeking cutting-edge machine learning and generative AI solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://forwardsols.com/ai-development-services" />
                <link rel="canonical" href="https://forwardsols.com/ai-development-services" />
            </Head>

            <div ref={sectionRef} className="w-full h-full">
                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="ai-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            AI Development Services
                        </h1>
                        <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
                            Cutting-edge AI solutions for businesses ready to transform with artificial intelligence
                        </p>
                    </div>
                </div>

                {/* --------------------------------  { Section 2 }  ------------------------------------------ */}
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
                            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Expert AI Development Services for Transformative Solutions
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                ForwardSols delivers comprehensive AI development services that empower businesses to harness the power of artificial intelligence. As a leading AI development services company, we specialize in building custom machine learning models, generative AI applications, and intelligent automation systems. Our AI software development services help enterprises optimize operations, enhance customer experiences, and unlock new revenue streams through cutting-edge technology.
                            </p>
                            <div className="flex justify-center">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Get AI Consultation
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --------------------------------  { Section 3 }  ------------------------------------------ */}
                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Why Choose Our AI Development Services?
                            </h1>
                            <p className="leading-relaxed mb-4">
                                We stand out as a premier AI development service provider because we:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>Specialize in generative AI development services</strong> - Build cutting-edge content generation solutions
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Offer end-to-end AI/ML development services</strong> - From data preparation to deployment
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Provide industry-specific AI application development services</strong> - Tailored solutions for your sector
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Deliver scalable enterprise AI development services</strong> - Robust solutions for large organizations
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Focus on measurable results</strong> - AI solutions that drive real business value
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
                            Comprehensive AI Development Services
                        </h1>
                        <p className="text-white mt-4 max-w-3xl mx-auto">
                            We deliver specialized AI solutions tailored to your business requirements
                        </p>
                    </div>
                    <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                                {AIServices?.map((card, index) => (
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
                                Our AI Development Process
                            </h1>
                            <div>
                                <p className="mb-4 leading-relaxed">
                                    We follow a proven methodology for delivering successful AI projects:
                                </p>
                                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                                    <li className="text-white/80 text-base">
                                        <strong>Discovery & Planning</strong> - Define objectives, use cases, and success metrics
                                    </li>
                                    <li className="text-white/80 text-base">
                                        <strong>Data Strategy</strong> - Assess, clean, and prepare datasets for AI training
                                    </li>
                                    <li className="text-white/80 text-base">
                                        <strong>Model Development</strong> - Build and train custom AI/ML models
                                    </li>
                                    <li className="text-white/80 text-base">
                                        <strong>Testing & Validation</strong> - Rigorous evaluation against performance benchmarks
                                    </li>
                                    <li className="text-white/80 text-base">
                                        <strong>Deployment & Scaling</strong> - Production rollout with monitoring and optimization
                                    </li>
                                </ol>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                                    Start Your AI Project
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white mb-4">AI Development Service Packages</h2>
                            <p className="text-xl text-white/80 max-w-3xl mx-auto">
                                Flexible solutions tailored to your AI needs and budget
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
                        <h1 className="text-white font-bold text-4xl max-sm:text-3xl">AI Development Services FAQs</h1>
                        <p className="text-white/80 mt-4">Answers to common questions about our AI solutions</p>
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