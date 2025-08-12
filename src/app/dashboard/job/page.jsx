'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { toast } from 'sonner'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Loader2, Plus } from 'lucide-react'

const formSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters' }),
  department: z.string().min(2, { message: 'Department must be at least 2 characters' }),
  location: z.string().min(2, { message: 'Location must be at least 2 characters' }),
  type: z.enum(['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']),
  description: z.string().min(50, { message: 'Description must be at least 50 characters' }),
  requirements: z.string().min(1, { message: 'Please provide at least one requirement' }),
  responsibilities: z.string().min(1, { message: 'Please provide at least one responsibility' }),
  salaryMin: z.string().optional().transform(val => val ? Number(val) : undefined),
  salaryMax: z.string().optional().transform(val => val ? Number(val) : undefined),
  salaryCurrency: z.string().default('USD'),
  postedBy: z.string().email({ message: 'Please enter a valid email address' }),
  status: z.enum(['open', 'closed', 'paused']),
  applicationDeadline: z.string().optional(),
})

export default function CreateJobPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: '',
      responsibilities: '',
      salaryMin: '',
      salaryMax: '',
      salaryCurrency: 'USD',
      postedBy: '',
      status: 'open',
      applicationDeadline: '',
    },
  })

  async function onSubmit(values) {
    setIsSubmitting(true)
    setUploadProgress(0)

    try {
      const requirementsArr = values.requirements.split('\n').map(r => r.trim()).filter(Boolean)
      const responsibilitiesArr = values.responsibilities.split('\n').map(r => r.trim()).filter(Boolean)

      const response = await fetch('/api/job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          requirements: requirementsArr,
          responsibilities: responsibilitiesArr,
          salaryRange: {
            min: values.salaryMin,
            max: values.salaryMax,
            currency: values.salaryCurrency,
          },
          applicationDeadline: values.applicationDeadline ? new Date(values.applicationDeadline) : null,
        }),
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.error || 'Failed to create job post')

      toast.success('Job posted successfully!')
      form.reset()
      setTimeout(() => router.push('/dashboard/job'), 1200)
    } catch (error) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setIsSubmitting(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="pb-6">
          <CardTitle className="text-3xl font-bold tracking-tight">Post a New Job</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Complete the form below to create a new job posting
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 " >
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Job Title*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Senior Software Engineer"
                            className="h-12 text-base"
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
                    name="department"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Department*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Engineering"
                            className="h-12 text-base"
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
                    name="location"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Location*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Remote, New York"
                            className="h-12 text-base"
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
                    name="type"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Employment Type*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Internship">Internship</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Job Description Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Job Details</h3>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Job Description*</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Provide a comprehensive overview of the role, expectations, and company culture..."
                          className="min-h-[180px] text-base p-4"
                          {...field}
                          disabled={isSubmitting}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Requirements*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={`• Bachelor's degree\n• 3+ years experience\n• Technical skills`}
                            className="min-h-[160px] text-base p-4"
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
                    name="responsibilities"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Responsibilities*</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={`• Lead a team\n• Write reports\n• Develop features`}
                            className="min-h-[160px] text-base p-4"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Salary Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Salary Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="salaryMin"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Minimum Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="50000"
                            className="h-12 text-base"
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
                    name="salaryMax"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Maximum Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="80000"
                            className="h-12 text-base"
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
                    name="salaryCurrency"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Currency</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="USD"
                            className="h-12 text-base"
                            maxLength={6}
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Additional Information Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">Additional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="postedBy"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Posted By Email*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="hr@company.com"
                            className="h-12 text-base"
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
                    name="status"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Job Status*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-base">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="paused">Paused</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="applicationDeadline"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>Application Deadline</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="h-12 text-base"
                            {...field}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-6">
                <div className="flex justify-end">
                  <Button 
                    type="submit" 
                    className="h-12 px-8 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        <Plus className="mr-2 h-5 w-5" />
                        Post Job
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}