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



  

  const FAQS = [
    {
      "title": "What Exactly Is Landing Page Optimization?",
      "dis": "Landing page optimization (LPO) is the science of maximizing conversions by strategically refining every element of your landing page. Our proven 12-point optimization framework includes:Conversion-Centered Design (Eye-tracking heatmap analysis) AI-Powered A/B Testing (Multivariate headline/CTA tests)- Technical SEO Alignment (Schema markup, Core Web Vitals)- Psychological Triggers (Social proof, urgency elements)We've achieved 217% average conversion lifts for clients across industries.",
      "schema": {
        "@type": "Question",
        "name": "What Exactly Is Landing Page Optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Landing page optimization (LPO) is the science of maximizing conversions by strategically refining every element of your landing page..."
        }
      }
    },
    {
      "title": "Why Does Landing Page Optimization Directly Impact Revenue?",
      "dis": "Consider these statistics from our client portfolio:💰 72% higher conversion rates for optimized pages (HubSpot data)🚀 50% lower customer acquisition costs (Google Ads benchmarks)📈 3.2x more qualified leads compared to unoptimized pagesOptimization transforms your landing page from a digital brochure into your 24/7 sales machine that:- Pre-qualifies visitors- Nurtures leads automatically<br- Captures high-intent data",
      "schema": {
        "@type": "Question",
        "name": "Why Does Landing Page Optimization Directly Impact Revenue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider these statistics from our client portfolio..."
        }
      }
    },
    {
      "title": "How Does LPO Boost Our SEO Performance?",
      "dis": "Google rewards optimized landing pages with:🔍 Higher Rankings: Our LPO checklist improves:- Keyword-to-content relevance scores (+83%)- Dwell time metrics (avg. +2.7 minutes)- Mobile-first indexing compliance📊 Rich Snippets: We implement FAQ/HowTo schema markup that:- Increases CTR by 35% (Search Console data)- Dominates voice search resultsExample: Client 'XYZ' achieved page 1 rankings for 17 keywords in 42 days.",
      "schema": {
        "@type": "Question",
        "name": "How Does LPO Boost Our SEO Performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google rewards optimized landing pages with..."
        }
      }
    },
    {
      "title": "When Will We See Measurable LPO Results?",
      "dis": "Our performance timeline based on 137 client campaigns:⏱️ First 7 Days:- Technical SEO fixes complete- Initial conversion baseline established📅 Weeks 2-4:- A/B test winners identified- 15-28% conversion improvements🗓️ Month 2+:- Fully optimized page delivering 40-75% better results<em>Note:</em> Enterprise/competitive niches may require 3-6 months for maximum impact.",
      "schema": {
        "@type": "Question",
        "name": "When Will We See Measurable LPO Results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our performance timeline based on 137 client campaigns..."
        }
      }
    },
    {
      "title": "What's Included in Your LPO Process?",
      "dis": "Our 360° Optimization Blueprint covers:1. Conversion Audit ($2,500 value)- Identify leaks in your funnel- Heatmap/scrollmap analysis2. Technical Overhaul- Page speed optimization (90+ PSI scores)- Mobile responsiveness fixes3. Persuasive Redesign- Benefit-focused copywriting- Strategic CTA placement4. Ongoing Testing- Monthly conversion rate optimization- AI-driven personalization",
      "schema": {
        "@type": "Question",
        "name": "What's Included in Your LPO Process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 360° Optimization Blueprint covers..."
        }
      }
    }
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
              Have Questions
            </h1>
           
          </div>
        </div>

        {/* --------------------------------  { Section 2 }  ------------------------------------------ */}



        {/* --------------------------------  { Section 3 }  ------------------------------------------ */}





        <section className="w-full min-h-screen flex max-sm:flex-col justify-center max-sm:gap-4 px-4 py-4 text-white">
          <div className="w-full max-w-4xl px-8 space-y-4">
            <h1 className="text-white text-5xl max-sm:text-2xl">General Questions</h1>
            <p className="text-2xl max-sm:text-base text-white">
              If you have questions, we have answers for you here. In case we don't, please feel  free to reach out to us here 
              <span className="font-semibold text-white"> awaissheikh480@gmail.com</span> 
            </p>
          </div>
          <div className="w-full max-w-4xl px-4">
            {FAQS?.map((card, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full space-y-4"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-white text-xl md:text-2xl max-sm:text-base hover:no-underline bg-black/80 px-8  hover:text-pink-800 cursor-pointer mb-4">
                    {card.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-white/90 md:text-lg">
                    {card.dis}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>


        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
