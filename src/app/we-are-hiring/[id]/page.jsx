"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const JobDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Helper to format date
  function formatDate(dateStr) {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "-";
    return date.toLocaleDateString();
  }

  // Helper to format salary using salaryRange, currency, min, max
  function formatSalary(job) {
    if (!job) return "-";
    // Prefer salaryRange if present and non-empty
    if (job.salaryRange && typeof job.salaryRange === "string" && job.salaryRange.trim() !== "") {
      return job.salaryRange + (job.currency ? ` ${job.currency}` : "");
    }
    // If min or max present, show as "min - max currency"
    const min = job.min ?? job.salaryMin;
    const max = job.max ?? job.salaryMax;
    const currency = job.currency || job.salaryCurrency || "";
    if (min || max) {
      let minStr = min !== undefined && min !== null && min !== "" ? min : "-";
      let maxStr = max !== undefined && max !== null && max !== "" ? max : "";
      if (minStr !== "-" && maxStr !== "") {
        return `${minStr} - ${maxStr}${currency ? ` ${currency}` : ""}`;
      } else if (minStr !== "-") {
        return `${minStr}${currency ? ` ${currency}` : ""}`;
      } else if (maxStr !== "") {
        return `${maxStr}${currency ? ` ${currency}` : ""}`;
      }
    }
    // Fallback
    return "-";
  }

  useEffect(() => {
    if (!id) return;
    const fetchJob = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/job/${id}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch job");
        const data = await res.json();
        setJob(data.job || data);
      } catch (err) {
        setError("Unable to load job. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  // Handler for Apply button
  const handleApplyClick = () => {
    // Navigate to the application form page for this job
    router.push(`/we-are-hiring/${id}/apply`);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#191919] via-[#520ADE] to-[#520ADE] flex flex-col items-center py-12 px-2">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <Link
            href="/we-are-hiring"
            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition text-sm shadow z-50"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
        <div className="bg-[#2a1850]/80 border border-white/20 shadow-2xl rounded-3xl px-8 py-10 flex flex-col gap-6">
          {loading ? (
            <div className="text-white text-xl font-semibold py-10 text-center">Loading job details...</div>
          ) : error ? (
            <div className="bg-red-100 border border-red-300 text-red-700 px-6 py-4 rounded-xl text-center font-medium">
              {error}
            </div>
          ) : !job ? (
            <div className="bg-blue-100 border border-blue-300 text-blue-700 px-6 py-4 rounded-xl text-center font-medium">
              Job not found.
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h1 className="text-4xl font-extrabold text-white mb-2 md:mb-0">{job.title}</h1>
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${
                    job.status === "open"
                      ? "bg-green-100 text-green-700"
                      : job.status === "closed"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {job.status
                    ? job.status.charAt(0).toUpperCase() + job.status.slice(1)
                    : "-"}
                </span>
              </div>
              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-base text-white/90">
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
                  <span className="font-normal">{job.postedBy || "admin"}</span>
                </div>
                <div>
                  <span className="font-semibold">Salary:</span>{" "}
                  <span className="font-normal">
                    {formatSalary(job)}
                  </span>
                </div>
              </div>
              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Job Description</h2>
                <p className="text-white/90 text-base whitespace-pre-line">
                  {job.description ? job.description : "No description provided."}
                </p>
              </div>
              {/* Requirements */}
              {job.requirements && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Requirements</h2>
                  <ul className="list-disc list-inside text-white/90 text-base space-y-1">
                    {Array.isArray(job.requirements)
                      ? job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))
                      : job.requirements
                          .split("\n")
                          .filter(Boolean)
                          .map((req, idx) => <li key={idx}>{req}</li>)}
                  </ul>
                </div>
              )}
              {/* Responsibilities */}
              {job.responsibilities && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Responsibilities</h2>
                  <ul className="list-disc list-inside text-white/90 text-base space-y-1">
                    {Array.isArray(job.responsibilities)
                      ? job.responsibilities.map((res, idx) => (
                          <li key={idx}>{res}</li>
                        ))
                      : job.responsibilities
                          .split("\n")
                          .filter(Boolean)
                          .map((res, idx) => <li key={idx}>{res}</li>)}
                  </ul>
                </div>
              )}
              {/* Apply Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleApplyClick}
                  className="inline-flex items-center gap-1 px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition text-base shadow"
                >
                  Apply for this Job <ArrowRight size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;

/**
 * How to add the application form page for each job:
 *
 * 1. Create a new file at: src/app/we-are-hiring/[id]/apply/page.jsx
 * 2. In that file, implement your job application form component.
 *    You can use the form code that was previously here, and fetch the job details using the id param.
 * 3. The URL /we-are-hiring/[id]/apply will now show the form for the specific job.
 *
 * Example file structure:
 *   src/app/we-are-hiring/[id]/page.jsx      // (this job details page)
 *   src/app/we-are-hiring/[id]/apply/page.jsx // (your job application form page)
 *
 * The Apply button on this page will automatically take users to the correct form page for the job.
 */
