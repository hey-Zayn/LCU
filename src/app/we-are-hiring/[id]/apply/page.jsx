"use client";
import axios from "axios";
import React, { useState, useEffect, use } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BUTTON_COLOR = "#E62E76";
const BUTTON_COLOR_SOFT = "#F47CA0";
const LABEL_COLOR = "#A6B666";
const STEP_COMPLETED_COLOR = "#4ADE80";
const STEP_DISABLED_COLOR = "#3B3B4F";

const COLORS = {
  bg1: "#801BB3",
  bg2: "#471DBD",
  button: BUTTON_COLOR,
  label: LABEL_COLOR,
  card: "#33156C",
  cardHover: "#4F0DD4",
  border: "#A6B666",
  text: "#F5F5F5",
  stepActive: BUTTON_COLOR_SOFT,
  stepInactive: "#33156C",
  stepTextActive: "#801BB3",
  stepTextInactive: LABEL_COLOR,
};

const inputClass =
  `w-full px-4 py-3 rounded-lg bg-[${COLORS.bg2}] border border-[${COLORS.border}] text-[${COLORS.text}] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[${BUTTON_COLOR}] transition`;

const labelClass =
  `block text-base font-semibold text-[${LABEL_COLOR}] mb-2`;

const sectionClass =
  `bg-[${COLORS.card}] rounded-2xl shadow-2xl p-6 sm:p-10 max-w-2xl mx-auto mt-10 border border-[${COLORS.border}] transition-colors duration-200`;

const buttonClass =
  `flex items-center justify-center py-3 px-8 rounded-lg bg-[${BUTTON_COLOR}] text-white font-bold uppercase tracking-wider hover:bg-[${COLORS.cardHover}] transition disabled:opacity-60 shadow-md`;

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  city: "",
  country: "",
  education: "",
  experience: "",
  role: "",
  expectedSalary: "",
  currentlyWorking: false,
  comfortableWithLocation: false,
  acceptTerms: false,
  picture: null,
};

const steps = [
  "Personal Info",
  "Address",
  "Position & Education",
  "Experience & Preferences",
  "Terms & Submit",
];

