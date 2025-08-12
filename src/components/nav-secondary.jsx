"use client";
import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Card } from "./ui/card";

// Simple Dialog implementation (can be replaced with your own)
function Dialog({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <Card className="shadow-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </Card>
    </div>
  );
}

export function NavSecondary({
  items,
  ...props
}) {
  const [searchDialogOpen, setSearchDialogOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  // Find the search item index (by title or icon)
  const searchIndex = items.findIndex(
    (item) => item.title?.toLowerCase() === "search"
  );

  // Handler for sidebar button click
  function handleSidebarButtonClick(item, e) {
    if (item.title?.toLowerCase() === "search") {
      e.preventDefault();
      setSearchDialogOpen(true);
    }
    // else, let the default <a> handle navigation
  }

  return (
    <>
      <SidebarGroup {...props}>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    onClick={(e) => handleSidebarButtonClick(item, e)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <Dialog open={searchDialogOpen} onClose={() => setSearchDialogOpen(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Search</h2>
          <div>
            <input
              type="text"
              autoFocus
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Type to search..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </Dialog>
    </>
  );
}
