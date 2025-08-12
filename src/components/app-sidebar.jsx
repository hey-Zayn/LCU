"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const data = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

 

  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Blog",
      url: "/dashboard/addProduct",
      icon: IconFileDescription,
    },
    // {
    //   title: "All Blogs",
    //   url: "/dashboard/blogList",
    //   icon: IconListDetails,
    // },
    {
      title: "Jobs",
      url: "/dashboard/job",
      icon: IconFolder,
    },
    // {
    //   title: "All Jobs",
    //   url: "/dashboard/jobList",
    //   icon: IconListDetails,
    // },
    // {
    //   title: "Job Application",
    //   url: "/dashboard/application",
    //   icon: IconFileWord,
    // },
    // {
    //   title: "Form Analytics",
    //   url: "/dashboard/form-analytics",
    //   icon: IconChartBar,
    // },
    // {
    //   title: "Source Analytics",
    //   url: "/dashboard/form-analytics/page-source-analytics",
    //   icon: IconDatabase,
    // },
    {
      title: "Courses",
      url: "/dashboard/courses/new",
      icon: IconFileAi,
    },
    // {
    //   title: "All Course",
    //   url: "/dashboard/courses",
    //   icon: IconListDetails,
    // },
    // {
    //   title: "Application Enrolled",
    //   url: "/dashboard/application/enrolled",
    //   icon: IconReport,
    // },
  ],

  // navClouds: [
  //   {
  //     title: "Capture",
  //     icon: IconCamera,
  //     isActive: true,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Proposal",
  //     icon: IconFileDescription,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Prompts",
  //     icon: IconFileAi,
  //     url: "#",
  //     items: [
  //       {
  //         title: "Active Proposals",
  //         url: "#",
  //       },
  //       {
  //         title: "Archived",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  
  documents: [
    {
      title: "Blog",
      url: "/dashboard/addProduct",
      icon: IconFileDescription,
      sub: [
        {
          title: "All Blogs",
          url: "/dashboard/blogList",
          icon: IconListDetails,
        },
      ],
    },
    {
      title: "Jobs",
      url: "/dashboard/job",
      icon: IconFolder,
      sub: [
        {
          title: "All Jobs",
          url: "/dashboard/jobList",
          icon: IconListDetails,
        },
        {
          title: "Job Application",
          url: "/dashboard/application",
          icon: IconFileWord,
        },
      ],
    },
    {
      title: "Form Analytics",
      url: "/dashboard/form-analytics",
      icon: IconChartBar,
      sub: [
        {
          title: "Source Analytics",
          url: "/dashboard/form-analytics/page-source-analytics",
          icon: IconDatabase,
        },
      ],
    },
    {
      title: "Add Course",
      url: "/dashboard/courses/new",
      icon: IconFileAi,
      sub: [
        {
          title: "All Courses",
          url: "/dashboard/courses",
          icon: IconListDetails,
        },
        {
          title: "Application Enrolled",
          url: "/dashboard/application/enrolled",
          icon: IconReport,
        },
      ],
    },
    {
      title: "Subscription",
      url: "/dashboard/subscription",
      icon: IconReport,
    },
    
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Forwardsols.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
