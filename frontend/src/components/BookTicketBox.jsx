

import React, { useState } from "react";
import backimg from "../assets/banner-booking.png";

const BookTicketBox = ({
  formData,
  handleFormDataChange,
  handleFlightSearch,
}) => {
  const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

  const handleTripTypeChange = (type) => {
    setIsReturn(type === "return");
  };

  return (
    <div
      className="w-[100vw] h-[75vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mt-[4.8vw] -ml-[6.3vw]"
      // back w-[100vw] relative bg-cover bg-center h-[80vh] -ml-12
      // 
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255,0.3)), url(${backimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginRight: "10vw",
      }}
    >
      {/* Header Section */}
      <div className="head text-center mb-5">
        <h1 className="text-4xl font-bold text-gray-900 mb-1">
          A World Of Luxury Awaits For You
        </h1>
        <h3 className="text-xl font-semibold text-gray-900">
          We Provide Our Best Facilities For You
        </h3>
      </div>

      <div className="bg-white bg-opacity-90 p-5 rounded-lg shadow-lg w-[85vw] min-h-[35vh]">
        <div className="flex flex-col h-full justify-between">
          <div className="flex gap-5 items-center justify-start mb-3">
            {/* One Way and Return Buttons */}
            <button
              className={`px-4 py-2 rounded-lg ${!isReturn ? 'bg-orange-500' : 'bg-orange-50'} hover:bg-orange-300`}
              onClick={() => handleTripTypeChange("oneWay")}
            >
              One Way
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${isReturn ? 'bg-orange-500' : 'bg-orange-50'} hover:bg-orange-300`}
              onClick={() => handleTripTypeChange("return")}
            >
              Return
            </button>
          </div>

          <div className="flex justify-between gap-5 flex-wrap">
            {/* From and To Input */}
            <div className="flex gap-5 border-[1px] w-full xl:w-auto border-gray-300 rounded-[20px] flex-col xl:flex-row">
              <div className="flex flex-col p-5 w-full xl:w-[280px]">
                <h1 className="text-lg">From</h1>
                <input
                  name="from"
                  type="text"
                  placeholder="Delhi"
                  value={formData.from}
                  className="outline-none bg-gray-50 text-[20px] xl:text-[24px] w-full"
                  onChange={handleFormDataChange}
                />
              </div>
              <div className="flex flex-col p-5 border-t-[1px] xl:border-l-[1px] xl:border-t-0 border-gray-300 w-full xl:w-[280px]">
                <h1 className="text-lg">To</h1>
                <input
                  name="to"
                  type="text"
                  value={formData.to}
                  placeholder="Mumbai"
                  className="outline-none bg-gray-50 text-[20px] xl:text-[24px] w-full"
                  onChange={handleFormDataChange}
                />
              </div>
            </div>

            {/* Departure Date and Return Date */}
            <div className="flex gap-5 border-[1px] w-full xl:w-auto border-gray-300 rounded-[20px] flex-col xl:flex-row">
              <div className="flex flex-col p-5 w-full xl:w-[200px]">
                <h1 className="text-lg">Departure Date</h1>
                <input
                  name="departDate"
                  type="date"
                  value={formData.departDate}
                  className="outline-none bg-gray-50 text-[18px] sm:text-[20px] w-full"
                  onChange={handleFormDataChange}
                />
              </div>
              {isReturn && (
                <div className="flex flex-col p-5 w-full xl:w-[200px] border-t-[1px] xl:border-l-[1px] xl:border-t-0 border-gray-300">
                  <h1 className="text-lg">Return Date</h1>
                  <input
                    name="returnDate"
                    type="date"
                    value={formData.returnDate}
                    className="outline-none  bg-gray-50 text-[18px] sm:text-[20px] w-full"
                    onChange={handleFormDataChange}
                  />
                </div>
              )}
            </div>

            {/* Flight Type Dropdown */}
            <div className="flex gap-5 border-[1px] w-full xl:w-[200px] border-gray-300 rounded-[20px]">
              <div className="flex flex-col p-5 w-full">
                <h1 className="text-lg">Flight Type</h1>
                <select
                  name="flightType"
                  id="flightType"
                  className="w-full text-lg  bg-gray-50 mt-3 outline-none border-none"
                  onChange={handleFormDataChange}
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium">Premium</option>
                  <option value="Business">Business</option>
                  <option value="First">First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Search Flights Button */}
          <button
            className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-5 py-2 mt-5 rounded-xl transition duration-100 h-[3.5vw] w-[11vw]"
            onClick={handleFlightSearch}
          >
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTicketBox;
