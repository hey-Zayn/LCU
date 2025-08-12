"use client";


import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const ProjectDetail = ({ project, onBack }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const playBeep = () => {
    const beep = new Audio("onclick.mp3");
    beep.play();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      serviceType: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
        .required("Phone number is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      playBeep();
      console.log("Form values:", values);

      const sendToMail = {
        Name: values.name,
        Email: values.email,
        Subject: "CEO WORK DETAIL PAGE",
        Message: values.message,
        Phone: values.phone,
        serviceType: values.serviceType,
      };

      try {
        const response = await axios.post(
          "/api/emailroute",
          sendToMail,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setPopupMessage("Your message has been submitted successfully!");
        setPopupVisible(true);
        setFormSubmitted(true);
        console.log(response.data);
        resetForm();
      } catch (error) {
        console.error(error);
        setPopupMessage(
          "There was an error submitting the form. Please try again."
        );
        setPopupVisible(true);
      }
    },
  });

  const closePopup = () => {
    setPopupVisible(false);
    setFormSubmitted(false);
  };

  return (
    <>
      <div>
        <FaArrowLeft
          onClick={onBack}
          className="text-xl font-bold cursor-pointer"
        />
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <h2 className="text-sm bg-[#00a5f8] inline p-1">{project.date}</h2>
        <img
          src={project.img}
          alt={project.title}
          className="w-96 h-64 mt-5 relative left-36"
        />
        <p className="mt-5">{project.intro}</p>
        <p className="mt-3">Thanks a lot, {project.title}, for choosing us.</p>
        <h5 className="mt-5 font-semibold">Website Details</h5>
        <li className="mt-3">Platform: {project.category}</li>
        <p className="text-white mt-4">
          Visit Website:
          <Link
            href={project.siteLink}
            className="underline underline-offset-8 text-[#00a5f8] hover:text-slate-50 transition duration-300 ml-2"
          >
            {project.title}
          </Link>
        </p>
      </div>

      <div className="border-t border-[#888888] pt-8 relative">
        <h1>Leave a comment</h1>

        {formSubmitted ? (
          <div className="bg-black p-8 mt-10 rounded-md w-full max-w-sm">
            <h2 className="text-lg font-bold">Form Submitted</h2>
            <p className="mt-4 text-gray-400">
              We appreciate your feedback! We’ll get back to you shortly.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 py-2 px-4 bg-[#00a5f8] text-white rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            {["name", "email", "phone", "message"].map((field, idx) => (
              <div key={idx} className="relative w-full max-w-sm mt-5">
                <input
                  type="text"
                  id={field}
                  name={field}
                  placeholder=" "
                  className="peer w-full text-[#00a5f8] text-[20px] bg-transparent border-b-2 border-gray-600 h-[40px] focus:outline-none focus:border-[#00a5f8] transition-colors duration-300"
                  value={formik.values[field]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onClick={playBeep}
                />
                <label
                  htmlFor={field}
                  className="absolute text-gray-500 text-base bottom-12 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {formik.touched[field] && formik.errors[field] && (
                  <p className="text-red-500 text-sm">{formik.errors[field]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="mt-4 py-3 w-[120px] bg-[#00a5f8] hover:bg-transparent hover:border hover:border-[#00a5f8] hover:text-[#00a5f8] transition duration-300"
              onClick={playBeep}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default ProjectDetail;