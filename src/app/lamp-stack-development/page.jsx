"use client";

import React, { useRef } from "react";
import Head from "next/head";
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

// SEO Keywords for LAMP Stack (high volume, low difficulty)
// "LAMP stack development", "LAMP web development", "LAMP stack developer", "LAMP hosting", "LAMP stack services", "LAMP stack website", "LAMP stack application", "LAMP stack migration", "LAMP stack support", "LAMP stack consulting"

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

    // Core LAMP Stack Services
    const lampServices = [
        {
            title: "Custom LAMP Stack Web Development",
            dis: "Get robust, scalable, and secure websites and web applications built with the LAMP stack (Linux, Apache, MySQL, PHP) tailored to your business needs.",
        },
        {
            title: "LAMP Stack Migration",
            dis: "Seamlessly migrate your existing website or application to the LAMP stack for improved performance, security, and scalability.",
        },
        {
            title: "LAMP Stack Hosting & Deployment",
            dis: "Reliable LAMP stack hosting solutions with optimized server configuration, deployment, and ongoing support.",
        },
        {
            title: "LAMP Stack Application Maintenance",
            dis: "Comprehensive maintenance, updates, and technical support for your LAMP stack applications to ensure smooth operation.",
        },
        {
            title: "LAMP Stack Consulting",
            dis: "Expert LAMP stack consulting services to help you plan, architect, and optimize your web projects.",
        },
        {
            title: "E-commerce Development with LAMP",
            dis: "Build high-performance, secure e-commerce websites using the LAMP stack with integrated payment gateways and custom features.",
        },
        {
            title: "API Development & Integration",
            dis: "Develop and integrate RESTful APIs with your LAMP stack applications for seamless third-party connectivity.",
        },
        {
            title: "LAMP Stack Security Optimization",
            dis: "Implement best-in-class security practices for your LAMP stack website or application, including SSL, firewalls, and regular audits.",
        },
    ];

    // FAQs for LAMP Stack Development
    const FAQS = [
        {
            title: "What is the LAMP stack?",
            dis: "LAMP stands for Linux, Apache, MySQL, and PHP. It is a popular open-source web development stack used to build dynamic websites and web applications.",
        },
        {
            title: "Why choose LAMP stack for web development?",
            dis: "LAMP stack offers proven reliability, cost-effectiveness, scalability, and a large developer community. It is ideal for building secure and high-performance web applications.",
        },
        {
            title: "Can you migrate my website to the LAMP stack?",
            dis: "Yes! We provide seamless LAMP stack migration services with minimal downtime and data integrity assurance.",
        },
        {
            title: "Do you offer LAMP stack hosting and support?",
            dis: "Absolutely. We provide optimized LAMP stack hosting, deployment, and ongoing technical support for your website or application.",
        },
        {
            title: "How much does LAMP stack development cost?",
            dis: "The cost depends on your project requirements. Contact us for a free consultation and a detailed quote tailored to your needs.",
        },
    ];

    // LAMP Stack Packages
    const packages = [
        {
            name: "LAMP Starter Website",
            features: [
                { title: "Business Analysis", detail: "Understand your goals and requirements" },
                { title: "Responsive Design", detail: "Mobile-friendly website with custom UI" },
                { title: "Basic CMS", detail: "Content management with PHP & MySQL" },
                { title: "SEO Optimization", detail: "On-page SEO for better rankings" },
                { title: "Secure Hosting", detail: "Deployed on optimized LAMP server" },
            ],
            featured: false,
        },
        {
            name: "LAMP Business Solution",
            features: [
                { title: "Custom Features", detail: "Tailored business logic and integrations" },
                { title: "User Authentication", detail: "Secure login and user management" },
                { title: "Admin Dashboard", detail: "Easy content and user management" },
                { title: "API Integrations", detail: "Connect with third-party services" },
                { title: "Performance Tuning", detail: "Optimized for speed and reliability" },
            ],
            featured: false,
        },
        {
            name: "LAMP Enterprise Platform",
            features: [
                { title: "Scalable Architecture", detail: "Load balancing and high availability" },
                { title: "Advanced Security", detail: "SSL, firewalls, and regular audits" },
                { title: "CI/CD Pipeline", detail: "Automated testing and deployment" },
                { title: "24/7 Support", detail: "Priority support and SLA" },
                { title: "Custom Integrations", detail: "ERP, CRM, and more" },
            ],
            featured: true,
        },
        {
            name: "LAMP E-commerce Suite",
            features: [
                { title: "Product Catalog", detail: "Dynamic product management" },
                { title: "Shopping Cart", detail: "Secure checkout and payment integration" },
                { title: "Order Management", detail: "Admin and customer order tracking" },
                { title: "SEO Optimization", detail: "Server-side rendering and meta management" },
                { title: "Analytics Integration", detail: "Track sales and user behavior" },
            ],
            featured: false,
        },
    ];

    // SEO Meta Data
    const metaTitle = "LAMP Stack Development Services | LAMP Web Development Company";
    const metaDescription =
        "Top LAMP stack development company offering custom LAMP web development, LAMP stack migration, hosting, support, and consulting. Build secure, scalable websites and web applications with expert LAMP stack developers.";
    const metaKeywords =
        "LAMP stack development, LAMP web development, LAMP stack developer, LAMP hosting, LAMP stack services, LAMP stack website, LAMP stack application, LAMP stack migration, LAMP stack support, LAMP stack consulting";

    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/lamp-stack-development" />
                <meta property="og:image" content="https://yourdomain.com/images/lamp-stack-og.jpg" />
            </Head>
            <div ref={sectionRef} className="w-full h-full">
                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="lamp-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#0A2E52] via-[#0A2E52] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            LAMP Stack <br /> Development
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
                                LAMP Stack Development – Powering Secure, Scalable Web Solutions
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Looking for expert <b>LAMP stack development</b>? Our team delivers high-performance, secure, and scalable web applications using the LAMP stack (Linux, Apache, MySQL, PHP). From custom websites to enterprise-grade web applications, we provide end-to-end <b>LAMP web development services</b> including migration, hosting, and ongoing support. Boost your business with a reliable <b>LAMP stack developer</b> today!
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Get Started
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
                                Why Choose Our LAMP Stack Services?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Unlock the full potential of open-source web development with our comprehensive <b>LAMP stack solutions</b>. Here’s what sets us apart:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-500 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    End-to-End LAMP Stack Development – From planning to deployment
                                </li>
                                <li className="text-white/80 text-base">
                                    Fast, Secure, and Scalable Web Applications
                                </li>
                                <li className="text-white/80 text-base">
                                    SEO-Optimized LAMP Stack Websites for Higher Rankings
                                </li>
                                <li className="text-white/80 text-base">
                                    LAMP Stack Migration & Modernization
                                </li>
                                <li className="text-white/80 text-base">
                                    24/7 LAMP Stack Support & Maintenance
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
                        Core LAMP Stack Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#530BDF] to-[#530BDF] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {lampServices?.map((card, index) => (
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
                                Our LAMP Stack Development Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We follow a proven process to deliver high-quality <b>LAMP stack solutions</b>:
                                    <br /><br />
                                    <b>Discovery & Planning</b> – Understand your business goals and technical requirements.<br />
                                    <b>UI/UX Design</b> – Create wireframes and interactive prototypes.<br />
                                    <b>Development</b> – Build frontend and backend using PHP, MySQL, and Apache on Linux.<br />
                                    <b>Testing & QA</b> – Ensure security, performance, and reliability.<br />
                                    <b>Deployment & Support</b> – Launch your LAMP stack website and provide ongoing maintenance.
                                </p>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Book a Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
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
                    <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">FAQs: LAMP Stack Development</h1>
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
