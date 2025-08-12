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

    // Core MERN & MEAN Stack Services (SEO optimized)
    const stackServices = [
        {
            title: "Custom MERN & MEAN Stack Web Applications",
            dis: "We develop robust, scalable, and high-performance web applications using MongoDB, Express.js, React.js, Node.js (MERN) and Angular (MEAN) tailored to your business requirements.",
        },
        {
            title: "API Development & Third-Party Integrations",
            dis: "Design and implement secure RESTful APIs and integrate third-party services seamlessly into your MERN or MEAN stack applications.",
        },
        {
            title: "Single Page Applications (SPA)",
            dis: "Deliver lightning-fast, interactive SPAs with React.js (MERN) or Angular (MEAN) for a seamless user experience and modern web standards.",
        },
        {
            title: "Real-Time Application Development",
            dis: "Build real-time features such as chat, notifications, and live updates using WebSockets and the latest MERN/MEAN technologies.",
        },
        {
            title: "E-commerce Solutions",
            dis: "Launch scalable e-commerce platforms with secure payment gateways, product management, and user authentication using MERN or MEAN stack.",
        },
        {
            title: "Migration to MERN/MEAN Stack",
            dis: "Migrate your legacy applications to the MERN or MEAN stack for improved performance, maintainability, and scalability.",
        },
        {
            title: "Maintenance & Support",
            dis: "Ongoing support, bug fixes, and feature enhancements to keep your MERN and MEAN applications running smoothly.",
        },
        {
            title: "Cloud Deployment & DevOps",
            dis: "Deploy MERN and MEAN stack apps to AWS, Azure, or GCP with CI/CD pipelines, containerization, and scalable infrastructure.",
        },
    ];

    // SEO-optimized FAQs for MERN & MEAN Stack Development
    const FAQS = [
        {
            title: "What is the difference between MERN and MEAN stack?",
            dis: "MERN stack uses MongoDB, Express.js, React.js, and Node.js, while MEAN stack uses MongoDB, Express.js, Angular, and Node.js. Both are popular JavaScript stacks for full stack web development, with React or Angular as the frontend framework.",
        },
        {
            title: "Why choose MERN or MEAN stack for web development?",
            dis: "MERN and MEAN stacks offer rapid development, a unified JavaScript codebase, scalability, and a large ecosystem, making them ideal for startups and enterprises seeking high-performance web applications.",
        },
        {
            title: "Can you migrate my existing app to MERN or MEAN stack?",
            dis: "Absolutely! We specialize in migrating legacy applications to both MERN and MEAN stacks with minimal downtime and data integrity, ensuring a smooth transition.",
        },
        {
            title: "Do you provide post-launch support for MERN/MEAN projects?",
            dis: "Yes, we offer comprehensive maintenance, monitoring, and support packages to ensure your MERN or MEAN stack application remains secure and up-to-date.",
        },
        {
            title: "How long does it take to build a MERN or MEAN stack application?",
            dis: "Project timelines depend on complexity, but most MVPs can be delivered in 4-12 weeks. We provide a detailed estimate after understanding your requirements.",
        },
        {
            title: "What does full stack developer mean in the context of MERN/MEAN?",
            dis: "A full stack developer in the MERN or MEAN stack handles both frontend (React or Angular) and backend (Node.js/Express) development along with database (MongoDB) management, providing end-to-end solutions.",
        },
        {
            title: "Which is better: MERN or MEAN stack?",
            dis: "Both stacks are powerful for full stack development. MERN is preferred for dynamic, interactive UIs with React, while MEAN is ideal for enterprise-grade applications with Angular. We help you choose the best fit for your project.",
        },
    ];

    // MERN & MEAN Stack Packages (SEO optimized)
    const packages = [
        {
            name: "Starter MERN/MEAN App",
            features: [
                { title: "Requirements Analysis", detail: "Understand your business goals and technical needs" },
                { title: "Basic UI/UX", detail: "Responsive React.js or Angular frontend with essential pages" },
                { title: "API Setup", detail: "RESTful API with Node.js & Express.js" },
                { title: "MongoDB Integration", detail: "Database design and connection" },
                { title: "Deployment", detail: "App deployed to cloud or your server" },
            ],
            featured: false,
        },
        {
            name: "Business MERN/MEAN Solution",
            features: [
                { title: "Custom Features", detail: "Tailored business logic and workflows" },
                { title: "Authentication", detail: "User registration, login, and JWT-based security" },
                { title: "Admin Dashboard", detail: "Role-based access and management tools" },
                { title: "API Integrations", detail: "Connect with third-party services (e.g., payments, email)" },
                { title: "Testing & QA", detail: "Comprehensive testing for reliability" },
            ],
            featured: false,
        },
        {
            name: "Enterprise MERN/MEAN Platform",
            features: [
                { title: "Scalable Architecture", detail: "Microservices, load balancing, and cloud readiness" },
                { title: "Advanced Security", detail: "OAuth, rate limiting, and secure data handling" },
                { title: "CI/CD Pipeline", detail: "Automated testing and deployment workflows" },
                { title: "Performance Optimization", detail: "Caching, code splitting, and monitoring" },
                { title: "24/7 Support", detail: "Priority support and SLA" },
            ],
            featured: true,
        },
        {
            name: "E-commerce MERN/MEAN Suite",
            features: [
                { title: "Product Catalog", detail: "Dynamic product management and search" },
                { title: "Shopping Cart", detail: "Persistent cart and checkout flow" },
                { title: "Payment Integration", detail: "Stripe, PayPal, or custom gateways" },
                { title: "Order Management", detail: "Admin and customer order tracking" },
                { title: "SEO Optimization", detail: "Server-side rendering and meta management" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <Head>
                <title>
                    MERN & MEAN Stack Development Services | Hire Expert Full Stack Developers
                </title>
                <meta
                    name="description"
                    content="ForwardSol offers professional MERN and MEAN stack development services. Hire expert full stack developers to build scalable web applications with MongoDB, Express, React, Angular, and Node.js."
                />
                <meta
                    name="keywords"
                    content="MERN stack development, MEAN stack development, full stack developer, hire MERN developers, hire MEAN developers, full stack development services, MERN vs MEAN, MEAN stack company, MERN stack company, JavaScript full stack development"
                />
                <meta
                    property="og:title"
                    content="Professional MERN & MEAN Stack Development Services | ForwardSol"
                />
                <meta
                    property="og:description"
                    content="Expert MERN and MEAN stack development services to build scalable, high-performance web applications. Hire our full stack developers today."
                />
                <meta
                    property="og:url"
                    content="https://forwardsols.com/mern-stack-development"
                />
                <meta property="og:type" content="website" />
                <link
                    rel="canonical"
                    href="https://forwardsols.com/mern-stack-development"
                />
            </Head>

            <div ref={sectionRef} className="w-full h-full">
                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="mern-mean-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#0A2E52] via-[#0A2E52] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            MERN & MEAN Stack <br /> Development Services
                        </h1>
                        <p className="text-white text-center text-xl mt-4 z-10 max-w-2xl px-4">
                            Expert full stack development services using MongoDB, Express.js, React.js, Angular, and Node.js
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
                                Expert MERN & MEAN Stack Development Company
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                At ForwardSol, we specialize in <strong>full stack development</strong> using the powerful MERN stack (MongoDB, Express.js, React.js, Node.js) and MEAN stack (MongoDB, Express.js, Angular, Node.js). Our team of experienced <strong>full stack developers</strong> creates scalable, high-performance web applications tailored to your business needs. Whether you need to <strong>hire MERN stack developers</strong> or <strong>hire MEAN stack developers</strong> for a new project or to enhance your existing application, we deliver comprehensive solutions that drive results.
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Hire MERN/MEAN Developers
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
                                Why Choose Our MERN & MEAN Stack Development Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                As a leading <strong>MERN and MEAN stack development company</strong>, we provide end-to-end solutions that leverage the full potential of JavaScript across your entire application stack:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-500 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>Full stack development expertise</strong> – We handle both frontend and backend with unified JavaScript skills using React or Angular.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>MERN & MEAN stack flexibility</strong> – Choose React.js or Angular for your frontend, based on your project needs.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Scalable Architecture</strong> – Solutions that grow with your business and traffic.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Real-Time Features</strong> – Implement chat, notifications, and live updates for modern web apps.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Dedicated Teams</strong> – Option to hire dedicated MERN or MEAN stack developers for your project.
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
                        Comprehensive MERN & MEAN Stack Development Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#530BDF] to-[#530BDF] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {stackServices?.map((card, index) => (
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
                                Our Full Stack Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    Our <strong>MERN and MEAN stack development services</strong> follow a proven methodology to ensure quality and efficiency:
                                    <br /><br />
                                    <b>1. Discovery & Planning</b> – We analyze your requirements to determine the best stack (MERN or MEAN) and what <strong>full stack developer</strong> means for your project.<br />
                                    <b>2. UI/UX Design</b> – Create intuitive interfaces with React.js or Angular.<br />
                                    <b>3. Development</b> – Build robust backend with Node.js/Express.js and MongoDB.<br />
                                    <b>4. Testing</b> – Rigorous QA for performance and security.<br />
                                    <b>5. Deployment</b> – Cloud hosting with CI/CD pipelines.<br />
                                    <b>6. Ongoing Support</b> – Maintenance and updates for your MERN/MEAN application.
                                </p>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Hire Full Stack Developers
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-white mb-12">Our MERN & MEAN Stack Development Packages</h2>
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
                        FAQs About MERN & MEAN Stack Development
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