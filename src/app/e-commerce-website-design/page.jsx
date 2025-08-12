"use client";

import React, {useRef } from "react";
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
    title: "Custom E-commerce Website Design",
    dis: "Create unique, conversion-focused e-commerce websites tailored to your brand. Our designs combine stunning visuals with intuitive navigation to deliver exceptional user experiences that drive sales and customer loyalty.",
  },
  {
    title: "Responsive Web Design",
    dis: "Ensure your e-commerce site looks and functions perfectly across all devices. We create responsive designs that adapt seamlessly to desktops, tablets, and mobile phones, providing optimal shopping experiences for all users.",
  },
  {
    title: "UI/UX Optimization",
    dis: "Enhance user engagement and conversion rates through expert UI/UX design. We focus on creating intuitive interfaces, smooth navigation, and visually appealing layouts that keep customers engaged and encourage purchases.",
  },
  {
    title: "E-commerce Theme Customization",
    dis: "Transform standard themes into unique, brand-aligned designs. We customize popular e-commerce platforms like Shopify, WooCommerce, and Magento to create distinctive online stores that stand out from competitors.",
  },
  {
    title: "Product Page Design",
    dis: "Create compelling product pages that convert visitors into buyers. We design pages with high-quality visuals, clear product information, and strategic call-to-action placement to maximize sales potential.",
  },
  {
    title: "Checkout Process Optimization",
    dis: "Streamline the purchasing journey with optimized checkout designs. We reduce friction points, implement secure payment options, and create user-friendly interfaces to minimize cart abandonment and boost conversions.",
  },
  {
    title: "Branding Integration",
    dis: "Develop cohesive designs that reflect your brand identity. We ensure consistent use of colors, typography, and visual elements across your entire e-commerce platform for a strong, recognizable brand presence.",
  },
  {
    title: "Interactive Design Elements",
    dis: "Enhance user engagement with interactive features. We implement animations, hover effects, and dynamic content to create memorable shopping experiences that keep customers coming back.",
  },
  {
    title: "Accessibility-Focused Design",
    dis: "Create inclusive e-commerce experiences for all users. We design with accessibility in mind, ensuring your website meets WCAG standards and is usable by people with diverse abilities.",
  },
];

const FAQS = [
  {
    title: "What is E-commerce Website Design?",
    dis: "E-commerce website design involves creating visually appealing, user-friendly online stores that effectively showcase products and drive sales. It combines aesthetics with functionality to create seamless shopping experiences across all devices.",
  },
  {
    title: "Why is Professional E-commerce Design Important?",
    dis: "Professional e-commerce design builds trust with customers, improves user experience, and increases conversion rates. A well-designed store helps your brand stand out, reduces cart abandonment, and creates a competitive advantage in the online marketplace.",
  },
  {
    title: "What Makes a Good E-commerce Website Design?",
    dis: "A good e-commerce design features intuitive navigation, fast loading speeds, mobile responsiveness, clear product presentation, secure checkout processes, and strong branding. It should also incorporate SEO best practices and accessibility features.",
  },
  {
    title: "How Long Does It Take to Design an E-commerce Website?",
    dis: "The timeline varies based on complexity, but most custom e-commerce designs take 4-8 weeks. This includes planning, design, development, testing, and launch. We work efficiently to deliver high-quality results within your timeframe.",
  },
];

const packages = [
  {
    name: "Starter E-commerce Package",
    features: [
      { title: "Custom Website Design", detail: "Basic e-commerce website with up to 10 product pages" },
      {
        title: "Responsive Design",
        detail: "Mobile-friendly layout for all devices",
      },
      { title: "Basic Product Pages", detail: "Standard product display with images and descriptions" },
      { title: "Secure Checkout", detail: "Basic payment gateway integration" },
      { title: "SEO Setup", detail: "Basic search engine optimization implementation" },
      { title: "1 Month Support", detail: "Post-launch technical support and maintenance" },
    ],
    featured: false,
  },
  {
    name: "Professional E-commerce Package",
    features: [
      { title: "Advanced Website Design", detail: "Custom design with up to 50 product pages" },
      {
        title: "Enhanced UI/UX",
        detail: "User-focused design with improved navigation",
      },
      { title: "Custom Product Pages", detail: "Advanced product display with multiple media options" },
      { title: "Payment Integration", detail: "Multiple payment gateway options" },
      { title: "SEO Optimization", detail: "Comprehensive on-page SEO implementation" },
      {
        title: "3 Months Support",
        detail: "Extended technical support and maintenance",
      },
    ],
    featured: false,
  },
  {
    name: "Premium E-commerce Package",
    features: [
      { title: "Enterprise-Level Design", detail: "Fully custom design with unlimited product pages" },
      {
        title: "Advanced UI/UX Features",
        detail: "Interactive elements and animations",
      },
      { title: "Custom Checkout Process", detail: "Streamlined, multi-step checkout" },
      { title: "Multiple Payment Options", detail: "Integration with all major payment providers" },
      { title: "Full SEO Strategy", detail: "Complete SEO implementation with ongoing optimization" },
      {
        title: "6 Months Support",
        detail: "Extended support with regular updates and maintenance",
      },
    ],
    featured: true,
  },
  {
    name: "Custom E-commerce Solution",
    features: [
      { title: "Tailored Design", detail: "Fully customized design to match your brand identity" },
      {
        title: "Advanced Features",
        detail: "Custom functionality and integrations",
      },
      { title: "Scalable Architecture", detail: "Future-proof design for business growth" },
      { title: "Omnichannel Integration", detail: "Seamless integration with physical stores and marketplaces" },
      { title: "Ongoing SEO & Marketing", detail: "Continuous optimization and marketing support" },
      {
        title: "1 Year Support",
        detail: "Comprehensive support package with regular updates",
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
             E-commerce Website Design
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
              Is your e-commerce store converting visitors into customers?
              </h1>
              <p className="mb-8 leading-relaxed">
              Even if it is, are you confident it's providing the best possible user experience? Imagine having a store with amazing products ready to dominate the market, but your website design is holding you back. Our e-commerce design specialists understand the critical role of user experience in driving conversions. With increasing competition in online retail, having a professionally designed, mobile-optimized, and conversion-focused e-commerce website is no longer optional - it's essential for your business success.
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
              Get Free E-commerce Design Consultation Now!
              </h1>
              <p className="mb-8 leading-relaxed">
              Is your store converting visitors? Get a Design Review.
              Let us analyze your current e-commerce design and show you how to create a seamless shopping experience that boosts conversions and customer loyalty.
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
            Our Core SEO Services
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
              When to Invest in E-commerce Website Design?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
                If you're looking to establish or enhance your online presence, now is the perfect time to invest in professional e-commerce website design. Our team specializes in creating visually stunning, user-friendly, and conversion-optimized online stores that drive sales and customer engagement. With the e-commerce market growing exponentially, having a well-designed, mobile-responsive website is no longer optional - it's essential for staying competitive in today's digital marketplace.
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
        <ServiceForm/>
        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
