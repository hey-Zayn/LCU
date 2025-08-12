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

// Use the same pink color throughout instead of introducing a new blue
const PINK = "#ec4899"; // Tailwind's pink-500

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

    // Core MEAN Stack Services
    const meanServices = [
        {
            title: "Custom MEAN Stack Web Development Services",
            dis: "Our expert full stack developers build robust, scalable applications using MongoDB, Express.js, Angular, and Node.js tailored to your business requirements.",
        },
        {
            title: "API Development & Integration Solutions",
            dis: "Our MEAN stack development company designs secure RESTful APIs and integrates third-party services for seamless functionality.",
        },
        {
            title: "Single Page Application Development",
            dis: "We create lightning-fast, interactive SPAs with Angular that deliver exceptional user experiences and modern web performance.",
        },
        {
            title: "Real-Time Application Development",
            dis: "Hire MEAN stack developers to build real-time features like chat, notifications, and live updates using WebSockets.",
        },
        {
            title: "E-commerce Development Services",
            dis: "Our full stack development services include scalable e-commerce platforms with secure payment processing and inventory management.",
        },
        {
            title: "Legacy System Migration Services",
            dis: "We specialize in migrating outdated applications to the MEAN stack for improved performance and scalability.",
        },
        {
            title: "Application Maintenance & Support",
            dis: "Our MEAN stack development services include ongoing support, updates, and performance optimization.",
        },
        {
            title: "Cloud Deployment & DevOps Services",
            dis: "We deploy MEAN applications to AWS, Azure, or GCP with CI/CD pipelines and containerization solutions.",
        },
    ];

    // FAQs for MEAN Stack Development
    const FAQS = [
        {
            title: "What does full stack developer mean in MEAN context?",
            dis: "A full stack developer working with the MEAN stack (MongoDB, Express.js, Angular, Node.js) can handle both front-end and back-end development. This means they can build complete web applications from database design to user interfaces using JavaScript technologies.",
        },
        {
            title: "Why should I hire MEAN stack developers from your company?",
            dis: "Our MEAN stack development company offers experienced full stack developers who deliver fast, scalable solutions. We provide end-to-end services from concept to deployment, with expertise in both MEAN and MERN stacks for comprehensive JavaScript development.",
        },
        {
            title: "Can you migrate my existing application to MEAN stack?",
            dis: "Absolutely! Our full stack development services include seamless migration of legacy systems to modern MEAN architecture with minimal downtime and complete data integrity.",
        },
        {
            title: "What ongoing support do you provide after launch?",
            dis: "Our MEAN stack development services include comprehensive maintenance packages with performance monitoring, security updates, and feature enhancements.",
        },
        {
            title: "How quickly can you deliver a MEAN stack application?",
            dis: "Project timelines vary based on complexity, but our full stack developers typically deliver MVPs in 4-12 weeks. We'll provide a detailed estimate after understanding your specific requirements.",
        },
    ];

    // MEAN Stack Packages
    const packages = [
        {
            name: "Starter MEAN Package",
            features: [
                { title: "Requirements Analysis", detail: "Comprehensive understanding of your business goals" },
                { title: "Basic UI/UX Design", detail: "Responsive Angular frontend with core pages" },
                { title: "API Development", detail: "RESTful API with Node.js & Express.js" },
                { title: "Database Integration", detail: "MongoDB design and implementation" },
                { title: "Basic Deployment", detail: "Cloud or server deployment" },
            ],
            featured: false,
        },
        {
            name: "Business MEAN Solution",
            features: [
                { title: "Custom Business Logic", detail: "Tailored workflows and features" },
                { title: "User Authentication", detail: "Secure registration/login with JWT" },
                { title: "Admin Dashboard", detail: "Role-based management tools" },
                { title: "Third-party Integrations", detail: "Payment gateways, email services" },
                { title: "Quality Assurance", detail: "Comprehensive testing protocol" },
            ],
            featured: false,
        },
        {
            name: "Enterprise MEAN Platform",
            features: [
                { title: "Scalable Architecture", detail: "Microservices and load balancing" },
                { title: "Advanced Security", detail: "OAuth, rate limiting, encryption" },
                { title: "CI/CD Pipeline", detail: "Automated deployment workflows" },
                { title: "Performance Optimization", detail: "Caching and monitoring" },
                { title: "Priority Support", detail: "24/7 assistance with SLA" },
            ],
            featured: true,
        },
        {
            name: "E-commerce MEAN Suite",
            features: [
                { title: "Product Management", detail: "Dynamic catalog and search" },
                { title: "Shopping System", detail: "Persistent cart and checkout" },
                { title: "Payment Processing", detail: "Multiple gateway options" },
                { title: "Order Tracking", detail: "Complete order management" },
                { title: "SEO Optimization", detail: "SSR and meta management" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <div ref={sectionRef} className="w-full h-full">
                {/* Meta tags for SEO */}
                <head>
                    <title>MEAN Stack Development Company | Hire Expert Full Stack Developers</title>
                    <meta name="description" content="ForwardSols offers comprehensive MEAN stack development services. Hire our expert full stack developers for custom web applications, API development, and e-commerce solutions." />
                    <meta name="keywords" content="MEAN stack development, full stack developer meaning, hire MEAN stack developers, MEAN stack development company, full stack development services" />
                    <meta property="og:title" content="Professional MEAN Stack Development Services | ForwardSols" />
                    <meta property="og:description" content="Build scalable web applications with our expert MEAN stack developers. End-to-end solutions from a trusted development company." />
                    <meta property="og:url" content="https://forwardsols.com/mean-stack-development" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://forwardsols.com/mean-stack-development" />
                </head>

                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="mean-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#0A2E52] via-[#0A2E52] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            MEAN Stack Development Services
                        </h1>
                        <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
                            Expert full stack development solutions for businesses of all sizes. 
                            Hire dedicated MEAN stack developers for your next project.
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
                                Comprehensive MEAN Stack Development Services
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                As a leading MEAN stack development company, we specialize in building 
                                high-performance web applications using the complete JavaScript stack. 
                                Our full stack development services leverage MongoDB, Express.js, Angular, 
                                and Node.js to deliver seamless digital experiences. Whether you need to 
                                hire MEAN stack developers for a new project or enhance an existing 
                                application, our team delivers scalable solutions tailored to your 
                                business requirements.
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Hire MEAN Developers Now
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
                                Why Choose Our Full Stack Development Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Our MEAN stack development company stands out for delivering exceptional 
                                results. Here's what makes our full stack development services different:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-500 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>End-to-End JavaScript Expertise:</strong> Unified codebase for consistent, maintainable applications
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Rapid MVP Development:</strong> Quickly validate your ideas with functional prototypes
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Scalable Architecture:</strong> Future-proof solutions that grow with your business
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Real-Time Capabilities:</strong> Interactive features that engage users
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Cloud-Native Approach:</strong> Optimized for AWS, Azure, and Google Cloud deployments
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
                    <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Our Comprehensive MEAN Stack Development Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#530BDF] to-[#530BDF] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {meanServices?.map((card, index) => (
                                    <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-pink-700 hover:rotate-3 hover:scale-105 cursor-pointer">
                                        <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                                        <p className="text-base font-medium">{card.dis}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Process */}
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
                                Our Proven MEAN Stack Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    Our MEAN stack development company follows a structured approach 
                                    to deliver exceptional results:
                                    <br /><br />
                                    <b>1. Discovery & Planning:</b> We analyze your requirements and 
                                    create a detailed project roadmap.<br />
                                    <b>2. UI/UX Design:</b> Our designers create intuitive interfaces 
                                    that enhance user engagement.<br />
                                    <b>3. Development:</b> Our full stack developers build robust 
                                    frontend and backend components.<br />
                                    <b>4. Quality Assurance:</b> Rigorous testing ensures reliability 
                                    and performance.<br />
                                    <b>5. Deployment & Optimization:</b> We launch your application 
                                    and provide ongoing support.
                                </p>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Get Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-white mb-12">
                            Flexible MEAN Stack Development Packages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {packages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                                        ? "border border-pink-500 transform md:-translate-y-4"
                                        : "border border-[#530BDF]"
                                        }`}
                                >
                                    <div
                                        className={`p-6 ${pkg.featured
                                            ? "bg-pink-600 text-white"
                                            : "bg-[#530BDF] text-white"
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

                {/* FAQs */}
                <section className="w-full h-fullpx-4 py-4 text-white">
                    <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">MEAN Stack Development FAQs</h1>
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
                                        <AccordionTrigger className=" text-white md:text-2xl lg:text-2xl hover:no-underline hover:text-pink-400 cursor-pointer">
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