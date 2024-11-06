// import React from "react";
// import HeroSectionCard from "./HeroSectionCard";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// const HeroSection = () => {
//   const homeData = [
//     {
//       heading: "Explore the sights of the Andaman and Nicobar Islands",
//       subheading: "The place called heaven on earth",
//       src: "https://images.unsplash.com/photo-1620127682229-33388276e540",
//     },
//     {
//       heading: "Discover the beauty of Paris",
//       subheading: "City of Love",
//       src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
//     },
//     {
//       heading: "Experience the wonders of New York City",
//       subheading: "The city that never sleeps",
//       src: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c",
//     },
//     {
//       heading: "Marvel at the grandeur of the Grand Canyon",
//       subheading: "Nature's masterpiece",
//       src: "https://images.unsplash.com/photo-1615551043360-33de8b5f410c",
//     },
//     {
//       heading: "Get lost in the charm of Kyoto",
//       subheading: "Tradition meets modernity",
//       src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
//     },
//   ];

//   return (
//     <section className="max-w-[1800px] mx-auto w-full h-[90vh]  mt-6 rounded-[25px] overflow-hidden relative">
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//       >
//         {homeData.map((data, index) => (
//           <SwiperSlide key={index} className="h-[90vh]">
//             <HeroSectionCard
//               heading={data.heading}
//               subheading={data.subheading}
//               src={data.src}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* <HeroSectionCard /> */}
//     </section>
//   );
// };

// export default HeroSection;



import { FaCheckCircle } from 'react-icons/fa'; // For checkmarks
import { IoIosArrowForward } from 'react-icons/io'; // For arrow icon
import { BsPlayCircle } from 'react-icons/bs'; // For play icon
import { FaExchangeAlt } from 'react-icons/fa'; // Import bidirectional icon
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/flight3.jpg"; // Ensure the correct image path

