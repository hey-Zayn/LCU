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
            title: "Custom Software Development",
            dis: "We design and build bespoke software solutions tailored to your unique business requirements, ensuring optimal performance and scalability.",
        },
        {
            title: "Enterprise Application Development",
            dis: "Develop robust enterprise-grade applications that streamline operations and enhance productivity across your organization.",
        },
        {
            title: "Cloud-Based Solutions",
            dis: "Create scalable and secure cloud applications that enable remote access and data management from anywhere.",
        },
        {
            title: "API Development & Integration",
            dis: "Build and integrate APIs to connect your systems and enable seamless data exchange between applications.",
        },
        {
            title: "Software Modernization",
            dis: "Upgrade and modernize legacy systems to improve efficiency, security, and compatibility with current technologies.",
        },
        {
            title: "Custom CRM/ERP Development",
            dis: "Develop tailored customer relationship and enterprise resource planning systems to optimize your business processes.",
        },
        {
            title: "Software Security Audits",
            dis: "Conduct comprehensive security assessments to identify vulnerabilities and implement robust protection measures.",
        },
        {
            title: "Software Maintenance & Support",
            dis: "Provide ongoing support, updates, and optimization to ensure your software remains efficient and up-to-date.",
        },
    ];


    const FAQS = [
        {
            title: "What industries do you serve?",
            dis: "We develop custom software solutions for various industries including healthcare, finance, retail, manufacturing, and more.",
        },
        {
            title: "How do you ensure software quality?",
            dis: "We follow rigorous testing protocols including unit testing, integration testing, and user acceptance testing to ensure high-quality deliverables.",
        },
        {
            title: "Do you provide post-deployment support?",
            dis: "Yes, we offer comprehensive support packages including bug fixes, updates, and performance optimization.",
        },
        {
            title: "Can you integrate with existing systems?",
            dis: "Absolutely! We specialize in seamless integration with legacy systems and third-party applications.",
        },
        {
            title: "What technologies do you use?",
            dis: "We utilize a wide range of technologies including .NET, Java, Python, Node.js, and modern frameworks to build robust solutions.",
        },
    ];


    const packages = [
        {
            name: "Starter Package",
            features: [
                { title: "Basic Software Development", detail: "Development of core software functionalities" },
                {
                    title: "Standard UI/UX",
                    detail: "User-friendly interface design with basic user experience",
                },
                { title: "Documentation", detail: "Comprehensive technical documentation" },
                { title: "Basic Testing", detail: "Functional testing of core features" },
                { title: "3 Months Support", detail: "Post-deployment support for 3 months" },
            ],
            featured: false,
        },
        {
            name: "Professional Package",
            features: [
                { title: "Custom Software Development", detail: "Tailored solutions with advanced features" },
                {
                    title: "Enhanced UI/UX",
                    detail: "Custom interface design with improved user experience",
                },
                { title: "API Integration", detail: "Integration with existing systems and third-party APIs" },
                { title: "Comprehensive Testing", detail: "Thorough testing including security and performance" },
                { title: "6 Months Support", detail: "Extended support and maintenance package" },
            ],
            featured: false,
        },
        {
            name: "Enterprise Package",
            features: [
                { title: "Enterprise-Grade Solutions", detail: "Scalable software for large organizations" },
                {
                    title: "Advanced Security",
                    detail: "Enterprise-level security features and compliance",
                },
                { title: "Cloud Integration", detail: "Development of cloud-based solutions with scalability" },
                { title: "Custom CRM/ERP", detail: "Tailored business management systems" },
                { title: "1 Year Support", detail: "Comprehensive support and maintenance package" },
                {
                    title: "Analytics & Reporting",
                    detail: "Advanced data analysis and reporting features",
                },
            ],
            featured: true,
        },
        {
            name: "Innovation Package",
            features: [
                { title: "AI/ML Integration", detail: "Implementation of artificial intelligence and machine learning" },
                {
                    title: "IoT Solutions",
                    detail: "Development of Internet of Things applications and integrations",
                },
                { title: "Blockchain Technology", detail: "Implementation of blockchain-based features" },
                { title: "Cutting-Edge Design", detail: "Innovative and futuristic UI/UX design" },
                { title: "Custom Analytics", detail: "Advanced data visualization and business intelligence tools" },
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
                            Custom Software <br/> Development
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
                                Custom Software Solutions - Power Your Business
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Transform your operations with bespoke software solutions designed for your unique needs. Our custom software development services deliver robust, scalable applications that streamline processes and drive efficiency. From enterprise systems to cloud-based platforms, we create tailored solutions that empower your business growth and innovation.
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
                    <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Why Choose Our Custom Software Development Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Empower your business with tailored software solutions. Here's what sets us apart:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    Bespoke Solutions - Software designed specifically for your business needs
                                </li>
                                <li className="text-white/80 text-base">
                                    Scalable Architecture - Future-proof systems that grow with your business
                                </li>
                                <li className="text-white/80 text-base">
                                    Enterprise-Grade Security - Robust protection for your data and systems
                                </li>
                                <li className="text-white/80 text-base">
                                    Seamless Integration - Connect with existing systems and workflows
                                </li>
                                <li className="text-white/80 text-base">
                                    Continuous Support - Ongoing maintenance and updates for optimal performance
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
                    <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Core Services
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
                                Our Custom Software Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We employ a structured methodology to deliver tailored software solutions:

                                    Requirements Analysis – Collaborate to understand your business needs and objectives

                                    System Architecture – Design scalable and secure software architecture

                                    Agile Development – Build software using iterative development cycles

                                    Integration Services – Seamlessly connect with existing systems and APIs

                                    Quality Assurance – Implement comprehensive testing for reliability and performance

                                    Deployment & Training – Launch the solution and provide user training

                                    Ongoing Support – Offer maintenance and optimization services
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
                <ServiceForm />

                <BusinessOperations />
            </div>
        </>
    );
};

export default page;
