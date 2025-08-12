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
    title: "Corporate Training Programs",
    dis: "Boost employee performance and productivity with our industry-leading corporate training programs. At Forward Solutions, we deliver customized learning experiences that drive measurable business growth and empower your workforce with essential skills.",
  },
  {
    title: "Leadership Development Training",
    dis: "Unlock leadership potential with our high-impact leadership development training. Our expert-led sessions focus on strategic thinking, decision-making, and effective team management for sustainable organizational success.",
  },
  {
    title: "Employee Soft Skills Training",
    dis: "Enhance communication, collaboration, and problem-solving with our employee soft skills training. Equip your team with the interpersonal skills needed to thrive in today's competitive business environment.",
  },
  {
    title: "Workplace Diversity & Inclusion Workshops",
    dis: "Promote a culture of diversity and inclusion with our specialized workshops. We help organizations build inclusive teams, reduce bias, and foster innovation through diverse perspectives.",
  },
  {
    title: "Change Management Training",
    dis: "Navigate organizational change with confidence. Our change management training equips your staff with the tools and mindset to adapt quickly and maintain productivity during transitions.",
  },
  {
    title: "Time Management & Productivity Solutions",
    dis: "Maximize efficiency with our time management and productivity training. Learn proven techniques to prioritize tasks, eliminate distractions, and achieve business goals faster.",
  },
  {
    title: "Compliance & Ethics Training",
    dis: "Stay ahead of regulations with our compliance and ethics training. Ensure your organization meets industry standards and fosters a culture of integrity and responsibility.",
  },
  {
    title: "Sales & Customer Service Training",
    dis: "Drive revenue growth with our sales and customer service training. Empower your team to deliver exceptional customer experiences and close more deals.",
  },
  {
    title: "Digital Transformation & Technology Training",
    dis: "Prepare your workforce for the future with digital transformation and technology training. Upskill employees in the latest tools, software, and digital best practices.",
  },
];

const FAQS = [
  {
    title: "What is corporate training and why is it essential?",
    dis: "Corporate training is a strategic investment in employee development, designed to improve skills, boost productivity, and drive business growth. At Forward Solutions, our training programs help organizations stay competitive, adapt to industry changes, and achieve long-term success.",
  },
  {
    title: "How can corporate training improve employee performance?",
    dis: "Effective corporate training enhances employee engagement, increases retention, and develops critical skills. Our tailored programs at https://www.forwardsols.com/ are proven to improve team collaboration, leadership, and overall workplace performance.",
  },
  {
    title: "What types of corporate training does Forward Solutions offer?",
    dis: "We offer a comprehensive range of training solutions including leadership development, soft skills, compliance, digital transformation, sales, and more. Each program is customized to meet your organization's unique needs.",
  },
  {
    title: "How do you customize training for different businesses?",
    dis: "Our process begins with a detailed needs assessment to understand your goals. We then design and deliver training content, formats, and schedules that align with your business objectives for maximum impact.",
  },
];

