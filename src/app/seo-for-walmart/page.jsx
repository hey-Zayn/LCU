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

    // Walmart SEO Services
    const walmartServices = [
        {
            title: "Walmart Marketplace SEO Optimization",
            dis: "Boost your product visibility on Walmart Marketplace with our comprehensive SEO strategy tailored specifically for Walmart's search algorithm.",
        },
        {
            title: "Walmart Product Listing Optimization",
            dis: "Optimize your product titles, descriptions, and attributes to rank higher in Walmart search results and increase conversions.",
        },
        {
            title: "Walmart SEO Keyword Research",
            dis: "Discover high-volume, low-competition keywords that Walmart shoppers are actually searching for to drive targeted traffic.",
        },
        {
            title: "Walmart SEO Content Strategy",
            dis: "Develop compelling product content that satisfies both Walmart's algorithm and your potential customers' needs.",
        },
        {
            title: "Walmart Backend Keyword Optimization",
            dis: "Properly utilize Walmart's backend search terms field to maximize your product discoverability without keyword stuffing.",
        },
        {
            title: "Walmart SEO Competitor Analysis",
            dis: "Analyze and outperform your competitors' Walmart SEO strategies to dominate your product category.",
        },
        {
            title: "Walmart SEO Performance Tracking",
            dis: "Monitor your Walmart SEO metrics and make data-driven decisions to continuously improve your rankings.",
        },
        {
            title: "Walmart Sponsored Products Management",
            dis: "Complement your organic Walmart SEO efforts with strategically managed sponsored product campaigns.",
        },
    ];

    // FAQs for Walmart SEO
    const FAQS = [
        {
            title: "Why is Walmart SEO important for my business?",
            dis: "Walmart SEO helps your products rank higher in Walmart's search results, leading to increased visibility, more clicks, and higher sales. With over 120 million monthly visitors to Walmart.com, proper SEO can significantly impact your revenue.",
        },
        {
            title: "How is Walmart SEO different from regular SEO?",
            dis: "Walmart SEO focuses specifically on Walmart's search algorithm, which prioritizes factors like product relevance, price competitiveness, availability, and customer reviews rather than traditional web ranking factors.",
        },
        {
            title: "How long does it take to see results from Walmart SEO?",
            dis: "While some improvements can be seen within 2-4 weeks, substantial results typically appear within 3-6 months of consistent optimization efforts as Walmart's algorithm needs time to recognize and reward your optimizations.",
        },
        {
            title: "Can you help with both Walmart Marketplace and Walmart Connect ads?",
            dis: "Yes, we offer full-service Walmart marketing solutions including both organic Walmart SEO optimization and paid advertising management through Walmart Connect for a comprehensive sales strategy.",
        },
        {
            title: "Do you provide Walmart SEO services for international marketplaces?",
            dis: "Absolutely! We optimize product listings for all Walmart marketplaces including the US, Canada, and Mexico, with strategies tailored to each region's unique search behaviors.",
        },
    ];

    // Walmart SEO Packages
    const packages = [
        {
            name: "Basic Walmart SEO",
            features: [
                { title: "Product Title Optimization", detail: "Strategic keyword placement in product titles" },
                { title: "Description Enhancement", detail: "Improved product descriptions with keywords" },
                { title: "Basic Keyword Research", detail: "Identification of 10-15 relevant keywords" },
                { title: "Category Optimization", detail: "Proper category placement for your products" },
                { title: "Monthly Performance Report", detail: "Basic tracking of key metrics" },
            ],
            featured: false,
        },
        {
            name: "Advanced Walmart SEO",
            features: [
                { title: "Comprehensive Keyword Strategy", detail: "50+ keywords with search volume data" },
                { title: "Full Listing Optimization", detail: "Titles, descriptions, attributes, and backend" },
                { title: "Competitor Analysis", detail: "Identify and outperform competitors" },
                { title: "Image Optimization", detail: "SEO-friendly product images with alt text" },
                { title: "Bi-weekly Performance Reports", detail: "Detailed analytics and recommendations" },
            ],
            featured: true,
        },
        {
            name: "Enterprise Walmart SEO",
            features: [
                { title: "Unlimited Keyword Research", detail: "Ongoing keyword discovery and implementation" },
                { title: "Full Account Management", detail: "Dedicated Walmart SEO specialist" },
                { title: "A/B Testing", detail: "Continuous testing of listing variations" },
                { title: "Review Management", detail: "Strategies to improve product ratings" },
                { title: "Weekly Optimization", detail: "Regular updates based on performance data" },
            ],
            featured: false,
        },
        {
            name: "Walmart SEO + Advertising",
            features: [
                { title: "Full SEO Optimization", detail: "Complete listing enhancements" },
                { title: "Sponsored Products Management", detail: "Strategic ad campaigns" },
                { title: "Keyword Synergy", detail: "Alignment of organic and paid keywords" },
                { title: "Budget Optimization", detail: "Maximize ROI from ad spend" },
                { title: "Comprehensive Reporting", detail: "Unified performance tracking" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <div ref={sectionRef} className="w-full h-full">
                {/* Meta tags for SEO */}
                <head>
                    <title>Walmart SEO Services | Boost Your Marketplace Visibility | ForwardSol</title>
                    <meta name="description" content="Professional Walmart SEO services to increase your product visibility, drive more traffic, and boost sales on Walmart Marketplace. Get a free consultation today!" />
                    <meta name="keywords" content="Walmart SEO, Walmart Marketplace SEO, Walmart SEO strategy, Walmart SEO service, optimize Walmart listings, Walmart product ranking" />
                    <meta property="og:title" content="Walmart SEO Services | Boost Your Marketplace Visibility | ForwardSol" />
                    <meta property="og:description" content="Professional Walmart SEO services to increase your product visibility, drive more traffic, and boost sales on Walmart Marketplace." />
                    <meta property="og:url" content="https://forwardsols.com/walmart-seo" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href="https://forwardsols.com/walmart-seo" />
                </head>

                {/* --------------------------------  { Hero }  ------------------------------------------ */}
                <div className="w-full h-full">
                    <div
                        id="walmart-seo-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#0A2E52] via-[#0A2E52] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            Walmart SEO Services
                        </h1>
                        <p className="text-white text-center text-xl mt-6 z-10 max-w-2xl px-4">
                            Dominate Walmart search results and drive more sales with our expert Walmart Marketplace SEO strategies
                        </p>
                    </div>
                </div>

                {/* --------------------------------  { Section 2 }  ------------------------------------------ */}
                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 max-sm:py-10 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Walmart Marketplace SEO optimization"
                                className="object-cover object-center rounded w-full h-full"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Expert Walmart SEO Services for Marketplace Sellers
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Walmart Marketplace has become a crucial sales channel for ecommerce businesses, but with millions of products competing for attention, proper <strong>Walmart SEO strategy</strong> is essential. Our specialized <strong>Walmart SEO services</strong> help your products rank higher in Walmart search results, driving more organic traffic and increasing conversions.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Unlike traditional SEO, <strong>Walmart Marketplace SEO</strong> requires unique optimization techniques that account for Walmart's proprietary search algorithm. We combine data-driven keyword research with proven listing optimization methods to maximize your visibility and sales.
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Boost My Walmart Rankings
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
                                Our Walmart SEO Approach Delivers Results
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                We've developed a proven methodology for <strong>Walmart SEO optimization</strong> that focuses on the key factors Walmart's algorithm prioritizes:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-500 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>Keyword-Optimized Listings</strong> - Strategic placement of high-value keywords in titles, descriptions, and backend fields
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Product Content Enhancement</strong> - Detailed, compelling product information that converts browsers into buyers
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Conversion Rate Optimization</strong> - Improved images, bullet points, and specifications to boost sales
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Review Management</strong> - Strategies to generate more positive reviews, a key Walmart ranking factor
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Performance Monitoring</strong> - Continuous tracking and adjustment based on real marketplace data
                                </li>
                            </ul>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                                alt="Walmart SEO strategy results"
                                className="object-cover object-center rounded"
                            />
                        </div>
                    </div>
                </section>

                {/* Core Services */}
                <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
                    <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Comprehensive Walmart SEO Services
                    </h1>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#530BDF] to-[#530BDF] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#ec4899_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {walmartServices?.map((card, index) => (
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
                                src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Walmart SEO optimization process"
                                className="object-cover object-center rounded w-full h-full"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8 ">
                            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Our 5-Step Walmart SEO Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We follow a systematic approach to <strong>Walmart Marketplace SEO</strong> that delivers measurable results:
                                    <br /><br />
                                    <b>1. Comprehensive Audit</b> - Analyze your current listings, identify gaps, and benchmark against competitors.<br />
                                    <b>2. Keyword Research</b> - Discover high-value keywords specific to Walmart shoppers' search behavior.<br />
                                    <b>3. Listing Optimization</b> - Implement keyword strategies across titles, descriptions, attributes, and backend fields.<br />
                                    <b>4. Content Enhancement</b> - Improve product images, videos, and supplementary content to boost conversions.<br />
                                    <b>5. Performance Tracking</b> - Monitor rankings, traffic, and sales to continuously refine our approach.
                                </p>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Get a Free Walmart SEO Audit
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Packages */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-white text-4xl font-bold text-center mb-12">Walmart SEO Service Packages</h2>
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
                    <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">Walmart SEO FAQs</h1>
                    <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img
                                src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Walmart SEO questions"
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