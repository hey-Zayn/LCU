'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
    author: "zain",
    authorImg: "https://api.dicebear.com/9.x/notionists/svg"
  });

  const categories = [
    'Technology',
    'Business',
    'Marketing',
    'Design',
    'Development',
    'SEO',
    'Social Media'
  ];

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`/api/blog?id=${id}`);
      if (res.data.blog) {
        setFormData({
          title: res.data.blog.title,
          description: res.data.blog.description || res.data.blog.content || '',
          category: res.data.blog.category,
          image: res.data.blog.image,
          author: res.data.blog.author || "zain",
          authorImg: res.data.blog.authorImg || "https://api.dicebear.com/9.x/notionists/svg"
        });
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      toast.error('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (value) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('currentImage', formData.image);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('authorImg', formData.authorImg);

      if (selectedImage) {
        formDataToSend.append('image', selectedImage);
      }

      const res = await axios.put(`/api/blog?id=${id}`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (res.data.success) {
        toast.success('Blog updated successfully');
        router.push('/dashboard/blogList');
      } else {
        toast.error(res.data.message || 'Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to update blog');
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center min-h-screen">
        <Loader2 className="animate-spin h-10 w-10 text-primary" />
      </div>
    );
  }

  return (
    <div className=" min-h-screen py-8 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="rounded-xl shadow-lg border border-border/80">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-primary">
              Edit Blog Post
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="title" className="font-semibold">
                  Title
                </Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter blog title"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description" className="font-semibold">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={6}
                  required
                  placeholder="Enter blog description"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="category" className="font-semibold">
                  Category
                </Label>
                <Select value={formData.category} onValueChange={handleCategoryChange}>
                  <SelectTrigger id="category" className="mt-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="image" className="font-semibold">
                  Image
                </Label>
                <Input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="mt-1"
                />
                {formData.image && !selectedImage && (
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">Current Image:</p>
                    <img
                      src={formData.image}
                      alt="Current"
                      className="mt-1 h-20 w-auto object-cover rounded border border-border/80"
                    />
                  </div>
                )}
              </div>

              <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 pt-2 px-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push('/dashboard/blogList')}
                  className="font-semibold"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="font-semibold"
                >
                  Update Post
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
