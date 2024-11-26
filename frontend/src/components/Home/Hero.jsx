

// import { FaCheckCircle } from 'react-icons/fa'; // For checkmarks
// import { IoIosArrowForward } from 'react-icons/io'; // For arrow icon
// import { BsPlayCircle } from 'react-icons/bs'; // For play icon
// import { FaExchangeAlt } from 'react-icons/fa'; // Import bidirectional icon
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import img1 from "../../assets/banner1.avif"; // Ensure the correct image path
// import { FaArrowRight } from "react-icons/fa6";

// const Hero = () => {
//   const navigate = useNavigate();
//   const [tripType, setTripType] = useState('oneWay'); // State to manage trip type
//   const [showReturnDate, setShowReturnDate] = useState(false); // State to manage return date visibility

//   const navToSearchPage = () => {
//     const from = document.querySelector('input[name="from"]').value;
//     const to = document.querySelector('input[name="to"]').value;
//     const departDate = document.querySelector('input[name="departDate"]').value;
//     const returnDate = showReturnDate ? document.querySelector('input[name="returnDate"]').value : '';
//     navigate(`/search?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
//   };

//   const handleTripTypeChange = (type) => {
//     setTripType(type);
//     setShowReturnDate(type === 'roundTrip');
//   };

//   return (
//     <section className="back w-[100vw] relative bg-cover bg-center h-[110vh] -ml-12 " style={{ backgroundImage: `url(${img1})` }}>
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center md:items-start">
//         {/* Text Section */}
//         <div className="text-white text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
//           <h2 className="text-xl font-medium flex items-center justify-center md:justify-start mb-10">
//             <span className="mr-2">🌍</span> The Best Booking System
//           </h2>
//           <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold leading-tight">
//             Find  The  Best  Flight <br /> For The Amazing Places
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Intuitive User Interface</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Transparent Booking Process</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Exceptional Customer Support</span>
//             </div>
//           </div>

//           <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6">
//             <button className="bg-yellow-300 text-black font-semibold py-3 px-10 rounded-full flex items-center justify-center hover:bg-blue-100 mb-4 sm:mb-0 text-lg">
//               Contact Us <FaArrowRight className='ml-4 size-5' />
//             </button>
//             <button className="flex items-center justify-center text-white py-3 px-6 rounded-lg hover:underline">
//               How It Works?
//             </button>
//           </div>

//         </div>
//       </div>
//       {/* search  */}



//       <div className="relative z-20 bg-white shadow-lg rounded-lg p-5 mb-20 max-w-7xl mx-auto flex flex-col items-center justify-center transform -translate-y-1/3">

//         <div className="flex gap-3 mb-4 justify-start -ml-[65vw]">
//           <button
//             className={`py-2 px-4 rounded-lg font-semibold ${tripType === 'oneWay' ? 'bg-yellow-300 text-black' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => handleTripTypeChange('oneWay')}
//           >
//             One Way
//           </button>
//           <button
//             className={`py-2 px-4 rounded-lg font-semibold ${tripType === 'roundTrip' ? 'bg-yellow-300 text-black' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => handleTripTypeChange('roundTrip')}
//           >
//             Round Trip
//           </button>
//         </div>
//         <div className="flex flex-col xl:flex-row gap-6 w-full">
          
//           <div className="flex flex-1  gap-4 items-center border border-gray-300 rounded-xl p-5 relative">
//             <div className="flex flex-col">
//               <h1 className="text-lg font-semibold">From</h1>
//               <input
//                 name="from"
//                 type="text"
//                 placeholder="Delhi"
//                 className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
//               />
//             </div>


//             <div className="bg-gray-300 p-2 rounded-full cursor-pointer flex items-center justify-center">
//               <FaExchangeAlt className="text-gray-700 text-2xl" />
//             </div>


