"use client";
import React, { useEffect, useRef } from "react";
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

// SEO Optimized Keywords
const SEO_KEYWORDS = [
  "Paid Media Advertising",
  "PPC Management Services",
  "Google Ads Agency",
  "Social Media Advertising",
  "Digital Marketing Agency",
  "Online Advertising Services",
  "Display Advertising",
  "Retargeting Campaigns",
  "Native Advertising Solutions",
  "YouTube Video Ads",
  "Facebook Ads",
  "Instagram Ads",
  "LinkedIn Ads",
  "ROI Driven Marketing",
  "Performance Marketing",
  "Ad Campaign Optimization",
  "Lead Generation",
  "Increase Website Traffic",
  "Conversion Rate Optimization",
  "Forward Sols"
].join(", ");

const DOMAIN = "https://www.forwardsols.com/";

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

  // SEO Optimized Paid Media Services Content
  const PAID_MEDIA_SERVICES = [
    {
      title: "Google Ads Management – Maximize Your PPC ROI",
      dis: "Drive targeted traffic and boost conversions with our expert Google Ads management services. At Forward Sols, we leverage advanced keyword research, negative keyword filtering, and compelling ad copy to ensure your business appears at the top of search results. Our PPC specialists continuously optimize your campaigns for lower cost-per-click (CPC) and higher return on ad spend (ROAS), helping you achieve measurable business growth.",
    },
    {
      title: "Social Media Advertising (Facebook, Instagram, LinkedIn)",
      dis: "Expand your brand reach and engage your ideal audience with high-impact social media advertising. Our digital marketing experts create visually stunning ads and laser-focused audience targeting on Facebook, Instagram, and LinkedIn. We use A/B testing and real-time analytics to maximize engagement, drive qualified leads, and increase your social ROI.",
    },
    {
      title: "Display & Banner Advertising",
      dis: "Enhance your online visibility with display and banner advertising across premium websites and apps. Our creative team designs eye-catching banners that capture attention and drive clicks. Using advanced targeting and retargeting strategies, we ensure your ads reach users most likely to convert, resulting in higher click-through rates and brand awareness.",
    },
    {
      title: "YouTube & Video Advertising",
      dis: "Tell your brand story and boost engagement with YouTube and video advertising. We produce compelling video ads and target them to relevant audiences based on interests, demographics, and behaviors. Our video marketing campaigns consistently deliver higher view rates, increased brand recall, and improved conversion rates.",
    },
    {
      title: "Retargeting & Remarketing Campaigns",
      dis: "Re-engage website visitors and nurture leads with strategic retargeting campaigns. Our remarketing solutions display personalized ads to users who have previously interacted with your site, increasing the likelihood of conversion by up to 70%. Stay top-of-mind and recover lost sales with Forward Sols’ data-driven retargeting.",
    },
    {
      title: "Native Advertising Solutions",
      dis: "Seamlessly integrate your brand message with native advertising on top news sites and blogs. Our native ads blend naturally with editorial content, driving higher engagement and trust. Experience up to 53% more views and stronger audience connections with our native advertising expertise.",
    },
  ];

  // SEO Optimized FAQs
  const FAQS = [
    {
      title: "What is Paid Media Advertising and How Can It Benefit My Business?",
      dis: "Paid media advertising is a digital marketing strategy where businesses pay to display ads on platforms like Google, Facebook, Instagram, and LinkedIn. It helps you reach targeted audiences, increase website traffic, generate qualified leads, and achieve faster ROI compared to organic methods. At Forward Sols, our paid media experts ensure your ad spend delivers maximum results.",
    },
    {
      title: "Why Choose Forward Sols for PPC and Paid Media Management?",
      dis: "Forward Sols is a leading digital marketing agency specializing in ROI-driven paid media campaigns. Our certified PPC managers use data-driven strategies, advanced analytics, and continuous optimization to lower your cost-per-acquisition (CPA) and maximize your return on investment. We offer transparent reporting and personalized service for every client.",
    },
    {
      title: "How Do You Track and Optimize Paid Media Campaigns?",
      dis: "We use industry-leading tools like Google Analytics, Facebook Pixel, and custom dashboards to monitor campaign performance in real time. Our team analyzes key metrics such as click-through rate (CTR), conversion rate, and cost per lead, making data-backed adjustments to improve results and ensure your marketing budget is spent efficiently.",
    },
    {
      title: "What Types of Businesses Can Benefit from Paid Media Services?",
      dis: "Paid media advertising is effective for businesses of all sizes and industries, including eCommerce, B2B, SaaS, healthcare, and local services. Whether you want to increase online sales, generate leads, or build brand awareness, Forward Sols customizes paid media strategies to meet your unique goals.",
    },
  ];

  // SEO Optimized Packages
  const packages = [
    {
      name: "Starter PPC Package",
      features: [
        { title: "Platform Selection", detail: "1 major ad platform (Google or Facebook)" },
        { title: "Campaign Setup", detail: "Basic campaign structure & ad group creation" },
        { title: "Ad Creation", detail: "3 custom ad creatives" },
        { title: "Targeting", detail: "Standard demographic & interest targeting" },
        { title: "Reporting", detail: "Monthly performance report" },
        { title: "Optimization", detail: "Bi-weekly campaign review" },
      ],
      featured: false,
    },
    {
      name: "Growth Paid Media Package",
      features: [
        { title: "Platform Selection", detail: "2 ad platforms (Google, Facebook, Instagram, LinkedIn)" },
        { title: "Campaign Setup", detail: "Advanced campaign structure & split testing" },
        { title: "Ad Creation", detail: "5 ad creatives per platform" },
        { title: "Targeting", detail: "Advanced audience segmentation" },
        { title: "Reporting", detail: "Weekly performance reports" },
        { title: "Optimization", detail: "Weekly optimization & A/B testing" },
      ],
      featured: false,
    },
    {
      name: "Premium Performance Package",
      features: [
        { title: "Platform Selection", detail: "Up to 3 ad platforms" },
        { title: "Campaign Setup", detail: "Multi-channel strategy & funnel mapping" },
        { title: "Ad Creation", detail: "8+ ad creatives per campaign" },
        { title: "Targeting", detail: "Custom audience & lookalike targeting" },
        { title: "Reporting", detail: "Real-time dashboard access" },
        { title: "Optimization", detail: "Daily monitoring & optimization" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Digital Marketing Package",
      features: [
        { title: "Platform Selection", detail: "Full multi-platform integration" },
        { title: "Campaign Setup", detail: "Omni-channel strategy & automation" },
        { title: "Ad Creation", detail: "Unlimited ad variations" },
        { title: "Targeting", detail: "AI-powered targeting & predictive analytics" },
        { title: "Reporting", detail: "Custom analytics & executive insights" },
        { title: "Optimization", detail: "24/7 campaign management" },
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Paid Media Advertising Services | PPC Management & Digital Marketing Agency - Forward Sols</title>
        <meta
          name="description"
          content="Boost your business growth with Forward Sols' ROI-driven Paid Media Advertising services. Expert PPC management, Google Ads, Social Media Ads, Display, Retargeting, and more. Increase leads, sales, and brand visibility with our digital marketing agency."
        />
        <meta
          name="keywords"
          content={SEO_KEYWORDS}
        />
        <meta property="og:title" content="Paid Media Advertising Services | PPC Management & Digital Marketing Agency - Forward Sols" />
        <meta property="og:description" content="Forward Sols offers expert Paid Media Advertising, PPC management, Google Ads, Social Media Ads, and more. Drive traffic, leads, and ROI for your business." />
        <meta property="og:url" content={`${DOMAIN}paid-media-advertisement`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${DOMAIN}images/paid-media-og.jpg`} />
        <link rel="canonical" href={`${DOMAIN}paid-media-advertisement`} />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- SEO Optimized Hero Section ----------------------------- */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-7xl max-sm:text-4xl font-bold z-10"
            >
              Paid Media Advertising Services
            </h1>
            {/* <p className="text-white text-center text-xl max-w-2xl mt-6 z-10">
              Accelerate your business growth with Forward Sols, the leading digital marketing agency for ROI-focused Paid Media Advertising, PPC management, and online ad campaigns. Get more leads, sales, and brand visibility with our expert team.
            </p> */}
          </div>
        </div>

        {/* ----------------------------- SEO Optimized Section 2 ----------------------------- */}
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white" >
                Unlock Explosive ROI with Expert Paid Media Advertising
              </h2>
              <p className="mb-8 leading-relaxed" 
              >
                Forward Sols delivers industry-leading paid media advertising and PPC management services designed to maximize your digital marketing ROI. Our certified experts use advanced targeting, conversion tracking, and continuous optimization to ensure every ad dollar drives measurable results. Experience up to 200% ROI growth, 85% higher click-through rates, and a 60% reduction in customer acquisition costs with our proven strategies.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button
                    
                    className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Get a Free Paid Media Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- SEO Optimized Section 3 ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Don’t Let Your Ad Budget Go to Waste – Optimize Every Click
              </h2>
              <p className="mb-8 leading-relaxed">
                Every click is an opportunity. At Forward Sols, our paid media specialists ensure your ad spend delivers maximum value. Through precision targeting, real-time analytics, and ongoing campaign optimization, we convert clicks into high-quality leads and sales. Our clients see an average 30% increase in conversion rates and up to 40% reduction in wasted ad spend. Partner with us and make every click count!
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Learn More About Paid Media
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

        {/* ----------------------------- SEO Optimized Paid Media Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Paid Media Advertising Services
          </h2>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {PAID_MEDIA_SERVICES.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- SEO Optimized Strategic Ad Placement Section ----------------------------- */}
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
                Boost Your Business with Strategic Ad Placements
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  Strategic ad placements are essential for maximizing your business potential. At Forward Sols, we use data-driven insights and advanced ad placement techniques to ensure your brand appears in front of the right audience, at the right time, and on the most effective platforms. Our approach delivers a 35% higher click-through rate and up to 50% more conversions, driving measurable business growth.
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- SEO Optimized Packages Section ----------------------------- */}
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

        {/* ----------------------------- SEO Optimized FAQs Section ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
            Paid Media Advertising FAQs
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
              {FAQS.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`}>
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
