// import React from "react";

// const Header = ({ currentFlight }) => {
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
//     <div className="overflow-hidden rounded-[30px] border-[1px]">
//       <div className="w-full h-fit bg-[#e1e7ee] p-5 flex justify-between items-center">
//         <div className="flex justify-start items-center gap-3">
//           <div className="w-[60px]">
//             <img src={currentFlight.airline.airlineLogo} alt="..." />
//           </div>
//           <p className="text-[18px] font-semibold">
//             {currentFlight.airline.airlineName} Airlines
//           </p>
//         </div>
//         <div>
//           <p className="text-[14px]">Economy class</p>
//         </div>
//       </div>
//       <div className="p-5">
//         <div className="flex max-w-[800px] w-full m-auto justify-between items-center relative z-10">
//           <div className="text-center">
//             <p className="text-[12px]">Depart</p>
//             <p className="text-[18px] font-semibold mt-2">
//               {currentFlight.departTime}
//             </p>
//             <p className="text-[14px] text-gray-600">
//               {formatDate(currentFlight.departDate)}
//             </p>
//           </div>
//           <div className="flex items-center my-5 lg:my-0">
//             <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
//             <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
//             <div className="text-[12px] px-2 py-1 text-blue-500 bg-blue-200 rounded-full lg:text-[14px] lg:px-3 text-center">
//               {calcDuration(currentFlight.departTime, currentFlight.arriveTime)}
//             </div>
//             <div className="w-[15px] h-[1px] border-[1px] border-blue-400 border-dashed lg:w-[30px]"></div>
//             <div className="w-[15px] h-[15px] rounded-full bg-blue-300"></div>
//           </div>
//           <div className="text-center">
//             <p className="text-[12px]">Arrive</p>
//             <p className="text-[18px] font-semibold mt-2">
//               {currentFlight.arriveTime}
//             </p>
//             <p className="text-[14px] text-gray-600">
//               {formatDate(currentFlight.arriveDate)}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




// import React from "react";
// import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
// import { BsClock } from "react-icons/bs";

// const Header = ({ currentFlight }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const monthNames = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ];
//     return `${date.getDate()} ${monthNames[date.getMonth()]}`;
//   };

//   const calcDuration = (departTime, arriveTime) => {
//     const [departHour, departMinute] = departTime.split(":").map(Number);
//     const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

//     let departTotalMinutes = departHour * 60 + departMinute;
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
//     <div className="border rounded-lg shadow-lg overflow-hidden max-w-lg mx-auto">
//       <div className="bg-yellow-100 p-2 text-sm text-yellow-700 flex items-center">
//         <span className="mr-2">✈️</span>
//         You searched for a flight from GOI (Dabolim Airport), but you have selected GOX (Mopa International Airport) as the departure airport.
//       </div>
//       <div className="flex items-center p-4 bg-gray-100">
//         <img src={currentFlight.airline.airlineLogo} alt="Airline Logo" className="w-12 h-12 mr-3" />
//         <div>
//           <p className="font-bold text-lg">{currentFlight.airline.airlineName}</p>
//           <p className="text-sm text-gray-500">Flight {currentFlight.flightNumber}</p>
//         </div>
//         <div className="ml-auto text-green-600 font-semibold text-sm flex items-center">
//           <BsClock className="mr-1" />
//           93% On-time
//         </div>
//       </div>
//       <div className="p-4">
//         <div className="flex justify-between items-center text-gray-700 mb-2">
//           <div className="flex items-center">
//             <FaPlaneDeparture className="mr-2" />
//             <div>
//               <p className="text-xs">Depart</p>
//               <p className="font-semibold text-lg">{currentFlight.departTime}</p>
//               <p className="text-sm">{formatDate(currentFlight.departDate)}</p>
//               <p className="text-xs text-gray-500">{currentFlight.departureAirport}</p>
//             </div>
//           </div>
//           <div className="text-center">
//             <p className="text-sm font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
//               {calcDuration(currentFlight.departTime, currentFlight.arriveTime)}
//             </p>
//           </div>
//           <div className="flex items-center">
//             <FaPlaneArrival className="mr-2" />
//             <div>
//               <p className="text-xs">Arrive</p>
//               <p className="font-semibold text-lg">{currentFlight.arriveTime}</p>
//               <p className="text-sm">{formatDate(currentFlight.arriveDate)}</p>
//               <p className="text-xs text-gray-500">{currentFlight.arrivalAirport}</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between text-gray-500 text-sm">
//           <div>
//             <p>Baggage</p>
//             <p>Per Traveller</p>
//           </div>
//           <div>
//             <p>Cabin</p>
//             <p>{currentFlight.cabinBaggage} (1 piece per pax)</p>
//           </div>
//           <div>
//             <p>Check-in</p>
//             <p>{currentFlight.checkInBaggage} (1 piece per pax)</p>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 bg-gray-100 text-xs text-gray-500 flex items-center justify-between">
//         <p>{currentFlight.aircraft}</p>
//         <p>{currentFlight.seatType}</p>
//       </div>
//     </div>
//   );
// };

