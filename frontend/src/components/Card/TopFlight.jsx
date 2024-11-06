// import React from "react";
// import { FaHeart, FaArrowRightLong, FaStar } from "react-icons/fa";
// import { HiLocationMarker } from "react-icons/hi";

// const TopFlight = (props) => {
//   return (
//     <div className="flex w-[400px] rounded-[20px] overflow-hidden border-[1px] border-gray-300 h-full">
//       {/* Left side: Image and Rating */}
//       <div className="relative w-[45%] rounded-[20px] overflow-hidden">
//         <img
//           src={props.data.imageUrl}
//           alt="destination"
//           className="w-full h-full object-cover"
//         />
//         <div className="flex justify-center items-center gap-[10px] absolute top-5 left-5 bg-black/40 px-3 py-1 rounded-full">
//           <p className="text-white">{props.data.rating}</p>
//           <FaStar className="text-white" />
//         </div>
//         <button className="absolute top-5 right-5 bg-white/70 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
//           <FaHeart />
//         </button>
//       </div>

//       {/* Right side: Details */}
//       <div className="w-[55%] p-4 flex flex-col justify-between">
//         <div>
//           <h1 className="text-[18px] font-bold">{props.data.startLocation}</h1>
//           <div className="flex items-center text-gray-500 gap-1 mb-2">
//             <HiLocationMarker />
//             <p>{props.data.startCountry}</p>
//           </div>
//           <div className="flex items-center text-[24px] font-bold gap-2 mb-2">
//             <FaArrowRightLong className="text-gray-500" />
//             <h1 className="text-[18px] font-bold">{props.data.endLocation}</h1>
//           </div>
//           <div className="flex items-center text-gray-500 gap-1 mb-4">
//             <HiLocationMarker />
//             <p>{props.data.endCountry}</p>
//           </div>

//           {/* Flight Information */}
//           <div className="flex justify-between items-center text-sm">
//             <div>
//               <p className="text-gray-600">{props.data.departureDate}</p>
//               <p className="text-gray-600">{props.data.returnDate}</p>
//             </div>
//             <p className="font-bold text-[18px]">${props.data.price}</p>
//           </div>
//           <p className="text-sm text-gray-500">{props.data.classType}</p>
//           <p className="text-sm text-gray-500">{props.data.seatsLeft} Seats left</p>
//         </div>

//         {/* Book Button */}
//         <button className="bg-black hover:bg-[#1E293B] w-full text-white px-5 py-2 mt-3 rounded-lg transition duration-100">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopFlight;




// import React from "react";
// import { FaHeart, FaArrowRight, FaStar } from "react-icons/fa"; // Corrected import
// import { HiLocationMarker } from "react-icons/hi";
// import { FaExchangeAlt, FaClock } from 'react-icons/fa';

// const TopFlight = (props) => {
//     return (
//         <div className="flex w-[650px] rounded-[20px] overflow-hidden border-[1px] border-gray-300 h-50">
//             {/* Left side: Image and Rating */}
//             <div className="relative w-[45%] rounded-[20px] overflow-hidden">
//                 <img
//                     src={props.data.imageUrl}
//                     alt="destination"
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="flex justify-center items-center gap-[10px] absolute top-5 left-5 bg-black/40 px-3 py-1 rounded-full">
//                     <p className="text-white">{props.data.rating}</p>
//                     <FaStar className="text-white" />
//                 </div>
//                 <button className="absolute top-5 right-5 bg-white/70 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
//                     <FaHeart />
//                 </button>
//             </div>

//             {/* Right side: Details */}
//             <div className="w-[55%] p-4 flex flex-col justify-between">
//                 <div>
//                     <div className="flex ml-8 items-center gap-3">
//                         {/* Departure Date with Time Icon */}
//                         <div className="flex items-center gap-1">
//                             <FaClock className="text-gray-500" /> {/* Time Icon */}
//                             <p className="text-gray-600">{props.data.departureDate}</p>
//                         </div>

//                         {/* Vertical Line */}

//                         <hr className="border-t-2 border-gray-500 my-2" />

//                         {/* Return Date with Time Icon */}
//                         <div className="flex items-center gap-1">
//                             <FaClock className="text-gray-500" /> {/* Time Icon */}
//                             <p className="text-gray-600">{props.data.returnDate}</p>
//                         </div>
//                     </div>

//                     <div className="flex gap-4 ml-8 mt-2">
//                         <h1 className="text-[25px] font-bold">{props.data.startLocation}</h1>


