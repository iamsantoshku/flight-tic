// import React, { useEffect, useState } from "react";
// import { FaPlane, FaTicketAlt, FaUserAlt } from "react-icons/fa";
// import { FiLoader } from "react-icons/fi";
// import { BACKENDURL } from "../Config/Config";

// const AllTickets = () => {
//   const [tickets, setTickets] = useState([]);
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const response = await fetch( BACKENDURL + "/api/v1/tickets/alltickets"); // Replace with actual API URL
//         const data = await response.json();
//         if (data.success) {
//           setTickets(data.tickets);
//           setFlights(data.flights);
//         }
//       } catch (error) {
//         console.error("Error fetching tickets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };


//     const fetchUsers = async () => {
//         try {
//           const response = await axios.get(BACKENDURL + "/api/v1/auth/allusers");
//           setUsers(response.data.users || []); // Fallback to an empty array if undefined
//         } catch (err) {
//           console.error("Error fetching users:", err);
//           setError("Failed to fetch user data");
//         } finally {
//           setLoading(false);
//         }
//       };


//     fetchTickets();
//     fetchUsers();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <FiLoader className="text-blue-500 text-4xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4 mt-10">
//       <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//         <FaTicketAlt className="inline-block mr-2" />
//         All Tickets
//       </h1>
//       {tickets.length > 0 ? (
//         tickets.map((ticket) => (
//           <div
//             key={ticket._id}
//             className="bg-white shadow-lg rounded-lg p-4 mb-6"
//           >
//             <h2 className="text-lg font-bold text-gray-800 mb-2">
//               Ticket UID: {ticket.uid}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="text-md font-semibold text-gray-700 mb-2">
//                   Bookings:
//                 </h3>
//                 {ticket.bookings.length > 0 ? (
//                   ticket.bookings.map((booking) => (
//                     <div
//                       key={booking._id}
//                       className="bg-gray-100 rounded-md p-2 mb-2"
//                     >
//                       <FaUserAlt className="inline-block mr-2 text-blue-500" />
//                       <span>Seat: {booking.seat}</span>
//                       <br />
//                       <FaPlane className="inline-block mr-2 text-green-500" />
//                       <span>Flight: {booking.flight || "N/A"}</span>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-sm text-gray-500">No bookings found.</p>
//                 )}
//               </div>
//               <div>
//                 <h3 className="text-md font-semibold text-gray-700 mb-2">
//                   Associated Flights:
//                 </h3>
//                 {ticket.bookings.map((booking) => {
//                   const flight = flights.find((f) => f._id === booking.flight);
//                   return flight ? (
//                     <div
//                       key={flight._id}
//                       className="flex items-center bg-gray-100 rounded-md p-2 mb-2"
//                     >
//                       <img
//                         src={flight.airlineLogo}
//                         alt={flight.airlineName}
//                         className="w-10 h-10 mr-4 rounded-full"
//                       />
//                       <div>
//                         <p className="text-sm font-semibold text-gray-800">
//                           {flight.airlineName}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           {flight.destination} ({flight.departureTime})
//                         </p>
//                       </div>
//                     </div>
//                   ) : (
//                     <p key={booking._id} className="text-sm text-gray-500">
//                       Flight details not available.
//                     </p>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500">No tickets found.</p>
//       )}
//     </div>
//   );
// };

// export default AllTickets;




// import React, { useEffect, useState } from "react";
// import { FaPlane, FaTicketAlt, FaUserAlt } from "react-icons/fa";
// import { FiLoader } from "react-icons/fi";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";

// const AllTickets = () => {
//     const [tickets, setTickets] = useState([]);
//     const [flights, setFlights] = useState([]);
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchTickets = async () => {
//             try {
//                 const response = await fetch(BACKENDURL + "/api/v1/tickets/alltickets");
//                 const data = await response.json();
//                 if (data.success) {
//                     setTickets(data.tickets);
//                     setFlights(data.flights);
//                 }
//             } catch (error) {
//                 console.error("Error fetching tickets:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get(BACKENDURL + "/api/v1/auth/allusers");
//                 setUsers(response.data.users || []);
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             }
//         };

//         fetchTickets();
//         fetchUsers();
//     }, []);

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <FiLoader className="text-blue-500 text-4xl animate-spin" />
//             </div>
//         );
//     }

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
//                 <FaTicketAlt className="inline-block mr-2" />
//                 All Tickets
//             </h1>
//             {tickets.length > 0 ? (
//                 tickets.map((ticket) => {
//                     // Find the user associated with the ticket
//                     const user = users.find((u) => u._id === ticket.userId);

//                     return (
//                         <div
//                             key={ticket._id}
//                             className="bg-white shadow-lg rounded-lg p-4 mb-6"
//                         >
//                             <h2 className="text-lg font-bold text-gray-800 mb-2">
//                                 Ticket UID: {ticket.uid}
//                             </h2>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div>
//                                     <h3 className="text-md font-semibold text-gray-700 mb-2">
//                                         Bookings:
//                                     </h3>
//                                     {ticket.bookings.length > 0 ? (
//                                         ticket.bookings.map((booking) => (

//                                             <div
//                                                 key={booking._id}
//                                                 className="bg-gray-100 rounded-md p-2 mb-2"
//                                             >
//                                                 <FaUserAlt className="inline-block mr-2 text-blue-500" />
//                                                 <span>Seat: {booking.seat}</span>
//                                                 <br />
//                                                 <FaPlane className="inline-block mr-2 text-green-500" />
//                                                 <span>Flight: {booking.flight || "N/A"}</span>
//                                                 <br/>
//                                                 <FaUserAlt className="inline-block mr-2 text-blue-500" />
//                                                 <span>Name: {booking.fName} {booking.lName}</span>
//                                                 <email className="inline-block mr-2 text-blue-500" />
//                                                 <span>  Email: {booking.email}</span>

                                                
//                                             </div>
                                            
