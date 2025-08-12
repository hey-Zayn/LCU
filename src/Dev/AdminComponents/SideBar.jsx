'use client'
import React, { useState } from 'react'
import { Button } from '../Components/ui/button'
import {
  Bell,
  FilePlus,
  LayoutDashboard,
  List,
  UserPlus,
  Briefcase,
  ClipboardList,
  ChevronDown,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Users
} from 'lucide-react'
import AccountToggle from './AccountToggle'
import SearchBar from './SearchBar'
import SideBarBottom from './SideBarBottom'
import Link from 'next/link'

// FormDropdown component (similar structure to other dropdowns)
const FormDropdown = ({ open, onToggle, collapsed }) => (
  <div className="relative">
    <Button
      variant="ghost"
      className={`flex ${collapsed ? 'flex-col items-center justify-center' : 'items-center justify-between'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90 ${open && !collapsed ? 'bg-gray-800/90' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="form-dropdown-content"
      aria-haspopup="true"
      type="button"
    >
      <span className={`flex ${collapsed ? 'flex-col items-center gap-0' : 'items-center gap-3'}`}>
        <ClipboardList className="text-stone-600 dark:text-gray-300" size={18} />
        {!collapsed && <span>Form Analytics</span>}
      </span>
      {!collapsed && (
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      )}
    </Button>
    {open && (
      <div
        id="form-dropdown-content"
        className={
          collapsed
            ? "flex flex-col items-center gap-2 mt-1"
            : "pl-8 py-1 space-y-1 animate-fade-in"
        }
      >
        <Link href="/admin/form-analytics">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Form Analytics" : undefined}
          >
            <ClipboardList className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Form Analytics</span>}
          </Button>
        </Link>
        <Link href="/admin/form-analytics/page-source-analytics">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Page Source Analytics" : undefined}
          >
            <List className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Page Source Analytics</span>}
          </Button>
        </Link>
      </div>
    )}
  </div>
)

// BlogDropdown component (unchanged)
const BlogDropdown = ({ open, onToggle, collapsed }) => (
  <div className="relative">
    <Button
      variant="ghost"
      className={`flex ${collapsed ? 'flex-col items-center justify-center' : 'items-center justify-between'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90 ${open && !collapsed ? 'bg-gray-800/90' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="blog-dropdown-content"
      aria-haspopup="true"
      type="button"
    >
      <span className={`flex ${collapsed ? 'flex-col items-center gap-0' : 'items-center gap-3'}`}>
        <BookOpen className="text-stone-600 dark:text-gray-300" size={18} />
        {!collapsed && <span>Blog</span>}
      </span>
      {!collapsed && (
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      )}
    </Button>
    {open && (
      <div
        id="blog-dropdown-content"
        className={
          collapsed
            ? "flex flex-col items-center gap-2 mt-1"
            : "pl-8 py-1 space-y-1 animate-fade-in"
        }
      >
        <Link href="/admin/addProduct">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Add Blog" : undefined}
          >
            <FilePlus className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Add Blog</span>}
          </Button>
        </Link>
        <Link href="/admin/blogList">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Blog List" : undefined}
          >
            <List className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Blog List</span>}
          </Button>
        </Link>
      </div>
    )}
  </div>
)

// JobDropdown with support for collapsed sidebar (shows icons only, vertical, when collapsed and open)
const JobDropdown = ({ open, onToggle, collapsed }) => (
  <div className="relative">
    <Button
      variant="ghost"
      className={`flex ${collapsed ? 'flex-col items-center justify-center' : 'items-center justify-between'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90 ${open && !collapsed ? 'bg-gray-800/90' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="job-dropdown-content"
      aria-haspopup="true"
      type="button"
    >
      <span className={`flex ${collapsed ? 'flex-col items-center gap-0' : 'items-center gap-3'}`}>
        <Briefcase className="text-stone-600 dark:text-gray-300" size={18} />
        {!collapsed && <span>Job</span>}
      </span>
      {!collapsed && (
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      )}
    </Button>
    {open && (
      <div
        id="job-dropdown-content"
        className={
          collapsed
            ? "flex flex-col items-center gap-2 mt-1"
            : "pl-8 py-1 space-y-1 animate-fade-in"
        }
      >
        <Link href="/admin/job">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Post Job" : undefined}
          >
            <Briefcase className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Post Job</span>}
          </Button>
        </Link>
        <Link href="/admin/jobList">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Job List" : undefined}
          >
            <ClipboardList className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Job List</span>}
          </Button>
        </Link>
        <Link href="/admin/application">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Application" : undefined}
          >
            <ClipboardList className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Application</span>}
          </Button>
        </Link>
      </div>
    )}
  </div>
)

// CourseDropdown with support for collapsed sidebar (shows icons only, vertical, when collapsed and open)
const CourseDropdown = ({ open, onToggle, collapsed }) => (
  <div className="relative">
    <Button
      variant="ghost"
      className={`flex ${collapsed ? 'flex-col items-center justify-center' : 'items-center justify-between'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90 ${open && !collapsed ? 'bg-gray-800/90' : ''}`}
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="course-dropdown-content"
      aria-haspopup="true"
      type="button"
    >
      <span className={`flex ${collapsed ? 'flex-col items-center gap-0' : 'items-center gap-3'}`}>
        <Briefcase className="text-stone-600 dark:text-gray-300" size={18} />
        {!collapsed && <span>Courses</span>}
      </span>
      {!collapsed && (
        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} size={18} />
      )}
    </Button>
    {open && (
      <div
        id="course-dropdown-content"
        className={
          collapsed
            ? "flex flex-col items-center gap-2 mt-1"
            : "pl-8 py-1 space-y-1 animate-fade-in"
        }
      >
        <Link href="/admin/courses/new">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Create Course" : undefined}
          >
            <FilePlus className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Create Course</span>}
          </Button>
        </Link>
        <Link href="/admin/courses">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Course List" : undefined}
          >
            <List className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Course List</span>}
          </Button>
        </Link>




        <Link href="/admin/application/enrolled">
          <Button
            variant="ghost"
            className={
              collapsed
                ? "flex flex-col items-center justify-center w-10 h-10 rounded-lg p-0 text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
                : "flex items-center justify-start gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90"
            }
            title={collapsed ? "Application Enrolled" : undefined}
          >
            <Users className="text-stone-600 dark:text-gray-300" size={18} />
            {!collapsed && <span>Application Enrolled</span>}
          </Button>
        </Link>
      </div>
    )}
  </div>
)

const SideBar = () => {
  const [jobOpen, setJobOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [courseOpen, setCourseOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false) // New state for FormDropdown
  const [collapsed, setCollapsed] = useState(false)

  // Responsive: collapse sidebar on small screens by default
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCollapsed(true)
      }
    }
    window.addEventListener('resize', handleResize)
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setCollapsed(true)
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarWidth = collapsed ? 'w-[64px] min-w-[64px]' : 'w-[250px] sm:w-[300px] min-w-[64px]'

  return (
    <div className="flex">
      <div
        className={`hidden lg:block ${sidebarWidth} space-y-8 border-r border-gray-300 dark:border-gray-700 p-2 sm:p-5 sticky top-0 h-screen transition-all duration-300`}
        style={{ zIndex: 20, backgroundColor: "#33156C" }}
      >
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            {/* Collapse/Expand Button */}
            <div className="flex items-center justify-end mb-2 ">
              <Button
                variant="ghost"
                size="icon"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition bg-[#C9275E]"
                onClick={() => setCollapsed((prev) => !prev)}
              >
                {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </Button>
            </div>

            {!collapsed && <AccountToggle />}
            {!collapsed && <SearchBar />}

            <div className="space-y-1.5">
              <Link href='/admin'>
                <Button
                  variant="ghost"
                  className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    collapsed
                      ? 'bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90'
                      : 'bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90'
                  }`}
                >
                  <LayoutDashboard className="text-stone-600 dark:text-gray-300" size={18} />
                  {!collapsed && <span>Dashboard</span>}
                </Button>
              </Link>

              {/* Blog Dropdown */}
              <BlogDropdown open={blogOpen} onToggle={() => setBlogOpen((prev) => !prev)} collapsed={collapsed} />

              {/* Job Dropdown */}
              <JobDropdown open={jobOpen} onToggle={() => setJobOpen((prev) => !prev)} collapsed={collapsed} />

              {/* Form Analytics Dropdown */}
              <FormDropdown open={formOpen} onToggle={() => setFormOpen((prev) => !prev)} collapsed={collapsed} />

              {/* Course Dropdown */}
              <CourseDropdown open={courseOpen} onToggle={() => setCourseOpen((prev) => !prev)} collapsed={collapsed} />

              <Link href='/admin/addAuthor'>
                <Button
                  variant="ghost"
                  className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    collapsed
                      ? 'bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90'
                      : 'bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90'
                  }`}
                >
                  <UserPlus className="text-stone-600 dark:text-gray-300" size={18} />
                  {!collapsed && <span>Add Author</span>}
                </Button>
              </Link>

              <Link href='/admin/subscription'>
                <Button
                  variant="ghost"
                  className={`flex items-center ${collapsed ? 'justify-center' : 'justify-start'} gap-3 w-full rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                    collapsed
                      ? 'bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90'
                      : 'bg-transparent text-stone-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90'
                  }`}
                >
                  <Bell className="text-stone-600 dark:text-gray-300" size={18} />
                  {!collapsed && <span>Subscription</span>}
                </Button>
              </Link>
            </div>
          </div>

          <div>
            {!collapsed && <SideBarBottom />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar