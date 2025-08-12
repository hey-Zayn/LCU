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

// SEO-optimized color
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

    // SEO-optimized Hybrid Mobile App Development Services
    const hybridServices = [
        {
            title: "Custom Hybrid Mobile App Development",
            dis: "We build high-performance, cross-platform mobile applications using React Native, Flutter, and Ionic, ensuring seamless user experiences on both iOS and Android devices.",
        },
        {
            title: "UI/UX Design for Hybrid Apps",
            dis: "Our expert designers craft intuitive, engaging, and responsive interfaces that maximize user retention and satisfaction across all mobile platforms.",
        },
        {
            title: "Hybrid App Maintenance & Support",
            dis: "Get ongoing support, regular updates, and proactive maintenance to keep your hybrid mobile apps secure, up-to-date, and running smoothly.",
        },
        {
            title: "Migration to Hybrid Platforms",
            dis: "Migrate your existing native apps to hybrid frameworks for faster updates, reduced costs, and broader reach without compromising performance.",
        },
        {
            title: "API Integration & Backend Development",
            dis: "Seamlessly connect your hybrid apps to powerful backends, third-party APIs, and cloud services for robust, scalable mobile solutions.",
        },
        {
            title: "App Store Deployment & Optimization",
            dis: "We handle the complete app store submission process, including ASO (App Store Optimization) for maximum visibility and downloads.",
        },
        {
            title: "Enterprise Hybrid App Solutions",
            dis: "Leverage secure, scalable hybrid mobile apps tailored for enterprise needs, including employee portals, CRM, and workflow automation.",
        },
        {
            title: "Progressive Web Apps (PWA)",
            dis: "Develop fast, installable PWAs that deliver app-like experiences on any device, improving engagement and discoverability.",
        },
    ];

    // SEO-optimized FAQs for Hybrid Mobile App Development
    const FAQS = [
        {
            title: "What is hybrid mobile app development?",
            dis: "Hybrid mobile app development uses frameworks like React Native, Flutter, and Ionic to create apps that run on both iOS and Android from a single codebase, reducing development time and cost.",
        },
        {
            title: "Why choose hybrid apps over native apps?",
            dis: "Hybrid apps offer faster development, easier maintenance, and cost savings by sharing code across platforms, while still delivering near-native performance and user experience.",
        },
        {
            title: "Which technologies do you use for hybrid app development?",
            dis: "We specialize in React Native, Flutter, and Ionic for hybrid app development, ensuring robust, scalable, and future-proof mobile solutions.",
        },
        {
            title: "Can you migrate my existing app to a hybrid platform?",
            dis: "Absolutely! We provide seamless migration services from native to hybrid platforms, preserving your data and enhancing app performance.",
        },
        {
            title: "How do you ensure app performance and security?",
            dis: "We follow best practices in coding, testing, and security, including code optimization, regular updates, and secure API integrations to deliver high-performance, secure hybrid apps.",
        },
        {
            title: "Do you offer post-launch support for hybrid apps?",
            dis: "Yes, we provide comprehensive maintenance, updates, and support packages to keep your hybrid mobile app running smoothly and securely.",
        },
        {
            title: "How long does it take to develop a hybrid mobile app?",
            dis: "Development timelines depend on app complexity, but most hybrid apps can be delivered in 4-12 weeks. We provide detailed estimates after understanding your requirements.",
        },
    ];

    // SEO-optimized Hybrid Mobile App Packages
    const packages = [
        {
            name: "Starter Hybrid App Package",
            features: [
                { title: "Requirement Analysis", detail: "In-depth consultation to define your app goals and features" },
                { title: "Basic UI/UX Design", detail: "Clean, responsive design for both iOS and Android" },
                { title: "Core Functionality", detail: "Essential features built with React Native or Flutter" },
                { title: "App Store Submission", detail: "Deployment to Google Play and Apple App Store" },
                { title: "1 Month Free Support", detail: "Bug fixes and minor updates post-launch" },
            ],
            featured: false,
        },
        {
            name: "Business Hybrid App Solution",
            features: [
                { title: "Custom Features", detail: "Tailored business logic and integrations" },
                { title: "Advanced UI/UX", detail: "Brand-focused, interactive design" },
                { title: "API & Backend Integration", detail: "Connect to your backend or third-party services" },
                { title: "Push Notifications", detail: "User engagement with real-time alerts" },
                { title: "Testing & QA", detail: "Comprehensive testing for reliability" },
            ],
            featured: false,
        },
        {
            name: "Enterprise Hybrid App Platform",
            features: [
                { title: "Scalable Architecture", detail: "Microservices, cloud integration, and enterprise security" },
                { title: "Custom Integrations", detail: "CRM, ERP, and workflow automation" },
                { title: "Performance Optimization", detail: "Advanced caching, analytics, and monitoring" },
                { title: "CI/CD Pipeline", detail: "Automated testing and deployment workflows" },
                { title: "24/7 Priority Support", detail: "Dedicated support and SLAs" },
            ],
            featured: true,
        },
        {
            name: "E-commerce Hybrid App Suite",
            features: [
                { title: "Product Catalog", detail: "Dynamic product management and search" },
                { title: "Shopping Cart & Checkout", detail: "Seamless, secure purchase flow" },
                { title: "Payment Gateway Integration", detail: "Stripe, PayPal, or custom solutions" },
                { title: "Order Management", detail: "Admin and customer order tracking" },
                { title: "App Store Optimization", detail: "ASO for maximum visibility and downloads" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <Head>
                <title>
                    Hybrid Mobile App Development Services | Cross-Platform App Development Company
                </title>
                <meta
                    name="description"
                    content="ForwardSol offers expert hybrid mobile app development services. Build high-performance cross-platform apps with React Native, Flutter, and Ionic. Hire top hybrid app developers for iOS & Android."
                />
                <meta
                    name="keywords"
                    content="hybrid mobile app development, cross-platform app development, React Native app development, Flutter app development, Ionic app development, hybrid app company, hire hybrid app developers, mobile app development services, iOS Android app development, PWA development"
                />
                <meta
                    property="og:title"
                    content="Hybrid Mobile App Development Services | ForwardSol"
                />
                <meta
                    property="og:description"
                    content="Professional hybrid mobile app development company. Build cross-platform apps for iOS & Android with React Native, Flutter, and Ionic. Hire expert hybrid app developers."
                />
                <meta
                    property="og:url"
                    content="https://forwardsols.com/hybrid-mobile-apps"
                />
                <meta property="og:type" content="website" />
                <link
                    rel="canonical"
                    href="https://forwardsols.com/hybrid-mobile-apps"
                />
            </Head>

            <div ref={sectionRef} className="w-full h-full">
                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="hybrid-app-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#0A2E52] via-[#0A2E52] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            Hybrid Mobile App <br /> Development Services
                        </h1>
                        <p className="text-white text-center text-xl mt-4 z-10 max-w-2xl px-4">
                            Build high-performance cross-platform mobile apps for iOS & Android with React Native, Flutter, and Ionic. Hire expert hybrid app developers today!
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
                                Leading Hybrid Mobile App Development Company
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                ForwardSol is a top <strong>hybrid mobile app development company</strong> specializing in <strong>cross-platform app development</strong> using React Native, Flutter, and Ionic. Our experienced <strong>hybrid app developers</strong> deliver scalable, secure, and high-performance mobile solutions for startups, enterprises, and entrepreneurs. Whether you want to <strong>hire hybrid app developers</strong> for a new project or migrate your existing app, we ensure seamless user experiences on both iOS and Android.
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Hire Hybrid App Developers
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
                                Why Choose Our Hybrid Mobile App Development Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                As a trusted <strong>hybrid app development company</strong>, we deliver end-to-end solutions that maximize your ROI and accelerate your digital transformation:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-500 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>Cross-Platform Expertise</strong> – One codebase for iOS and Android, reducing costs and time-to-market.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Latest Hybrid Technologies</strong> – React Native, Flutter, and Ionic for robust, future-ready apps.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>App Store Optimization (ASO)</strong> – Boost your app’s visibility and downloads on Google Play and Apple App Store.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Seamless Integrations</strong> – Connect with APIs, cloud, and third-party services for powerful mobile solutions.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Dedicated Support</strong> – Ongoing maintenance, updates, and 24/7 support for your hybrid apps.
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
                        Comprehensive Hybrid Mobile App Development Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#530BDF] to-[#530BDF] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {hybridServices?.map((card, index) => (
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
                                Our Hybrid App Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    Our <strong>hybrid mobile app development process</strong> ensures quality, speed, and scalability:
                                    <br /><br />
                                    <b>1. Discovery & Strategy</b> – We analyze your business goals and target audience to define the best hybrid app approach.<br />
                                    <b>2. UI/UX Design</b> – Create engaging, user-centric designs for seamless cross-platform experiences.<br />
                                    <b>3. Agile Development</b> – Rapid, iterative development using React Native, Flutter, or Ionic.<br />
                                    <b>4. Integration & Testing</b> – Connect APIs, test on real devices, and ensure flawless performance.<br />
                                    <b>5. App Store Launch</b> – Deploy to Google Play and Apple App Store with ASO best practices.<br />
                                    <b>6. Ongoing Support</b> – Continuous updates, monitoring, and support for your hybrid app.
                                </p>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Hire Hybrid App Experts
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Hybrid Mobile App Development Packages</h2>
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
                                        <div className="mt-6 text-center">
                                            <Link href="/contact">
                                                <button className={`px-4 py-2 rounded-md ${pkg.featured ? 'bg-white text-pink-600' : 'bg-pink-500 text-white'} hover:bg-pink-700 transition-colors`}>
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
                    <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
                        FAQs About Hybrid Mobile App Development
                    </h1>
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