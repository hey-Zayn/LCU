"use client";
import WhyChooseus from "@/Dev//Components/WhyChooseus";
import React, { useEffect, useRef } from "react";
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
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Create animation timeline

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add animations to timeline
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

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  const SEOTpyes = [
    {
      title: "Custom WordPress Website Development Services",
      dis: "Transform your online presence with our expert WordPress development services. We specialize in creating custom WordPress websites that are tailored to your business needs, incorporating responsive design, SEO optimization, and advanced functionality. Our team builds high-performing WordPress sites that drive conversions and enhance user engagement.",
    },
    {
      title: "WordPress E-Commerce Development Solutions",
      dis: "Launch your online store with our WooCommerce and WordPress e-commerce development expertise. We create secure, scalable, and user-friendly e-commerce platforms with seamless payment gateway integration, product management systems, and advanced shopping cart functionality. Our solutions are optimized for mobile commerce and designed to maximize your online sales potential.",
    },
    {
      title: "WordPress Website Maintenance & Support",
      dis: "Ensure your WordPress site remains secure and up-to-date with our comprehensive maintenance services. We provide regular WordPress core updates, plugin management, security monitoring, and performance optimization. Our proactive approach prevents downtime, enhances security, and maintains your website's peak performance.",
    },
    {
      title: "WordPress Theme Customization & Development",
      dis: "Stand out from competitors with our custom WordPress theme development services. We create unique, responsive WordPress themes that align with your brand identity and business goals. Our themes are optimized for speed, SEO, and user experience, ensuring your website performs exceptionally across all devices.",
    },
    {
      title: "WordPress Plugin Development & Integration",
      dis: "Enhance your website's functionality with our custom WordPress plugin development services. We create secure, efficient plugins tailored to your specific needs, from custom forms and booking systems to advanced analytics tools. Our plugins are developed following WordPress coding standards for optimal performance and compatibility.",
    },
    {
      title: "WordPress Migration & Optimization Services",
      dis: "Upgrade your website with our professional WordPress migration services. We ensure seamless transfer of your website to WordPress with zero downtime, complete data preservation, and enhanced performance. Our migration process includes thorough testing, SEO preservation, and post-migration optimization for maximum efficiency.",
    },
  ];

  const FAQS = [
    {
      title: "What is WordPress and Why Choose it for My Website?",
      dis: "WordPress is a highly adaptable and user-friendly content management system (CMS) that empowers you to easily build and manage your website. Its extensive library of themes and plugins offers unparalleled customization options. Renowned for its ease of use, SEO-friendliness, and broad functionality support, WordPress is a leading platform for businesses of all sizes seeking a robust online presence.",
    },
    {
      title: "What is the Typical Timeline for WordPress Website Development?",
      dis: "The duration of a WordPress website development project is contingent upon its complexity. A straightforward website might be completed within a few weeks, whereas more intricate sites with custom functionalities or e-commerce integrations can extend to several months. We provide a detailed project timeline tailored to your specific requirements and the scope of work involved.",
    },
    {
      title: "Will I Be Able to Edit My WordPress Website After Launch?",
      dis: "Absolutely! WordPress provides an intuitive admin dashboard that allows you to easily update content, add new pages, and modify design elements post-launch. While the platform is user-friendly for basic changes, more complex modifications may benefit from the expertise of a developer to ensure seamless implementation.",
    },
    {
      title: "How Do You Approach SEO Optimization for WordPress Websites?",
      dis: "We integrate SEO best practices throughout the WordPress development lifecycle to maximize your website's potential for high search engine rankings. This includes strategic optimization of site structure, meta tags, keyword integration within content, and ensuring optimal site speed and mobile responsiveness. Additionally, we offer ongoing SEO services to continuously enhance your website's visibility and organic traffic.",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      features: [
        { title: "Custom Design", detail: "Selection from pre-designed templates" },
        {
          title: "Responsive Design",
          detail: "Ensuring mobile-friendly viewing",
        },
        { title: "Content Management System", detail: "Standard WordPress CMS setup" },
        { title: "SEO Optimization", detail: "Fundamental SEO configuration" },
        { title: "Security Features", detail: "Essential security implementations" },
        { title: "Performance Optimization", detail: "Initial performance adjustments" },
        { title: "E-Commerce Functionality", detail: "Not included in this tier" },
        { title: "Support & Maintenance", detail: "Limited support after launch" },
        { title: "Plugin Integration", detail: "Integration of essential plugins" },
        { title: "Training & Documentation", detail: "Basic user guide provided" },
      ],
      featured: false,
    },
    {
      name: "Standard Package",
      features: [
        { title: "Custom Design", detail: "Basic level of custom design elements" },
        {
          title: "Responsive Design",
          detail: "Fully responsive across various devices",
        },
        { title: "Content Management System", detail: "CMS setup with recommended plugins" },
        { title: "SEO Optimization", detail: "On-page SEO techniques implemented" },
        { title: "Security Features", detail: "Enhanced security measures configuration" },
        { title: "Performance Optimization", detail: "Improved site speed and performance" },
        { title: "E-Commerce Functionality", detail: "Basic e-commerce setup available" },
        { title: "Support & Maintenance", detail: "Includes 3 months of post-launch support and updates" },
        { title: "Plugin Integration", detail: "Integration of standard plugins" },
        { title: "Training & Documentation", detail: "Comprehensive user training session" },
      ],
      featured: false,
    },
    {
      name: "Premium Package",
      features: [
        { title: "Custom Design", detail: "Advanced and tailored custom design" },
        {
          title: "Responsive Design",
          detail: "Optimized responsiveness for all screen sizes",
        },
        { title: "Content Management System", detail: "Advanced CMS features and configurations" },
        { title: "SEO Optimization", detail: "Implementation of advanced SEO strategies" },
        { title: "Security Features", detail: "Robust security features and protocols" },
        { title: "Performance Optimization", detail: "Comprehensive optimization for peak performance" },
        { title: "E-Commerce Functionality", detail: "Advanced e-commerce features and integrations" },
        { title: "Support & Maintenance", detail: "Includes 6 months of dedicated support and updates" },
        { title: "Plugin Integration", detail: "Integration of premium and custom plugins" },
        { title: "Training & Documentation", detail: "In-depth training and detailed documentation" },
      ],
      featured: true,
    },
    {
      name: "Enterprise Package",
      features: [
        { title: "Custom Design", detail: "Fully bespoke and unique design solution" },
        {
          title: "Responsive Design",
          detail: "Highest level of optimization for all devices and resolutions",
        },
        { title: "Content Management System", detail: "Full-featured CMS with custom integrations" },
        { title: "SEO Optimization", detail: "Complete SEO audit and comprehensive optimization" },
        { title: "Security Features", detail: "Top-tier security infrastructure with ongoing monitoring" },
        { title: "Performance Optimization", detail: "Premium performance and caching solutions implemented" },
        { title: "E-Commerce Functionality", detail: "Fully integrated and customized e-commerce solution" },
        { title: "Support & Maintenance", detail: "12 months of priority support and proactive maintenance" },
        { title: "Plugin Integration", detail: "Custom plugin development and advanced integrations" },
        { title: "Training & Documentation", detail: "Personalized, in-depth training and comprehensive documentation" },
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
              WordPress Website <br /> Development
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
                Professional WordPress Website Development – Fast, Secure & SEO-Friendly
              </h1>
              <p className="mb-8 leading-relaxed">
                Get a High-Performance WordPress Site Tailored for Your Business
                A powerful WordPress website can boost your brand, attract customers, and drive sales. Our expert WordPress development services deliver fast, secure, and fully customized websites that are optimized for SEO, user experience, and conversions.
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
                Why Choose Our WordPress Development Services?
              </h1>
              <p className=" leading-relaxed mb-4">
                A well-built WordPress site is more than just design—it’s about performance, security, and growth.
              </p>
              <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
                <li className="text-white/80 text-base">
                  Custom Design & Development – Unique, mobile-friendly websites tailored to your brand.
                </li>
                <li className="text-white/80 text-base">
                  Blazing-Fast Loading Speed – Optimized for performance to reduce bounce rates.
                </li>
                <li className="text-white/80 text-base">
                  SEO-Ready Structure – Built with clean code and SEO best practices.
                </li>
                <li className="text-white/80 text-base">
                  Secure & Hack-Proof – Advanced security measures to protect your site.
                </li>
                <li className="text-white/80 text-base">
                  Easy Content Management – User-friendly backend for hassle-free updates.
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
            Our Core WordPress Services
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
                Our WordPress Development Process

              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  We follow a proven workflow to ensure quality and efficiency:

                  Discovery & Planning – Understand your goals and audience.

                  Design & Prototyping – Create a visually appealing layout.

                  Development & Testing – Build and optimize for all devices.

                  Launch & Support – Go live with ongoing maintenance.
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
