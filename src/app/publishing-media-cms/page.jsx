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
import Head from 'next/head';

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

  const socialMediaServices = [
    {
      title: "Social Media Publishing Calendar",
      dis: "Our customizable social media publishing calendar template helps you plan, schedule, and track all your content across platforms. Streamline your workflow with our easy-to-use social media publishing tools.",
    },
    {
      title: "Automated Publishing Platform",
      dis: "Powerful social media publishing tools that automate your posting schedule while maintaining authentic engagement. Our social media publisher tool supports all major platforms with optimal timing features.",
    },
    {
      title: "Content Strategy & Planning",
      dis: "Comprehensive social media publishing platforms that align with your brand goals. We create data-driven strategies using the best social media publishing tools in the industry.",
    },
    {
      title: "Cross-Platform Publishing",
      dis: "Manage all your social media publishing from one dashboard. Our social media publisher tool simplifies multi-platform management with unified analytics.",
    },
    {
      title: "Visual Content Publishing",
      dis: "Specialized tools for image and video publishing on social media. Our social media publishing platforms support all media formats with automatic optimization.",
    },
    {
      title: "Analytics & Performance Tracking",
      dis: "Built-in analytics with our social media publishing tools provide actionable insights to improve your content strategy and engagement rates.",
    },
    {
      title: "Team Collaboration Features",
      dis: "Our social media publishing platforms include approval workflows and team collaboration tools for enterprise clients.",
    },
    {
      title: "AI-Powered Content Suggestions",
      dis: "Advanced social media publisher tool with AI capabilities that suggest optimal content types and posting times for maximum reach.",
    },
  ];

  const FAQS = [
    {
      title: "What is social media publishing?",
      dis: "Social media publishing refers to the process of creating, scheduling, and distributing content across social media platforms. Our social media publishing tools help businesses maintain a consistent online presence with features like content calendars, automated posting, and performance analytics. Effective social media publishing is essential for brand visibility and audience engagement.",
    },
    {
      title: "Why do I need a social media publishing calendar?",
      dis: "A social media publishing calendar template helps you: Plan content in advance for consistent posting, Maintain a balanced content mix, Coordinate campaigns across platforms, Track important dates and events, Measure performance over time. Our social media publishing calendar tools make this process effortless with drag-and-drop functionality and team collaboration features.",
    },
    {
      title: "How do your social media publishing tools differ from others?",
      dis: "ForwardSols offers unique advantages in social media publishing platforms: All-in-one solution for planning, creating, and publishing, AI-powered optimal posting time recommendations, Customizable social media publishing calendar templates, Enterprise-grade security and permissions, Dedicated account management and support. Our tools are designed specifically for businesses that need professional-grade social media publishing capabilities.",
    },
    {
      title: "Can I schedule posts to multiple platforms at once?",
      dis: "Yes, our social media publisher tool supports cross-platform publishing to all major networks including Facebook, Instagram, Twitter, LinkedIn, and Pinterest. You can create content once and publish everywhere, or customize platform-specific versions. Our social media publishing platforms save you hours each week with bulk scheduling and queue management features.",
    },
    {
      title: "Do you offer analytics with your publishing tools?",
      dis: "Absolutely. Our social media publishing tools include comprehensive analytics that track: Engagement rates across platforms, Optimal posting times, Audience growth trends, Content performance comparisons, Competitor benchmarking. These insights help refine your social media publishing strategy for better results.",
    },
  ];

  const packages = [
    {
      name: "Starter Publishing Package",
      features: [
        { title: "Basic Social Media Publishing Calendar", detail: "Pre-designed template for 1 platform" },
        { title: "Scheduling for 2 Social Accounts", detail: "Up to 30 posts per month" },
        { title: "Basic Analytics", detail: "Engagement metrics and simple reports" },
        { title: "Email Support", detail: "Mon-Fri business hours" },
        { title: "1 User License", detail: "Single user access" },
      ],
      featured: false,
    },
    {
      name: "Professional Publishing Suite",
      features: [
        { title: "Advanced Publishing Calendar", detail: "Customizable template for 3 platforms" },
        { title: "Unlimited Scheduling", detail: "For up to 5 social accounts" },
        { title: "Enhanced Analytics", detail: "Performance tracking and insights" },
        { title: "Priority Support", detail: "24/7 email and chat" },
        { title: "3 User Licenses", detail: "Small team access" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Publishing Platform",
      features: [
        { title: "Custom Social Media Publisher Tool", detail: "Tailored to your workflows" },
        { title: "Unlimited Accounts & Posts", detail: "Across all major platforms" },
        { title: "Advanced AI Recommendations", detail: "Content and timing suggestions" },
        { title: "Dedicated Account Manager", detail: "Strategic guidance and support" },
        { title: "Unlimited Team Members", detail: "With role-based permissions" },
      ],
      featured: false,
    },
    {
      name: "Agency Publishing Solution",
      features: [
        { title: "Multi-Client Management", detail: "Dashboard for all client accounts" },
        { title: "White-label Reporting", detail: "Branded analytics for clients" },
        { title: "Content Approval Workflows", detail: "Client review and sign-off" },
        { title: "API Access", detail: "Integration with your existing tools" },
        { title: "24/7 Premium Support", detail: "With SLA guarantees" },
      ],
      featured: false,
    },
  ]; 

  return (
    <>
      <Head>
        <title>Social Media Publishing Tools & Calendar | ForwardSols</title>
        <meta name="description" content="ForwardSols provides powerful social media publishing tools, calendar templates, and platforms to streamline your content strategy. Schedule, publish, and analyze across all platforms from one dashboard." />
        <meta name="keywords" content="social media publishing, social media publishing tools, social media publishing calendar, social media publisher tool, social media publishing platforms, social media publishing calendar template" />
        <meta property="og:title" content="Social Media Publishing Tools & Calendar | ForwardSols" />
        <meta property="og:description" content="Professional social media publishing solutions for businesses and agencies. Schedule, analyze, and optimize your social content with our powerful tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forwardsols.com/social-media-publishing" />
        <link rel="canonical" href="https://forwardsols.com/social-media-publishing" />
      </Head>

      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="social-media-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Social Media Publishing Solutions
            </h1>
            <p className="text-white text-xl mt-6 z-10 max-w-2xl text-center px-4">
              Powerful tools to plan, schedule, and analyze your social content
            </p>
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
                Advanced Social Media Publishing Tools
              </h1>
              <p className="mb-8 leading-relaxed">
                ForwardSols provides comprehensive social media publishing platforms that transform how businesses manage their online presence. Our social media publisher tool combines scheduling, analytics, and collaboration features in one intuitive dashboard.
              </p>
              <p className="mb-8 leading-relaxed">
                Whether you need a simple social media publishing calendar template or an enterprise-grade solution, we have tools to match your needs. Automate your publishing workflow while maintaining authentic engagement with our smart social media publishing tools.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>  
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Free Trial
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why Choose Our Social Media Publishing Tools?
              </h1>
              <p className="leading-relaxed mb-4">
                Our social media publishing platforms stand out because:
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl space-y-3">
                <li className="text-white/80 text-base">
                  <strong>All-in-One Solution</strong> - From our social media publishing calendar to analytics, everything in one place
                </li>
                <li className="text-white/80 text-base">
                  <strong>Time-Saving Automation</strong> - Schedule weeks of content in minutes
                </li>
                <li className="text-white/80 text-base">
                  <strong>Platform Expertise</strong> - Optimized publishing for each social network
                </li>
                <li className="text-white/80 text-base">
                  <strong>Data-Driven Insights</strong> - Learn what content performs best
                </li>
                <li className="text-white/80 text-base">
                  <strong>Scalable for Teams</strong> - Collaborate seamlessly across departments
                </li>
              </ul>
              <p className="mt-6 leading-relaxed">
                Our social media publisher tool adapts to your needs, whether you're a solo entrepreneur or a large marketing team.
              </p>
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

        {/* Core Services */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <div className="text-center">
            <h1 className="text-white font-bold text-5xl max-sm:text-3xl">
              Social Media Publishing Features
            </h1>
            <p className="text-white mt-4 max-w-3xl mx-auto">
              Everything you need to master social media publishing
            </p>
          </div>
          <div className="w-full h-full relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-5 z-10">
                {socialMediaServices?.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h1 className="text-3xl font-bold mb-3">{card.title}</h1>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
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
              <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Our Social Media Publishing Process
              </h1>
              <div>
                <p className="mb-4 leading-relaxed">
                  We make social media publishing simple and effective:
                </p>
                <ol className="list-decimal [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:font-bold space-y-3 pl-5">
                  <li className="text-white/80 text-base">
                    <strong>Strategy Development</strong> - Custom social media publishing calendar template creation
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Content Planning</strong> - Using our social media publishing tools to map out campaigns
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Scheduling</strong> - Bulk upload and auto-scheduling with our social media publisher tool
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Publishing</strong> - Automated posting across all platforms
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Engagement</strong> - Real-time monitoring and response
                  </li>
                  <li className="text-white/80 text-base">
                    <strong>Optimization</strong> - Continuous improvement based on analytics
                  </li>
                </ol>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-6">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Social Media Publishing Packages</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Choose the perfect social media publishing tools for your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden shadow-lg ${pkg.featured
                    ? "border border-[#4F1DD7] transform md:-translate-y-4"
                    : "border border-[#D9345E]"
                    }`}
                >
                  <div
                    className={`p-6 ${pkg.featured
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
                    <div className="mt-6 text-center">
                      <Link href="/contact">
                        <button className={`px-4 py-2 rounded-md ${pkg.featured ? 'bg-white text-[#4F1DD7]' : 'bg-[#D9345E] text-white'} font-medium`}>
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full h-full px-4 py-4 text-white">
          <div className="text-center mb-12">
            <h1 className="text-white font-bold text-4xl max-sm:text-3xl">Social Media Publishing FAQs</h1>
            <p className="text-white/80 mt-4">Answers to common questions about our publishing tools</p>
          </div>
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
              {FAQS?.map((card, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className="w-full space-y-5"
                >
                  <AccordionItem value={`item-${index}`} className={``}>
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