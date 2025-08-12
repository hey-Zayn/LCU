'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Star, Clock, Users } from 'lucide-react';
import HeroSection from '@/Dev/courseComp/home/HeroSection';
import AboutSection from '@/Dev/courseComp/home/AboutSection';
import { useCourses } from '@/Dev/courseComp/course/CourseContext';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  
  // Use the context instead of local state
  const { courses: allCourses, loading, error, refetch } = useCourses();

  // Extract categories and statuses once when courses load
  useEffect(() => {
    if (allCourses.length > 0) {
      const uniqueCategories = [...new Set(allCourses.map(course => course.category))];
      setAllCategories(uniqueCategories);
      setFilteredCourses(allCourses); // Initialize filtered courses
    }
  }, [allCourses]);

  // Apply filters locally whenever searchTerm, categoryFilter or statusFilter changes
  useEffect(() => {
    if (allCourses.length > 0) {
      let results = allCourses;

      // Apply category filter
      if (categoryFilter) {
        results = results.filter(course => course.category === categoryFilter);
      }

      // Apply status filter
      if (statusFilter) {
        results = results.filter(course => course.status === statusFilter);
      }

      // Apply search term filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        results = results.filter(course => 
          course.title.toLowerCase().includes(term) || 
          course.shortDescription.toLowerCase().includes(term) ||
          course.category.toLowerCase().includes(term)
        );
      }

      setFilteredCourses(results);
    }
  }, [searchTerm, categoryFilter, statusFilter, allCourses]);

  if (loading) {
    return (
      <div className="bg-[#191919] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5209DE] mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#191919] text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-[#1E1E1E] rounded-xl">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Error Loading Courses</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={refetch}
            className="bg-[#5209DE] hover:bg-[#3E07A8] text-white px-6 py-3 rounded-lg transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#191919] text-white">
      <HeroSection />

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-black">
        <div className="mx-auto max-sm:px-6 px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Courses
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our wide range of professional training programs designed to help you acquire in-demand skills for today's job market.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            {/* Search */}
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#a8288f]" size={20} />
              <input
                type="text"
                placeholder="Search for courses..."
                className="w-full pl-10 pr-4 py-3 border border-[#520ADE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8288f] bg-[#1E1E1E] text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                className="w-full px-4 py-3 border border-[#520ADE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8288f] bg-[#191919] text-white"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="" className="bg-[#191919]">All Categories</option>
                {allCategories.map((category) => (
                  <option key={category} value={category} className="bg-[#191919]">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="lg:w-64">
              <select
                className="w-full px-4 py-3 border border-[#520ADE] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8288f] bg-[#191919] text-white"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="" className="bg-[#191919]">All Statuses</option>
                <option value="open" className="bg-[#191919]">Open</option>
                <option value="close" className="bg-[#191919]">Closed</option>
              </select>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course._id || course.id}
                className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-20" />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    course.status === 'open' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {course.status === 'open' ? 'Open' : 'Closed'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-[#5209DE] text-white text-xs font-semibold rounded-full">
                      {course.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="text-amber-400 fill-amber-400" size={16} />
                      <span className="ml-1 text-sm font-medium text-gray-300">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.shortDescription}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-5">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-1 text-gray-400" />
                      <span>{course.students?.toLocaleString() || 0} students</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">${course.price}</span>
                    {course.oldPrice && (
                      <span className="text-gray-400 line-through mr-2">${course.oldPrice}</span>
                    )}
                    <Link
                      href={`/courses/${course._id}`}
                      className={`bg-[#5209DE] hover:bg-[#3E07A8] text-white px-5 py-2 rounded-lg transition-colors font-medium ${
                        course.status === 'open' ? '' : 'cursor-not-allowed opacity-50'
                      }`}
                      onClick={(e) => {
                        if (course.status !== 'open') {
                          e.preventDefault();
                        }
                      }}
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-300 text-lg">No courses found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("");
                  setStatusFilter("");
                }}
                className="mt-4 text-[#5209DE] hover:text-[#3E07A8] font-medium px-4 py-2 rounded-lg border border-[#5209DE]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <AboutSection />
    </div>
  );
};