function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const ApplyJobPage = ({ params }) => {
  let unwrappedParams = params;
  if (typeof params?.then === "function") {
    unwrappedParams = use(params);
  }

  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [picturePreview, setPicturePreview] = useState(null);
  const [jobName, setJobName] = useState("");

  const [verificationCode, setVerificationCode] = useState("");
  const [userVerificationInput, setUserVerificationInput] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [verifyingCode, setVerifyingCode] = useState(false);

  useEffect(() => {
    const jobId =
      unwrappedParams?.id ||
      params?.id ||
      (typeof window !== "undefined"
        ? window.location.pathname.split("/").filter(Boolean).pop()
        : undefined);

    if (!jobId) {
      setJobName("");
      return;
    }

    let isMounted = true;

    async function fetchJobName() {
      try {
        let id = jobId;
        if (!id && typeof window !== "undefined") {
          const parts = window.location.pathname.split("/").filter(Boolean);
          const idx = parts.indexOf("we-are-hiring");
          if (idx !== -1 && parts.length > idx + 1) {
            id = parts[idx + 1];
          }
        }
        if (!id) {
          setJobName("");
          return;
        }
        const res = await axios.get(`/api/job?id=${encodeURIComponent(id)}`);
        const data = res.data;
        const name =
          data.title ||
          data.name ||
          data.jobName ||
          data.position ||
          data.role ||
          data.job_title ||
          "";
        if (isMounted) {
          setJobName(name);
        }
      } catch (err) {
        setJobName("");
      }
    }

    fetchJobName();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id, unwrappedParams?.id]);

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files && files[0] ? files[0] : null;
      setForm((prev) => ({
        ...prev,
        [name]: file,
      }));
      if (name === "picture") {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPicturePreview(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPicturePreview(null);
        }
      }
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSendVerificationCode() {
    if (!form.email || !form.phone) {
      toast.error("Please enter your email and phone first.");
      return;
    }
    setSendingCode(true);
    try {
      const code = generateVerificationCode();
      setVerificationCode(code);

      const res = await fetch("/api/sendVerification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          phone: form.phone,
          code,
        }),
      });
      if (res.ok) {
        setIsCodeSent(true);
        toast.success("Verification code sent to your email/phone.");
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send verification code.");
      }
    } catch (err) {
      toast.error("Failed to send verification code.");
    }
    setSendingCode(false);
  }

  async function handleVerifyCode() {
    setVerifyingCode(true);
    try {
      if (userVerificationInput.trim() === verificationCode) {
        setIsCodeVerified(true);
        toast.success("Verification successful! You can now submit your application.");
      } else {
        toast.error("Verification code is incorrect.");
      }
    } catch (err) {
      toast.error("Verification failed.");
    }
    setVerifyingCode(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isCodeVerified) {
      toast.error("Please verify your code before submitting.");
      return;
    }
    setSubmitting(true);
    try {
      const formWithJobName = { ...form, jobName };

      const hasPicture = !!form.picture;
      let payload;
      let headers;
      if (hasPicture) {
        payload = new FormData();
        Object.entries(formWithJobName).forEach(([key, value]) => {
          if (key === "picture" && value) {
            payload.append(key, value);
          } else if (typeof value === "boolean") {
            payload.append(key, value ? "true" : "false");
          } else if (value !== null && value !== undefined) {
            payload.append(key, value);
          }
        });
        headers = undefined;
      } else {
        payload = JSON.stringify(formWithJobName);
        headers = { "Content-Type": "application/json" };
      }

      const resCareer = await fetch("/api/career", {
        method: "POST",
        headers,
        body: payload,
      });
      const dataCareer = await resCareer.json();

      let mailForm = { ...formWithJobName };
      if (mailForm.picture) {
        mailForm.picture = undefined;
      }

      const resMail = await fetch("/api/sendapplyjobmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailForm),
      });
      const dataMail = await resMail.json();

      if (resCareer.ok && resMail.ok) {
        toast.success("Application submitted successfully!");
        setForm({ ...initialForm });
        setStep(0);
        setPicturePreview(null);
        setVerificationCode("");
        setUserVerificationInput("");
        setIsCodeSent(false);
        setIsCodeVerified(false);
      } else {
        if (!resCareer.ok) {
          toast.error(dataCareer.error || "Failed to submit application.");
        } else if (!resMail.ok) {
          toast.error(dataMail.error || "Failed to send application email.");
        }
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  }

  const Stepper = () => (
    <div className="flex flex-row items-center justify-between mb-12 relative z-10 w-full max-w-full px-2 sm:px-0">
      {steps.map((label, idx) => {
        const isCompleted = idx < step;
        const isActive = idx === step;

        const circleBg = isCompleted
          ? STEP_COMPLETED_COLOR
          : isActive
          ? BUTTON_COLOR_SOFT
          : STEP_DISABLED_COLOR;

        const borderColor = isCompleted
          ? STEP_COMPLETED_COLOR
          : isActive
          ? BUTTON_COLOR_SOFT
          : STEP_DISABLED_COLOR;

        const textColor = isCompleted
          ? "#fff"
          : isActive
          ? "#fff"
          : "#A6B666";

        const shadow =
          isActive
            ? `0 0 0 6px ${BUTTON_COLOR_SOFT}33, 0 4px 24px 0 ${BUTTON_COLOR_SOFT}44`
            : isCompleted
            ? `0 0 0 6px ${STEP_COMPLETED_COLOR}33, 0 2px 12px 0 ${STEP_COMPLETED_COLOR}22`
            : "0 2px 8px 0 #0002";

        return (
          <div
            key={label}
            className="flex-1 flex flex-col items-center relative min-w-0"
          >
            <div
              className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 transition-all duration-300
                ${isCompleted ? "" : isActive ? "" : "opacity-60"}
                `}
              style={{
                background: circleBg,
                borderColor: borderColor,
                color: textColor,
                boxShadow: shadow,
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              }}
            >
              {isCompleted ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <span
                  className={`font-bold text-lg sm:text-xl`}
                  style={{
                    color: textColor,
                    letterSpacing: "0.05em",
                  }}
                >
                  {idx + 1}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div
      className="min-h-screen py-8 px-2 sm:px-4"
      style={{
        background: `linear-gradient(135deg, ${COLORS.bg1} 0%, ${COLORS.bg2} 100%)`,
      }}
    >
      <ToastContainer />
      <div className="max-w-3xl mx-auto mt-25 ">
        <div
          className={sectionClass}
          style={{
            transition: "background 0.3s",
            boxShadow:
              "0 12px 48px 0 rgba(80, 30, 120, 0.30), 0 4px 24px 0 rgba(0,0,0,0.10), 0 1.5px 8px 0 #0002, 0 0.5px 1.5px 0 #fff1",
            border: `1.5px solid ${COLORS.border}`,
            backdropFilter: "blur(2px)",
          }}
        >
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center tracking-tight"
            style={{
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
              letterSpacing: "0.04em",
              textShadow: "0 2px 12px #0004, 0 1px 2px #fff2",
            }}
          >
            Apply for this Position
          </h2>
          <Stepper />
          <form onSubmit={handleSubmit} className="w-full" encType="multipart/form-data">
            {step === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    className={inputClass}
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    className={inputClass}
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    className={inputClass}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    className={inputClass}
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Picture</label>
                  <input
                    className={inputClass + " bg-transparent border-0 p-0"}
                    name="picture"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {picturePreview && (
                    <div className="mt-2">
                      <img
                        src={picturePreview}
                        alt="Preview"
                        className="rounded-lg max-h-32 border border-[${COLORS.border}]"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Address</label>
                  <input
                    className={inputClass}
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <label className={labelClass}>Postcode</label>
                  <input
                    className={inputClass}
                    name="postcode"
                    value={form.postcode}
                    onChange={handleChange}
                    placeholder="Enter your postcode"
                  />
                </div>
                <div>
                  <label className={labelClass}>City</label>
                  <input
                    className={inputClass}
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Country</label>
                  <input
                    className={inputClass}
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Role</label>
                  <input
                    className={inputClass}
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Role you are applying for"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Education</label>
                  <input
                    className={inputClass}
                    name="education"
                    value={form.education}
                    onChange={handleChange}
                    placeholder="Your education"
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Experience</label>
                  <input
                    className={inputClass}
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="Your experience"
                  />
                </div>
                <div>
                  <label className={labelClass}>Expected Salary</label>
                  <input
                    className={inputClass}
                    name="expectedSalary"
                    value={form.expectedSalary}
                    onChange={handleChange}
                    placeholder="e.g. $50,000"
                  />
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    name="currentlyWorking"
                    checked={form.currentlyWorking}
                    onChange={handleChange}
                    className={`accent-[${BUTTON_COLOR}] w-5 h-5 rounded focus:ring-2 focus:ring-[${BUTTON_COLOR}]`}
                  />
                  <label className="text-white text-base font-medium cursor-pointer select-none">
                    Currently Working?
                  </label>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <input
                    type="checkbox"
                    name="comfortableWithLocation"
                    checked={form.comfortableWithLocation}
                    onChange={handleChange}
                    className={`accent-[${BUTTON_COLOR}] w-5 h-5 rounded focus:ring-2 focus:ring-[${BUTTON_COLOR}]`}
                  />
                  <label className="text-white text-base font-medium cursor-pointer select-none">
                    Comfortable with Location?
                  </label>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <div className="mt-8">
                  <label className={labelClass}>Verification Code</label>
                  <div className="flex flex-col sm:flex-row gap-2 items-center">
                    <input
                      className={`${inputClass} sm:w-60 text-sm py-2 px-3`}
                      name="verificationCode"
                      value={userVerificationInput}
                      onChange={e => setUserVerificationInput(e.target.value)}
                      placeholder="Enter verification code"
                      disabled={isCodeVerified}
                      required
                    />
                    <button
                      type="button"
                      className={`${buttonClass} px-3 py-1 text-xs rounded-md`}
                      style={{
                        backgroundColor: isCodeVerified
                          ? STEP_COMPLETED_COLOR
                          : isCodeSent
                          ? BUTTON_COLOR_SOFT
                          : BUTTON_COLOR,
                        color: "#fff",
                        opacity:
                          sendingCode || verifyingCode || isCodeVerified
                            ? 0.7
                            : 1,
                        cursor:
                          sendingCode || verifyingCode || isCodeVerified
                            ? "not-allowed"
                            : "pointer",
                        fontSize: "0.85rem",
                        padding: "0.375rem 1rem",
                        borderRadius: "0.375rem",
                        minWidth: "90px",
                        height: "2.25rem",
                        fontWeight: 500,
                      }}
                      disabled={
                        isCodeVerified
                          ? true
                          : isCodeSent
                          ? verifyingCode ||
                            !userVerificationInput.trim()
                          : sendingCode
                      }
                      onClick={
                        isCodeVerified
                          ? undefined
                          : isCodeSent
                          ? handleVerifyCode
                          : handleSendVerificationCode
                      }
                    >
                      {isCodeVerified
                        ? "Verified"
                        : isCodeSent
                        ? verifyingCode
                          ? "Verifying..."
                          : "Verify Code"
                        : sendingCode
                        ? "Sending..."
                        : "Send Code"}
                    </button>
                  </div>
                  {isCodeVerified && (
                    <div className="mt-2 text-green-400 font-medium text-sm">
                      Code verified! You can now submit your application.
                    </div>
                  )}
                </div>
                <div className="mt-8 flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={form.acceptTerms}
                    onChange={handleChange}
                    className={`accent-[${BUTTON_COLOR}] w-5 h-5 rounded focus:ring-2 focus:ring-[${BUTTON_COLOR}]`}
                    required
                  />
                  <span className="ml-3 text-white text-sm">
                    I accept the{" "}
                    <a
                      href="/terms"
                      className={`underline text-[${LABEL_COLOR}] hover:text-[${BUTTON_COLOR}] transition`}
                    >
                      terms and conditions
                    </a>
                  </span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10">
              {step > 0 && (
                <button
                  type="button"
                  className={
                    `flex items-center justify-center py-3 px-8 rounded-lg border border-[${BUTTON_COLOR}] text-[${BUTTON_COLOR}] bg-transparent font-bold uppercase tracking-wider hover:bg-[${BUTTON_COLOR}] hover:text-white transition disabled:opacity-60 shadow-md px-8`
                  }
                  onClick={prevStep}
                  disabled={submitting}
                  style={{
                    borderColor: BUTTON_COLOR,
                    color: BUTTON_COLOR,
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.backgroundColor = BUTTON_COLOR;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = BUTTON_COLOR;
                  }}
                >
                  Back
                </button>
              )}
              {step < steps.length - 1 && (
                <button
                  type="button"
                  className={buttonClass + " px-8 ml-auto"}
                  onClick={nextStep}
                  disabled={
                    submitting ||
                    (step === 0 &&
                      (!form.firstName.trim() ||
                        !form.lastName.trim() ||
                        !form.email.trim() ||
                        !form.phone.trim()))
                  }
                  style={{
                    backgroundColor: BUTTON_COLOR,
                  }}
                >
                  Next
                </button>
              )}
              {step === steps.length - 1 && (
                <button
                  type="submit"
                  className={buttonClass + " px-8 ml-auto"}
                  disabled={
                    submitting ||
                    !form.acceptTerms ||
                    !isCodeVerified
                  }
                  style={{
                    backgroundColor: BUTTON_COLOR,
                  }}
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobPage;