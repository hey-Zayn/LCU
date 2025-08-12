'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { toast } from 'sonner'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react'

const DEFAULT_FORM = {
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
}

export default function EditJobPage() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id

  const [form, setForm] = useState(DEFAULT_FORM)
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    setFetching(true)
    setError('')
    
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/job/${id}`)
        if (!res.ok) {
          const data = await res.json()
          throw new Error(data.error || 'Failed to fetch job data')
        }
        
        const data = await res.json()
        const job = data.job || data
        
        setForm({
          title: job.title || '',
          department: job.department || '',
          location: job.location || '',
          type: job.type || 'Full-time',
          description: job.description || '',
          requirements: typeof job.requirements === 'string'
            ? job.requirements
            : Array.isArray(job.requirements)
              ? job.requirements.join('\n')
              : '',
          responsibilities: typeof job.responsibilities === 'string'
            ? job.responsibilities
            : Array.isArray(job.responsibilities)
              ? job.responsibilities.join('\n')
              : '',
          salaryMin: job.salaryMin !== undefined 
            ? job.salaryMin 
            : (job.salaryRange?.min ?? ''),
          salaryMax: job.salaryMax !== undefined 
            ? job.salaryMax 
            : (job.salaryRange?.max ?? ''),
          salaryCurrency: job.salaryCurrency || job.salaryRange?.currency || 'USD',
          postedBy: job.postedBy || '',
          status: job.status || 'open',
          applicationDeadline: job.applicationDeadline
            ? job.applicationDeadline.slice(0, 10)
            : '',
        })
      } catch (err) {
        setError(err.message || 'Failed to fetch job data')
        toast.error('Failed to load job data')
      } finally {
        setFetching(false)
      }
    }

    fetchJob()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const payload = {
        ...form,
        requirements: form.requirements
          ? form.requirements.split('\n').map(s => s.trim()).filter(Boolean)
          : [],
        responsibilities: form.responsibilities
          ? form.responsibilities.split('\n').map(s => s.trim()).filter(Boolean)
          : [],
      }

      const res = await fetch(`/api/job?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to update job')
      }

      toast.success('Job updated successfully')
      setTimeout(() => router.push('/dashboard/jobList'), 800)
    } catch (err) {
      setError(err.message || 'An error occurred while updating the job')
      toast.error('Failed to update job')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Edit Job Post</CardTitle>
          <CardDescription className="text-muted-foreground text-lg mt-1">
            Update the details below to edit this job opening
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertTriangle className="h-5 w-5" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {fetching ? (
            <div className="space-y-6 p-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-5 w-[140px]" />
                  <Skeleton className="h-14 w-full rounded-lg" />
                </div>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="title" className="text-base">Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Software Engineer"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="department" className="text-base">Department</Label>
                  <Input
                    id="department"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    placeholder="e.g. Engineering"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="location" className="text-base">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="e.g. Remote, New York"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="type" className="text-base">Type</Label>
                  <Select
                    value={form.type}
                    onValueChange={(value) => handleSelectChange("type", value)}
                  >
                    <SelectTrigger className="h-14 text-lg px-5 py-4 rounded-lg">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                      <SelectItem value="Temporary">Temporary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="salaryMin" className="text-base">Salary Min</Label>
                  <Input
                    id="salaryMin"
                    name="salaryMin"
                    type="number"
                    value={form.salaryMin}
                    onChange={handleChange}
                    placeholder="e.g. 50000"
                    min="0"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="salaryMax" className="text-base">Salary Max</Label>
                  <Input
                    id="salaryMax"
                    name="salaryMax"
                    type="number"
                    value={form.salaryMax}
                    onChange={handleChange}
                    placeholder="e.g. 100000"
                    min="0"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="salaryCurrency" className="text-base">Salary Currency</Label>
                  <Input
                    id="salaryCurrency"
                    name="salaryCurrency"
                    value={form.salaryCurrency}
                    onChange={handleChange}
                    placeholder="e.g. USD, PKR, EUR"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="postedBy" className="text-base">Posted By</Label>
                  <Input
                    id="postedBy"
                    name="postedBy"
                    value={form.postedBy}
                    onChange={handleChange}
                    placeholder="e.g. admin@company.com"
                    className="h-14 text-lg px-5 py-4 rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="status" className="text-base">Status</Label>
                  <Select
                    value={form.status}
                    onValueChange={(value) => handleSelectChange("status", value)}
                  >
                    <SelectTrigger className="h-14 text-lg px-5 py-4 rounded-lg">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="paused">Paused</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="applicationDeadline" className="text-base">Application Deadline</Label>
                <Input
                  id="applicationDeadline"
                  name="applicationDeadline"
                  type="date"
                  value={form.applicationDeadline}
                  onChange={handleChange}
                  className="h-14 text-lg px-5 py-4 rounded-lg max-w-md"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="description" className="text-base">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={7}
                  placeholder="Describe the job role, expectations, etc."
                  className="text-lg px-5 py-4 rounded-lg min-h-[120px]"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="requirements" className="text-base">Requirements (one per line)</Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  rows={6}
                  placeholder={`- Bachelor's degree\n- 3+ years experience`}
                  className="text-lg px-5 py-4 rounded-lg min-h-[100px]"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="responsibilities" className="text-base">Responsibilities (one per line)</Label>
                <Textarea
                  id="responsibilities"
                  name="responsibilities"
                  value={form.responsibilities}
                  onChange={handleChange}
                  rows={6}
                  placeholder={`- Lead a team\n- Write reports`}
                  className="text-lg px-5 py-4 rounded-lg min-h-[100px]"
                />
              </div>

              <CardFooter className="flex justify-end pt-8 px-0">
                <Button type="submit" disabled={loading} className="h-14 text-lg px-8 py-4 rounded-lg">
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5 mr-3" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}