"use client";

import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-[#191919] max-sm:px-6 px-10 text-gray-100"
      id="contact"
    >
      <div className="mx-auto py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <GraduationCap size={36} className="text-purple-600" />
              <span className="text-2xl font-bold text-white">
                <img
                  src="/dev/images/forwardsols_logo.svg"
                  alt="Logo"
                  className="w-50 max-sm:w-40"
                />
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering individuals with cutting-edge skills for the modern
              workplace. Join us on a journey of learning and growth.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
                { icon: Linkedin, link: "#" },
              ].map((SocialIcon, index) => (
                <a
                  key={index}
                  href={SocialIcon.link}
                  className="text-gray-400 hover:text-purple-600 transition-colors duration-300"
                >
                  <SocialIcon.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Courses", href: "#courses" },
                { label: "About Us", href: "#about-us" },
                // { label: "Blog", href: "#" },
                // { label: "Careers", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <PhoneCall size={20} className="text-purple-600" />
                <span className="text-gray-300">+92 321 8720063</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-600" />
                <span className="text-gray-300">awaissheikh480@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-purple-600 mt-1" />
                <span className="text-gray-300">
                 Arfa Software Technology Park Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="text-gray-300">
              Get the latest updates on new courses and promotions delivered to
              your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Forwardsols. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
