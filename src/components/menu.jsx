export default function Menu({ menuItems, activeItem, isSidebarOpen }) {
  return (
    <nav className="mt-8 flex-1">
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`flex items-center px-4 py-2 rounded-md transition-colors duration-150 cursor-pointer ${
              activeItem === item.id
                ? "bg-gray-100 text-gray-900 font-semibold"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {/* Show label only if sidebar is open */}
            {isSidebarOpen && <span className="ml-3">{item.label}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}