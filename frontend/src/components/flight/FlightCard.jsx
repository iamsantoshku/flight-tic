




// import React from "react";

// const FlightCard = ({ flight }) => {
//     const formatDate = (dateString, location) => {
//         const date = new Date(dateString);
//         const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} - ${location}`;
//     };

//     const calcDuration = (departTime, arriveTime) => {
//         const [departHour, departMinute] = departTime.split(":").map(Number);
//         const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);
//         const departTotalMinutes = departHour * 60 + departMinute;
//         let arriveTotalMinutes = arriveHour * 60 + arriveMinute;
//         if (arriveTotalMinutes < departTotalMinutes) arriveTotalMinutes += 24 * 60;
//         const durationMinutes = arriveTotalMinutes - departTotalMinutes;
//         const durationHour = Math.floor(durationMinutes / 60);
//         const durationMinute = durationMinutes % 60;
//         return `${durationHour}h ${durationMinute}m`;
//     };

//     return (
//         <div className="relative w-full p-5 border border-gray-200 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-center gap-4 max-w-[450px] lg:max-w-[1000px] mb-4 hover:shadow-lg transition duration-150 ease-in-out">
//             {/* Airline Info */}
//             <div className="flex items-center gap-4 w-full lg:w-[180px]">
//                 <img src={flight.airline.airlineLogo} alt="airline logo" className="w-[60px] h-auto object-contain" />
//                 <div className="flex flex-col">
//                     <h5 className="font-semibold text-[16px]">{flight.airline.airlineName}</h5>
//                 </div>
//             </div>

//             {/* Flight Schedule */}
//             <div className="flex items-center justify-between gap-3 w-full">
//                 <div className="text-center ml-10">
//                     <p className="text-[12px] text-gray-500">Depart</p>
//                     <p className="text-[18px] font-semibold mt-1">{flight.departTime}</p>
//                     <p className="text-[12px] text-gray-500">{formatDate(flight.departDate, flight.from)}</p>
//                 </div>

//                 {/* Timeline */}
//                 <div className="flex items-center gap-1">
//                     <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
//                     <div className="w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
//                     <div className="text-[12px] px-2 py-1 text-blue-600 bg-blue-100 rounded-full">{calcDuration(flight.departTime, flight.arriveTime)}</div>
//                     <div className="w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
//                     <div className="w-[10px] h-[10px] rounded-full bg-blue-500"></div>
//                 </div>

//                 <div className="text-center mr-10">
//                     <p className="text-[12px] text-gray-500">Arrive</p>
//                     <p className="text-[18px] font-semibold mt-1">{flight.arriveTime}</p>
//                     <p className="text-[12px] text-gray-500">{formatDate(flight.arriveDate, flight.to)}</p>
//                 </div>
//             </div>

//             {/* Flight Price and Book Button */}
//             <div className="flex justify-between items-center w-full lg:w-auto gap-4">
//                 <div className="text-center flex mr-7 gap-3">
//                     {/* <p className="text-[12px] text-gray-500">Price</p> */}
//                     <p className="text-[18px] font-semibold">₹</p>
//                     <p className="text-[18px] font-semibold"> {flight.price}</p>
//                 </div>
//                 <button className="px-10 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-150">
//                     Book
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FlightCard;




// import React from "react";

// const FlightCard = ({ flight }) => {
//     const formatDate = (dateString, location) => {
//         const date = new Date(dateString);
//         const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//         return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} - ${location}`;
//     };

//     const calcDuration = (departTime, arriveTime) => {
//         const [departHour, departMinute] = departTime.split(":").map(Number);
//         const [arriveHour, arriveMinute] = arriveTime.split(":").map(Number);
//         const departTotalMinutes = departHour * 60 + departMinute;
//         let arriveTotalMinutes = arriveHour * 60 + arriveMinute;
//         if (arriveTotalMinutes < departTotalMinutes) arriveTotalMinutes += 24 * 60;
//         const durationMinutes = arriveTotalMinutes - departTotalMinutes;
//         const durationHour = Math.floor(durationMinutes / 60);
//         const durationMinute = durationMinutes % 60;
//         return `${durationHour}h ${durationMinute}m`;
//     };

//     return (
//         <div className="relative w-full p-5 border border-gray-200 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-center gap-4 max-w-[95%] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[1000px] mb-4 hover:shadow-lg transition duration-150 ease-in-out mx-auto">
//             {/* Airline Info */}
//             <div className="flex items-center gap-4 w-full lg:w-[180px]">
//                 <img src={flight.airline.airlineLogo} alt="airline logo" className="w-[40px] h-auto sm:w-[60px] object-contain" />
//                 <div className="flex flex-col">
//                     <h5 className="font-semibold text-[14px] sm:text-[16px]">{flight.airline.airlineName}</h5>
//                 </div>
//             </div>

