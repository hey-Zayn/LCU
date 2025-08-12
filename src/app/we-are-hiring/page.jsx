"use client";

import React, { useRef, useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticlesBackground from "@/Dev/Components/ParticlesBackground";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);

  // State for jobs
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(mainHeading.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainHeading.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        // Use axios instead of fetch
        const res = await axios.get("/api/job", { headers: { "Cache-Control": "no-store" } });
        // The jobs array might be in res.data.jobs or res.data, depending on API
      
        let jobsData = Array.isArray(res.data) ? res.data : res.data.jobs;
        if (!Array.isArray(jobsData)) jobsData = [];
        setJobs(jobsData);
      } catch (err) {
        setError("Unable to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // Helper to format date
  function formatDate(dateStr) {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "-";
    return date.toLocaleDateString();
  }

  // Helper to format salary using salaryRange
  function formatSalary(job) {
    // Use salaryRange, salaryRange.currency, salaryRange.max, salaryRange.min
    const salaryRange = job.salaryRange || {};
    const min = salaryRange.min;
    const max = salaryRange.max;
    const currency = salaryRange.currency || "";

    // If both min and max are missing or falsy, return "-"
    if ((!min && !max)) {
      return "-";
    }

    // If both min and max are present
    if (min && max) {
      return `${min} - ${max}${currency ? ` ${currency}` : ""}`;
    }
    // If only min is present
    if (min) {
      return `${min}${currency ? ` ${currency}` : ""}`;
    }
    // If only max is present
    if (max) {
      return `${max}${currency ? ` ${currency}` : ""}`;
    }
    return "-";
  }

  return (
    <>
      <div ref={sectionRef} className="w-full h-full">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <ParticlesBackground />
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              We Are Hiring
            </h1>
          </div>
        </div>

        <section className="w-full h-full flex flex-col gap-20 justify-center items-center py-20 max-sm:py-2 max-sm:gap-5">
          <h1 className="text-white font-bold text-5xl max-sm:text-3xl text-center">
            Career
          </h1>
          <div className="w-full h-full  relative flex flex-col justify-center items-center py-20 bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] overflow-hidden">
            <span className="size-200 absolute top-50 -right-10  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <span className="size-200 absolute top-20 -right-60 rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full flex flex-wrap justify-center items-center gap-8 z-10">
                {loading ? (
                  <div className="text-white text-xl font-semibold py-10">Loading jobs...</div>
                ) : error ? (
                  <div className="bg-red-100 border border-red-300 text-red-700 px-6 py-4 rounded-xl text-center font-medium">
                    {error}
                  </div>
                ) : jobs.length === 0 ? (
                  <div className="bg-blue-100 border border-blue-300 text-blue-700 px-6 py-4 rounded-xl text-center font-medium">
                    No jobs posted yet.
                  </div>
                ) : (
                  jobs.map((job, index) => {
                    const isOpen = job.status === "open";
                    const isClosed = job.status === "closed";
                    return (
                      <div
                        key={job._id || job.id || index}
                        className={`bg-[#2a1850]/80 border border-white/20 shadow-xl rounded-2xl px-8 py-8 lg:w-[28%] md:w-[45%] max-sm:w-[95%] flex flex-col gap-4 transition-all duration-500 ease-in-out ${
                          isOpen
                            ? "hover:bg-[#510ADD]/90 hover:scale-105 hover:shadow-2xl cursor-pointer"
                            : "opacity-70 cursor-not-allowed"
                        }`}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h1 className="text-2xl font-extrabold text-white">{job.title}</h1>
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                              isOpen
                                ? "bg-green-100 text-green-700"
                                : isClosed
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {job.status
                              ? job.status.charAt(0).toUpperCase() + job.status.slice(1)
                              : "-"}
                          </span>
                        </div>
                        {/* Description */}
                        <p className="text-base font-medium text-white/90 mb-2 min-h-[48px]">
                          {job.description
                            ? job.description.length > 120
                              ? job.description.slice(0, 120) + "…"
                              : job.description
                            : "No description provided."}
                        </p>
                        {/* Details Grid */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80 mb-2">
                          <div>
                            <span className="font-semibold">Type:</span>{" "}
                            <span className="font-normal">{job.type || "-"}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Location:</span>{" "}
                            <span className="font-normal">{job.location || "-"}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Department:</span>{" "}
                            <span className="font-normal">{job.department || "-"}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Deadline:</span>{" "}
                            <span className="font-normal">{formatDate(job.applicationDeadline)}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Posted By:</span>{" "}
                            {/* <span className="font-normal">{job.postedBy || "-"}</span> */}
                            <span className="font-normal">admin</span>
                          </div>
                          <div>
                            <span className="font-semibold">Salary:</span>{" "}
                            <span className="font-normal">
                              {formatSalary(job)}
                            </span>
                          </div>
                        </div>
                        {/* View Job Button */}
                        <div className="flex justify-end mt-2">
                          {isOpen ? (
                            <Link
                              href={`/we-are-hiring/${job._id || job.id}`}
                              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition text-sm shadow"
                            >
                              View Job <ArrowRight size={18} />
                            </Link>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-400 text-white font-semibold text-sm shadow opacity-80 cursor-not-allowed"
                              title="This job is closed and cannot be viewed or applied to."
                            >
                              Job Closed <ArrowRight size={18} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
