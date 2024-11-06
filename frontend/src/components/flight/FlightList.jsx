// // Import necessary modules
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import FlightCard from './FlightCard'; // Import the FlightCard component
// import { BACKENDURL } from '../../Config/Config';

// const FlightList = () => {
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch flights data from API endpoint
//     const fetchFlights = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/flights/all-flights"); // Change the URL to your endpoint
//         setFlights(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching flights:", error);
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   if (loading) {
//     return <p>Loading flights...</p>;
//   }

//   return (
//     <div className="flight-list-container p-4">
//       {flights.length === 0 ? (
//         <p>No flights found.</p>
//       ) : (
//         flights.map((flight) => (
//           <FlightCard key={flight._id} flight={flight} />
//         ))
//       )}
//     </div>
//   );
// };

// export default FlightList;




// import React, { useEffect, useState } from 'react';
// // import FlightCard from './FlightCard'; // Import the FlightCard component
// import FlightCard from './FlightCard';
// // import SearchedFlightCards from '../Card/SearchedFlightCards';
// import { BACKENDURL } from '../../Config/Config';

// const FlightList = () => {
//   const [flights, setFlights] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch flights data from API endpoint
//     const fetchFlights = async () => {
//       try {
//         const response = await fetch(BACKENDURL + "/api/v1/flights/all-flights"); // Change the URL to your endpoint

//         if (!response.ok) {
//           throw new Error('Failed to fetch flights');
//         }

//         const data = await response.json();
//         setFlights(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching flights:", error);
//         setLoading(false);
//       }
//     };

//     fetchFlights();
//   }, []);

//   if (loading) {
//     return <p>Loading flights...</p>;
//   }

//   return (
//     <div className="flight-list-container p-4">
//       {flights.length === 0 ? (
//         <p>No flights found.</p>
//       ) : (
//         flights.map((flight) => (
//           <FlightCard key={flight._id} flight={flight} />
//         // <SearchedFlightCards key={flight._id} flight={flight}/>
//         ))
//       )}
//     </div>
//   );
// };

// export default FlightList;







// import React, { useEffect, useState } from "react";
// import FlightCard from "./FlightCard";
// import { BACKENDURL } from "../../Config/Config";

// const FlightList = () => {
//     const [flights, setFlights] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [limit, setLimit] = useState(10); // Default limit to show 10 flights
//     const [sortBy, setSortBy] = useState("mostViewed"); // Default sorting option

//     useEffect(() => {
//         // Fetch flights data from API endpoint
//         const fetchFlights = async () => {
//             try {
//                 const response = await fetch(BACKENDURL + "/api/v1/flights/all-flights"); // Change the URL to your endpoint

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch flights");
//                 }

//                 const data = await response.json();
//                 setFlights(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching flights:", error);
//                 setLoading(false);
//             }
//         };

//         fetchFlights();
//     }, []);

//     // Event handlers for dropdowns
//     const handleLimitChange = (event) => {
//         setLimit(parseInt(event.target.value));
//     };

//     const handleSortChange = (event) => {
//         setSortBy(event.target.value);
//     };

//     // Sorting function based on selected criteria
//     const sortedFlights = [...flights].sort((a, b) => {
//         if (sortBy === "mostViewed") return b.views - a.views;
//         if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
//         if (sortBy === "mostPopular") return b.popularity - a.popularity;
//         if (sortBy === "mostRated") return b.rating - a.rating;
//         return 0;
//     });

//     // Get limited number of flights based on selected limit
//     const displayedFlights = sortedFlights.slice(0, limit);

//     if (loading) {
//         return <p>Loading flights...</p>;
//     }

//     return (
//         <div className="ml-10 mr-5 p-4">
//             <div className="flex justify-between items-center mb-4">
//                 <h1 className="text-2xl font-bold text-center">Flight Search Results</h1>
//                 <div className="flex items-center gap-2 mr-[4vw]">
//                     {/* Limit Dropdown */}
//                     <div className="relative">
//                         <label htmlFor="limit-dropdown" className="sr-only">
//                             Number of Flights
//                         </label>
//                         <select
//                             id="limit-dropdown"
//                             onChange={handleLimitChange}
//                             value={limit}
//                             className="bg-white border border-gray-300 text-gray-800 py-1 px-3 rounded-md shadow-sm cursor-pointer focus:outline-none"
//                         >
//                             <option value={10}>10</option>
//                             <option value={20}>20</option>
//                             <option value={30}>30</option>
//                         </select>
//                     </div>

//                     {/* Sort By Dropdown */}
//                     <div className="relative">
//                         <label htmlFor="sort-dropdown" className="sr-only">
//                             Sort By
//                         </label>
//                         <select
//                             id="sort-dropdown"
//                             onChange={handleSortChange}
//                             value={sortBy}
//                             className="bg-white border border-gray-300 text-gray-800  py-1 px-3 rounded-md shadow-sm cursor-pointer focus:outline-none"
//                         >
//                             <option value="mostViewed">Most Viewed</option>
//                             <option value="recentSearch">Recent Search</option>
//                             <option value="mostPopular">Most Popular</option>
//                             <option value="mostRated">Most Rated</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             {/* Flight Cards */}
//             <div className="flex flex-col gap-4">
//                 {displayedFlights.length === 0 ? (
//                     <p>No flights found.</p>
//                 ) : (
//                     displayedFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FlightList;




// import React, { useEffect, useState } from "react";
// import FlightCard from "./FlightCard";
// import { BACKENDURL } from "../../Config/Config";
// import { FaArrowUp } from "react-icons/fa"; // Import an icon for the arrow

// const FlightList = () => {
//     const [flights, setFlights] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [limit, setLimit] = useState(10); // Default limit to show 10 flights
//     const [sortBy, setSortBy] = useState("mostViewed"); // Default sorting option

//     useEffect(() => {
//         // Fetch flights data from API endpoint
//         const fetchFlights = async () => {
//             try {
//                 const response = await fetch(BACKENDURL + "/api/v1/flights/all-flights"); // Change the URL to your endpoint

//                 if (!response.ok) {
//                     throw new Error("Failed to fetch flights");
//                 }

//                 const data = await response.json();
//                 setFlights(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching flights:", error);
//                 setLoading(false);
//             }
//         };

//         fetchFlights();
//     }, []);

//     // Event handlers for dropdowns
//     const handleLimitChange = (event) => {
//         setLimit(parseInt(event.target.value));
//     };

//     const handleSortChange = (event) => {
//         setSortBy(event.target.value);
//     };

//     // Sorting function based on selected criteria
//     const sortedFlights = [...flights].sort((a, b) => {
//         if (sortBy === "mostViewed") return b.views - a.views;
//         if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
//         if (sortBy === "mostPopular") return b.popularity - a.popularity;
//         if (sortBy === "mostRated") return b.rating - a.rating;
//         return 0;
//     });

//     // Get limited number of flights based on selected limit
//     const displayedFlights = sortedFlights.slice(0, limit);

//     if (loading) {
//         return <p>Loading flights...</p>;
//     }

//     // Scroll to top function
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <div className="ml-10 mr-5 p-4">
//             <div className="flex justify-between items-center mb-4">
//                 {/* <h1 className="text-2xl font-bold text-center">Flight Search Results</h1> */}
//                 {/* Total Flights Found */}
//                 <div className="text-gray-800 ml-4">
//                         Total Flights Found: {flights.length}
//                     </div>
//                 <div className="flex items-center gap-2 mr-[4vw]">
//                     {/* Scroll to top arrow */}
//                     <div className="flex items-center">
//                         <FaArrowUp
//                             onClick={scrollToTop}
//                             className="text-gray-800 cursor-pointer hover:text-gray-600 transition"
//                             title="Back to Top"
//                         />
//                     </div>

//                     {/* Limit Dropdown */}
//                     <div className="relative">
//                         <label htmlFor="limit-dropdown" className="sr-only">
//                             Number of Flights
//                         </label>
//                         <select
//                             id="limit-dropdown"
//                             onChange={handleLimitChange}
//                             value={limit}
//                             className="bg-white border border-gray-300 text-gray-800 py-1 px-3 rounded-md shadow-sm cursor-pointer focus:outline-none"
//                         >
//                             <option value={10}>10</option>
//                             <option value={20}>20</option>
//                             <option value={30}>30</option>
//                         </select>
//                     </div>

//                     {/* Sort By Dropdown */}
//                     <div className="relative">
//                         <label htmlFor="sort-dropdown" className="sr-only">
//                             Sort By
//                         </label>
//                         <select
//                             id="sort-dropdown"
//                             onChange={handleSortChange}
//                             value={sortBy}
//                             className="bg-white border border-gray-300 text-gray-800 py-1 px-3 rounded-md shadow-sm cursor-pointer focus:outline-none"
//                         >
//                             <option value="mostViewed">Most Viewed</option>
//                             <option value="recentSearch">Recent Search</option>
//                             <option value="mostPopular">Most Popular</option>
//                             <option value="mostRated">Most Rated</option>
//                         </select>
//                     </div>

                    
//                 </div>
//             </div>

//             {/* Flight Cards */}
//             <div className="flex flex-col gap-4">
//                 {displayedFlights.length === 0 ? (
//                     <p>No flights found.</p>
//                 ) : (
//                     displayedFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FlightList;





// import React, { useEffect, useState } from "react";
// import FlightCard from "./FlightCard";
// import { BACKENDURL } from "../../Config/Config";
// import { FaArrowUp } from "react-icons/fa";

// const FlightList = () => {
//     const [flights, setFlights] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [limit, setLimit] = useState(10);
//     const [sortBy, setSortBy] = useState("mostViewed");
//     const [currentPage, setCurrentPage] = useState(1);

//     const itemsPerPage = 10;

//     useEffect(() => {
//         // Fetch flights data from API endpoint
//         const fetchFlights = async () => {
//             try {
//                 const response = await fetch(`${BACKENDURL}/api/v1/flights/all-flights`);
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch flights");
//                 }
//                 const data = await response.json();
//                 setFlights(data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching flights:", error);
//                 setLoading(false);
//             }
//         };

//         fetchFlights();
//     }, []);

//     // Event handlers for dropdowns
//     const handleLimitChange = (event) => {
//         setLimit(parseInt(event.target.value));
//     };

//     const handleSortChange = (event) => {
//         setSortBy(event.target.value);
//     };

//     // Sorting function based on selected criteria
//     const sortedFlights = [...flights].sort((a, b) => {
//         if (sortBy === "mostViewed") return b.views - a.views;
//         if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
//         if (sortBy === "mostPopular") return b.popularity - a.popularity;
//         if (sortBy === "mostRated") return b.rating - a.rating;
//         if (sortBy === "priceLowToHigh") return a.sellingPrice - b.sellingPrice;
//         if (sortBy === "priceHighToLow") return b.sellingPrice - a.sellingPrice;
//         return 0;
//     });

//     // Get flights to display based on current page and limit
//     const displayedFlights = sortedFlights.slice((currentPage - 1) * limit, currentPage * limit);

//     // Scroll to top function
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     // Pagination functions
//     const goToNextPage = () => {
//         if (currentPage < Math.ceil(flights.length / limit)) {
//             setCurrentPage((prev) => prev + 1);
//             scrollToTop();
//         }
//     };

//     const goToPreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage((prev) => prev - 1);
//             scrollToTop();
//         }
//     };

//     if (loading) {
//         return <p>Loading flights...</p>;
//     }

//     return (
//         <div className="ml-10 mr-5 p-4">
//             <div className="flex justify-between items-center mb-4">
//                 <div className="text-gray-800 ml-4">
//                     Total Flights Found: {flights.length}
//                 </div>
//                 <div className="flex items-center gap-2 mr-[4vw]">
//                     <div className="flex items-center">
//                         <FaArrowUp
//                             onClick={scrollToTop}
//                             className="text-gray-800 cursor-pointer hover:text-gray-600 transition"
//                             title="Back to Top"
//                         />
//                     </div>

//                     <div className="relative">
//                         <label htmlFor="limit-dropdown" className="sr-only">
//                             Number of Flights
//                         </label>
//                         <select
//                             id="limit-dropdown"
//                             onChange={handleLimitChange}
//                             value={limit}
//                             className="bg-white border border-gray-300 text-gray-800 py-1 px-3 rounded-md shadow-sm cursor-pointer focus:outline-none"
//                         >
//                             <option value={10}>10</option>
//                             <option value={20}>20</option>
//                             <option value={30}>30</option>
//                         </select>
//                     </div>

//                     <div className="relative">
//                         <label htmlFor="sort-dropdown" className="sr-only">
//                             Sort By
//                         </label>
//                         <select
//                             id="sort-dropdown"
//                             onChange={handleSortChange}
//                             value={sortBy}
//                             className="bg-white border border-gray-300 text-gray-800 py-1 px-3 rounded-md shadow-sm cursor-pointer focus:outline-none"
//                         >
//                             <option value="mostViewed">Most Viewed</option>
//                             <option value="recentSearch">Recent Search</option>
//                             <option value="mostPopular">Most Popular</option>
//                             <option value="mostRated">Most Rated</option>
//                             <option value="priceLowToHigh">Price: Low to High</option>
//                             <option value="priceHighToLow">Price: High to Low</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col gap-4">
//                 {displayedFlights.length === 0 ? (
//                     <p>No flights found.</p>
//                 ) : (
//                     displayedFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
//                 )}
//             </div>

//             {/* Pagination controls */}
//             <div className="flex justify-between mt-4">
//                 <button
//                     disabled={currentPage === 1}
//                     onClick={goToPreviousPage}
//                     className="bg-gray-200 text-gray-800 py-1 px-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-300 disabled:opacity-50"
//                 >
//                     Previous
//                 </button>
//                 <span>
//                     Page {currentPage} of {Math.ceil(flights.length / limit)}
//                 </span>
//                 <button
//                     disabled={currentPage === Math.ceil(flights.length / limit)}
//                     onClick={goToNextPage}
//                     className="bg-gray-200 text-gray-800 py-1 px-4 rounded-md shadow-sm cursor-pointer hover:bg-gray-300 disabled:opacity-50"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FlightList;





import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import { BACKENDURL } from "../../Config/Config";
import { FaArrowUp } from "react-icons/fa";

const FlightList = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [sortBy, setSortBy] = useState("mostViewed");
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // Fetch flights data from API endpoint
        const fetchFlights = async () => {
            try {
                const response = await fetch(`${BACKENDURL}/api/v1/flights/all-flights`);
                if (!response.ok) {
                    throw new Error("Failed to fetch flights");
                }
                const data = await response.json();
                setFlights(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching flights:", error);
                setLoading(false);
            }
        };

        fetchFlights();
    }, []);

    // Sorting function based on selected criteria
    const sortedFlights = [...flights].sort((a, b) => {
        if (sortBy === "mostViewed") return b.views - a.views;
        if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
        if (sortBy === "mostPopular") return b.popularity - a.popularity;
        if (sortBy === "mostRated") return b.rating - a.rating;
        if (sortBy === "priceLowToHigh") return a.sellingPrice - b.sellingPrice;
        if (sortBy === "priceHighToLow") return b.sellingPrice - a.sellingPrice;
        if (sortBy === "alphabetical") return a.name.localeCompare(b.name); // Alphabetical sorting
        return 0;
    });

    // Event handlers for dropdowns
    const handleLimitChange = (event) => setLimit(parseInt(event.target.value));
    const handleSortChange = (event) => setSortBy(event.target.value);

    // Get flights to display based on current page and limit
    const displayedFlights = sortedFlights.slice((currentPage - 1) * limit, currentPage * limit);

    // Pagination functions and Scroll to top
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const goToNextPage = () => currentPage < Math.ceil(flights.length / limit) && setCurrentPage((prev) => prev + 1);
    const goToPreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

    if (loading) return <p>Loading flights...</p>;

    return (
        <div className="ml-10 mr-5 p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="text-gray-800 ml-4">Total Flights Found: {flights.length}</div>
                <div className="flex items-center gap-2 mr-[4vw]">
                    <FaArrowUp onClick={scrollToTop} className="text-gray-800 cursor-pointer" title="Back to Top" />
                    <select onChange={handleLimitChange} value={limit} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                    </select>
                    <select onChange={handleSortChange} value={sortBy} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
                        <option value="mostViewed">Most Viewed</option>
                        <option value="recentSearch">Recent Search</option>
                        <option value="mostPopular">Most Popular</option>
                        <option value="mostRated">Most Rated</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="alphabetical">Alphabetical</option> {/* New Sorting Option */}
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {displayedFlights.length === 0 ? (
                    <p>No flights found.</p>
                ) : (
                    displayedFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
                )}
            </div>
            <div className="flex justify-between mt-4">
                <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-gray-200 py-1 px-4 rounded-md">Previous</button>
                <span>Page {currentPage} of {Math.ceil(flights.length / limit)}</span>
                <button onClick={goToNextPage} disabled={currentPage === Math.ceil(flights.length / limit)} className="bg-gray-200 py-1 px-4 rounded-md">Next</button>
            </div>
        </div>
    );
};

export default FlightList;