// export default Header;




import React from "react";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { MdOutlineLuggage } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";

const Header = ({ currentFlight }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${date.getDate()} ${monthNames[date.getMonth()]}`;
  };

  const calcDuration = (departTime, arriveTime) => {
    const [departHour, departMinute] = departTime.split(":").map(Number);
    const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);

    let departTotalMinutes = departHour * 60 + departMinute;
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
    <div className="border rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
      {/* Alert Section */}
      <div className="bg-yellow-100 p-2 text-sm text-yellow-700 flex items-center">
        <span className="mr-2">✈️</span>
        You searched for a flight from GOI (Dabolim Airport), but you have selected GOX (Mopa International Airport) as the departure airport.
      </div>

      {/* Flight Information Section */}


      <div className="flex items-center p-4 bg-gray-100">
        <img src={currentFlight.airline.airlineLogo} alt="Airline Logo" className="w-12 h-12 mr-3" />
        <div>
          <p className="font-bold text-lg">{currentFlight.airline.airlineName}</p>
          <p className="text-sm text-gray-500">Flight {currentFlight.flightNumber}</p>
        </div>
        <div className="ml-auto text-green-600 font-semibold text-sm flex items-center">
          <BsClock className="mr-1" />
          93% On-time
        </div>
      </div>

      {/* Departure and Arrival Section */}
      <div className="flex items-center gap-2 ml-10">
  <h5 className="text-lg font-semibold">{currentFlight.from}</h5>
  <span className="text-gray-500">→</span>
  <h5 className="text-lg font-semibold">{currentFlight.to}</h5>
</div>

<div className="pp flex items-center gap-4 text-gray-600 text-sm mt-2 ml-10">
  <p>{formatDate(currentFlight.departDate)}</p>
  <p className="text-gray-500">•</p>
  <p>Non-stop</p>
  <p className="text-gray-500">•</p>
  <p>{calcDuration(currentFlight.departTime, currentFlight.arriveTime)}</p>
</div>

      <div className="p-4">
        <div className="flex justify-between items-center text-gray-700 mb-4">
          <div className="flex items-center">
            <FaPlaneDeparture className="mr-2" />
            <div>
              <p className="text-xs text-gray-500">Depart</p>
              <p className="font-semibold text-xl">{currentFlight.departTime}</p>
              <p className="text-sm">{formatDate(currentFlight.departDate)}</p>
              <p className="text-xs text-gray-500">{currentFlight.departureAirport}</p>
              <p className="text-xl text-black">{currentFlight.from}</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
              {calcDuration(currentFlight.departTime, currentFlight.arriveTime)}
            </p>
          </div>

          <div className="flex items-center">
            <FaPlaneArrival className="mr-2" />
            <div>
              <p className="text-xs text-gray-500">Arrive</p>
              <p className="font-semibold text-xl">{currentFlight.arriveTime}</p>
              <p className="text-sm">{formatDate(currentFlight.arriveDate)}</p>
              <p className="text-xs text-gray-500">{currentFlight.arrivalAirport}</p>
              <p className="text-xl text-black">{currentFlight.to}</p>
            </div>
          </div>
        </div>

        {/* Baggage Information Section */}
        <div className="flex justify-between text-gray-600 text-sm bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <MdOutlineLuggage className="text-lg mr-2" />
            <div>
              <p className="text-xl text-black">Baggage</p>
              <p className="font-semibold">{currentFlight.baggageAllowance} per traveler</p>
            </div>
          </div>

          <div className="flex items-center">
            <IoMdAirplane className="text-lg mr-2" />
            <div>
              <p className="text-xl text-black">Cabin</p>
              <p className="font-semibold">7kg (per traveler)</p>
              <p className="font-semibold">{currentFlight.cabinBaggage}</p>
            </div>
          </div>

          <div className="flex items-center">
            <MdOutlineLuggage className="text-lg mr-2" />
            <div>
              <p className="text-xl text-black">Check-in</p>
              <p className="font-semibold">15kg (per traveler)</p>
              <p className="font-semibold">{currentFlight.checkInBaggage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="p-4 bg-gray-100 text-xs text-gray-500 flex items-center justify-between">
        <p>{currentFlight.aircraft}</p>
        <p>{currentFlight.seatType}</p>
      </div>
    </div>
  );
};

export default Header;
