"use client";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Chart components from shadcn
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as ChartTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Lucide icons
import {
  RefreshCw,
  Loader2,
  Download,
  FileSpreadsheet,
  FileText,
  AlertCircle,
  MoreHorizontal,
  Eye,
  FileStack,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Calendar,
  User,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Clock4,
  BookOpenCheck,
  FileBadge2,
  BarChart2,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
} from "lucide-react";

// Dynamically import jsPDF to avoid SSR issues
const getJSPDF = () => import("jspdf").then((mod) => mod.default);

// Helper to load image as base64 for PDF
async function getImageBase64(url) {
  if (!url) return null;
  try {
    const res = await fetch(url, { mode: "cors" });
    const blob = await res.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    return null;
  }
}

const PAGE_SIZE = 10;

const STATUS_OPTIONS = [
  { value: "pending", label: "Pending", icon: Clock4, color: "bg-amber-500" },
  { value: "reviewed", label: "Reviewed", icon: BookOpenCheck, color: "bg-blue-500" },
  { value: "interview", label: "Interview", icon: FileBadge2, color: "bg-purple-500" },
  { value: "accepted", label: "Accepted", icon: CheckCircle, color: "bg-green-500" },
  { value: "rejected", label: "Rejected", icon: XCircle, color: "bg-red-500" },
];

