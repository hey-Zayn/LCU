"use client";

import React from "react";
import { ReviewsProvider } from "./ReviewContext";
import ReviewsSection from "./ReviewsSection";

const ReviewsPage = () => {
  return (
    <ReviewsProvider>
      <div className="container mx-auto p-4">
        <ReviewsSection />
      
      </div>
    </ReviewsProvider>
    
  );
};

export default ReviewsPage;