'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pathname = usePathname();

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/courses?limit=1000');
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to fetch courses");

      setCourses(data.data);
      // console.log('Fetched courses:', data.data);

      localStorage.setItem('courses', JSON.stringify(data.data)); // Cache in localStorage
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isHomePage = pathname === '/' || pathname === '/courses';
    const isFirstLoad = performance.getEntriesByType('navigation')[0]?.type === 'reload';

    if (isHomePage || isFirstLoad) {
      const cachedCourses = localStorage.getItem('courses');

      if (cachedCourses) {
        setCourses(JSON.parse(cachedCourses));
        setLoading(false);
        fetchCourses();
      } else {
        fetchCourses();
      }
    } else {
      setLoading(false); 
    }
  }, [pathname]); 

  return (
    <CourseContext.Provider value={{ courses, loading, error, refetch: fetchCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);