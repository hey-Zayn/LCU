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
            title: "Custom Mobile App Development",
            dis: "We create tailored mobile applications that align with your business goals, offering seamless user experiences across iOS and Android platforms.",
        },
        {
            title: "Cross-Platform App Development",
            dis: "Build apps that work flawlessly on multiple platforms using React Native and Flutter, reducing development time and cost.",
        },
        {
            title: "UI/UX Design for Mobile Apps",
            dis: "Craft intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
        },
        {
            title: "Mobile App Testing & QA",
            dis: "Ensure your app's reliability and performance through comprehensive testing across various devices and scenarios.",
        },
        {
            title: "App Maintenance & Support",
            dis: "Provide ongoing updates, bug fixes, and performance optimization to keep your app running smoothly.",
        },
        {
            title: "Enterprise Mobile Solutions",
            dis: "Develop secure and scalable mobile applications for businesses to improve internal processes and productivity.",
        },
        {
            title: "Mobile App Security",
            dis: "Implement robust security measures to protect user data and prevent vulnerabilities in your mobile applications.",
        },
        {
            title: "App Store Optimization",
            dis: "Enhance your app's visibility and downloads through strategic optimization of app store listings.",
        },
    ];


    const FAQS = [
        {
            title: "What platforms do you develop for?",
            dis: "We specialize in both native (iOS and Android) and cross-platform mobile app development to meet diverse business needs.",
        },
        {
            title: "How long does mobile app development take?",
            dis: "Development timelines vary based on complexity, but most projects range from 3-6 months for initial launch.",
        },
        {
            title: "Do you provide post-launch support?",
            dis: "Yes, we offer comprehensive maintenance packages including updates, bug fixes, and performance optimization.",
        },
        {
            title: "How do you ensure app security?",
            dis: "We implement industry-standard security protocols, including data encryption, secure authentication, and regular security audits.",
        },
        {
            title: "Can you help with app store submission?",
            dis: "Absolutely! We handle the entire process from preparing assets to submitting and managing your app in both Google Play and Apple App Store.",
        },
    ];


    const packages = [
        {
            name: "Basic App Package",
            features: [
                { title: "Single Platform", detail: "Development for either iOS or Android platform" },
                {
                    title: "Core Features",
                    detail: "Implementation of essential app functionalities",
                },
                { title: "Basic UI/UX", detail: "Standard interface design and user experience" },
                { title: "Testing", detail: "Basic functionality testing on selected devices" },
                { title: "Documentation", detail: "Technical documentation and user guides" },
            ],
            featured: false,
        },
        {
            name: "Advanced App Package",
            features: [
                { title: "Cross-Platform", detail: "Development for both iOS and Android using React Native" },
                {
                    title: "Custom Features",
                    detail: "Implementation of advanced and custom functionalities",
                },
                { title: "Premium UI/UX", detail: "Custom interface design and enhanced user experience" },
                { title: "Comprehensive Testing", detail: "Thorough testing across multiple devices and scenarios" },
                { title: "App Store Submission", detail: "Assistance with app store submission and approval" },
            ],
            featured: false,
        },
        {
            name: "Enterprise App Package",
            features: [
                { title: "Custom Development", detail: "Tailored solutions for enterprise needs" },
                {
                    title: "Advanced Security",
                    detail: "Enterprise-grade security features and compliance",
                },
                { title: "API Integration", detail: "Integration with existing enterprise systems and APIs" },
                { title: "Scalable Architecture", detail: "Future-proof and scalable app architecture" },
                { title: "Ongoing Support", detail: "Dedicated support and maintenance package" },
                {
                    title: "Analytics & Reporting",
                    detail: "Implementation of advanced analytics and reporting features",
                },
            ],
            featured: true,
        },
        {
            name: "Innovation Package",
            features: [
                { title: "AI Integration", detail: "Implementation of AI and machine learning features" },
                {
                    title: "AR/VR Features",
                    detail: "Development of augmented and virtual reality experiences",
                },
                { title: "IoT Connectivity", detail: "Integration with IoT devices and platforms" },
                { title: "Blockchain Technology", detail: "Implementation of blockchain-based features" },
                { title: "Cutting-Edge Design", detail: "Innovative and futuristic UI/UX design" },
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
                            Mobile App <br/> Development
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
                                Mobile App Development - Transform Your Business
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Revolutionize your business with custom mobile applications tailored to your needs. Our mobile app development services deliver seamless user experiences across iOS and Android platforms. From concept to deployment, we create innovative solutions that drive engagement, efficiency, and growth for your business.
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
                                Why Choose Our Mobile App Development Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Transform your business with our cutting-edge mobile app solutions. Here's what we offer:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    Cross-Platform Development - Build apps that work seamlessly on iOS and Android
                                </li>
                                <li className="text-white/80 text-base">
                                    Custom UI/UX Design - Create engaging and intuitive user interfaces
                                </li>
                                <li className="text-white/80 text-base">
                                    API Integration - Connect your app with backend systems and third-party services
                                </li>
                                <li className="text-white/80 text-base">
                                    Performance Optimization - Ensure fast and responsive app performance
                                </li>
                                <li className="text-white/80 text-base">
                                    Ongoing Maintenance & Support - Keep your app updated and secure
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
                                Our Mobile App Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We follow a comprehensive approach to deliver exceptional mobile applications:

                                    Discovery & Strategy – Understand your business goals and define app requirements

                                    UI/UX Design – Create intuitive and engaging user interfaces and experiences

                                    Native Development – Build high-performance apps for iOS and Android platforms

                                    API Integration – Connect your app with backend services and third-party APIs

                                    Quality Assurance – Conduct rigorous testing for functionality and performance

                                    Deployment & Support – Publish to app stores and provide ongoing maintenance
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
