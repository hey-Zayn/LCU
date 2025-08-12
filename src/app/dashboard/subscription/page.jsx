'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
// Use lucide-react for icons
import { Trash2 } from 'lucide-react'

export default function EmailSubscriptionsPage() {
  const [emails, setEmails] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSubscriptions = async () => {
    try {
      const res = await axios.get('/api/email')
      const formattedEmails = res.data.emails.map(email => ({
        ...email,
        createdAt: new Date(email.date || email.createdAt)
      }))
      setEmails(formattedEmails)
    } catch (error) {
      console.error('Error fetching subscriptions:', error)
      toast.error('Failed to load subscriptions')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/email?id=${id}`)
      toast.success('Subscription removed successfully')
      fetchSubscriptions()
    } catch (error) {
      console.error('Error deleting subscription:', error)
      toast.error('Failed to remove subscription')
    }
  }

  useEffect(() => {
    fetchSubscriptions()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col space-y-4 w-full max-w-md">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-8">
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Email Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Email</TableHead>
                <TableHead>Date Subscribed</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emails.length > 0 ? (
                emails.map((email) => (
                  <TableRow key={email._id}>
                    <TableCell className="font-medium">{email.email}</TableCell>
                    <TableCell>
                      {email.createdAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(email._id)}
                        className="text-destructive hover:text-destructive/90 flex items-center gap-1"
                        title="Remove"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    No subscriptions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}