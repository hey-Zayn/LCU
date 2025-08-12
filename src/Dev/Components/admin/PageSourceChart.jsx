
'use client';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Colors
);

export default function PageSourceChart() {
  const [pageSources, setPageSources] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usePageUrl, setUsePageUrl] = useState(true); // Toggle between pageUrl and location

  const fetchPageSources = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/contacts/pagesources');
      const data = await res.json();
      
      if (data.success) {
        setPageSources(data.data);
      } else {
        setError(data.error || 'Failed to load page sources');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPageSources();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading page sources...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  const sourceData = usePageUrl ? pageSources.byPageUrl : pageSources.byLocation;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          User Acquisition Sources
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Show by:</span>
          <button
            onClick={() => setUsePageUrl(true)}
            className={`px-3 py-1 text-sm rounded ${usePageUrl ? 'bg-blue-100 text-blue-600' : 'bg-gray-300'}`}
          >
            Page URL
          </button>
          <button
            onClick={() => setUsePageUrl(false)}
            className={`px-3 py-1 text-sm rounded ${!usePageUrl ? 'bg-blue-100 text-blue-600' : 'bg-gray-300'}`}
          >
            Location
          </button>
        </div>
      </div>

      <div className="h-64">
        <Pie
          data={{
            labels: sourceData.map(item => item.source),
            datasets: [{
              data: sourceData.map(item => item.count),
              hoverOffset: 10
            }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  boxWidth: 12,
                  padding: 20
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const value = context.raw;
                    const percentage = Math.round((value / total) * 100);
                    return `${context.label}: ${value} (${percentage}%)`;
                  }
                }
              }
            }
          }}
        />
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>Total submissions: {sourceData.reduce((sum, item) => sum + item.count, 0)}</p>
        <p>Showing top {sourceData.length} sources</p>
      </div>
    </div>
  );
}