//             <div className="flex flex-col w-full">
//               <h1 className="text-lg font-semibold">To</h1>
//               <input
//                 name="to"
//                 type="text"
//                 placeholder="Mumbai"
//                 className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
//               />
//             </div>
//           </div>

          
//           <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
//             <h1 className="text-lg font-semibold">Departure Date</h1>
//             <input
//               name="departDate"
//               type="date"
//               className="mt-2 text-2xl outline-none  border-b border-gray-300"
//             />
//           </div>

          
//           {showReturnDate && (
//             <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
//               <h1 className="text-lg font-semibold">Return Date</h1>
//               <input
//                 name="returnDate"
//                 type="date"
//                 className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
//               />
//             </div>
//           )}

          
//           <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
//             <h1 className="text-lg font-semibold">Flight Type</h1>
//             <select
//               name="flightType"
//               id="flightType"
//               className="mt-2 text-xl outline-none w-full border-b border-gray-300"
//             >
//               <option value="Economy">Economy</option>
//               <option value="Premium">Premium</option>
//               <option value="Business">Business</option>
//               <option value="First">First</option>
//             </select>
//           </div>
//         </div>

//         <button
//           className="mt-8 bg-yellow-300 hover:bg-yellow-600 text-black font-semibold py-3 px-10 rounded-lg ml-[68vw]"
//           onClick={navToSearchPage}
//         >
//           Search Flights
//         </button>
//       </div>




//     </section>
//   );
// };

// export default Hero;






// import { FaCheckCircle } from 'react-icons/fa'; // For checkmarks
// import { IoIosArrowForward } from 'react-icons/io'; // For arrow icon
// import { BsPlayCircle } from 'react-icons/bs'; // For play icon
// import { FaExchangeAlt } from 'react-icons/fa'; // Import bidirectional icon
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import img1 from "../../assets/banner1.avif"; // Ensure the correct image path
// import { FaArrowRight } from "react-icons/fa6";
// import SearchComponent from '../Card/SearchComponent';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [tripType, setTripType] = useState('oneWay'); // State to manage trip type
//   const [showReturnDate, setShowReturnDate] = useState(false); // State to manage return date visibility

  

//   const handleTripTypeChange = (type) => {
//     setTripType(type);
//     setShowReturnDate(type === 'roundTrip');
//   };

//   return (
//     <section className="back w-[158vw] sm:w-[100vw] relative bg-cover bg-center h-[125vh] sm:h-[107vh] -ml-12" style={{ backgroundImage: `url(${img1})` }}>
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center sm:items-start">
//         {/* Text Section */}
//         <div className="text-white text-center sm:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
//           <h2 className="text-xl sm:text-2xl font-medium flex items-center justify-center sm:justify-start mb-10">
//             <span className="mr-2">🌍</span> The Best Booking System
//           </h2>
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
//             Find The Best Flight <br /> For Amazing Places
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Intuitive User Interface</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Transparent Booking Process</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Exceptional Customer Support</span>
//             </div>
//           </div>

//           <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6">
//             <button className="bg-yellow-300 text-black font-semibold py-3 px-10 rounded-full flex items-center justify-center hover:bg-blue-100 mb-4 sm:mb-0 text-lg">
//               Contact Us <FaArrowRight className="ml-4 size-5" />
//             </button>
//             <button className="flex items-center justify-center text-white py-3 px-6 rounded-lg hover:underline">
//               How It Works?
//             </button>
//           </div>
//         </div>
//       </div>

//       <SearchComponent/>

//       {/* Search */}
      
//     </section>
//   );
// };

// export default Hero;



// import { FaCheckCircle } from 'react-icons/fa'; // For checkmarks
// import { IoIosArrowForward } from 'react-icons/io'; // For arrow icon
// import { BsPlayCircle } from 'react-icons/bs'; // For play icon
// import { FaExchangeAlt } from 'react-icons/fa'; // Import bidirectional icon
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import img1 from "../../assets/banner1.avif"; // Ensure the correct image path
// import { FaArrowRight } from "react-icons/fa6";
// import SearchComponent from '../Card/SearchComponent';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [tripType, setTripType] = useState('oneWay'); // State to manage trip type
//   const [showReturnDate, setShowReturnDate] = useState(false); // State to manage return date visibility

//   const handleTripTypeChange = (type) => {
//     setTripType(type);
//     setShowReturnDate(type === 'roundTrip');
//   };

