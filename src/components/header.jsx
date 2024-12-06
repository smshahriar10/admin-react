import React from "react";
import { MdNotifications, MdMenu } from "react-icons/md";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between shadow-sm">
      <div className="cursor-pointer">
        <MdMenu className="text-2xl text-gray-600" />
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <MdNotifications className="text-2xl text-gray-600" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            3
          </span>
        </div>
        
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white text-lg font-bold">
          SK
        </div>
      </div>
    </header>
  );
}