





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
        <div className="p-4">
            

<div className="flex flex-col md:flex-row justify-between px-[1vw] sm:px-[6vw]  items-center mb-6">
                <p className="text-gray-800">Total Flights Found: {flights.length}</p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
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
                    displayedFlights.map((flight) => <FlightCard key={flight._id} flight={flight} />)
                )}
            </div>
            


<div className="flex justify-between px-[1vw] sm:px-[6vw] items-center mt-6">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`py-2 px-4 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Previous
                </button>
                <span className="text-gray-800">
                    Page {currentPage} of {Math.ceil(flights.length / limit)}
                </span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === Math.ceil(flights.length / limit)}
                    className={`py-2 px-4 rounded-md ${currentPage === Math.ceil(flights.length / limit) ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    Next
                </button>
            </div>



        </div>
    );
};

export default FlightList;






