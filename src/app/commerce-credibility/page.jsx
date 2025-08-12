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

const SEO_SERVICES = [
  {
    title: "E-commerce Trust Building",
    dis: "Boost your online store’s credibility with proven e-commerce trust-building strategies, including secure payment integrations, SSL certificates, and transparent business policies. At https://www.forwardsols.com/, we help you earn customer trust and increase conversion rates.",
  },
  {
    title: "Online Reputation Management",
    dis: "Enhance your brand’s reputation with proactive review management, reputation monitoring, and customer feedback response. Our experts ensure your business stands out as a trusted leader in the digital marketplace.",
  },
  {
    title: "Verified Customer Reviews",
    dis: "Showcase authentic, verified customer reviews to build social proof and drive more sales. We implement review collection and display solutions that increase buyer confidence and SEO rankings.",
  },
  {
    title: "Trust Badges & Security Seals",
    dis: "Increase consumer confidence with trust badges, security seals, and third-party verifications. Our team integrates these elements seamlessly to reduce cart abandonment and boost your e-commerce credibility.",
  },
  {
    title: "Transparent Business Practices",
    dis: "Communicate your business values, return policies, and data privacy practices clearly. Transparency is key to building long-term customer loyalty and trust in your online business.",
  },
  {
    title: "Social Proof & Case Studies",
    dis: "Leverage powerful case studies, testimonials, and user-generated content to demonstrate your brand’s reliability and expertise. Social proof is a critical SEO factor for e-commerce success.",
  },
  {
    title: "Industry Authority Content",
    dis: "Position your brand as an industry authority with expert content, thought leadership articles, and strategic partnerships. Authority content drives organic traffic and builds lasting credibility.",
  },
  {
    title: "Crisis & Reputation Recovery",
    dis: "Protect your brand with crisis management and reputation recovery strategies. We help you maintain trust and credibility even during challenging times.",
  },
  {
    title: "Data Privacy & Security Compliance",
    dis: "Ensure your e-commerce site is compliant with the latest data privacy and security standards. We help you communicate your commitment to customer data protection, building trust and SEO value.",
  },
];

const FAQS = [
  {
    title: "What is E-commerce Credibility and Why Does It Matter?",
    dis: "E-commerce credibility is the trust your online store inspires in potential customers. It’s essential for increasing conversion rates, reducing bounce rates, and improving your SEO rankings. At https://www.forwardsols.com/, we specialize in building trust for e-commerce brands.",
  },
  {
    title: "How Can I Improve My Online Store’s Trustworthiness?",
    dis: "You can improve your store’s trustworthiness by displaying verified reviews, using trust badges, offering secure payment options, and maintaining transparent business practices. Our team at Forward Solutions implements these strategies for maximum impact.",
  },
  {
    title: "How Long Does It Take to See Results from Credibility Optimization?",
    dis: "Most businesses see measurable improvements in customer trust, engagement, and SEO performance within 2-3 months of implementing our credibility solutions.",
  },
  {
    title: "Why Choose Forward Solutions for E-commerce Credibility?",
    dis: "Forward Solutions (https://www.forwardsols.com/) is a leader in e-commerce credibility and SEO optimization. Our proven strategies help you build trust, increase sales, and achieve long-term online success.",
  },
];

