import React, { useState } from "react";
import { FaClock, FaExchangeAlt } from "react-icons/fa"; // Import required icons
import { HiLocationMarker } from "react-icons/hi";

const FlightCard = (props) => {
  // State to handle seat availability and bookings
  const [seatsLeft, setSeatsLeft] = useState({
    business: props.data.businessSeatsLeft,
    economy: props.data.economySeatsLeft,
  });

  // Handle booking for each class
  const handleBooking = (classType) => {
    if (seatsLeft[classType] > 0) {
      setSeatsLeft((prevSeats) => ({
        ...prevSeats,
        [classType]: prevSeats[classType] - 1,
      }));
      console.log(`Booked ${classType} class flight!`);
      alert(`Successfully booked a ${classType} class flight!`);
    } else {
      alert(`No seats left in ${classType} class!`);
    }
  };

  return (
    <div className="flex w-full rounded-lg overflow-hidden border-[1px] border-gray-300 p-4 hover:shadow-lg transition-shadow duration-200 bg-white">
      {/* Left side: Flight Information */}
      <div className="flex-1">
        {/* Flight Rows */}
        {props.data.flights.map((flight, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={flight.logoUrl}
                alt="airline logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h2 className="font-bold">{flight.startLocation}</h2>
                <div className="flex items-center text-gray-600 gap-1">
                  <FaClock /> {/* Clock Icon */}
                  <p>{flight.departureTime}</p>
                </div>
              </div>
            </div>

            <FaExchangeAlt className="text-gray-500 text-2xl mx-2" /> {/* Exchange Icon */}

            <div className="flex items-center gap-2">
              <div>
                <h2 className="font-bold">{flight.endLocation}</h2>
                <div className="flex items-center text-gray-600 gap-1">
                  <FaClock /> {/* Clock Icon */}
                  <p>{flight.arrivalTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right side: Price and Booking Options */}
      <div className="flex flex-col justify-between border-l-[1px] pl-4">
        {/* Business Class Booking */}
        <div
          className={`cursor-pointer mb-2 ${
            seatsLeft.business === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => seatsLeft.business > 0 && handleBooking("business")}
        >
          <h3 className="text-lg font-bold">Business</h3>
          <p className="text-2xl font-bold">${props.data.businessPrice}</p>
          <p className="text-sm text-gray-500">
            {seatsLeft.business} Seat(s) left
          </p>
          <button
            className={`bg-blue-500 text-white px-4 py-1 mt-2 rounded-lg transition duration-150 hover:bg-blue-600 ${
              seatsLeft.business === 0 ? "bg-gray-400" : ""
            }`}
            disabled={seatsLeft.business === 0}
          >
            Book Now
          </button>
        </div>

        {/* Economy Class Booking */}
        <div
          className={`cursor-pointer ${
            seatsLeft.economy === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => seatsLeft.economy > 0 && handleBooking("economy")}
        >
          <h3 className="text-lg font-bold">Economy</h3>
          <p className="text-2xl font-bold">${props.data.economyPrice}</p>
          <p className="text-sm text-gray-500">
            {seatsLeft.economy} Seat(s) left
          </p>
          <button
            className={`bg-blue-500 text-white px-4 py-1 mt-2 rounded-lg transition duration-150 hover:bg-blue-600 ${
              seatsLeft.economy === 0 ? "bg-gray-400" : ""
            }`}
            disabled={seatsLeft.economy === 0}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
