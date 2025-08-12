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

// --- SEO Meta Tags for Next.js App Router ---
import Head from "next/head";

const SEO_KEYWORDS = [
  "landing page optimization",
  "high converting landing pages",
  "SEO landing page services",
  "landing page SEO",
  "conversion rate optimization",
  "SEO for landing pages",
  "best landing page agency",
  "SEO optimized landing pages",
  "lead generation landing page",
  "forwardsols.com",
  "SEO company",
  "digital marketing agency",
  "local SEO services",
  "mobile optimized landing page",
  "fast ranking landing page",
  "low competition SEO keywords",
  "high volume SEO keywords",
  "SEO expert",
  "SEO audit",
  "SEO packages"
].join(", ");

const SEO_DESCRIPTION =
  "Boost your business with Forwardsols.com’s Landing Page Optimization services. Get high-converting, SEO-optimized landing pages designed for fast Google rankings, increased conversions, and lead generation. Start ranking higher with our expert SEO strategies and mobile-friendly landing pages.";

const SEO_TITLE =
  "Landing Page Optimization Services | High-Converting SEO Landing Pages | Forwardsols.com";

const SEO_URL = "https://forwardsols.com/Landing-Page-Optimization";
const SEO_IMAGE = "https://forwardsols.com/og-landing-page-optimization.jpg";

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

  // --- SEO-Optimized Service Features (with high-volume, low-KD keywords) ---
  const SEOTpyes = [
    {
      title: "SEO Optimized Landing Pages for High Google Rankings",
      dis: "Get landing pages designed with the latest SEO best practices, targeting high-volume, low-competition keywords. Our pages help your business rank faster on Google and attract qualified leads. Forwardsols.com specializes in creating SEO landing pages that convert visitors into customers.",
    },
    {
      title: "Conversion Rate Optimization (CRO) for Maximum Leads",
      dis: "Increase your conversion rates with expertly crafted landing pages. We use proven CRO techniques, including compelling CTAs, trust signals, and persuasive copy, to turn your traffic into real business results. Our landing page optimization service is focused on lead generation and sales growth.",
    },
    {
      title: "Mobile-Optimized & Fast-Loading Landing Pages",
      dis: "Over 60% of users browse on mobile. Our landing pages are fully responsive and optimized for speed, ensuring a seamless experience on all devices. Fast-loading, mobile-friendly pages improve your SEO rankings and reduce bounce rates.",
    },
    {
      title: "Local SEO Landing Pages for Area-Wise Targeting",
      dis: "Dominate your local market with geo-targeted landing pages. We optimize your content and Google Business Profile for specific locations, helping you attract high-intent local customers searching for your services.",
    },
    {
      title: "Advanced Keyword Research & Implementation",
      dis: "We identify high-volume, low-difficulty keywords relevant to your business and integrate them into your landing page content, meta tags, and headings. This targeted approach ensures your pages rank for the terms your customers are searching for.",
    },
    {
      title: "Comprehensive Analytics & Performance Reporting",
      dis: "Track your landing page performance with detailed analytics. We provide insights on traffic sources, user behavior, conversion rates, and keyword rankings, empowering you to make data-driven marketing decisions.",
    },
  ];

  // --- SEO-Optimized FAQs (with keywords) ---
  const FAQS = [
    {
      title: "What is Landing Page Optimization and why is it important for SEO?",
      dis: "Landing Page Optimization is the process of improving web pages to increase conversions and search engine rankings. At Forwardsols.com, we use high-volume, low-competition keywords and proven SEO strategies to ensure your landing pages rank higher on Google and drive more leads.",
    },
    {
      title: "How does Forwardsols.com create high-converting SEO landing pages?",
      dis: "We combine advanced keyword research, mobile optimization, fast loading speeds, and persuasive copywriting to create landing pages that convert. Our SEO experts focus on both user experience and search engine requirements for maximum results.",
    },
    {
      title: "What keywords do you target for landing page SEO?",
      dis: "We target high-volume, low-difficulty (KD) keywords such as 'landing page optimization', 'SEO landing page services', 'conversion rate optimization', and 'lead generation landing page' to ensure your business ranks quickly and attracts quality traffic.",
    },
    {
      title: "How fast can I see results from your landing page optimization service?",
      dis: "Most clients see improved rankings and increased conversions within 30-60 days. Our SEO-optimized landing pages are designed for fast indexing and quick results, especially when targeting low-competition keywords.",
    },
  ];

  // --- SEO-Optimized Packages ---
  const packages = [
    {
      name: "Starter SEO Landing Page Package",
      features: [
        { title: "SEO Audit", detail: "Comprehensive landing page SEO audit", table: 1 },
        { title: "Keyword Research", detail: "Targeting high-volume, low-KD keywords", table: 1 },
        { title: "Mobile Optimization", detail: "Responsive design for all devices", table: 2 },
        { title: "Basic Conversion Tracking", detail: "Google Analytics & Tag setup", table: 2 },
        { title: "Meta Tag Optimization", detail: "SEO title, description, and schema", table: 3 },
        { title: "Monthly Performance Report", detail: "Traffic & ranking insights", table: 4 },
      ],
      featured: false,
    },
    {
      name: "Growth SEO Landing Page Package",
      features: [
        { title: "Advanced SEO Strategy", detail: "Competitor & keyword gap analysis", table: 1 },
        { title: "Conversion Rate Optimization", detail: "A/B testing & funnel improvements", table: 1 },
        { title: "Local SEO Landing Pages", detail: "Area-wise targeting for local rankings", table: 2 },
        { title: "Speed Optimization", detail: "Fast-loading, Core Web Vitals compliance", table: 2 },
        { title: "Heatmap & Analytics", detail: "User behavior tracking", table: 3 },
        { title: "Bi-weekly Optimization", detail: "Continuous improvements", table: 4 },
      ],
      featured: true,
    },
    {
      name: "Enterprise SEO Landing Page Package",
      features: [
        { title: "Full Funnel Optimization", detail: "End-to-end conversion strategy", table: 1 },
        { title: "AI-Powered Personalization", detail: "Dynamic content for higher engagement", table: 1 },
        { title: "Omnichannel Integration", detail: "Cross-platform SEO & analytics", table: 2 },
        { title: "Dedicated SEO Team", detail: "Expert support for your business", table: 2 },
        { title: "Predictive Analytics", detail: "AI-driven performance forecasting", table: 3 },
        { title: "Real-time Optimization", detail: "Continuous monitoring & updates", table: 4 },
      ],
      featured: false,
    },
    {
      name: "Custom SEO Landing Page Package",
      features: [
        { title: "Tailored SEO Strategy", detail: "Custom keyword & content plan", table: 1 },
        { title: "Advanced AI Integration", detail: "Machine learning for SEO", table: 1 },
        { title: "Full Conversion Optimization", detail: "End-to-end improvements", table: 2 },
        { title: "Enterprise-grade Testing", detail: "A/B & multivariate testing", table: 2 },
        { title: "Behavioral Analytics", detail: "In-depth user insights", table: 3 },
        { title: "24/7 SEO Support", detail: "Continuous monitoring & reporting", table: 4 },
      ],
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>{SEO_TITLE}</title>
        <meta name="description" content={SEO_DESCRIPTION} />
        <meta name="keywords" content={SEO_KEYWORDS} />
        <meta property="og:title" content={SEO_TITLE} />
        <meta property="og:description" content={SEO_DESCRIPTION} />
        <meta property="og:url" content={SEO_URL} />
        <meta property="og:image" content={SEO_IMAGE} />
        <meta name="twitter:title" content={SEO_TITLE} />
        <meta name="twitter:description" content={SEO_DESCRIPTION} />
        <meta name="twitter:image" content={SEO_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={SEO_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Landing Page Optimization Services",
              url: SEO_URL,
              image: SEO_IMAGE,
              description: SEO_DESCRIPTION,
              provider: {
                "@type": "Organization",
                name: "Forwardsols",
                url: "https://forwardsols.com",
                logo: "https://forwardsols.com/logo.png",
              },
              areaServed: "Global",
              keywords: SEO_KEYWORDS,
            }),
          }}
        />
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
              Landing Page <br /> Optimization Services
            </h1>
            <h2 className="text-white text-center text-2xl max-sm:text-lg font-semibold z-10 mt-4">
              High-Converting, SEO-Optimized Landing Pages for Fast Google Rankings
            </h2>
          </div>
        </div>

        {/* ----------------------------- Section 2: SEO Content ----------------------------- */}
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
                SEO Landing Page Optimization for Fast Google Rankings
              </h1>
              <p className="mb-8 leading-relaxed">
                At <strong>Forwardsols.com</strong>, we specialize in <strong>landing page optimization</strong> that delivers rapid results. Our SEO-optimized landing pages are designed to rank quickly for <strong>high-volume, low-difficulty keywords</strong>, driving targeted traffic and boosting your conversion rates. Whether you need a <strong>lead generation landing page</strong> or want to improve your <strong>conversion rate optimization</strong>, our expert team ensures your business stands out in search results and turns visitors into customers.
              </p>
              <div className="flex justify-center ">
                <Link href={`/contact`}>
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Get a Free SEO Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 3: Fast Results ----------------------------- */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 max-sm:py-10   md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Rank 3x Faster with SEO-Optimized Landing Pages
              </h1>
              <p className="mb-8 leading-relaxed">
                Our proven strategies place your business on <strong>pre-ranked domains</strong> and leverage <strong>custom SEO content</strong> to achieve <strong>3x faster results</strong> than traditional websites. With <strong>Forwardsols.com</strong>, you benefit from <strong>fast ranking landing pages</strong> that drive traffic, improve your Google search position, and maximize your ROI.
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

        {/* ----------------------------- Section 4: Core SEO Services ----------------------------- */}
        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Our SEO Landing Page Services
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap  justify-center items-center gap-5 z-10">
                {SEOTpyes?.map((card, index) => (
                  <div key={index} className="text-left text-white border border-white rounded-xl px-8 py-8 lg:w-[30%] md:w-[40%] max-sm:w-[90%] transition-all duration-500 ease-in-out hover:bg-[#510ADD] hover:rotate-3 hover:scale-105 cursor-pointer">
                    <h2 className="text-3xl font-bold mb-3">{card.title}</h2>
                    <p className="text-base font-medium">{card.dis}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 5: Placement Strategy ----------------------------- */}
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
                Increase Your Google Placement with SEO Landing Pages
              </h2>
              <div>
                <p className="mb-1 leading-relaxed">
                  Our <strong>Landing Page Optimization</strong> service is engineered to boost your <strong>search engine placement</strong> and online visibility. We create <strong>SEO-friendly landing pages</strong> with targeted keywords, compelling content, and ongoing optimization—ensuring your business ranks higher and attracts more qualified leads.
                </p>
              </div>
              <Link href={`/contact`}>
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book a Free Demo
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------- Section 6: SEO Packages ----------------------------- */}
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

        {/* ----------------------------- Section 7: SEO FAQs ----------------------------- */}
        <section className="w-full h-fullpx-4 py-4 text-white">
          <h1 className="text-white font-bold text-center text-4xl max-sm:text-3xl mt-8 ">
            Landing Page Optimization FAQs
          </h1>
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
