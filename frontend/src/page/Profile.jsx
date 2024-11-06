
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";
import { useNavigate, Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary";
import { authContext } from "../context/authContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { dispatch } = useContext(authContext);
  const [userData, setUserData] = useState({});
  const [tickets, setTickets] = useState([]);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // data from backend its is correct

    // const fetchUserData = async () => {
    //   try {
    //     const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });
    //     setUserData(response.data.user);
    //     setTickets(response.data.tickets);
    //     setUserName(response.data.user.name);
    //   } catch (error) {
    //     if (error.response && error.response.status === 401) {
    //       toast.error("Unauthorized! Redirecting to login.");
    //       dispatch({ type: "LOGOUT" });
    //       navigate("/login");
    //     } else {
    //       console.error("Error fetching user data:", error);
    //     }
    //   }
    // };

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
    const fetchUserData = async () => {
      try {
        // Retrieve user details from local storage
        const user = JSON.parse(localStorage.getItem("user"));
        const tickets = JSON.parse(localStorage.getItem("tickets"));
    
        if (user) {
          setUserData(user);
          setTickets(tickets || []); // Use an empty array if no tickets are found
          setUserName(user.name);
        } else {
          // If no user data is found in local storage, redirect to login
          toast.error("No user data found. Redirecting to login.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user data from local storage:", error);
        toast.error("An error occurred while fetching user data.");
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

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const updatedData = { name: userName };
      if (profilePic) {
        const imageData = await uploadImageToCloudinary(profilePic);
        updatedData.profilePic = imageData.secure_url;
      }

      const response = await axios.put(
        BACKENDURL + "/api/v1/auth/updateUser",
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Profile updated successfully");
      setUserData(response.data.user);
      setProfilePic(response.data.user.profilePic); // Update the profile picture state

      // Optionally refresh the page or re-fetch data
      // window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="px-[30px] md:px-[30px]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="mt-5 text-2xl">Profile</h1>
        <div className="my-5 w-[100px] h-[100px] rounded-full overflow-hidden relative">
          <div className="w-full h-full object-cover absolute flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 cursor-pointer">
            <label htmlFor="profile-pic-upload">
              <TbEdit className="text-white text-[40px] cursor-pointer" />
            </label>
            <input
              id="profile-pic-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </div>
          <img src={profilePic || userData.profilePic} alt="Profile" />
        </div>

        <div>
          <div className="flex gap-2 justify-start items-center">
            <p>User Name: </p>
            <input
              type="text"
              value={userName}
              className="outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <p className="mt-2">User Email: {userData.email}</p>
        </div>

        <div className="flex gap-2 justify-start items-center">
          <button
            className="bg-blue-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-blue-400 transition duration-200"
            onClick={handleProfileUpdate}
          >
            Update Profile
          </button>
          <button
            className="bg-red-300 text-black mt-3 px-8 py-3 rounded-xl hover:bg-red-400 transition duration-200"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        {tickets.length > 0 ? (
          <table className="table-auto w-full mt-5">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket._id}>
                  <td className="text-center">{ticket.uid}</td>
                  <td className="text-center">
                    <Link
                      to={`/ticket/${ticket.uid}`}
                      className="text-blue-500 underline"
                    >
                      Go to Ticket
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-5">No tickets found</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
