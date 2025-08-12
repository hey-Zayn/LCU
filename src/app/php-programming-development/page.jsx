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
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );



  const SEOTpyes = [
    {
      title: "Custom PHP Web Development",
      dis: "We create robust, scalable PHP web applications tailored to your business needs. Our expert developers build custom solutions that handle complex functionalities while maintaining optimal performance and security. From enterprise-level systems to dynamic web portals, we deliver PHP solutions that drive your business forward.",
    },
    {
      title: "PHP Framework Development",
      dis: "Leverage the power of popular PHP frameworks like Laravel, Symfony, and CodeIgniter for your web applications. Our team specializes in framework-based development, ensuring clean code architecture, rapid development cycles, and maintainable solutions that can scale with your business growth.",
    },
    {
      title: "PHP API Development & Integration",
      dis: "We develop secure and efficient RESTful APIs and GraphQL endpoints using PHP. Our API solutions enable seamless integration between your web applications, mobile apps, and third-party services, ensuring smooth data exchange and enhanced functionality across your digital ecosystem.",
    },
    {
      title: "PHP E-commerce Development",
      dis: "Build powerful e-commerce platforms with PHP. We develop custom shopping carts, payment gateway integrations, and product management systems that provide secure, scalable, and user-friendly online shopping experiences. Our solutions are optimized for performance and conversion rates.",
    },
    {
      title: "PHP CMS Development & Customization",
      dis: "We create custom content management systems using PHP or extend popular platforms like WordPress and Drupal. Our CMS solutions empower you to manage your website content efficiently while maintaining full control over design and functionality.",
    },
    {
      title: "PHP Migration & Upgradation Services",
      dis: "Upgrade your legacy PHP applications to modern standards. We handle complex migrations, ensuring compatibility with the latest PHP versions while maintaining data integrity and minimizing downtime. Our migration services include performance optimization and security enhancements.",
    },
    {
      title: "PHP Performance Optimization",
      dis: "We optimize your PHP applications for maximum speed and efficiency. Our experts analyze and improve code execution, database queries, and server configurations to ensure your application delivers exceptional performance even under heavy traffic loads.",
    },
    {
      title: "PHP Security Solutions",
      dis: "Protect your PHP applications with our comprehensive security services. We implement best practices for data encryption, user authentication, and vulnerability prevention, ensuring your application meets the highest security standards and protects sensitive user data.",
    },
    {
      title: "PHP Maintenance & Support",
      dis: "Ensure your PHP applications remain up-to-date and secure with our ongoing maintenance services. We provide regular updates, bug fixes, and performance monitoring to keep your applications running smoothly and efficiently.",
    },
    {
      title: "PHP Cloud Integration",
      dis: "We integrate your PHP applications with cloud platforms like AWS, Azure, and Google Cloud. Our cloud solutions ensure scalability, reliability, and cost-efficiency, enabling your applications to handle growing user demands while maintaining optimal performance.",
    },
  ];

  const FAQS = [
    {
      title: "What is PHP and Why Should I Use It for My Web Development?",
      dis: "PHP is a widely-used open-source scripting language specifically designed for web development. It's known for its flexibility, scalability, and ability to create dynamic, database-driven websites. PHP powers over 75% of all websites and is particularly effective for building complex web applications, content management systems, and e-commerce platforms.",
    },
    {
      title: "What Are the Benefits of Custom PHP Development?",
      dis: "Custom PHP development offers tailored solutions that perfectly match your business needs. It provides complete control over functionality, enhanced security, better performance optimization, and seamless integration with other systems. Our custom PHP solutions are scalable, maintainable, and built to grow with your business.",
    },
    {
      title: "Which PHP Frameworks Do You Use?",
      dis: "We specialize in using modern PHP frameworks like Laravel, Symfony, and CodeIgniter. These frameworks provide robust architecture, security features, and development tools that accelerate project delivery while maintaining high code quality. We choose the framework that best suits your project requirements.",
    },
    {
      title: "How Do You Ensure Security in PHP Development?",
      dis: "We implement multiple security layers in our PHP development process, including input validation, data encryption, secure session management, and protection against common vulnerabilities like SQL injection and XSS attacks. We follow OWASP security standards and conduct regular security audits to ensure your application remains protected.",
    },
  ];
  const packages = [
    {
      name: "Basic PHP Package",
      features: [
        { title: "Custom PHP Development", detail: "Basic web application development" },
        {
          title: "API Integration",
          detail: "Simple REST API implementation",
        },
        { title: "Database Integration", detail: "MySQL database setup" },
        { title: "Security Features", detail: "Basic security implementations" },
        { title: "Performance Optimization", detail: "Initial performance adjustments" },
        { title: "Maintenance", detail: "3 months basic support" },
      ],
      featured: false,
    },
    {
      name: "Standard PHP Package",
      features: [
        { title: "Custom PHP Development", detail: "Intermediate web application development" },
        {
          title: "API Development",
          detail: "Custom RESTful API creation",
        },
        { title: "Database Management", detail: "Advanced database integration" },
        { title: "Security Features", detail: "Enhanced security measures" },
        { title: "Performance Optimization", detail: "Comprehensive performance tuning" },
        {
          title: "Maintenance",
          detail: "6 months standard support",
        },
      ],
      featured: false,
    },
    {
      name: "Premium PHP Package",
      features: [
        { title: "Custom PHP Development", detail: "Advanced web application development" },
        {
          title: "API Development",
          detail: "RESTful & GraphQL API development",
        },
        { title: "Database Optimization", detail: "Advanced database optimization" },
        { title: "Security Features", detail: "Enterprise-level security" },
        { title: "Performance Optimization", detail: "Advanced performance optimization" },
        {
          title: "Maintenance",
          detail: "12 months premium support",
        },
      ],
      featured: true,
    },
    {
      name: "Enterprise PHP Package",
      features: [
        { title: "Custom PHP Development", detail: "Complex enterprise-grade applications" },
        {
          title: "API Development",
          detail: "Microservices architecture implementation",
        },
        { title: "Database Solutions", detail: "Custom database solutions" },
        { title: "Security Features", detail: "Comprehensive security audit & implementation" },
        { title: "Performance Optimization", detail: "Custom performance solutions" },
        {
          title: "Maintenance",
          detail: "24/7 enterprise support",
        },
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
              PHP Programming Development
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
                Professional PHP Development Services - Scalable & Secure Web Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                Custom PHP Development for High-Performance Web Applications & APIs
                Power your digital presence with robust, scalable PHP solutions tailored to your business needs. Our expert PHP developers build secure, high-performance web applications, CMS integrations, and RESTful APIs that drive efficiency and growth.
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
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Expert PHP Development Solutions
              </h1>
              <p className="mb-8 leading-relaxed">
                Need robust, scalable web applications? Our PHP experts deliver high-performance solutions tailored to your business needs. From custom web development to API integrations, we build secure and efficient PHP systems that drive your digital transformation.
              </p>
              <div className="flex justify-center">
                <Link href={`/contact`}>  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
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

        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our Core PHP Services
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
                When to Choose PHP Development?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                  PHP remains one of the most powerful and versatile server-side scripting languages for web development. If you're looking to build dynamic, scalable, and secure web applications, PHP is the ideal choice. Our expert PHP developers specialize in creating custom solutions that drive business growth, from enterprise-level applications to high-performance APIs. With PHP's extensive framework support and our team's deep expertise, we can help you build robust web solutions that stand the test of time.
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
