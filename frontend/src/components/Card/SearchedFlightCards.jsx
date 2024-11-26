




// import React from "react";

// const SearchedFlightCards = ({ flight }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);

//     const monthNames = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     const formattedDate = `${date.getDate()} ${
//       monthNames[date.getMonth()]
//     } ${date.getFullYear()}`;

//     return formattedDate;
//   };

//   const calcDuration = (departTime, arriveTime) => {
//     const [departHour, departMinute] = departTime.split(":").map(Number);
//     const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

//     const departTotalMinutes = departHour * 60 + departMinute;
//     let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

//     if (arriveTotalMinutes < departTotalMinutes) {
//       arriveTotalMinutes += 24 * 60;
//     }

//     const durationMinutes = arriveTotalMinutes - departTotalMinutes;
//     const durationHour = Math.floor(durationMinutes / 60);
//     const durationMinute = durationMinutes % 60;

//     return `${durationHour}h ${durationMinute}m`;
//   };

//   return (
//     <div className="relative w-full p-3 border rounded-xl flex flex-col lg:flex-row justify-between items-center gap-2 max-w-[370px] lg:max-w-[90vw] lg:gap-5 cursor-pointer hover:shadow-lg transition duration-150 h-[7.5vw]">
//       {/* Image and Airline Info */}
//       <div className="flex flex-col lg:flex-row items-center w-full lg:w-[250px]">
//         <div className="h-[80px] w-full lg:w-[100px] bg-transparent flex justify-center items-center rounded-md">
//           <img
//             className="object-contain h-full"
//             src={flight.airline.airlineLogo}
//             alt={`${flight.airline.name} Logo`}
//           />
//         </div>
//         <div className="mt-2 lg:ml-4 text-center lg:text-left">
//           <p className="text-[14px] font-semibold">{flight.airline.airlineName}</p>
//         </div>
//       </div>

//       {/* Flight Time Information */}
//       <div className="flex max-w-[800px] w-full m-auto justify-between items-center px-2">
//         <div className="text-center">
//           <p className="text-[18px]">{flight.from}</p>
//           <p className="text-[18px] font-semibold mt-1">{flight.departTime}</p>
//           <p className="text-[14px] text-gray-600">
//             {formatDate(flight.departDate)}
//           </p>
//         </div>

//         <div className="flex items-center my-5 lg:my-0">
//           <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
//           <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
//           <div className="text-[12px] px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-[14px] lg:px-3 text-center">
//             {calcDuration(flight.departTime, flight.arriveTime)}
//           </div>
//           <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
//           <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
//         </div>

//         <div className="text-center">
//           <p className="text-[18px]">{flight.to}</p>
//           <p className="text-[18px] font-semibold mt-1">{flight.arriveTime}</p>
//           <p className="text-[14px] text-gray-600">
//             {formatDate(flight.arriveDate)}
//           </p>
//         </div>
//       </div>

//       {/* Price and Book Button */}
//       <div className="w-full lg:w-[200px] flex flex-row justify-center items-center gap-4 lg:gap-2 ">
//         <div className="flex flex-col justify-center items-center gap-1 w-full  p-3">
//           <p className="text-[14px] text-center">Price</p>
//           <p className="text-[18px] font-semibold text-center">₹ {flight.price}</p>
//         </div>
//         <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors w-[16vw]">
//           Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchedFlightCards;




// import React from "react";

// const SearchedFlightCards = ({ flight }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);

//     const monthNames = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     const formattedDate = `${date.getDate()} ${
//       monthNames[date.getMonth()]
//     } ${date.getFullYear()}`;

//     return formattedDate;
//   };

//   const calcDuration = (departTime, arriveTime) => {
//     const [departHour, departMinute] = departTime.split(":").map(Number);
//     const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

//     const departTotalMinutes = departHour * 60 + departMinute;
//     let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

//     if (arriveTotalMinutes < departTotalMinutes) {
//       arriveTotalMinutes += 24 * 60;
//     }

//     const durationMinutes = arriveTotalMinutes - departTotalMinutes;
//     const durationHour = Math.floor(durationMinutes / 60);
//     const durationMinute = durationMinutes % 60;

//     return `${durationHour}h ${durationMinute}m`;
//   };

