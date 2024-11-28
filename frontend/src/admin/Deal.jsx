// import React from 'react';

// const Deals = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Deals</h2>
//       <p>Manage all your flight deals here.</p>
//     </div>
//   );
// };

// export default Deals;



import React, { useState } from "react";
import { FaPercentage, FaCalendarAlt, FaGlobe, FaPlane } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const dealsData = [
  {
    id: 1,
    title: "Winter Wonderland Sale",
    description: "Enjoy 20% off on all domestic flights until December 31st.",
    discount: 20,
    destinations: "All Domestic Routes",
    startDate: "2024-11-20",
    endDate: "2024-12-31",
    image: "https://i.pinimg.com/736x/ac/ae/3e/acae3e2125d89e1154588dc2e704f0b9.jpg",
  },
  {
    id: 2,
    title: "Fly International for Less",
    description: "Up to $200 off on international flights this holiday season.",
    discount: 200,
    destinations: "Global Destinations",
    startDate: "2024-11-25",
    endDate: "2024-12-15",
    image: "https://media.istockphoto.com/id/955952680/photo/passengers-commercial-airplane-flying-above-clouds.jpg?s=612x612&w=0&k=20&c=9bZsGq8-uZaPXR1lCztXur4JRlI1gNksYOOSZzfXPAA=",
  },
  {
    id: 3,
    title: "Weekend Getaway Deals",
    description: "Flat 10% off on weekend bookings to selected destinations.",
    discount: 10,
    destinations: "Popular Vacation Spots",
    startDate: "2024-11-27",
    endDate: "2024-12-10",
    image: "https://media.istockphoto.com/id/2172186298/photo/snow-capped-mountain-range-under-clear-blue-sky-sikkim-india.jpg?s=2048x2048&w=is&k=20&c=BbNUD5DaWaiEKtlRUJ3Z7T0NPahHeL8vg_ecrf0Dnfc=",
  },
];

const Deal = () => {
  const [expandedDeal, setExpandedDeal] = useState(null);

  const toggleExpand = (id) => {
    setExpandedDeal(expandedDeal === id ? null : id);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Exclusive Flight Deals
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dealsData.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {deal.title}
              </h2>
              <p className="text-gray-600 mt-2 truncate">{deal.description}</p>
              <div className="flex items-center gap-2 mt-4 text-blue-500">
                <FaPercentage />
                <span className="font-medium">Discount: {deal.discount}%</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-blue-500">
                <FaGlobe />
                <span className="font-medium">
                  Destinations: {deal.destinations}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-blue-500">
                <FaCalendarAlt />
                <span className="font-medium">
                  {deal.startDate} - {deal.endDate}
                </span>
              </div>
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md flex justify-between items-center hover:bg-blue-600 transition-colors duration-300"
                onClick={() => toggleExpand(deal.id)}
              >
                {expandedDeal === deal.id ? "Show Less" : "Show More"}
                {expandedDeal === deal.id ? (
                  <IoIosArrowDown />
                ) : (
                  <IoIosArrowForward />
                )}
              </button>
              {expandedDeal === deal.id && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-700 font-medium">{deal.description}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Terms and conditions apply. Offer valid until{" "}
                    <span className="font-bold">{deal.endDate}</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deal;

