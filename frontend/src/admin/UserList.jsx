// import React, { useEffect, useState } from "react";
// import { FaUserAlt, FaTicketAlt } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get( BACKENDURL + "/api/v1/auth/allusers"); // Replace with your API endpoint
//         setUsers(response.data.users);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Users</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {users.map((user, index) => (
//           <div
//             key={user.user.id}
//             className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
//           >
//             <div className="flex items-center mb-4">
//               <FaUserAlt className="text-blue-500 text-2xl mr-3" />
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-700">{user.user.name}</h2>
//                 <p className="text-sm text-gray-500">{user.user.email}</p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-md font-semibold text-gray-800 mb-2">
//                 Tickets ({user.tickets.length}):
//               </h3>
//               {user.tickets.length > 0 ? (
//                 <ul className="list-disc pl-5 space-y-1">
//                   {user.tickets.map((ticket, ticketIndex) => (
//                     <li
//                       key={ticket._id || ticketIndex}
//                       className="flex items-center space-x-2"
//                     >
//                       <FaTicketAlt className="text-green-500 text-lg" />
//                       <span className="text-gray-600">
//                         Flight: {ticket.flight || "Unknown"} | Seat:{" "}
//                         {ticket.seat || "N/A"}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-sm text-gray-500">No tickets available.</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;




// import React, { useEffect, useState } from "react";
// import { FaUserAlt, FaTicketAlt } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/tickets/alltickets"); // Replace with your API endpoint
//         setUsers(response.data.users);
//       } catch (err) {
//         setError("Failed to fetch user data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Users</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {users.map((user, index) => (
//           <div
//             key={user.user.id}
//             className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
//           >
//             <div className="flex items-center mb-4">
//               <FaUserAlt className="text-blue-500 text-2xl mr-3" />
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-700">{user.user.name}</h2>
//                 <p className="text-sm text-gray-500">{user.user.email}</p>
//               </div>
//             </div>
//             <div>
//               <h3 className="text-md font-semibold text-gray-800 mb-2">
//                 Tickets ({user.tickets.length}):
//               </h3>
//               {user.tickets.length > 0 ? (
//                 <ul className="list-disc pl-5 space-y-1">
//                   {user.tickets.map((ticket, ticketIndex) => {
//                     if (!ticket) return null; // Skip null tickets
//                     return (
//                       <li key={ticket._id || ticketIndex} className="flex items-center space-x-2">
//                         <FaTicketAlt className="text-green-500 text-lg" />
//                         <span className="text-gray-600">
//                           Flight: {ticket.flight || "Unknown"} | Seat: {ticket.seat || "N/A"}
//                         </span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               ) : (
//                 <p className="text-sm text-gray-500">No tickets available.</p>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;



