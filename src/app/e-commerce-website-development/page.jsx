"use client";
import WhyChooseus from "@/Dev//Components/WhyChooseus";
import React, { useEffect, useRef } from "react";
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
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const ctaRef = useRef(null);

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

    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Create animation timeline

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        // Add animations to timeline
        tl.from(headingRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })
            .from(
                textRef.current,
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4"
            )
            .from(
                ctaRef.current,
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4"
            );

        // Cleanup function
        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            tl.kill();
        };
    }, []);

const SEOTpyes = [
  {
    title: "Custom E-commerce Design & Development Services",
    dis: "Launch your online store with our comprehensive, one-time e-commerce setup solution. We handle every aspect, from custom design to deployment, ensuring a fast, secure, and user-friendly platform built for immediate impact and lasting success. Ideal for businesses seeking a premium, hassle-free online presence.",
  },
  {
    title: "SEO-Optimized E-commerce Architecture",
    dis: "Maximize your online store's visibility with our SEO-first e-commerce solutions. We implement best practices like clean coding, optimized images, strategic meta tags, logical URL structures, and keyword-aligned content to enhance search engine rankings and attract organic traffic, giving your business a significant online advantage.",
  },
  {
    title: "Mobile-First Responsive E-commerce Design",
    dis: "Capitalize on the growing mobile commerce trend with our mobile-first e-commerce design. We ensure your online store provides a seamless shopping experience across all devices (smartphones, tablets, desktops) with rigorous testing and optimization for smooth navigation and fast load times, improving engagement and reducing bounce rates.",
  },
  {
    title: "E-commerce Speed & Performance Optimization",
    dis: "Enhance user satisfaction and improve search engine rankings with our e-commerce speed and performance optimization services. We implement techniques such as image compression, browser caching, CSS and JavaScript minification, Content Delivery Networks (CDNs), and server-side caching to ensure your site performs efficiently, even during peak traffic.",
  },
  {
    title: "Enhanced E-commerce Security Measures",
    dis: "Protect your online store and customer data with our comprehensive security measures. We integrate secure hosting, SSL certificates, malware scanning, firewalls, regular updates, security patches, and two-factor authentication (2FA) to ensure a safe and reliable online shopping environment, building trust with your customers.",
  },
  {
    title: "Scalable & Future-Proof E-commerce Solutions",
    dis: "Build your online business on a platform designed for growth. Our scalable e-commerce solutions offer flexible architecture that accommodates future features, integrations, and content expansion, ensuring your site remains adaptable and effective as your business evolves, avoiding costly redesigns and maintaining peak performance.",
  },
];

const FAQS = [
  {
    title: "What Types of Businesses Benefit from Your E-commerce Solutions?",
    dis: "Our e-commerce solutions cater to businesses of all sizes selling physical products, digital goods, or services. We provide tailored platforms designed to enhance online store functionality, improve user experience, and increase profitability for startups to large enterprises.",
  },
  {
    title: "Do You Offer Custom E-commerce Solutions for Specific Industries?",
    dis: "Yes, we specialize in developing custom e-commerce solutions tailored to the unique needs of various industries, including retail, fashion, technology, and more. Our team collaborates closely with you to create a solution that aligns perfectly with your business goals and industry-specific requirements.",
  },
  {
    title: "How Do Your E-commerce Solutions Enhance Customer Experience?",
    dis: "Our e-commerce solutions prioritize user experience through responsive design, simplified navigation, personalized shopping features, and fast, secure checkout processes. This focus leads to improved customer satisfaction, increased loyalty, and higher conversion rates for your online store.",
  },
  {
    title: "Can Your E-commerce Platform Integrate with Existing Business Systems?",
    dis: "Absolutely. We ensure seamless integration of our e-commerce platform with your existing ERP, CRM, and other third-party systems. This centralizes data and streamlines business processes, simplifying inventory management, customer relationship management, and order fulfillment for your business.",
  },
];

