'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { format, parseISO, eachDayOfInterval, eachMonthOfInterval } from 'date-fns';

export default function ApplicationsDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeFilter, setTimeFilter] = useState('month'); // 'day', 'month'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/applications');
        const data = await response.json();
        if (data.success) {
          setApplications(data.data);
        } else {
          setError('Failed to fetch data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Process data for charts
  const processChartData = () => {
    if (!applications.length) return [];

    // Course-wise enrollment
    const courseData = applications.reduce((acc, app) => {
      const existing = acc.find(item => item.name === app.course);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ name: app.course, count: 1 });
      }
      return acc;
    }, []);

    // Daily/Monthly enrollment
    let dateData = [];
    const now = new Date();
    const earliestDate = new Date(Math.min(...applications.map(app => new Date(app.createdAt))));

    if (timeFilter === 'day') {
      const days = eachDayOfInterval({ start: earliestDate, end: now });
      dateData = days.map(day => {
        const dayStr = format(day, 'yyyy-MM-dd');
        return {
          date: dayStr,
          count: applications.filter(app => 
            format(parseISO(app.createdAt), 'yyyy-MM-dd') === dayStr
          ).length
        };
      });
    } else {
      const months = eachMonthOfInterval({ start: earliestDate, end: now });
      dateData = months.map(month => {
        const monthStr = format(month, 'yyyy-MM');
        return {
          date: monthStr,
          count: applications.filter(app => 
            format(parseISO(app.createdAt), 'yyyy-MM') === monthStr
          ).length
        };
      });
    }

    return { courseData, dateData };
  };

  const { courseData, dateData } = processChartData();

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-8">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-400 mb-8">Applications Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Course-wise Enrollment Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Enrollments by Course</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#5209DE" name="Enrollments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily/Monthly Enrollment Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {timeFilter === 'day' ? 'Daily' : 'Monthly'} Enrollments
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setTimeFilter('day')}
                className={`px-3 py-1 rounded ${timeFilter === 'day' ? 'bg-[#5209DE] text-white' : 'bg-gray-200'}`}
              >
                Daily
              </button>
              <button
                onClick={() => setTimeFilter('month')}
                className={`px-3 py-1 rounded ${timeFilter === 'month' ? 'bg-[#5209DE] text-white' : 'bg-gray-200'}`}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#5209DE" name="Enrollments" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-xl font-semibold p-6">All Applications ({applications.length})</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {applications.map((app) => (
                <tr key={app._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.course}</td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      app.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'contacted' ? 'bg-green-100 text-green-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {app.status}
                    </span>
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(parseISO(app.createdAt), 'MMM dd, yyyy')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}