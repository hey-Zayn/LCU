'use client'
import Link from 'next/link'
import { Edit, Trash2, Star, Clock, Users, Award } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { toast } from "sonner"
import { Skeleton } from "@/components/ui/skeleton"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function CoursesTable({ courses = [], onDelete }) {
  const router = useRouter()
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [courseToDelete, setCourseToDelete] = useState(null)
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' })
  const [statusUpdating, setStatusUpdating] = useState({})
  const [statusError, setStatusError] = useState({})

  const safeCourses = Array.isArray(courses) ? courses : []

  const handleDeleteClick = (course) => {
    setCourseToDelete(course)
    setDeleteModalOpen(true)
  }

  const confirmDelete = () => {
    if (courseToDelete) {
      onDelete(courseToDelete._id)
      toast.success('Course deleted successfully')
    }
    setDeleteModalOpen(false)
  }

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === 'asc' ? '↑' : '↓'
  }

  const sortedCourses = safeCourses.length > 0 ? [...safeCourses].sort((a, b) => {
    if (!sortConfig.key) return 0

    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1
    }
    return 0
  }) : []

  const handleStatusChange = async (course, newStatus) => {
    setStatusUpdating((prev) => ({ ...prev, [course._id]: true }))
    setStatusError((prev) => ({ ...prev, [course._id]: null }))

    try {
      const response = await fetch('/api/courses/status', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: course._id, status: newStatus }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to update status')
      }

      course.status = newStatus
      router.refresh?.()
      toast.success('Status updated successfully')
    } catch (err) {
      setStatusError((prev) => ({ ...prev, [course._id]: err.message }))
      toast.error(err.message || 'Failed to update status')
    } finally {
      setStatusUpdating((prev) => ({ ...prev, [course._id]: false }))
    }
  }

  const getCategoryVariant = (category) => {
    switch (category) {
      case 'Programming': return 'blue'
      case 'Data': return 'green'
      case 'Design': return 'pink'
      case 'Marketing': return 'yellow'
      default: return 'purple'
    }
  }

  const getLevelVariant = (level) => {
    switch (level) {
      case 'Beginner': return 'secondary'
      case 'Intermediate': return 'default'
      case 'Advanced': return 'destructive'
      default: return 'outline'
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              className="cursor-pointer hover:bg-accent"
              onClick={() => requestSort('title')}
            >
              <div className="flex items-center">
                Title {getSortIndicator('title')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-accent"
              onClick={() => requestSort('category')}
            >
              <div className="flex items-center">
                Category {getSortIndicator('category')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-accent"
              onClick={() => requestSort('level')}
            >
              <div className="flex items-center">
                Level {getSortIndicator('level')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-accent"
              onClick={() => requestSort('price')}
            >
              <div className="flex items-center">
                Price {getSortIndicator('price')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-accent"
              onClick={() => requestSort('students')}
            >
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" /> Students {getSortIndicator('students')}
              </div>
            </TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-accent"
              onClick={() => requestSort('rating')}
            >
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4" /> Rating {getSortIndicator('rating')}
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCourses.length > 0 ? (
            sortedCourses.map((course) => (
              <TableRow key={course._id}>
                <TableCell>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-md object-cover"
                        src={course.image}
                        alt={course.title}
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/placeholder-course.jpg'
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">
                        <Link 
                          href={`/dashboard/courses/${course._id}`} 
                          className="hover:text-primary"
                        >
                          {course.title}
                        </Link>
                      </div>
                      <div className="text-sm text-muted-foreground line-clamp-1">
                        {course.shortDescription}
                      </div>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {course.duration}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getCategoryVariant(course.category)}>
                    {course.category}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getLevelVariant(course.level)}>
                    {course.level}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="font-medium">
                    ${course.price?.toLocaleString()}
                    {course.oldPrice && (
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        ${course.oldPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {course.oldPrice && (
                    <div className="text-sm text-green-500">
                      {Math.round(((course.oldPrice - course.price) / course.oldPrice * 100))}% off
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {course.students?.toLocaleString() || 0}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-yellow-500" />
                    <span className="font-medium">
                      {course.rating?.toFixed(1) || 'N/A'}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      ({course.exercises?.toLocaleString() || 0} exercises)
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <Select
                      value={course.status || 'open'}
                      disabled={statusUpdating[course._id]}
                      onValueChange={(value) => handleStatusChange(course, value)}
                    >
                      <SelectTrigger className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="close">Close</SelectItem>
                      </SelectContent>
                    </Select>
                    {statusUpdating[course._id] && (
                      <span className="text-xs text-muted-foreground mt-1">Updating...</span>
                    )}
                    {statusError[course._id] && (
                      <span className="text-xs text-red-500 mt-1">{statusError[course._id]}</span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <Link href={`/dashboard/courses/${course._id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteClick(course)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="h-24 text-center">
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground">No courses found. Create your first course to get started.</p>
                  <Button className="mt-4" asChild>
                    <Link href="/dashboard/courses/new">
                      Create New Course
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <AlertDialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the course "{courseToDelete?.title}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}