"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Cursor_Connect_Now from "./Cursor_Connect_Now";

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, {
    margin: "-20% 0px", // triggers a bit before it's fully in view
    once: false,        // trigger every time it comes into view
  });

  const leftHandControls = useAnimation();
  const rightHandControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      const animateHands = async () => {
        // Slide in
        await Promise.all([
          leftHandControls.start({
            x: "0%",
            transition: { duration: 1, ease: "easeInOut" },
          }),
          rightHandControls.start({
            x: "0%",
            transition: { duration: 1, ease: "easeInOut" },
          }),
        ]);

        // Pause
        await new Promise((res) => setTimeout(res, 1000));

        // Slide out
        await Promise.all([
          leftHandControls.start({
            x: "-100%",
            transition: { duration: 1, ease: "easeInOut" },
          }),
          rightHandControls.start({
            x: "100%",
            transition: { duration: 1, ease: "easeInOut" },
          }),
        ]);
      };

      animateHands();
    }
  }, [isInView]);

  return (
    <div
      id="footer"
      ref={footerRef}
      className="footer relative w-full bg-black pt-20 max-sm:pt-10 overflow-hidden"
    >
      <div className="w-full flex items-center pl-30"></div>

      <div className="w-full">
        <img
          src="/dev/images/Let’sforward_logo_sols.svg"
          alt="Chat forward Logo"
          className="w-[93%] max-sm:w-[85%] max-sm:mx-7 mx-20 m-auto"
        />
      </div>

      <div className="w-full flex max-sm:flex-col justify-center items-center md:text-2xl gap-15 text-white py-12">
        {["Industries", "Locations", "Facebook", "Instagram", "Linkedin"].map(
          (text, i) => (
            <motion.div
              key={text}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={textVariants}
            >
              <p className="footer_animation_text">{text}</p>
            </motion.div>
          )
        )}
      </div>

      <footer className="w-full flex flex-wrap justify-between items-center px-4 sm:px-10 py-6 gap-4 sm:gap-0">
        <div className="w-full sm:w-auto text-center sm:text-left text-white order-1 sm:order-none">
          <p>© 2025 Forward Sols</p>
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-1 order-3 sm:order-none">
          <p className="text-white/50">Powered by:</p>
          <div className="flex flex-wrap text-sm justify-center sm:justify-start gap-1">
            <p className="text-white">forwardsols Developers</p>
            <span className="text-white/80"> Zain Butt</span>
          </div>
        </div>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-1 text-center sm:text-left text-white order-2 sm:order-none">
          <p>We also develop software:</p>
          <p className="font-semibold">www.forwardsols.com</p>
        </div>
      </footer>

      {/* Left Hand Animation */}
      <motion.img
        id="LeftHand"
        src="/dev/images/Handleft.avif"
        alt=""
        className="absolute max-sm:top-[50%] top-[30%] -left-[05%] w-[60%] z-50"
        initial={{ x: "-100%", opacity: 1 }}
        animate={leftHandControls}
      />

      {/* Right Hand Animation */}
      <motion.img
        id="RightHand"
        src="/dev/images/Handright.avif"
        alt=""
        className="absolute max-sm:top-[51%] top-[35%] left-[55%] w-[55%] max-sm:w-[50%] z-50"
        initial={{ x: "100%", opacity: 1 }}
        animate={rightHandControls}
      />

      <Cursor_Connect_Now containerRef={footerRef} />
    </div>
  );
};

export default Footer;
