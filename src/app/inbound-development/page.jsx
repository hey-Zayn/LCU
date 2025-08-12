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
    title: "Inbound Marketing Services",
    dis: "Boost your business growth with our inbound marketing services at https://www.forwardsols.com/. We specialize in high-converting content marketing, lead generation, and SEO strategies designed to increase organic traffic and drive qualified leads to your website.",
  },
  {
    title: "SEO Optimization & Content Strategy",
    dis: "Rank higher on Google with our proven SEO optimization and content strategy. We use high-volume, low-competition keywords to ensure your business stands out in search results and attracts your ideal customers.",
  },
  {
    title: "Lead Generation & Conversion Funnels",
    dis: "Maximize your ROI with advanced lead generation and conversion funnel optimization. Our data-driven approach nurtures prospects and turns website visitors into loyal customers.",
  },
  {
    title: "Marketing Automation Solutions",
    dis: "Automate your marketing with CRM integration, email workflows, and personalized customer journeys. Save time and scale your business with our marketing automation solutions.",
  },
  {
    title: "Social Media Management",
    dis: "Grow your brand with expert social media management. We create engaging content, manage your online reputation, and drive targeted traffic from platforms like Facebook, Instagram, and LinkedIn.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    dis: "Increase your website conversions with A/B testing, UX improvements, and persuasive calls-to-action. Our CRO experts help you get more sales from your existing traffic.",
  },
  {
    title: "Email Marketing Campaigns",
    dis: "Engage your audience with personalized email marketing campaigns. We design, write, and optimize emails that nurture leads and boost customer retention.",
  },
  {
    title: "Analytics & Performance Tracking",
    dis: "Track your inbound marketing success with advanced analytics and reporting. We provide actionable insights to help you make data-driven decisions and improve your ROI.",
  },
];

const FAQS = [
  {
    title: "What is inbound marketing and why is it important?",
    dis: "Inbound marketing is a digital marketing strategy focused on attracting potential customers through valuable content, SEO, and personalized experiences. At https://www.forwardsols.com/, we help businesses generate high-quality leads and increase online visibility using proven inbound techniques.",
  },
  {
    title: "How can SEO optimization help my business grow?",
    dis: "SEO optimization increases your website's visibility on search engines, driving organic traffic and qualified leads. Our team uses high-volume, low-difficulty keywords to help your business rank higher and reach more customers.",
  },
  {
    title: "What results can I expect from inbound marketing services?",
    dis: "You can expect increased website traffic, higher conversion rates, and improved brand authority. Our inbound marketing services are designed to deliver measurable results and long-term business growth.",
  },
  {
    title: "How long does it take to see results from inbound marketing?",
    dis: "Most clients see noticeable improvements in 3-6 months, with significant growth over 6-12 months. Consistent implementation of SEO, content marketing, and lead generation strategies is key to long-term success.",
  },
];

