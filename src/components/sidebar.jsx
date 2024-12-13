import Logo from "./logo";
import Menu from "./menu";
import { MdDashboard, MdCategory, MdInventory, MdPeople, MdShoppingCart, MdLocalShipping } from "react-icons/md";

export default function Sidebar({ isSidebarOpen }) {
  const menuItems = [
    { id: 1, label: "Dashboard", icon: <MdDashboard /> },
    { id: 2, label: "Categories", icon: <MdCategory /> },
    { id: 3, label: "Products", icon: <MdInventory /> },
    { id: 4, label: "Customers", icon: <MdPeople /> },
    { id: 5, label: "Orders", icon: <MdShoppingCart /> },
    { id: 6, label: "Deliveries", icon: <MdLocalShipping /> },
  ];
  
  const activeItem = 1;

  return (
    <aside
      className={`
        ${isSidebarOpen ? "w-64" : "w-20"}
        bg-white h-full p-4 border-r border-gray-200 flex flex-col 
        transition-width duration-300 overflow-hidden
      `}
    >
      <div className="flex items-center space-x-3 transition-opacity duration-300">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center"></div>
        {/* Show logo text only if sidebar is open */}
        {isSidebarOpen && (
          <h2 className="text-xl font-bold tracking-tight text-gray-800">Wecommerce</h2>
        )}
      </div>
      <Menu menuItems={menuItems} activeItem={activeItem} isSidebarOpen={isSidebarOpen} />
    </aside>
  );
}