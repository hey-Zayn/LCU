"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md shadow-md py-2 text-white border-b border-white/10"
          : `bg-transparent py-4 text-white`
      }`}
    >
      <div className="md:px-6 max-sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/dev/images/forwardsols_logo.svg"
              alt="Logo"
              className="w-60 max-sm:w-50"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/courses"
              className="hover:text-gray-400 transition-colors font-medium"
            >
              Back to Home
            </Link>
            <a
              href="#courses"
              className="hover:text-gray-400 transition-colors font-medium"
            >
              Courses
            </a>
            <a
              href="#about-us"
              className="hover:text-gray-400 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400 transition-colors font-medium"
            >
              Contact
            </a>
            <Link href="/courses/form" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-lg transition-colors font-medium">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden max-sm:text-black px-6 rounded-md py-5 mt-4 pb-4 flex flex-col space-y-4 bg-white">
            <Link
              href="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-700 transition-colors font-medium"
            >
              Home
            </Link>
            <a
              href="#courses"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-700 transition-colors font-medium"
            >
              Courses
            </a>
            <a
              href="#about-us"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-700 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-700 transition-colors font-medium"
            >
              Contact
            </a>
            <Link href="/courses/form" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-gray-700 text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium w-full">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
