"use client";


import React, { useState } from "react";
import { useReviews } from "./ReviewContext";
import { FaStar, FaStarHalfAlt, FaRegStar, FaUserCircle } from "react-icons/fa";

// AddReviewForm Component
const AddReviewForm = () => {
  const { dispatch } = useReviews();
  const [form, setForm] = useState({ client: "", feedback: "", rating: 0, img: null });
  const [errors, setErrors] = useState({});
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key to reset file input

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB limit for file size

    if (file) {
      if (file.size > MAX_SIZE) {
        alert("File size is too large. Please upload a file smaller than 5MB.");
        setForm({ ...form, img: null }); // Clear the file input
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.client.trim()) newErrors.client = "Name is required.";
    if (!form.feedback.trim()) newErrors.feedback = "Feedback is required.";
    if (form.feedback.length < 80) newErrors.feedback = "Feedback must be at least 80 characters.";
    if (form.rating === 0) newErrors.rating = "Rating cannot be zero.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newReview = { ...form, rating: parseFloat(form.rating) || 0 };

    try {
      // Send data to the backend
      const response = await fetch("/api/ceoreview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) throw new Error("Failed to save review");

      const savedReview = await response.json();

      // Add review to the context
      dispatch({ type: "ADD_REVIEW", payload: savedReview });

      // Reset form and clear errors
      setForm({ client: "", feedback: "", rating: 0, img: null });
      setFileInputKey(Date.now()); // Reset the key for the file input to clear its value
      setErrors({});
    } catch (error) {
      console.error(error);
      alert("Error saving review. Please try again.");
    }
  };

  return (
    <>
      <h2 className="my-4">POST REVIEW</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="relative w-full max-w-sm mt-5">
          <input
            type="text"
            name="client"
            value={form.client}
            onChange={handleChange}
            placeholder="Your name"
            className={`peer w-full text-[#00a5f8] text-[20px] bg-transparent border-b-2 ${
              errors.client ? "border-red-500" : "border-gray-600"
            } h-[40px] focus:outline-none focus:border-[#00a5f8] transition-colors duration-300`}
          />
          <label
            htmlFor="client"
            className="absolute text-gray-500 text-base bottom-12 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
          >
            Name
          </label>
          {errors.client && <p className="text-red-500 text-sm mt-1">{errors.client}</p>}
        </div>

        <div className="relative w-full max-w-sm mt-5">
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            placeholder="Write your review"
            maxLength={150}
            minLength={80}
            className={`peer w-full text-[#00a5f8] text-[20px] bg-transparent border-b-2 ${
              errors.feedback ? "border-red-500" : "border-gray-600"
            } h-[40px] focus:outline-none focus:border-[#00a5f8] transition-colors duration-300`}
          />
          <label
            htmlFor="feedback"
            className="absolute text-gray-500 text-base bottom-20 left-0 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300"
          >
            Feedback
          </label>
          {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
          <p className="text-gray-500 text-sm mt-1">
            {form.feedback.length}/150 characters
          </p>
        </div>

        <div className="relative w-full max-w-sm mt-5">
          <label htmlFor="rating" className="block text-gray-500 text-base mb-2">
            Rating (out of 5): <span className="text-[#00a5f8] font-bold">{form.rating}</span>
          </label>
          <input
            type="range"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.5"
            value={form.rating}
            onChange={handleChange}
            className={`w-full ${errors.rating ? "border-red-500" : "border-gray-600"} focus:outline-none`}
          />
          {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
        </div>

        <div className="relative w-full max-w-sm mt-5">
          <label htmlFor="imageUpload" className="block text-gray-500 text-base mb-2">
            Upload your Image
          </label>
          <input
            type="file"
            key={fileInputKey} // Use key to reset file input value
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            onChange={handleFileChange}
            className="pb-2 peer w-full bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-[#00a5f8] transition-colors duration-300"
          />
        </div>

        <button
          type="submit"
          className="mt-4 py-3 w-[120px] bg-[#00a5f8] hover:bg-transparent hover:border hover:border-[#00a5f8] hover:text-[#00a5f8] transition duration-300"
        >
          Post Review
        </button>
      </form>
    </>
  );
};

// ReviewStars Component
const ReviewStars = ({ rating }) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (index < Math.floor(rating)) return <FaStar key={index} className="text-[#efd52c]" />;
    if (index < rating) return <FaStarHalfAlt key={index} className="text-[#efd52c]" />;
    return <FaRegStar key={index} className="text-gray-400" />;
  });
};

// ReviewsSection Component
const ReviewsSection = () => {
  const { reviews } = useReviews();
  const [showAll, setShowAll] = useState(false); // State to control view of all reviews
  const [showForm, setShowForm] = useState(true); // State to control showing of the form
  const [showIntro, setShowIntro] = useState(true); // State to control visibility of the intro paragraph
  
  // Get the latest 4 reviews
  const displayedReviews = showAll ? reviews : reviews.slice(-4);

  return (
    <div className="reviews">
      {/* Title changes based on whether we are showing all reviews */}
      <h1>
        {showAll ? 'All Reviews' : 'Reviews'}
      </h1>

      {/* Hide intro paragraph when viewing all reviews */}
      {showIntro && (
        <p className="tracking-widest text-gray-300 mb-8">
          We value your feedback! Share your experiences with our courses, products, or team to help us improve and inspire others. Your input helps us grow and enhance every interaction!
        </p>
      )}

    

      {/* Toggle to view all reviews */}
      <div className="text-end mb-6">
        {showAll ? (
          <button
            className="text-white rounded-md font-semibold"
            onClick={() => {
              setShowAll(false); // Show only 4 reviews when toggled back
              setShowForm(true); // Show form again when going back to 4 reviews
              setShowIntro(true); // Show intro paragraph when going back
            }}
          >
            Back to Review Page
          </button>
        ) : (
          <button
            className="text-white rounded-md font-semibold"
            onClick={() => {
              setShowAll(true); // Show all reviews
              setShowForm(false); // Hide form when showing all reviews
              setShowIntro(false); // Hide intro paragraph when showing all reviews
            }}
          >
            View All Reviews: {reviews.length}
          </button>
        )}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {displayedReviews.map((review, index) => (
          <div
            key={index}
            className="sm:text-sm text-xs px-4 py-4 bg-gray-700 shadow-lg rounded-lg relative flex flex-col items-center text-center sm:h-[350px] h-[350px] overflow-hidden"
          >
            {/* User Image */}
            <div className="w-24 h-24 rounded-full mb-2 flex items-center justify-center bg-gray-900 overflow-hidden">
              {review.img ? (
                <img
                  src={review.img}
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-gray-400 text-8xl" />
              )}
            </div>

            {/* User Name */}
            <p className="text-lg font-semibold text-slate-50">{review.client}</p>

            {/* Rating */}
            <div className="flex items-center justify-center mb-2">
              <ReviewStars rating={review.rating} />
              <span className="ml-2 text-slate-50">({review.rating.toFixed(1)}) / 5</span>
            </div>

            {/* Feedback */}
            <p className="text-slate-50 text-start">{review.feedback}</p>
          </div>
        ))}
      </div>

      {/* Conditionally render the AddReviewForm only when showForm is true */}
      {showForm && <AddReviewForm />}
    </div>
  );
};

export default ReviewsSection;
