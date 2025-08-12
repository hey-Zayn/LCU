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
    title: "Influencer Discovery & Vetting",
    dis: "Leverage our advanced influencer discovery tools to find top-performing influencers in your niche. We vet influencers for authentic engagement, audience demographics, and brand alignment to maximize your influencer marketing ROI.",
  },
  {
    title: "Strategic Influencer Campaigns",
    dis: "Our influencer marketing experts design data-driven campaigns tailored to your business goals. We focus on high-converting content, brand awareness, and measurable results across Instagram, YouTube, TikTok, and more.",
  },
  {
    title: "Content Creation & Amplification",
    dis: "Boost your brand visibility with creative influencer content. We manage content collaboration, optimization, and cross-platform amplification to ensure your message reaches the right audience.",
  },
  {
    title: "Performance Analytics & Reporting",
    dis: "Track influencer campaign success with real-time analytics. We provide transparent reporting on reach, engagement, conversions, and influencer ROI to help you scale your marketing efforts.",
  },
  {
    title: "Compliance & Brand Safety",
    dis: "Protect your brand with our compliance monitoring and crisis management. We ensure all influencer partnerships adhere to FTC guidelines and maintain your brand reputation online.",
  },
];

const FAQS = [
  {
    title: "What is Influencer Marketing and How Can It Grow My Business?",
    dis: "Influencer marketing is a powerful digital marketing strategy where brands collaborate with social media influencers to promote products or services. By leveraging trusted voices, you can increase brand awareness, drive targeted traffic, and boost conversions for your business.",
  },
  {
    title: "Why Choose ForwardSols for Influencer Marketing Services?",
    dis: "ForwardSols offers data-driven influencer marketing solutions with a focus on high-ROI campaigns, authentic influencer partnerships, and transparent analytics. Our team specializes in connecting brands with top influencers for maximum impact.",
  },
  {
    title: "How Do You Measure Influencer Marketing Success?",
    dis: "We use advanced analytics to track key metrics such as reach, engagement rate, website traffic, conversions, and ROI. Our detailed reports help you understand campaign performance and optimize future strategies.",
  },
  {
    title: "Which Social Platforms Do You Cover?",
    dis: "We run influencer campaigns across Instagram, YouTube, TikTok, Facebook, Twitter, and LinkedIn, ensuring your brand reaches the most relevant and engaged audiences.",
  },
];

const PACKAGES = [
  {
    name: "Starter Influencer Marketing Package",
    features: [
      { title: "Micro-Influencer Outreach", detail: "Connect with 5-10 micro-influencers in your industry for authentic brand promotion." },
      { title: "Single Platform Campaign", detail: "Targeted influencer campaign on your preferred social media platform." },
      { title: "Content Scheduling", detail: "Coordinated content creation and posting for maximum engagement." },
      { title: "Basic Analytics", detail: "Monthly performance reports with essential metrics." },
      { title: "Brand Safety Monitoring", detail: "Ongoing monitoring to protect your brand reputation." },
    ],
    featured: false,
  },
  {
    name: "Growth Influencer Marketing Package",
    features: [
      { title: "Multi-Tier Influencer Selection", detail: "Engage 10-20 influencers across micro, macro, and nano tiers." },
      { title: "Multi-Platform Strategy", detail: "Comprehensive campaigns across Instagram, TikTok, and YouTube." },
      { title: "Content Optimization", detail: "Expert guidance for high-performing influencer content." },
      { title: "Advanced Analytics", detail: "In-depth tracking of conversions, reach, and ROI." },
      { title: "Dedicated Account Manager", detail: "Personalized support for campaign coordination." },
    ],
    featured: true,
  },
  {
    name: "Enterprise Influencer Marketing Package",
    features: [
      { title: "Custom Influencer Network", detail: "Build a tailored influencer network for your brand." },
      { title: "Omni-Channel Campaigns", detail: "Execute campaigns across all major social platforms." },
      { title: "Professional Content Production", detail: "Access to professional photography and video services." },
      { title: "Real-Time Analytics Dashboard", detail: "Monitor campaign performance in real time." },
      { title: "Strategic Consulting", detail: "Ongoing strategy sessions for continuous growth." },
    ],
    featured: false,
  },
  {
    name: "Custom Influencer Solutions",
    features: [
      { title: "Bespoke Strategy Development", detail: "Fully customized influencer marketing strategy for your unique goals." },
      { title: "Relationship Management", detail: "End-to-end management of influencer partnerships." },
      { title: "Full-Service Content Production", detail: "Comprehensive content creation and distribution." },
      { title: "Custom Analytics & Reporting", detail: "Tailored reporting based on your KPIs." },
      { title: "24/7 Support", detail: "Round-the-clock support for campaign management." },
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
        <title>Influencer Marketing Services | ForwardSols - Top Influencer Campaigns for Brand Growth</title>
        <meta
          name="description"
          content="Boost your brand with ForwardSols' influencer marketing services. Connect with top influencers, increase brand awareness, drive sales, and achieve measurable ROI. Trusted influencer marketing agency for Instagram, YouTube, TikTok, and more."
        />
        <meta
          name="keywords"
          content="influencer marketing, influencer marketing agency, influencer marketing services, Instagram influencer marketing, TikTok influencer marketing, YouTube influencer campaigns, influencer outreach, influencer discovery, influencer campaign management, brand awareness, influencer analytics, influencer ROI, social media marketing, digital marketing, influencer partnerships, best influencer marketing company, influencer marketing for ecommerce, influencer marketing for startups, influencer marketing solutions, influencer marketing strategy"
        />
        <meta property="og:title" content="Influencer Marketing Services | ForwardSols" />
        <meta property="og:description" content="Grow your brand with high-ROI influencer marketing campaigns. ForwardSols connects you with top influencers for maximum reach and engagement." />
        <meta property="og:url" content="https://www.forwardsols.com/influencer-marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.forwardsols.com/og-influencer-marketing.jpg" />
        <link rel="canonical" href="https://www.forwardsols.com/influencer-marketing" />
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
              Influencer Marketing
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Influencer Marketing ----------------------------- */}
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Unlock High-ROI Influencer Marketing Campaigns
              </h2>
              <p className="mb-8 leading-relaxed">
                At ForwardSols, we help brands dominate their niche with strategic influencer marketing. Our expert team connects you with high-engagement influencers on Instagram, TikTok, and YouTube to drive targeted traffic, boost brand awareness, and increase sales. Experience measurable results with our data-driven influencer marketing solutions tailored for startups, ecommerce, and established brands.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get a Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Value Proposition ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Maximize Your Brand Reach with Top Influencers
              </h2>
              <p className="mb-8 leading-relaxed">
                Our influencer marketing agency specializes in building authentic partnerships that drive real engagement and conversions. We use advanced influencer discovery, campaign management, and analytics to ensure your brand message reaches the right audience at the right time.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Your Campaign
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

        {/* ----------------------------- Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Influencer Marketing Services We Offer
          </h2>
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
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- When to Use Influencer Marketing ----------------------------- */}
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
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 max-sm:mb-2 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Is Influencer Marketing Right for Your Brand?
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  If you want to increase brand awareness, drive targeted traffic, and boost sales, influencer marketing is your best strategy. ForwardSols helps you connect with the right influencers to create authentic, high-impact campaigns that deliver real business results. Stay ahead of your competition with our proven influencer marketing solutions.
                </p>
              </div>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Packages ----------------------------- */}
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
                          <h4 className="font-medium text-white">
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

        {/* ----------------------------- FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Influencer Marketing FAQs
          </h2>
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
