// import React, { useEffect, useState } from "react";
// import FlightCard from "../flight/FlightCard";
// import { BACKENDURL } from "../../Config/Config";
// import { FaArrowUp } from "react-icons/fa";
// import flightlogo from "../../assets/flight logo.png"

// const FlightListHome = () => {
//     const [flights, setFlights] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [limit, setLimit] = useState(10);
//     const [sortBy, setSortBy] = useState("mostViewed");
//     const [currentPage, setCurrentPage] = useState(1);

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

//     // Sorting function based on selected criteria
//     const sortedFlights = [...flights].sort((a, b) => {
//         if (sortBy === "mostViewed") return b.views - a.views;
//         if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
//         if (sortBy === "mostPopular") return b.popularity - a.popularity;
//         if (sortBy === "mostRated") return b.rating - a.rating;
//         if (sortBy === "priceLowToHigh") return a.sellingPrice - b.sellingPrice;
//         if (sortBy === "priceHighToLow") return b.sellingPrice - a.sellingPrice;
//         if (sortBy === "alphabetical") return a.name.localeCompare(b.name); // Alphabetical sorting
//         return 0;
//     });

//     // Event handlers for dropdowns
//     const handleLimitChange = (event) => setLimit(parseInt(event.target.value));
//     const handleSortChange = (event) => setSortBy(event.target.value);

//     // Get flights to display based on current page and limit
//     const displayedFlights = sortedFlights.slice((currentPage - 1) * limit, currentPage * limit);

//     // Pagination functions and Scroll to top
//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//     const goToNextPage = () => currentPage < Math.ceil(flights.length / limit) && setCurrentPage((prev) => prev + 1);
//     const goToPreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

//     if (loading) return <p>Loading flights...</p>;

//     return (
//         <div className="ml-10 mr-5 p-4">
//             <div class="my-10 mt-[5vw] flex items-center ">
//   {/* <!-- Left Side Content --> */}
//   <div>
//     <h1 class="text-5xl font-bold text-black flex items-center gap-2">
//       <span class="text-red-500">🔥</span> Top Flights
//     </h1>
//     <p class="text-gray-600 text-2xl font-semibold mt-2">
//       Competitive fares for your route-specific searches.
//     </p>
//   </div>

//   {/* <!-- Right Side Image --> */}
//   <div>
//     <img
//       src={flightlogo}
//       alt="Flight Offer Image"
//       class="max-w-[200px] w-full object-cover"
//     />
//   </div>
// </div>


//             <div className="flex justify-between items-center mb-4">
//                 <div className="text-gray-800 ml-4">Total Flights Found: {flights.length}</div>
//                 <div className="flex items-center gap-2 mr-[24vw]">
//                     <FaArrowUp onClick={scrollToTop} className="text-gray-800 cursor-pointer" title="Back to Top" />
//                     <select onChange={handleLimitChange} value={limit} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
//                         <option value={10}>10</option>
//                         <option value={20}>20</option>
//                         <option value={30}>30</option>
//                     </select>
//                     <select onChange={handleSortChange} value={sortBy} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
//                         <option value="mostViewed">Most Viewed</option>
//                         <option value="recentSearch">Recent Search</option>
//                         <option value="mostPopular">Most Popular</option>
//                         <option value="mostRated">Most Rated</option>
//                         <option value="priceLowToHigh">Price: Low to High</option>
//                         <option value="priceHighToLow">Price: High to Low</option>
//                         <option value="alphabetical">Alphabetical</option> {/* New Sorting Option */}
//                     </select>
//                 </div>
//             </div>
//             <div className="flex flex-col gap-4">
//                 {displayedFlights.length === 0 ? (
//                     <p>No flights found.</p>
//                 ) : (
//                     displayedFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
//                 )}
//             </div>
// <div className="flex gap-[25vw] mt-4">
//     <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-gray-200 py-1 px-4 rounded-md">Previous</button>
//     <span>Page {currentPage} of {Math.ceil(flights.length / limit)}</span>
//     <button onClick={goToNextPage} disabled={currentPage === Math.ceil(flights.length / limit)} className="bg-gray-200 py-1 px-4 rounded-md">Next</button>
// </div>
//         </div>
//     );
// };

