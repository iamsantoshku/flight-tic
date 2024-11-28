// import React from "react";
// import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { BACKENDURL } from "../../Config/Config";
// import { authContext } from "../../context/authContext";
// import { useContext,useState,useEffect, } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Booking = () => {
//     const { dispatch } = useContext(authContext);

//     const [tickets, setTickets] = useState([]);
//     const navigate = useNavigate();
//     useEffect(() => {
//         const token = localStorage.getItem("token");   
//         if (!token) {
//           navigate("/login");
//           return;
//         }   
//         // data from backend its is correct   
//         const fetchUserData = async () => {
//           try {
//             const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
//               headers: { Authorization: `Bearer ${token}` },
//             });
//             // setUserData(response.data.user);
//             setTickets(response.data.tickets);
//             // setUserName(response.data.user.name);
//           } catch (error) {
//             if (error.response && error.response.status === 401) {
//               toast.error("Unauthorized! Redirecting to login.");
//               dispatch({ type: "LOGOUT" });
//               navigate("/login");
//             } else {
//               console.error("Error fetching user data:", error);
//             }
//           }
//         };        
    
//         fetchUserData();
//       }, [navigate, dispatch]);
//   return (
//     <div className="bg-blue-50 min-h-screen p-4 mt-[5vw]">
//       {/* Tabs Section */}
//       <div className="flex items-center justify-between bg-white p-4 shadow rounded-md">
//         <div className="flex space-x-4">
//           {/* Upcoming Tab */}
//           <div className="flex items-center space-x-2 border-b-2 border-blue-500 text-blue-500 p-2 cursor-pointer">
//             <FaClock size={20} />
//             <div>
//               <p className="font-bold text-sm">Upcoming</p>
//               <p className="text-xs text-gray-500">0 Active Trip</p>
//             </div>
//           </div>
//           {/* Cancelled/Refunded Tab */}
//           <div className="flex items-center space-x-2 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 p-2 cursor-pointer">
//             <FaCalendarAlt size={20} />
//             <div>
//               <p className="font-bold text-sm">Cancelled/Refunded</p>
//               <p className="text-xs text-gray-500">Check/Refund Status</p>
//             </div>
//           </div>
//           {/* Completed Tab */}
//           <div className="flex items-center space-x-2 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 p-2 cursor-pointer">
//             <FaCheckCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Completed</p>
//               <p className="text-xs text-gray-500">Check Previous Trips</p>
//             </div>
//           </div>
//           {/* Unsuccessful Tab */}
//           <div className="flex items-center space-x-2 border-b-2 border-transparent hover:border-blue-500 hover:text-blue-500 p-2 cursor-pointer">
//             <FaTimesCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Unsuccessful</p>
//               <p className="text-xs text-gray-500">Check Pending Trips</p>
//             </div>
//           </div>
//         </div>
//         {/* Search Bar */}
//         <div>
//           <input
//             type="text"
//             placeholder="Search for a booking"
//             className="border border-gray-300 rounded-md p-2 w-64 text-sm focus:outline-none focus:border-blue-500"
//           />
//         </div>
//       </div>

//       {/* No Bookings Section */}
//       <div className="flex flex-col items-center justify-center mt-10">
        

// {tickets.length > 0 ? (
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

// export default Booking;




// import React, { useState, useEffect, useContext } from "react";
// import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { BACKENDURL } from "../../Config/Config";
// import { authContext } from "../../context/authContext";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Booking = () => {
//   const { dispatch } = useContext(authContext);
//   const [tickets, setTickets] = useState([]);
//   const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
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
//         setTickets(response.data.tickets);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           dispatch({ type: "LOGOUT" });
//           navigate("/login");
//         } else {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [navigate, dispatch]);

