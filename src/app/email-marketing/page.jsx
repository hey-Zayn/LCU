"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
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
                    start: "top 60%",
                    toggleActions: "play none none none",
                },
            });
        },
        { scope: sectionRef }
    );

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

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

        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            tl.kill();
        };
    }, []);

    // SEO-optimized service features with high-volume, low-difficulty keywords
    const emailMarketingServices = [
        {
            title: "Targeted Email Marketing Campaigns",
            dis: "Boost your ROI with our targeted email marketing campaigns. We segment your audience for maximum engagement, ensuring your message reaches the right inbox at the right time. Increase open rates and drive conversions with proven strategies.",
        },
        {
            title: "Automated Email Sequences",
            dis: "Save time and nurture leads with automated email sequences. Our experts design drip campaigns, welcome series, and re-engagement flows that keep your brand top-of-mind and move prospects through your sales funnel.",
        },
        {
            title: "High-Converting Email Copywriting",
            dis: "Our professional copywriters craft compelling subject lines and persuasive email content that increases click-through rates and drives sales. Stand out in crowded inboxes with conversion-focused messaging.",
        },
        {
            title: "Responsive Email Design",
            dis: "Impress your subscribers with mobile-friendly, visually stunning email templates. Our responsive email designs ensure your campaigns look perfect on every device, improving user experience and engagement.",
        },
        {
            title: "Email List Growth & Management",
            dis: "Grow your email list with ethical, GDPR-compliant strategies. We help you attract high-quality subscribers, manage segmentation, and maintain list hygiene for optimal deliverability and campaign performance.",
        },
        {
            title: "Advanced Email Analytics & Reporting",
            dis: "Track every metric that matters. Our advanced email analytics and reporting provide insights into open rates, click rates, conversions, and more—empowering you to make data-driven decisions and maximize your email marketing ROI.",
        },
        {
            title: "A/B Testing & Personalization",
            dis: "Increase engagement with A/B testing and personalized email content. We test subject lines, content, and CTAs to discover what resonates best with your audience, delivering tailored experiences that convert.",
        },
    ];

    return (
        <>
            <Head>
                <title>Email Marketing Services | Forward Solutions</title>
                <meta
                    name="description"
                    content="Boost your business growth with Forward Solutions' best-in-class email marketing services. Increase open rates, drive conversions, and maximize ROI with targeted campaigns, automation, and expert strategy. Contact us today!"
                />
                <meta
                    name="keywords"
                    content="email marketing, email marketing services, email marketing agency, email automation, email campaign management, email list growth, responsive email design, email copywriting, email marketing strategy, email marketing for business, best email marketing, high ROI email marketing, email marketing company, email marketing solutions, email marketing experts, Forward Solutions, https://www.forwardsols.com/"
                />
                <meta property="og:title" content="Email Marketing Services | Forward Solutions" />
                <meta
                    property="og:description"
                    content="Unlock business growth with Forward Solutions' expert email marketing services. Get more leads, sales, and customer engagement with our proven strategies."
                />
                <meta property="og:url" content="https://www.forwardsols.com/email-marketing" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.forwardsols.com/og-email-marketing.jpg" />
                <link rel="canonical" href="https://www.forwardsols.com/email-marketing" />
            </Head>
            <div ref={sectionRef} className="w-full h-full">
                {/* -----------------------------  { Hero Section }  ----------------------------------- */}
                <div className="w-full h-full">
                    <div
                        id="email-marketing-hero"
                        className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
                    >
                        <ParticlesBackground />
                        <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <h1
                            ref={mainHeading}
                            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
                        >
                            Email Marketing Services
                        </h1>
                        
                    </div>
                </div>

                {/* -----------------------------  { Why Email Marketing }  ----------------------------------- */}
                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 max-sm:py-10 md:flex-row flex-col items-center">
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
                            <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white" >
                                Why Choose Email Marketing for Your Business?
                            </h2>
                            <p className="mb-8 leading-relaxed" >
                                Email marketing remains the most cost-effective digital marketing channel, delivering an average ROI of <strong>4200%</strong>. At <strong>Forward Solutions</strong>, we help you harness the power of email to build relationships, nurture leads, and drive repeat sales. Our data-driven approach ensures your emails land in the inbox, not the spam folder, and inspire action every time.
                            </p>
                            <div className="flex justify-center">
                                <Link href="/Contact">
                                    <button
                                       
                                        className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300"
                                    >
                                        Get a Free Email Marketing Audit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* -----------------------------  { Email Marketing Solutions }  ----------------------------------- */}
                <section className="w-full text-white body-font">
                    <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
                            <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                                Our Email Marketing Solutions
                            </h2>
                            <p className="mb-8 leading-relaxed">
                                From <strong>email automation</strong> and <strong>list segmentation</strong> to <strong>responsive email design</strong> and <strong>advanced analytics</strong>, Forward Solutions offers a full suite of email marketing services tailored to your business goals. We help you increase open rates, boost click-throughs, and drive more revenue—whether you’re a startup or an established brand.
                            </p>
                            <div className="flex justify-center">
                                <Link href="/Contact">
                                    <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                                        Start Growing with Email
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

                {/* -----------------------------  { Core Services }  ----------------------------------- */}
                <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
                    <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
                        Email Marketing Services We Offer
                    </h2>
                    <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
                        <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                                {emailMarketingServices.map((service, index) => (
                                    <div
                                        key={index}
                                        className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                                    >
                                        <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-base font-medium">{service.dis}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* -----------------------------  { CTA & Form }  ----------------------------------- */}
                    <ServiceForm />
               

                <BusinessOperations />
            </div>
        </>
    );
};

export default page;
