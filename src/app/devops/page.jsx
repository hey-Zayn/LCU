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
            title: "DevOps Strategy & Consulting",
            dis: "Our experts help design and implement comprehensive DevOps strategies tailored to your organization's needs, ensuring seamless integration and continuous improvement.",
        },
        {
            title: "CI/CD Pipeline Implementation",
            dis: "Build robust continuous integration and delivery pipelines to accelerate software releases while maintaining quality and reliability.",
        },
        {
            title: "Infrastructure as Code (IaC)",
            dis: "Automate and manage your infrastructure using code for consistent, repeatable, and version-controlled deployments.",
        },
        {
            title: "Containerization & Orchestration",
            dis: "Implement container solutions with Docker and Kubernetes for scalable, portable, and efficient application deployment.",
        },
        {
            title: "Cloud Migration & Optimization",
            dis: "Seamlessly migrate to cloud platforms and optimize your cloud infrastructure for cost-efficiency and performance.",
        },
        {
            title: "Monitoring & Observability",
            dis: "Implement comprehensive monitoring solutions to gain real-time insights into system performance and reliability.",
        },
        {
            title: "Security & Compliance Automation",
            dis: "Integrate security into your DevOps processes with automated compliance checks and vulnerability scanning.",
        },
        {
            title: "Site Reliability Engineering",
            dis: "Build and maintain scalable, reliable systems with SRE practices that balance feature development and system stability.",
        },
    ];


    const FAQS = [
        {
            title: "What are the benefits of adopting DevOps?",
            dis: "DevOps enables faster deployments, improved collaboration, higher quality software, and more reliable systems through automation and continuous practices.",
        },
        {
            title: "How long does it take to implement DevOps?",
            dis: "Implementation timelines vary, but most organizations see significant improvements within 3-6 months of starting their DevOps transformation.",
        },
        {
            title: "Do we need to be in the cloud to use DevOps?",
            dis: "While cloud platforms enhance DevOps capabilities, the principles and practices can be applied to on-premises and hybrid environments as well.",
        },
        {
            title: "How do you ensure security in DevOps?",
            dis: "We implement DevSecOps practices, integrating security throughout the development lifecycle with automated testing and compliance checks.",
        },
        {
            title: "What ongoing support do you provide?",
            dis: "We offer continuous optimization, training, and support to ensure your DevOps practices evolve with your business needs.",
        },
    ];


    const packages = [
        {
            name: "Basic DevOps Setup",
            features: [
                { title: "Initial Assessment", detail: "Comprehensive analysis of current processes and infrastructure" },
                {
                    title: "CI/CD Foundation",
                    detail: "Basic continuous integration and delivery pipeline setup",
                },
                { title: "Version Control", detail: "Implementation of Git-based version control system" },
                { title: "Basic Monitoring", detail: "Essential system performance monitoring setup" },
                { title: "Documentation", detail: "Technical documentation and user guides" },
            ],
            featured: false,
        },
        {
            name: "Advanced DevOps Solutions",
            features: [
                { title: "Custom Pipeline Development", detail: "Tailored CI/CD pipelines for specific business needs" },
                {
                    title: "Infrastructure Automation",
                    detail: "Implementation of Infrastructure as Code (IaC) solutions",
                },
                { title: "Container Orchestration", detail: "Kubernetes setup and optimization" },
                { title: "Cloud Integration", detail: "Seamless integration with major cloud platforms" },
                { title: "Quarterly Optimization", detail: "Regular system performance reviews and improvements" },
            ],
            featured: false,
        },
        {
            name: "Enterprise DevOps Platform",
            features: [
                { title: "End-to-End Solution", detail: "Comprehensive DevOps implementation across all business units" },
                {
                    title: "Custom Automation Tools",
                    detail: "Development of specialized DevOps tools for various business functions",
                },
                { title: "24/7 Monitoring", detail: "Continuous performance tracking and alert systems" },
                { title: "Security Compliance", detail: "Enterprise-grade security and data protection measures" },
                { title: "Scalable Infrastructure", detail: "Cloud-based solutions for growing business needs" },
                {
                    title: "Strategic DevOps Planning",
                    detail: "Ongoing DevOps strategy development and optimization",
                },
            ],
            featured: true,
        },
        {
            name: "Innovation Package",
            features: [
                { title: "Cutting-Edge Technologies", detail: "Implementation of latest DevOps tools and techniques" },
                {
                    title: "Real-time Analytics",
                    detail: "Instant insights and decision-making support systems",
                },
                { title: "AI-Powered Automation", detail: "Advanced process automation using AI/ML" },
                { title: "Knowledge Management", detail: "AI-driven internal documentation and information systems" },
                { title: "Executive Insights", detail: "Strategic reports and DevOps-driven business recommendations" },
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
                            DevOps <br/> Solutions
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
                                DevOps Solutions - Accelerate Your Digital Transformation
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Streamline Your Development and Operations with Cutting-Edge DevOps Practices
                                Our DevOps services empower organizations to achieve faster delivery cycles, improved collaboration, and enhanced reliability. From continuous integration and deployment to infrastructure as code, we provide comprehensive DevOps strategies that drive efficiency, scalability, and innovation across your software development lifecycle.
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
                                Why Choose Our DevOps Solutions?
                            </h1>
                            <p className=" leading-relaxed mb-4">
                                Accelerate your software delivery with our comprehensive DevOps services. Here's what we provide:
                            </p>
                            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                                <li className="text-white/80 text-base">
                                    Continuous Integration & Deployment - Automate your build and release processes
                                </li>
                                <li className="text-white/80 text-base">
                                    Infrastructure as Code - Manage and provision infrastructure through code
                                </li>
                                <li className="text-white/80 text-base">
                                    Monitoring & Logging - Gain real-time insights into your systems
                                </li>
                                <li className="text-white/80 text-base">
                                    Containerization & Orchestration - Implement Docker and Kubernetes solutions
                                </li>
                                <li className="text-white/80 text-base">
                                    Security Automation - Integrate security throughout your DevOps pipeline
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
                                Our DevOps Implementation Process
                            </h1>
                            <div>
                                <p className="mb-1 leading-relaxed">
                                    We follow a structured approach to implement DevOps best practices:

                                    Assessment & Strategy – Evaluate your current infrastructure and define DevOps goals

                                    CI/CD Pipeline Setup – Implement automated build, test, and deployment workflows

                                    Infrastructure as Code – Automate infrastructure provisioning and management

                                    Monitoring & Logging – Establish comprehensive system monitoring and centralized logging

                                    Security Integration – Embed security practices throughout the development lifecycle

                                    Continuous Improvement – Optimize processes and tools for ongoing efficiency
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
