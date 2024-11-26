// import React from "react";
// import { FaStar, FaShieldAlt, FaClock, FaGlobe } from "react-icons/fa";
// import banner from "../../assets/banner.png"

// const AdventureSection = () => {
//   return (
//     <div className="bg-yellow-100 py-10 px-6 lg:px-16">
//       {/* Top Section with Video */}
//       <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
//         {/* Video Section */}
//         <div className="relative w-full lg:w-1/2">
//           <img
//             src={banner} // Replace with your video thumbnail
//             alt="Video Thumbnail"
//             className="rounded-lg w-full"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <button className="bg-white text-black rounded-full p-4 shadow-lg">
//               <svg
//                 xmlns="https://www.youtube.com/watch?v=JXMWOmuR1hU"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-8 h-8"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 12l-6.5 4.75V7.25L15.75 12z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="mt-8 lg:mt-0 lg:w-1/2 space-y-4 text-center lg:text-left">
//           <span className="bg-white px-4 py-2 text-sm font-medium rounded-full shadow-md inline-block">
//             Why book at Travila?
//           </span>
//           <h2 className="text-3xl font-bold text-gray-800">
//             Embracing Adventure <br /> Since 2003
//           </h2>
//           <p className="text-gray-600">
//             Choose one style or create a package, fill your passports with
//             adventures together.
//           </p>
//           {/* Stats */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
//             <div className="text-center">
//               <p className="text-xl font-bold text-gray-800">45+</p>
//               <p className="text-gray-600">Global Branches</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-bold text-gray-800">29K</p>
//               <p className="text-gray-600">Destinations Collaboration</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-bold text-gray-800">20+</p>
//               <p className="text-gray-600">Years Experience</p>
//             </div>
//             <div className="text-center">
//               <p className="text-xl font-bold text-gray-800">168K</p>
//               <p className="text-gray-600">Happy Customers</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//         {/* Feature 1 */}
//         <div className="flex flex-col items-center bg-red-50 p-6 rounded-lg shadow">
//           <FaGlobe className="text-red-500 text-3xl mb-4" />
//           <h3 className="font-bold text-gray-800">300,000+ Experiences</h3>
//           <p className="text-sm text-gray-600">Make memories around the world.</p>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow">
//           <FaStar className="text-blue-500 text-3xl mb-4" />
//           <h3 className="font-bold text-gray-800">Trusted Reviews</h3>
//           <p className="text-sm text-gray-600">
//             4.8 stars from 160,000+ Trustpilot reviews.
//           </p>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow">
//           <FaClock className="text-green-500 text-3xl mb-4" />
//           <h3 className="font-bold text-gray-800">Reserve now, Pay later</h3>
//           <p className="text-sm text-gray-600">Book your spot first, pay later.</p>
//         </div>

//         {/* Feature 4 */}
//         <div className="flex flex-col items-center bg-purple-50 p-6 rounded-lg shadow">
//           <FaShieldAlt className="text-purple-500 text-3xl mb-4" />
//           <h3 className="font-bold text-gray-800">Security Assurance</h3>
//           <p className="text-sm text-gray-600">
//             Data security through encryption.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdventureSection;



import React, { useState } from "react";
import { FaStar, FaShieldAlt, FaClock, FaGlobe } from "react-icons/fa";
import banner from "../../assets/banner.png";

const AdventureSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="bg-yellow-100 py-10 px-6 lg:px-16 mt-10">
      {/* Top Section with Video */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Video Section */}
        <div className="relative w-full lg:w-1/2">
          {/* Thumbnail */}
          {!isVideoOpen ? (
            <div>
              <img
                src={banner}
                alt="Video Thumbnail"
                className="rounded-lg w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white text-black rounded-full p-4 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 12l-6.5 4.75V7.25L15.75 12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <iframe
              className="rounded-lg w-full aspect-video"
              src="https://www.youtube.com/embed/JXMWOmuR1hU"
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 lg:w-1/2 space-y-4 text-center lg:text-left">
          <span className="bg-white px-4 py-2 text-sm font-medium rounded-full shadow-md inline-block">
            Why book at Flyibi?
          </span>
          <h2 className="text-3xl font-bold text-gray-800">
            Embracing Adventure <br /> Since 2024
          </h2>
          <p className="text-gray-600">
            Choose one style or create a package, fill your passports with
            adventures together.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">45+</p>
              <p className="text-gray-600">Global Branches</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">29K</p>
              <p className="text-gray-600">Destinations Collaboration</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">20+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-gray-800">168K</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {/* Feature 1 */}
        <div className="flex flex-col items-center bg-red-50 p-6 rounded-lg shadow">
          <FaGlobe className="text-red-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">300,000+ Experiences</h3>
          <p className="text-sm text-gray-600">Make memories around the world.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow">
          <FaStar className="text-blue-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">Trusted Reviews</h3>
          <p className="text-sm text-gray-600">
            4.8 stars from 160,000+ Trustpilot reviews.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center bg-green-50 p-6 rounded-lg shadow">
          <FaClock className="text-green-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">Reserve now, Pay later</h3>
          <p className="text-sm text-gray-600">Book your spot first, pay later.</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center bg-purple-50 p-6 rounded-lg shadow">
          <FaShieldAlt className="text-purple-500 text-3xl mb-4" />
          <h3 className="font-bold text-gray-800">Security Assurance</h3>
          <p className="text-sm text-gray-600">
            Data security through encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdventureSection;
