// import React, { useState, useEffect } from "react";
// import { FaPlane, FaUserAlt, FaTicketAlt, FaCalendarAlt } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const CancelledallTickets = () => {
//   const [cancelledTickets, setCancelledTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCancelledTickets = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/tickets/allcancelled-tickets`);
//         setCancelledTickets(response.data.data);
//       } catch (err) {
//         setError("Failed to fetch cancelled tickets. Please try again.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCancelledTickets();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-lg mt-10">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500 font-bold mt-10">{error}</div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-6">Cancelled Tickets</h1>
//       {cancelledTickets.length === 0 ? (
//         <p className="text-center text-gray-500">No cancelled tickets found.</p>
//       ) : (
//         <div className="space-y-6">
//           {cancelledTickets.map((ticket) => (
//             <div
//               key={ticket.ticketId}
//               className="bg-white shadow-lg rounded-lg p-6"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <FaTicketAlt className="text-blue-500 text-2xl" />
//                 <h2 className="text-lg font-bold">
//                   Ticket ID: {ticket.ticketId}
//                 </h2>
//               </div>
//               <p className="text-gray-600 mb-2">
//                 <FaUserAlt className="inline-block text-gray-500 mr-2" />
//                 User ID: {ticket.userId}
//               </p>
//               {ticket.bookings.map((booking, index) => (
//                 <div key={index} className="bg-gray-50 rounded-lg p-4 mt-4 border-l-4 border-blue-500">
//                 <div className="flex items-center gap-4 mb-2">
//                   <FaPlane className="text-green-500 text-xl" />
//                   <p className="text-sm font-semibold">
//                     Flight Number: {booking.flight.flightNumber}
//                   </p>
//                 </div>
//                 <p className="text-gray-600">
//                   <FaCalendarAlt className="inline-block text-gray-500 mr-2" />
//                   Departure: {booking.flight.departTime} - Arrival: {booking.flight.
// arriveTime}
//                 </p>
//                 <p className="text-gray-600">
//                   Departure Time: {new Date(booking.flight.departureTime).toLocaleString()}
//                 </p>
//                 <p className="text-gray-600">
//                   Arrival Time: {new Date(booking.flight.
// arriveTime).toLocaleString()}
//                 </p>
//                 <p className="text-gray-600">
//                   Airline: <span className="font-semibold">{booking.flight.airlineName || "N/A"}</span>
//                 </p>
//                 {booking.flight.airlineLogo && (
//                   <img src={booking.flight.airlineLogo} alt="Airline Logo" className="h-12 mt-2" />
//                 )}
//                 <p className="text-gray-600 mt-2">Ticket Price: ₹{booking.ticket.price}</p>
//                 <p className="text-gray-600">
//                   Passenger:{" "}
//                   {booking.ticket.passengerDetails?.name || "No passenger details"}
//                 </p>
//               </div>
              
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CancelledallTickets;




// import React, { useEffect, useState } from "react";
// import { FaPlane, FaTicketAlt, FaRegSadCry } from "react-icons/fa";
// import axios from "axios";
// // import { BACKENDURL } from "../../Config/Config";
// import { BACKENDURL } from "../Config/Config";

// const CancelledallTickets = ({ userId }) => {
//   const [cancelledTickets, setCancelledTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCancelledTickets = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/tickets/allcancelled-tickets`);
//         if (response.data.success) {
//           setCancelledTickets(response.data.data);
//         } else {
//           setError(response.data.message);
//         }
//       } catch (err) {
//         setError("Failed to fetch cancelled tickets. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCancelledTickets();
//   }, [userId]);

//   if (loading) {
//     return <div className="text-center mt-10 text-lg">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center mt-10 text-red-500">
//         <FaRegSadCry size={40} className="mx-auto" />
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 mt-[17vw] sm:mt-[6vw]">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         Cancelled Tickets
//       </h2>