// export default FlightListHome;





// import React, { useEffect, useState } from "react";
// import FlightCard from "../flight/FlightCard";
// import { BACKENDURL } from "../../Config/Config";
// import { FaArrowUp } from "react-icons/fa";
// import flightlogo from "../../assets/flight logo.png";

// const FlightListHome = () => {
//     const [flights, setFlights] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [limit, setLimit] = useState(10);
//     const [sortBy, setSortBy] = useState("mostViewed");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedClass, setSelectedClass] = useState("All Class");
//     const [selectedAirlines, setSelectedAirlines] = useState([]);
//     const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

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

//     // Sorting function based on selected criteria
//     const sortedFlights = [...flights].sort((a, b) => {
//         if (sortBy === "mostViewed") return b.views - a.views;
//         if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
//         if (sortBy === "mostPopular") return b.popularity - a.popularity;
//         if (sortBy === "mostRated") return b.rating - a.rating;
//         if (sortBy === "priceLowToHigh") return a.sellingPrice - b.sellingPrice;
//         if (sortBy === "priceHighToLow") return b.sellingPrice - a.sellingPrice;
//         if (sortBy === "alphabetical") return a.name.localeCompare(b.name); // Alphabetical sorting
//         return 0;
//     });

//     // Filtering based on class, airlines, and price
//     const filteredFlights = sortedFlights.filter((flight) => {
//         // Class filter
//         if (selectedClass !== "All Class" && flight.class !== selectedClass) return false;
//         // Airline filter
//         if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;
//         // Price filter
//         if (flight.sellingPrice < priceRange.min || flight.sellingPrice > priceRange.max) return false;
//         return true;
//     });

//     // Event handlers for dropdowns and filters
//     const handleLimitChange = (event) => setLimit(parseInt(event.target.value));
//     const handleSortChange = (event) => setSortBy(event.target.value);
//     const handleClassChange = (event) => setSelectedClass(event.target.innerText);
//     const handleAirlineChange = (airline) => {
//         setSelectedAirlines((prev) =>
//             prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
//         );
//     };
//     const handlePriceChange = (event, type) => {
//         setPriceRange({ ...priceRange, [type]: parseFloat(event.target.value) });
//     };

//     // Get flights to display based on current page and limit
//     const displayedFlights = filteredFlights.slice((currentPage - 1) * limit, currentPage * limit);

//     // Pagination functions and Scroll to top
//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//     const goToNextPage = () => currentPage < Math.ceil(filteredFlights.length / limit) && setCurrentPage((prev) => prev + 1);
//     const goToPreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

//     if (loading) return <p>Loading flights...</p>;

//     return (
//         <div className="ml-10 mr-5 p-4">
//             <div className="my-10 mt-[5vw] flex items-center ">
//                 <div>
//                     <h1 className="text-5xl font-bold text-black flex items-center gap-2">
//                         <span className="text-red-500">🔥</span> Top Flights
//                     </h1>
//                     <p className="text-gray-600 text-2xl font-semibold mt-2">
//                         Competitive fares for your route-specific searches.
//                     </p>
//                 </div>
//                 <img
//                     src={flightlogo}
//                     alt="Flight Offer Image"
//                     className="max-w-[200px] w-full object-cover"
//                 />
//             </div>

//             <div className="flex">
//                 {/* Filter Section */}

