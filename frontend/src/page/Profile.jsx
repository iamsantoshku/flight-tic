
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";
// import { useNavigate, Link } from "react-router-dom";
// import { TbEdit } from "react-icons/tb";
// import uploadImageToCloudinary from "../utils/uploadImageToCloudinary";
// import { authContext } from "../context/authContext";
// import { toast } from "react-toastify";

// const OldProfile = () => {
//   const { dispatch } = useContext(authContext);
//   const [userData, setUserData] = useState({});
//   const [tickets, setTickets] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [profilePic, setProfilePic] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // data from backend its is correct

//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUserData(response.data.user);
//         setTickets(response.data.tickets);
//         setUserName(response.data.user.name);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           toast.error("Unauthorized! Redirecting to login.");
//           dispatch({ type: "LOGOUT" });
//           navigate("/login");
//         } else {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };
 

//     fetchUserData();
//   }, [navigate, dispatch]);

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("/login");
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       try {
//         const imageData = await uploadImageToCloudinary(file);
//         setProfilePic(imageData.secure_url);
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//   };

//   const handleProfileUpdate = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       const updatedData = { name: userName };
//       if (profilePic) {
//         const imageData = await uploadImageToCloudinary(profilePic);
//         updatedData.profilePic = imageData.secure_url;
//       }

//       const response = await axios.put(
//         BACKENDURL + "/api/v1/auth/updateUser",
//         updatedData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       toast.success("Profile updated successfully");
//       setUserData(response.data.user);
//       setProfilePic(response.data.user.profilePic); // Update the profile picture state

//       // Optionally refresh the page or re-fetch data
//       // window.location.reload();
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="px-[30px] md:px-[30px]">
//       <div className="max-w-[800px] mx-auto">
//         <h1 className="mt-5 text-2xl">Profile</h1>
//         <div className="my-5 w-[100px] h-[100px] rounded-full overflow-hidden relative">
//           <div className="w-full h-full object-cover absolute flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 cursor-pointer">
//             <label htmlFor="profile-pic-upload">
//               <TbEdit className="text-white text-[40px] cursor-pointer" />
//             </label>
//             <input
//               id="profile-pic-upload"
//               type="file"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={handleImageUpload}
//             />
//           </div>
//           <img src={profilePic || userData.profilePic} alt="Profile" />
//         </div>

//         <div>
//           <div className="flex gap-2 justify-start items-center">
//             <p>User Name: </p>
//             <input
//               type="text"
//               value={userName}
//               className="outline-none"
//               onChange={(e) => setUserName(e.target.value)}
//             />
//           </div>
//           <p className="mt-2">User Email: {userData.email}</p>
//         </div>

//         <div className="flex gap-2 justify-start items-center">
//           <button
//             className="bg-blue-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-blue-400 transition duration-200"
//             onClick={handleProfileUpdate}
//           >
//             Update Profile
//           </button>
//           <button
//             className="bg-red-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-red-400 transition duration-200"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//         {tickets.length > 0 ? (
//           <table className="table-auto w-full mt-5">
//             <thead>
//               <tr>
//                 <th>Ticket ID</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tickets.map((ticket) => (
//                 <tr key={ticket._id}>
//                   <td className="text-center">{ticket.uid}</td>
//                   <td className="text-center">
//                     <Link
//                       to={`/ticket/${ticket.uid}`}
//                       className="text-blue-500 underline"
//                     >
//                       Go to Ticket
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="mt-5">No tickets found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OldProfile;




// import React, { useState } from "react";
// import {
//   FaUser,
//   FaSuitcase,
//   FaUsers,
//   FaTag,
//   FaGift,
//   FaWallet,
//   FaCog,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Profile = () => {
//   // State for dropdown sections
//   const [isGeneralOpen, setGeneralOpen] = useState(true);
//   const [isContactOpen, setContactOpen] = useState(false);
//   const [isPassportOpen, setPassportOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen mt-[4vw]">
//       <div className="w-full max-w-7xl bg-white shadow rounded-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-blue-500 text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="text-2xl font-semibold">Mr. Santosh Kumar</h1>
//             <p>Joined Since 2024</p>
//             <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
//               <div
//                 className="bg-green-500 h-2 rounded-full"
//                 style={{ width: "60%" }}
//               ></div>
//             </div>
//             <p className="text-sm mt-1">60% Profile Completed</p>
//           </div>
//           <div className="flex mt-4 md:mt-0">
//             <div className="text-center mx-4">
//               <h2 className="text-xl font-bold">0</h2>
//               <p>Cities Visited</p>
//             </div>
//             <div className="text-center mx-4">
//               <h2 className="text-xl font-bold">0</h2>
//               <p>Countries Visited</p>
//             </div>
//             <div className="text-center mx-4">
//               <h2 className="text-xl font-bold">0</h2>
//               <p>Flight Bookings</p>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar and Form */}
//         <div className="flex flex-col md:flex-row">
//           {/* Sidebar */}
//           <div className="bg-gray-50 w-full md:w-1/4 p-4 border-r">
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaUser />
//                 <span>Account Information</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaSuitcase />
//                 <span>Your Bookings</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaUsers />
//                 <span>Co-Travellers</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaTag />
//                 <span>Promo Codes</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaGift />
//                 <span>Gift Cards/ Coupons</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaWallet />
//                 <span>EMT Wallet</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaCog />
//                 <span>Settings</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaSignOutAlt />
//                 <span>Log Out</span>
//               </li>
//             </ul>
//           </div>

//           {/* Form Section */}
//           <div className="w-full md:w-3/4 p-6">
//             {/* General Details */}
//             <div className="mb-6">
//               <div
//                 className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
//                 onClick={() => setGeneralOpen(!isGeneralOpen)}
//               >
//                 <h2 className="text-lg font-semibold">General Details</h2>
//                 <span>{isGeneralOpen ? "▼" : "▲"}</span>
//               </div>
//               {isGeneralOpen && (
//                 <form className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-1 font-medium">Title</label>
//                       <select className="w-full p-2 border rounded">
//                         <option>Mr.</option>
//                         <option>Ms.</option>
//                         <option>Mrs.</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">First Name</label>
//                       <input
//                         type="text"
//                         value="santosh"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Last Name</label>
//                       <input
//                         type="text"
//                         value="kumar"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Marital Status</label>
//                       <select className="w-full p-2 border rounded">
//                         <option>Unmarried</option>
//                         <option>Married</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Anniversary Date</label>
//                       <input type="date" className="w-full p-2 border rounded" />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Date of Birth</label>
//                       <input
//                         type="date"
//                         value="2002-06-22"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Address</label>
//                       <input
//                         type="text"
//                         placeholder="Address"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">City</label>
//                       <input
//                         type="text"
//                         placeholder="City"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">State</label>
//                       <input
//                         type="text"
//                         placeholder="State"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">PinCode</label>
//                       <input
//                         type="text"
//                         placeholder="PinCode"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                   </div>
//                 </form>
//               )}
//             </div>

//             {/* Contact Details */}
//             <div className="mb-6">
//               <div
//                 className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
//                 onClick={() => setContactOpen(!isContactOpen)}
//               >
//                 <h2 className="text-lg font-semibold">Contact Details</h2>
//                 <span>{isContactOpen ? "▼" : "▲"}</span>
//               </div>
//               {isContactOpen && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
//                   <p>Provide contact-related details here.</p>
//                 </div>
//               )}
//             </div>

//             {/* Passport Details */}
//             <div>
//               <div
//                 className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
//                 onClick={() => setPassportOpen(!isPassportOpen)}
//               >
//                 <h2 className="text-lg font-semibold">Passport Details</h2>
//                 <span>{isPassportOpen ? "▼" : "▲"}</span>
//               </div>
//               {isPassportOpen && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
//                   <p>Provide passport-related details here.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaUser, FaSuitcase, FaUsers, FaTag, FaGift, FaWallet, FaCog, FaSignOutAlt } from "react-icons/fa";
// import { TbEdit } from "react-icons/tb";
// import uploadImageToCloudinary from "../utils/uploadImageToCloudinary";
// import { authContext } from "../context/authContext";

// const Profile = () => {
//   const { dispatch } = useContext(authContext);
//   const [userData, setUserData] = useState({});
//   const [tickets, setTickets] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [profilePic, setProfilePic] = useState(null);

//   const [isGeneralOpen, setGeneralOpen] = useState(true);
//   const [isContactOpen, setContactOpen] = useState(false);
//   const [isPassportOpen, setPassportOpen] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUserData(response.data.user);
//         setTickets(response.data.tickets);
//         setUserName(response.data.user.name);
//         setProfilePic(response.data.user.profilePic);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           toast.error("Unauthorized! Redirecting to login.");
//           dispatch({ type: "LOGOUT" });
//           navigate("/login");
//         } else {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [navigate, dispatch]);

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     navigate("/login");
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       try {
//         const imageData = await uploadImageToCloudinary(file);
//         setProfilePic(imageData.secure_url);
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       }
//     }
//   };

//   const handleProfileUpdate = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         navigate("/login");
//         return;
//       }

//       const updatedData = { name: userName };
//       if (profilePic) updatedData.profilePic = profilePic;

//       const response = await axios.put(
//         BACKENDURL + "/api/v1/auth/updateUser",
//         updatedData,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       toast.success("Profile updated successfully");
//       setUserData(response.data.user);
//       setProfilePic(response.data.user.profilePic);
//     } catch (error) {
//       console.error("Error updating profile:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen mt-[4vw]">
//       <div className="w-full max-w-7xl bg-white shadow rounded-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-blue-500 text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="text-2xl font-semibold">{userName || "User Name"}</h1>
//             <p>Joined Since 2024</p>
//             <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
//               <div
//                 className="bg-green-500 h-2 rounded-full"
//                 style={{ width: "60%" }}
//               ></div>
//             </div>
//             <p className="text-sm mt-1">60% Profile Completed</p>
//           </div>
//           <div className="flex mt-4 md:mt-0">
//             <div className="text-center mx-4">
//               <h2 className="text-xl font-bold">{tickets.length}</h2>
//               <p>Tickets</p>
//             </div>
//             <div className="text-center mx-4">
//               <h2 className="text-xl font-bold">0</h2>
//               <p>Cities Visited</p>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar and Form */}
//         <div className="flex flex-col md:flex-row">
//           {/* Sidebar */}
//           <div className="bg-gray-50 w-full md:w-1/4 p-4 border-r">
//             <ul className="space-y-4">
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaUser />
//                 <span>Account Information</span>
//               </li>

//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaSuitcase />
//                 <span>Your Bookings</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaUsers />
//                 <span>Co-Travellers</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaTag />
//                 <span>Promo Codes</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaGift />
//                 <span>Gift Cards/ Coupons</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaWallet />
//                 <span>EMT Wallet</span>
//               </li>
//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaCog />
//                 <span>Settings</span>
//               </li>

//               <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100 p-2 rounded">
//                 <FaSignOutAlt />
//                 <span onClick={handleLogout}>Log Out</span>
//               </li>
//             </ul>
//           </div>

//           {/* Form Section */}
//           <div className="w-full md:w-3/4 p-6">
//             {/* General Details */}
//             <div className="mb-6">
//               <div
//                 className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
//                 onClick={() => setGeneralOpen(!isGeneralOpen)}
//               >
//                 <h2 className="text-lg font-semibold">General Details</h2>
//                 <span>{isGeneralOpen ? "▼" : "▲"}</span>
//               </div>
//               {isGeneralOpen && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
                  

// <form className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block mb-1 font-medium">Title</label>
//                       <select className="w-full p-2 border rounded">
//                         <option>Mr.</option>
//                         <option>Ms.</option>
//                         <option>Mrs.</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">First Name</label>
//                       <input
//                         type="text"
//                         value="santosh"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Last Name</label>
//                       <input
//                         type="text"
//                         value="kumar"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Marital Status</label>
//                       <select className="w-full p-2 border rounded">
//                         <option>Unmarried</option>
//                         <option>Married</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Anniversary Date</label>
//                       <input type="date" className="w-full p-2 border rounded" />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Date of Birth</label>
//                       <input
//                         type="date"
//                         value="2002-06-22"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">Address</label>
//                       <input
//                         type="text"
//                         placeholder="Address"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">City</label>
//                       <input
//                         type="text"
//                         placeholder="City"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">State</label>
//                       <input
//                         type="text"
//                         placeholder="State"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                     <div>
//                       <label className="block mb-1 font-medium">PinCode</label>
//                       <input
//                         type="text"
//                         placeholder="PinCode"
//                         className="w-full p-2 border rounded"
//                       />
//                     </div>
//                   </div>
//                 </form>
//                   <button
//                     onClick={handleProfileUpdate}
//                     className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
//                   >
//                     Update Profile
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Contact Details */}
//             <div className="mb-6">
//               <div
//                 className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
//                 onClick={() => setContactOpen(!isContactOpen)}
//               >
//                 <h2 className="text-lg font-semibold">Contact Details</h2>
//                 <span>{isContactOpen ? "▼" : "▲"}</span>
//               </div>
//               {isContactOpen && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
//                   <p>Email: {userData.email || "N/A"}</p>
//                 </div>
//               )}
//             </div>