//       {cancelledTickets.length === 0 ? (
//         <div className="text-center text-gray-500">
//           <FaRegSadCry size={50} className="mx-auto mb-4" />
//           <p>No cancelled tickets found.</p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {cancelledTickets.map((flight, index) => (
//             <div
//               key={flight._id || index}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
//             >
//               {/* Flight Info */}
//               <div className="flex items-center mb-4">
//                 {flight.airlineLogo ? (
//                   <img
//                     src={flight.airlineLogo}
//                     alt={flight.airlineName}
//                     className="h-12 w-12 object-contain mr-4"
//                   />
//                 ) : (
//                   <FaPlane size={48} className="text-blue-500 mr-4" />
//                 )}
//                 <div>
//                   <h3 className="text-lg font-bold">{flight.airlineName}</h3>
//                   <p className="text-sm text-gray-500">
//                     {flight.from} → {flight.to}
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Departure: {new Date(flight.
// departDate).toLocaleString()}
//                   </p>
//                 </div>
//               </div>

//               {/* Bookings */}
//               <div className="space-y-4">
//                 {flight.bookings.map((booking) => (
//                   <div
//                     key={booking._id}
//                     className="bg-gray-50 p-3 rounded-lg border border-gray-200"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h4 className="font-medium">
//                           Passenger Name: {booking.
// fName}
//                         </h4>
//                         <p className="text-sm text-gray-500">
//                           Seat: {booking.
// seat}
//                         </p>
//                       </div>
//                       <FaTicketAlt size={24} className="text-gray-400" />
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">
//                       Ticket ID: {booking.ticketId}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CancelledallTickets;



// import React, { useEffect, useState } from "react";
// import { FiAlertCircle } from "react-icons/fi"; // Icon for "no data" alert
// import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Icon for loading spinner
// import { BACKENDURL } from "../Config/Config";

// const CancelledallTickets = () => {
//   const [cancelledTickets, setCancelledTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCancelledTickets = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BACKENDURL}/api/v1/tickets/allcancelled-tickets`);
//         const data = await response.json();

//         if (response.ok) {
//           setCancelledTickets(data.data);
//         } else {
//           setError(data.message || "Failed to fetch tickets");
//         }
//       } catch (err) {
//         setError("An error occurred while fetching tickets");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCancelledTickets();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500" />
//         <span className="ml-2 text-lg text-blue-500">Loading...</span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen flex-col">
//         <FiAlertCircle className="text-red-500 text-6xl" />
//         <p className="mt-4 text-lg text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (cancelledTickets.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-screen flex-col">
//         <FiAlertCircle className="text-gray-500 text-6xl" />
//         <p className="mt-4 text-lg text-gray-500">No cancelled tickets found.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-semibold text-gray-700 mb-4">Cancelled Tickets</h1>
//       <div className="space-y-4">
//         {cancelledTickets.map((flight) => (
//           <div
//             key={flight._id}
//             className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   {flight.airlineName || "Unknown Airline"}
//                 </h2>
//                 <p className="text-sm text-gray-500">Flight: {flight.flightNumber}</p>
//               </div>
//               {flight.airlineLogo && (
//                 <img
//                   src={flight.airlineLogo}
//                   alt={flight.airlineName}
//                   className="w-12 h-12 object-contain"
//                 />
//               )}
//             </div>
//             <div className="mt-4">
//               <h3 className="text-lg font-medium text-gray-700">Bookings:</h3>
//               <ul className="mt-2 space-y-2">
//                 {flight.bookings.map((booking) => (
//                   <li
//                     key={booking._id}
//                     className="p-2 bg-gray-100 rounded-md flex justify-between items-center"
//                   >
//                     <div>
//                       <p className="text-sm text-gray-800">
//                         Ticket ID: {booking.ticketId}
//                       </p>
//                       <p className="text-sm text-gray-600">
//                         Passenger: {booking.
// fName || "N/A"}
//                       </p>
//                     </div>
//                     <p className="text-sm text-gray-500">{booking.date || "N/A"}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CancelledallTickets;




// import React, { useEffect, useState } from "react";
// import { FaPlane, FaTicketAlt, FaRegSadCry } from "react-icons/fa";
// import axios from "axios";
// // import { BACKENDURL } from "../../Config/Config";
// import { BACKENDURL } from "../Config/Config";

// const CancelledallTickets = () => {
//   const [cancelledTickets, setCancelledTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCancelledTickets = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/tickets/allcancelled-tickets`);
//         if (response.data.success) {
//           setCancelledTickets(response.data.data);
//         } else {
//           setError(response.data.message);
//         }
//       } catch (err) {
//         setError("Failed to fetch cancelled tickets. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCancelledTickets();
//   }, []);

//   if (loading) {
//     return <div className="text-center mt-10 text-lg">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center mt-10 text-red-500">
//         <FaRegSadCry size={40} className="mx-auto" />
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 mt-[17vw] sm:mt-[6vw]">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         Cancelled Tickets
//       </h2>

//       {cancelledTickets.length === 0 ? (
//         <div className="text-center text-gray-500">
//           <FaRegSadCry size={50} className="mx-auto mb-4" />
//           <p>No cancelled tickets found.</p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {cancelledTickets.map((flight, index) => (
//             <div
//               key={flight._id || index}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
//             >
//               {/* Flight Info */}
//               <div className="flex items-center mb-4">
//                 {flight.airlineLogo ? (
//                   <img
//                     src={flight.airlineLogo}
//                     alt={flight.airlineName}
//                     className="h-12 w-12 object-contain mr-4"
//                   />
//                 ) : (
//                   <FaPlane size={48} className="text-blue-500 mr-4" />
//                 )}
//                 <div>
//                   <h3 className="text-lg font-bold">{flight.airlineName}</h3>
//                   <p className="text-sm text-gray-500">
//                     {flight.from} → {flight.to}
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Departure: {new Date(flight.
// departDate).toLocaleString()}
//                   </p>
//                 </div>
//               </div>

//               {/* Bookings */}
//               <div className="space-y-4">
//                 {flight.bookings.map((booking) => (
//                   <div
//                     key={booking._id}
//                     className="bg-gray-50 p-3 rounded-lg border border-gray-200"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h4 className="font-medium">
//                           Passenger Name: {booking.
// fName}
//                         </h4>
//                         <p className="text-sm text-gray-500">
//                           Seat: {booking.
// seat}
//                         </p>
//                       </div>
//                       <FaTicketAlt size={24} className="text-gray-400" />
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">
//                       Ticket ID: {booking.ticketId}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CancelledallTickets;




// import React, { useEffect, useState } from "react";
// import { FaPlane, FaTicketAlt, FaRegSadCry } from "react-icons/fa";
// import axios from "axios";
// // import { BACKENDURL } from "../../Config/Config";
// import { BACKENDURL } from "../Config/Config";

// const CancelledallTickets = ({ userId }) => {
//   const [cancelledTickets, setCancelledTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCancelledTickets = async () => {
//       try {
//         const response = await axios.put(`${BACKENDURL}/api/v1/tickets/getcancel/${userId}`);
//         if (response.data.success) {
//           setCancelledTickets(response.data.data);
//         } else {
//           setError(response.data.message);
//         }
//       } catch (err) {
//         setError("Failed to fetch cancelled tickets. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCancelledTickets();
//   }, [userId]);

//   if (loading) {
//     return <div className="text-center mt-10 text-lg">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center mt-10 text-red-500">
//         <FaRegSadCry size={40} className="mx-auto" />
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 mt-[17vw] sm:mt-[6vw]">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         Cancelled Tickets
//       </h2>

//       {cancelledTickets.length === 0 ? (
//         <div className="text-center text-gray-500">
//           <FaRegSadCry size={50} className="mx-auto mb-4" />
//           <p>No cancelled tickets found.</p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {cancelledTickets.map((flight, index) => (
//             <div
//               key={flight._id || index}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
//             >
//               {/* Flight Info */}
//               <div className="flex items-center mb-4">
//                 {flight.airlineLogo ? (
//                   <img
//                     src={flight.airlineLogo}
//                     alt={flight.airlineName}
//                     className="h-12 w-12 object-contain mr-4"
//                   />
//                 ) : (
//                   <FaPlane size={48} className="text-blue-500 mr-4" />
//                 )}
//                 <div>
//                   <h3 className="text-lg font-bold">{flight.airlineName}</h3>
//                   <p className="text-sm text-gray-500">
//                     {flight.from} → {flight.to}
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Departure: {new Date(flight.
// departDate).toLocaleString()}
//                   </p>
//                 </div>
//               </div>

//               {/* Bookings */}
//               <div className="space-y-4">
//                 {flight.bookings.map((booking) => (
//                   <div
//                     key={booking._id}
//                     className="bg-gray-50 p-3 rounded-lg border border-gray-200"
//                   >
//                     <div className="flex justify-between items-center">
//                       <div>
//                         <h4 className="font-medium">
//                           Passenger Name: {booking.
// fName}
//                         </h4>
//                         <p className="text-sm text-gray-500">
//                           Seat: {booking.
// seat}
//                         </p>
//                       </div>
//                       <FaTicketAlt size={24} className="text-gray-400" />
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">
//                       Ticket ID: {booking.ticketId}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CancelledallTickets;




import React, { useEffect, useState } from "react";
import { FaPlane, FaTicketAlt, FaRegSadCry } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const CancelledallTickets = ({ userId }) => {
  const [cancelledTickets, setCancelledTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCancelledTickets = async () => {
      try {
        const response = await axios.put(`${BACKENDURL}/api/v1/tickets/getcancel/${userId}`);
        if (response.data.success) {
          setCancelledTickets(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError("Failed to fetch cancelled tickets. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCancelledTickets();
  }, [userId]);

  if (loading) {
    return <div className="text-center mt-20 text-lg font-semibold text-gray-700">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        <FaRegSadCry size={50} className="mx-auto text-red-400 mb-4" />
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-8 mt-[10vw] sm:mt-[6vw] bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Cancelled Tickets</h2>

      {cancelledTickets.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaRegSadCry size={60} className="mx-auto text-gray-300 mb-6" />
          <p className="text-lg font-medium">No cancelled tickets found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cancelledTickets.map((flight, index) => (
            <div
              key={flight._id || index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Flight Info */}
              <div className="flex items-center p-6 bg-blue-100">
                {flight.airlineLogo ? (
                  <img
                    src={flight.airlineLogo}
                    alt={flight.airlineName}
                    className="h-14 w-14 object-contain rounded-full shadow-lg mr-4"
                  />
                ) : (
                  <FaPlane size={48} className="text-blue-500 mr-4" />
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{flight.airlineName}</h3>
                  <p className="text-sm text-gray-600">
                    {flight.from} → {flight.to}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Departure: {new Date(flight.departDate).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Bookings */}
              <div className="p-6 space-y-4">
                {flight.bookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-md font-semibold text-gray-700">
                          Passenger: {booking.fName}
                        </h4>
                        <p className="text-sm text-gray-600">Seat: {booking.seat}</p>
                      </div>
                      <FaTicketAlt size={24} className="text-blue-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Ticket ID: <span className="font-medium">{booking.ticketId}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CancelledallTickets;
