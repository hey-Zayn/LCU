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
            title: "Custom Web Development",
            dis: "We design and build bespoke websites tailored to your unique business needs, ensuring optimal performance and user experience.",
        },
        {
            title: "Progressive Web Apps",
            dis: "Develop modern PWAs that combine the best of web and mobile apps for seamless offline functionality and app-like experiences.",
        },
        {
            title: "Headless CMS Development",
            dis: "Implement flexible content management systems that separate backend from frontend for greater scalability and customization.",
        },
        {
            title: "Web Performance Optimization",
            dis: "Enhance website speed and efficiency through advanced optimization techniques and modern web technologies.",
        },
        {
            title: "Web Accessibility Solutions",
            dis: "Create inclusive websites that meet WCAG standards, ensuring accessibility for all users.",
        },
        {
            title: "API-First Development",
            dis: "Build robust web applications with API-first architecture for seamless integrations and future scalability.",
        },
        {
            title: "Web3 Development",
            dis: "Develop decentralized web applications using blockchain technology and smart contracts.",
        },
        {
            title: "Real-Time Web Applications",
            dis: "Create dynamic, interactive web apps with real-time data synchronization and updates.",
        },
    ];


    const FAQS = [
        {
            title: "What's your development process?",
            dis: "We follow an agile methodology with iterative development, continuous testing, and regular client feedback.",
        },
        {
            title: "Do you work with existing websites?",
            dis: "Yes, we specialize in website redesigns, migrations, and modernizing legacy systems.",
        },
        {
            title: "How do you handle project management?",
            dis: "We use modern project management tools and provide regular progress updates and sprint reviews.",
        },
        {
            title: "What about ongoing maintenance?",
            dis: "We offer flexible maintenance plans including security updates, performance monitoring, and feature enhancements.",
        },
        {
            title: "Can you integrate with third-party services?",
            dis: "Absolutely! We have extensive experience integrating with various APIs, payment gateways, and SaaS platforms.",
        },
    ];


    const packages = [
        {
            name: "Starter Web Package",
            features: [
                { title: "Custom Design", detail: "Tailored website design aligned with your brand identity" },
                {
                    title: "Basic Functionality",
                    detail: "Implementation of essential website features and pages",
                },
                { title: "Responsive Layout", detail: "Mobile-friendly design across all devices" },
                { title: "Basic SEO Setup", detail: "On-page optimization and meta tags configuration" },
                { title: "Content Integration", detail: "Setup and integration of your content" },
            ],
            featured: false,
        },
        {
            name: "Professional Web Package",
            features: [
                { title: "Advanced Features", detail: "Custom functionalities and interactive elements" },
                {
                    title: "CMS Integration",
                    detail: "Content management system setup and training",
                },
                { title: "Performance Optimization", detail: "Speed optimization and caching implementation" },
                { title: "Analytics Setup", detail: "Google Analytics and tracking configuration" },
                { title: "Security Features", detail: "SSL certificate and basic security measures" },
            ],
            featured: false,
        },
        {
            name: "Enterprise Web Package",
            features: [
                { title: "Custom Web Application", detail: "Development of complex web applications" },
                {
                    title: "API Development",
                    detail: "Custom API creation and third-party integrations",
                },
                { title: "Advanced Security", detail: "Enterprise-grade security measures and monitoring" },
                { title: "Scalable Architecture", detail: "Cloud-based infrastructure for growth" },
                { title: "Dedicated Support", detail: "Priority support and maintenance package" },
                {
                    title: "Custom Integrations",
                    detail: "Integration with existing enterprise systems",
                },
            ],
            featured: true,
        },
        {
            name: "E-commerce Web Package",
            features: [
                { title: "Custom Storefront", detail: "Development of tailored e-commerce solutions" },
                {
                    title: "Payment Processing",
                    detail: "Secure payment gateway integration",
                },
                { title: "Inventory Management", detail: "Advanced product and order management system" },
                { title: "Marketing Tools", detail: "Built-in SEO and promotional features" },
                { title: "Mobile Commerce", detail: "Fully optimized for mobile shopping experience" },
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
                            Custom Web <br/> Development
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
                                Custom Web Development - Transform Your Digital Presence
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Elevate your online presence with bespoke web development solutions tailored to your business needs. Our web development services deliver cutting-edge websites and web applications that combine stunning design with robust functionality. From responsive layouts to complex web systems, we create digital solutions that drive engagement, conversions, and business growth.
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
                                Why Choose Our Custom Web Development Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Transform your digital presence with our cutting-edge web solutions. Here's what we offer:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    Responsive Web Design - Create websites that work flawlessly across all devices
                                </li>
                                <li className="text-white/80 text-base">
                                    Custom UI/UX Development - Build engaging and user-friendly interfaces
                                </li>
                                <li className="text-white/80 text-base">
                                    Full-Stack Development - Develop robust backend systems with modern frameworks
                                </li>
                                <li className="text-white/80 text-base">
                                    E-commerce Solutions - Build secure and scalable online stores
                                </li>
                                <li className="text-white/80 text-base">
                                    Ongoing Maintenance & Support - Keep your website updated and optimized
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
                                Our Custom Web Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We employ a strategic methodology to craft exceptional web solutions:

                                    Consultation & Planning – Analyze your business needs and define project scope

                                    Responsive Design – Create modern, mobile-friendly user interfaces

                                    Frontend Development – Build interactive and dynamic user experiences

                                    Backend Development – Develop robust server-side architecture and databases

                                    API Development – Create secure and scalable application interfaces

                                    Testing & Optimization – Ensure performance, security, and cross-browser compatibility

                                    Deployment & Maintenance – Launch your site and provide ongoing support
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