//   // Handle Tab Click
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="bg-blue-50 min-h-screen p-4 mt-[5vw]">
//       {/* Tabs Section */}
//       <div className="flex items-center justify-between bg-white p-4 shadow rounded-md mb-6">
//         <div className="flex space-x-4">
//           {/* Upcoming Tab */}
//           <div
//             onClick={() => handleTabClick("upcoming")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "upcoming" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaClock size={20} />
//             <div>
//               <p className="font-bold text-sm">Upcoming</p>
//               <p className="text-xs text-gray-500">0 Active Trip</p>
//             </div>
//           </div>
//           {/* Cancelled/Refunded Tab */}
//           <div
//             onClick={() => handleTabClick("cancelled")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "cancelled" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCalendarAlt size={20} />
//             <div>
//               <p className="font-bold text-sm">Cancelled/Refunded</p>
//               <p className="text-xs text-gray-500">Check/Refund Status</p>
//             </div>
//           </div>
//           {/* Completed Tab */}
//           <div
//             onClick={() => handleTabClick("completed")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "completed" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCheckCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Completed</p>
//               <p className="text-xs text-gray-500">Check Previous Trips</p>
//             </div>
//           </div>
//           {/* Unsuccessful Tab */}
//           <div
//             onClick={() => handleTabClick("unsuccessful")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "unsuccessful" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaTimesCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Unsuccessful</p>
//               <p className="text-xs text-gray-500">Check Pending Trips</p>
//             </div>
//           </div>
//         </div>
//         {/* Search Bar */}
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search for a booking"
//             className="border border-gray-300 rounded-md p-2 w-64 text-sm focus:outline-none focus:border-blue-500"
//           />
//         </div>
//       </div>

//       {/* Tickets Section */}
//       <div className="flex flex-col items-center justify-center mt-10">
//         {tickets.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {tickets.map((ticket) => (
//               <div key={ticket._id} className="bg-white shadow-lg rounded-md p-4 hover:shadow-xl transition-all">
//                 <div className="flex justify-between items-center mb-4">
//                   <p className="font-bold text-lg text-blue-600">{ticket.uid}</p>
//                   <Link
//                     to={`/ticket/${ticket.uid}`}
//                     className="text-blue-500 underline text-sm"
//                   >
//                     Go to Ticket
//                   </Link>
//                 </div>
//                 {/* fName */}
//                 {/* <p className="font-bold text-lg text-blue-600"></p> */}

//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <div className="flex items-center">
//                     <FaClock size={18} className="mr-2" />
//                     <p>Upcoming Trip</p>
//                   </div>
//                   <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600 transition-all">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="mt-5 text-gray-500">No tickets found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Booking;




// import React, { useState, useEffect, useContext } from "react";
// import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { BACKENDURL } from "../../Config/Config";
// import { authContext } from "../../context/authContext";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Booking = () => {
//   const { dispatch } = useContext(authContext);
//   const [tickets, setTickets] = useState([]);
//   const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
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
//         setTickets(response.data.tickets);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           dispatch({ type: "LOGOUT" });
//           navigate("/login");
//         } else {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [navigate, dispatch]);

//   // Handle Tab Click
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="bg-blue-50 min-h-screen p-4 mt-[25vw] sm:mt-[5vw]">
//       {/* Tabs Section */}
//       <div className="flex items-center justify-between bg-white p-4 shadow rounded-md mb-6">
//         <div className="flex space-x-4">
//           {/* Upcoming Tab */}
//           <div
//             onClick={() => handleTabClick("upcoming")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "upcoming" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaClock size={20} />
//             <div>
//               <p className="font-bold text-sm">Upcoming</p>
//               <p className="text-xs text-gray-500">0 Active Trip</p>
//             </div>
//           </div>
//           {/* Cancelled/Refunded Tab */}
//           <div
//             onClick={() => handleTabClick("cancelled")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "cancelled" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCalendarAlt size={20} />
//             <div>
//               <p className="font-bold text-sm">Cancelled/Refunded</p>
//               <p className="text-xs text-gray-500">Check/Refund Status</p>
//             </div>
//           </div>
//           {/* Completed Tab */}
//           <div
//             onClick={() => handleTabClick("completed")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "completed" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCheckCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Completed</p>
//               <p className="text-xs text-gray-500">Check Previous Trips</p>
//             </div>
//           </div>
//           {/* Unsuccessful Tab */}
//           <div
//             onClick={() => handleTabClick("unsuccessful")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "unsuccessful" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaTimesCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Unsuccessful</p>
//               <p className="text-xs text-gray-500">Check Pending Trips</p>
//             </div>
//           </div>
//         </div>
//         {/* Search Bar */}
//         <div className="flex items-center">
//           <input
//             type="text"
//             placeholder="Search for a booking"
//             className="border border-gray-300 rounded-md p-2 w-64 text-sm focus:outline-none focus:border-blue-500"
//           />
//         </div>
//       </div>

