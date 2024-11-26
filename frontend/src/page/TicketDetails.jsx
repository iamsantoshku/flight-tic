import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import { toast } from "react-toastify";

const TicketDetails = () => {
  const { uid } = useParams(); // Get the ticket UID from the URL
  const [ticketDetails, setTicketDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTicketDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `${BACKENDURL}/api/v1/tickets/${uid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTicketDetails(response.data.ticket);
      } catch (error) {
        console.error("Error fetching ticket details:", error);
        if (error.response && error.response.status === 404) {
          toast.error("Ticket not found.");
          navigate("/profile"); // Redirect back if ticket is not found
        }
      }
    };

    fetchTicketDetails();
  }, [uid, navigate]);

  if (!ticketDetails) {
    return <p>Loading ticket details...</p>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-5">Ticket Details</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p>
          <strong>Ticket ID:</strong> {ticketDetails.uid}
        </p>
        <p>
          <strong>Title:</strong> {ticketDetails.title || "N/A"}
        </p>
        <p>
          <strong>Description:</strong> {ticketDetails.description || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {ticketDetails.status || "Pending"}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(ticketDetails.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(ticketDetails.updatedAt).toLocaleString()}
        </p>
      </div>
      <button
        className="mt-5 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        onClick={() => navigate("/profile")}
      >
        Back to Profile
      </button>
    </div>
  );
};

export default TicketDetails;
