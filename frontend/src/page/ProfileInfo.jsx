// import React from 'react';
// import { FaBell, FaBookmark, FaWallet, FaUsers, FaCogs, FaTicketAlt, FaPercent } from 'react-icons/fa';

// const ProfileInfo = () => {
//   return (
//     <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-md mx-auto md:max-w-2xl mt-[7vw]">
//       {/* Header Section */}
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-xl font-bold text-gray-700">Travila</h1>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center space-x-1 cursor-pointer">
//             <span className="text-gray-600">EN</span>
//           </div>
//           <div className="flex items-center space-x-1 cursor-pointer">
//             <span className="text-gray-600">USD</span>
//           </div>
//           <button className="text-yellow-500 text-2xl font-bold">✖</button>
//         </div>
//       </div>

//       {/* User Profile Info */}
//       <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-6">
//         <div className="flex items-center space-x-4">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <h2 className="text-lg font-semibold">Alice Roses</h2>
//             <p className="text-sm text-gray-500">London, England</p>
//           </div>
//         </div>
//         <button className="bg-black text-white px-4 py-2 rounded-lg">Logout</button>
//       </div>

//       {/* Quick Links Section */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//         <div className="grid grid-cols-2 gap-4">
//           {/* Each link */}
//           <div className="flex items-center space-x-3">
//             <FaBell className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Notifications</p>
//               <p className="text-sm text-gray-500">2 new messages</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaBookmark className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Bookmark</p>
//               <p className="text-sm text-gray-500">7 tours, 2 rooms</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaWallet className="text-gray-600" />
//             <div>
//               <p className="font-semibold">My Wallet</p>
//               <p className="text-sm text-gray-500">$4500</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaPercent className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Discount</p>
//               <p className="text-sm text-gray-500">Only today</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaUsers className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Friends</p>
//               <p className="text-sm text-gray-500">Your team</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaTicketAlt className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Tickets</p>
//               <p className="text-sm text-gray-500">3 resolved tickets</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-3">
//             <FaCogs className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Setting</p>
//               <p className="text-sm text-gray-500">Your account</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // if using react-router-dom
// import {
//   FaBell,
//   FaBookmark,
//   FaWallet,
//   FaUsers,
//   FaCogs,
//   FaTicketAlt,
//   FaPercent,
// } from 'react-icons/fa';

// const ProfileInfo = () => {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   // Fetch user data from local storage on component mount
//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('userDetails'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   // Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem('userDetails'); // Clear user details from local storage
//     navigate('/login'); // Redirect to login page
//   };

//   // Handle Quick Link Clicks
//   const handleLinkClick = (link) => {
//     console.log(`${link} clicked`); // Use backticks for template literals
//     // Perform navigation or actions based on the clicked link
//   };

//   return (
//     <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-md mx-auto md:max-w-2xl mt-[7vw]">
//       {/* Header Section */}
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-xl font-bold text-gray-700">WeBreak</h1>
//         <div className="flex items-center gap-4">
//           <div className="flex items-center space-x-1 cursor-pointer">
//             <span className="text-gray-600">EN</span>
//           </div>
//           <div className="flex items-center space-x-1 cursor-pointer">
//             <span className="text-gray-600">USD</span>
//           </div>
//           <button className="text-yellow-500 text-2xl font-bold">✖</button>
//         </div>
//       </div>

//       {/* User Profile Info */}
//       <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-6">
//         <div className="flex items-center space-x-4">
//           <img
//             src={user.profilePicture || 'https://via.placeholder.com/50'}
//             alt="Profile"
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <h2 className="text-lg font-semibold">{user.name || 'Guest User'}</h2>
//             <p className="text-sm text-gray-500">{user.location || 'Location not available'}</p>
//           </div>
//         </div>
//         <button
//           className="bg-black text-white px-4 py-2 rounded-lg"
//           onClick={handleLogout}
//         >
//           Logout
//         </button>
//       </div>