// Get image url from various possible fields
function getProfileImage(app) {
  if (!app) return null;
  return app.profileImage || app.image || app.avatar || app.photo || app.picture || null;
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    let pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-4 mb-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>
      {getPageNumbers().map((num, idx) =>
        num === "..." ? (
          <Button key={idx} variant="ghost" size="sm" disabled>
            ...
          </Button>
        ) : (
          <Button
            key={num}
            variant={num === currentPage ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(num)}
            disabled={num === currentPage}
          >
            {num}
          </Button>
        )
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}

function ApplicationModal({ app, onClose }) {
  if (!app) return null;

  function getJobId(app) {
    if (app.jobId) return app.jobId;
    if (app.job_id) return app.job_id;
    if (app.jobReference) return app.jobReference;
    if (app.jobRef) return app.jobRef;
    if (app.positionId) return app.positionId;
    return "-";
  }

  function getJobName(app) {
    if (app.jobName) return app.jobName;
    if (app.jobTitle) return app.jobTitle;
    if (app.role) return app.role;
    if (app.position) return app.position;
    return "-";
  }

  const imageUrl = getProfileImage(app);

  return (
    <Dialog open={!!app} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary flex items-center gap-2">
            <User className="h-5 w-5" />
            Application Details
          </DialogTitle>
          <DialogDescription>
            Submitted on {app.createdAt ? new Date(app.createdAt).toLocaleString() : "unknown date"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            {imageUrl && (
              <div className="flex flex-col items-center">
                <Avatar className="w-32 h-32 border-2 border-primary">
                  <AvatarImage src={imageUrl} alt="Profile" className="object-cover" />
                  <AvatarFallback className="text-2xl">
                    {app.firstName?.[0]}
                    {app.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Personal Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{app.firstName || "-"} {app.lastName || "-"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Mail className="h-4 w-4" /> Email
                    </p>
                    <p className="font-medium break-all">{app.email || "-"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Phone className="h-4 w-4" /> Phone
                    </p>
                    <p className="font-medium">{app.phone || app.phoneNumber || "-"}</p>
                  </div>
                  {app.address && (
                    <div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> Address
                      </p>
                      <p className="font-medium">{app.address}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-primary flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Job Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Position</p>
                    <p className="font-medium">{getJobName(app)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Job ID</p>
                    <p className="font-medium">{getJobId(app)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(app.status)}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-4 w-4" /> Submitted
                    </p>
                    <p className="font-medium">
                      {app.createdAt ? new Date(app.createdAt).toLocaleString() : "-"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <Tabs defaultValue="additional" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="additional">Additional Info</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>
            
            <TabsContent value="additional" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(app)
                  .filter(
                    ([key]) =>
                      ![
                        "firstName", "lastName", "email", "phone", "phoneNumber", "address",
                        "jobName", "jobTitle", "role", "position", "jobId", "job_id", 
                        "jobReference", "jobRef", "positionId", "status", "createdAt",
                        "profileImage", "image", "avatar", "photo", "_id", "id", "picture"
                      ].includes(key)
                  )
                  .map(([key, value]) => (
                    <div key={key} className="border rounded-lg p-3">
                      <p className="text-sm font-medium text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="mt-1 break-words">
                        {typeof value === "object" && value !== null
                          ? JSON.stringify(value, null, 2)
                          : value?.toString() || "-"}
                      </p>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="pt-4">
              <div className="space-y-4">
                {app.cv && (
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">CV/Resume</p>
                        <p className="text-sm text-muted-foreground">
                          {typeof app.cv === "string" ? app.cv : "Attached document"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {app.coverLetter && (
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <div>
                        <p className="font-medium">Cover Letter</p>
                        <p className="text-sm text-muted-foreground">
                          {typeof app.coverLetter === "string" ? app.coverLetter : "Attached document"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {!app.cv && !app.coverLetter && (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-8 w-8 mx-auto mb-2" />
                    <p>No documents attached</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="timeline" className="pt-4">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 h-full w-0.5 bg-muted -translate-x-1/2" />
                  <div className="space-y-6">
                    {app.createdAt && (
                      <div className="relative flex gap-4">
                        <div className="absolute left-4 top-1 h-2 w-2 rounded-full bg-primary -translate-x-1/2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Application Submitted</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(app.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                    {app.statusUpdatedAt && (
                      <div className="relative flex gap-4">
                        <div className="absolute left-4 top-1 h-2 w-2 rounded-full bg-primary -translate-x-1/2" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Status Updated</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(app.statusUpdatedAt).toLocaleString()}
                          </p>
                          <p className="text-sm mt-1">
                            Current status: {getStatusBadge(app.status)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Helper function to convert JSON array to CSV
function jsonToCsv(items, columns) {
  if (!items || !items.length) return "";
  const escape = (v) => `"${String(v ?? "").replace(/"/g, '""').replace(/\n/g, " ")}"`;
  const header = columns.map(escape).join(",");
  const rows = items.map((item) =>
    columns
      .map((col) => {
        let val = item[col];
        if (typeof val === "object" && val !== null) return escape(JSON.stringify(val));
        return escape(val);
      })
      .join(",")
  );
  return [header, ...rows].join("\r\n");
}

// Helper function to trigger download of a Blob
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

// Helper to generate a professional, attractive CV PDF for a single application
async function generateApplicationPdf(app) {
  const jsPDF = await getJSPDF();
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  // Color Palette & Layout
  const primary = "#471DBD";
  const accent = "#E62E76";
  const marginX = 48;
  const marginY = 48;
  const contentWidth = 595 - marginX * 2;
  let y = marginY;

  // Header with Profile Image, Name, Job, Contact
  doc.setFillColor(247, 247, 250);
  doc.rect(0, 0, 595, 170, "F");

  // Profile image
  const imageUrl = getProfileImage(app);
  let imgBase64 = null;
  if (imageUrl) {
    imgBase64 = await getImageBase64(imageUrl);
    if (imgBase64) {
      doc.setDrawColor(230, 46, 118, 0.2);
      doc.setLineWidth(0.5);
      doc.circle(marginX + 50, marginY + 50, 44, "S");
      doc.setDrawColor(166, 182, 102);
      doc.setLineWidth(2);
      doc.circle(marginX + 50, marginY + 50, 40, "S");
      doc.addImage(imgBase64, "JPEG", marginX + 10, marginY + 10, 80, 80, undefined, "FAST");
    }
  }

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(34, 34, 59);
  doc.text(`${app.firstName || ""} ${app.lastName || ""}`.trim() || "Applicant", marginX + 110, marginY + 38);

  // Job Title
  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.setTextColor(71, 29, 189);
  doc.text(app.jobName || app.jobTitle || app.role || app.position || "Applied Position", marginX + 110, marginY + 62);

  // Contact Info
  doc.setFontSize(12);
  doc.setTextColor(108, 117, 125);
  let contactY = marginY + 90;
  if (app.email) {
    doc.textWithLink(app.email, marginX + 110, contactY, { url: `mailto:${app.email}` });
    contactY += 18;
  }
  if (app.phone || app.phoneNumber) {
    doc.text(app.phone || app.phoneNumber, marginX + 110, contactY);
    contactY += 18;
  }
  if (app.address) {
    doc.text(app.address, marginX + 110, contactY);
    contactY += 18;
  }

  // Divider
  y = marginY + 120;
  doc.setDrawColor(230, 46, 118);
  doc.setLineWidth(2);
  doc.line(marginX, y, 595 - marginX, y);
  y += 24;

  // Personal Information
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(71, 29, 189);
  doc.text("Personal Information", marginX, y);
  y += 18;

  const infoFields = [
    { label: "Full Name", value: `${app.firstName || ""} ${app.lastName || ""}`.trim() },
    { label: "Email", value: app.email },
    { label: "Phone", value: app.phone || app.phoneNumber },
    { label: "Address", value: app.address },
    { label: "Submitted", value: app.createdAt ? new Date(app.createdAt).toLocaleString() : "" },
  ];

  let infoY = y;
  let infoX1 = marginX;
  let infoX2 = marginX + contentWidth / 2 + 10;
  let col = 0;
  
  infoFields.forEach(({ label, value }) => {
    if (value) {
      const x = col === 0 ? infoX1 : infoX2;
      doc.setFont("helvetica", "bold");
      doc.setTextColor(71, 29, 189);
      doc.text(`${label}:`, x, infoY);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(34, 34, 59);
      doc.text(String(value), x + 80, infoY);
      if (col === 1) infoY += 18;
      col = (col + 1) % 2;
    }
  });
  
  if (col === 1) infoY += 18;
  y = infoY + 10;

  // Job Information
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(71, 29, 189);
  doc.text("Job Information", marginX, y);
  y += 18;

  const jobFields = [
    { label: "Job Name", value: app.jobName || app.jobTitle || app.role || app.position },
    { label: "Job ID", value: app.jobId || app.job_id || app.jobReference || app.jobRef || app.positionId },
  ];

  jobFields.forEach(({ label, value }) => {
    if (value) {
      doc.setFont("helvetica", "bold");
      doc.setTextColor(71, 29, 189);
      doc.text(`${label}:`, marginX, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(34, 34, 59);
      doc.text(String(value), marginX + 100, y);
      y += 18;
    }
  });

  // Footer
  y = 820;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(108, 117, 125);
  doc.text("Generated by Admin Portal", marginX, y);

  // Save
  const filename = `CV_${app.firstName || ""}_${app.lastName || ""}_${app._id || app.id || "unknown"}.pdf`;
  doc.save(filename.replace(/\s+/g, "_"));
}

// Helper to generate PDF for all applications
async function generateAllApplicationsPdf(applications) {
  const jsPDF = await getJSPDF();
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  let y = 48;
  
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(71, 29, 189);
  doc.text("All Applications Data", 48, y);
  y += 24;

  applications.forEach((app, idx) => {
    if (y > 800) {
      doc.addPage();
      y = 48;
    }
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(230, 46, 118);
    doc.text(`Application #${idx + 1}`, 48, y);
    y += 16;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(34, 34, 59);

    for (const [key, value] of Object.entries(app)) {
      let valStr = typeof value === "object" && value !== null 
        ? JSON.stringify(value, null, 2) 
        : value?.toString() || "";
        
      const lines = doc.splitTextToSize(`${key}: ${valStr}`, 500);
      if (y + lines.length * 14 > 820) {
        doc.addPage();
        y = 48;
      }
      doc.text(lines, 60, y);
      y += lines.length * 14;
    }
    
    y += 16;
    if (y > 800 && idx !== applications.length - 1) {
      doc.addPage();
      y = 48;
    }
  });

  doc.save("all_applications.pdf");
}

function getStatusBadge(status) {
  const opt = STATUS_OPTIONS.find((o) => o.value === status);
  let variant = "secondary";
  if (status === "pending") variant = "warning";
  else if (status === "reviewed") variant = "info";
  else if (status === "interview") variant = "default";
  else if (status === "accepted") variant = "success";
  else if (status === "rejected") variant = "destructive";
  
  return (
    <Badge variant={variant} className="whitespace-nowrap">
      {opt ? opt.label : status || "Unknown"}
    </Badge>
  );
}

function getJobName(app) {
  return app.jobName || app.jobTitle || app.role || app.position || "-";
}

// Chart colors
const CHART_COLORS = {
  pending: "#F59E0B",
  reviewed: "#3B82F6",
  interview: "#8B5CF6",
  accepted: "#10B981",
  rejected: "#EF4444",
};

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalApp, setModalApp] = useState(null);
  const [statusUpdating, setStatusUpdating] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    reviewed: 0,
    interview: 0,
    accepted: 0,
    rejected: 0,
  });
  const [activeChart, setActiveChart] = useState("bar"); // 'bar', 'line', or 'pie'

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/career?sort=-createdAt");
      const data = res.data;
      let apps = data.applications || [];
      
      // Sort by createdAt
      apps = apps.slice().sort((a, b) => {
        const aDate = new Date(a.createdAt || 0).getTime();
        const bDate = new Date(b.createdAt || 0).getTime();
        return bDate - aDate;
      });
      
      // Calculate stats
      const newStats = {
        total: apps.length,
        pending: apps.filter(a => a.status === "pending").length,
        reviewed: apps.filter(a => a.status === "reviewed").length,
        interview: apps.filter(a => a.status === "interview").length,
        accepted: apps.filter(a => a.status === "accepted").length,
        rejected: apps.filter(a => a.status === "rejected").length,
      };
      
      setStats(newStats);
      setApplications(apps);
    } catch (err) {
      setApplications([]);
      setStats({
        total: 0,
        pending: 0,
        reviewed: 0,
        interview: 0,
        accepted: 0,
        rejected: 0,
      });
    }
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchApplications();
  };

  const handleDownload = (app) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(app, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `application_${app._id || app.id || "unknown"}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleDownloadExcel = () => {
    if (!applications.length) {
      alert("No applications to export.");
      return;
    }
    const columns = [
      "_id", "firstName", "lastName", "email", "jobName", "jobTitle", "role", "position",
      "jobId", "job_id", "jobReference", "jobRef", "positionId", "status", "createdAt",
      "profileImage", "image", "avatar", "photo", "picture", "cv", "phone", "phoneNumber", "address"
    ];
    const allKeys = Array.from(
      new Set(
        applications.reduce(
          (acc, app) => acc.concat(Object.keys(app)),
          [...columns]
        )
      )
    );
    const orderedColumns = [
      ...columns.filter((c) => allKeys.includes(c)),
      ...allKeys.filter((k) => !columns.includes(k)),
    ];
    const csv = jsonToCsv(applications, orderedColumns);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    downloadBlob(blob, "applications_export.csv");
  };

  const handleStatusChange = async (app, newStatus) => {
    const id = app._id || app.id;
    setStatusUpdating((prev) => ({ ...prev, [id]: true }));
    try {
      await axios.patch(`/api/career/${id}/status`, { status: newStatus });
      setApplications((prev) =>
        prev.map((a) => (a._id === id || a.id === id ? { ...a, status: newStatus } : a))
      );
      fetchApplications(); // Refresh stats
    } catch (err) {
      alert("Failed to update status.");
    }
    setStatusUpdating((prev) => ({ ...prev, [id]: false }));
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = searchTerm
      ? `${app.firstName || ""} ${app.lastName || ""}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getJobName(app).toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    const matchesStatus = statusFilter !== "all" ? app.status === statusFilter : true;
    
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredApplications.length / PAGE_SIZE);
  const paginatedApps = filteredApplications.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [filteredApplications, currentPage, totalPages]);

  const handleDownloadCV = async (app) => {
    try {
      await generateApplicationPdf(app);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to download CV. Please try again.");
    }
  };

  const handleDownloadAllPDF = async () => {
    try {
      await generateAllApplicationsPdf(applications);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to download all applications. Please try again.");
    }
  };

  // Prepare data for charts
  const chartData = [
    { name: "Pending", value: stats.pending, fill: CHART_COLORS.pending },
    { name: "Reviewed", value: stats.reviewed, fill: CHART_COLORS.reviewed },
    { name: "Interview", value: stats.interview, fill: CHART_COLORS.interview },
    { name: "Accepted", value: stats.accepted, fill: CHART_COLORS.accepted },
    { name: "Rejected", value: stats.rejected, fill: CHART_COLORS.rejected },
  ];

  // Prepare data for line/bar charts showing applications over time
  const applicationsByDate = applications.reduce((acc, app) => {
    if (!app.createdAt) return acc;
    const date = new Date(app.createdAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const timeSeriesData = Object.entries(applicationsByDate)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar with stats */}
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Applications Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Total Applications</span>
                    <span className="text-sm font-bold">{stats.total}</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                
                {STATUS_OPTIONS.map((status) => (
                  <div key={status.value}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium flex items-center gap-1">
                        <status.icon className="h-3 w-3" />
                        {status.label}
                      </span>
                      <span className="text-sm font-bold">{stats[status.value]}</span>
                    </div>
                    <Progress 
                      value={stats.total ? (stats[status.value] / stats.total) * 100 : 0} 
                      className={`h-2 ${status.color}`}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={handleDownloadExcel}
                  disabled={loading || applications.length === 0}
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  Export to Excel
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start gap-2"
                  onClick={handleDownloadAllPDF}
                  disabled={loading || applications.length === 0}
                >
                  <FileStack className="h-4 w-4" />
                  Export All PDFs
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Job Applications</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {filteredApplications.length} applications found
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search applications..."
                        className="pl-9 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[180px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        {STATUS_OPTIONS.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleRefresh}
                          disabled={loading || refreshing}
                        >
                          {refreshing ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <RefreshCw className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Refresh applications</TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Charts Section */}
                <div className="mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Applications Analytics</CardTitle>
                        <div className="flex gap-2">
                          <Button
                            variant={activeChart === "bar" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveChart("bar")}
                          >
                            <BarChart2 className="h-4 w-4 mr-2" />
                            Bar
                          </Button>
                          <Button
                            variant={activeChart === "line" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveChart("line")}
                          >
                            <LineChartIcon className="h-4 w-4 mr-2" />
                            Line
                          </Button>
                          <Button
                            variant={activeChart === "pie" ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveChart("pie")}
                          >
                            <PieChartIcon className="h-4 w-4 mr-2" />
                            Pie
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="h-80">
                      {activeChart === "bar" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Legend />
                            <Bar dataKey="value" name="Applications">
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                      {activeChart === "line" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={timeSeriesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <ChartTooltip />
                            <Legend />
                            <Line 
                              type="monotone" 
                              dataKey="count" 
                              name="Daily Applications"
                              stroke="#471DBD"
                              strokeWidth={2}
                              dot={{ r: 4 }}
                              activeDot={{ r: 6 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      )}
                      {activeChart === "pie" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={chartData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              nameKey="name"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                              {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Pie>
                            <ChartTooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {loading ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                ) : filteredApplications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-lg text-muted-foreground">
                      {searchTerm || statusFilter !== "all" 
                        ? "No matching applications found" 
                        : "No applications found"}
                    </p>
                    {(searchTerm || statusFilter !== "all") && (
                      <Button
                        variant="ghost"
                        className="mt-2"
                        onClick={() => {
                          setSearchTerm("");
                          setStatusFilter("all");
                        }}
                      >
                        Clear filters
                      </Button>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[200px]">Applicant</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Submitted</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paginatedApps.map((app) => {
                            const id = app._id || app.id;
                            const imageUrl = getProfileImage(app);
                            
                            return (
                              <TableRow key={id} className="hover:bg-muted/50">
                                <TableCell>
                                  <div className="flex items-center gap-3">
                                    <Avatar>
                                      <AvatarImage src={imageUrl} />
                                      <AvatarFallback className="bg-primary/10 text-primary">
                                        {app.firstName?.[0]}
                                        {app.lastName?.[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="font-medium">
                                        {app.firstName} {app.lastName}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {app.email}
                                      </p>
                                    </div>
                                  </div>
                                </TableCell>
                                
                                <TableCell>
                                  <p className="font-medium">{getJobName(app)}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {app.jobId || app.job_id || app.jobReference || "-"}
                                  </p>
                                </TableCell>
                                
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    {getStatusBadge(app.status)}
                                    <Select
                                      value={app.status || "pending"}
                                      onValueChange={(value) => handleStatusChange(app, value)}
                                      disabled={statusUpdating[id]}
                                    >
                                      <SelectTrigger className="w-28 h-8">
                                        <SelectValue placeholder="Status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {STATUS_OPTIONS.map((opt) => (
                                          <SelectItem key={opt.value} value={opt.value}>
                                            {opt.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    {statusUpdating[id] && (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    )}
                                  </div>
                                </TableCell>
                                
                                <TableCell className="text-right">
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="text-sm text-muted-foreground">
                                        {app.createdAt
                                          ? new Date(app.createdAt).toLocaleDateString()
                                          : "-"}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      {app.createdAt
                                        ? new Date(app.createdAt).toLocaleString()
                                        : "Unknown date"}
                                    </TooltipContent>
                                  </Tooltip>
                                </TableCell>
                                
                                <TableCell className="text-right">
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="sm">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem onClick={() => setModalApp(app)}>
                                        <Eye className="mr-2 h-4 w-4" />
                                        View Details
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleDownload(app)}>
                                        <Download className="mr-2 h-4 w-4" />
                                        Download JSON
                                      </DropdownMenuItem>
                                      <DropdownMenuItem onClick={() => handleDownloadCV(app)}>
                                        <FileText className="mr-2 h-4 w-4" />
                                        Download PDF
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                    
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={(page) => {
                        if (typeof page === "number" && page >= 1 && page <= totalPages) {
                          setCurrentPage(page);
                        }
                      }}
                    />
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <ApplicationModal app={modalApp} onClose={() => setModalApp(null)} />
    </div>
  );
}