const packages = [
  {
    name: "Basic E-commerce Package - Essential Setup",
    features: [
      { title: "Custom Design", detail: "Selection from pre-designed e-commerce templates." },
      { title: "Responsive Design", detail: "Mobile-friendly e-commerce store design." },
      { title: "Content Management System", detail: "Basic CMS setup for product and content management." },
      { title: "SEO Optimization", detail: "Fundamental SEO setup for e-commerce." },
      { title: "Security Features", detail: "Standard security measures for online transactions." },
      { title: "Performance Optimization", detail: "Basic performance tuning for loading speed." },
      { title: "E-commerce Functionality", detail: "Core e-commerce features (product listings, shopping cart)." },
      { title: "Support & Maintenance", detail: "Limited post-launch support for basic inquiries." },
      { title: "Plugin Integration", detail: "Integration of essential e-commerce plugins." },
      { title: "Training & Documentation", detail: "Basic documentation for store management." },
    ],
    featured: false,
  },
  {
    name: "Standard E-commerce Package - Enhanced Features",
    features: [
      { title: "Custom Design", detail: "Basic custom design elements for your e-commerce store." },
      { title: "Responsive Design", detail: "Fully responsive design across all devices for optimal viewing." },
      { title: "Content Management System", detail: "CMS with advanced features and additional plugins for e-commerce." },
      { title: "SEO Optimization", detail: "On-page SEO optimization for product pages and categories." },
      { title: "Security Features", detail: "Enhanced security protocols for customer data protection." },
      { title: "Performance Optimization", detail: "Improved speed and performance optimization for better user experience." },
      { title: "E-commerce Functionality", detail: "Comprehensive e-commerce setup with payment gateway integration." },
      { title: "Support & Maintenance", detail: "3 months of dedicated support and platform updates." },
      { title: "Plugin Integration", detail: "Integration of standard e-commerce and marketing plugins." },
      { title: "Training & Documentation", detail: "User training sessions for store management." },
    ],
    featured: false,
  },
  {
    name: "Premium E-commerce Package - Advanced Solutions",
    features: [
      { title: "Custom Design", detail: "Advanced custom design tailored to your brand identity." },
      { title: "Responsive Design", detail: "Enhanced responsiveness and user experience across all devices." },
      { title: "Content Management System", detail: "Advanced CMS features with custom modules for e-commerce." },
      { title: "SEO Optimization", detail: "Advanced SEO strategies including keyword research and technical optimization." },
      { title: "Security Features", detail: "Advanced security features including regular security audits." },
      { title: "Performance Optimization", detail: "Comprehensive performance optimization with caching and CDN integration." },
      { title: "E-commerce Functionality", detail: "Advanced e-commerce features including personalized recommendations." },
      { title: "Support & Maintenance", detail: "6 months of premium support and ongoing platform maintenance." },
      { title: "Plugin Integration", detail: "Integration of premium e-commerce and marketing plugins." },
      { title: "Training & Documentation", detail: "Comprehensive training and detailed documentation." },
    ],
    featured: true,
  },
  {
    name: "Enterprise E-commerce Package - Fully Bespoke Platform",
    features: [
      { title: "Custom Design", detail: "Fully bespoke, unique design reflecting your brand's vision." },
      { title: "Responsive Design", detail: "Fully optimized responsive design for exceptional user experience on all devices." },
      { title: "Content Management System", detail: "Comprehensive CMS with custom integrations and enterprise-level features." },
      { title: "SEO Optimization", detail: "Complete SEO audit and ongoing optimization strategies for maximum visibility." },
      { title: "Security Features", detail: "Top-tier security infrastructure with regular updates and monitoring." },
      { title: "Performance Optimization", detail: "Premium performance and caching solutions for lightning-fast loading times." },
      { title: "E-commerce Functionality", detail: "Fully integrated, custom e-commerce solution with advanced features and integrations." },
      { title: "Support & Maintenance", detail: "12 months of premium, dedicated support and proactive maintenance." },
      { title: "Plugin Integration", detail: "Custom plugin development and advanced third-party integrations." },
      { title: "Training & Documentation", detail: "In-depth training sessions and personalized, comprehensive documentation." },
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
                            E-Commerce Website <br /> Development
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
                                Elite E-Commerce Solutions: Empowering Your Business with Cutting-Edge Digital Strategies
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                At Corecentrix Business Solutions, our E-Commerce Solutions are crafted to transform your digital storefront into a powerhouse of business growth and customer engagement. Leveraging our extensive expertise in e-commerce development, we design and implement tailored solutions that are both aesthetically pleasing and functionally robust. Our approach ensures a seamless, user-centric experience that enhances conversion rates, optimizes SEO performance, and solidifies your online presence. From intuitive online shops to complex sales platforms, we build e-commerce sites that not only captivate your audience but also drive measurable success through high-performance technology, security, and scalability
                            </p>
                            <div className="flex justify-center ">
                                <Link href={`/Contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                    Connect Now
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --------------------------------  { Section 3 }  ------------------------------------------ */}

                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                One-Time E-Commerce Solution
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Comprehensive E-Commerce Setup: Your All-In-One, Hassle-Free Online Store Solution
                                Our One-Time E-Commerce Solution provides businesses with a fully customized e-commerce platform designed for immediate impact and long-term success. We manage every phase of your project, from initial concept through to final deployment, ensuring your site is fast, secure, and user-friendly. Ideal for businesses seeking a premium online presence without ongoing development concerns, this service delivers a fully-functional, high-quality e-commerce site in a single, streamlined package.
                            </p>
                            <div className="flex justify-center">
                                <Link href={`/Contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                    Learn More
                                </button>
                                </Link>
                            </div>
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
                        Our Core SEO Services
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
                            Why Choose Us: The Unmatched Benefits of Our E-Commerce Solutions
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                Partnering with Corecentrix Business Solutions means investing in an e-commerce platform that delivers excellence in design, functionality, and performance. Our expert team is dedicated to crafting custom solutions that not only meet but exceed your business needs. From SEO optimization and responsive design to advanced security and ongoing support, we ensure your e-commerce site stands out and drives meaningful results.
                                </p>

                            </div>
                            <Link href={`/Contact`}><button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
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
                <ServiceForm/>
                <BusinessOperations />
            </div>
        </>
    );
};

export default page;