//       {/* Quick Links Section */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('Notifications')}
//           >
//             <FaBell className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Notifications</p>
//               <p className="text-sm text-gray-500">2 new messages</p>
//             </div>
//           </div>
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('Bookmark')}
//           >
//             <FaBookmark className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Bookmark</p>
//               <p className="text-sm text-gray-500">7 tours, 2 rooms</p>
//             </div>
//           </div>
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('My Wallet')}
//           >
//             <FaWallet className="text-gray-600" />
//             <div>
//               <p className="font-semibold">My Wallet</p>
//               <p className="text-sm text-gray-500">${user.walletBalance || 0}</p>
//             </div>
//           </div>
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('Discount')}
//           >
//             <FaPercent className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Discount</p>
//               <p className="text-sm text-gray-500">Only today</p>
//             </div>
//           </div>
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('Friends')}
//           >
//             <FaUsers className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Friends</p>
//               <p className="text-sm text-gray-500">Your team</p>
//             </div>
//           </div>
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('Tickets')}
//           >
//             <FaTicketAlt className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Tickets</p>
//               <p className="text-sm text-gray-500">3 resolved tickets</p>
//             </div>
//           </div>
//           <div
//             className="flex items-center space-x-3 cursor-pointer"
//             onClick={() => handleLinkClick('Settings')}
//           >
//             <FaCogs className="text-gray-600" />
//             <div>
//               <p className="font-semibold">Setting</p>
//               <p className="text-sm text-gray-500">Your account</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;





import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // if using react-router-dom
import {
  FaBell,
  FaBookmark,
  FaWallet,
  FaUsers,
  FaCogs,
  FaTicketAlt,
  FaPercent,
} from 'react-icons/fa';

const ProfileInfo = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // Fetch user data from local storage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userDetails'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('userDetails'); // Clear user details from local storage
    navigate('/login'); // Redirect to login page
  };

  // Handle Quick Link Clicks
  const handleLinkClick = (link) => {
    console.log(`${link} clicked`); // Use backticks for template literals
    // Perform navigation or actions based on the clicked link
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-md mx-auto md:max-w-2xl mt-[7vw]">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-700">WeBreak</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-600">EN</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-600">USD</span>
          </div>
          <button className="text-yellow-500 text-3xl font-bold">✖</button>
        </div>
      </div>

      {/* User Profile Info */}
      <div className="flex items-center justify-between bg-gray-100 p-5 rounded-lg mb-8">
        <div className="flex items-center space-x-5">
          <img
            src={user.profilePicture || 'https://via.placeholder.com/50'}
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name || 'Guest User'}</h2>
            <p className="text-md text-gray-500">{user.location || 'Location not available'}</p>
          </div>
        </div>
        <button
          className="bg-black text-white px-5 py-3 rounded-lg text-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-xl font-bold mb-5">Quick Links</h3>
        <div className="grid grid-cols-2 gap-6">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('Notifications')}
          >
            <FaBell className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">Notifications</p>
              <p className="text-md text-gray-500">2 new messages</p>
            </div>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('Bookmark')}
          >
            <FaBookmark className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">Bookmark</p>
              <p className="text-md text-gray-500">7 tours, 2 rooms</p>
            </div>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('My Wallet')}
          >
            <FaWallet className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">My Wallet</p>
              <p className="text-md text-gray-500">${user.walletBalance || 0}</p>
            </div>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('Discount')}
          >
            <FaPercent className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">Discount</p>
              <p className="text-md text-gray-500">Only today</p>
            </div>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('Friends')}
          >
            <FaUsers className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">Friends</p>
              <p className="text-md text-gray-500">Your team</p>
            </div>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('Tickets')}
          >
            <FaTicketAlt className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">Tickets</p>
              <p className="text-md text-gray-500">3 resolved tickets</p>
            </div>
          </div>
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleLinkClick('Settings')}
          >
            <FaCogs className="text-gray-600 text-2xl" />
            <div>
              <p className="font-semibold text-lg">Setting</p>
              <p className="text-md text-gray-500">Your account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;