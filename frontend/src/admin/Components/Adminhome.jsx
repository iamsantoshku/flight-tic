
// without hamburgur 
import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  FiHome,
  FiTag,
  FiUsers,
  FiList,
  FiGlobe,
  FiMessageCircle,
  FiPlusCircle,
  FiSettings,
} from "react-icons/fi"; // Correct icons for sections
import Dashboard from "./Dashboard"; // Ensure this is correctly imported

const Adminhome = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // To get the current path

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  const isAdminPage = location.pathname === "/admin"; // Check if it's the admin home page

  return (
    <div
      className={`flex flex-col md:flex-row mt-20 h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-full md:w-64 ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        } shadow-md md:h-full md:flex-shrink-0`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800 dark:text-white">
            <FiHome className="text-blue-500" />
            Flyibi Admin
          </h1>
        </div>
        <nav className="mt-4 space-y-1">
          <NavLink
            to="/admin/dashboard"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiHome className="text-blue-500" />
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/deals"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiTag className="text-green-500" />
            Deals
          </NavLink>
          <NavLink
            to="/admin/clients"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiUsers className="text-yellow-500" />
            Clients
          </NavLink>
          <NavLink
            to="/admin/ticketlist"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiList className="text-orange-500" />
            Ticket List
          </NavLink>

          <NavLink
            to="/admin/cancelled-ticket"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiList className="text-orange-500" />
            Cancelled-ticket
          </NavLink>
          <NavLink
            to="/admin/mysite"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiGlobe className="text-purple-500" />
            My Site
          </NavLink>
          <NavLink
            to="/admin/messages"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiMessageCircle className="text-red-500" />
            Messages
          </NavLink>
          <NavLink
            to="/admin/add-airline"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiPlusCircle className="text-teal-500" />
            Add Airlines
          </NavLink>
          <NavLink
            to="/admin/add-flight"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiPlusCircle className="text-indigo-500" />
            Add Flight
          </NavLink>
          <NavLink
            to="/admin/settings"
            className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
          >
            <FiSettings className="text-gray-500" />
            Settings
          </NavLink>
          <div className="p-3">
            <button
              className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300"
              onClick={handleDarkModeToggle}
            >
              <span>Dark Mode</span>
              <input
                type="checkbox"
                className="form-checkbox"
                checked={darkMode}
                onChange={handleDarkModeToggle}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 overflow-y-auto ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
      >
        {isAdminPage ? <Dashboard /> : <Outlet />}
      </div>
    </div>
  );
};

export default Adminhome;


// with hamburgur 

// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiTag,
//   FiUsers,
//   FiList,
//   FiGlobe,
//   FiMessageCircle,
//   FiPlusCircle,
//   FiSettings,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";
// import Dashboard from "./Dashboard";

// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const location = useLocation();

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark", !darkMode);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const isAdminPage = location.pathname === "/admin";

//   return (
//     <div
//       className={`flex  flex-col md:flex-row mt-20 h-screen ${
//         darkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       {/* Hamburger Button */}
//       <button
//         onClick={toggleSidebar}
//         className="absolute top-4 left-4 z-20 md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md mt-20"
//       >
//         {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 z-10 h-full w-64 md:w-20 bg-gray-200 dark:bg-gray-800 shadow-lg transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-300`}
//       >
//         <div className="p-4 flex flex-col items-center md:items-start">
//           <h1 className="text-xl font-bold  items-center gap-2 text-gray-800 dark:text-white mb-4 hidden md:block">
//             <FiHome className="text-blue-500" />
//             Flyibi Admin
//           </h1>
//         </div>
//         <nav className="mt-4 space-y-1">
//           {[
//             { to: "/admin/dashboard", label: "Dashboard", icon: FiHome },
//             { to: "/admin/deals", label: "Deals", icon: FiTag },
//             { to: "/admin/clients", label: "Clients", icon: FiUsers },
//             { to: "/admin/ticketlist", label: "Ticket List", icon: FiList },
//             {
//               to: "/admin/cancelled-ticket",
//               label: "Cancelled Ticket",
//               icon: FiList,
//             },
//             { to: "/admin/mysite", label: "My Site", icon: FiGlobe },
//             { to: "/admin/messages", label: "Messages", icon: FiMessageCircle },
//             { to: "/admin/add-airline", label: "Add Airlines", icon: FiPlusCircle },
//             { to: "/admin/add-flight", label: "Add Flight", icon: FiPlusCircle },
//             { to: "/admin/settings", label: "Settings", icon: FiSettings },
//           ].map(({ to, label, icon: Icon }, index) => (
//             <NavLink
//               key={index}
//               to={to}
//               className="flex items-center md:justify-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300"
//               onClick={() => setSidebarOpen(false)} // Close sidebar on click
//             >
//               <Icon className="text-xl" />
//               <span className="hidden md:block">{label}</span>
//             </NavLink>
//           ))}
//           <div className="p-3">
//             <button
//               className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300"
//               onClick={handleDarkModeToggle}
//             >
//               <span className="hidden md:block">Dark Mode</span>
//               <input
//                 type="checkbox"
//                 className="form-checkbox"
//                 checked={darkMode}
//                 onChange={handleDarkModeToggle}
//               />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div
//         className={`flex-1 p-6 overflow-y-auto ${
//           darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
//         }`}
//       >
//         {isAdminPage ? <Dashboard /> : <Outlet />}
//       </div>
//     </div>
//   );
// };

// export default Adminhome;
