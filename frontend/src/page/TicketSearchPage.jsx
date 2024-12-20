// import React, { useEffect, useState } from "react";
// import BookTicketBox from "../components/BookTicketBox";
// import SearchedFlightCards from "../components/Card/SearchedFlightCards";
// import { toast } from "react-toastify";
// import { BACKENDURL } from "../Config/Config";
// import { Link, useLocation } from "react-router-dom";
// import Planesliding from "../components/Home/PlaneSliding";
// import SortCategory from "../components/SortCategory";
// import HowItWorks from "../components/HowItWorks";

// const TicketSearchPage = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);


//   const [formData, setFormData] = useState({
//     from: searchParams.get("from") || "",
//     to: searchParams.get("to") || "",
//     departDate: searchParams.get("departDate") || "",
//     flightType: "Economy",
//   });

//   const [searchedFlights, setSearchedFlights] = useState([]);
//   const [searchStatus, setSearchStatus] = useState("");

//   const handleFormDataChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleFlightSearch = async (e) => {
//     e.preventDefault();

//     if (!formData.from || !formData.to) {
//       setSearchStatus("Enter flight details to search flights");
//       return;
//     }

//     try {
//       const response = await fetch(BACKENDURL + "/api/v1/flights/search", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.status === false) {
//         toast.error(data.message);
//         // Reset searchedFlights state to clear previous flight data
//         setSearchedFlights([]);
//         setSearchStatus("No flights found for the selected route");
//       } else {
//         setSearchedFlights(data);
//         setSearchStatus(
//           <>
//             {/* <div className="ml-[0vw]"> */}
//             <b>{data.length}</b> flights found from <b>{formData.from}</b> to{" "}
//             <b>{formData.to}</b>

//             {/* </div> */}
            
//           </>
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching flights:", error);
//     }
//   };

//   return (
//     <>
//     {/* px-[30px] md:px-[30px] */}
//     <div className="max-w-[1700px] mx-auto  ">
//       <BookTicketBox
//         formData={formData}
//         handleFormDataChange={handleFormDataChange}
//         handleFlightSearch={handleFlightSearch}
//       />
//       <p className="py-5">
//         <p>{searchStatus}</p>
//       </p>
//       {searchedFlights.length > 0 ? (
//         <div className="flex justify-center items-center gap-5 flex-wrap w-full">
//           {searchedFlights.map((flight, index) => (
//             <Link
//               to={`/book/${flight._id}`}
//               key={index}
//               className="lg:w-full w-fit"
//             >
//               <SearchedFlightCards key={index} flight={flight} />
//             </Link>
//           ))}
//         </div>
//       ) : null}
//     </div>
//     {/* <div className="relative -top-60">
//   <Planesliding />
//   </div> */}
// {/* relative -mt-16 sm:-mt-20 md:-mt-40 lg:-mt-90 */}
// <div className="-mt-[60vh] sm:-mt-60 md:-mt-40 lg:-mt-65">
//   <Planesliding />
// </div>

//   <div className="mt-10">
//         <hr />
//   </div>
//   <div className="">
//    <SortCategory/>

//   </div>

//   <div className="relative  mt-10">
//    <HowItWorks/>

//   </div>
  
   
//     </>
    
//   );
// };

// export default TicketSearchPage;






import React, { useEffect, useState } from "react";
import BookTicketBox from "../components/BookTicketBox";
import SearchedFlightCards from "../components/Card/SearchedFlightCards";
import { toast } from "react-toastify";
import { BACKENDURL } from "../Config/Config";
import { Link, useLocation } from "react-router-dom";
import Planesliding from "../components/Home/PlaneSliding";
import SortCategory from "../components/SortCategory";
import HowItWorks from "../components/HowItWorks";

const TicketSearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [formData, setFormData] = useState({
    from: searchParams.get("from") || "",
    to: searchParams.get("to") || "",
    departDate: searchParams.get("departDate") || "",
    flightType: "Economy",
  });

  const [searchedFlights, setSearchedFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");
  const [selectedAirline, setSelectedAirline] = useState(""); // For airline filter
  const [sortByPrice, setSortByPrice] = useState(""); // For price sorting

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFlightSearch = async (e) => {
    e.preventDefault();

    if (!formData.from || !formData.to) {
      setSearchStatus("Enter flight details to search flights");
      return;
    }

    try {
      const response = await fetch(BACKENDURL + "/api/v1/flights/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.status === false) {
        toast.error(data.message);
        setSearchedFlights([]);
        setFilteredFlights([]);
        setSearchStatus("No flights found for the selected route");
      } else {
        setSearchedFlights(data);
        setFilteredFlights(data);
        setSearchStatus(
          <>
            <b>{data.length}</b> flights found from <b>{formData.from}</b> to{" "}
            <b>{formData.to}</b>
          </>
        );
      }
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  // Handle airline filter
  const handleAirlineFilter = (airlineName) => {
    setSelectedAirline(airlineName);
    const filtered = searchedFlights.filter(
      (flight) => flight.airline.airlineName === airlineName
    );
    setFilteredFlights(filtered);
  };

  // Handle price sorting
  const handlePriceSort = (order) => {
    const sortedFlights = [...filteredFlights].sort((a, b) => {
      if (order === "low-to-high") return a.price - b.price;
      if (order === "high-to-low") return b.price - a.price;
      return 0;
    });
    setFilteredFlights(sortedFlights);
    setSortByPrice(order);
  };

  return (
    <>
      <div className="max-w-[1700px] mx-auto">
        <BookTicketBox
          formData={formData}
          handleFormDataChange={handleFormDataChange}
          handleFlightSearch={handleFlightSearch}
        />
        <p className="py-5">{searchStatus}</p>

        {/* Sorting and Filtering Options */}
        {searchedFlights.length > 0 && (
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center p-4 bg-gray-100 rounded-lg">
            {/* Airline Filter */}
            <div>
              <h4 className="font-bold">Filter by Airline:</h4>
              <div className="flex gap-2 flex-wrap">
                {[
                  ...new Set(searchedFlights.map((flight) => flight.airline.airlineName)),
                ].map((airline, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg border ${
                      selectedAirline === airline
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleAirlineFilter(airline)}
                  >
                    {airline}
                  </button>
                ))}
                <button
                  className="px-4 py-2 rounded-lg border bg-gray-200 text-black"
                  onClick={() => {
                    setFilteredFlights(searchedFlights);
                    setSelectedAirline("");
                  }}
                >
                  Clear Filter
                </button>
              </div>
            </div>

            {/* Price Sorting */}
            <div>
              <h4 className="font-bold">Sort by Price:</h4>
              <div className="flex gap-2">
                <button
                  className={`px-4 py-2 rounded-lg border ${
                    sortByPrice === "low-to-high"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => handlePriceSort("low-to-high")}
                >
                  Low to High
                </button>
                <button
                  className={`px-4 py-2 rounded-lg border ${
                    sortByPrice === "high-to-low"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                  onClick={() => handlePriceSort("high-to-low")}
                >
                  High to Low
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Display Flights */}
        {filteredFlights.length > 0 ? (
          <div className="flex justify-center items-center gap-5 flex-wrap w-full mt-5">
            {filteredFlights.map((flight, index) => (
              <Link
                to={`/book/${flight._id}`}
                key={index}
                className="lg:w-full w-fit"
              >
                <SearchedFlightCards key={index} flight={flight} />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      {/* -mt-[60vh] sm:-mt-60 md:-mt-40 lg:-mt-65 */}
      <div className="slid -mt-[60vh] sm:-mt-[80vh] md:-mt-[30vh] lg:-mt-[30vh]">
        <Planesliding />
      </div>

      <div className="mt-10">
        <hr />
      </div>
      <div>
        <SortCategory />
      </div>

      <div className="relative mt-10">
        <HowItWorks />
      </div>
    </>
  );
};

export default TicketSearchPage;