//             {/* Passport Details */}
//             <div>
//               <div
//                 className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
//                 onClick={() => setPassportOpen(!isPassportOpen)}
//               >
//                 <h2 className="text-lg font-semibold">Passport Details</h2>
//                 <span>{isPassportOpen ? "▼" : "▲"}</span>
//               </div>
//               {isPassportOpen && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
//                   <p>Passport-related details will go here.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;










import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  FaUser,
  FaSuitcase,
  FaUsers,
  FaTag,
  FaGift,
  FaWallet,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { BACKENDURL } from "../Config/Config";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { FaUser, FaSignOutAlt } from "react-icons/fa";
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary";
import { authContext } from "../context/authContext";

const Profile = () => {
  const { dispatch } = useContext(authContext);
  const [userData, setUserData] = useState({});
  const [tickets, setTickets] = useState([]);
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    maritalStatus: "",
    anniversaryDate: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [isGeneralOpen, setGeneralOpen] = useState(true);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isPassportOpen, setPassportOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/auth/getUser`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data.user);
        setTickets(response.data.tickets);
        setProfilePic(response.data.user.profilePic);

        // Populate form data with user details
        setFormData({
          title: response.data.user.title || "",
          firstName: response.data.user.name || "",
          lastName: response.data.user.lastName || "",
          maritalStatus: response.data.user.maritalStatus || "",
          anniversaryDate: response.data.user.anniversaryDate || "",
          dob: response.data.user.dob || "",
          address: response.data.user.address || "",
          city: response.data.user.city || "",
          state: response.data.user.state || "",
          pinCode: response.data.user.pinCode || "",
        });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized! Redirecting to login.");
          dispatch({ type: "LOGOUT" });
          navigate("/login");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [navigate, dispatch]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageData = await uploadImageToCloudinary(file);
        setProfilePic(imageData.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const updatedData = {
        ...formData,
        profilePic,
      };

      const response = await axios.put(
        `${BACKENDURL}/api/v1/auth/updateUser`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Profile updated successfully");

      // After updating, reflect the changes on the UI
      setUserData(response.data.user);
      setProfilePic(response.data.user.profilePic);
      setFormData({
        title: response.data.user.title || "",
        firstName: response.data.user.name || "",
        lastName: response.data.user.lastName || "",
        maritalStatus: response.data.user.maritalStatus || "",
        anniversaryDate: response.data.user.anniversaryDate || "",
        dob: response.data.user.dob || "",
        address: response.data.user.address || "",
        city: response.data.user.city || "",
        state: response.data.user.state || "",
        pinCode: response.data.user.pinCode || "",
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen mt-[17vw] sm:mt-[4vw]">
      <div className="w-full max-w-7xl bg-white shadow rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{userData.name || "User Name"}</h1>
            <p>Joined Since {userData.joinDate || "N/A"}</p>
            <div className="w-full bg-gray-300 h-2 mt-2 rounded-full">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-sm mt-1">60% Profile Completed</p>
          </div>
          
          <div className="flex mt-4 md:mt-0 -ml-[2vw] sm:-ml-[47vw] ">
            <label className="flex items-center space-x-2">
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
              <img
                src={profilePic || "/default-profile.jpg"}
                alt="Profile"
                className="w-20 h-20 rounded-full border cursor-pointer"
              />
              
              
            </label>
            
          </div>



          


          <div className="flex mt-4 md:mt-0">
            <div className="text-center mx-4">
              <h2 className="text-xl font-bold">{tickets.length}</h2>
              <p>Tickets</p>
            </div>
            <div className="text-center mx-4">
              <h2 className="text-xl font-bold">0</h2>
              <p>Cities Visited</p>
            </div>
          </div>
        </div>

        {/* Sidebar and Form */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
        


<div className="bg-gray-50 w-full md:w-1/4 p-4 border-r">
  <ul className="space-y-4">
    <li>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaUser />
        <span>Account Information</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/bookings"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaSuitcase />
        <span>Your Bookings</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/co-travellers"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaUsers />
        <span>Co-Travellers</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/promo-codes"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaTag />
        <span>Promo Codes</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/gift-cards"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaGift />
        <span>Gift Cards/ Coupons</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/wallet"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaWallet />
        <span>EMT Wallet</span>
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer ${
            isActive ? "text-blue-500 bg-gray-100" : "hover:text-blue-500 hover:bg-gray-100"
          }`
        }
      >
        <FaCog />
        <span>Settings</span>
      </NavLink>
    </li>
    <li>
      <span
        onClick={handleLogout}
        className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:text-blue-500 hover:bg-gray-100"
      >
        <FaSignOutAlt />
        <span>Log Out</span>
      </span>
    </li>
  </ul>
