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

  // SEO-optimized keywords: lead nurturing, lead nurturing services, 360 lead nurture, lead conversion, marketing automation, b2b lead nurturing, sales funnel optimization, email nurturing, multi-channel lead nurturing, lead scoring, personalized lead nurturing, lead management, forwardsols, https://www.forwardsols.com/

  const SEOLeadNurtureServices = [
    {
      title: "360° Lead Nurturing Solutions",
      dis: "Boost your sales pipeline with our 360-degree lead nurturing services. We deliver personalized, data-driven strategies that engage prospects at every stage, increasing conversion rates and maximizing ROI for your business.",
    },
    {
      title: "Automated Email Lead Nurturing",
      dis: "Leverage high-converting email nurturing campaigns powered by advanced segmentation and behavioral triggers. Our automated workflows ensure your leads receive the right message at the right time, driving engagement and sales.",
    },
    {
      title: "Multi-Channel Lead Engagement",
      dis: "Reach your prospects everywhere with our multi-channel lead nurturing approach. We integrate email, social media, retargeting, and SMS to create a seamless customer journey and improve lead quality.",
    },
    {
      title: "Lead Scoring & Segmentation",
      dis: "Prioritize high-value leads with our intelligent lead scoring models. We segment your audience based on behavior, demographics, and intent, ensuring your sales team focuses on the most promising opportunities.",
    },
    {
      title: "Personalized Content for Lead Nurturing",
      dis: "Deliver tailored content that resonates with your audience. Our team creates personalized blog posts, case studies, and resources to nurture leads and move them through your sales funnel efficiently.",
    },
    {
      title: "Advanced Analytics & Reporting",
      dis: "Track every touchpoint with our robust analytics. We provide actionable insights and detailed reports to optimize your lead nurturing campaigns and maximize your marketing ROI.",
    },
    {
      title: "Sales & Marketing Alignment",
      dis: "Bridge the gap between sales and marketing with our integrated lead management solutions. We ensure seamless handoffs, consistent messaging, and accelerated sales cycles.",
    },
    {
      title: "Marketing Automation Setup",
      dis: "Streamline your lead nurturing with our expert marketing automation setup. We implement and optimize platforms like HubSpot, Marketo, and Mailchimp for scalable, effective campaigns.",
    },
    {
      title: "Continuous Optimization & A/B Testing",
      dis: "Stay ahead of the competition with ongoing optimization. We run A/B tests and refine your nurturing strategies to ensure the highest conversion rates and business growth.",
    },
  ];

  const SEOFAQs = [
    {
      title: "What is 360° lead nurturing and why is it important?",
      dis: "360-degree lead nurturing is a holistic approach that engages leads across all digital channels, including email, social media, and SMS. It ensures consistent, personalized communication, increasing lead conversion rates and customer retention for businesses.",
    },
    {
      title: "How can lead nurturing services improve my sales funnel?",
      dis: "Professional lead nurturing services help you build trust, educate prospects, and address their pain points. This results in higher-quality leads, shorter sales cycles, and increased revenue for your business.",
    },
    {
      title: "What makes Forwardsols' lead nurturing services unique?",
      dis: "At Forwardsols, we combine advanced marketing automation, data-driven segmentation, and personalized content to deliver industry-leading lead nurturing solutions. Our strategies are tailored to your business goals and target audience.",
    },
    {
      title: "How soon can I see results from 360° lead nurturing?",
      dis: "Most clients see measurable improvements in lead engagement and conversion rates within 1-3 months of implementing our 360° lead nurturing strategies. Results may vary based on your industry and sales cycle.",
    },
    {
      title: "Do you offer B2B lead nurturing solutions?",
      dis: "Yes, Forwardsols specializes in B2B lead nurturing, helping businesses generate qualified leads, nurture prospects, and accelerate sales growth through targeted, multi-channel campaigns.",
    },
  ];

  const packages = [
    {
      name: "Starter Lead Nurturing Package",
      features: [
        { title: "Lead Nurturing Strategy Setup", detail: "Custom workflow design and segmentation for your business" },
        { title: "Automated Email Campaigns", detail: "3 high-converting email sequences" },
        { title: "Basic Lead Scoring", detail: "Identify and prioritize your hottest leads" },
        { title: "Monthly Analytics Report", detail: "Track campaign performance and ROI" },
        { title: "Content Audit & Recommendations", detail: "Optimize your existing content for nurturing" },
        { title: "Marketing Automation Setup", detail: "Initial configuration of automation tools" },
      ],
      featured: false,
    },
    {
      name: "Growth Lead Nurturing Package",
      features: [
        { title: "Advanced Nurturing Strategy", detail: "Multi-channel nurturing across email, social, and SMS" },
        { title: "Behavioral Segmentation", detail: "Target leads based on actions and interests" },
        { title: "A/B Testing & Optimization", detail: "Continuous improvement for higher conversions" },
        { title: "Bi-Weekly Performance Reports", detail: "Detailed analytics and actionable insights" },
        { title: "Content Creation Support", detail: "5 custom nurturing assets" },
        { title: "Automation Platform Optimization", detail: "Advanced setup and workflow optimization" },
      ],
      featured: false,
    },
    {
      name: "Pro Lead Nurturing Package",
      features: [
        { title: "360° Lead Nurturing Strategy", detail: "Full-funnel nurturing across all digital channels" },
        { title: "Omni-Channel Campaigns", detail: "Integrated campaigns for maximum reach" },
        { title: "Predictive Lead Scoring", detail: "AI-driven lead prioritization" },
        { title: "Weekly Performance Reports", detail: "Real-time analytics and optimization" },
        { title: "Custom Content Development", detail: "10 tailored content pieces" },
        { title: "Sales & Marketing Alignment", detail: "Seamless collaboration for better results" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Lead Nurturing Package",
      features: [
        { title: "Enterprise-Scale Nurturing Strategy", detail: "Comprehensive strategy for large organizations" },
        { title: "Custom Campaign Development", detail: "Fully customized nurturing campaigns" },
        { title: "AI-Powered Analytics", detail: "Advanced insights and predictive modeling" },
        { title: "Real-Time Optimization", detail: "Continuous monitoring and campaign adjustment" },
        { title: "Dedicated Content Team", detail: "Ongoing content creation and optimization" },
        { title: "Dedicated Account Manager", detail: "Personalized support and strategy" },
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>360° Lead Nurturing Services | Forwardsols | Boost Lead Conversion & Sales</title>
        <meta name="description" content="Forwardsols offers 360-degree lead nurturing services to maximize your lead conversion, automate marketing, and accelerate sales. Get expert lead nurturing strategies, email campaigns, and multi-channel engagement for business growth. Visit https://www.forwardsols.com/ for the best lead nurturing solutions." />
        <meta name="keywords" content="lead nurturing, lead nurturing services, 360 lead nurture, lead conversion, marketing automation, b2b lead nurturing, sales funnel optimization, email nurturing, multi-channel lead nurturing, lead scoring, personalized lead nurturing, lead management, Forwardsols, https://www.forwardsols.com/" />
        <meta property="og:title" content="360° Lead Nurturing Services | Forwardsols" />
        <meta property="og:description" content="Maximize your lead conversion and sales with Forwardsols' 360-degree lead nurturing services. Expert strategies, automation, and multi-channel engagement for business growth." />
        <meta property="og:url" content="https://www.forwardsols.com/360-lead-nurture" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.forwardsols.com/360-lead-nurture" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ----------------------------- SEO Hero Section ----------------------------- */}
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
              360° Lead Nurturing Services
            </h1>
            {/* <p className="text-white text-center text-xl max-w-2xl mt-6 z-10">
              Accelerate your business growth with Forwardsols' industry-leading 360-degree lead nurturing solutions. Convert more leads, automate your marketing, and drive sales with our proven strategies.
            </p>
            <div className="mt-8 z-10">
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                  Get a Free Consultation
                </button>
              </Link>
            </div> */}
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Lead Nurturing ----------------------------- */}
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
                Why Choose Forwardsols for Lead Nurturing?
              </h2>
              <p className="mb-8 leading-relaxed">
                At <strong>Forwardsols</strong>, we specialize in <strong>360° lead nurturing services</strong> that help businesses convert more leads into loyal customers. Our expert team leverages <strong>marketing automation</strong>, <strong>personalized email campaigns</strong>, and <strong>multi-channel engagement</strong> to nurture prospects at every stage of the sales funnel. Experience higher conversion rates, improved lead quality, and measurable business growth with our data-driven approach.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Nurturing Leads
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Unlock the Power of 360° Lead Nurturing
              </h2>
              <p className="mb-8 leading-relaxed">
                Our <strong>360-degree lead nurturing</strong> approach ensures your prospects receive the right message at the right time, across every channel. With <strong>automated workflows</strong>, <strong>personalized content</strong>, and <strong>advanced analytics</strong>, we help you build trust, shorten sales cycles, and increase your revenue.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
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

        {/* ----------------------------- Core Services Section ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Lead Nurturing Services
          </h2>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {SEOLeadNurtureServices.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h3 className="text-3xl font-bold mb-3">{card.title}</h3>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section: How We Work ----------------------------- */}
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                How Forwardsols Delivers Results
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  Our proven <strong>lead nurturing process</strong> combines <strong>marketing automation</strong>, <strong>personalized content</strong>, and <strong>multi-channel engagement</strong> to move leads through your sales funnel. We analyze your audience, segment leads, and deliver targeted campaigns that drive conversions and business growth.
                </p>
              </div>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Packages Section ----------------------------- */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    } bg-black`}
                >
                  <div
                    className={`p-6 ${pkg.featured
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

        {/* ----------------------------- FAQ Section ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Frequently Asked Questions About Lead Nurturing
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
              {SEOFAQs.map((card, index) => (
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
