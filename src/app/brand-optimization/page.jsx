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
import Head from "next/head";

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

    // SEO-optimized keywords for Brand Optimization
    const SEO_KEYWORDS = [
        "brand optimization",
        "brand strategy",
        "brand identity",
        "brand positioning",
        "brand consulting",
        "brand development",
        "brand management",
        "digital branding",
        "brand audit",
        "brand guidelines",
        "brand experience",
        "brand messaging",
        "brand launch",
        "brand reputation",
        "brand growth",
        "brand marketing",
        "brand transformation",
        "brand revitalization",
        "brand solutions",
        "forwardsols",
        "https://www.forwardsols.com/",
        "brand optimization services",
        "best brand optimization company",
        "brand optimization agency",
        "brand optimization experts",
        "brand optimization solutions"
    ];

    const SEOTpyes = [
        {
            title: "Brand Strategy Consulting",
            dis: "Unlock your business growth with expert brand strategy consulting. We align your brand with your business goals and market trends for maximum impact.",
        },
        {
            title: "Visual Identity Creation",
            dis: "Design a memorable brand identity with custom logos, color palettes, and typography that reflect your unique value and attract your target audience.",
        },
        {
            title: "Brand Messaging Framework",
            dis: "Develop a compelling brand messaging framework that communicates your brand promise and differentiates you in the marketplace.",
        },
        {
            title: "Market Positioning Analysis",
            dis: "Gain a competitive edge with in-depth market positioning analysis to ensure your brand stands out and resonates with your ideal customers.",
        },
        {
            title: "Customer Experience Optimization",
            dis: "Enhance every customer touchpoint with seamless, consistent, and engaging brand experiences that drive loyalty and advocacy.",
        },
        {
            title: "Brand Standards Development",
            dis: "Establish comprehensive brand guidelines to ensure consistency across all digital and offline channels.",
        },
        {
            title: "Comprehensive Brand Audit",
            dis: "Identify strengths, weaknesses, and opportunities with a thorough brand audit, setting the foundation for brand growth and optimization.",
        },
        {
            title: "Brand Launch Planning",
            dis: "Ensure a successful brand launch or relaunch with strategic planning, creative execution, and measurable results.",
        },
    ];

    const FAQS = [
        {
            title: "What is brand optimization and why is it important?",
            dis: "Brand optimization is the process of enhancing your brand’s visibility, reputation, and market positioning. It is crucial for building trust, increasing brand awareness, and driving business growth in a competitive digital landscape.",
        },
        {
            title: "How long does the brand optimization process take at Forwardsols?",
            dis: "The brand optimization process at Forwardsols typically ranges from 4 to 12 weeks, depending on your brand’s current state and project scope.",
        },
        {
            title: "Can Forwardsols optimize established brands?",
            dis: "Absolutely! We specialize in both launching new brands and revitalizing established brands to achieve higher market performance and customer engagement.",
        },
        {
            title: "Which industries does Forwardsols serve for brand optimization?",
            dis: "Forwardsols provides brand optimization services for technology, retail, healthcare, professional services, and many other industries.",
        },
        {
            title: "How do you measure the success of brand optimization?",
            dis: "We use a combination of brand awareness metrics, customer perception analysis, digital engagement, and market performance indicators to measure brand optimization success.",
        },
    ];

    const packages = [
        {
            name: "Starter Brand Optimization Package",
            features: [
                { title: "Brand Evaluation", detail: "Comprehensive analysis of your current brand health and digital presence" },
                { title: "Key Messaging", detail: "Development of core brand messages and unique value proposition" },
                { title: "Basic Visual Identity", detail: "Creation of a professional logo and essential brand elements" },
                { title: "Brand Standards", detail: "Basic brand guidelines for consistent application" },
                { title: "3 Months Support", detail: "Post-launch support and brand consulting" },
            ],
            featured: false,
        },
        {
            name: "Advanced Brand Optimization Package",
            features: [
                { title: "Complete Brand Strategy", detail: "In-depth brand strategy and market positioning" },
                { title: "Full Visual Identity", detail: "Design of a comprehensive visual identity system" },
                { title: "Messaging Architecture", detail: "Detailed messaging framework for all channels" },
                { title: "Experience Design", detail: "Optimization of brand experiences across all touchpoints" },
                { title: "6 Months Support", detail: "Extended support and brand management consulting" },
            ],
            featured: false,
        },
        {
            name: "Premium Brand Optimization Package",
            features: [
                { title: "Holistic Brand Development", detail: "End-to-end brand strategy, implementation, and optimization" },
                { title: "International Strategy", detail: "Brand strategies for global and multi-market expansion" },
                { title: "Brand Architecture", detail: "Development of complex brand architecture for multiple products/services" },
                { title: "Digital Brand Presence", detail: "Comprehensive digital branding and online reputation management" },
                { title: "1 Year Support", detail: "Ongoing brand management and optimization" },
                { title: "Dedicated Brand Team", detail: "A dedicated team for continuous brand growth" },
            ],
            featured: true,
        },
        {
            name: "Transformational Brand Optimization Package",
            features: [
                { title: "Brand Revitalization", detail: "Modernization and enhancement of existing brands for new market relevance" },
                { title: "Crisis Management", detail: "Brand recovery and reputation management strategies" },
                { title: "Cultural Alignment", detail: "Integration of brand with organizational culture and values" },
                { title: "Innovation Strategy", detail: "Forward-thinking strategies for brand innovation and transformation" },
                { title: "Custom SLAs", detail: "Tailored service level agreements for enterprise and large-scale needs" },
            ],
            featured: false,
        },
    ];

    return (
        <>
            <Head>
                <title>Brand Optimization Services | Brand Strategy & Identity Agency | Forwardsols</title>
                <meta
                    name="description"
                    content="Boost your business with Forwardsols' expert brand optimization services. We specialize in brand strategy, brand identity, digital branding, and market positioning to maximize your brand’s impact and growth. Contact us for a free brand audit."
                />
                <meta
                    name="keywords"
                    content={SEO_KEYWORDS.join(", ")}
                />
                <meta property="og:title" content="Brand Optimization Services | Brand Strategy & Identity Agency | Forwardsols" />
                <meta property="og:description" content="Forwardsols offers top-rated brand optimization, brand strategy, and digital branding services to help your business stand out and grow. Visit https://www.forwardsols.com/ for more." />
                <meta property="og:url" content="https://www.forwardsols.com/brand-optimization" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.forwardsols.com/brand-optimization-og.jpg" />
                <link rel="canonical" href="https://www.forwardsols.com/brand-optimization" />
            </Head>
            <div ref={sectionRef} className="w-full h-full">
                {/* -----------------------------  { Hero Section with SEO Keywords }  ----------------------------- */}
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
                            Brand Optimization Services
                        </h1>
                        {/* <p className="text-white text-center text-xl max-w-2xl mt-6 z-10">
                            Accelerate your business growth with <strong>SEO-optimized brand strategy, digital branding, and market positioning</strong> from <a href="https://www.forwardsols.com/" className="underline text-pink-400">Forwardsols</a>. Unlock your brand’s full potential and dominate your industry.
                        </p> */}
                    </div>
                </div>

                {/* -----------------------------  { Section 2: Why Brand Optimization? }  ----------------------------- */}
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
                            <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Why Invest in Brand Optimization?
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                At <strong>Forwardsols</strong>, our <strong>brand optimization services</strong> are designed to elevate your brand’s visibility, credibility, and market share. We combine <strong>SEO-optimized brand strategy</strong>, <strong>brand identity design</strong>, and <strong>digital branding</strong> to ensure your business stands out in today’s competitive landscape. Our proven approach increases <strong>brand awareness</strong>, drives <strong>customer engagement</strong>, and delivers measurable business growth.
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/contact`}>
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Get a Free Brand Audit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -----------------------------  { Section 3: Why Choose Forwardsols? }  ----------------------------- */}
                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Why Choose Forwardsols for Brand Optimization?
                            </h2>
                            <p className="leading-relaxed mb-4">
                                <strong>Forwardsols</strong> is a leading <strong>brand optimization agency</strong> with a proven track record in <strong>brand strategy</strong>, <strong>digital branding</strong>, and <strong>brand management</strong>. Here’s what sets us apart:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    <strong>Brand Identity Development</strong> – Build a unique, memorable, and SEO-optimized brand persona.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Market Positioning</strong> – Position your brand for maximum visibility and market share.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Digital Presence Optimization</strong> – Enhance your brand’s online reputation and search engine rankings.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Customer Experience Enhancement</strong> – Deliver consistent, engaging brand experiences across all channels.
                                </li>
                                <li className="text-white/80 text-base">
                                    <strong>Data-Driven Brand Growth</strong> – Leverage analytics and insights for continuous brand improvement.
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

                {/* -----------------------------  { Core Services Section with SEO Keywords }  ----------------------------- */}
                <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
                    <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Core Brand Optimization Services
                    </h2>
                    <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                                {SEOTpyes?.map((card, index) => (
                                    <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                                        <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                                        <p className="text-base font-medium">{card.dis}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* -----------------------------  { Solutions Section with SEO Content }  ----------------------------- */}
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
                            <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Our Brand Optimization Solutions
                            </h2>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    <strong>Forwardsols</strong> delivers a full suite of <strong>brand optimization solutions</strong> to help your business thrive:
                                </p>
                                <ul className="list-disc pl-5 mb-4">
                                    <li><strong>Brand Positioning</strong> – Define your unique value proposition and dominate your market niche.</li>
                                    <li><strong>Visual Identity Development</strong> – Create compelling logos, color schemes, and design systems for a memorable brand image.</li>
                                    <li><strong>Brand Messaging</strong> – Develop consistent, impactful communication across all digital and offline channels.</li>
                                    <li><strong>Competitive Analysis</strong> – Identify opportunities to differentiate and outperform your competitors.</li>
                                    <li><strong>Brand Architecture</strong> – Structure your brand portfolio for maximum impact and scalability.</li>
                                    <li><strong>Digital Branding</strong> – Optimize your online presence for higher search engine rankings and engagement.</li>
                                    <li><strong>Brand Guidelines</strong> – Establish clear standards for consistent brand representation everywhere.</li>
                                    <li><strong>Brand Experience Design</strong> – Create memorable customer interactions at every touchpoint.</li>
                                </ul>
                            </div>
                            <Link href={`/contact`}>
                                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                                    Book a Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* -----------------------------  { Brand Optimization Packages }  ----------------------------- */}
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-white font-bold text-4xl text-center mb-10">Brand Optimization Packages</h2>
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
                                        <h3 className="text-xl font-bold text-center">
                                            {pkg.name}
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <ul className="space-y-4">
                                            {pkg.features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="border-b border-gray-100 pb-2 last:border-0"
                                                >
                                                    <h4 className="font-medium text-white ">
                                                        {feature.title}
                                                    </h4>
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

                {/* -----------------------------  { FAQs Section with SEO Content }  ----------------------------- */}
                <section className="w-full h-full px-4 py-4 text-white">
                    <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
                        Brand Optimization FAQs
                    </h2>
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
