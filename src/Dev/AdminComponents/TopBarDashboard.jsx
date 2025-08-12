"use client"
import { Calendar, LogOut, Bell } from "lucide-react";
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const mockNotifications = [
  { id: 1, message: "New user registered", time: "2 min ago" },
  { id: 2, message: "New course submitted for review", time: "10 min ago" },
  { id: 3, message: "Subscription payment received", time: "1 hour ago" },
];

const TopBarDashboard = () => {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const bellRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        bellRef.current &&
        !bellRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    }
    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifications]);

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      toast.success('Logged out successfully!');
      router.push('/login');
    } catch (error) {
      toast.error('Logout failed');
      console.error('Logout error:', error);
    }
  };

  const unreadCount = notifications.length;

  return (
    <>
      <div className="border-b px-4 mb-4 pt-3 pb-4 border-gray-300 dark:border-gray-700 bg-[#33156C]">
        <div className="flex items-center justify-between p-0.5">
          <div>
            <span className="text-sm font-bold block text-stone-950 dark:text-white">
              🚀 Welcome Back
            </span>
            <span className="text-xs block text-stone-500 dark:text-stone-400">
              {
                new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })
              }
            </span>
          </div>

          <div className="flex items-center gap-2 relative">
            {/* Bell Icon for Notifications */}
            <button
              ref={bellRef}
              className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Notifications"
              onClick={() => setShowNotifications((prev) => !prev)}
              type="button"
            >
              <Bell className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 bg-pink-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none border-2 border-white dark:border-gray-900">
                  {unreadCount}
                </span>
              )}
            </button>
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div
                ref={dropdownRef}
                className="absolute right-16 top-10 z-50 w-72 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2"
              >
                <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-800 dark:text-gray-100">
                  Notifications
                </div>
                {notifications.length === 0 ? (
                  <div className="px-4 py-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                    No new notifications.
                  </div>
                ) : (
                  <ul>
                    {notifications.map((notif) => (
                      <li
                        key={notif.id}
                        className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 border-b last:border-b-0 border-gray-100 dark:border-gray-800"
                      >
                        <div className="font-medium">{notif.message}</div>
                        <div className="text-xs text-gray-400">{notif.time}</div>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="px-4 py-2 text-right">
                  <button
                    className="text-xs text-pink-600 hover:underline"
                    onClick={() => setNotifications([])}
                  >
                    Mark all as read
                  </button>
                </div>
              </div>
            )}

            <Link href={'/'}>
              <button className="flex text-sm items-center gap-2 bg-red-50/10 border border-red-200/30 transition-colors hover:bg-red-50/20 hover:border-red-300/50 px-3 py-1.5 rounded">
                <span className="text-red-100 hover:text-white">Back to Home</span>
              </button>
            </Link>
            
            <button 
              onClick={handleLogout}
              className="flex text-sm items-center gap-2 bg-red-100 dark:bg-red-900/20 transition-colors hover:bg-red-200 dark:hover:bg-red-900/40 px-3 py-1.5 rounded text-red-700 dark:text-red-400"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBarDashboard;