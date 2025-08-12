'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Simple skeleton component
function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-muted rounded ${className}`}
      style={{ minHeight: "1em" }}
    />
  );
}

export function SectionCards() {
  const [counts, setCounts] = useState({
    job: 0,
    blog: 0,
    career: 0,
    courses: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchcourses = async()=>{
    const res = await axios.get('/api/courses');
    console.log(res);
  }
  useEffect(()=>{
    fetchcourses()
  },[])

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch counts from the correct endpoints for job and blog
        const [jobRes, blogRes, careerRes, coursesRes] = await Promise.all([
          axios.get("/api/job/count"),
          axios.get("/api/career/count"),
          axios.get("/api/courses"),
          axios.get("/api/blog")
        ]);
       
        setCounts({
          job: typeof jobRes.data?.count === "number" ? jobRes.data.count : 0,
          blog: typeof blogRes.data?.count === "number" ? blogRes.data.count : 0,
          career: typeof careerRes.data?.count === "number" ? careerRes.data.count : 0,
          courses: typeof coursesRes.data?.total === "number"
            ? coursesRes.data.total
            : typeof coursesRes.data?.count === "number"
            ? coursesRes.data.count
            : 0,
        });
      } catch (e) {
        setCounts({
          job: 0,
          blog: 0,
          career: 0,
          courses: 0,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Card data for mapping
  const cards = [
    {
      key: "job",
      description: "Job Posts",
      icon: <IconTrendingUp />,
      footerLoading: "Loading job posts...",
      footerEmpty: "No job posts found",
      footerText: (count) => `Total job posts: ${count}`,
    },
    {
      key: "blog",
      description: "Blog Posts",
      icon: <IconTrendingUp />,
      footerLoading: "Loading blog posts...",
      footerEmpty: "No blog posts found",
      footerText: (count) => `Total blog posts: ${count}`,
    },
    {
      key: "career",
      description: "Applicants",
      icon: <IconTrendingDown />,
      footerLoading: "Loading applicants...",
      footerEmpty: "No applicants found",
      footerText: (count) => `Total applicants: ${count}`,
    },
    {
      key: "courses",
      description: "Courses",
      icon: <IconTrendingUp />,
      footerLoading: "Loading courses...",
      footerEmpty: "No courses found",
      footerText: (count) => `Total courses: ${count}`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.key}>
          <CardHeader>
            <CardDescription>{card.description}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              {loading ? (
                <Skeleton className="h-8 w-16 my-1" />
              ) : (
                counts[card.key]
              )}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                {card.icon}
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="text-sm">
            {loading ? (
              <Skeleton className="h-4 w-32" />
            ) : counts[card.key] === 0 ? (
              card.footerEmpty
            ) : (
              card.footerText(counts[card.key])
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
