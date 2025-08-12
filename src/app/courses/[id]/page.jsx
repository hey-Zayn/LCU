'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  Check,
  ArrowLeft,
} from 'lucide-react';
import ApplicationForm from '@/Dev/courseComp/course/ApplicationForm';
import Link from 'next/link';

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/courses/${id}`);

        if (!response.ok) {
          let message = 'Failed to fetch course';

          try {
            const errorData = await response.json();
            message = errorData.message || message;
          } catch (err) {
            // If the response isn't JSON, don't crash
            console.error('Non-JSON error response');
          }

          throw new Error(message);
        }


        const data = await response.json();
        setCourse(data.data);

        // console.log('Fetched course:', data);

        // Fetch related courses if category exists
        if (data.category) {
          const relatedResponse = await fetch(`/api/courses?category=${data.category}`);
          const relatedData = await relatedResponse.json();
          setRelatedCourses(
            Array.isArray(relatedData)
              ? relatedData.filter(c => c._id !== data._id).slice(0, 3)
              : []
          );
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  useEffect(() => {
    if (course) {
      window.scrollTo(0, 0);
      document.title = `${course.title} | SkillMaster`;
    }

    return () => {
      const defaultTitle = document.querySelector(
        "title[data-default]"
      )?.textContent;
      if (defaultTitle) document.title = defaultTitle;
    };
  }, [course]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          {error || 'Course Not Found'}
        </h2>
        <p className="mb-6">
          The course you're looking for doesn't exist or has been removed.
        </p>

        <Link href="/courses">
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Back to Courses
        </button>
        </Link>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <p className="mb-6">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/courses">
        <button
          
          className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Back to Courses
        </button>
        </Link>
      </div>
    );
  }

  const audience = course.audience || [];
  const jobTitles = course.jobTitles || [];

  return (
    <div className="bg-[#000] text-white">
      {/* Course Header */}
      <div className="pt-30 bg-gradient-to-b from-[#520ADE]/95 via-[#520ADE]/90 to-[#000000] text-white py-16">
        <div className="mx-auto max-sm:px-6 px-10">
          <button
            onClick={() => router.push("/courses")}
            className="flex items-center bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg mb-4 cursor-pointer"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Courses
          </button>

          <div className="text-white rounded-2xl p-8 max-sm:px-4 flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Left Side */}
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6">
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-10 mb-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 font-semibold text-xl">
                    ★ {course.rating}
                  </span>
                  <span className="text-gray-400">average course rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-xl">
                    {course.exercises}
                  </span>
                  <span className="text-gray-400">practice exercises</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-xl">
                    {course.duration ? course.duration.split(" ")[0] : "N/A"}

                  </span>
                  <span className="text-gray-400">hours of content</span>
                </div>
              </div>

              <button className="bg-pink-700 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg text-lg mb-4 cursor-pointer">
                Get started &nbsp;{" "}
                <span className="line-through text-gray-400">
                  {course.oldPrice}
                </span>{" "}
                <span className="text-white font-bold">${course.price}</span>
              </button>

              <p className="text-sm text-gray-400">
               {course?.students ? course.students.toLocaleString() : "0"} learners already enrolled

              </p>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/3">
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mx-auto max-sm:px-6 px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-700 mb-8">
              <div className="flex space-x-8">
                {["overview", "syllabus", "instructor"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium ${activeTab === tab
                      ? "text-white border-b-2 border-white"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-12">
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <h3 className="text-xl font-semibold mb-4">
                    What You'll Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {course?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check
                          size={20}
                          className="text-green-500 mt-1 mr-3 flex-shrink-0"
                        />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Who This Course is For
                  </h3>
                  <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <ul className="space-y-3">
                      {audience.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            size={20}
                            className="text-green-500 mt-1 mr-3 flex-shrink-0"
                          />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Job Titles Section */}
                  <h3 className="text-xl font-semibold mb-4">
                    What Job Titles Can I Apply For After Completing the Course?
                  </h3>
                  <div className="bg-gray-800 p-6 rounded-lg mb-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {jobTitles.map((title, index) => (
                        <li key={index} className="flex items-start">
                          <Check
                            size={20}
                            className="text-green-500 mt-1 mr-3 flex-shrink-0"
                          />
                          <span className="text-gray-300">{title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "syllabus" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Course Syllabus</h2>
                  <div className="space-y-6">
                    {course.syllabus.map((section, index) => (
                      <div
                        key={index}
                        className="border border-gray-700 rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-800 px-6 py-4">
                          <h3 className="font-semibold text-white">
                            {index + 1}. {section.title}
                          </h3>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <Check
                                  size={18}
                                  className="text-green-500 mt-1 mr-3 flex-shrink-0"
                                />
                                <span className="text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "instructor" && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Course Instructor</h2>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {course.instructor.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {course.instructor.title}
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center">
                          <Star
                            className="text-yellow-500 fill-yellow-500 mr-1"
                            size={16}
                          />
                          <span className="text-gray-300 text-sm">
                            {course.rating} Instructor Rating
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 text-gray-300" size={16} />
                          <span className="text-gray-300 text-sm">
                            {course.students} Students
                          </span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="mr-1 text-gray-300" size={16} />
                          <span className="text-gray-300 text-sm">
                            3 Courses
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Application Form */}
            <div id="application-form" className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Apply for This Course</h2>
              <ApplicationForm courseTitle={course.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
