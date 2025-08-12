"use client"
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Cursor_Connect_Now = ({ containerRef }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 16}px`;
        cursorRef.current.style.top = `${y - 16}px`;
      }
    };

    const showCursor = () => {
      if (cursorRef.current) cursorRef.current.style.display = "block";
    };

    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.style.display = "none";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", showCursor);
    container.addEventListener("mouseleave", hideCursor);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", showCursor);
      container.removeEventListener("mouseleave", hideCursor);
    };
  }, [containerRef]);

  return (
    <motion.div
      ref={cursorRef}
      className="absolute pointer-events-none z-[9999]"
      style={{ display: "none" }} // Hidden by default
    >
      <div className="absolute -left-10 -top-10 w-6 h-6 pointer-events-none z-50 cursor-pointer">
        <div className="relative w-32 h-28">
          <img className="absolute inset-1 z-10" src="/dev/images/circle_star.svg" alt="" />
          <div className="relative text-center z-20 flex items-center justify-center w-[50%] h-full text-white font-bold p-18 leading-3.5">
            CONNECT NOW
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cursor_Connect_Now;