//                 {/* Flight Cards Section */}
//                 <div className="flex-1">
//                     <div className="flex justify-between items-center mb-4">
//                         <div className="text-gray-800 ml-4">Total Flights Found: {filteredFlights.length}</div>
//                         <div className="flex items-center gap-2 mr-6">
//                             <FaArrowUp onClick={scrollToTop} className="text-gray-800 cursor-pointer" title="Back to Top" />
//                             <select onChange={handleLimitChange} value={limit} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
//                                 <option value={10}>10</option>
//                                 <option value={20}>20</option>
//                                 <option value={30}>30</option>
//                             </select>
//                             <select onChange={handleSortChange} value={sortBy} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
//                                 <option value="mostViewed">Most Viewed</option>
//                                 <option value="recentSearch">Recent Search</option>
//                                 <option value="mostPopular">Most Popular</option>
//                                 <option value="mostRated">Most Rated</option>
//                                 <option value="priceLowToHigh">Price: Low to High</option>
//                                 <option value="priceHighToLow">Price: High to Low</option>
//                                 <option value="alphabetical">Alphabetical</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-4">
//                         {displayedFlights.length === 0 ? (
//                             <p>No flights found.</p>
//                         ) : (
//                             displayedFlights.map((flight) => (
//                                 <FlightCard key={flight.id} flight={flight} />
//                             ))
//                         )}
//                     </div>


//                     <div className="flex gap-[25vw] mt-4">
//                         <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-gray-200 py-1 px-4 rounded-md">Previous</button>
//                         <span>Page {currentPage} of {Math.ceil(flights.length / limit)}</span>
//                         <button onClick={goToNextPage} disabled={currentPage === Math.ceil(flights.length / limit)} className="bg-gray-200 py-1 px-4 rounded-md">Next</button>
//                     </div>
//                 </div>

//                 {/* right  */}

//                 <div className="w-1/4 p-4 border border-gray-200 rounded-lg bg-gray-50">
//                     <h3 className="font-semibold text-xl mb-4">Class / Cabin</h3>
//                     <div className="space-y-2">
//                         {["All Class", "Business", "Economy", "Private Suites", "Executive", "First Class"].map((item) => (
//                             <button
//                                 key={item}
//                                 onClick={() => handleClassChange(item)}
//                                 className={`w-full py-2 px-4 rounded-md border ${selectedClass === item ? "bg-blue-500 text-white" : "bg-white text-gray-800"
//                                     } hover:bg-blue-100`}
//                             >
//                                 {item}
//                             </button>
//                         ))}
//                     </div>

//                     <h3 className="font-semibold text-xl mb-4 mt-6">Airlines</h3>
//                     <div className="space-y-2">
//                         {["all", "emirates", "Delta Air Lines", "Singapore Airlines", "Qatar Airways", "Lufthansa", "Cathay Pacific"].map((airline) => (
//                             <div key={airline} className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     id={airline}
//                                     checked={selectedAirlines.includes(airline)}
//                                     onChange={() => handleAirlineChange(airline)}
//                                     className="form-checkbox"
//                                 />
//                                 <label htmlFor={airline} className="ml-2 text-gray-800">{airline}</label>
//                             </div>
//                         ))}
//                     </div>

//                     <h3 className="font-semibold text-xl mb-4 mt-6">Price Range</h3>
//                     <div className="space-y-2">
//                         <input
//                             type="number"
//                             value={priceRange.min}
//                             onChange={(e) => handlePriceChange(e, "min")}
//                             placeholder="Min Price"
//                             className="w-full bg-white border text-gray-800 py-2 px-3 rounded-md"
//                         />
//                         <input
//                             type="number"
//                             value={priceRange.max}
//                             onChange={(e) => handlePriceChange(e, "max")}
//                             placeholder="Max Price"
//                             className="w-full bg-white border text-gray-800 py-2 px-3 rounded-md mt-2"
//                         />
//                     </div>
//                 </div>
//                 {/* end right  */}

//             </div>
//         </div>
//     );
// };

// export default FlightListHome;


// import React, { useEffect, useState } from "react";
// import FlightCard from "../flight/FlightCard";
// import { BACKENDURL } from "../../Config/Config";
// import { FaArrowUp } from "react-icons/fa";
// import flightlogo from "../../assets/flight logo.png";

// const FlightListHome = () => {
//     const [flights, setFlights] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [limit, setLimit] = useState(10);
//     const [sortBy, setSortBy] = useState("mostViewed");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [selectedClass, setSelectedClass] = useState("All Class");
//     const [selectedAirlines, setSelectedAirlines] = useState([]);
//     const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