</div>

          {/* Form Section */}
          <div className="w-full md:w-3/4 p-6">
            {/* General Details */}
            <div className="mb-6">
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
                onClick={() => setGeneralOpen(!isGeneralOpen)}
              >
                <h2 className="text-lg font-semibold">General Details</h2>
                <span>{isGeneralOpen ? "▼" : "▲"}</span>
              </div>
              {isGeneralOpen && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 font-medium">Title</label>
                      <select
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Marital Status</label>
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Marital Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                      </select>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Anniversary Date</label>
                      <input
                        type="date"
                        name="anniversaryDate"
                        value={formData.anniversaryDate}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium">Pin Code</label>
                      <input
                        type="text"
                        name="pinCode"
                        value={formData.pinCode}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleProfileUpdate}
                className="bg-blue-500 text-white p-3 rounded-lg shadow hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>


            <div className="mb-6">
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
                onClick={() => setContactOpen(!isContactOpen)}
              >
                <h2 className="text-lg font-semibold">Contact Details</h2>
                <span>{isContactOpen ? "▼" : "▲"}</span>
              </div>
              {isContactOpen && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
                  <p>Email: {userData.email || "N/A"}</p>
                </div>
              )}
            </div>

            {/* Passport Details */}
            <div>
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
                onClick={() => setPassportOpen(!isPassportOpen)}
              >
                <h2 className="text-lg font-semibold">Passport Details</h2>
                <span>{isPassportOpen ? "▼" : "▲"}</span>
              </div>
              {isPassportOpen && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
                  <p>Passport-related details will go here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;





















// const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setUserData(response.data.user);
    //     setTickets(response.data.tickets);
    //     setUserName(response.data.user.name);
    //   } catch (error) {
    //     // Log the error response for debugging
    //     console.error("Error fetching user data:", error.response);
    
    //     if (error.response && error.response.status === 401) {
    //       toast.error("Unauthorized! Redirecting to login.");
    //       dispatch({ type: "LOGOUT" });
    //       navigate("/login");
    //     } else {
    //       toast.error("An error occurred while fetching user data.");
    //     }
    //   }
    // };
    
    // local storage 
    // const fetchUserData = async () => {
    //   try {
    //     // Retrieve user details from local storage
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     const tickets = JSON.parse(localStorage.getItem("tickets"));
    
    //     if (user) {
    //       setUserData(user);
    //       setTickets(tickets || []); // Use an empty array if no tickets are found
    //       setUserName(user.name);
    //     } else {
    //       // If no user data is found in local storage, redirect to login
    //       toast.error("No user data found. Redirecting to login.");
    //       navigate("/login");
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user data from local storage:", error);
    //     toast.error("An error occurred while fetching user data.");
    //   }
    // };



  // user detail 

  {/* <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
                        <img
                          src={profilePic || userData.profilePic}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <label
                        htmlFor="profile-pic-upload"
                        className="absolute inset-0 flex items-center justify-center bg-black/40 text-white cursor-pointer"
                      >
                        <TbEdit className="text-white text-2xl" />
                        <input
                          id="profile-pic-upload"
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={handleImageUpload}
                        />
                      </label>
                    </div>
                    <div>
                      <label className="block mb-1">User Name:</label>
                      <input
                        type="text"
                        value={userName}
                        className="outline-none border p-2 rounded"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div> */}