//       {/* Tickets Section */}
//       <div className="flex flex-col items-center justify-center mt-10">
//         {tickets.length > 0 ? (
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6">
//               {tickets.map((ticket) => (
//                 <div key={ticket._id} className="bg-white shadow-lg rounded-md p-6 hover:shadow-xl transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <p className="font-bold text-lg text-blue-600">{ticket.uid}</p>
//                     <Link
//                       to={`/ticket/${ticket.uid}`}
//                       className="text-blue-500 underline text-sm"
//                     >
//                       Go to Ticket
//                     </Link>
//                   </div>
//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <div className="flex items-center">
//                       <FaClock size={18} className="mr-2" />
//                       <p>Upcoming Trip</p>
//                     </div>
//                     <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600 transition-all">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <p className="mt-5 text-gray-500">No tickets found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Booking;


// import React, { useState, useEffect, useContext } from "react";
// import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { BACKENDURL } from "../../Config/Config";
// import { authContext } from "../../context/authContext";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Booking = () => {
//   const { dispatch } = useContext(authContext);
//   const [tickets, setTickets] = useState([]);
//   const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
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
//         setTickets(response.data.tickets);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           dispatch({ type: "LOGOUT" });
//           navigate("/login");
//         } else {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [navigate, dispatch]);

//   // Handle Tab Click
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="bg-blue-50 min-h-screen p-4 mt-[25vw] sm:mt-[5vw]">
//       {/* Tabs Section */}
//       <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded-md mb-6">
//         <div className="flex space-x-4 w-full sm:w-auto justify-between sm:justify-start">
//           {/* Upcoming Tab */}
//           <div
//             onClick={() => handleTabClick("upcoming")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "upcoming" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaClock size={20} />
//             <div>
//               <p className="font-bold text-sm">Upcoming</p>
//               <p className="text-xs text-gray-500">0 Active Trip</p>
//             </div>
//           </div>
//           {/* Cancelled/Refunded Tab */}
//           <div
//             onClick={() => handleTabClick("cancelled")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "cancelled" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCalendarAlt size={20} />
//             <div>
//               <p className="font-bold text-sm">Cancelled/Refunded</p>
//               <p className="text-xs text-gray-500">Check/Refund Status</p>
//             </div>
//           </div>
//           {/* Completed Tab */}
//           <div
//             onClick={() => handleTabClick("completed")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "completed" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCheckCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Completed</p>
//               <p className="text-xs text-gray-500">Check Previous Trips</p>
//             </div>
//           </div>
//           {/* Unsuccessful Tab */}
//           <div
//             onClick={() => handleTabClick("unsuccessful")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "unsuccessful" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaTimesCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Unsuccessful</p>
//               <p className="text-xs text-gray-500">Check Pending Trips</p>
//             </div>
//           </div>
//         </div>
//         {/* Search Bar */}
//         <div className="flex items-center w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
//           <input
//             type="text"
//             placeholder="Search for a booking"
//             className="border border-gray-300 rounded-md p-2 w-full sm:w-64 text-sm focus:outline-none focus:border-blue-500"
//           />
//         </div>
//       </div>

//       {/* Tickets Section */}
//       <div className="flex flex-col items-center justify-center mt-10">
//         {tickets.length > 0 ? (
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//               {tickets.map((ticket) => (
//                 <div key={ticket._id} className="bg-white shadow-lg rounded-md p-6 hover:shadow-xl transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <p className="font-bold text-lg text-blue-600">Ticket Id : {ticket.uid}</p>
//                     <Link
//                       to={`/ticket/${ticket.uid}`}
//                       className="text-blue-500 underline text-sm"
//                     >
//                       Go to Ticket
//                     </Link>
//                   </div>
//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <div className="flex items-center">
//                       <FaClock size={18} className="mr-2" />
//                       <p>Upcoming Trip</p>
//                     </div>
//                     <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600 transition-all">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <p className="mt-5 text-gray-500">No tickets found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Booking;


// this is correct 