//   return (
//     <div className="relative w-full p-4 border rounded-lg flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 max-w-6xl mx-auto cursor-pointer hover:shadow-lg transition duration-150">
//       {/* Airline Logo and Name */}
//       <div className="flex items-center gap-4 w-full lg:w-1/4">
//         <div className="h-[60px] w-[60px] bg-transparent flex justify-center items-center rounded-md">
//           <img
//             className="object-contain h-full"
//             src={flight.airline.airlineLogo}
//             alt={`${flight.airline.name} Logo`}
//           />
//         </div>
//         <div>
//           <p className="text-base font-semibold">{flight.airline.airlineName}</p>
//         </div>
//       </div>

//       {/* Flight Time Details */}
//       <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full lg:w-2/4 text-center">
//         <div>
//           <p className="text-lg font-medium">{flight.from}</p>
//           <p className="text-xl font-bold mt-1">{flight.departTime}</p>
//           <p className="text-sm text-gray-500">{formatDate(flight.departDate)}</p>
//         </div>

//         <div className="flex items-center gap-2">
//           <div className="w-3 h-3 rounded-full bg-blue-300"></div>
//           <div className="w-8 h-[1px] border border-blue-400 border-dashed"></div>
//           <span className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
//             {calcDuration(flight.departTime, flight.arriveTime)}
//           </span>
//           <div className="w-8 h-[1px] border border-blue-400 border-dashed"></div>
//           <div className="w-3 h-3 rounded-full bg-blue-300"></div>
//         </div>

//         <div>
//           <p className="text-lg font-medium">{flight.to}</p>
//           <p className="text-xl font-bold mt-1">{flight.arriveTime}</p>
//           <p className="text-sm text-gray-500">{formatDate(flight.arriveDate)}</p>
//         </div>
//       </div>

//       {/* Pricing and Booking */}
//       <div className="flex flex-col items-center lg:items-end w-full lg:w-1/4">
//         <div>
//           <p className="text-sm text-gray-500">Price</p>
//           <p className="text-xl font-bold">₹ {flight.price}</p>
//         </div>
//         <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition w-full lg:w-auto">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchedFlightCards;




import React from "react";

const SearchedFlightCards = ({ flight }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;

    return formattedDate;
  };

  const calcDuration = (departTime, arriveTime) => {
    const [departHour, departMinute] = departTime.split(":").map(Number);
    const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

    const departTotalMinutes = departHour * 60 + departMinute;
    let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

    if (arriveTotalMinutes < departTotalMinutes) {
      arriveTotalMinutes += 24 * 60;
    }

    const durationMinutes = arriveTotalMinutes - departTotalMinutes;
    const durationHour = Math.floor(durationMinutes / 60);
    const durationMinute = durationMinutes % 60;

    return `${durationHour}h ${durationMinute}m`;
  };

  return (
    <div className="relative w-full p-4 border rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-6xl mx-auto cursor-pointer hover:shadow-lg transition duration-150">
      {/* Airline Logo and Name */}
      <div className="flex items-center gap-4 w-full md:w-1/4">
        <div className="h-[60px] w-[60px] bg-transparent flex justify-center items-center rounded-md">
          <img
            className="object-contain h-full"
            src={flight.airline.airlineLogo}
            alt={`${flight.airline.name} Logo`}
          />
        </div>
        <div>
          <p className="text-base font-semibold">{flight.airline.airlineName}</p>
        </div>
      </div>

      {/* Flight Time Details */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-2/4 text-center">
        <div>
          <p className="text-lg font-medium">{flight.from}</p>
          <p className="text-xl font-bold mt-1">{flight.departTime}</p>
          <p className="text-sm text-gray-500">{formatDate(flight.departDate)}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
          <div className="w-8 h-[1px] border border-blue-400 border-dashed"></div>
          <span className="text-sm bg-blue-100 text-blue-500 px-2 py-1 rounded-full">
            {calcDuration(flight.departTime, flight.arriveTime)}
          </span>
          <div className="w-8 h-[1px] border border-blue-400 border-dashed"></div>
          <div className="w-3 h-3 rounded-full bg-blue-300"></div>
        </div>

        <div>
          <p className="text-lg font-medium">{flight.to}</p>
          <p className="text-xl font-bold mt-1">{flight.arriveTime}</p>
          <p className="text-sm text-gray-500">{formatDate(flight.arriveDate)}</p>
        </div>
      </div>

      {/* Pricing and Booking */}
      <div className="flex flex-col items-center md:items-end w-full md:w-1/4">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold">₹ {flight.price}</p>
        </div>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition w-full md:w-auto">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SearchedFlightCards;