//   return (
//     <section 
//       className="relative bg-cover bg-center px-0 h-[125vh] sm:h-[107vh] "
//       style={{ backgroundImage: `url(${img1})` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center sm:items-start">
//         {/* Text Section */}
//         <div className="text-white text-center sm:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
//           <h2 className="text-xl sm:text-2xl font-medium flex items-center justify-center sm:justify-start mb-6 sm:mb-10">
//             <span className="mr-2">🌍</span> The Best Booking System
//           </h2>
//           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-10">
//             Find The Best Flight <br /> For Amazing Places
//           </h1>

//           <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Intuitive User Interface</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Transparent Booking Process</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaCheckCircle className="text-green-500" />
//               <span>Exceptional Customer Support</span>
//             </div>
//           </div>

//           <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6">
//             <button className="bg-yellow-300 text-black font-semibold py-3 px-10 rounded-full flex items-center justify-center hover:bg-blue-100 mb-4 sm:mb-0 text-lg">
//               Contact Us <FaArrowRight className="ml-4" />
//             </button>
//             <button className="flex items-center justify-center text-white py-3 px-6 rounded-lg hover:underline">
//               How It Works?
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Search Component */}
//       <SearchComponent />

//       {/* Mobile and Desktop View Logic */}
//       {/* <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10 z-20">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-6 bg-white p-6 rounded-lg shadow-md">
//           <div className="flex flex-col sm:flex-row sm:space-x-6 items-center">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 id="oneWay"
//                 name="tripType"
//                 value="oneWay"
//                 checked={tripType === 'oneWay'}
//                 onChange={() => handleTripTypeChange('oneWay')}
//               />
//               <label htmlFor="oneWay" className="text-lg font-medium">One Way</label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 id="roundTrip"
//                 name="tripType"
//                 value="roundTrip"
//                 checked={tripType === 'roundTrip'}
//                 onChange={() => handleTripTypeChange('roundTrip')}
//               />
//               <label htmlFor="roundTrip" className="text-lg font-medium">Round Trip</label>
//             </div>
//           </div>

//           {showReturnDate && (
//             <div className="flex flex-col sm:flex-row sm:space-x-6 items-center mt-4 sm:mt-0">
//               <label htmlFor="returnDate" className="text-lg">Return Date</label>
//               <input type="date" id="returnDate" className="border p-2 rounded-md" />
//             </div>
//           )}
//         </div>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;



import { FaCheckCircle } from 'react-icons/fa'; // For checkmarks
import { IoIosArrowForward } from 'react-icons/io'; // For arrow icon
import { BsPlayCircle } from 'react-icons/bs'; // For play icon
import { FaExchangeAlt } from 'react-icons/fa'; // Import bidirectional icon
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/banner1.avif"; // Ensure the correct image path
import { FaArrowRight } from "react-icons/fa6";
import SearchComponent from '../Card/SearchComponent';

const Hero = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('oneWay'); // State to manage trip type
  const [showReturnDate, setShowReturnDate] = useState(false); // State to manage return date visibility

  const handleTripTypeChange = (type) => {
    setTripType(type);
    setShowReturnDate(type === 'roundTrip');
  };

  return (
    <section 
    // relative bg-cover bg-center px-0 h-[125vh] sm:h-[107vh] -ml-12 w-[105vw] sm:w-[105vw]
      className="relative bg-cover bg-center px-0 h-[125vh] sm:h-[107vh] w-full"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center sm:items-start">
        {/* Text Section */}
        <div className="text-white text-center sm:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h2 className="text-xl -ml-14 sm:-ml-0 sm:text-2xl font-medium flex items-center justify-center sm:justify-start mb-6 sm:mb-10">
            <span className="mr-2 sm:mr-0">🌍</span> The Best Booking System
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-10">
            Find The Best Flight <br /> For Amazing Places
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Intuitive User Interface</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Transparent Booking Process</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Exceptional Customer Support</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-6">
            <button className="bg-yellow-300 text-black font-semibold py-3 px-10 rounded-full flex items-center justify-center hover:bg-blue-100 mb-4 sm:mb-0 text-lg">
              Contact Us <FaArrowRight className="ml-4" />
            </button>
            <button className="flex items-center justify-center text-white py-3 px-6 rounded-lg hover:underline">
              How It Works?
            </button>
          </div>
        </div>
      </div>

      {/* Search Component */}
      <SearchComponent />

    </section>
  );
};

export default Hero;




