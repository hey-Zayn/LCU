"use client";

import React, { useEffect, useRef } from "react";
import Head from "next/head";
import BusinessOperations from "@/Dev//Components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ServiceForm from "@/Dev//Components/ServiceForm";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

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

  return (
    <>
      <Head>
        <title>Amazon SEO Services | Amazon Listing Optimization & PPC Management</title>
        <meta
          name="description"
          content="Boost your Amazon sales with ForwardSols' top-rated Amazon SEO services. We offer Amazon listing optimization, keyword research, PPC management, and full-service Amazon marketing to maximize your product visibility and conversions. Start dominating Amazon today!"
        />
        <meta
          name="keywords"
          content="Amazon SEO, Amazon SEO services, Amazon listing optimization, Amazon PPC management, Amazon product ranking, Amazon keyword research, Amazon marketing agency, Amazon advertising, Amazon product optimization, Amazon SEO expert, Amazon A+ Content, Amazon Enhanced Brand Content, Amazon FBA SEO, Amazon sales growth, Amazon organic ranking"
        />
        <meta property="og:title" content="Amazon SEO Services | Amazon Listing Optimization & PPC Management" />
        <meta property="og:description" content="ForwardSols is your trusted Amazon SEO agency. We help you rank higher, sell more, and grow your brand on Amazon with proven SEO, listing optimization, and PPC strategies." />
        <meta property="og:url" content="https://www.forwardsols.com/seo-amazon" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.forwardsols.com/seo-amazon" />
      </Head>
      <div ref={sectionRef} className="w-full h-full">
        {/* ------------------------------ Amazon SEO Hero Section ------------------------------ */}
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
              Amazon SEO Services 
            </h1>
            
          </div>
        </div>

        {/* ------------------------------ Amazon SEO Service Overview ------------------------------ */}
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
              <h2
                // ref={headingRef}
                className="max-sm:text-2xl text-3xl mb-4 font-bold text-white"
              >
                #1 Amazon SEO Agency for Product Ranking & Sales Growth
              </h2>
              <p  className="mb-8 leading-relaxed">
                ForwardSols is a leading Amazon SEO agency dedicated to helping brands and sellers achieve top rankings and explosive sales growth on Amazon. Our Amazon SEO services include advanced keyword research, product listing optimization, Amazon PPC management, and A+ Content creation. We use proven, data-driven strategies to increase your organic visibility, drive targeted traffic, and maximize your conversions on Amazon Marketplace.
                <br /><br />
                Whether you’re launching a new product or scaling an established brand, our Amazon SEO experts will craft a custom strategy to outrank your competitors and dominate your niche. Partner with ForwardSols and unlock your full Amazon potential.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button
                    // ref={ctaRef}
                    className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Request Amazon SEO Proposal
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------ Why Choose ForwardSols for Amazon SEO ------------------------------ */}
        <section className="w-full text-white body-font">
          <div className="container mx-auto flex max-sm:flex-col-reverse gap-10 max-sm:gap-10 px-5 max-sm:px-2 py-15 max-sm:py-10 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
              <h2 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
                Why ForwardSols is the Best Amazon SEO Company
              </h2>
              <p className="mb-8 leading-relaxed">
                <strong>ForwardSols</strong> delivers measurable results with our full-service Amazon SEO solutions. We specialize in:
                <ul className="list-disc pl-5 mt-2 mb-2">
                  <li>Amazon product listing optimization for higher rankings</li>
                  <li>High-volume, low-competition Amazon keyword research</li>
                  <li>Amazon PPC campaign management for maximum ROI</li>
                  <li>Amazon A+ Content and Enhanced Brand Content creation</li>
                  <li>Competitor analysis and review optimization</li>
                  <li>Amazon FBA SEO and inventory management</li>
                  <li>Conversion rate optimization for Amazon product pages</li>
                </ul>
                Our Amazon SEO experts use the latest tools and strategies to ensure your products stand out, attract more buyers, and convert at a higher rate. Let us help you achieve sustainable growth and long-term success on Amazon.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                    Start Ranking Higher on Amazon
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

        {/* ------------------------------ Amazon SEO Process Section ------------------------------ */}
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
                Our Proven Amazon SEO Process
              </h2>
              <div>
                <ol className="list-decimal pl-5 mb-2">
                  <li>
                    <strong>Amazon Keyword Research:</strong> We identify high-volume, low-competition keywords to target for your products.
                  </li>
                  <li>
                    <strong>Product Listing Optimization:</strong> We optimize your titles, bullet points, descriptions, and backend search terms for maximum visibility and conversions.
                  </li>
                  <li>
                    <strong>Amazon PPC Management:</strong> Our team manages your Sponsored Products and Sponsored Brands campaigns to drive targeted traffic and boost sales.
                  </li>
                  <li>
                    <strong>Competitor Analysis:</strong> We analyze your top competitors to uncover new opportunities and stay ahead in your niche.
                  </li>
                  <li>
                    <strong>Review & Reputation Management:</strong> We help you earn more positive reviews and build trust with buyers.
                  </li>
                  <li>
                    <strong>Performance Tracking & Reporting:</strong> Get detailed analytics and transparent reporting on your Amazon SEO progress.
                  </li>
                </ol>
                <p className="mb-1 leading-relaxed">
                  Ready to grow your Amazon business? Let ForwardSols be your partner for Amazon SEO success.
                </p>
              </div>
              <Link href="/contact">
                <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300 mt-2">
                  Book Your Free Consultation
                </button>
              </Link>
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
