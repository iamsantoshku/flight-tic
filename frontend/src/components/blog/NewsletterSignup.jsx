



// import React from "react";
// import { FaEnvelope } from "react-icons/fa";
// import bannerdet from "../../assets/img/blog/banner-detail3.png";

// const NewsletterSignup = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-between bg-blue-50 p-8 lg:p-16 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8 mt-10 w-[95vw] max-w-screen-xl mx-auto">
//       {/* Left Section */}
//       <div className="flex flex-col space-y-6 max-w-lg lg:max-w-none w-full lg:w-1/2">
//         <div className="flex items-center space-x-3">
//           <FaEnvelope className="text-yellow-500 text-3xl" />
//           <span className="text-lg lg:text-xl font-semibold bg-yellow-300 text-black px-4 py-2 lg:px-5 lg:py-3 rounded-lg cursor-pointer">
//             Join our newsletter
//           </span>
//         </div>
//         <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-snug lg:leading-tight">
//           Subscribe to see secret deals <br />
//           Prices drop the moment you sign up!
//         </h2>
//         <div className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0">
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="flex-grow px-4 lg:px-6 py-3 lg:py-4 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none"
//           />
//           <button className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-b-lg md:rounded-r-lg md:rounded-b-none cursor-pointer hover:bg-gray-800 transition">
//             Subscribe
//           </button>
//         </div>
//         <p className="text-gray-500 text-xs lg:text-sm">
//           No ads. No trials. No commitments.
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2">
//         <img
//           src={bannerdet}
//           alt="Pool Resort"
//           className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-full max-h-[400px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default NewsletterSignup;



import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerdet from "../../assets/img/blog/banner-detail3.png";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const NewsletterSignup = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center justify-between bg-blue-50 p-8 lg:p-16 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8 mt-10 w-[95vw] max-w-screen-xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      {/* Left Section */}
      <motion.div
        className="flex flex-col space-y-6 max-w-lg lg:max-w-none w-full lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-yellow-500 text-3xl" />
          <span className="text-lg lg:text-xl font-semibold bg-yellow-300 text-black px-4 py-2 lg:px-5 lg:py-3 rounded-lg cursor-pointer">
            Join our newsletter
          </span>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-snug lg:leading-tight">
          Subscribe to see secret deals <br />
          Prices drop the moment you sign up!
        </h2>
        <div className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Your Email"
            className="flex-grow px-4 lg:px-6 py-3 lg:py-4 border border-gray-300 rounded-t-lg md:rounded-l-lg md:rounded-t-none focus:outline-none"
          />
          <button className="bg-black text-white px-6 lg:px-8 py-3 lg:py-4 rounded-b-lg md:rounded-r-lg md:rounded-b-none cursor-pointer hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-xs lg:text-sm">
          No ads. No trials. No commitments.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariants}
      >
        <img
          src={bannerdet}
          alt="Pool Resort"
          className="rounded-lg object-cover w-full h-64 sm:h-80 lg:h-full max-h-[400px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default NewsletterSignup;
