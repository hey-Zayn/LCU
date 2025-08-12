'use client'
import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Colors
} from 'chart.js'
import { Line, Bar, Pie } from 'react-chartjs-2'
import { format } from 'date-fns'
import { toast } from 'sonner'

// shadcn components - imported individually
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { RefreshCw, ArrowUpRight, FileText } from 'lucide-react'

// Register ChartJS components
ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Colors
)

export default function AdminDashboard() {
  const router = useRouter()
  const [dailyData, setDailyData] = useState(null)
  const [analytics, setAnalytics] = useState(null)
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const [dailyRes, analyticsRes, contactsRes] = await Promise.all([
        fetch('/api/contacts/daily?t=' + Date.now()),
        fetch('/api/contacts/analytics?t=' + Date.now()),
        fetch('/api/contacts?t=' + Date.now())
      ])

      const [dailyData, analyticsData, contactsData] = await Promise.all([
        dailyRes.json(),
        analyticsRes.json(),
        contactsRes.json()
      ])

      if (dailyData.success) setDailyData(dailyData.data)
      if (analyticsData.success) setAnalytics(analyticsData.data)
      if (contactsData.success) {
        setContacts(contactsData.data.contacts || [])
      } else {
        setError('Failed to load some data')
      }

      setLastUpdated(new Date())
    } catch (err) {
      console.error('Failed to fetch data:', err)
      setError(err.message)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [fetchData])

  const handleRefresh = () => {
    fetchData()
  }

  if (loading && !lastUpdated) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="space-y-4">
          <Skeleton className="h-10 w-[300px]" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="p-6">
                <Skeleton className="h-6 w-[200px] mb-4" />
                <Skeleton className="h-64 w-full" />
              </Card>
            ))}
          </div>
          <Card className="p-6">
            <Skeleton className="h-6 w-[200px] mb-4" />
            <Skeleton className="h-64 w-full" />
          </Card>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Contact Form Analytics</h1>
          {lastUpdated && (
            <p className="text-sm text-muted-foreground">
              Last updated: {format(lastUpdated, 'MMM dd, yyyy h:mm a')}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href="/dashboard/form-analytics/page-source-analytics" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Page Source Analytics
            </Link>
          </Button>
          <Button 
            onClick={handleRefresh}
            disabled={loading}
            className="gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </Button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily Submissions Line Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Daily Submissions (30 Days)</h2>
          <div className="h-64">
            {dailyData ? (
              <Line
                data={{
                  labels: dailyData.labels,
                  datasets: [{
                    label: 'Submissions',
                    data: dailyData.counts,
                    tension: 0.3,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    borderColor: 'hsl(var(--primary))',
                    backgroundColor: 'hsla(var(--primary) / 0.1)',
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: { y: { beginAtZero: true } }
                }}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </div>
        </Card>

        {/* Monthly Submissions Bar Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Submissions</h2>
          <div className="h-64">
            {analytics?.monthly ? (
              <Bar
                data={{
                  labels: analytics.monthly.labels,
                  datasets: [{
                    label: 'Submissions',
                    data: analytics.monthly.counts,
                    barPercentage: 0.8,
                    backgroundColor: 'hsl(var(--primary))',
                    borderColor: 'hsl(var(--primary))',
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: { y: { beginAtZero: true } }
                }}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </div>
        </Card>

        {/* Source Distribution Pie Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Referral Sources</h2>
          <div className="h-64">
            {analytics?.sources ? (
              <Pie
                data={{
                  labels: analytics.sources.map(s => s.name),
                  datasets: [{
                    data: analytics.sources.map(s => s.count),
                    hoverOffset: 10,
                    backgroundColor: [
                      'hsl(var(--primary))',
                      'hsl(var(--secondary))',
                      'hsl(var(--destructive))',
                      'hsl(var(--muted-foreground))',
                      'hsl(var(--accent))'
                    ]
                  }]
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { position: 'right' }
                  }
                }}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                No data available
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* All Submissions Table */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold">All Submissions</h2>
          <Badge variant="outline" className="self-start md:self-auto">
            {contacts.length} records
          </Badge>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <TableRow key={contact._id}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.phone}</TableCell>
                    <TableCell>
                      {contact.service || (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{format(new Date(contact.createdAt), 'MMM dd, yyyy')}</span>
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(contact.createdAt), 'h:mm a')}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    No submissions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  )
}