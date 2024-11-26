// import React from "react";
// import { FaBuilding } from "react-icons/fa";
// import { FaPlane } from "react-icons/fa";

// const TravelBooking = () => {
//   return (
//     <div className="flex  lg:flex-row items-center justify-between px-20 lg:px-12 py-8 bg-white mt-20">
//       {/* Left Section */}
//       <div className="leftmid flex flex-col">
//       <div className="flex items-center flex-row space-x-4">
//         <div className="flex items-center space-x-2 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md">
//           <FaBuilding size={20} />
//           <span className="font-medium">Resort Real Estate</span>
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="text-center lg:text-left mt-6 lg:mt-0">
//         <h1 className="text-2xl lg:text-4xl font-bold">
//           Welcome to <span className="text-black">Travila Travel</span> booking system
//         </h1>
//         <p className="text-gray-600 mt-2 text-sm lg:text-lg">
//           Make it easier for everyone to experience the world
//         </p>
//       </div>

//       </div>
      

//       {/* Right Section */}
//       <div className="mt-6 lg:mt-0 text-center">
//         <div className="flex items-center justify-center">
//           <FaPlane className="text-black text-lg lg:text-2xl" />
//         </div>
//         <p className="mt-2 text-gray-600 lg:text-lg">
//           Our mission is to create memories that last a lifetime for every traveler who chooses us.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TravelBooking;



import React from "react";
import { FaBuilding } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

const TravelBooking = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[7vw] py-8 bg-white mt-20 space-y-6 lg:space-y-0">
      {/* Left & Middle Section */}
      <div className="flex flex-col space-y-4">
        {/* Resort Real Estate Button */}
        <div className="flex items-center w-[80vw] sm:w-[20vw] space-x-2 bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md cursor-pointer">
          <FaBuilding size={24} />
          <span className="font-medium text-lg">Resort Real Estate</span>
        </div>

        {/* Heading Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-semibold">
            <span className="font-extrabold text-5xl lg:text-7xl">Welcome</span> to Flyibi
          </h1>
          <h2 className="text-5xl lg:text-6xl font-semibold">
            <span className="font-extrabold text-5xl lg:text-7xl">Travel</span> booking system
          </h2>
          <p className="text-gray-600 mt-3 text-sm lg:text-2xl">
            Make it easier for everyone to experience the world
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2">
        <FaPlane className="text-black text-3xl lg:text-4xl" />
        <p className="text-lg lg:text-xl font-semibold">
          Our mission is to create memories
        </p>
        <p className="text-lg lg:text-xl font-semibold">
          that last a lifetime
        </p>
        <p className="text-lg lg:text-xl font-semibold">
          for every traveler who chooses us.
        </p>
      </div>
    </div>
  );
};

export default TravelBooking;

