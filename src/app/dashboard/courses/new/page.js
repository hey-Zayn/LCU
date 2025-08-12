// src/app/(admin)/courses/new/page.js
'use client';

import CourseForm from '@/Dev/Components/admin/CourseForm';

export default function NewCoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Create New Course</h1>
      <CourseForm />
    </div>
  );
}