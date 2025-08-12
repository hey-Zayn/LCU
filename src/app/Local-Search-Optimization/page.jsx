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

    // Core Local SEO Services
    const localSEOServices = [
        {
            title: "Google My Business Optimization",
            dis: "We optimize your GMB profile with proper categorization, accurate NAP info, high-quality images, and strategic keyword placement to dominate local search results.",
        },
        {
            title: "Local Citation Building",
            dis: "We establish consistent business listings across top directories and local platforms to improve your local search rankings and online visibility.",
        },
        {
            title: "Localized Content Strategy",
            dis: "Our team creates geo-targeted content that resonates with your local audience while incorporating strategic local keywords.",
        },
        {
            title: "On-Page Local SEO Optimization",
            dis: "We optimize your website's meta tags, content, and schema markup specifically for local search engine optimization.",
        },
        {
            title: "Local Link Building",
            dis: "We build high-quality backlinks from locally relevant websites to boost your domain authority for local searches.",
        },
        {
            title: "Review Management",
            dis: "We help you acquire, manage, and respond to customer reviews to improve your local search rankings and reputation.",
        },
        {
            title: "Local SEO Audit & Competitor Analysis",
            dis: "We identify technical issues and analyze competitors to develop a winning local search optimization strategy.",
        },
        {
            title: "Local SEO Reporting & Monitoring",
            dis: "Regular performance reports and ranking tracking to measure the success of your local SEO campaign.",
        },
    ];

    // FAQs for Local SEO
    const FAQS = [
        {
            title: "What is local search engine optimization?",
            dis: "Local SEO is the process of optimizing your online presence to attract more business from relevant local searches. It helps businesses appear in Google's Local Pack and local organic results when potential customers search for products or services in their area.",
        },
        {
            title: "Why is local search optimization important for my business?",
            dis: "97% of consumers search online for local businesses. Local SEO helps you appear in these searches, drives more foot traffic to your physical location, and increases conversions from local customers ready to buy.",
        },
        {
            title: "How long does it take to see results from local SEO services?",
            dis: "Most businesses see initial improvements within 2-3 months, with significant results typically appearing in 6-12 months. The timeline depends on your industry competition and current online presence.",
        },
        {
            title: "What's the difference between local SEO and regular SEO?",
            dis: "While traditional SEO focuses on ranking nationally or globally, local search engine optimization targets geographic-specific searches and emphasizes factors like Google My Business, local citations, and location-based keywords.",
        },
        {
            title: "Do you offer local SEO services for multiple locations?",
            dis: "Yes, we specialize in multi-location local SEO strategies that maintain brand consistency while optimizing each location's unique local presence.",
        },
    ];

    // Local SEO Packages
    const packages = [
        {
            name: "Local SEO Starter",
            features: [
                { title: "Google My Business Setup", detail: "Complete profile creation and optimization" },
                { title: "Basic Citation Building", detail: "Listings on 30+ local directories" },
                { title: "On-Page Optimization", detail: "Basic meta tags and content optimization" },
                { title: "Monthly Ranking Report", detail: "Track 10 key local keywords" },
                { title: "Review Management", detail: "Setup and basic monitoring" },
            ],
            featured: false,
        },
        {
            name: "Local SEO Pro",
            features: [
                { title: "Advanced GMB Optimization", detail: "Posts, Q&A, and full optimization" },
                { title: "Premium Citations", detail: "100+ authoritative local listings" },
                { title: "Localized Content", detail: "2 locally optimized pages/month" },
                { title: "Competitor Analysis", detail: "Identify local ranking opportunities" },
                { title: "Review Generation", detail: "System to acquire customer reviews" },
            ],
            featured: true,
        },
        {
            name: "Local SEO Enterprise",
            features: [
                { title: "Multi-Location Management", detail: "Centralized control for all locations" },
                { title: "Custom Local Link Building", detail: "10+ local backlinks/month" },
                { title: "Advanced Schema Markup", detail: "LocalBusiness and other schemas" },
                { title: "Local PR Outreach", detail: "Featured in local news/media" },
                { title: "Dedicated Account Manager", detail: "Priority support and strategy" },
            ],
            featured: false,
        },
        {
            name: "Local SEO E-commerce",
            features: [
                { title: "Local Product Pages", detail: "Geo-targeted product optimizations" },
                { title: "Store Locator Optimization", detail: "Enhanced local findability" },
                { title: "Local Inventory Ads", detail: "Setup and management" },
                { title: "Market-Specific Promotions", detail: "Location-based offers" },
                { title: "Local Influencer Collabs", detail: "Community partnerships" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <div ref={sectionRef} className="w-full h-full">
               
                <head>
                    <title>Local Search Engine Optimization Services | ForwardSol</title>
                    <meta name="description" content="Boost your local visibility with our expert local search engine optimization services. Dominate Google's local pack and drive more customers to your business." />
                    <meta name="keywords" content="local search engine optimization, local SEO services, Google local search optimization, local business SEO, local search optimization company" />
                    <meta property="og:title" content="Local Search Engine Optimization Services | ForwardSol" />
                    <meta property="og:description" content="Professional local SEO services to help your business rank higher in local searches and attract more customers." />
                    <meta property="og:url" content="https://forwardsols.com/local-seo" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://forwardsols.com/Local-Serch-Optimization" />
                </head>

                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="local-seo-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#0A2E52] via-[#0A2E52] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            Local Search Engine <br /> Optimization Services
                        </h1>
                    </div>
                </div>

                {/* --------------------------------  { Section 2 }  ------------------------------------------ */}
                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Local SEO services helping businesses rank higher"
                                className="object-cover object-center rounded w-full h-full"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Dominate Local Search Results with Our Expert Local SEO Services
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                As a leading local search engine optimization company, we help businesses like yours appear at the top of Google's local pack and organic results. Our comprehensive local SEO strategies combine technical optimizations, content marketing, and citation building to drive more qualified traffic to your physical locations. Whether you're a small business or multi-location enterprise, our local search optimization services deliver measurable results.
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Get Your Free Local SEO Audit
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
                                Why Local Search Engine Optimization Matters
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                46% of all Google searches have local intent. Our local SEO services ensure your business appears when potential customers search for what you offer in your area. Here's what we focus on:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-500 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>Google My Business Optimization:</strong> Complete profile setup and ongoing management
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Local Citations:</strong> Consistent NAP (Name, Address, Phone) across directories
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>On-Page Local SEO:</strong> Location pages, schema markup, and geo-targeted content
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Review Management:</strong> Generate and respond to customer reviews
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Local Link Building:</strong> Earn backlinks from locally relevant websites
                                </li>
                            </ul>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Local search optimization strategies"
                                className="object-cover object-center rounded"
                            />
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
                    <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Comprehensive Local SEO Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#530BDF] to-[#530BDF] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {localSEOServices?.map((card, index) => (
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
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Our local SEO process"
                                className="object-cover object-center rounded w-full h-full"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8 ">
                            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Our Local Search Optimization Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We follow a proven 5-step methodology for local search engine optimization:
                                    <br /><br />
                                    <b>1. Local SEO Audit:</b> Comprehensive analysis of your current local search presence and competitor landscape.<br />
                                    <b>2. Foundation Building:</b> Google My Business optimization, citation cleanup, and NAP consistency.<br />
                                    <b>3. On-Page Optimization:</b> Location pages, schema markup, and geo-targeted content creation.<br />
                                    <b>4. Authority Building:</b> Local link building and review generation strategies.<br />
                                    <b>5. Ongoing Optimization:</b> Monthly reporting, performance tracking, and strategy adjustments.
                                </p>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Start Your Local SEO Strategy
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-white text-4xl font-bold text-center mb-12">Local SEO Service Packages</h2>
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
                    <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">Local SEO FAQs</h1>
                    <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Local SEO questions answered"
                                className="object-cover object-center rounded w-full h-full"
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