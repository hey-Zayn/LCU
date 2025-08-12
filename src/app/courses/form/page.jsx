import ApplicationForm from "@/Dev/courseComp/course/ApplicationForm";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        id="application-form"
        className="bg-gray-800 p-8 rounded-lg text-white"
      >
        <h2 className="text-2xl font-bold mb-6">Apply for This Course</h2>
        <ApplicationForm />
      </div>
    </div>
  );
};

export default page;
