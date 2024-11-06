// Import necessary modules and components
import React, { useState } from "react";
import { flightData } from "../assets/data/Searchfldata"; // Adjust the path as needed
import FlightCard from "./Card/FlightCrad"; // Assuming you created FlightCard as a separate component
import { data } from "autoprefixer";

const FlightList1 = () => {
  const [flights, setFlights] = useState(flightData);

  return (
    <div className="flight-list-container">
      <h1 className="text-2xl font-bold text-center mb-6">Available Flights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flights.map((flight) => (
          // <FlightCard data={data} flight = {data} />
          // <TopFlight data={data} />
          <FlightCard key={flight.data} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default FlightList1;