// import React, { useEffect, useState } from "react";
// import { FaUserAlt, FaTicketAlt } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const UserList = () => {
//   const [users, setUsers] = useState([]); // Ensure users is always an array
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/auth/allusers");
//         setUsers(response.data.users || []); // Fallback to an empty array if undefined
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError("Failed to fetch user data");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Users</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {users.map((userWrapper, index) => {
//           // Safeguard against undefined `userWrapper` or `userWrapper.user`
//           const user = userWrapper?.user || {};
//           const tickets = userWrapper?.tickets || [];

//           return (
//             <div
//               key={user.id || index}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
//              >
//               <div className="flex items-center mb-4">
//                 <FaUserAlt className="text-blue-500 text-2xl mr-3" />
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-700">{user.name || "Unknown User"}</h2>
//                   <p className="text-sm text-gray-500">{user.email || "No Email"}</p>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-md font-semibold text-gray-800 mb-2">
//                   Tickets ({tickets.length}):
//                 </h3>
//                 {tickets.length > 0 ? (
//                   <ul className="list-disc pl-5 space-y-1">
//                     {tickets.map((ticket, ticketIndex) => (
//                       <li
//                         key={ticket?._id || ticketIndex}
//                         className="flex items-center space-x-2"
//                       >
//                         <FaTicketAlt className="text-green-500 text-lg" />
//                         <span className="text-gray-600">
//                           Flight: {ticket?.flight || "Unknown"} | Seat: {ticket?.seat || "N/A"}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-sm text-gray-500">No tickets available.</p>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default UserList;




// import React, { useEffect, useState } from "react";
// import { FaUserAlt, FaTicketAlt, FaPlane } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const UserList = () => {
//   const [users, setUsers] = useState([]); // Array of users
//   const [tickets, setTickets] = useState([]); // Array of tickets
//   const [flights, setFlights] = useState([]); // Array of flights
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/auth/allusers`);
//         setUsers(response.data.users || []); // Fallback to empty array if no users
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError("Failed to fetch user data.");
//       }
//     };

//     const fetchTickets = async () => {
//       try {
//         const response = await axios.get(`${BACKENDURL}/api/v1/tickets/alltickets`);
//         const { tickets: ticketData, flights: flightData } = response.data;
//         setTickets(ticketData || []); // Fallback to empty array
//         setFlights(flightData || []); // Fallback to empty array
//       } catch (err) {
//         console.error("Error fetching tickets:", err);
//         setError("Failed to fetch ticket data.");
//       }
//     };

//     const fetchData = async () => {
//       await Promise.all([fetchUsers(), fetchTickets()]);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   const getTicketsForUser = (userId) =>
//     tickets.filter((ticket) => ticket.bookings.some((booking) => booking.user === userId));

//   return (
//     <div className="p-4 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Users with Tickets</h1>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {users.map((userWrapper, index) => {
//           const user = userWrapper?.user || {};
//           const userTickets = getTicketsForUser(user.id);

//           return (
//             <div
//               key={user.id || index}
//               className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
//             >
//               <div className="flex items-center mb-4">
//                 <FaUserAlt className="text-blue-500 text-2xl mr-3" />
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-700">{user.name || "Unknown User"}</h2>
//                   <p className="text-sm text-gray-500">{user.email || "No Email"}</p>
//                 </div>
//               </div>
//               <div>
//                 <h3 className="text-md font-semibold text-gray-800 mb-2">
//                   Tickets ({userTickets.length}):
//                 </h3>
//                 {userTickets.length > 0 ? (
//                   <ul className="list-disc pl-5 space-y-2">
//                     {userTickets.map((ticket, ticketIndex) => (
//                       <li key={ticket._id || ticketIndex}>
//                         <div className="flex items-center space-x-2">
//                           <FaTicketAlt className="text-green-500 text-lg" />
//                           <span className="text-gray-600">
//                             Ticket UID: {ticket.uid || "N/A"}
//                           </span>
//                         </div>
//                         <div className="ml-6 mt-2">
//                           {ticket.bookings.map((booking, bookingIndex) => {
//                             const flight = flights.find((f) => f._id === booking.flight);
//                             return (
//                               <div
//                                 key={booking._id || bookingIndex}
//                                 className="flex items-start bg-gray-100 rounded-md p-2 mb-2"
//                               >
//                                 <FaPlane className="text-blue-500 mr-2" />
//                                 <div>
//                                   <p className="text-sm text-gray-800 font-medium">
//                                     Flight: {flight?.airlineName || "Unknown Flight"}
//                                   </p>
//                                   <p className="text-sm text-gray-500">
//                                     Seat: {booking.seat || "N/A"}
//                                   </p>
//                                   <p className="text-sm text-gray-500">
//                                     Destination: {flight?.destination || "N/A"}
//                                   </p>
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-sm text-gray-500">No tickets available.</p>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default UserList;



import React, { useEffect, useState } from "react";
import { FaUserAlt, FaTicketAlt, FaPlane } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const UserList = () => {
  const [users, setUsers] = useState([]); // Array of users
  const [tickets, setTickets] = useState([]); // Array of tickets
  const [flights, setFlights] = useState([]); // Array of flights
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/auth/allusers`);
        setUsers(response.data.users || []); // Fallback to empty array if no users
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to fetch user data.");
      }
    };

    const fetchTickets = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/tickets/alltickets`);
        const { tickets: ticketData, flights: flightData } = response.data;
        setTickets(ticketData || []); // Fallback to empty array
        setFlights(flightData || []); // Fallback to empty array
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError("Failed to fetch ticket data.");
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchUsers(), fetchTickets()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const getTicketsForUser = (userId) =>
    tickets.filter((ticket) => ticket.bookings.some((booking) => booking.user === userId));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">All Users with Tickets</h1>
      <div className="space-y-4">
        {users.map((userWrapper, index) => {
          const user = userWrapper?.user || {};
          const userTickets = getTicketsForUser(user.id);

          return (
            <div
              key={user.id || index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex items-center space-x-6"
            >
              {/* User Information */}
              <div className="flex items-center space-x-4">
                <FaUserAlt className="text-blue-500 text-2xl" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-700">{user.name || "Unknown User"}</h2>
                  <p className="text-sm text-gray-500">{user.email || "No Email"}</p>
                </div>
              </div>

              {/* User Tickets */}
              <div className="flex-1">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Tickets ({userTickets.length}):
                </h3>
                {userTickets.length > 0 ? (
                  <div className="flex flex-wrap space-x-4">
                    {userTickets.map((ticket, ticketIndex) => (
                      <div key={ticket._id || ticketIndex} className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <FaTicketAlt className="text-green-500 text-lg" />
                          <span className="text-gray-600">
                            UID: {ticket.uid || "N/A"} 
                          </span>

                        </div>
                        {ticket.bookings.map((booking, bookingIndex) => {
                          const flight = flights.find((f) => f._id === booking.flight);
                          return (
                            <div
                              key={booking._id || bookingIndex}
                              className="flex items-center space-x-4"
                            >
                              <FaPlane className="text-blue-500 text-lg" />
                              <div>
                                <p className="text-sm text-gray-800 font-medium">
                                  Flight: {flight?.airlineName || "Unknown"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Seat: {booking.seat || "N/A"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Destination: {flight?.
to || "N/A"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  status: {ticket.status}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No tickets available.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