const PACKAGES = [
  {
    name: "Essential Trust Package",
    features: [
      { title: "E-commerce Site Audit", detail: "Comprehensive trust and SEO assessment" },
      { title: "Basic Review Integration", detail: "Verified reviews on 2 platforms" },
      { title: "Trust Badge Setup", detail: "SSL, payment, and security badges" },
      { title: "Transparency Policy", detail: "Clear return and privacy policies" },
      { title: "Monthly Trust Report", detail: "Track improvements in credibility" },
    ],
    featured: false,
  },
  {
    name: "Growth Credibility Package",
    features: [
      { title: "Advanced Reputation Management", detail: "Multi-platform review monitoring" },
      { title: "Enhanced Trust Signals", detail: "Custom trust badges and seals" },
      { title: "Social Proof Integration", detail: "Testimonials and case studies" },
      { title: "Authority Content Creation", detail: "Thought leadership articles" },
      { title: "SEO Optimization", detail: "On-page and technical SEO for trust" },
    ],
    featured: false,
  },
  {
    name: "Premium Trust Accelerator",
    features: [
      { title: "Full-Spectrum Credibility Audit", detail: "Technical, social, and brand analysis" },
      { title: "Comprehensive Review Management", detail: "Setup, monitoring, and response" },
      { title: "Custom Security Solutions", detail: "Advanced data privacy and compliance" },
      { title: "Omnichannel Social Proof", detail: "User-generated content and influencer reviews" },
      { title: "Crisis Management Plan", detail: "Reputation protection and recovery" },
    ],
    featured: true,
  },
  {
    name: "Enterprise Trust Suite",
    features: [
      { title: "Global Trust Strategy", detail: "International compliance and trust signals" },
      { title: "Custom Authority Content", detail: "Industry leadership positioning" },
      { title: "Integrated Social Proof", detail: "Cross-platform testimonials and reviews" },
      { title: "Full Transparency Initiative", detail: "Comprehensive business disclosure" },
      { title: "Dedicated Account Manager", detail: "Personalized support and reporting" },
    ],
    featured: false,
  },
];

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

  return (
    <>
      <Head>
        <title>Commerce Credibility Solutions | Build E-commerce Trust & SEO | Forward Solutions</title>
        <meta
          name="description"
          content="Boost your e-commerce credibility and SEO with Forward Solutions. We help online businesses build trust, increase conversions, and rank higher on Google. Visit https://www.forwardsols.com/ for expert credibility optimization."
        />
        <meta
          name="keywords"
          content="e-commerce credibility, build trust online, e-commerce SEO, online reputation management, trust badges, verified reviews, secure e-commerce, Forward Solutions, https://www.forwardsols.com/"
        />
        <meta property="og:title" content="Commerce Credibility Solutions | Forward Solutions" />
        <meta property="og:description" content="Enhance your e-commerce trust, reputation, and SEO with Forward Solutions. Proven strategies for online business growth." />
        <meta property="og:url" content="https://www.forwardsols.com/commerce-credibility" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.forwardsols.com/commerce-credibility" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- Hero Section ----------------------------- */}
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
              E-commerce Credibility
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: About ----------------------------- */}
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
                Build E-commerce Trust & Boost Your SEO Rankings
              </h1>
              <p className="mb-8 leading-relaxed">
                At <a href="https://www.forwardsols.com/" className="">Forward Solutions</a>, we specialize in e-commerce credibility optimization. Our proven strategies help your online business build trust, increase conversion rates, and achieve higher search engine rankings. From verified reviews and trust badges to transparent business practices and secure payment integrations, we provide everything you need to stand out in the digital marketplace. Partner with us to transform your online reputation and drive sustainable growth.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Call to Action ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Ready to Build Unshakable E-commerce Credibility?
              </h1>
              <p className="mb-8 leading-relaxed">
                Is your online store struggling to convert visitors into loyal customers? Our e-commerce trust solutions are designed to help you build credibility, improve SEO, and increase sales. Let Forward Solutions show you how to leverage verified reviews, trust badges, and transparent business practices for maximum impact.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
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

        {/* ----------------------------- Section 4: Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our E-commerce Credibility & SEO Services
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEO_SERVICES?.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 5: When to Act ----------------------------- */}
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
                When Should You Optimize Your E-commerce Credibility?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your online store faces high bounce rates, low conversion rates, or negative reviews, it’s time to invest in e-commerce credibility optimization. At <a href="https://www.forwardsols.com/" className="">Forward Solutions</a>, we help you build trust, improve SEO, and turn visitors into loyal customers. Don’t let credibility issues hold your business back—take action today!
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

        {/* ----------------------------- Section 6: Packages ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PACKAGES.map((pkg, index) => (
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

        {/* ----------------------------- Section 7: FAQs ----------------------------- */}
        <section className="w-full h-fullpx-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
            FAQs: E-commerce Credibility & SEO
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