//                                         ))
//                                     ) : (
//                                         <p className="text-sm text-gray-500">No bookings found.</p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <h3 className="text-md font-semibold text-gray-700 mb-2">
//                                         Associated Flights:
//                                     </h3>
//                                     {ticket.bookings.map((booking) => {
//                                         const flight = flights.find(
//                                             (f) => f._id === booking.flight
//                                         );
//                                         return flight ? (
//                                             <div
//                                                 key={flight._id}
//                                                 className="flex items-center bg-gray-100 rounded-md p-2 mb-2"
//                                             >
//                                                 <img
//                                                     src={flight.airlineLogo}
//                                                     alt={flight.airlineName}
//                                                     className="w-10 h-10 mr-4 rounded-full"
//                                                 />
//                                                 <div>
//                                                     <p className="text-sm font-semibold text-gray-800">
//                                                         {flight.airlineName}
//                                                     </p>
//                                                     <p className="text-sm text-gray-500">
//                                                         {/* {flight.destination} ({flight.departureTime}) */}
//                                                         {flight.from} ---  {flight.to} 
//                                                     </p>
//                                                     <p className="text-sm text-gray-500">
//                                                         {/* {flight.destination} ({flight.departureTime}) */}
//                                                          ({flight.departTime}---{flight.arriveTime})
//                                                     </p>
//                                                     <p className="text-sm text-gray-500">
//                                                         {flight.departDate} --- {flight.arriveDate}

//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         ) : (
//                                             <p key={booking._id} className="text-sm text-gray-500">
//                                                 Flight details not available.
//                                             </p>
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                             {/* Add user information below Ticket UID */}
                            
//                         </div>
//                     );
//                 })
//             ) : (
//                 <p className="text-center text-gray-500">No tickets found.</p>
//             )}
//         </div>
//     );
// };

// export default AllTickets;






import React, { useEffect, useState } from "react";
import { FaPlane, FaTicketAlt, FaUserAlt } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [flights, setFlights] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(BACKENDURL + "/api/v1/tickets/alltickets");
        const data = await response.json();
        if (data.success) {
          setTickets(data.tickets);
          setFlights(data.flights);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(BACKENDURL + "/api/v1/auth/allusers");
        setUsers(response.data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchTickets();
    fetchUsers();
  }, []);

  const handleCancelTicket = async (uid) => {
    if (!window.confirm("Are you sure you want to cancel this ticket?")) return;

    setLoading(true);
    try {
      const response = await axios.put(`${BACKENDURL}/api/v1/tickets/cancel/${uid}`);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FiLoader className="text-blue-500 text-4xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        <FaTicketAlt className="inline-block mr-2" />
        All Tickets
      </h1>
      {tickets.length > 0 ? (
        tickets.map((ticket) => {
          // Find the user associated with the ticket
          const user = users.find((u) => u._id === ticket.userId);

          return (
            <div
              key={ticket._id}
              className="bg-white shadow-lg rounded-lg p-4 mb-6"
            >
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Ticket UID: {ticket.uid}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-md font-semibold text-gray-700 mb-2">
                    Bookings:
                  </h3>
                  {ticket.bookings.length > 0 ? (
                    ticket.bookings.map((booking) => (
                      <div
                        key={booking._id}
                        className="bg-gray-100 rounded-md p-2 mb-2"
                      >
                        <FaUserAlt className="inline-block mr-2 text-blue-500" />
                        <span>Seat: {booking.seat}</span>
                        <br />
                        <FaPlane className="inline-block mr-2 text-green-500" />
                        <span>Flight: {booking.flight || "N/A"}</span>
                        <br />
                        <FaUserAlt className="inline-block mr-2 text-blue-500" />
                        <span>
                          Name: {booking.fName} {booking.lName}
                        </span>
                        <br />
                        <span>Email: {booking.email}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No bookings found.</p>
                  )}
                </div>
                <div>
                  <h3 className="text-md font-semibold text-gray-700 mb-2">
                    Associated Flights:
                  </h3>
                  {ticket.bookings.map((booking) => {
                    const flight = flights.find(
                      (f) => f._id === booking.flight
                    );
                    return flight ? (
                      <div
                        key={flight._id}
                        className="flex items-center bg-gray-100 rounded-md p-2 mb-2"
                      >
                        <img
                          src={flight.airlineLogo}
                          alt={flight.airlineName}
                          className="w-10 h-10 mr-4 rounded-full"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            {flight.airlineName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {flight.from} --- {flight.to}
                          </p>
                          <p className="text-sm text-gray-500">
                            ({flight.departTime} --- {flight.arriveTime})
                          </p>
                          <p className="text-sm text-gray-500">
                            {flight.departDate} --- {flight.arriveDate}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p key={booking._id} className="text-sm text-gray-500">
                        Flight details not available.
                      </p>
                    );
                  })}
                </div>
              </div>
              {/* Cancel Button */}
              {ticket.status !== "cancelled" ? (
                <button
                  onClick={() => handleCancelTicket(ticket.uid)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Cancel Ticket
                </button>
              ) : (
                <p className="mt-4 text-red-500 font-bold">
                  Ticket has been canceled
                </p>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500">No tickets found.</p>
      )}
    </div>
  );
};

export default AllTickets;
