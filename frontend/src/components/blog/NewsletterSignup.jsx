// import React from 'react';
// import { FaEnvelope } from 'react-icons/fa';
// import bannerdet from "../../assets/img/blog/banner-detail3.png"

// const NewsletterSignup = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-6 md:p-12 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6 mt-[5vw]">
//       {/* Left Section */}
//       <div className="flex flex-col space-y-4 max-w-md">
//         <div className="flex items-center space-x-2">
//           <FaEnvelope className="text-yellow-500 text-xl" />
//           <span className="text-l font-semibold bg-yellow-300 text-black px-3 py-1 rounded-lg">
//             Join our newsletter
//           </span>
//         </div>
//         <h2 className="text-3xl font-bold text-gray-800">
//           Subscribe to see secret deals <br />
//           prices drop the moment you sign up!
//         </h2>
//         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
//           />
//           <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
//             Subscribe
//           </button>
//         </div>
//         <p className="text-gray-500 text-sm">No ads. No trials. No commitments</p>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2">
//         <img
//           src={bannerdet}
//           alt="Pool Resort"
//           className="rounded-lg object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default NewsletterSignup;




// import React from 'react';
// import { FaEnvelope } from 'react-icons/fa';
// import bannerdet from "../../assets/img/blog/banner-detail3.png";

// const NewsletterSignup = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-8 md:p-16 rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6 mt-[5vw] w-[90vw] max-w-screen-lg mx-auto">
//       {/* Left Section */}
//       <div className="flex flex-col space-y-4 max-w-md">
//         <div className="flex items-center space-x-2">
//           <FaEnvelope className="text-yellow-500 text-2xl" />
//           <span className="text-lg font-semibold bg-yellow-300 text-black px-4 py-2 rounded-lg cursor-pointer">
//             Join our newsletter
//           </span>
//         </div>
//         <h2 className="text-3xl font-bold text-gray-800">
//           Subscribe to see secret deals <br />
//           prices drop the moment you sign up!
//         </h2>
//         <div className="flex items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-0">
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none"
//           />
//           <button className="bg-black text-white px-6 py-3 rounded-r-lg cursor-pointer hover:bg-gray-800 transition">
//             Subscribe
//           </button>
//         </div>
//         <p className="text-gray-500 text-sm">No ads. No trials. No commitments</p>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2">
//         <img
//           src={bannerdet}
//           alt="Pool Resort"
//           className="rounded-lg object-cover w-full h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default NewsletterSignup;




import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import bannerdet from "../../assets/img/blog/banner-detail3.png";

const NewsletterSignup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-12 md:p-20 rounded-lg shadow-lg space-y-8 md:space-y-0 md:space-x-8 mt-16 w-[95vw] max-w-screen-xl mx-auto">
      {/* Left Section */}
      <div className="flex flex-col space-y-6 max-w-lg md:max-w-none w-full md:w-1/2">
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-yellow-500 text-3xl" />
          <span className="text-xl font-semibold bg-yellow-300 text-black px-5 py-3 rounded-lg cursor-pointer">
            Join our newsletter
          </span>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          Subscribe to see secret deals <br />
          prices drop the moment you sign up!
        </h2>
        <div className="flex items-center w-full space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-grow px-6 py-4 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-black text-white px-8 py-4 rounded-r-lg cursor-pointer hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm">No ads. No trials. No commitments</p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 ">
        <img
          src={bannerdet}
          alt="Pool Resort"
          className="rounded-lg object-cover w-full h-full max-h-[400px] md:max-h-full"
        />
      </div>
    </div>
  );
};

export default NewsletterSignup;
