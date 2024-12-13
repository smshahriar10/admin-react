import React, { useState, useEffect, useRef } from "react";
import { MdNotifications, MdMenu } from "react-icons/md";

export default function Header({ isSidebarOpen, toggleSidebar }) {
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotificationDropdown(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    }

    function handleEsc(event) {
      if (event.key === "Escape") {
        setShowNotificationDropdown(false);
        setShowProfileDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown((prev) => !prev);
    // Close profile dropdown if open
    if (!showNotificationDropdown) setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
    // Close notification dropdown if open
    if (!showProfileDropdown) setShowNotificationDropdown(false);
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm relative">
      <div className="cursor-pointer" onClick={toggleSidebar} aria-expanded={isSidebarOpen}>
        <MdMenu className="text-2xl text-gray-600" />
      </div>

      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <div className="relative" ref={notificationRef}>
          <div
            className="relative cursor-pointer"
            onClick={toggleNotificationDropdown}
            aria-expanded={showNotificationDropdown}
            aria-haspopup="true"
            tabIndex={0}
          >
            <MdNotifications className="text-2xl text-gray-600" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              3
            </span>
          </div>
          {showNotificationDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded shadow-lg border border-gray-100 z-50 animate-fadeIn p-4">
              <h4 className="font-semibold mb-2">Notifications</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>You have 3 new orders</li>
                <li>Inventory update required</li>
                <li>Customer pending feedback</li>
              </ul>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <div
            className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white text-lg font-bold cursor-pointer"
            onClick={toggleProfileDropdown}
            aria-expanded={showProfileDropdown}
            aria-haspopup="true"
            tabIndex={0}
          >
            SK
          </div>
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg border border-gray-100 z-50 animate-fadeIn">
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}