const PACKAGES = [
  {
    name: "Starter SEO & Inbound Package",
    features: [
      { title: "Keyword Research & Strategy", detail: "Target high-volume, low-competition keywords for fast ranking." },
      { title: "Content Creation (2/month)", detail: "SEO-optimized blog posts to attract organic traffic." },
      { title: "Basic On-Page SEO", detail: "Meta tags, headings, and internal linking optimization." },
      { title: "Performance Analytics", detail: "Monthly reporting on traffic and keyword rankings." },
    ],
    featured: false,
  },
  {
    name: "Growth Inbound Marketing Package",
    features: [
      { title: "Advanced Keyword Targeting", detail: "Comprehensive keyword mapping for all service pages." },
      { title: "Content Creation (4/month)", detail: "In-depth articles, guides, and landing pages." },
      { title: "Lead Generation Setup", detail: "Custom forms and lead magnets to capture qualified leads." },
      { title: "Social Media Management", detail: "Content scheduling and engagement on top platforms." },
      { title: "Email Marketing Automation", detail: "Automated email sequences for nurturing leads." },
    ],
    featured: false,
  },
  {
    name: "Premium SEO & Automation Package",
    features: [
      { title: "Full SEO Audit & Implementation", detail: "Technical SEO, site speed, and mobile optimization." },
      { title: "Content Creation (8/month)", detail: "Authority-building content and multimedia assets." },
      { title: "Advanced Conversion Optimization", detail: "A/B testing and UX improvements for higher conversions." },
      { title: "CRM & Marketing Automation", detail: "Integration with top CRM and marketing tools." },
      { title: "Comprehensive Analytics", detail: "Custom dashboards and detailed performance tracking." },
    ],
    featured: true,
  },
  {
    name: "Enterprise Inbound Growth Package",
    features: [
      { title: "Custom SEO & Inbound Strategy", detail: "Tailored for large businesses and multiple locations." },
      { title: "Unlimited Content Creation", detail: "Ongoing content for blogs, social, and email." },
      { title: "Full Funnel Automation", detail: "End-to-end automation for lead nurturing and sales." },
      { title: "Account-Based Marketing", detail: "Targeted campaigns for high-value clients." },
      { title: "Dedicated Account Manager", detail: "Personalized support and monthly strategy calls." },
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
        <title>Inbound Marketing Services | SEO Optimization & Lead Generation | Forward Solutions</title>
        <meta
          name="description"
          content="Boost your business with high-converting inbound marketing services, SEO optimization, and lead generation from Forward Solutions. Visit https://www.forwardsols.com/ for expert digital marketing solutions."
        />
        <meta
          name="keywords"
          content="inbound marketing, SEO optimization, lead generation, content marketing, marketing automation, conversion rate optimization, social media management, email marketing, digital marketing agency, https://www.forwardsols.com/"
        />
        <link rel="canonical" href="https://www.forwardsols.com/inbound-development" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- Hero Section ----------------------------- */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Inbound Marketing
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: Value Proposition ----------------------------- */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Accelerate Your Business Growth with Proven Inbound Marketing
              </h1>
              <p className="mb-8 leading-relaxed">
                At Forward Solutions, we help you dominate search results and attract qualified leads with our expert inbound marketing and SEO optimization services. Our strategies are built on high-volume, low-competition keywords to ensure your business gets found by the right audience. Start converting more visitors into customers today!
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get a Free SEO Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Benefits ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Forward Solutions for Inbound Marketing?
              </h1>
              <p className="mb-8 leading-relaxed">
                We go beyond basic SEO. Our inbound marketing services combine advanced keyword research, content marketing, and conversion optimization to deliver measurable results. Whether you want to increase organic traffic, generate more leads, or improve your website's conversion rate, our team has the expertise to help you succeed.
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
            Top Inbound Marketing & SEO Services
          </h1>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {SEO_SERVICES.map((card, index) => (
                  <div
                    key={index}
                    className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer"
                  >
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 5: When to Invest ----------------------------- */}
        <section id="section2-img-left" className="w-full text-white body-font">
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 max-sm:py-10 md:flex-row flex-col items-center">
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
                Is Inbound Marketing Right for Your Business?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your business wants to increase online visibility, attract qualified leads, and convert more visitors into customers, inbound marketing is the answer. AtForward Solutions, we create custom inbound strategies using high-traffic, low-difficulty keywords to help you achieve sustainable growth and measurable results.
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
                  className={`rounded-lg overflow-hidden shadow-lg ${
                    pkg.featured
                      ? "border border-[#4F1DD7] transform md:-translate-y-4"
                      : "border border-[#D9345E]"
                  }`}
                >
                  <div
                    className={`p-6 ${
                      pkg.featured
                        ? "bg-[#4F1DD7] text-white"
                        : "bg-[#D9345E] text-white"
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
                          <h3 className="font-medium text-white">
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
        <section className="w-full h-full px-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Inbound Marketing FAQs
          </h1>
          <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-24 md:flex-row flex-col items-center">
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
              {FAQS.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-white md:text-2xl lg:text-2xl hover:no-underline hover:text-pink-800 cursor-pointer">
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