//             {/* Flight Schedule */}
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full lg:w-auto">
//                 <div className="text-center sm:text-left">
//                     <p className="text-[10px] sm:text-[12px] text-gray-500">Depart</p>
//                     <p className="text-[16px] sm:text-[18px] font-semibold mt-1">{flight.departTime}</p>
//                     <p className="text-[10px] sm:text-[12px] text-gray-500">{formatDate(flight.departDate, flight.from)}</p>
//                 </div>

//                 {/* Timeline */}
//                 <div className="flex items-center gap-1">
//                     <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-blue-500"></div>
//                     <div className="w-[20px] sm:w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
//                     <div className="text-[10px] sm:text-[12px] px-1 sm:px-2 py-0.5 sm:py-1 text-blue-600 bg-blue-100 rounded-full">
//                         {calcDuration(flight.departTime, flight.arriveTime)}
//                     </div>
//                     <div className="w-[20px] sm:w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
//                     <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-blue-500"></div>
//                 </div>

//                 <div className="text-center sm:text-left">
//                     <p className="text-[10px] sm:text-[12px] text-gray-500">Arrive</p>
//                     <p className="text-[16px] sm:text-[18px] font-semibold mt-1">{flight.arriveTime}</p>
//                     <p className="text-[10px] sm:text-[12px] text-gray-500">{formatDate(flight.arriveDate, flight.to)}</p>
//                 </div>
//             </div>

//             {/* Flight Price and Book Button */}
//             <div className="flex flex-col sm:flex-row justify-between items-center w-full lg:w-auto gap-4 mt-4 lg:mt-0">
//                 <div className="text-center flex items-center gap-2">
//                     <span className="text-[16px] sm:text-[18px] font-semibold">₹</span>
//                     <span className="text-[16px] sm:text-[18px] font-semibold">{flight.price}</span>
//                 </div>
//                 <button className="px-6 sm:px-10 py-2 text-[12px] sm:text-[14px] text-white bg-orange-500 rounded-md hover:bg-orange-600 transition duration-150">
//                     Book
//                 </button>
//             </div>
//         </div>
//     );
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
        <div className="relative w-full p-5 border border-gray-200 rounded-md shadow-md flex flex-col lg:flex-row justify-between items-center gap-4 max-w-[95%] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[1000px] mb-4 hover:shadow-lg transition duration-150 ease-in-out mx-auto">
            {/* Airline Info */}
            <div className="flex items-center gap-4 w-full lg:w-[180px] sm:ml-[0vw] ml-[35vw]">
                <img src={flight.airline.airlineLogo} alt="airline logo" className="w-[50px] sm:w-[60px] object-contain" />
                <div className="flex flex-col">
                    <h5 className="font-semibold text-[16px] sm:text-[18px] lg:text-[16px]">{flight.airline.airlineName}</h5>
                </div>
            </div>

            {/* Flight Schedule */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 w-full lg:w-auto">
                <div className="text-center sm:text-left">
                    <p className="text-[14px] sm:text-[12px] lg:text-[12px] text-gray-500">Depart</p>
                    <p className="text-[20px] sm:text-[18px] lg:text-[18px] font-semibold mt-1">{flight.departTime}</p>
                    <p className="text-[14px] sm:text-[12px] lg:text-[12px] text-gray-500">{formatDate(flight.departDate, flight.from)}</p>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-1">
                    <div className="w-[10px] sm:w-[10px] h-[10px] rounded-full bg-blue-500"></div>
                    <div className="w-[30px] sm:w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
                    <div className="text-[14px] sm:text-[12px] lg:text-[12px] px-2 sm:px-2 py-1 text-blue-600 bg-blue-100 rounded-full">
                        {calcDuration(flight.departTime, flight.arriveTime)}
                    </div>
                    <div className="w-[30px] sm:w-[30px] h-[1px] border-t border-dashed border-blue-500"></div>
                    <div className="w-[10px] sm:w-[10px] h-[10px] rounded-full bg-blue-500"></div>
                </div>

                <div className="text-center sm:text-left">
                    <p className="text-[14px] sm:text-[12px] lg:text-[12px] text-gray-500">Arrive</p>
                    <p className="text-[20px] sm:text-[18px] lg:text-[18px] font-semibold mt-1">{flight.arriveTime}</p>
                    <p className="text-[14px] sm:text-[12px] lg:text-[12px] text-gray-500">{formatDate(flight.arriveDate, flight.to)}</p>
                </div>
            </div>

            {/* Flight Price and Book Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center w-full lg:w-auto gap-4 mt-4 lg:mt-0">
                <div className="text-center flex items-center gap-2">
                    <span className="text-[16px] sm:text-[18px] lg:text-[16px] font-semibold">₹</span>
                    <span className="text-[16px] sm:text-[18px] lg:text-[16px] font-semibold">{flight.price}</span>
                </div>
                <button className="px-14 sm:px-10 py-2 text-[14px] sm:text-[16px] lg:text-[14px] text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition duration-150">
                    Book
                </button>
            </div>
        </div>
    );
};

export default FlightCard;
