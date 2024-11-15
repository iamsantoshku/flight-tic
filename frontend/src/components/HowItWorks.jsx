// import React from "react";
// import bannerImage from "../assets/flight logo.png"; // Update the path if needed

// const HowItWorks = () => {
//     return (
//         <section className="bg-blue-50 py-12 px-4 md:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="cont flex">
//                     <div className="head1">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
//                     How It Works?
//                 </h2>
//                 <p className="text-center text-gray-600 mb-12">
//                     Just 4 easy and quick steps
//                 </p>

//                     </div>
               

//                 <div className="absolute ml-[70vw] top-12 w-40 md:w-48 lg:w-56">
//                             <img src={bannerImage} alt="Airplane Banner" />
//                         </div>


//                 </div>
                

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {/* Left side steps */}
//                     <div>
//                         <div className="flex items-start mb-6">
//                             <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                                 1
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                     Search for Flights
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Begin your journey by entering your departure city, destination, travel dates, and the number of passengers.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-start mb-6">
//                             <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                                 3
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                     Provide Passenger Information
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Enter the required passenger information for all individuals traveling, including names, contact details, and any special requests.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right side steps with image */}
//                     <div className="relative">
//                         <div className="flex items-start mb-6">
//                             <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                                 2
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                     Select Your Flight
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Review the search results and compare the details of each flight, including departure and arrival times, durations, and prices.
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-start mb-6">
//                             <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                                 4
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                     Payment and Confirmation
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     Review the booking summary, including the total cost, flight details, and passenger information.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Plane Image */}
                        
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HowItWorks;




// import React from "react";
// import bannerImage from "../assets/flight logo.png"; // Update the path if needed

// const HowItWorks = () => {
//   return (
//     <section className="bg-blue-50 py-12 px-4 md:px-8 w-[90vw] h-[37vw] mx-auto relative rounded-xl">
//       <div className="max-w-7xl mx-auto h-full">
//         <div className="cont flex flex-col md:flex-row relative">
//           {/* Heading Section */}
//           <div className="head1 w-full md:w-1/2 -ml-[12vw]" >
//             <h2 className="text-4xl md:text-4xl font-bold text-gray-800 text-center mb-4 ">
//               How It Works?
//             </h2>
//             <p className="text-center text-gray-600 mb-12">
//               Just 4 easy and quick steps
//             </p>
//           </div>

//           {/* Airplane Image */}
//           <div className="absolute md:right-12 right-4 -mt-[4vw] md:w-72 w-58 ">
//             <img src={bannerImage} alt="Airplane Banner" className="w-full" />
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left side steps */}
//           <div>
//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                 1
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Search for Flights
//                 </h3>
//                 <p className="text-gray-600">
//                   Begin your journey by entering your departure city,
//                   destination, travel dates, and the number of passengers.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                 3
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Provide Passenger Information
//                 </h3>
//                 <p className="text-gray-600">
//                   Enter the required passenger information for all individuals
//                   traveling, including names, contact details, and any special
//                   requests.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right side steps */}
//           <div className="relative">
//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                 2
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Select Your Flight
//                 </h3>
//                 <p className="text-gray-600">
//                   Review the search results and compare the details of each
//                   flight, including departure and arrival times, durations, and
//                   prices.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4">
//                 4
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Payment and Confirmation
//                 </h3>
//                 <p className="text-gray-600">
//                   Review the booking summary, including the total cost, flight
//                   details, and passenger information.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



// import React from "react";
// import bannerImage from "../assets/flight logo.png"; // Update the path if needed

// const HowItWorks = () => {
//   return (
//     <section className="bg-blue-50 py-12 px-4 md:px-8 w-[90vw] h-[37vw] mx-auto relative rounded-xl">
//       <div className="max-w-7xl mx-auto h-full">
//         <div className="cont flex flex-col md:flex-row relative">
//           {/* Heading Section */}
//           <div className="head1 w-full md:w-1/2 -ml-[12vw]">
//             <h2 className="text-4xl md:text-4xl font-bold text-gray-800 text-center mb-4 ">
//               How It Works?
//             </h2>
//             <p className="text-center text-gray-600 mb-12">
//               Just 4 easy and quick steps
//             </p>
//           </div>

//           {/* Airplane Image */}
//           <div className="absolute md:right-12 right-4 -mt-[4vw] md:w-72 w-58 ">
//             <img src={bannerImage} alt="Airplane Banner" className="w-full" />
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Left side steps */}
//           <div>
//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 1
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Search for Flights
//                 </h3>
//                 <p className="text-gray-600">
//                   Begin your journey by entering your departure city,
//                   destination, travel dates, and the number of passengers.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 3
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Provide Passenger Information
//                 </h3>
//                 <p className="text-gray-600">
//                   Enter the required passenger information for all individuals
//                   traveling, including names, contact details, and any special
//                   requests.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right side steps */}
//           <div className="relative">
//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 2
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Select Your Flight
//                 </h3>
//                 <p className="text-gray-600">
//                   Review the search results and compare the details of each
//                   flight, including departure and arrival times, durations, and
//                   prices.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 4
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Payment and Confirmation
//                 </h3>
//                 <p className="text-gray-600">
//                   Review the booking summary, including the total cost, flight
//                   details, and passenger information.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks



// import React from "react";
// import bannerImage from "../assets/flight logo.png"; // Update the path if needed

// const HowItWorks = () => {
//   return (
//     <section className="bg-blue-50 py-12 px-4 md:px-8 w-[90vw] h-auto mx-auto relative rounded-xl">
//       <div className="max-w-7xl mx-auto h-full">
//         <div className="flex flex-col md:flex-row relative">
//           {/* Heading Section */}
//           <div className="w-full md:w-1/2 md:-ml-[12vw] mb-8 md:mb-0">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left mb-2 md:mb-4">
//               How It Works?
//             </h2>
//             <p className="text-center md:text-left text-gray-600 mb-8">
//               Just 4 easy and quick steps
//             </p>
//           </div>

//           {/* Airplane Image */}
//           <div className="absolute right-1 md:right-12 top-4 md:-mt-[4vw] w-40 md:w-72 mx-auto">
//             <img src={bannerImage} alt="Airplane Banner" className="w-full" />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//           {/* Left side steps */}
//           <div>
//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 1
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
//                   Search for Flights
//                 </h3>
//                 <p className="text-gray-600">
//                   Begin your journey by entering your departure city,
//                   destination, travel dates, and the number of passengers.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 3
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
//                   Provide Passenger Information
//                 </h3>
//                 <p className="text-gray-600">
//                   Enter the required passenger information for all individuals
//                   traveling, including names, contact details, and any special
//                   requests.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right side steps */}
//           <div>
//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 2
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
//                   Select Your Flight
//                 </h3>
//                 <p className="text-gray-600">
//                   Review the search results and compare the details of each
//                   flight, including departure and arrival times, durations, and
//                   prices.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start mb-6">
//               <div className="bg-white border rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-lg font-bold text-blue-600 mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
//                 4
//               </div>
//               <div>
//                 <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
//                   Payment and Confirmation
//                 </h3>
//                 <p className="text-gray-600">
//                   Review the booking summary, including the total cost, flight
//                   details, and passenger information.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;




import React from "react";
import bannerImage from "../assets/flight logo.png"; // Update the path if needed

const HowItWorks = () => {
  return (
    <section className="bg-blue-50 py-8 px-4 sm:py-12 sm:px-6 md:px-8 w-[90vw] h-auto mx-auto relative rounded-xl">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col md:flex-row relative">
          {/* Heading Section */}
          <div className="w-full md:w-1/2 md:ml-[vw] mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left mb-2 sm:mb-4">
              How It Works?
            </h2>
            <p className="text-center md:text-left text-gray-600 mb-6 sm:mb-8">
              Just 4 easy and quick steps
            </p>
          </div>

          {/* Airplane Image */}
          <div className="absolute right-1 md:right-12 top-4 sm:top-2 md:-mt-[4vw] w-24 sm:w-32 md:w-40 lg:w-72 mx-auto">
            <img src={bannerImage} alt="Airplane Banner" className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10 sm:mt-12">
          {/* Left side steps */}
          <div>
            <div className="flex items-start mb-4 sm:mb-6">
              <div className="bg-white border rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-sm sm:text-lg font-bold text-blue-600 mr-3 sm:mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
                1
              </div>
              <div>
                <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                  Search for Flights
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Begin your journey by entering your departure city,
                  destination, travel dates, and the number of passengers.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4 sm:mb-6">
              <div className="bg-white border rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-sm sm:text-lg font-bold text-blue-600 mr-3 sm:mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
                3
              </div>
              <div>
                <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                  Provide Passenger Information
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Enter the required passenger information for all individuals
                  traveling, including names, contact details, and any special
                  requests.
                </p>
              </div>
            </div>
          </div>

          {/* Right side steps */}
          <div>
            <div className="flex items-start mb-4 sm:mb-6">
              <div className="bg-white border rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-sm sm:text-lg font-bold text-blue-600 mr-3 sm:mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
                2
              </div>
              <div>
                <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                  Select Your Flight
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Review the search results and compare the details of each
                  flight, including departure and arrival times, durations, and
                  prices.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4 sm:mb-6">
              <div className="bg-white border rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-sm sm:text-lg font-bold text-blue-600 mr-3 sm:mr-4 hover:bg-gray-300 hover:text-black transition duration-300">
                4
              </div>
              <div>
                <h3 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                  Payment and Confirmation
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Review the booking summary, including the total cost, flight
                  details, and passenger information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
