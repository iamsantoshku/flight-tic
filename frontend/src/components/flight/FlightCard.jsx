// Import necessary modules
// import React from 'react';
// // import './FlightCard.css'; // Import CSS for styling

// const FlightCard = ({ flight }) => {
//   const {
//     from,
//     to,
//     departDate,
//     airline,
//     airlineLogo,
//     departureTime,
//     arrivalTime,
//     fare
//   } = flight;

//   return (
//     <div className="flight-card bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
//       <img
//         src={airlineLogo}
//         alt={`${airline.name} logo`}
//         className="airline-logo w-16 h-16 mr-4"
//       />
//       <div className="flight-info flex-grow">
//         <h3 className="text-xl font-bold">{airline.name}</h3>
//         <div className="flex items-center mt-2">
//           <div className="time-info">
//             <p className="departure-time text-gray-700">
//               Departure: {departureTime}
//             </p>
//           </div>
//           <div className="divider mx-4 border-r-2 h-10 border-gray-300"></div>
//           <div className="time-info">
//             <p className="arrival-time text-gray-700">
//               Arrival: {arrivalTime}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="fare-info mr-4 text-right">
//         <p className="text-lg font-bold text-blue-600">Fare: ${fare}</p>
//         <button className="book-button bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600">
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;





// import React from "react";

// const FlightCard = ({ flight }) => {
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
//     // Parse departure and arrival times
//     const [departHour, departMinute] = departTime.split(":").map(Number);
//     const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

//     // Calculate total minutes for departure and arrival
//     const departTotalMinutes = departHour * 60 + departMinute;
//     let arriveTotalMinutes = arriveHour * 60 + arriveMinute;

//     // Check if arrival time is earlier than departure time (crosses midnight)
//     if (arriveTotalMinutes < departTotalMinutes) {
//       // Add 24 hours worth of minutes to arrival time
//       arriveTotalMinutes += 24 * 60;
//     }

//     // Calculate the duration
//     let durationMinutes = arriveTotalMinutes - departTotalMinutes;

//     // Calculate hours and minutes
//     const durationHour = Math.floor(durationMinutes / 60);
//     const durationMinute = durationMinutes % 60;

//     // Format the duration
//     const formattedDuration = `${durationHour}h ${durationMinute}m`;

//     return formattedDuration;
//   };

//   return (
//     <div className="relative w-full p-[5px] border rounded-sm flex justify-between items-center flex-col gap-2 max-w-[370px] lg:flex-row lg:max-w-full lg:gap-5 cursor-pointer hover:shadow-lg duration-150 transition">
//       <div className="h-[200px] w-full bg-gray-200 p-5 flex justify-center items-center rounded-md lg:h-[150px] lg:w-[150px]">
//         <img src={flight.airline.airlineLogo} alt="..." />
//         <h5>{flight.airline.airlineName}</h5>

//       </div>
//       <div className="flex max-w-[800px] w-full m-auto justify-between items-center relative z-10 px-2">
//         <div className="text-center">
//           <p className="text-[12px]">Depart</p>
//           <p className="text-[18px] font-semibold mt-2">{flight.departTime}</p>
//           <p className="text-[14px] text-gray-600">
//             {formatDate(flight.departDate)}
//             {/* <h3>{flight.airline.name}</h3> */}
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
//           <p className="text-[12px]">Arrive</p>
//           <p className="text-[18px] font-semibold mt-2">{flight.arriveTime}</p>
//           <p className="text-[14px] text-gray-600">
//             {formatDate(flight.arriveDate)}
//           </p>
//         </div>
//       </div>
//       <div className="w-full h-fit lg:w-[150px] lg:h-[150px] flex justify-center items-center">
//         <div className="flex flex-row flex-wrap justify-center items-center gap-4 lg:flex-col lg:gap-1 w-full border-[1px] md:border-0 border-gray-300 rounded-md p-3">
//           <p className="text-[14px] text-center">Price</p>
//           <p className="text-[18px] font-semibold text-center">
//             ₹ {flight.price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;




// import React from "react";

// const FlightCard = ({ flight }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
//   };

//   const calcDuration = (departTime, arriveTime) => {
//     const [departHour, departMinute] = departTime.split(":").map(Number);
//     const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);
//     const departTotalMinutes = departHour * 60 + departMinute;
//     let arriveTotalMinutes = arriveHour * 60 + arriveMinute;
//     if (arriveTotalMinutes < departTotalMinutes) arriveTotalMinutes += 24 * 60;
//     const durationMinutes = arriveTotalMinutes - departTotalMinutes;
//     const durationHour = Math.floor(durationMinutes / 60);
//     const durationMinute = durationMinutes % 60;
//     return `${durationHour}h ${durationMinute}m`;
//   };

