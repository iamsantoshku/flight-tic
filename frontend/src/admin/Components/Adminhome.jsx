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




import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiClipboard,
  FiUsers,
  FiGlobe,
  FiMessageCircle,
  FiSettings,
} from 'react-icons/fi';
import Dasboard from './Dasboard';

const Adminhome = () => {
  return (
    <div className="flex h-screen bg-gray-100 mt-[5vw]">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <FiHome className="text-blue-500" />
            Easy Flight
          </h1>
        </div>
        <nav className="mt-8">
          <NavLink
            to="/admin/dashboard"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiHome className="text-gray-500" />
            Dashboard
          </NavLink>
          <NavLink
            to="/deals"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiClipboard className="text-gray-500" />
            Deals
          </NavLink>
          <NavLink
            to="/clients"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiUsers className="text-gray-500" />
            Clients
          </NavLink>
          {/* <NavLink
            to="/mysite"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiGlobe className="text-gray-500" />
            My Site
          </NavLink> */}
          <NavLink
            to="/admin/mysite"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiGlobe className="text-gray-500" />
            My Site
          </NavLink>
          <NavLink
            to="/messages"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiMessageCircle className="text-gray-500" />
            Messages
          </NavLink>
          <NavLink
            to="/settings"
            className="flex items-center p-3 hover:bg-gray-100 gap-2"
          >
            <FiSettings className="text-gray-500" />
            Settings
          </NavLink>
          <div className="p-3">
            <button className="flex items-center space-x-2">
              <span>Dark Mode</span>
              <input type="checkbox" className="form-checkbox" />
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-[2] p-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        {/* Add your dashboard components here */}
        <Dasboard/>
        <div className="mt-6">
          <p>Welcome to the admin panel! Here, you can manage all sections.</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 bg-white shadow-md p-6 hidden md:block">
        <div className="flex items-center gap-2">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-semibold">Santosh</p>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">Activity</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center justify-between">
              <span>Waiting list</span>
              <span className="text-blue-500">840</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Completed flights</span>
              <span className="text-green-500">235</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Total revenue</span>
              <span className="text-purple-500">$2M</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
