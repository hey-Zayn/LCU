// src/app/(admin)/courses/[id]/delete/page.jsx
'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Trash2, ArrowLeft } from 'lucide-react';

export default function DeleteCoursePage() {
  const router = useRouter();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course');
        }
        const data = await response.json();
        setCourse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/courses/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      
      router.push('/dashboard/courses');
    } catch (err) {
      setError(err.message);
      setIsDeleting(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!course) return <div className="text-center py-8">Course not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-900 px-6 py-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <Trash2 className="mr-2" size={20} />
            Delete Course
          </h2>
        </div>
        
        <div className="p-6">
          <p className="text-gray-300 mb-6">
            Are you sure you want to delete the course <strong className="text-white">{course.title}</strong>? This action cannot be undone.
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-900 text-red-100 rounded">
              {error}
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center px-4 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700"
              disabled={isDeleting}
            >
              <ArrowLeft className="mr-2" size={16} />
              Cancel
            </button>
            
            <button
              onClick={handleDelete}
              className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
              disabled={isDeleting}
            >
              <Trash2 className="mr-2" size={16} />
              {isDeleting ? 'Deleting...' : 'Delete Permanently'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}