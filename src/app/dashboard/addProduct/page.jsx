'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { toast } from 'sonner'
import { UploadCloud, X, Loader2 } from 'lucide-react'
import { Progress } from '@/components/ui/progress'

// Form validation schema
const formSchema = z.object({
  title: z.string().min(5, {
    message: 'Title must be at least 5 characters',
  }),
  category: z.string().min(1, {
    message: 'Please select a category',
  }),
  description: z.string().min(50, {
    message: 'Content must be at least 50 characters',
  }),
  image: z.instanceof(File).refine(
    (file) => file.size <= 5_000_000, // 5MB
    { message: 'Max image size is 5MB' }
  ),
  author: z.string().default('zain'),
  authorImg: z.string().default('https://api.dicebear.com/9.x/notionists/svg'),
})

const categories = [
  'Technology',
  'Business',
  'Marketing',
  'Design',
  'Development',
  'SEO',
  'Social Media',
]

export default function AddBlogPost() {
  const router = useRouter()
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      author: 'zain',
      authorImg: 'https://api.dicebear.com/9.x/notionists/svg',
    },
  })

  const fileRef = form.register('image')

  const onSubmit = async (values) => {
    setIsSubmitting(true)
    setUploadProgress(0)

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value)
    })

    try {
      const response = await axios.post('/api/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          )
          setUploadProgress(percentCompleted)
        },
      })

      if (response.data.success) {
        toast({
          title: 'Success',
          description: 'Blog post created successfully!',
          variant: 'default',
        })
        form.reset()
        router.push('/dashboard/blogList')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description:
          error.response?.data?.message || 'Failed to create blog post',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create New Blog Post</CardTitle>
          <CardDescription>
            Fill out the form below to publish a new blog post
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter blog title"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isSubmitting}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your blog content here..."
                        rows={8}
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                      <div className="mt-1">
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="dropzone-file"
                            className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
                              form.formState.errors.image
                                ? 'border-destructive bg-destructive/5'
                                : 'border-border bg-muted hover:bg-muted/50'
                            }`}
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                              {field.value?.name ? (
                                <div className="flex flex-col items-center">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="text-sm font-medium text-foreground truncate max-w-xs">
                                      {field.value.name}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        form.setValue('image', undefined, {
                                          shouldValidate: true,
                                        })
                                      }}
                                      className="text-muted-foreground hover:text-foreground"
                                    >
                                      <X className="h-4 w-4" />
                                    </button>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    Click to change
                                  </span>
                                </div>
                              ) : (
                                <>
                                  <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                                  <p className="mb-1 text-sm text-muted-foreground">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>{' '}
                                    or drag and drop
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    SVG, PNG, JPG or GIF (MAX. 5MB)
                                  </p>
                                </>
                              )}
                            </div>
                            <Input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              disabled={isSubmitting}
                              {...fileRef}
                              onChange={(e) => {
                                fileRef.onChange(e)
                                if (e.target.files?.[0]) {
                                  form.setValue('image', e.target.files[0], {
                                    shouldValidate: true,
                                  })
                                }
                              }}
                            />
                          </label>
                        </div>
                        {uploadProgress > 0 && uploadProgress < 100 && (
                          <Progress
                            value={uploadProgress}
                            className="mt-2 h-2"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 px-0 pb-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => form.reset()}
                  disabled={isSubmitting}
                >
                  Reset
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Publishing...
                    </>
                  ) : (
                    'Publish Blog'
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}