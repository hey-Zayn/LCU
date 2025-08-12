"use client";

import React, { useEffect } from "react";

import BusinessOperations from "@/Dev/Components/Business-operations";
import ServiceForm from "@/Dev/Components/ServiceForm";
import ProjectFilterComponent from "@/Dev/Components/ui/ProjectFilterComponent";
import PortfolioHero from "@/Dev/Components/ui/PortfolioHero";
import HaloHeroSection from "@/Dev/Components/ui/HaloHeroSection";
import InteractiveTimeline from "@/Dev/Components/ui/InteractiveTimeline";

const Page = () => {
  useEffect(() => {
    // Check if the page has already been refreshed to prevent infinite loop
    if (!sessionStorage.getItem("hasRefreshed")) {
      sessionStorage.setItem("hasRefreshed", "true");
      window.location.reload();
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#191919]">
      <PortfolioHero />
      <InteractiveTimeline />
      <section className="w-full h-full bg-black">
        <div>
          <ProjectFilterComponent />
        </div>
      </section>
      <HaloHeroSection />
      <ServiceForm />
      <BusinessOperations />
    </div>
  );
};

export default Page;
