import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

export default function App() {
  // State to track if the sidebar is open or collapsed
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen flex bg-gray-100 font-sans text-gray-800">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Content />
      </div>
    </div>
  );
}