//     useEffect(() => {
//         const fetchFlights = async () => {
//             try {
//                 const response = await fetch(`${BACKENDURL}/api/v1/flights/all-flights`);
//                 if (!response.ok) throw new Error("Failed to fetch flights");
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

//     const sortedFlights = [...flights].sort((a, b) => {
//         if (sortBy === "mostViewed") return b.views - a.views;
//         if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
//         if (sortBy === "mostPopular") return b.popularity - a.popularity;
//         if (sortBy === "mostRated") return b.rating - a.rating;
//         if (sortBy === "priceLowToHigh") return a.sellingPrice - b.sellingPrice;
//         if (sortBy === "priceHighToLow") return b.sellingPrice - a.sellingPrice;
//         if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
//         return 0;
//     });

//     const filteredFlights = sortedFlights.filter((flight) => {
//         if (selectedClass !== "All Class" && flight.class !== selectedClass) return false;
//         if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;
//         if (flight.sellingPrice < priceRange.min || flight.sellingPrice > priceRange.max) return false;
//         return true;
//     });

//     const handleLimitChange = (event) => setLimit(parseInt(event.target.value));
//     const handleSortChange = (event) => setSortBy(event.target.value);
//     const handleClassChange = (item) => setSelectedClass(item);
//     const handleAirlineChange = (airline) => {
//         setSelectedAirlines((prev) =>
//             prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
//         );
//     };
//     const handlePriceChange = (event, type) => {
//         setPriceRange({ ...priceRange, [type]: parseFloat(event.target.value) });
//     };

//     const displayedFlights = filteredFlights.slice((currentPage - 1) * limit, currentPage * limit);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
//     const goToNextPage = () => currentPage < Math.ceil(filteredFlights.length / limit) && setCurrentPage((prev) => prev + 1);
//     const goToPreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

//     if (loading) return <p>Loading flights...</p>;

//     return (
//         <div className="ml-4 mr-4 p-4 max-w-[1400px] mx-auto">
//             <div className="my-10 mt-[5vw] flex items-center justify-between flex-wrap">
//                 <div>
//                     <h1 className="text-3xl sm:text-5xl font-bold text-black flex items-center gap-2">
//                         <span className="text-red-500">🔥</span> Top Flights
//                     </h1>
//                     <p className="text-gray-600 text-lg sm:text-2xl font-semibold mt-2">
//                         Competitive fares for your route-specific searches.
//                     </p>
//                 </div>
//                 <img src={flightlogo} alt="Flight Offer" className="max-w-[100px] sm:max-w-[200px] w-full object-cover" />
//             </div>

//             <div className="flex flex-col lg:flex-row gap-4">
//                 <div className="flex-1">
//                     <div className="flex justify-between items-center mb-4">
//                         <div className="text-gray-800">Total Flights Found: {filteredFlights.length}</div>
//                         <div className="flex items-center gap-2">
//                             <FaArrowUp onClick={scrollToTop} className="text-gray-800 cursor-pointer" title="Back to Top" />
//                             <select onChange={handleLimitChange} value={limit} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
//                                 <option value={10}>10</option>
//                                 <option value={20}>20</option>
//                                 <option value={30}>30</option>
//                             </select>
//                             <select onChange={handleSortChange} value={sortBy} className="bg-white border text-gray-800 py-1 px-3 rounded-md">
//                                 <option value="mostViewed">Most Viewed</option>
//                                 <option value="recentSearch">Recent Search</option>
//                                 <option value="mostPopular">Most Popular</option>
//                                 <option value="mostRated">Most Rated</option>
//                                 <option value="priceLowToHigh">Price: Low to High</option>
//                                 <option value="priceHighToLow">Price: High to Low</option>
//                                 <option value="alphabetical">Alphabetical</option>
//                             </select>
//                         </div>
//                     </div>