const PACKAGES = [
  {
    name: "Starter Corporate Training",
    features: [
      { title: "Skill Gap Analysis", detail: "Identify key areas for employee development with our expert assessment." },
      { title: "Core Skills Workshops", detail: "Interactive sessions on essential workplace skills." },
      { title: "Onsite or Virtual Delivery", detail: "Flexible training options to suit your business needs." },
      { title: "Training Materials", detail: "Access to digital resources and guides." },
      { title: "Progress Tracking", detail: "Monitor employee improvement with our reporting tools." },
      { title: "30-Day Support", detail: "Post-training support for ongoing success." },
    ],
    featured: false,
  },
  {
    name: "Professional Growth Package",
    features: [
      { title: "Comprehensive Needs Assessment", detail: "In-depth analysis of organizational training requirements." },
      { title: "Advanced Skills Training", detail: "Specialized modules in leadership, communication, and productivity." },
      { title: "Blended Learning", detail: "Combination of live workshops and e-learning modules." },
      { title: "Customized Content", detail: "Tailored training materials for your industry." },
      { title: "Performance Evaluation", detail: "Regular feedback and progress reviews." },
      { title: "90-Day Support", detail: "Extended post-training consultation." },
    ],
    featured: false,
  },
  {
    name: "Premium Enterprise Solution",
    features: [
      { title: "Strategic Training Roadmap", detail: "Align training with your business goals for maximum ROI." },
      { title: "Executive Leadership Coaching", detail: "One-on-one coaching for senior leaders and managers." },
      { title: "Full Customization", detail: "Bespoke training programs for all departments." },
      { title: "Multi-Channel Delivery", detail: "Workshops, webinars, and on-demand courses." },
      { title: "Comprehensive Analytics", detail: "Detailed reporting on training effectiveness and ROI." },
      { title: "6-Month Support", detail: "Ongoing strategic guidance and support." },
    ],
    featured: true,
  },
  {
    name: "Ultimate Corporate Growth",
    features: [
      { title: "Organizational Development Strategy", detail: "End-to-end training strategy for enterprise growth." },
      { title: "Leadership Pipeline Development", detail: "Succession planning and leadership training at all levels." },
      { title: "Company-Wide Skill Development", detail: "Training for every department and role." },
      { title: "Learning Management System", detail: "Custom LMS for tracking and managing training." },
      { title: "Continuous Improvement", detail: "Ongoing program refinement and optimization." },
      { title: "Dedicated Account Manager", detail: "Personalized support from a corporate training expert." },
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
        <title>Corporate Training Programs | Employee Development & Leadership Training - Forward Solutions</title>
        <meta
          name="description"
          content="Unlock business growth with top-rated corporate training programs from Forward Solutions. Boost employee performance, leadership, and productivity with customized training solutions. Visit https://www.forwardsols.com/ for the best corporate training services."
        />
        <meta
          name="keywords"
          content="corporate training, employee development, leadership training, workplace training, business training, staff training, professional development, soft skills training, compliance training, digital transformation training, sales training, customer service training, time management training, team building, organizational development, https://www.forwardsols.com/"
        />
        <link rel="canonical" href="https://www.forwardsols.com/corporate-training" />
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
              Corporate Training Solutions
            </h1>
          </div>
        </div>

        {/* ----------------------------- Section 2: Why Choose Us ----------------------------- */}
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
                Elevate Your Business with Corporate Training
              </h1>
              <p className="mb-8 leading-relaxed">
                At Forward Solutions, we deliver high-impact corporate training programs designed to boost employee performance, leadership, and productivity. Our customized training solutions help your business stay ahead in a competitive market, improve staff retention, and drive measurable results. Empower your workforce with the skills needed for digital transformation, compliance, and organizational growth. Discover why leading companies trust <b>https://www.forwardsols.com/</b> for their corporate training needs.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Started
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
                Why Invest in Employee Training?
              </h1>
              <p className="mb-8 leading-relaxed">
                Investing in employee training is proven to increase productivity, enhance job satisfaction, and reduce turnover. Our corporate training programs are tailored to your business goals, ensuring your team develops the skills needed for success in today's fast-paced business environment. Partner with Forward Solutions to unlock your organization's full potential.
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

        {/* ----------------------------- Core Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Top Corporate Training Services
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
                    <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- When to Invest ----------------------------- */}
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
                Is Your Business Ready for Growth?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  If your organization is experiencing skill gaps, low productivity, or challenges with digital transformation, it's time to invest in corporate training. Forward Solutions specializes in delivering high-ROI training programs that address your unique business needs. Our expert trainers create engaging learning experiences that drive innovation, improve team collaboration, and ensure your business stays ahead of the competition. Visit <b>https://www.forwardsols.com/</b> to learn more about our proven training solutions.
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Demo
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

        {/* ----------------------------- FAQs ----------------------------- */}
        <section className="w-full h-fullpx-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
            Corporate Training FAQs
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
