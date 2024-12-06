import Logo from "./logo";
import Menu from "./menu";
import { MdDashboard, MdCategory, MdInventory, MdPeople, MdShoppingCart, MdLocalShipping } from "react-icons/md";

export default function Sidebar() {
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
    <aside className="w-64 bg-white h-full p-4 border-r border-gray-200 flex flex-col">
      <Logo />
      <Menu menuItems={menuItems} activeItem={activeItem} />
    </aside>
  );
}