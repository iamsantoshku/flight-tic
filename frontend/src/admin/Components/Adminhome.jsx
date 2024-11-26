// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FiHome,
//   FiClipboard,
//   FiUsers,
//   FiGlobe,
//   FiMessageCircle,
//   FiSettings,
// } from 'react-icons/fi';

// const Adminhome = () => {
//   return (
//     <div className="flex h-screen  bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4">
//           <h1 className="text-xl font-bold flex items-center gap-2">
//             <FiHome className="text-blue-500" />
//             Easy Flight
//           </h1>
//         </div>
//         <nav className="mt-8">
//           <NavLink
//             to="/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiHome className="text-gray-500" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/deals"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiClipboard className="text-gray-500" />
//             Deals
//           </NavLink>
//           <NavLink
//             to="/clients"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiUsers className="text-gray-500" />
//             Clients
//           </NavLink>
//           <NavLink
//             to="/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink>
//           <NavLink
//             to="/messages"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Messages
//           </NavLink>
//           <NavLink
//             to="/settings"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiSettings className="text-gray-500" />
//             Settings
//           </NavLink>
//           <div className="p-3">
//             <button className="flex items-center space-x-2">
//               <span>Dark Mode</span>
//               <input type="checkbox" className="form-checkbox" />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <h2 className="text-2xl font-semibold">Dashboard</h2>
//         {/* Add your dashboard components here */}
//         <div className="mt-6">
//           {/* Replace this with your dashboard content */}
//           <p>Welcome to the admin panel! Here, you can manage all sections.</p>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-72 bg-white shadow-md p-6 hidden md:block">
//         <div className="flex items-center gap-2">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <p className="font-semibold">Santosh</p>
//             <span className="text-sm text-gray-500">Admin</span>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h3 className="text-lg font-medium">Activity</h3>
//           {/* Replace with actual activities */}
//           <ul className="mt-4 space-y-2">
//             <li className="flex items-center justify-between">
//               <span>Waiting list</span>
//               <span className="text-blue-500">840</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Completed flights</span>
//               <span className="text-green-500">235</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Total revenue</span>
//               <span className="text-purple-500">$2M</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminhome;




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FiHome,
//   FiClipboard,
//   FiUsers,
//   FiGlobe,
//   FiMessageCircle,
//   FiSettings,
// } from 'react-icons/fi';
// import Dasboard from './Dasboard';

// const Adminhome = () => {
//   return (
//     <div className="flex h-screen bg-gray-100 mt-[5vw]">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-md">
//         <div className="p-4">
//           <h1 className="text-xl font-bold flex items-center gap-2">
//             <FiHome className="text-blue-500" />
//             Easy Flight
//           </h1>
//         </div>
//         <nav className="mt-8">
//           <NavLink
//             to="/admin/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiHome className="text-gray-500" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/deals"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiClipboard className="text-gray-500" />
//             Deals
//           </NavLink>
//           <NavLink
//             to="/clients"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiUsers className="text-gray-500" />
//             Clients
//           </NavLink>
//           <NavLink
//             to="/ticketlist"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiUsers className="text-gray-500" />
//             Ticket List
//           </NavLink>
//           {/* <NavLink
//             to="/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink> */}
//           <NavLink
//             to="/admin/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink>
//           <NavLink
//             to="/messages"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Messages
//           </NavLink>
//           <NavLink
//             to="/settings"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2"
//           >
//             <FiSettings className="text-gray-500" />
//             Settings
//           </NavLink>
//           <div className="p-3">
//             <button className="flex items-center space-x-2">
//               <span>Dark Mode</span>
//               <input type="checkbox" className="form-checkbox" />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-[2] p-6">
//         <h2 className="text-2xl font-semibold">Dashboard</h2>
//         {/* Add your dashboard components here */}
//         <Dasboard/>
//         <div className="mt-6">
//           <p>Welcome to the admin panel! Here, you can manage all sections.</p>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-72 bg-white shadow-md p-6 hidden md:block">
//         <div className="flex items-center gap-2">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <p className="font-semibold">Santosh</p>
//             <span className="text-sm text-gray-500">Admin</span>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h3 className="text-lg font-medium">Activity</h3>
//           <ul className="mt-4 space-y-2">
//             <li className="flex items-center justify-between">
//               <span>Waiting list</span>
//               <span className="text-blue-500">840</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Completed flights</span>
//               <span className="text-green-500">235</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Total revenue</span>
//               <span className="text-purple-500">$2M</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminhome;





// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FiHome,
//   FiClipboard,
//   FiUsers,
//   FiGlobe,
//   FiMessageCircle,
//   FiSettings,
// } from 'react-icons/fi';
// import Dasboard from './Dasboard';

