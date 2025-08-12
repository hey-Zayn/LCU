"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const Myblogprojectdetail = ({ blog, onBack }) => {
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const playBeep = () => {
    const beep = new Audio("onclick.mp3");
    beep.play();
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "", 
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
        Subject: "CEO BLOG DETAIL PAGE",
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
        console.log(response.data); // Log the response data to the console
        resetForm(); // Reset the form after submission
        setFormSubmitted(true); // Set the form as submitted to show success message
      } catch (error) {
        console.error(error); // Log the error to the console
        alert("There was an error submitting the form"); // Optional: keep error alert
      }
    },
  });

  const handleClosePopup = () => {
    setFormSubmitted(false); // Reset form submission state to show the form again
    formik.resetForm(); // Optionally reset the form fields as well
  };

  if (!blog) return null;

  return (
    <>
      <div className="text-white min-h-screen">
        <FaArrowLeft
          onClick={onBack}
          className="relative bottom-5 text-xl font-bold cursor-pointer"
        />
        <h1 className="text-[24px] font-bold mb-4">{blog.title}</h1>
        <div className="flex gap-4 font-bold">
          <p className="text-sm bg-[#00a5f8] p-1 inline text-white font-bold">
            {blog.date}
          </p>
          <p>{blog.category}</p>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="object-contain mx-auto mb-4 mt-2"
        />
        <div>
          <p>Introduction:</p>
          <p className="text-gray-400">{blog.description}</p>
        </div>
      </div>
      <li className="text-gray-400 pb-8">{blog.detail}</li>

      <div className="border-t border-[#888888] pt-8">
        <h1>Leave a comment</h1>
        {formSubmitted ? (
          <div className="bg-black p-8 mt-10 rounded-md w-full max-w-sm">
            <h2 className="text-lg font-bold">Form Submitted</h2>
            <p className="mt-4 text-gray-400">
              {" "}
              We appreciate your feedback! We’ll get back to you shortly.{" "}
            </p>
            <button
              onClick={handleClosePopup}
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
            {/* <div className="mt-4">
              <input
                onClick={playBeep}
                type="checkbox"
                name="saveInfo"
                id="saveInfo"
              />
              <label htmlFor="saveInfo">
                {" "}
                Save my name, email, and website in this browser for the next time
                I comment.
              </label>
            </div> */}
            <button
              type="submit"
              className="mt-8 py-3 w-[120px] bg-[#00a5f8] hover:bg-transparent hover:border hover:border-[#00a5f8] hover:text-[#00a5f8] transition duration-300"
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

export default Myblogprojectdetail;
