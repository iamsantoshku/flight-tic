// import React from "react";
// import { FaCcPaypal, FaCcStripe, FaCcMastercard } from "react-icons/fa";
// import { SiSkrill } from "react-icons/si";

// const DestinationCard = () => {
//   return (
//     <div className="bg-pink-50 flex flex-col md:flex-row items-center justify-between px-6 py-8 md:py-16 md:px-16 gap-6">
//       {/* Images Section */}
//       <div className="grid grid-cols-2 gap-4">
//         <img
//           src="https://via.placeholder.com/200"
//           alt="Floating breakfast"
//           className="rounded-lg h-40 md:h-60 object-cover"
//         />
//         <img
//           src="https://via.placeholder.com/200"
//           alt="Coastal view"
//           className="rounded-lg h-40 md:h-60 object-cover"
//         />
//         <img
//           src="https://via.placeholder.com/200"
//           alt="Resort view"
//           className="col-span-2 rounded-lg h-40 md:h-60 object-cover"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="flex flex-col items-start max-w-lg">
//         <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
//           Easy payment
//         </span>
//         <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
//           Discover Dream Destinations with Ease
//         </h2>
//         <p className="text-gray-600 mb-6">
//           Discover how you can offset your adventure’s carbon emissions and
//           support the sustainable initiatives practiced by our operators
//           worldwide.
//         </p>
//         <div className="flex items-center gap-4">
//           <SiSkrill className="text-gray-700 text-3xl" />
//           <FaCcPaypal className="text-gray-700 text-3xl" />
//           <FaCcStripe className="text-gray-700 text-3xl" />
//           <FaCcMastercard className="text-gray-700 text-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationCard;




import React from "react";
import { FaCcPaypal, FaCcStripe, FaCcMastercard } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa"; // Placeholder for Skrill

const DestinationCard = () => {
  return (
    <div className="bg-pink-50 flex flex-col md:flex-row items-center justify-between px-4 py-8 md:py-16 md:px-12 gap-6">
      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2">
        <img
          src="https://travila-demos.vercel.app/assets/imgs/page/homepage1/pay1.png"
          alt="Floating breakfast"
          className="rounded-lg w-full h-40 md:h-48 object-cover"
        />
        <img
          src="https://travila-demos.vercel.app/assets/imgs/page/homepage1/pay2.png"
          alt="Coastal view"
          className="rounded-lg w-full h-40 md:h-48 object-cover"
        />
        <img
          src="https://travila-demos.vercel.app/assets/imgs/page/homepage1/pay3.png"
          alt="Resort view"
          className="col-span-1 sm:col-span-2 rounded-lg w-full h-44 md:h-56 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-start max-w-lg text-center md:text-left md:w-1/2">
        <span className="bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full mb-4 self-center md:self-start">
          Easy payment
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Discover Dream Destinations with Ease
        </h2>
        <p className="text-gray-600 mb-6">
          Discover how you can offset your adventure’s carbon emissions and
          support the sustainable initiatives practiced by our operators
          worldwide.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <FaMoneyBillAlt className="text-gray-700 text-5xl sm:text-7xl" />
          <FaCcPaypal className="text-gray-700 text-5xl sm:text-7xl" />
          <FaCcStripe className="text-gray-700 text-5xl sm:text-7xl" />
          <FaCcMastercard className="text-gray-700 text-5xl sm:text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
