"use client";
import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { RiContactsLine, RiGlasses2Line } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import {
  IoCloudDownloadOutline,
  IoBriefcaseSharp,
  IoChatbubbleOutline,
  IoMailOpenOutline,
} from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import "./portfolio.scss";
import guides from "./guides";
import Link from "next/link";
import AboutMe from "@/Dev/profile/AboutMe";
import MyWork from "@/Dev/profile/MyWork";
import Resume from "@/Dev/profile/Resume";
import ContactMe from "@/Dev/profile/ContactMe";
import Myblogprojectdetail from "@/Dev/profile/Myblogprojectdetail";
import Home from "@/Dev/profile/MyBlog";
import ReviewsPage from "@/Dev/profile/PortfolioReviews";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <div className="line"></div>
      <div className="animate-pulse text-4xl font-bold my-2">AWAIS SHEIKH</div>
      <div className="line"></div>
    </div>
  );
}

export default function Page({ initialSection, initialBlog }) {
  const [activeSection, setActiveSection] = useState(initialSection);
  console.log("Initial Section:", initialSection);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(initialBlog);
  const [isShaking, setIsShaking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [emailLink, setEmailLink] = useState("");

  const handleGuideClick = (title) => {
    const selectedGuide = guides.find((guide) => guide.title === title);
    setSelectedBlog(selectedGuide);
    setActiveSection("MY_BLOG");

    const slug = title.replace(/\s+/g, "-").toLowerCase();
    window.history.pushState(null, "", `/AwaisSheikh/blog/${slug}`);
  };

  useEffect(() => {
    console.log("Active Section:", activeSection);
  }, [activeSection]);

  const handleBackClick = () => {
    setSelectedBlog(null);
    playBeep();
    window.history.pushState(null, "", `/AwaisSheikh/my-blog`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Check if mobile device
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);

    const emailLink = isMobileDevice
      ? "mailto:awaissheikh480@gmail.com"
      : "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=awaissheikh480@gmail.com";

    setEmailLink(emailLink);

    return () => clearTimeout(timer);
  }, []);

  const playBeep = () => {
    const beep = new Audio("/onclick.mp3");
    beep.play();
  };

  const handleSectionClick = (section) => {
    setAnimate(true);
    setTimeout(() => {
      setActiveSection(section);
      playBeep();
      setAnimate(false);
      const slug = section.toLowerCase().replace("_", "-");
      window.history.pushState(null, "", `/AwaisSheikh/${slug}`);
    }, 1000);
  };

  const handleClick = () => {
    setRotated(!rotated);
    playBeep();
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    playBeep();
    setShow(false);
  };
  const handleShow = () => {
    playBeep();
    setShow(true);
  };

  useEffect(() => {
    if (rotated) return;
    const interval = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [rotated]);

  if (loading) {
    return <LoadingScreen />;
  }

  const sections = [
    { name: "ABOUT_ME", icon: <RiContactsLine />, label: "About" },
    { name: "MY_WORK", icon: <IoBriefcaseSharp />, label: "Work" },
    { name: "RESUME", icon: <RiGlasses2Line />, label: "Resume" },
    { name: "CONTACT_ME", icon: <IoChatbubbleOutline />, label: "Contact" },
    { name: "MY_BLOG", icon: <TfiWrite />, label: "Blog" },
    { name: "REVIEWS", icon: <MdOutlineReviews />, label: "Reviews" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "ABOUT_ME":
        return <AboutMe />;
      case "MY_WORK":
        return <MyWork />;
      case "RESUME":
        return <Resume />;
      case "CONTACT_ME":
        return <ContactMe />;
      case "MY_BLOG":
        return selectedBlog ? (
          <Myblogprojectdetail blog={selectedBlog} onBack={handleBackClick} />
        ) : (
          <Home />
        );
      case "REVIEWS":
        return <ReviewsPage />;
      default:
        return <AboutMe />;
    }
  };

  const iconData = [
    {
      id: 1,
      iconText: "Email Me 📩",
      icon: <IoMailOpenOutline />,
      link: emailLink,
    },
    {
      id: 2,
      iconText: "Let's Chat on LinkedIn 💬",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/awais-yousaf-sheikh/",
    },
    {
      id: 3,
      iconText: "Let's Chat on Whatspp ❤️",
      icon: <FaWhatsapp />,
      link: "https://wa.me/923218720063?text=Hi Awais Sheikh...",
    },
  ];

  return (
    <>
      <div className="w-screen h-screen bg-black text-white flex justify-center items-center relative overflow-hidden">
        <div className="m-auto lg:h-[80%] md:h-[80%] sm:h-[90%] w-full h-full flex items-center relative">
          {/* Sidebar */}
          <div className="flex flex-col items-center justify-between h-full bg-[#1C1E1F] z-10 border-r border-r-[#00a5f8] w-[80px] md:w-[100px]">
            <Link href="/" className="py-4">
              <img className="w-10 h-8" src="/favicon.png" alt="favicon" />
            </Link>
            
            <button
              className="bg-[#00a5f8] w-full py-4 flex justify-center items-center"
              onClick={handleShow}
            >
              <GiHamburgerMenu className="text-2xl hover:text-3xl text-gray-800 cursor-pointer transition-all duration-300" />
            </button>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="start"
              backdrop="static"
              className="bg-[#1C1E1F] text-white w-[280px] max-w-full fixed top-0 left-0 h-full z-50"
            >
              <Offcanvas.Header className="border-b border-[#00a5f8] flex justify-between items-center mx-10">
                <Offcanvas.Title className="text-white font-bold">
                  <Link href={'/AwaisSheikh'}><span className="text-[#00a5f8]">Awais Sheikh</span></Link>
                </Offcanvas.Title>
                <button
                  type="button"
                  className="text-white text-2xl focus:outline-none"
                  onClick={handleClose}
                  aria-label="Close"
                >
                  &times;
                </button>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-3 text-[#00a5f8]">Recent Blog Posts</h2>
                  <div className="space-y-2">
                    {guides.map((guide, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          handleGuideClick(guide.title);
                          handleClose();
                        }}
                        className="cursor-pointer hover:bg-[#2a2d2e] p-2 rounded transition-colors"
                      >
                        <div className="text-slate-50 hover:text-[#00a5f8] transition-all duration-300">
                          {guide.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            <div className="flex flex-col justify-center gap-6 h-full w-full">
              {sections.map((section) => (
                <div 
                  key={section.name}
                  className={`flex flex-col items-center justify-center w-full py-2 cursor-pointer transition-all duration-300 ${
                    activeSection === section.name
                      ? "bg-[#00a5f8] text-gray-800"
                      : "hover:bg-[#2a2d2e] text-[#888888]"
                  }`}
                  onClick={() => handleSectionClick(section.name)}
                >
                  <span className="text-2xl">
                    {section.icon}
                  </span>
                  <span className="text-xs mt-1 font-medium">
                    {section.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full py-4 flex justify-center">
              <a 
                href="AwaisSheikh.pdf" 
                download 
                onClick={playBeep}
                className="flex flex-col items-center"
              >
                <IoCloudDownloadOutline className="text-3xl text-[#00a5f8] cursor-pointer" />
                <span className="text-xs mt-1">Download CV</span>
              </a>
            </div>
          </div>

          {/* Profile Image - Hidden on mobile */}
          {!isMobile && (
            <div
              className="hidden md:block h-[530px] w-[400px] bg-cover bg-center relative image-container"
              style={{
                backgroundImage: "url('/awaisSheikh.png')",
              }}
            >
              <div className="absolute bottom-0 mb-10 w-full">
                <h2 className="text-center font-extrabold">AWAIS SHEIKH</h2>
                <p className="text-center text-[#00a5f8] font-bold px-4">
                  CEO & Founder At Forward Sols
                </p>
                <div className="flex justify-center items-center gap-3 mt-2">
                  {[
                    {
                      Icon: BsFacebook,
                      href: "https://www.facebook.com/AwaisSheikhofficial/",
                    },
                    {
                      Icon: BsInstagram,
                      href: "https://www.instagram.com/awaissheikhofficial",
                    },
                    {
                      Icon: FaLinkedin,
                      href: "https://www.linkedin.com/in/awaissheikhofficial/",
                    },
                    {
                      Icon: BsYoutube,
                      href: "https://www.youtube.com/@awaissheikhtech",
                    },
                    {
                      Icon: FaTiktok,
                      href: "https://www.tiktok.com/@awaissheikhtech",
                    },
                    {
                      Icon: FaWhatsapp,
                      href: "https://wa.me/923218720063?text=Hi Awais Sheikh...",
                    },
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      className="text-xl text-slate-100 hover:text-[#00a5f8] hover:rotate-[360deg] transition-all duration-300 ease-in-out"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playBeep}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div
            className={`content-section overflow-y-auto scrollbar-hide transition-transform duration-1000 ease-in-out bg-[#1C1E1F] w-full h-full ${
              animate ? "content-section-out" : "content-section-in"
            }`}
          >
            <div className="sticky-div bg-[#1C1E1F] w-full h-8 sticky top-0 z-10"></div>
            <div className="content-section-div">
              <div className="px-4 md:px-8 pt-4">{renderSection()}</div>
            </div>
            <div className="sticky-div-2 bg-[#1C1E1F] w-full h-8 sticky bottom-0 mt-2"></div>
          </div>
        </div>

        {/* Quick Chat Floating Button */}
        <div className="absolute bottom-5 right-5 z-10">
          <div>
            <div className="flex justify-end items-center">
              {rotated && (
                <div className="space-y-2">
                  {iconData.map(({ id, iconText, icon, link }) => (
                    <div key={id} className="flex items-center justify-end gap-2">
                      <div className="text-[#00a5f8] bg-[#404344] px-3 py-1 text-sm font-bold rounded-lg">
                        {iconText}
                      </div>
                      <a 
                        href={link} 
                        target={isMobile ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                      >
                        <div className="bg-[#00a5f8] rounded-full p-2 text-gray-800 hover:scale-110 transition-transform">
                          {icon}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div
              className={`flex items-center gap-1 
                ${isShaking ? "shake animate-pulse" : ""}
                ${isVisible ? "justify-center" : "justify-end"}
              `}
            >
              {isVisible && (
                <div className="text-[#00a5f8] bg-[#404344] px-3 py-1 text-sm font-bold rounded-lg">
                  Quick Chat or Send Email 😉
                </div>
              )}
              <div
                className={`text-4xl cursor-pointer pt-1 pb-2 text-gray-800 bg-[#00a5f8] flex justify-center items-center rounded-full px-[13px] transition-all duration-300 hover:scale-110 ${
                  rotated ? "rotate-45" : ""
                }`}
                onClick={handleClick}
              >
                <span className="cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}