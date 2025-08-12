"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleAlert, MailCheck } from "lucide-react";
import React, { useLayoutEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const Section11 = () => {
  const router = useRouter();

  // Determine location based on route
  const getFormLocation = () => {
    return 'landing_page';
  };

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    jobTitle: "",
    source: "",
    location: getFormLocation(),
  });

  const [errors, setErrors] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    jobTitle: "",
    source: "",
  });

  const [status, setStatus] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [verificationStep, setVerificationStep] = useState("form"); // 'form', 'verify', 'complete'
  const [verificationCode, setVerificationCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const welcomeRef = useRef(null);
  const verifyRef = useRef(null);

  useLayoutEffect(() => {
    if (verificationStep === "verify" && verifyRef.current) {
      verifyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [verificationStep]);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      const elements = gsap.utils.toArray(".text_animation_section11");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useLayoutEffect(() => {
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

  const generateVerificationCode = () => {
    // Generate a 6-digit random code
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        else if (value.length < 2) error = "Name is too short";
        break;
      case "companyName":
        if (value && value.length < 2) error = "Company name is too short";
        break;
      case "businessEmail":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email";
        break;
      case "phoneNumber":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^[0-9+\-\s]+$/.test(value))
          error = "Please enter a valid phone number";
        break;
      case "jobTitle":
        if (!value.trim()) error = "Job title is required";
        break;
      case "source":
        if (!value.trim()) error = "Source is required";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate field on change if it already has an error
    if (errors[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: validateField("fullName", form.fullName),
      companyName: validateField("companyName", form.companyName),
      businessEmail: validateField("businessEmail", form.businessEmail),
      phoneNumber: validateField("phoneNumber", form.phoneNumber),
      jobTitle: validateField("jobTitle", form.jobTitle),
      source: validateField("source", form.source),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error);
  };

  const handleSendVerification = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
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
    setStatus({ message: "Processing your submission...", isError: false });

    try {
      // Prepare data for both email and database
      const formData = {
        fullName: form.fullName,
        companyName: form.companyName,
        businessEmail: form.businessEmail,
        phoneNumber: form.phoneNumber,
        jobTitle: form.jobTitle,
        source: form.source,
        location: getFormLocation(),
        pageUrl: window.location.href,
        message: `Service inquiry about ${form.jobTitle}`,
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
          message: `Service inquiry about ${form.jobTitle}`,
          pageUrl: window.location.href,
          location: getFormLocation(),
          verified: true
        }),
      });

      const dbResult = await dbResponse.json();

      if (!dbResponse.ok) {
        throw new Error(dbResult.error || 'Failed to save to database');
      }

      console.log('Database save successful:', dbResult);

      // 2. Then send email
      const mailResponse = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
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
        source: "",
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
    <div
      className="relative w-full h-full bg-black text-white px-[5%]"
      style={{
        touchAction: "manipulation",
        WebkitTapHighlightColor: "transparent"
      }}
    >
      {showWelcome && (
        <div
          ref={welcomeRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
        >
          <div className="text-center p-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Thank You!
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              We've received your message and will get back to you soon.
            </p>
          </div>
        </div>
      )}

      <h1 ref={verifyRef} className="w-[70%] max-sm:w-[100%] p-8 px-0 pb-0 pt-16 text-4xl max-sm:text-4xl leading-tight md:text-6xl lg:text-7xl font-bold text_animation_section11">
        Ready to Innovate with ForwardSols?
      </h1>

      <p className="w-[52%] max-sm:w-[100%] px-0 mx-0 mt-7 text-xl text_animation_section11">
        Complete the form, and our team will reach out to discuss how we can
        create custom software solutions to meet your business needs.
      </p>

      {/* Mobile CTA */}
      <div className="block md:hidden mt-10">
        <button
          onClick={() => router.push("/contact")}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-lg text-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105"
        >
          📞 Contact Us Now
        </button>
      </div>

      {/* Desktop Form */}
      {verificationStep === "form" && (
        <form
          onSubmit={handleSendVerification}
          autoComplete="on"
          noValidate
          className="hidden md:flex flex-col gap-6 mt-12"
        >
          <div className="flex gap-6">
            <div className="flex-1">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={form.fullName}
                onChange={handleChange}
                onBlur={(e) => {
                  const error = validateField(e.target.name, e.target.value);
                  setErrors({ ...errors, [e.target.name]: error });
                }}
                required
                className={`w-full bg-black border text-white placeholder-gray-400 p-4 outline-none ${errors.fullName ? "border-red-500" : "border-gray-600"
                  }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="companyName"
                placeholder="Company name"
                value={form.companyName}
                onChange={handleChange}
                onBlur={(e) => {
                  const error = validateField(e.target.name, e.target.value);
                  setErrors({ ...errors, [e.target.name]: error });
                }}
                className={`w-full bg-black border text-white placeholder-gray-400 p-4 outline-none ${errors.companyName ? "border-red-500" : "border-gray-600"
                  }`}
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
              )}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <input
                type="email"
                name="businessEmail"
                placeholder="Business email"
                value={form.businessEmail}
                onChange={handleChange}
                onBlur={(e) => {
                  const error = validateField(e.target.name, e.target.value);
                  setErrors({ ...errors, [e.target.name]: error });
                }}
                required
                className={`w-full bg-black border text-white placeholder-gray-400 p-4 outline-none ${errors.businessEmail ? "border-red-500" : "border-gray-600"
                  }`}
              />
              {errors.businessEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={form.phoneNumber}
                onChange={handleChange}
                onBlur={(e) => {
                  const error = validateField(e.target.name, e.target.value);
                  setErrors({ ...errors, [e.target.name]: error });
                }}
                className={`w-full bg-black border text-white placeholder-gray-400 p-4 outline-none ${errors.phoneNumber ? "border-red-500" : "border-gray-600"
                  }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <input
                type="text"
                name="jobTitle"
                placeholder="Job title"
                value={form.jobTitle}
                onChange={handleChange}
                onBlur={(e) => {
                  const error = validateField(e.target.name, e.target.value);
                  setErrors({ ...errors, [e.target.name]: error });
                }}
                className={`w-full bg-black border text-white placeholder-gray-400 p-4 outline-none ${errors.jobTitle ? "border-red-500" : "border-gray-600"
                  }`}
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
              )}
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="source"
                placeholder="How did you hear about us?"
                value={form.source}
                onChange={handleChange}
                onBlur={(e) => {
                  const error = validateField(e.target.name, e.target.value);
                  setErrors({ ...errors, [e.target.name]: error });
                }}
                className={`w-full bg-black border text-white placeholder-gray-400 p-4 outline-none ${errors.source ? "border-red-500" : "border-gray-600"
                  }`}
              />
              {errors.source && (
                <p className="text-red-500 text-sm mt-1">{errors.source}</p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-2 text-gray-400 text-sm">
            <CircleAlert size={25} className="max-sm:size-15 max-sm:-mt-5" />
            <span>
              Your privacy is important to us. All information submitted through
              this form will be kept confidential and secure. We will not share
              your details with third parties without your consent.
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`relative 2xl:w-[10%] md:w-[14%] inline-block mx-[1%] group relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 hover:from-[#505051]/60 hover:to-[#181717]/60 transition-all duration-700 ease-in-out ${isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {isLoading ? "Sending Verification..." : "Verify Email"}
          </button>

          {status.message && (
            <p
              className={`mt-4 ${status.isError ? "text-red-500" : "text-green-500"
                }`}
            >
              {status.message}
            </p>
          )}
        </form>
      )}

      {verificationStep === "verify" && (
        <div className="hidden md:flex flex-col gap-6 mt-12 bg-black p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <MailCheck className="text-green-500" size={24} />
            <h3 className="text-xl font-medium">Verify Your Email</h3>
          </div>

          <p className="text-gray-300">
            We've sent a 6-digit verification code to <span className="font-semibold">{form.businessEmail}</span>.
            Please enter it below to verify your email address.
          </p>

          <div className="mt-4">
            <label className="text-lg font-medium">VERIFICATION CODE</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter 6-digit code"
              className="w-full bg-black border border-gray-600 text-white placeholder-gray-400 p-4 outline-none focus:ring-1 focus:ring-[#E73C5F]"
              maxLength={6}
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={verifyCode}
              disabled={isLoading || verificationCode.length !== 6}
              className="px-6 py-3 text-base font-semibold text-white bg-[#212121] rounded-md cursor-pointer hover:bg-[#2a2a2a] transition-colors disabled:opacity-50"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>

            <button
              onClick={() => {
                setVerificationStep("form");
                setStatus({ message: "", isError: false });
              }}
              className="px-6 py-3 text-base font-semibold text-gray-300 bg-transparent rounded-md cursor-pointer hover:bg-[#2a2a2a] transition-colors"
            >
              Go Back
            </button>
          </div>

          {status.message && (
            <p
              className={`mt-4 ${status.isError ? "text-red-500" : "text-green-500"
                }`}
            >
              {status.message}
            </p>
          )}
        </div>
      )}

      {verificationStep === "complete" && (
        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          noValidate
          className="hidden md:flex flex-col gap-6 mt-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <MailCheck className="text-green-500" size={24} />
            <h3 className="text-xl font-medium">Email Verified Successfully!</h3>
          </div>

          <p className="text-gray-300 mb-6">
            Your email <span className="font-semibold">{form.businessEmail}</span> has been verified.
            You can now submit your form.
          </p>

          {/* Display all form fields as read-only to confirm information */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-gray-400">Full name</label>
              <div className="w-full bg-black text-white p-4 outline-none border border-gray-600">
                {form.fullName}
              </div>
            </div>
            <div className="flex-1">
              <label className="text-gray-400">Company name</label>
              <div className="w-full bg-black text-white p-4 outline-none border border-gray-600">
                {form.companyName || "N/A"}
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-gray-400">Business email</label>
              <div className="w-full bg-black text-white p-4 outline-none border border-gray-600">
                {form.businessEmail}
              </div>
            </div>
            <div className="flex-1">
              <label className="text-gray-400">Phone number</label>
              <div className="w-full bg-black text-white p-4 outline-none border border-gray-600">
                {form.phoneNumber}
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-gray-400">Job title</label>
              <div className="w-full bg-black text-white p-4 outline-none border border-gray-600">
                {form.jobTitle}
              </div>
            </div>
            <div className="flex-1">
              <label className="text-gray-400">How did you hear about us?</label>
              <div className="w-full bg-black text-white p-4 outline-none border border-gray-600">
                {form.source}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`relative 2xl:w-[10%] md:w-[14%] inline-block mx-[1%] group relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 hover:from-[#505051]/60 hover:to-[#181717]/60 transition-all duration-700 ease-in-out ${isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {isLoading ? "Sending..." : "Submit Form"}
          </button>

          {status.message && (
            <p
              className={`mt-4 ${status.isError ? "text-red-500" : "text-green-500"
                }`}
            >
              {status.message}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default Section11;