// import React, { useState, useEffect, useContext } from "react";
// import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { BACKENDURL } from "../../Config/Config";
// import { authContext } from "../../context/authContext";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// const Booking = () => {
//   const { dispatch } = useContext(authContext);
//   const [tickets, setTickets] = useState([]);
//   const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
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
//         setTickets(response.data.tickets || []);  // Ensure we get an empty array if tickets is undefined
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           dispatch({ type: "LOGOUT" });
//           navigate("/login");
//         } else {
//           console.error("Error fetching user data:", error);
//         }
//       }
//     };

//     fetchUserData();
//   }, [navigate, dispatch]);

//   // Handle Tab Click
//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="bg-blue-50 min-h-screen p-4 mt-[25vw] sm:mt-[5vw]">
//       {/* Tabs Section */}
//       <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded-md mb-6">
//         <div className="flex space-x-4 w-full sm:w-auto justify-between sm:justify-start">
//           {/* Upcoming Tab */}
//           <div
//             onClick={() => handleTabClick("upcoming")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "upcoming" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaClock size={20} />
//             <div>
//               <p className="font-bold text-sm">Upcoming</p>
//               <p className="text-xs text-gray-500">0 Active Trip</p>
//             </div>
//           </div>
//           {/* Cancelled/Refunded Tab */}
//           <div
//             onClick={() => handleTabClick("cancelled")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "cancelled" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCalendarAlt size={20} />
//             <div>
//               <p className="font-bold text-sm">Cancelled/Refunded</p>
//               <p className="text-xs text-gray-500">Check/Refund Status</p>
//             </div>
//           </div>
//           {/* Completed Tab */}
//           <div
//             onClick={() => handleTabClick("completed")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "completed" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaCheckCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Completed</p>
//               <p className="text-xs text-gray-500">Check Previous Trips</p>
//             </div>
//           </div>
//           {/* Unsuccessful Tab */}
//           <div
//             onClick={() => handleTabClick("unsuccessful")}
//             className={`flex items-center space-x-2 p-2 cursor-pointer ${activeTab === "unsuccessful" ? "border-b-2 border-blue-500 text-blue-500" : "hover:border-blue-500 hover:text-blue-500"}`}
//           >
//             <FaTimesCircle size={20} />
//             <div>
//               <p className="font-bold text-sm">Unsuccessful</p>
//               <p className="text-xs text-gray-500">Check Pending Trips</p>
//             </div>
//           </div>
//         </div>
//         {/* Search Bar */}
//         <div className="flex items-center w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
//           <input
//             type="text"
//             placeholder="Search for a booking"
//             className="border border-gray-300 rounded-md p-2 w-full sm:w-64 text-sm focus:outline-none focus:border-blue-500"
//           />
//         </div>
//       </div>

//       {/* Tickets Section */}
//       <div className="flex flex-col items-center justify-center mt-10">
//         {tickets.length > 0 ? (
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//               {tickets.map((ticket) =>
//                 ticket ? ( // Check if ticket is valid before rendering
//                   <div key={ticket._id} className="bg-white shadow-lg rounded-md p-6 hover:shadow-xl transition-all">
//                     <div className="flex justify-between items-center mb-4">
//                       <p className="font-bold text-lg text-blue-600">Ticket Id : {ticket.uid}</p>
//                       <Link
//                         to={`/ticket/${ticket.uid}`}
//                         className="text-blue-500 underline text-sm"
//                       >
//                         Go to Ticket
//                       </Link>
//                     </div>
//                     <div className="flex items-center justify-between text-sm text-gray-600">
//                       <div className="flex items-center">
//                         <FaClock size={18} className="mr-2" />
//                         <p>Upcoming Trip</p>
//                       </div>
//                       <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded-md hover:bg-blue-600 transition-all">
//                         View Details
//                       </button>
//                     </div>
//                   </div>
//                 ) : null // Skip invalid tickets
//               )}
//             </div>
//           </div>
//         ) : (
//           <p className="mt-5 text-gray-500">No tickets found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Booking;



