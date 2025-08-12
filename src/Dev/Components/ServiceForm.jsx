"use client";
import { CircleAlert, MailCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const ServiceForm = ({ location: propLocation = "unknown" }) => {
  const pathname = usePathname();

  // Enhanced location detection
  const routeMappings = {
    // Services
    '/ai-monitoring-integration': 'ai_monitoring_page',
    '/mern-stack-development': 'mern_stack_page',
    '/e-commerce-solution': 'ecommerce_solution_page',
    '/ai-development-services': 'ai_dev_page',
    '/mean-stack-development': 'mean_stack_page',
    '/healthcare-it-solutions': 'healthcare_it_page',
    '/ai-chatbot-development': 'chatbot_dev_page',
    '/python-development': 'python_dev_page',
    '/fintech-app-development': 'fintech_page',
    '/chat-gpt-integrations': 'chatgpt_page',
    '/lamp-stack-development': 'lamp_stack_page',
    '/publishing-media-cms': 'publishing_media_page',
    '/machine-learning': 'ml_page',
    '/dotnet-stack-development': 'dotnet_stack_page',
    '/education-platforms': 'education_platforms_page',
    '/blockchain': 'blockchain_page',
    '/rails-ruby-on-rails': 'rails_page',
    '/real-estate-tech': 'real_estate_page',
    '/computer-vision': 'computer_vision_page',

    // Marketing
    '/Search-Engine-Optimization': 'seo_page',
    '/paid-media-advertisement': 'paid_media_page',
    '/social-media-marketing': 'social_media_page',
    '/seo-leads': 'seo_leads_page',
    '/brand-optimization': 'branding_page',
    '/seo-amazon': 'amazon_seo_page',
    '/seo-for-walmart': 'walmart_seo_page',
    '/facebook-lead-generation': 'facebook_leads_page',
    '/B2B-advertisement': 'b2b_page',
    '/Local-Search-Optimization': 'local_seo_page',
    '/360-lead-nurture': 'lead_nurture_page',
    '/influencer-marketing': 'influencer_page',
    '/Landing-Page-Optimization': 'lpo_page',
    '/email-marketing': 'email_marketing_page',
    '/media-buying-advertisement': 'media_buying_page',
    '/amazon-marketing': 'amazon_marketing_page',
    '/walmart-marketplace': 'walmart_marketing_page',
    '/commerce-credibility': 'credibility_page',

    // Business Services
    '/call-centers': 'call_center_page',
    '/customer-service': 'customer_service_page',
    '/back-office': 'back_office_page',
    '/consulting': 'consulting_page',
    '/inbound-development': 'inbound_page',
    '/staffing': 'staffing_page',
    '/recruiting': 'recruiting_page',
    '/benefits-consulting': 'benefits_page',
    '/hr-consulting': 'hr_consulting_page',
    '/hr-outsourcing': 'hr_outsourcing_page',
    '/business-consultants': 'business_consulting_page',
    '/change-management': 'change_management_page',
    '/strategy-development': 'strategy_page',
    '/corporate-training': 'training_page',
    '/association-management': 'association_page',

    // About
    '/Who-We-Are': 'about_us_page',
    '/AwaisSheikh': 'ceo_page',
    '/How-It-Works': 'process_page',
    '/packages': 'packages_page',
    '/portfolio': 'portfolio_page',
    '/courses': 'courses_page',
    '/our-team': 'team_page',
    '/FAQs': 'faqs_page',
    '/we-are-hiring': 'careers_page',

    // Common pages
    '/contact': 'contact_page',
    '/about': 'about_page',
    '/services': 'services_page',
  };

  const getLocation = () => {
    if (propLocation && propLocation !== "unknown") return propLocation;

    const matchedRoute = Object.keys(routeMappings).find(route =>
      pathname.includes(route)
    );

    return matchedRoute ? routeMappings[matchedRoute] : 'unknown_page';
  };

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    jobTitle: "",
    source: "Google",
    location: getLocation(),
  });

  const [errors, setErrors] = useState({
    fullName: "",
    companyName: "",
    businessEmail: "",
    phoneNumber: "",
    jobTitle: "",
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
    // Update location if pathname changes
    setForm(prev => ({ ...prev, location: getLocation() }));
  }, [pathname]);

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
        if (!value.trim()) error = "Service title is required";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Validate field on change
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
      // Prepare data for both database and email
      const contactData = {
        fullName: form.fullName,
        companyName: form.companyName,
        businessEmail: form.businessEmail,
        phoneNumber: form.phoneNumber,
        jobTitle: form.jobTitle,
        source: form.source,
        location: getLocation(),
        pageUrl: window.location.href,
        message: `Service inquiry about ${form.jobTitle}`,
        timestamp: new Date().toISOString()
      };

      console.log('Submitting contact data:', contactData);

      // Save contact to database
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
          location: getLocation(),
        }),
      });

      const dbResult = await dbResponse.json();

      if (!dbResponse.ok) {
        throw new Error(dbResult.error || 'Failed to save contact to database');
      }

      // console.log('Database save successful:', dbResult);

      // Then send email with the correct field names
      const mailResponse = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });

      if (!mailResponse.ok) {
        const mailError = await mailResponse.json();
        throw new Error(mailError.message || 'Failed to send email notification');
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
    <>
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

      <div className="text-white w-full h-full pb-[2%] overflow-hidden pt-15">
        <div className="flex flex-col lg:flex-row gap-[1%] justify-between">
          <div className="w-full lg:w-[55%] mb-[10%] lg:mb-0 p-4 lg:m-[4%]">
            <Link href={`/contact`}>
              <div className="flex gap-4 lg:gap-[8%] mb-8">
                <button className="px-5 py-3 text-sm lg:text-lg font-semibold bg-[#E73C5F] text-gray-800 border-none outline-none rounded-md cursor-pointer">
                  Book a Demo
                </button>
                <button className="px-5 py-3 text-sm lg:text-lg font-semibold text-white bg-[#212121] border border-white rounded-md cursor-pointer">
                  Careers
                </button>
              </div>
            </Link>
            <div className="mb-8 lg:mt-[15%]">
              <p className="text-base lg:text-lg">
                We're here to help! Complete the form and our team will reach
                out you soon.
              </p>
            </div>
            <div className="mb-8 lg:mt-[15%]">
              <p className="text-base lg:text-lg">awaissheikh480@gmail.com</p>
            </div>
          </div>

          <div className="w-full p-4 lg:m-[4%] lg:my-0">
            {verificationStep === "form" && (
              <form className="flex flex-col gap-4 lg:gap-[15px]" onSubmit={handleSendVerification}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium"
                  >
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors({ ...errors, [e.target.name]: error });
                    }}
                    required
                    placeholder="Enter Your Full Name"
                    className={`p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border rounded-md focus:outline-none placeholder-gray-400 ${errors.fullName ? "border-red-500" : "border-gray-100"
                      }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium"
                  >
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors({ ...errors, [e.target.name]: error });
                    }}
                    placeholder="Your Company Name"
                    className={`p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border rounded-md focus:outline-none placeholder-gray-400 ${errors.companyName ? "border-red-500" : "border-gray-100"
                      }`}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessEmail"
                    className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium"
                  >
                    BUSINESS EMAIL
                  </label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={form.businessEmail}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors({ ...errors, [e.target.name]: error });
                    }}
                    required
                    placeholder="Your Business Email"
                    className={`p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border rounded-md focus:outline-none placeholder-gray-400 ${errors.businessEmail ? "border-red-500" : "border-gray-100"
                      }`}
                  />
                  {errors.businessEmail && (
                    <p className="text-red-500 text-sm mt-1">{errors.businessEmail}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium"
                  >
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors({ ...errors, [e.target.name]: error });
                    }}
                    required
                    placeholder="Enter Your Phone Number"
                    className={`p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border rounded-md focus:outline-none placeholder-gray-400 ${errors.phoneNumber ? "border-red-500" : "border-gray-100"
                      }`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium"
                  >
                    SERVICE TITLE
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                    onBlur={(e) => {
                      const error = validateField(e.target.name, e.target.value);
                      setErrors({ ...errors, [e.target.name]: error });
                    }}
                    required
                    placeholder="Enter Your Service Title"
                    className={`p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border rounded-md focus:outline-none placeholder-gray-400 ${errors.jobTitle ? "border-red-500" : "border-gray-100"
                      }`}
                  />
                  {errors.jobTitle && (
                    <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="source"
                    className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium"
                  >
                    HOW DID YOU HEAR ABOUT US?
                  </label>
                  <select
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                    className="p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border border-gray-100 rounded-md bg-[#222222] text-gray-400"
                  >
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Email">Email</option>
                    <option value="Word of Mouth">Word of Mouth</option>
                  </select>
                </div>

                <div className="flex gap-4 mt-4">
                  <CircleAlert size={40} className="lg:size-[60px] max-sm:size-[30px] flex-shrink-0" />
                  <p className="text-sm lg:text-base text-justify pr-5">
                    Your privacy is important to us. All information submitted
                    through this form will be kept confidential and secure. We will
                    not share your details with third parties without your consent.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 text-base lg:text-lg font-semibold text-white bg-[#212121] border border-white rounded-md mt-8 lg:mt-[4%] cursor-pointer self-center lg:self-start disabled:opacity-50"
                >
                  {isLoading ? "Sending Verification..." : "Verify Email"}
                </button>

                {status.message && (
                  <p
                    className={`mt-4 text-center lg:text-left ${status.isError ? "text-red-500" : "text-green-500"
                      }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            )}

            {verificationStep === "verify" && (
              <div ref={verifyRef} className="flex flex-col gap-4 lg:gap-[15px]">
                <div className="flex items-center gap-3 mb-4">
                  <MailCheck className="text-green-500" size={24} />
                  <h3 className="text-xl font-medium">Verify Your Email</h3>
                </div>

                <p className="text-gray-300">
                  We've sent a 6-digit verification code to <span className="font-semibold">{form.businessEmail}</span>.
                  Please enter it below to verify your email address.
                </p>

                <div className="mt-4">
                  <label className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-medium">
                    VERIFICATION CODE
                  </label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Enter 6-digit code"
                    className="p-3 lg:p-5 w-full text-base lg:text-lg font-semibold border border-gray-100 rounded-md focus:outline-none"
                    maxLength={6}
                  />
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={verifyCode}
                    disabled={isLoading || verificationCode.length !== 6}
                    className="px-8 py-3 text-base lg:text-lg font-semibold text-white bg-[#212121] border border-white rounded-md cursor-pointer self-center lg:self-start disabled:opacity-50"
                  >
                    {isLoading ? "Verifying..." : "Verify Code"}
                  </button>

                  <button
                    onClick={() => {
                      setVerificationStep("form");
                      setStatus({ message: "", isError: false });
                    }}
                    className="px-8 py-3 text-base lg:text-lg font-semibold text-gray-300 bg-transparent border border-gray-300 rounded-md cursor-pointer self-center lg:self-start"
                  >
                    Go Back
                  </button>
                </div>

                {status.message && (
                  <p
                    className={`mt-4 text-center lg:text-left ${status.isError ? "text-red-500" : "text-green-500"
                      }`}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            )}

            {verificationStep === "complete" && (
              <form className="flex flex-col gap-4 lg:gap-[15px]" onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 mb-4">
                  <MailCheck className="text-green-500" size={24} />
                  <h3 className="text-xl font-medium">Email Verified Successfully!</h3>
                </div>

                <p className="text-gray-300 mb-6">
                  Your email <span className="font-semibold">{form.businessEmail}</span> has been verified.
                  Review your information below and submit the form.
                </p>

                {/* Display all form fields as read-only to confirm information */}
                <div>
                  <label className="text-gray-400">Full name</label>
                  <div className="p-3 lg:p-5 w-full text-base lg:text-lg bg-[#222222] text-white rounded-md">
                    {form.fullName}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Company name</label>
                  <div className="p-3 lg:p-5 w-full text-base lg:text-lg bg-[#222222] text-white rounded-md">
                    {form.companyName || "N/A"}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Business email</label>
                  <div className="p-3 lg:p-5 w-full text-base lg:text-lg bg-[#222222] text-white rounded-md">
                    {form.businessEmail}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Phone number</label>
                  <div className="p-3 lg:p-5 w-full text-base lg:text-lg bg-[#222222] text-white rounded-md">
                    {form.phoneNumber}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">Service title</label>
                  <div className="p-3 lg:p-5 w-full text-base lg:text-lg bg-[#222222] text-white rounded-md">
                    {form.jobTitle}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400">How did you hear about us?</label>
                  <div className="p-3 lg:p-5 w-full text-base lg:text-lg bg-[#222222] text-white rounded-md">
                    {form.source}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 text-base lg:text-lg font-semibold text-white bg-[#212121] border border-white rounded-md mt-8 lg:mt-[4%] cursor-pointer self-center lg:self-start disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Submit Form"}
                </button>

                {status.message && (
                  <p
                    className={`mt-4 text-center lg:text-left ${status.isError ? "text-red-500" : "text-green-500"
                      }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceForm;