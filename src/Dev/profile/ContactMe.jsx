"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { SlUser } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios"; // USE FOR RELATIONSHIP BETWEEN FRONTEND AND BACKEND

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
    phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

export function MyForm() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const sendToMail = {
      Name: data.name,
      Email: data.email,
      Subject: "CEO CONTACT ME PAGE",
      Message: data.message,
      Phone: data.phone,
      serviceType: data.serviceType,
    };

    try {
      const response = await axios.post(
        "/api/sendMail",
        sendToMail,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Set popup message and show the popup on successful submission
      setPopupMessage("Your message has been submitted successfully!");
      setPopupVisible(true);
      setFormSubmitted(true); // Update state to indicate form has been submitted

      console.log(response.data); // Log the response data to the console
      reset(); // Reset the form after submission
    } catch (error) {
      console.error(error); // Log the error to the console
      setPopupMessage(
        "There was an error submitting the form. Please try again."
      );
      setPopupVisible(true);
    }
  };

  // Close the popup when "OK" is clicked
  const closePopup = () => {
    setPopupVisible(false);
    setFormSubmitted(false); // Reset formSubmitted state when closing the popup
  };

  // Close the success popup when "Close" button is clicked
  const handleClosePopup = () => {
    setFormSubmitted(false); //pop up successfully closed button
  };

  return (
    <>
      <h1 className="mt-10">Book appointment</h1>

      <section>
        {formSubmitted ? (
          <div className="bg-black p-8 mt-10 rounded-md w-full max-w-sm">
            <h2 className="text-lg font-bold">Form Submitted</h2>
            <p className="mt-4 text-gray-400">
              Thank you for reaching out! We will get back to you shortly.
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-4 py-2 px-4 bg-[#00a5f8] text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            {/* Name SECTION */}
            <div className="relative w-[100%] mt-16 mb-16">
              <input
                {...register("name")}
                type="text"
                id="name"
                spellCheck={true}
                className={`peer w-[85%] text-[#00a5f8] text-[20px] h-[40px] bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-[#00a5f8] transition-colors duration-300 ${
                  errors.name ? "border-red-500" : ""
                }`}
                required
              />
              <label
                htmlFor="name"
                className="absolute text-gray-500 text-base bottom-10 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
              >
                Name
              </label>
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email SECTION */}
            <div className="relative w-[100%] mt-8 mb-20">
              <input
                {...register("email")}
                type="text"
                id="email"
                spellCheck={true}
                className={`peer w-[85%] text-[#00a5f8] text-[20px] h-[40px] bg-transparent border-b-2 border-gray-600  focus:outline-none focus:border-[#00a5f8]  transition-colors duration-300 ${
                  errors.email ? "border-red-500" : ""
                }`}
                required
              />
              <label
                htmlFor="email"
                className="absolute text-gray-500 text-base bottom-10 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
              >
                Email
              </label>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone SECTION */}
            <div className="relative w-[100%] mt-8 mb-20">
              <input
                {...register("phone")}
                type="phone"
                id="phone"
                spellCheck={true}
                className={`peer w-[85%] text-[#00a5f8] text-[20px] h-[40px] bg-transparent border-b-2 border-gray-600  focus:outline-none focus:border-[#00a5f8]  transition-colors duration-300 ${
                  errors.phone ? "border-red-500" : ""
                }`}
                required
              />
              <label
                htmlFor="phone"
                className="absolute text-gray-500 text-base bottom-10 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
              >
                Phone
              </label>
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>


            {/* Message SECTION */}
            <div className="relative w-[100%] mt-6 mb-10">
              <textarea
                {...register("message")}
                id="message"
                placeholder=" "
                rows="1"
                spellChecked={true}
                className={`peer w-[90%] h-[110px]  text-[#00a5f8] text-[20px]  bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-[#00a5f8]  transition-colors duration-300 resize-none ${
                  errors.message ? "border-red-500" : ""
                }`}
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-gray-500 text-base bottom-32 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
              >
                Message
              </label>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 py-3 w-[120px] bg-[#00a5f8] hover:bg-transparent hover:border hover:border-[#00a5f8] hover:text-[#00a5f8] transition duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </section>
    </>
  );
}
//FORM END
export default function ContactMe() {
  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const emailLink = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        ? "mailto:awaissheikh480@gmail.com"
        : "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=awaissheikh480@gmail.com";

      setEmailLink(emailLink);
    }
  }, []);

  const contactDetails = [
    {
      icon: <CiLocationOn className="text-[#00a5f8]" />,
      text: "Arfa Software Technology Park",
      link: "https://www.google.com/maps/place/ARFA+Tower,+Lahore+–+Kasur+Rd,+Nishtar+Town,+Lahore,+Punjab,+Pakistan/@31.4757559,74.340034,17z",
    },
    {
      icon: <SlUser className="text-[#00a5f8]" />,
      text: "awaissheikh480@gmail.com",
      link: emailLink,
    },
    {
      icon: <AiOutlineMail className="text-[#00a5f8]" />,
      text: "awaissheikh480@gmail.com",
      link: emailLink,
    },
    {
      icon: <FaWhatsapp className="text-[#00a5f8]" />,
      text: "+92 321 8720063",
      link: "https://wa.me/923218720063?text=Hi Awais Sheikh...",
    },
  ];
  return (
    <>
      {/* Main text and info */}
      {/* <h3 className="text-2xl font-extrabold tracking-widest mt-3 font-serif sm:text-xl text-slate-200">
        Contact Me
      </h3> */}

      <h1 className="font-bold mb-7">CONTACT ME</h1>

      <p className="text-[13px] sm:text-sm text-slate-400 pr-4 tracking-wider mx-auto">
        If you have any questions regarding this privacy statement, the
        practices of this site, or your dealings with me, please do not hesitate
        to contact me at the above-mentioned address, e-mail address, personal
        email, or phone number. For urgent work, you can contact me urgently by
        clicking the bottom-right corner, where there is a WhatsApp icon — just
        click and send a message.
      </p>

      {/* Google Map Location */}
      <section className="map-section mt-10">
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.989086732067!2d74.34003403694295!3d31.47575589613643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1702713873228!5m2!1sen!2s"
            width="100%"
            className="h-[230px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Info */}
      <div className="p-10 sm:p-6 custom-md:p-8">
        <div className="flex custom-md:flex-row flex-col custom-md:justify-between justify-start custom-md:items-center">
          {/* Left Column */}
          <div>
            {contactDetails.slice(0, 2).map((detail, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 mb-2"
              >
                {detail.icon}
                <Link
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-gray-400 font-bold"
                >
                  {detail.text}
                </Link>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {contactDetails.slice(2).map((detail, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-2 mb-2"
              >
                {detail.icon}
                <Link
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-gray-400 font-bold"
                >
                  {detail.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border opacity-10"></div>
      {/* Form Section */}
      <MyForm />
    </>
  );
}