//                     <div className="flex flex-col gap-4">
//                         {displayedFlights.length === 0 ? (
//                             <p>No flights found.</p>
//                         ) : (
//                             displayedFlights.map((flight) => (
//                                 <FlightCard key={flight.id} flight={flight} />
//                             ))
//                         )}
//                     </div>

//                     <div className="flex justify-between mt-4">
//                         <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-gray-200 py-1 px-4 rounded-md">Previous</button>
//                         <span>Page {currentPage} of {Math.ceil(flights.length / limit)}</span>
//                         <button onClick={goToNextPage} disabled={currentPage === Math.ceil(flights.length / limit)} className="bg-gray-200 py-1 px-4 rounded-md">Next</button>
//                     </div>
//                 </div>

//                 <div className="lg:w-1/4 p-4 border border-gray-200 rounded-lg bg-gray-50">
//                     <h3 className="font-semibold text-xl mb-4">Class / Cabin</h3>
//                     <div className="space-y-2">
//                         {["All Class", "Business", "Economy", "Private Suites", "Executive", "First Class"].map((item) => (
//                             <button
//                                 key={item}
//                                 onClick={() => handleClassChange(item)}
//                                 className={`w-full py-2 px-4 rounded-md border ${selectedClass === item ? "bg-blue-500 text-white" : "bg-white text-gray-800"} hover:bg-blue-100`}
//                             >
//                                 {item}
//                             </button>
//                         ))}
//                     </div>

//                     <h3 className="font-semibold text-xl mb-4 mt-6">Airlines</h3>
//                     <div className="space-y-2">
//                         {["all", "emirates", "Delta Air Lines", "Singapore Airlines", "Qatar Airways", "Lufthansa", "Cathay Pacific"].map((airline) => (
//                             <div key={airline} className="flex items-center">
//                                 <input type="checkbox" id={airline} checked={selectedAirlines.includes(airline)} onChange={() => handleAirlineChange(airline)} className="form-checkbox" />
//                                 <label htmlFor={airline} className="ml-2 text-gray-800">{airline}</label>
//                             </div>
//                         ))}
//                     </div>

//                     <h3 className="font-semibold text-xl mb-4 mt-6">Price Range</h3>
//                     <div className="space-y-2">
//                         <input type="number" value={priceRange.min} onChange={(e) => handlePriceChange(e, "min")} placeholder="Min Price" className="w-full bg-white border text-gray-800 p-2 rounded-md" />
//                         <input type="number" value={priceRange.max} onChange={(e) => handlePriceChange(e, "max")} placeholder="Max Price" className="w-full bg-white border text-gray-800 p-2 rounded-md" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FlightListHome;



import React, { useEffect, useState } from "react";
import FlightCard from "../flight/FlightCard";
import { BACKENDURL } from "../../Config/Config";
import { FaArrowUp } from "react-icons/fa";
import flightlogo from "../../assets/flight logo.png";

