'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
// Remove useToast, use sonner instead
import { toast } from 'sonner';

const CATEGORIES = ['Programming', 'Data', 'Design', 'Marketing', 'IT Infrastructure'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Beginner to Advanced', 'All Levels'];
const STATUS_OPTIONS = ['open', 'close'];

export default function CourseForm({ initial = {} }) {
  const initialData = initial.data || {};
  const router = useRouter();
  // Remove useToast
  // const { toast } = useToast();
  const [formData, setFormData] = useState({
    id: initialData.id || '',
    title: initialData.title || '',
    shortDescription: initialData.shortDescription || '',
    description: initialData.description || '',
    category: initialData.category || '',
    image: initialData.image || '',
    duration: initialData.duration || '',
    level: initialData.level || '',
    price: initialData.price || '',
    oldPrice: initialData.oldPrice || '',
    students: initialData.students || 0,
    rating: initialData.rating || 4.5,
    exercises: initialData.exercises || 0,
    features: initialData.features?.join('\n') || '',
    audience: initialData.audience?.join('\n') || '',
    jobTitles: initialData.jobTitles?.join('\n') || '',
    syllabus: initialData.syllabus?.length > 0
      ? initialData.syllabus
      : [{ title: '', items: [''] }],
    instructor: initialData.instructor || {
      name: '',
      title: '',
      bio: '',
      image: '',
    },
    status: initialData.status || 'open',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [instructorImageFile, setInstructorImageFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (initialData._id) {
      setFormData(prev => ({
        ...prev,
        image: initialData.image || '',
        instructor: {
          ...prev.instructor,
          image: initialData.instructor?.image || ''
        },
        status: initialData.status || 'open',
      }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInstructorChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      instructor: {
        ...formData.instructor,
        [name]: value,
      },
    });
  };

  const handleSyllabusChange = (index, field, value) => {
    const updatedSyllabus = [...formData.syllabus];
    if (field === 'title') {
      updatedSyllabus[index].title = value;
    } else {
      updatedSyllabus[index].items = value.split('\n').filter(item => item.trim());
    }
    setFormData({
      ...formData,
      syllabus: updatedSyllabus,
    });
  };

  const addSyllabusSection = () => {
    setFormData({
      ...formData,
      syllabus: [...formData.syllabus, { title: '', items: [''] }],
    });
  };

  const removeSyllabusSection = (index) => {
    const updatedSyllabus = formData.syllabus.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      syllabus: updatedSyllabus,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.id.trim()) newErrors.id = 'Course ID is required';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.shortDescription.trim()) newErrors.shortDescription = 'Short description is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.level) newErrors.level = 'Level is required';
    if (!formData.status) newErrors.status = 'Status is required';

    if (formData.id && !/^[a-z0-9-]+$/.test(formData.id)) {
      newErrors.id = 'ID can only contain lowercase letters, numbers and hyphens';
    }

    if (formData.duration && !/^\d+\s(weeks|months|days|hours)$/.test(formData.duration)) {
      newErrors.duration = 'Format should be like "12 weeks" or "3 months"';
    }

    if (formData.price < 0) newErrors.price = 'Price cannot be negative';
   
    if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }

    formData.syllabus.forEach((section, index) => {
      if (!section.title.trim()) {
        newErrors[`syllabus-${index}-title`] = 'Section title is required';
      }
      if (section.items.length === 0 || !section.items[0].trim()) {
        newErrors[`syllabus-${index}-items`] = 'At least one item is required';
      }
    });

    if (!formData.instructor.name.trim()) newErrors['instructor-name'] = 'Name is required';
    if (!formData.instructor.title.trim()) newErrors['instructor-title'] = 'Title is required';
    if (!formData.instructor.bio.trim()) newErrors['instructor-bio'] = 'Bio is required';
    if (!formData.instructor.image.trim()) newErrors['instructor-image'] = 'Image URL is required';

    if (!formData.audience.trim()) newErrors.audience = 'At least one audience description is required';
    if (!formData.jobTitles.trim()) newErrors.jobTitles = 'At least one job title is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        image: previewUrl,
      });
    }
  };

  const handleInstructorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInstructorImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setFormData({
        ...formData,
        instructor: {
          ...formData.instructor,
          image: previewUrl,
        },
      });
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.url || data.secure_url;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const formPayload = new FormData();

      formPayload.append('id', formData.id.toLowerCase().trim());
      formPayload.append('title', formData.title);
      formPayload.append('shortDescription', formData.shortDescription);
      formPayload.append('description', formData.description);
      formPayload.append('category', formData.category);
      formPayload.append('duration', formData.duration);
      formPayload.append('level', formData.level);
      formPayload.append('price', formData.price.toString());
      formPayload.append('oldPrice', formData.oldPrice?.toString() || '');
      formPayload.append('students', formData.students.toString());
      formPayload.append('rating', formData.rating.toString());
      formPayload.append('exercises', formData.exercises.toString());
      formPayload.append('status', formData.status);

      formPayload.append('features', JSON.stringify(
        formData.features.split('\n').filter(item => item.trim())
      ));
      formPayload.append('audience', JSON.stringify(
        formData.audience.split('\n').filter(item => item.trim())
      ));
      formPayload.append('jobTitles', JSON.stringify(
        formData.jobTitles.split('\n').filter(item => item.trim())
      ));
      formPayload.append('syllabus', JSON.stringify(formData.syllabus));

      formPayload.append('instructor[name]', formData.instructor.name);
      formPayload.append('instructor[title]', formData.instructor.title);
      formPayload.append('instructor[bio]', formData.instructor.bio);

      if (imageFile) {
        formPayload.append('image', imageFile);
      } else {
        formPayload.append('image', formData.image);
      }

      if (instructorImageFile) {
        formPayload.append('bannerImage', instructorImageFile);
      } else {
        formPayload.append('bannerImage', formData.instructor.image);
      }

      const url = initialData._id ? `/api/courses/${initialData._id}` : '/api/courses';
      const method = initialData._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        body: formPayload
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to save course');
      }

      // Use sonner for toast
      toast.success(
        initialData._id ? "Course updated successfully" : "Course created successfully"
      );

      router.push('/dashboard/courses');
      router.refresh();

    } catch (error) {
      console.error('Submission error:', error);
      // Use sonner for error toast
      toast.error(error.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{initialData._id ? "Edit Course" : "Create New Course"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Course Basic Info */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="id" className={`mb-2`}>Course ID *</Label>
                <Input
                  id="id"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  disabled={!!initialData._id}
                />
                {errors.id && <p className="mt-1 text-sm text-red-500">{errors.id}</p>}
              </div>

              <div>
                <Label htmlFor="title" className={`mb-2`}>Course Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
              </div>

              <div>
                <Label htmlFor="shortDescription" className={`mb-2`}>Short Description *</Label>
                <Textarea
                  id="shortDescription"
                  name="shortDescription"
                  rows={3}
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
                {errors.shortDescription && <p className="mt-1 text-sm text-red-500">{errors.shortDescription}</p>}
              </div>

              <div>
                <Label htmlFor="description" className={`mb-2`}>Full Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>

              <div>
                <Label htmlFor="category" className={`mb-2`}>Category *</Label>
                <Select
                  id="category"
                  name="category"
                  value={formData.category}
                  onValueChange={(value) => setFormData({...formData, category: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="mt-1 text-sm text-red-500">{errors.category}</p>}
              </div>

              <div>
                <Label htmlFor="level" className={`mb-2`}>Level *</Label>
                <Select
                  id="level"
                  name="level"
                  value={formData.level}
                  onValueChange={(value) => setFormData({...formData, level: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a level" />
                  </SelectTrigger>
                  <SelectContent>
                    {LEVELS.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.level && <p className="mt-1 text-sm text-red-500">{errors.level}</p>}
              </div>

              <div>
                <Label htmlFor="status" className={`mb-2`}>Status *</Label>
                <Select
                  id="status"
                  name="status"
                  value={formData.status}
                  onValueChange={(value) => setFormData({...formData, status: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUS_OPTIONS.map(status => (
                      <SelectItem key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.status && <p className="mt-1 text-sm text-red-500">{errors.status}</p>}
              </div>
            </div>

            {/* Course Media & Pricing */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="image" className={`mb-2`}>Image *</Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                />
                {errors.image && <p className="mt-1 text-sm text-red-500">{errors.image}</p>}
                {formData.image && (
                  <div className="mt-2">
                    <img
                      src={formData.image}
                      alt="Course preview"
                      className="h-40 object-cover rounded-md border"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-course.jpg';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className={`mb-2`}>Price ($) *</Label>
                  <Input
                    type="number"
                    id="price"
                    name="price"
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                  />
                  {errors.price && <p className="mt-1 text-sm text-red-500">{errors.price}</p>}
                </div>

                <div>
                  <Label htmlFor="oldPrice" className={`mb-2`}>Old Price ($)</Label>
                  <Input
                    type="number"
                    id="oldPrice"
                    name="oldPrice"
                    min="0"
                    step="0.01"
                    value={formData.oldPrice}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="duration" className={`mb-2`}>Duration (e.g., "12 weeks", "3 months") *</Label>
                <Input
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
                {errors.duration && <p className="mt-1 text-sm text-red-500">{errors.duration}</p>}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="rating" className={`mb-2`}>Rating (0-5)</Label>
                  <Input
                    type="number"
                    id="rating"
                    name="rating"
                    min="0"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleChange}
                  />
                  {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating}</p>}
                </div>

                <div>
                  <Label htmlFor="students" className={`mb-2`}>Students</Label>
                  <Input
                    type="number"
                    id="students"
                    name="students"
                    min="0"
                    value={formData.students}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="exercises" className={`mb-2`}>Exercises</Label>
                  <Input
                    type="number"
                    id="exercises"
                    name="exercises"
                    min="0"
                    value={formData.exercises}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="features" className={`mb-2`}>Features (one per line)</Label>
                <Textarea
                  id="features"
                  name="features"
                  rows={4}
                  value={formData.features}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Audience & Job Titles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="audience" className={`mb-2`}>Target Audience (one per line) *</Label>
              <Textarea
                id="audience"
                name="audience"
                rows={5}
                value={formData.audience}
                onChange={handleChange}
              />
              {errors.audience && <p className="mt-1 text-sm text-red-500">{errors.audience}</p>}
            </div>

            <div>
              <Label htmlFor="jobTitles" className={`mb-2`}>Job Titles (one per line) *</Label>
              <Textarea
                id="jobTitles"
                name="jobTitles"
                rows={5}
                value={formData.jobTitles}
                onChange={handleChange}
              />
              {errors.jobTitles && <p className="mt-1 text-sm text-red-500">{errors.jobTitles}</p>}
            </div>
          </div>

          <Separator />

          {/* Instructor Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Instructor Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="instructor-name" className={`mb-2`}>Instructor Name *</Label>
                <Input
                  type="text"
                  id="instructor-name"
                  name="name"
                  value={formData.instructor.name}
                  onChange={handleInstructorChange}
                />
                {errors['instructor-name'] && <p className="mt-1 text-sm text-red-500">{errors['instructor-name']}</p>}
              </div>

              <div>
                <Label htmlFor="instructor-title" className={`mb-2`}>Instructor Title *</Label>
                <Input
                  type="text"
                  id="instructor-title"
                  name="title"
                  value={formData.instructor.title}
                  onChange={handleInstructorChange}
                />
                {errors['instructor-title'] && <p className="mt-1 text-sm text-red-500">{errors['instructor-title']}</p>}
              </div>

              <div>
                <Label htmlFor="instructor-image" className={`mb-2`}>Instructor Image *</Label>
                <Input
                  type="file"
                  id="instructor-image"
                  name="image"
                  onChange={handleInstructorImageChange}
                />
                {errors['instructor-image'] && <p className="mt-1 text-sm text-red-500">{errors['instructor-image']}</p>}
                {formData.instructor.image && (
                  <div className="mt-2">
                    <img
                      src={formData.instructor.image}
                      alt="Instructor preview"
                      className="h-40 object-cover rounded-md border"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/placeholder-instructor.jpg';
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="instructor-bio" className={`mb-2`}>Instructor Bio *</Label>
                <Textarea
                  id="instructor-bio"
                  name="bio"
                  rows={4}
                  value={formData.instructor.bio}
                  onChange={handleInstructorChange}
                />
                {errors['instructor-bio'] && <p className="mt-1 text-sm text-red-500">{errors['instructor-bio']}</p>}
              </div>
            </div>
          </div>

          <Separator />

          {/* Syllabus Sections */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Course Syllabus *</h2>
              <Button
                type="button"
                onClick={addSyllabusSection}
                variant="secondary"
                size="sm"
              >
                Add Section
              </Button>
            </div>

            {formData.syllabus.map((section, index) => (
              <Card key={index} className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Section {index + 1}</h3>
                  {formData.syllabus.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removeSyllabusSection(index)}
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor={`section-title-${index}`} className={`mb-2`}> Section Title *</Label>
                    <Input
                      type="text"
                      id={`section-title-${index}`}
                      value={section.title}
                      onChange={(e) => handleSyllabusChange(index, 'title', e.target.value)}
                    />
                    {errors[`syllabus-${index}-title`] && (
                      <p className="mt-1 text-sm text-red-500">{errors[`syllabus-${index}-title`]}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor={`section-items-${index}`} className={`mb-2`}>Lessons/Items (one per line) *</Label>
                    <Textarea
                      id={`section-items-${index}`}
                      rows={4}
                      value={section.items.join('\n')}
                      onChange={(e) => handleSyllabusChange(index, 'items', e.target.value)}
                    />
                    {errors[`syllabus-${index}-items`] && (
                      <p className="mt-1 text-sm text-red-500">{errors[`syllabus-${index}-items`]}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4 mt-4" >
          <Button
            type="button"
            onClick={() => router.push('/dashboard/courses')}
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : 'Save Course'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}