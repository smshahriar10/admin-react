import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

export default function App() {
  return (
    <div className="h-screen flex bg-gray-100 font-sans text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Content />
      </div>
    </div>
  );
}