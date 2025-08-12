"use client";

import React, { createContext, useReducer, useContext, useEffect } from "react";
const ReviewsContext = createContext();

const reviewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_REVIEWS":
      return action.payload;
    case "ADD_REVIEW":
      return [...state, action.payload];
    case "REMOVE_REVIEW":
      return state.filter((_, idx) => idx !== action.payload);
    default:
      return state;
  }
};

export const ReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reviewsReducer, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/ceoreview");
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const reviews = await response.json();
        dispatch({ type: "SET_REVIEWS", payload: reviews });
      } catch (error) {
        console.error(error);
        alert("Error loading reviews. Please try again.");
      }
    };

    fetchReviews();
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews: state, dispatch }}>
      {children}
    </ReviewsContext.Provider>
  );
};

export const useReviews = () => useContext(ReviewsContext);

