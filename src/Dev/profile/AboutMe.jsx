"use client";

import React, { useState } from "react";
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaJava, FaSwift } from "react-icons/fa";
import { IoLogoJavascript, IoLogoAndroid } from "react-icons/io";
import { SiTypescript, SiMongodb, SiFirebase, SiKotlin, SiFlutter, SiDesignernews, SiVorondesign, SiPeakdesign, SiCodesignal, SiAntdesign, SiAdobeindesign    } from "react-icons/si";
import { TbBrandReactNative, TbWorldCog } from "react-icons/tb";
import { BiLogo99Designs } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";
import { DraftingCompass } from "lucide-react";

export default function AboutMe() {
  const about = [
    {
      experience: "10+ Years",
      work: [
        "Fullstack Web Mentor",
        "Sr. Software Engineer",
        "Hiring Resource",
        "JavaScript",
        "PHP",
      ],
      description: `
  Hi, I’m Awais Sheikh, a Full-Stack Web Developer and the CEO & Founder at Forward Solutions, a USA-based digital tech agency. At Forward Solutions, we specialize in delivering innovative software development solutions to both national and international clients, ensuring high-quality results tailored to meet diverse business needs.
  
  With over 10+ years of experience in web development, I’ve worked with 300+ clients, and have trained nearly 10,000 students in web technologies.
  
  As a Full-Stack Web Trainer and Consultant, I’m passionate about empowering the next generation of developers with the skills and confidence they need to succeed. My expertise spans all major web development languages, making me a trusted resource for comprehensive software solutions and expert training.`,
    },
  ];
  const services = [
    {
      icon: "��",
      name: "web Design",
      description:
        "Crafting visually stunning, responsive, and user-centric websites by leveraging cutting-edge technologies such as React, Vue.js, and Angular. We specialize in delivering seamless and engaging user experiences with modern design practices and robust front-end frameworks.",
    },
    {
      icon: "��",
      name: "Web Development",
      description:
        "I am an expert in Web technologies, specializing in building robust, secure, and scalable server-side architectures. With proficiency in frameworks like Node.js, Express, Django, and Laravel, as well as database systems such as MySQL, PostgreSQL, and **MongoDB**, I ensure seamless integration, optimized performance, and secure data management to power modern web and mobile applications. My solutions are designed to meet the demands of high-traffic applications while maintaining reliability and efficiency.",
    },
    {
      icon: "��",
      name: "Digital Marketing",
      description:
        "My team are digital marketing expert specializing in creating data-driven strategies that amplify brand visibility, engage target audiences, and drive measurable results. With expertise in SEO, PPC advertising, social media marketing, email campaigns, and content marketing, I help businesses achieve their growth objectives. By leveraging analytics, market trends, and innovative tools, I deliver personalized solutions that maximize ROI and establish a strong online presence for your brand.",
    },
    {
      icon: "��",
      name: "AI",
      description:
        "I am an AI technologies expert with a strong focus on developing intelligent, data-driven solutions that transform business operations and user experiences. My expertise spans machine learning, deep learning, natural language processing (NLP), computer vision, and AI-driven automation. Utilizing cutting-edge tools and frameworks like TensorFlow, PyTorch, and OpenAI APIs, I design and implement AI models tailored to solve complex problems, optimize workflows, and unlock new opportunities for innovation and growth.",
    },
    {
      icon: "��",
      name: "E-commerce",
      description:
        "I specialize in e-commerce technologies, crafting tailored solutions to empower online businesses with seamless, secure, and engaging platforms. With expertise in leading tools and frameworks like Shopify, WooCommerce, Magento, and custom-built solutions using React, Node.js, and Laravel, I create user-friendly online stores designed to enhance customer experience and drive sales. My focus is on integrating advanced features like secure payment gateways, inventory management, and marketing automation to deliver scalable, high-performance e-commerce solutions that fuel business growth.",
    },
  ];

  const Works = [
    {
      name: "Development",
      technologies: [
        { name: "React", logo: <FaReact /> },
        { name: "Vue", logo: <FaVuejs /> },
        { name: "Angular", logo: <FaAngular /> },
        { name: "JavaScript", logo: <IoLogoJavascript /> },
        { name: "TypeScript", logo: <SiTypescript /> },
        { name: "Node.js", logo: <FaNodeJs  /> },
        { name: "MongoDB", logo: <SiMongodb  /> },
        { name: "Firebase", logo: <SiFirebase  /> },
      ],
    },
    {
      name: "Mobile Dev",
      technologies: [
        { name: "Hybrid/Native app", logo: <TbBrandReactNative /> },
        { name: "Java", logo: <FaJava  /> },
        { name: "Kotline", logo: <SiKotlin  /> },
        { name: "Swift", logo: <FaSwift  /> },
        { name: "React Native", logo: <TbBrandReactNative /> },
        { name: "Android", logo: <IoLogoAndroid  /> },
        { name: "Flutter", logo: <SiFlutter  /> },
        { name: "Web app", logo: <TbWorldCog  /> },
      ],
    },
    {
      name: "Designing",
      technologies: [
        { name: "UI/UX", logo: <DraftingCompass /> },
        { name: "Prototype", logo: <BiLogo99Designs /> },
        { name: "Logo", logo: <SiVorondesign /> },
        { name: "Letterhead", logo: <SiPeakdesign /> },
        { name: "T-Shirt/Uniform", logo: <SiCodesignal  /> },
        { name: "Business Card", logo: <SiAntdesign /> },
        { name: "Mug/Clock/File", logo: <MdDesignServices /> },
        { name: "Shopping bag", logo: <SiAdobeindesign /> },
      ],
    },
  ];
  

  const overviews = [
    {
      number: "836",
      title: "Projects Completed",
    },
    {
      number: "794",
      title: "Satisfied Clients",
    },
    {
      number: "357",
      title: "Awards Won",
    },
  ];

  const clients = [
    {
      siteHref: "#",
      href: "https://cdn1.thecomeback.com/wp-content/uploads/2017/01/cropped-come-back-logo-e1481559564785.png",
      alt: "dataiku",
    },
    {
      siteHref: "#",
      href: "https://www.gritz.it/wp-content/uploads/2017/09/logo-x2.png",
      alt: "gritz",
    },
    {
      siteHref: "#",
      href: "https://cdn1.thecomeback.com/wp-content/uploads/2017/01/cropped-come-back-logo-e1481559564785.png",
      alt: "dataiku",
    },
    {
      siteHref: "#",
      href: "https://www.gritz.it/wp-content/uploads/2017/09/logo-x2.png",
      alt: "gritz",
    },
    {
      siteHref: "#",
      href: "https://cdn1.thecomeback.com/wp-content/uploads/2017/01/cropped-come-back-logo-e1481559564785.png",
      alt: "dataiku",
    },
    {
      siteHref: "#",
      href: "https://www.gritz.it/wp-content/uploads/2017/09/logo-x2.png",
      alt: "gritz",
    },
    {
      siteHref: "#",
      href: "https://www.gritz.it/wp-content/uploads/2017/09/logo-x2.png",
      alt: "gritz",
    },
  ];

  const [open, setOpen] = useState(null);

  const toggleAccordion = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      <div className="custom-md:hidden flex justify-center mb-5">
        <div
          className=" overflow-hidden h-[320px] w-[320px] bg-top"
          style={{
            backgroundImage: "url('/awaisSheikh.png')",
          }}
        ></div>
      </div>
      <h1 className="font-bold">ABOUT ME</h1>
      <div>
        {about.map((aboutMe, index) => (
          <div key={index}>
            {/* Experience and Work */}
            <div className="italic text-[#00a5f8] font-bold text-lg tracking-wider">
              <span className="mr-3">{aboutMe.experience}</span>
              <span className="mr-3 text-[#888888]">/</span>
              {aboutMe.work.map((work, workIndex) => (
                <React.Fragment key={workIndex}>
                  {workIndex !== 0 && (
                    <span className="mr-3 text-[#888888]">/</span>
                  )}
                  <span className="mr-3">{work}</span>
                </React.Fragment>
              ))}
            </div>

            {/* Description */}
            <div className="py-4 border-b border-[#888888]">
              {aboutMe.description
                .split("\n")
                .filter((line) => line.trim() !== "") // Remove empty lines caused by \n\n
                .map((line, lineIndex) => (
                  <p key={lineIndex} className="text-justify mb-4">
                    {line.trim()}
                  </p>
                ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className="my-4">Services</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 border-b border-[#888888]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`
            ${index === 2 ? "sm:-mt-40" : ""}  
            ${index === 3 ? "mt-2" : ""}  
            ${index === 4 ? "sm:-mt-40" : ""}  
            ${index === 5 ? "mt-2" : ""}  
            ${index === 6 ? "sm:-mt-40" : ""}  
            ${index === 7 ? "mt-2" : ""}  
          `}
          >
            <div className="text-[#00a5f8] mb-2">{service.icon}</div>
            <h5 className="font-extrabold">{service.name}</h5>
            <p className="md:text-justify">{service.description}</p>
          </div>
        ))}
      </div>
      <h1 className="my-4">Technologies</h1>
      <div className="hidden md:grid md:grid-cols-3 grid-cols-2 md:gap-4 md:pb-4 md:border-b md:border-[#888888]">
        {Works.map((work, index) => (
          <ul key={index} className="text-start">
            <h5 className="font-extrabold sm:pl-2 pl-5">{work.name}</h5>
            <ul className="">
              {work.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="flex gap-2 items-center mb-2">
                  <span>{tech.logo}</span>
                  <span className="text-xs">{tech.name}</span>
                </li>
              ))}
            </ul>
          </ul>
        ))}
      </div>

      <div className="md:hidden block pb-4 border-b border-[#888888]">
        {Works.map((work, index) => (
          <div key={index} className="pb-2 ">
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center cursor-pointer text-white"
              onClick={() => toggleAccordion(index)}
            >
              <h5 className="font-bold sm:pl-2 pl-5">{work.name}</h5>
              <span>{open === index ? "-" : "+"}</span>
            </div>
            {/* Accordion Content */}
            {open === index && (
              <ul className="mt-2 pl-5 text-slate-50">
                {work.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="pl-5 flex gap-2 items-center mb-2">
                    <span> {tech.logo} </span>
                    <span className="text-xs">{tech.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <h1 className="my-4">Achivements</h1>
      <div className="flex gap-5 sm:flex-row flex-col pb-4 justify-evenly">
        {overviews.map((overview, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-justify font-bold text-[#00a5f8]">
              {overview.number}+
            </h2>
            <span className="font-extrabold">{overview.title}</span>
          </div>
        ))}
      </div>

      {/* <h1 className="my-4">Top Clients</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 pb-4">
        {clients.map((client, index) => (
          <div key={index}>
            <a href={client.siteHref}>
              <img src={client.href} alt={client.alt} className="grayscale" />
            </a>
          </div>
        ))}
      </div> */}
    </>
  );
}