const FlightListHome = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [sortBy, setSortBy] = useState("mostViewed");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedClass, setSelectedClass] = useState("All Class");
    const [selectedAirlines, setSelectedAirlines] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const response = await fetch(`${BACKENDURL}/api/v1/flights/all-flights`);
                if (!response.ok) throw new Error("Failed to fetch flights");
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

    const sortedFlights = [...flights].sort((a, b) => {
        if (sortBy === "mostViewed") return b.views - a.views;
        if (sortBy === "recentSearch") return new Date(b.searchDate) - new Date(a.searchDate);
        if (sortBy === "mostPopular") return b.popularity - a.popularity;
        if (sortBy === "mostRated") return b.rating - a.rating;
        if (sortBy === "priceLowToHigh") return a.sellingPrice - b.sellingPrice;
        if (sortBy === "priceHighToLow") return b.sellingPrice - a.sellingPrice;
        if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
        return 0;
    });

    const filteredFlights = sortedFlights.filter((flight) => {
        if (selectedClass !== "All Class" && flight.class !== selectedClass) return false;
        if (selectedAirlines.length > 0 && !selectedAirlines.includes(flight.airline)) return false;
        if (flight.sellingPrice < priceRange.min || flight.sellingPrice > priceRange.max) return false;
        return true;
    });

    const handleLimitChange = (event) => setLimit(parseInt(event.target.value));
    const handleSortChange = (event) => setSortBy(event.target.value);
    const handleClassChange = (item) => setSelectedClass(item);
    const handleAirlineChange = (airline) => {
        setSelectedAirlines((prev) =>
            prev.includes(airline) ? prev.filter((a) => a !== airline) : [...prev, airline]
        );
    };
    const handlePriceChange = (event, type) => {
        setPriceRange({ ...priceRange, [type]: parseFloat(event.target.value) });
    };

    const displayedFlights = filteredFlights.slice((currentPage - 1) * limit, currentPage * limit);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const goToNextPage = () => currentPage < Math.ceil(filteredFlights.length / limit) && setCurrentPage((prev) => prev + 1);
    const goToPreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

    if (loading) return <p>Loading flights...</p>;

    return (
        <div className="mx-4 sm:mx-8 lg:mx-auto max-w-[1400px] p-4">
            <div className="my-10 mt-[5vw] flex flex-wrap items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl sm:text-5xl font-bold text-black flex items-center gap-2">
                        <span className="text-red-500">🔥</span> Top Flights
                    </h1>
                    <p className="text-gray-600 text-lg sm:text-2xl font-semibold mt-2">
                        Competitive fares for your route-specific searches.
                    </p>
                </div>
                <img src={flightlogo} alt="Flight Offer" className="max-w-[80px] sm:max-w-[200px] w-full object-cover" />
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
                        <div className="text-gray-800">Total Flights Found: {filteredFlights.length}</div>
                        <div className="flex items-center gap-2">
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
                                <option value="alphabetical">Alphabetical</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {displayedFlights.length === 0 ? (
                            <p>No flights found.</p>
                        ) : (
                            displayedFlights.map((flight) => (
                                <FlightCard key={flight.id} flight={flight} />
                            ))
                        )}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <button onClick={goToPreviousPage} disabled={currentPage === 1} className="bg-gray-200 py-1 px-4 rounded-md disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {currentPage} of {Math.ceil(filteredFlights.length / limit)}</span>
                        <button onClick={goToNextPage} disabled={currentPage === Math.ceil(filteredFlights.length / limit)} className="bg-gray-200 py-1 px-4 rounded-md disabled:opacity-50">
                            Next
                        </button>
                    </div>
                </div>

                <div className="lg:w-1/4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <h3 className="font-semibold text-lg sm:text-xl mb-4">Class / Cabin</h3>
                    <div className="space-y-2">
                        {["All Class", "Business", "Economy", "Private Suites", "Executive", "First Class"].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleClassChange(item)}
                                className={`w-full py-2 px-4 rounded-md border ${selectedClass === item ? "bg-blue-500 text-white" : "bg-white text-gray-800"} hover:bg-blue-100`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <h3 className="font-semibold text-lg sm:text-xl mb-4 mt-6">Airlines</h3>
                    <div className="space-y-2">
                        {["all", "emirates", "Delta Air Lines", "Singapore Airlines", "Qatar Airways", "Lufthansa", "Cathay Pacific"].map((airline) => (
                            <div key={airline} className="flex items-center">
                                <input type="checkbox" id={airline} checked={selectedAirlines.includes(airline)} onChange={() => handleAirlineChange(airline)} className="form-checkbox" />
                                <label htmlFor={airline} className="ml-2 text-gray-800">{airline}</label>
                            </div>
                        ))}
                    </div>

                    <h3 className="font-semibold text-lg sm:text-xl mb-4 mt-6">Price Range</h3>
                    <div className="space-y-2">
                        <input type="number" value={priceRange.min} onChange={(e) => handlePriceChange(e, "min")} placeholder="Min Price" className="w-full bg-white border text-gray-800 p-2 rounded-md" />
                        <input type="number" value={priceRange.max} onChange={(e) => handlePriceChange(e, "max")} placeholder="Max Price" className="w-full bg-white border text-gray-800 p-2 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightListHome;