import React, { useState, useEffect, useContext } from "react";
import { FaClock, FaCalendarAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BACKENDURL } from "../../Config/Config";
import { authContext } from "../../context/authContext";
import { useNavigate, Link, NavLink } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const { dispatch } = useContext(authContext);
  const [tickets, setTickets] = useState([]);
  const [activeTab, setActiveTab] = useState("upcoming"); // State to track active tab
  const [loading, setLoading] = useState(false); // State for loading during cancelation
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTickets(response.data.tickets || []); // Ensure we get an empty array if tickets is undefined
      } catch (error) {
        if (error.response && error.response.status === 401) {
          dispatch({ type: "LOGOUT" });
          navigate("/login");
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [navigate, dispatch]);

  // Handle Tab Click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle Ticket Cancelation
  const handleCancelTicket = async (uid) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    if (!window.confirm("Are you sure you want to cancel this ticket?")) return;

    setLoading(true);

    try {
      const response = await axios.put(
        `${BACKENDURL}/api/v1/tickets/cancel/${uid}`, // Backend route for cancelation
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        alert("Ticket canceled successfully!");
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.uid === uid ? { ...ticket, status: "cancelled" } : ticket
          )
        );
      } else {
        alert(response.data.message || "Failed to cancel ticket.");
      }
    } catch (error) {
      console.error("Error canceling ticket:", error);
      alert("An error occurred while canceling the ticket.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen p-4 mt-[25vw] sm:mt-[5vw]">
      {/* Tabs Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 shadow rounded-md mb-6">
        <div className="flex space-x-4 w-full sm:w-auto justify-between sm:justify-start">
          {/* Upcoming Tab */}
          <div
            onClick={() => handleTabClick("upcoming")}
            className={`flex items-center space-x-2 p-2 cursor-pointer ${
              activeTab === "upcoming"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            <FaClock size={20} />
            <div>
              <p className="font-bold text-sm">Upcoming</p>
              <p className="text-xs text-gray-500">0 Active Trip</p>
            </div>
          </div>
          {/* Cancelled/Refunded Tab */}
          <div
            onClick={() => handleTabClick("cancelled")}
            className={`flex items-center space-x-2 p-2 cursor-pointer ${
              activeTab === "cancelled"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            <FaCalendarAlt size={20} />
            <NavLink to="/cancelled">
            <div>
              <p className="font-bold text-sm">Cancelled/Refunded</p>
              <p className="text-xs text-gray-500">Check/Refund Status</p>
            </div>
              </NavLink>
          </div>
          {/* Completed Tab */}
          <div
            onClick={() => handleTabClick("completed")}
            className={`flex items-center space-x-2 p-2 cursor-pointer ${
              activeTab === "completed"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            <FaCheckCircle size={20} />
            <div>
              <p className="font-bold text-sm">Completed</p>
              <p className="text-xs text-gray-500">Check Previous Trips</p>
            </div>
          </div>
          {/* Unsuccessful Tab */}
          <div
            onClick={() => handleTabClick("unsuccessful")}
            className={`flex items-center space-x-2 p-2 cursor-pointer ${
              activeTab === "unsuccessful"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "hover:border-blue-500 hover:text-blue-500"
            }`}
          >
            <FaTimesCircle size={20} />
            <div>
              <p className="font-bold text-sm">Unsuccessful</p>
              <p className="text-xs text-gray-500">Check Pending Trips</p>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-end mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search for a booking"
            className="border border-gray-300 rounded-md p-2 w-full sm:w-64 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Tickets Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        {tickets.length > 0 ? (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* {/* {tickets.map((ticket) => */}
              



{tickets
  .filter((ticket) => ticket !== null) // Filter out null or undefined tickets
  .map((ticket) => (
    <div
      key={ticket._id}
      className="bg-white shadow-lg rounded-md p-6 hover:shadow-xl transition-all"
    >
      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-lg text-blue-600">
          Ticket Id : {ticket.uid}
        </p>
        <Link
          to={`/ticket/${ticket.uid}`}
          className="text-blue-500 underline text-sm"
        >
          Go to Ticket
        </Link>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <FaClock size={18} className="mr-2" />
          <p>
            {ticket.status === "cancelled"
              ? "Cancelled"
              : "Upcoming Trip"}
          </p>
        </div>
        {ticket.status !== "cancelled" && (
          <button
            onClick={() => handleCancelTicket(ticket.uid)}
            className="bg-red-500 text-white text-xs px-3 py-1 rounded-md hover:bg-red-600 transition-all"
            disabled={loading}
          >
            {loading ? "Canceling..." : "Cancel Ticket"}
          </button>
        )}
      </div>
    </div>
  ))}
            </div>
          </div>
        ) : (
          <p className="mt-5 text-gray-500">No tickets found</p>
        )}
      </div>
    </div>
  );
};

export default Booking;