//                         <div className="flex items-center text-[24px] font-bold gap-2 mb-2">
//                             <FaExchangeAlt className="text-gray-500" /> {/* Replaced icon */}
//                             <h1 className="text-[25px] font-bold">{props.data.endLocation}</h1>
//                         </div>
//                         <div className="flex items-center text-gray-500 gap-1 mb-4">
//                             {/* <HiLocationMarker />
//                         <p>{props.data.endCountry}</p> */}
//                         </div>


//                     </div>
//                     <div className="flex items-center text-gray-500 gap-1 mb-2 ml-8">
//                         <HiLocationMarker />
//                         <h3>{props.data.startCountry}</h3>
//                     </div>


//                     {/* Flight Information */}
//                     <p className="text-xl text-gray-500 ml-8 ">{props.data.classType}</p>
//                     <div className="flex justify-between items-center text-xl ml-8 mt-2">

//                         <p className="font-bold text-[18px]">${props.data.price}</p>
//                     </div>
                    
//                     <p className="text-sm text-gray-500 ml-8  mt-2">{props.data.seatsLeft} Seats left</p>
//                 </div>

//                 {/* Book Button */}
//                 <button className="bg-black hover:bg-[#1E293B] w-full text-white px-5 py-2 mt-3 rounded-lg transition duration-100">
//                     Book Now
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default TopFlight;



import React from "react";
import { FaHeart, FaArrowRight, FaStar } from "react-icons/fa"; // Corrected import
import { HiLocationMarker } from "react-icons/hi";
import { FaExchangeAlt, FaClock } from 'react-icons/fa';

const TopFlight = (props) => {
    return (
        <div className="flex w-[650px] rounded-[20px] overflow-hidden border-[1px] border-gray-300 h-[350px]"> {/* Set a fixed height */}
            {/* Left side: Image and Rating */}
            <div className="relative w-[45%] h-full rounded-[20px] overflow-hidden"> {/* Ensure the image side takes full height */}
                <img
                    src={props.data.imageUrl}
                    alt="destination"
                    className="w-full h-full object-cover"
                />
                <div className="flex justify-center items-center gap-[10px] absolute top-5 left-5 bg-black/40 px-3 py-1 rounded-full">
                    <p className="text-white">{props.data.rating}</p>
                    <FaStar className="text-white" />
                </div>
                <button className="absolute top-5 right-5 bg-white/70 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
                    <FaHeart />
                </button>
            </div>

            {/* Right side: Details */}
            <div className="w-[55%] p-4 flex flex-col justify-between h-full"> {/* Ensure this section also takes full height */}
                <div className="flex-grow"> {/* Flex-grow makes sure this part takes available space */}
                    <div className="flex ml-8 items-center gap-3">
                        {/* Departure Date with Time Icon */}
                        <div className="flex items-center gap-1">
                            <FaClock className="text-gray-500" /> {/* Time Icon */}
                            <p className="text-gray-600">{props.data.departureDate}</p>
                        </div>

                        {/* Vertical Line */}
                        <hr className="border-t-2 border-gray-500 my-2" />

                        {/* Return Date with Time Icon */}
                        <div className="flex items-center gap-1">
                            <FaClock className="text-gray-500" /> {/* Time Icon */}
                            <p className="text-gray-600">{props.data.returnDate}</p>
                        </div>
                    </div>

                    <div className="flex gap-4 ml-8 mt-2">
                        <h1 className="text-[25px] font-bold">{props.data.startLocation}</h1>

                        <div className="flex items-center text-[24px] font-bold gap-2 mb-2">
                            <FaExchangeAlt className="text-gray-500" /> {/* Replaced icon */}
                            <h1 className="text-[25px] font-bold">{props.data.endLocation}</h1>
                        </div>
                    </div>

                    <div className="flex items-center text-gray-500 gap-1 mb-2 ml-8">
                        <HiLocationMarker />
                        <h3>{props.data.startCountry}</h3>
                    </div>

                    {/* Flight Information */}
                    <p className="text-xl text-gray-500 ml-8 ">{props.data.classType}</p>
                    <div className="flex justify-between items-center text-xl ml-8 mt-2">
                        <p className="font-bold text-[18px]">${props.data.price}</p>
                    </div>
                    <p className="text-sm text-gray-500 ml-8 mt-2">{props.data.seatsLeft} Seats left</p>
                </div>

                {/* Book Button */}
                <button className="bg-black hover:bg-[#1E293B] w-full text-white px-5 py-2 mt-3 rounded-lg transition duration-100">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default TopFlight;
