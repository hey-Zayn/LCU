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
            title: "Computer Vision Solutions",
            dis: "We develop advanced computer vision systems that can analyze and interpret visual data for various applications.",
        },
        {
            title: "Object Detection & Recognition",
            dis: "Implement state-of-the-art algorithms for accurate object detection and recognition in images and videos.",
        },
        {
            title: "Facial Recognition Systems",
            dis: "Create secure and efficient facial recognition solutions for authentication and identification purposes.",
        },
        {
            title: "Image Processing & Analysis",
            dis: "Develop custom image processing pipelines for enhanced image quality and feature extraction.",
        },
        {
            title: "Video Analytics",
            dis: "Build intelligent video analysis systems for real-time monitoring and event detection.",
        },
        {
            title: "Augmented Reality Integration",
            dis: "Combine computer vision with AR technologies for immersive experiences and practical applications.",
        },
        {
            title: "Medical Imaging Solutions",
            dis: "Develop specialized computer vision systems for medical diagnosis and image analysis.",
        },
        {
            title: "Industrial Automation",
            dis: "Implement computer vision in manufacturing for quality control and process optimization.",
        },
    ];


    const FAQS = [
        {
            title: "What industries do you serve?",
            dis: "We provide computer vision solutions for healthcare, retail, manufacturing, security, and more.",
        },
        {
            title: "How accurate are your systems?",
            dis: "Our systems achieve state-of-the-art accuracy through advanced deep learning models and rigorous testing.",
        },
        {
            title: "Can you process real-time video?",
            dis: "Yes, we specialize in developing real-time video processing solutions with optimized performance.",
        },
        {
            title: "Do you offer custom model training?",
            dis: "Absolutely! We can train custom models tailored to your specific data and requirements.",
        },
        {
            title: "What about data privacy?",
            dis: "We implement strict data security measures and comply with all relevant privacy regulations.",
        },
    ];


    const packages = [
        {
            name: "Basic Vision Package",
            features: [
                { title: "Image Analysis", detail: "Basic image processing and feature extraction" },
                {
                    title: "Object Detection",
                    detail: "Implementation of standard object detection models",
                },
                { title: "API Integration", detail: "Integration with existing systems via APIs" },
                { title: "Basic Reporting", detail: "Generation of simple analysis reports" },
                { title: "3 Months Support", detail: "Technical support and maintenance for 3 months" },
            ],
            featured: false,
        },
        {
            name: "Advanced Vision Package",
            features: [
                { title: "Custom Model Training", detail: "Training of models on your specific dataset" },
                {
                    title: "Real-Time Processing",
                    detail: "Development of real-time video analysis systems",
                },
                { title: "Advanced Analytics", detail: "Complex data analysis and insights generation" },
                { title: "Cloud Integration", detail: "Deployment on cloud platforms for scalability" },
                { title: "6 Months Support", detail: "Extended support and maintenance package" },
            ],
            featured: false,
        },
        {
            name: "Enterprise Vision Package",
            features: [
                { title: "End-to-End Solutions", detail: "Complete system development and deployment" },
                {
                    title: "Custom Algorithms",
                    detail: "Development of specialized computer vision algorithms",
                },
                { title: "High-Performance Systems", detail: "Optimized for large-scale processing" },
                { title: "Security Features", detail: "Enterprise-grade security and compliance" },
                { title: "1 Year Support", detail: "Comprehensive support and maintenance package" },
                {
                    title: "Dedicated Team",
                    detail: "Assigned team for ongoing development and optimization",
                },
            ],
            featured: true,
        },
        {
            name: "Innovation Package",
            features: [
                { title: "AI Integration", detail: "Combining computer vision with other AI technologies" },
                {
                    title: "Edge Computing",
                    detail: "Development of on-device processing solutions",
                },
                { title: "Custom Hardware Integration", detail: "Integration with specialized cameras and sensors" },
                { title: "Research & Development", detail: "Cutting-edge solutions and experimental features" },
                { title: "Custom SLAs", detail: "Tailored service level agreements for critical systems" },
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
                            Computer Vision <br/> Solutions
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
                                Computer Vision Solutions - Transform Visual Data into Insights
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Unlock the power of visual data with our advanced computer vision solutions. We develop cutting-edge systems that can analyze, interpret, and extract meaningful insights from images and video streams. From object detection to facial recognition, our solutions are tailored to your specific needs, helping you automate processes, enhance decision-making, and gain a competitive edge.
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
                                Why Choose Our Computer Vision Solutions?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Harness the power of visual intelligence with our state-of-the-art computer vision technologies. Here's what sets us apart:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    Advanced Object Detection - Accurately identify and track objects in real-time
                                </li>
                                <li className="text-white/80 text-base">
                                    Facial Recognition Systems - Implement secure and reliable identity verification
                                </li>
                                <li className="text-white/80 text-base">
                                    Image Classification - Automate visual data categorization with high precision
                                </li>
                                <li className="text-white/80 text-base">
                                    Video Analytics - Extract actionable insights from video streams
                                </li>
                                <li className="text-white/80 text-base">
                                    Custom AI Models - Develop tailored solutions for your specific use cases
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
                                Our Computer Vision Solutions
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We leverage cutting-edge AI and machine learning to deliver powerful computer vision capabilities:

                                    Object Detection & Recognition – Identify and classify objects in images and videos

                                    Image Segmentation – Precisely delineate and analyze image regions

                                    Facial Recognition – Implement secure biometric authentication systems

                                    Motion Analysis – Track and interpret movement patterns in video streams

                                    Optical Character Recognition – Extract text from images and documents

                                    Augmented Reality – Develop immersive AR experiences with real-time object tracking

                                    Quality Inspection – Automate visual quality control in manufacturing

                                    Custom Model Development – Build tailored CV solutions for your specific needs
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