const Hero = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('oneWay'); // State to manage trip type
  const [showReturnDate, setShowReturnDate] = useState(false); // State to manage return date visibility

  const navToSearchPage = () => {
    const from = document.querySelector('input[name="from"]').value;
    const to = document.querySelector('input[name="to"]').value;
    const departDate = document.querySelector('input[name="departDate"]').value;
    const returnDate = showReturnDate ? document.querySelector('input[name="returnDate"]').value : '';
    navigate(`/search?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
    setShowReturnDate(type === 'roundTrip');
  };

  return (
    <section className="relative bg-cover bg-center h-[110vh]" style={{ backgroundImage: `url(${img1})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center md:items-start">
        {/* Text Section */}
        <div className="text-white text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h2 className="text-xl font-medium flex items-center justify-center md:justify-start mb-3">
            <span className="mr-2">🌍</span> The Best Booking System
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Find The Best Flight <br /> To Amazing Places
          </h1>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
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
            <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-yellow-600 mb-4 sm:mb-0">
              Contact Us
            </button>
            <button className="flex items-center justify-center text-white py-3 px-6 rounded-lg hover:underline">
              How It Works?
            </button>
          </div>

        </div>
      </div>

      {/* Booking Form Section */}
      <div className="relative z-20 bg-white shadow-lg rounded-lg p-5 mb-20 max-w-7xl mx-auto flex flex-col items-center justify-center transform -translate-y-1/3">
        {/* Trip Type Buttons */}
        <div className="flex gap-3 mb-4 justify-start">
  <button
    className={`py-2 px-4 rounded-lg font-semibold ${tripType === 'oneWay' ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}
    onClick={() => handleTripTypeChange('oneWay')}
  >
    One Way
  </button>
  <button
    className={`py-2 px-4 rounded-lg font-semibold ${tripType === 'roundTrip' ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}
    onClick={() => handleTripTypeChange('roundTrip')}
  >
    Round Trip
  </button>
</div>
        <div className="flex flex-col xl:flex-row gap-6 w-full">
          {/* From and To Inputs */}
          <div className="flex flex-1  gap-4 items-center border border-gray-300 rounded-xl p-5 relative">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">From</h1>
              <input
                name="from"
                type="text"
                placeholder="Delhi"
                className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
              />
            </div>

            {/* Vertical Line */}
            {/* <div className="h-10 w-[1px] bg-gray-400"></div> */}

            {/* Bidirectional Icon */}
            <div className="bg-gray-300 p-2 rounded-full cursor-pointer flex items-center justify-center">
              <FaExchangeAlt className="text-gray-700 text-2xl" />
            </div>

            {/* <div className="h-10 w-[1px] bg-gray-400"></div> */}

            <div className="flex flex-col w-full">
              <h1 className="text-lg font-semibold">To</h1>
              <input
                name="to"
                type="text"
                placeholder="Mumbai"
                className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
              />
            </div>
          </div>

          {/* Departure Date Input */}
          <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
            <h1 className="text-lg font-semibold">Departure Date</h1>
            <input
              name="departDate"
              type="date"
              className="mt-2 text-2xl outline-none  border-b border-gray-300"
            />
          </div>

          {/* Return Date (if Round Trip) */}
          {showReturnDate && (
            <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
              <h1 className="text-lg font-semibold">Return Date</h1>
              <input
                name="returnDate"
                type="date"
                className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
              />
            </div>
          )}

          {/* Flight Type Dropdown */}
          <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
            <h1 className="text-lg font-semibold">Flight Type</h1>
            <select
              name="flightType"
              id="flightType"
              className="mt-2 text-xl outline-none w-full border-b border-gray-300"
            >
              <option value="Economy">Economy</option>
              <option value="Premium">Premium</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>
        </div>

        <button
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-10 rounded-lg"
          onClick={navToSearchPage}
        >
          Search Flights
        </button>
      </div>
    </section>
  );
};

export default Hero;





// import { FaCheckCircle } from 'react-icons/fa'; // For checkmarks
// import { IoIosArrowForward } from 'react-icons/io'; // For arrow icon
// import { BsPlayCircle } from 'react-icons/bs'; // For play icon
// import { FaExchangeAlt } from 'react-icons/fa'; // Import bidirectional icon
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import img1 from "../../assets/flight3.jpg"; // Ensure the correct image path

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
//     <section className="relative bg-cover bg-center h-screen sm:h-[110vh]" style={{ backgroundImage: `url(${img1})` }}>
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center md:items-start">
//         {/* Text Section */}
//         <div className="text-white text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>
//           <h2 className="text-lg sm:text-xl font-medium flex items-center justify-center md:justify-start mb-3">
//             <span className="mr-2">🌍</span> The Best Booking System
//           </h2>
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
//             Find The Best Flight <br /> To Amazing Places
//           </h1>

//           <div className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
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

//           <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6">
//             <button className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-yellow-600 mb-4 sm:mb-0">
//               Contact Us
//             </button>
//             <button className="flex items-center justify-center text-white py-3 px-6 rounded-lg hover:underline">
//               How It Works?
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Booking Form Section */}
//       <div className="relative z-20 bg-white shadow-lg rounded-lg p-5 mb-20 max-w-7xl mx-auto flex flex-col items-center justify-center transform -translate-y-1/3 w-11/12 lg:w-4/5">
//         {/* Trip Type Buttons */}
//         <div className="flex gap-3 mb-4 justify-center md:justify-start">
//           <button
//             className={`py-2 px-4 rounded-lg font-semibold ${tripType === 'oneWay' ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => handleTripTypeChange('oneWay')}
//           >
//             One Way
//           </button>
//           <button
//             className={`py-2 px-4 rounded-lg font-semibold ${tripType === 'roundTrip' ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => handleTripTypeChange('roundTrip')}
//           >
//             Round Trip
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6 w-full">
//           {/* From and To Inputs */}
//           <div className="flex flex-1 gap-4 items-center border border-gray-300 rounded-xl p-5">
//             <div className="flex flex-col w-full">
//               <h1 className="text-lg font-semibold">From</h1>
//               <input
//                 name="from"
//                 type="text"
//                 placeholder="Delhi"
//                 className="mt-2 text-2xl outline-none w-full border-b border-gray-300"
//               />
//             </div>

//             {/* Bidirectional Icon */}
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

//           {/* Departure Date Input */}
//           <div className="flex flex-col flex-1 border border-gray-300 rounded-xl p-5">
//             <h1 className="text-lg font-semibold">Departure Date</h1>
//             <input
//               name="departDate"
//               type="date"
//               className="mt-2 text-2xl outline-none border-b border-gray-300"
//             />
//           </div>

//           {/* Return Date (if Round Trip) */}
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

//           {/* Flight Type Dropdown */}
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
//           className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-10 rounded-lg"
//           onClick={navToSearchPage}
//         >
//           Search Flights
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;