//   return (
//     <div className="relative   w-full p-3 border border-gray-200 rounded-md shadow-md flex flex-col  lg:flex-row justify-between items-center gap-8 space-y-3 max-w-[550px] lg:max-w-[950px] hover:shadow-lg transition duration-150 ease-in-out my-auto">
//       {/* Airline Info */}
//       <div className="flex items-center gap-4 w-full lg:w-[180px]">
//         <img src={flight.airline.airlineLogo} alt="airline logo" className="w-[60px] h-auto object-contain" />
//         <div className="flex flex-col">
//           <h5 className="font-semibold text-[16px]">{flight.airline.airlineName}</h5>
//           <p className="text-gray-600 text-[12px]">
//             {flight.from} - {flight.to}
//           </p>
//         </div>
//       </div>

//       {/* Flight Schedule */}
//       <div className="flex items-center justify-between gap-4 w-full">
//         <div className="text-center">
//           <p className="text-[12px] text-gray-500">Depart</p>
//           <p className="text-[18px] font-semibold mt-1">{flight.departTime}</p>
//           <p className="text-[12px] text-gray-500">{formatDate(flight.departDate)}</p>
//         </div>

//         {/* Timeline */}
//         <div className="flex items-center gap-1">
//           <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
//           <div className="w-[40px] h-[1px] border-t border-dashed border-blue-500"></div>
//           <div className="text-[12px] px-2 py-1 text-blue-600 bg-blue-100 rounded-full">{calcDuration(flight.departTime, flight.arriveTime)}</div>
//           <div className="w-[40px] h-[1px] border-t border-dashed border-blue-500"></div>
//           <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
//         </div>

//         <div className="text-center">
//           <p className="text-[12px] text-gray-500">Arrive</p>
//           <p className="text-[18px] font-semibold mt-1">{flight.arriveTime}</p>
//           <p className="text-[12px] text-gray-500">{formatDate(flight.arriveDate)}</p>
//         </div>
//       </div>

//       {/* Flight Price and Book Button */}
//       <div className="flex flex-col justify-center items-center w-full lg:w-auto gap-2 lg:gap-4">
//         <div className="text-center">
//           <p className="text-[12px] text-gray-500">Price</p>
//           <p className="text-[18px] font-semibold">₹ {flight.price}</p>
//         </div>
//         <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-150">
//           Book
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FlightCard;




import React from "react";

const FlightCard = ({ flight }) => {
    const formatDate = (dateString, location) => {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} - ${location}`;
    };

    const calcDuration = (departTime, arriveTime) => {
        const [departHour, departMinute] = departTime.split(":").map(Number);
        const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);
        const departTotalMinutes = departHour * 60 + departMinute;
        let arriveTotalMinutes = arriveHour * 60 + arriveMinute;
        if (arriveTotalMinutes < departTotalMinutes) arriveTotalMinutes += 24 * 60;
        const durationMinutes = arriveTotalMinutes - departTotalMinutes;
        const durationHour = Math.floor(durationMinutes / 60);
        const durationMinute = durationMinutes % 60;
        return `${durationHour}h ${durationMinute}m`;
    };

    return (
        <div className="relative w-full p-5 border border-gray-200 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-center gap-4 max-w-[450px] lg:max-w-[1000px] mb-4 hover:shadow-lg transition duration-150 ease-in-out">
            {/* Airline Info */}
            <div className="flex items-center gap-4 w-full lg:w-[180px]">
                <img src={flight.airline.airlineLogo} alt="airline logo" className="w-[60px] h-auto object-contain" />
                <div className="flex flex-col">
                    <h5 className="font-semibold text-[16px]">{flight.airline.airlineName}</h5>
                </div>
            </div>

            {/* Flight Schedule */}
            <div className="flex items-center justify-between gap-3 w-full">
                <div className="text-center ml-10">
                    <p className="text-[12px] text-gray-500">Depart</p>
                    <p className="text-[18px] font-semibold mt-1">{flight.departTime}</p>
                    <p className="text-[12px] text-gray-500">{formatDate(flight.departDate, flight.from)}</p>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-1">
                    <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
                    <div className="w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
                    <div className="text-[12px] px-2 py-1 text-blue-600 bg-blue-100 rounded-full">{calcDuration(flight.departTime, flight.arriveTime)}</div>
                    <div className="w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
                </div>

                <div className="text-center mr-10">
                    <p className="text-[12px] text-gray-500">Arrive</p>
                    <p className="text-[18px] font-semibold mt-1">{flight.arriveTime}</p>
                    <p className="text-[12px] text-gray-500">{formatDate(flight.arriveDate, flight.to)}</p>
                </div>
            </div>

            {/* Flight Price and Book Button */}
            <div className="flex justify-between items-center w-full lg:w-auto gap-4">
                <div className="text-center flex mr-7 gap-3">
                    {/* <p className="text-[12px] text-gray-500">Price</p> */}
                    <p className="text-[18px] font-semibold">₹</p>
                    <p className="text-[18px] font-semibold"> {flight.price}</p>
                </div>
                <button className="px-10 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-150">
                    Book
                </button>
            </div>
        </div>
    );
};

export default FlightCard;