// const Adminhome = () => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-full md:w-64 bg-white shadow-md md:h-full md:flex-shrink-0">
//         <div className="p-4">
//           <h1 className="text-xl font-bold flex items-center gap-2">
//             <FiHome className="text-blue-500" />
//             Easy Flight
//           </h1>
//         </div>
//         <nav className="mt-4 space-y-1">
//           <NavLink
//             to="/admin/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiHome className="text-gray-500" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/deals"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiClipboard className="text-gray-500" />
//             Deals
//           </NavLink>
//           <NavLink
//             to="/clients"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiUsers className="text-gray-500" />
//             Clients
//           </NavLink>
//           <NavLink
//             to="/ticketlist"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiUsers className="text-gray-500" />
//             Ticket List
//           </NavLink>
//           <NavLink
//             to="/admin/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink>
//           <NavLink
//             to="/messages"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Messages
//           </NavLink>
//           <NavLink
//             to="/settings"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base"
//           >
//             <FiSettings className="text-gray-500" />
//             Settings
//           </NavLink>
//           <div className="p-3">
//             <button className="flex items-center justify-between w-full">
//               <span>Dark Mode</span>
//               <input type="checkbox" className="form-checkbox" />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
//         <Dasboard />
//         <div className="mt-6">
//           <p>Welcome to the admin panel! Here, you can manage all sections.</p>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="hidden lg:block w-full lg:w-72 bg-white shadow-md p-6">
//         <div className="flex items-center gap-2">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <p className="font-semibold">Santosh</p>
//             <span className="text-sm text-gray-500">Admin</span>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h3 className="text-lg font-medium">Activity</h3>
//           <ul className="mt-4 space-y-2">
//             <li className="flex items-center justify-between">
//               <span>Waiting list</span>
//               <span className="text-blue-500">840</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Completed flights</span>
//               <span className="text-green-500">235</span>
//             </li>
//             <li className="flex items-center justify-between">
//               <span>Total revenue</span>
//               <span className="text-purple-500">$2M</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminhome;




// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import {
//   FiHome,
//   FiClipboard,
//   FiUsers,
//   FiGlobe,
//   FiMessageCircle,
//   FiSettings,
 
// } from "react-icons/fi";
// import { useState } from "react";
// import Dasboard from './Dasboard';

// const Adminhome = () => {
//   // State to handle dark mode
//   const [darkMode, setDarkMode] = useState(false);

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark", darkMode);
//   };

//   return (
//     <div
//       className={`flex flex-col md:flex-row h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
//     >
//       {/* Sidebar */}
//       <div
//         className={`w-full md:w-64 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md md:h-full md:flex-shrink-0`}
//       >
//         <div className="p-4">
//           <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800">
//             <FiHome className="text-blue-500" />
//             Easy Flight
//           </h1>
//         </div>
//         <nav className="mt-4 space-y-1">
//           <NavLink
//             to="/admin/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiHome className="text-gray-500" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/admin/deals"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiClipboard className="text-gray-500" />
//             Deals
//           </NavLink>
//           <NavLink
//             to="/admin/clients"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiUsers className="text-gray-500" />
//             Clients
//           </NavLink>
//           <NavLink
//             to="/admin/ticketlist"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiUsers className="text-gray-500" />
//             Ticket List
//           </NavLink>
//           <NavLink
//             to="/admin/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink>
//           <NavLink
//             to="/admin/messages"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Messages
//           </NavLink>
//           <NavLink
//             to="/admin/settings"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiSettings className="text-gray-500" />
//             Settings
//           </NavLink>

//           {/* Dark Mode Toggle */}
//           <div className="p-3">
//             <button
//               className="flex items-center justify-between w-full text-gray-700"
//               onClick={handleDarkModeToggle}
//             >
//               <span>Dark Mode</span>
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
//         className={`flex-1 p-6 overflow-y-auto ${darkMode ? "bg-gray-900" : "bg-white"}`}
//       >
//         {/* Render dynamic content based on the route */}
//         <Outlet />

//         {/* Optional Static Content */}
        
//         <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
//         <Dasboard /> 
       
//         <div className="mt-6">
//           <p>Welcome to the admin panel! Here, you can manage all sections.</p>
//         </div>
//       </div>

//       {/* Right Sidebar (optional, you can remove if not needed) */}
//       <div
//         className={`hidden lg:block w-full lg:w-72 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md p-6`}
//        >
//         <div className="flex items-center gap-2">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <p className="font-semibold text-gray-700">Santosh</p>
//             <span className="text-sm text-gray-500">Admin</span>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h3 className="text-lg font-medium text-gray-700">Activity</h3>
//           <ul className="mt-4 space-y-2">
//             <li className="flex items-center justify-between text-gray-700">
//               <span>Waiting list</span>
//               <span className="text-blue-500">840</span>
//             </li>
//             <li className="flex items-center justify-between text-gray-700">
//               <span>Completed flights</span>
//               <span className="text-green-500">235</span>
//             </li>
//             <li className="flex items-center justify-between text-gray-700">
//               <span>Total revenue</span>
//               <span className="text-purple-500">$2M</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminhome;





// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import {
//   FiHome,
//   FiClipboard,
//   FiUsers,
//   FiGlobe,
//   FiMessageCircle,
//   FiSettings,
// } from "react-icons/fi";
// import Dasboard from './Dasboard'

// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark", darkMode);
//   };

//   return (
//     <div
//       className={`flex flex-col md:flex-row mt-20 h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}
//     >
//       {/* Sidebar */}
//       <div
//         className={`w-full md:w-64 ${darkMode ? "bg-gray-800" : "bg-gray-200"} shadow-md md:h-full md:flex-shrink-0`}
//       >
//         <div className="p-4">
//           <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800">
//             <FiHome className="text-blue-500" />
//             Flyibi
//           </h1>
//         </div>
//         <nav className="mt-4 space-y-1">
//           <NavLink
//             to="/admin/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiHome className="text-gray-500" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/admin/deals"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiClipboard className="text-gray-500" />
//             Deals
//           </NavLink>
//           <NavLink
//             to="/admin/clients"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiUsers className="text-gray-500" />
//             Clients
//           </NavLink>
//           <NavLink
//             to="/admin/ticketlist"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiUsers className="text-gray-500" />
//             Ticket List
//           </NavLink>
//           <NavLink
//             to="/admin/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink>
//           <NavLink
//             to="/admin/messages"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Messages
//           </NavLink>

//           <NavLink
//             to="/admin/add-airline"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             add-Airlines
//           </NavLink>

//           <NavLink
//             to="/admin/add-flight"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Add Flight
//           </NavLink>

//           <NavLink
//             to="/admin/settings"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiSettings className="text-gray-500" />
//             Settings
//           </NavLink>
//           <div className="p-3">
//             <button
//               className="flex items-center justify-between w-full text-gray-700"
//               onClick={handleDarkModeToggle}
//             >
//               <span>Dark Mode</span>
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
//         className={`flex-1 p-6 overflow-y-auto ${darkMode ? "bg-gray-900" : "bg-white"}`}
//       >
//         <Outlet />

        
//       </div>

     
//     </div>
//   );
// };

// export default Adminhome;



// import React, { useState } from "react";
// import { NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   FiHome,
//   FiClipboard,
//   FiUsers,
//   FiGlobe,
//   FiMessageCircle,
//   FiSettings,
// } from "react-icons/fi";
// // import Dashboard from "./Dashboard"; // Ensure Dashboard is correctly imported
// import Dasboard from "./Dasboard";

// const Adminhome = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation(); // To get the current path

//   const handleDarkModeToggle = () => {
//     setDarkMode(!darkMode);
//     document.body.classList.toggle("dark", darkMode);
//   };

//   const isAdminPage = location.pathname === "/admin"; // Check if it's the admin home page

//   return (
//     <div
//       className={`flex flex-col md:flex-row mt-20 h-screen ${
//         darkMode ? "bg-gray-900" : "bg-gray-100"
//       }`}
//     >
//       {/* Sidebar */}
//       <div
//         className={`w-full md:w-64 ${
//           darkMode ? "bg-gray-800" : "bg-gray-200"
//         } shadow-md md:h-full md:flex-shrink-0`}
//       >
//         <div className="p-4">
//           <h1 className="text-xl font-bold flex items-center gap-2 text-gray-800">
//             <FiHome className="text-blue-500" />
//             Flyibi
//           </h1>
//         </div>
//         <nav className="mt-4 space-y-1">
//           <NavLink
//             to="/admin/dashboard"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiHome className="text-gray-500" />
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/admin/deals"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiClipboard className="text-gray-500" />
//             Deals
//           </NavLink>
//           <NavLink
//             to="/admin/clients"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiUsers className="text-gray-500" />
//             Clients
//           </NavLink>
//           <NavLink
//             to="/admin/ticketlist"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiUsers className="text-gray-500" />
//             Ticket List
//           </NavLink>
//           <NavLink
//             to="/admin/mysite"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiGlobe className="text-gray-500" />
//             My Site
//           </NavLink>
//           <NavLink
//             to="/admin/messages"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Messages
//           </NavLink>
//           <NavLink
//             to="/admin/add-airline"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Add Airlines
//           </NavLink>
//           <NavLink
//             to="/admin/add-flight"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiMessageCircle className="text-gray-500" />
//             Add Flight
//           </NavLink>
//           <NavLink
//             to="/admin/settings"
//             className="flex items-center p-3 hover:bg-gray-100 gap-2 text-sm md:text-base text-gray-700"
//           >
//             <FiSettings className="text-gray-500" />
//             Settings
//           </NavLink>
//           <div className="p-3">
//             <button
//               className="flex items-center justify-between w-full text-gray-700"
//               onClick={handleDarkModeToggle}
//             >
//               <span>Dark Mode</span>
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
//           darkMode ? "bg-gray-900" : "bg-white"
//         }`}
//       >
//         {isAdminPage ? <Dasboard /> : <Outlet />}
//       </div>

//       {/* right sidebar  */}
      

//     </div>
//   );
// };

// export default Adminhome;




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
