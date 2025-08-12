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
    title: "Organizational Change Strategy Development",
    dis: "We create comprehensive change management strategies tailored to your organization's unique needs, ensuring alignment with business objectives and smooth implementation of transformational initiatives.",
  },
  {
    title: "Change Impact Assessment & Readiness Analysis",
    dis: "Our experts conduct thorough assessments to understand the potential impacts of change, evaluate organizational readiness, and identify key areas that require attention for successful transformation.",
  },
  {
    title: "Stakeholder Engagement & Communication Planning",
    dis: "We develop targeted communication strategies to engage stakeholders at all levels, ensuring buy-in and maintaining transparency throughout the change process.",
  },
  {
    title: "Change Leadership & Coaching",
    dis: "Our team provides leadership coaching to equip your executives and managers with the skills needed to drive and sustain organizational change effectively.",
  },
  {
    title: "Change Management Training & Capability Building",
    dis: "We design and deliver customized training programs to build change management capabilities across your organization, empowering your workforce to adapt to new processes and systems.",
  },
  {
    title: "Resistance Management & Cultural Transformation",
    dis: "Our specialists help identify and address resistance to change, while fostering a culture that embraces continuous improvement and innovation.",
  },
  {
    title: "Post-Implementation Support & Sustainability Planning",
    dis: "We provide ongoing support after implementation to ensure changes are fully adopted and sustained, with measurable improvements in organizational performance.",
  },
];

const FAQS = [
  {
    title: "What is change management and why is it important?",
    dis: "Change management is a structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state. It's crucial for minimizing disruption, maintaining productivity, and ensuring successful implementation of organizational changes.",
  },
  {
    title: "How do you measure the success of change management?",
    dis: "We measure success through key performance indicators such as employee adoption rates, project implementation timelines, business process efficiency improvements, and achievement of strategic objectives.",
  },
  {
    title: "What are the common challenges in change management?",
    dis: "Common challenges include resistance to change, lack of leadership support, inadequate communication, insufficient training, and failure to address cultural aspects of the organization.",
  },
  {
    title: "How long does a typical change management process take?",
    dis: "The duration varies depending on the scope and complexity of the change, but most organizational transformations require a sustained effort over several months to ensure successful adoption and integration.",
  },
];

const packages = [
  {
    name: "Change Assessment & Planning",
    features: [
      { title: "Change Impact Analysis", detail: "Detailed evaluation of how changes will affect different departments and processes" },
      { title: "Readiness Assessment", detail: "Comprehensive evaluation of organizational preparedness for change" },
      { title: "Risk Identification", detail: "Identification of potential risks and mitigation strategies" },
      { title: "Change Roadmap Development", detail: "Creation of a detailed implementation timeline and milestones" },
    ],
    featured: false,
  },
  {
    name: "Stakeholder Engagement",
    features: [
      { title: "Stakeholder Mapping", detail: "Identification and categorization of all key stakeholders" },
      { title: "Communication Strategy", detail: "Development of tailored messaging for different stakeholder groups" },
      { title: "Change Champions Program", detail: "Establishment of internal advocates to drive change adoption" },
      { title: "Feedback Mechanisms", detail: "Implementation of systems to gather and address stakeholder concerns" },
    ],
    featured: false,
  },
  {
    name: "Implementation & Training",
    features: [
      { title: "Change Management Toolkit", detail: "Provision of resources and templates for change implementation" },
      { title: "Leadership Coaching", detail: "One-on-one sessions to equip leaders with change management skills" },
      { title: "Employee Training Programs", detail: "Customized workshops to prepare staff for new processes" },
      { title: "Resistance Management", detail: "Strategies to address and overcome organizational resistance" },
    ],
    featured: true,
  },
  {
    name: "Sustainment & Optimization",
    features: [
      { title: "Post-Implementation Review", detail: "Evaluation of change outcomes and lessons learned" },
      { title: "Sustainability Planning", detail: "Development of long-term strategies to maintain changes" },
      { title: "Continuous Improvement", detail: "Implementation of feedback loops for ongoing optimization" },
      { title: "Change Metrics Dashboard", detail: "Tracking and reporting system to monitor change success" },
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
             Change Management
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
              Is your organization prepared for successful change management?
              </h1>
              <p className="mb-8 leading-relaxed">
              In today's rapidly evolving business landscape, effective change management is crucial for maintaining competitive advantage. Our experts specialize in guiding organizations through complex transformations, ensuring smooth transitions and sustainable growth. We understand the challenges of implementing change while maintaining operational efficiency and employee engagement. With our proven methodologies and strategic approach, we help you navigate change with confidence and achieve your organizational goals.
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
              Transform Your Organization with Expert Change Management
              </h1>
              <p className="mb-8 leading-relaxed">
              Is your organization ready to embrace change effectively? Our change management experts will guide you through every step of the transformation process, ensuring smooth transitions and sustainable growth. We help you navigate organizational changes while maintaining productivity and employee engagement.
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
            Our Core Services
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
              When to Consider Change Management?
              </h1>
              <div>
                <p className="mb-1 leading-relaxed">
              If your organization is facing significant transitions, implementing new strategies, or undergoing structural changes, our change management expertise is here to guide you. We specialize in helping businesses navigate complex transformations while maintaining productivity and employee engagement. In today's rapidly evolving business landscape, effective change management isn't just beneficial - it's essential for ensuring successful implementation and long-term organizational success.
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
