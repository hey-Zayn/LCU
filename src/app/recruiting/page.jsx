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
    title: "Top Talent Acquisition",
    dis: "At Forward Solutions, we specialize in talent acquisition and recruitment services that connect your business with highly qualified professionals. Our advanced sourcing strategies ensure you hire the best candidates for your company’s growth.",
  },
  {
    title: "Executive Search & Headhunting",
    dis: "Our executive search services help you find C-level executives and senior leaders who drive business success. We use proven headhunting techniques to identify and attract top-tier leadership talent.",
  },
  {
    title: "IT & Tech Recruitment",
    dis: "Hire skilled IT professionals and software developers with our tech recruitment solutions. We fill critical roles in software engineering, cybersecurity, cloud computing, and more.",
  },
  {
    title: "Remote Staffing Solutions",
    dis: "Access a global pool of remote talent for flexible and cost-effective hiring. Our remote staffing services help you scale your team quickly and efficiently.",
  },
  {
    title: "Diversity & Inclusion Hiring",
    dis: "Build a diverse and innovative workforce with our diversity recruitment strategies. We help you attract candidates from various backgrounds to foster creativity and growth.",
  },
  {
    title: "Employer Branding & Recruitment Marketing",
    dis: "Enhance your employer brand and attract top talent with our recruitment marketing services. We position your company as an employer of choice in your industry.",
  },
  {
    title: "Contract & Temporary Staffing",
    dis: "Meet project demands with our contract staffing and temporary recruitment solutions. We provide skilled professionals for short-term and project-based roles.",
  },
  {
    title: "Onboarding & Retention Support",
    dis: "Our onboarding and retention programs ensure new hires integrate smoothly and stay engaged, reducing turnover and boosting productivity.",
  },
];

const FAQS = [
  {
    title: "Why choose Forward Solutions for recruitment?",
    dis: "Forward Solutions is a leading recruitment agency with a proven track record in talent acquisition, executive search, and staffing solutions. We use data-driven strategies and a vast network to deliver top candidates for your business.",
  },
  {
    title: "How fast can you fill open positions?",
    dis: "Our streamlined recruitment process and proactive sourcing allow us to fill most positions within 2-4 weeks, depending on the role and requirements.",
  },
  {
    title: "Do you offer remote and global recruitment?",
    dis: "Yes, we provide remote staffing and global recruitment services, connecting you with top talent worldwide for both onsite and remote roles.",
  },
  {
    title: "What industries do you serve?",
    dis: "We recruit for technology, finance, healthcare, engineering, marketing, and more. Our industry expertise ensures you get candidates with the right skills and experience.",
  },
];

const PACKAGES = [
  {
    name: "Starter Recruitment Package",
    features: [
      { title: "Job Posting Optimization", detail: "SEO-optimized job ads for maximum reach" },
      { title: "Candidate Sourcing", detail: "Access to our talent database" },
      { title: "Initial Screening", detail: "Resume and skills review" },
      { title: "Interview Scheduling", detail: "Efficient coordination" },
      { title: "30-Day Placement Guarantee", detail: "Risk-free hiring" },
    ],
    featured: false,
  },
  {
    name: "Professional Recruitment Package",
    features: [
      { title: "Advanced Talent Sourcing", detail: "Targeted outreach and headhunting" },
      { title: "Technical Assessments", detail: "Role-specific skill tests" },
      { title: "Background Checks", detail: "Comprehensive verification" },
      { title: "Employer Branding", detail: "Promote your company culture" },
      { title: "60-Day Placement Guarantee", detail: "Extended coverage" },
    ],
    featured: false,
  },
  {
    name: "Executive Search Package",
    features: [
      { title: "C-Level & Senior Search", detail: "Leadership talent acquisition" },
      { title: "Confidential Headhunting", detail: "Discreet executive recruitment" },
      { title: "Market Mapping", detail: "Competitor and talent analysis" },
      { title: "Leadership Assessment", detail: "In-depth candidate evaluation" },
      { title: "90-Day Placement Guarantee", detail: "Premium support" },
    ],
    featured: true,
  },
  {
    name: "Global & Remote Talent Package",
    features: [
      { title: "International Sourcing", detail: "Worldwide candidate search" },
      { title: "Remote Staffing", detail: "Flexible global hiring" },
      { title: "Visa & Relocation Support", detail: "End-to-end assistance" },
      { title: "Cultural Fit Assessment", detail: "Ensure seamless integration" },
      { title: "120-Day Placement Guarantee", detail: "Ultimate peace of mind" },
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
        <title>Recruitment Agency | Top Talent Acquisition & Staffing Solutions | Forward Solutions</title>
        <meta
          name="description"
          content="Forward Solutions is a leading recruitment agency offering talent acquisition, executive search, IT recruitment, remote staffing, and employer branding. Hire top talent fast. Visit https://www.forwardsols.com/ for the best recruitment services."
        />
        <meta
          name="keywords"
          content="recruitment agency, talent acquisition, executive search, IT recruitment, remote staffing, hire top talent, staffing solutions, employer branding, diversity hiring, headhunting, global recruitment, https://www.forwardsols.com/"
        />
        <link rel="canonical" href="https://www.forwardsols.com/recruiting" />
        <meta property="og:title" content="Recruitment Agency | Top Talent Acquisition & Staffing Solutions | Forward Solutions" />
        <meta property="og:description" content="Hire top talent with Forward Solutions. We provide recruitment, executive search, IT staffing, and remote hiring services. Visit https://www.forwardsols.com/ for more." />
        <meta property="og:url" content="https://www.forwardsols.com/recruiting" />
        <meta property="og:type" content="website" />
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
              Recruitment Agency
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
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Struggling to Hire Top Talent? We Make Recruitment Easy.
              </h2>
              <p className="mb-8 leading-relaxed">
                Forward Solutions is your go-to recruitment agency for fast, reliable, and cost-effective hiring. Our expert recruiters use advanced sourcing, AI-driven screening, and industry insights to connect you with the best candidates. Whether you need IT professionals, executive leaders, or remote staff, we deliver results that drive business growth. <br />
                <span className="font-semibold">Ready to build your dream team?</span>
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Custom Solutions ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Custom Recruitment Solutions for Every Industry
              </h2>
              <p className="mb-8 leading-relaxed">
                We tailor our recruitment services to your unique needs. From tech startups to global enterprises, our team delivers scalable hiring solutions, including executive search, contract staffing, and remote recruitment. Let us help you hire smarter and faster.
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
          <h2 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Recruitment & Staffing Services
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

        {/* ----------------------------- Section 5: When to Partner ----------------------------- */}
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
                When Should You Partner with Forward Solutions?
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  If you’re struggling to fill open positions, facing high turnover, or need to scale your team quickly, Forward Solutions is your recruitment partner. We help you overcome hiring challenges with proven strategies, a vast talent network, and a commitment to your success. <br />
                  <span className="font-semibold">Let’s build your future together.</span>
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
                    <h3 className="text-xl font-bold text-center">{pkg.name}</h3>
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

        {/* ----------------------------- Section 7: FAQs ----------------------------- */}
        <section className="w-full h-full px-4 py-4 text-white">
          <h2 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8">
            Recruitment FAQs: Your Questions Answered
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
