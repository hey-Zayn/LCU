"use client";
// import Marquee from "@/Dev/Components/marquee";
import React, { useState, useRef, useEffect } from "react";
import { CircleAlert, MailCheck } from "lucide-react";
import gsap from "gsap";

const Page = () => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    jobTitle: "",
    source: "Google",
  });




  const [status, setStatus] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [verificationStep, setVerificationStep] = useState("form"); // 'form', 'verify', 'complete'
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const welcomeRef = useRef(null);
  const verifyRef = useRef(null);


  useEffect(() => {
    if (verificationStep === "verify" && verifyRef.current) {
      verifyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [verificationStep]);

  // Welcome animation setup
  useEffect(() => {
    if (showWelcome && welcomeRef.current) {
      gsap.fromTo(
        welcomeRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }
      );
    }
  }, [showWelcome]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateVerificationCode = () => {
    // Generate a 6-digit random code
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendVerification = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.businessEmail)) {
      setStatus({ message: "Please enter a valid email address", isError: true });
      return;
    }

    setIsLoading(true);
    setStatus({ message: "Sending verification code...", isError: false });

    try {
      const code = generateVerificationCode();
      setGeneratedCode(code);

      await fetch("/api/sendVerification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.businessEmail,
          code,
        }),
      });

      setVerificationStep("verify");
      setStatus({ message: "Verification code sent to your email", isError: false });
    } catch (error) {
      setStatus({ message: "Failed to send verification code", isError: true });
    } finally {
      setIsLoading(false);
    }
  };


  const verifyCode = () => {
    if (verificationCode === generatedCode) {
      setVerificationStep("complete");
      setStatus({ message: "Email verified successfully!", isError: false });
    } else {
      setStatus({ message: "Invalid verification code", isError: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ message: "Processing your request...", isError: false });

    try {
      // Prepare data for both email and database
      const submissionData = {
        fullName: form.fullName,
        companyName: form.companyName,
        businessEmail: form.businessEmail,
        phoneNumber: form.phoneNumber,
        jobTitle: form.jobTitle,
        source: form.source,
        location: "Contact Page",
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
      };

      // 1. First save to database
      const dbResponse = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.businessEmail,
          company: form.companyName,
          phone: form.phoneNumber,
          service: form.jobTitle,
          source: form.source,
          message: `Service inquiry from ${form.fullName}`,
          pageUrl: window.location.href,
          location: "Contact Page",
          verified: true
        }),
      });

      if (!dbResponse.ok) {
        const dbError = await dbResponse.json();
        throw new Error(dbError.message || 'Failed to save to database');
      }

      // 2. Then send email
      const mailResponse = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (!mailResponse.ok) {
        const mailError = await mailResponse.json();
        throw new Error(mailError.message || 'Failed to send email');
      }

      // Success handling
      setStatus({
        message: "Your information has been submitted successfully!",
        isError: false
      });
      setShowWelcome(true);

      // Reset form
      setForm({
        fullName: "",
        companyName: "",
        businessEmail: "",
        phoneNumber: "",
        jobTitle: "",
        source: "Google",
      });

      setTimeout(() => {
        setShowWelcome(false);
        setVerificationStep("form");
      }, 4000);

    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        message: error.message || "An error occurred during submission",
        isError: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-black">
      {showWelcome && (
        <div
          ref={welcomeRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
        >
          <div className="text-center p-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
              Thank You!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              We've received your message and will get back to you soon.
            </p>
          </div>
        </div>
      )}

    
        <div className="text-white w-full h-full pb-8 sm:pb-[2%] overflow-hidden bg-black pt-8 sm:pt-15 px-4 sm:px-0   relative">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[1%] justify-between max-w-7xl mx-auto z-10">
            <div className="w-full lg:w-[55%] p-4 lg:m-[4%]">
              <div className="flex gap-4 sm:gap-[8%] mb-6">
                <button className="px-4 py-4 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold bg-[#E73C5F] text-gray-800 rounded-md whitespace-nowrap z-20 relative">
                  Book a Demo
                </button>
                <button className="px-4 py-4 sm:px-5 sm:py-3 text-sm sm:text-base font-semibold text-white bg-[#212121] rounded-md whitespace-nowrap z-20 relative">
                  Careers
                </button>
              </div>
              <div className="mt-8 sm:mt-[15%]">
                <p className="text-sm sm:text-base">
                  We're here to help! Complete the form and our team will reach
                  out to you soon.
                </p>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base">
                  Email: awaissheikh480@gmail.com
                </p>
              </div>
            </div>

            <div className="w-full p-4 lg:m-[4%]">
              {verificationStep === "form" && (
                <form onSubmit={handleSendVerification} className="flex flex-col gap-4 sm:gap-[15px] z-20 relative">
                  <label className="text-lg sm:text-xl font-medium">FULL NAME</label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Full Name"
                    className="p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                  />

                  <label className="text-lg sm:text-xl font-medium mt-2 sm:mt-0">COMPANY NAME</label>
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Your Company Name"
                    className="p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                  />

                  <label className="text-lg sm:text-xl font-medium mt-2 sm:mt-0">BUSINESS EMAIL</label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={form.businessEmail}
                    onChange={handleChange}
                    required
                    placeholder="Your Business Email"
                    className="p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                  />

                  <label className="text-lg sm:text-xl font-medium mt-2 sm:mt-0">PHONE NUMBER</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Phone Number"
                    className="p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                  />

                  <label className="text-lg sm:text-xl font-medium mt-2 sm:mt-0">JOB TITLE</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Job Title"
                    className="p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                  />

                  <label className="text-lg sm:text-xl font-medium mt-2 sm:mt-0">HOW DID YOU HEAR ABOUT US?</label>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    className="text-gray-500 p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-[#222222] focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                  >
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Email">Email</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                  </select>

                  <div className="flex gap-3 mt-4">
                    <CircleAlert size={24} className="sm:size-8 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-gray-300">
                      Your privacy is important to us. All information submitted
                      through this form will be kept confidential and secure.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6 text-sm sm:text-base font-semibold text-white bg-[#212121] rounded-md cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                  >
                    {isLoading ? "Sending Verification..." : "Verify Email"}
                  </button>

                  {status.message && (
                    <p
                      className={`mt-3 sm:mt-4 text-sm sm:text-base ${status.isError ? "text-red-500" : "text-green-500"
                        }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              )}

              {verificationStep === "verify" && (
                <div className="flex flex-col gap-4 sm:gap-[15px] z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <MailCheck className="text-green-500" size={24} />
                    <h3 className="text-xl font-medium">Verify Your Email</h3>
                  </div>

                  <p className="text-gray-300">
                    We've sent a 6-digit verification code to <span className="font-semibold">{form.businessEmail}</span>.
                    Please enter it below to verify your email address.
                  </p>

                  <div className="mt-4">
                    <label className="text-lg sm:text-xl font-medium">VERIFICATION CODE</label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="p-3 sm:p-5 w-full text-sm sm:text-lg font-medium border border-gray-100 rounded-md bg-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#E73C5F]"
                      maxLength={6}
                    />
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={verifyCode}
                      disabled={isLoading || verificationCode.length !== 6}
                      className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-[#212121] rounded-md cursor-pointer hover:bg-[#2a2a2a] transition-colors disabled:opacity-50"
                    >
                      {isLoading ? "Verifying..." : "Verify Code"}
                    </button>

                    <button
                      onClick={() => {
                        setVerificationStep("form");
                        setStatus({ message: "", isError: false });
                      }}
                      className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-gray-300 bg-transparent rounded-md cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                    >
                      Go Back
                    </button>
                  </div>

                  {status.message && (
                    <p
                      className={`mt-3 sm:mt-4 text-sm sm:text-base ${status.isError ? "text-red-500" : "text-green-500"
                        }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              )}

              {verificationStep === "complete" && (
                <div className="flex flex-col gap-4 sm:gap-[15px] z-20 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <MailCheck className="text-green-500" size={24} />
                    <h3 className="text-xl font-medium">Email Verified Successfully!</h3>
                  </div>

                  <p className="text-gray-300">
                    Your email <span className="font-semibold">{form.businessEmail}</span> has been verified.
                    You can now submit your form.
                  </p>

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6 text-sm sm:text-base font-semibold text-white bg-[#212121] rounded-md cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                  >
                    {isLoading ? "Submitting..." : "Submit Form"}
                  </button>

                  {status.message && (
                    <p
                      className={`mt-3 sm:mt-4 text-sm sm:text-base ${status.isError ? "text-red-500" : "text-green-500"
                        }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Page;