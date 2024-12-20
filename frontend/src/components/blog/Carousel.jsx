// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import img1 from "../../assets/img/blog/recent.png"
// import img2 from "../../assets/img/blog/recent2.png"
// import img3 from "../../assets/img/blog/recent3.png"
// import img4 from "../../assets/img/blog/recent4.png"
// import img5 from "../../assets/img/blog/recent5.png"
// import img6 from "../../assets/img/blog/recent6.png"


// const images = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Show 3 images at a time
//   const visibleImages = images.slice(currentIndex, currentIndex + 3);

//   // Handle next and previous buttons
//   const nextImageSet = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 3 >= images.length ? 0 : prevIndex + 3
//     );
//   };

//   const prevImageSet = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
//     );
//   };

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImageSet();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="mb-8 mt-14 ml-20">
//       <h2 className="text-4xl font-bold mb-2">Picked by Editors</h2>
//       <p className="text-gray-500 mb-6">Favorite destinations based on customer reviews</p>
//       <div className="flex items-center justify-between">
//         <div className="flex space-x-4">
//           {visibleImages.map((img, index) => (
//             <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//               <img src={img} alt={`Inspiration ${index + 1}`} className="w-full h-64 object-cover" />
//               <div className="p-4">
//                 <span className="bg-white text-gray-800 px-2 py-1 rounded-full">Category</span>
//                 <h3 className="font-semibold text-lg mt-2">Post Title</h3>
//                 <p className="text-gray-600 mt-1">18 Sep 2024 • 6 mins • 38 comments</p>
//                 <p className="text-gray-500 mt-2">Short description about the post goes here.</p>
//                 <div className="flex items-center mt-4">
//                   <img src="author-image.jpg" alt="Author" className="w-8 h-8 rounded-full" /> {/* Replace with author image */}
//                   <span className="ml-2 text-gray-800">Jimmy Dave</span>
//                 </div>
//                 <button className="mt-4 text-blue-500 font-semibold">Keep Reading</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation buttons */}
//         <div className="space-x-2 ml-auto">
//           <button className="p-2 bg-gray-200 rounded-full" onClick={prevImageSet}>
//             <FaArrowLeft />
//           </button>
//           <button className="p-2 bg-gray-200 rounded-full" onClick={nextImageSet}>
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Carousel;




// import React, { useState, useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import img1 from "../../assets/img/blog/recent.png";
// import img2 from "../../assets/img/blog/recent2.png";
// import img3 from "../../assets/img/blog/recent3.png";
// import img4 from "../../assets/img/blog/recent4.png";
// import img5 from "../../assets/img/blog/recent5.png";
// import img6 from "../../assets/img/blog/recent6.png";
// import bgImage from '../../assets/light pink background.jpeg'; // Replace with your background image path

// const images = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6
// ];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Show 3 images at a time
//   const visibleImages = images.slice(currentIndex, currentIndex + 3);

//   // Handle next and previous buttons
//   const nextImageSet = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 3 >= images.length ? 0 : prevIndex + 3
//     );
//   };

//   const prevImageSet = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
//     );
//   };

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImageSet();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="w-[96vw] h-[50vw] bg-cover bg-center flex items-center justify-center mt-[5vw] rounded-xl"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <section className="mb-8 mt-14 ">
//         <div className="view flex">
//           <div className="head1">
//             <h2 className="text-6xl font-bold mb-2 text-black">Picked by Editors</h2>
//             <p className="text-gray-500 text-2xl mb-6">Favorite destinations based on customer reviews</p>

//           </div>
//           <div className="flex justify-center mt-8">
//             <button className="bg-black rounded-full text-white px-4 py-2  hover:bg-gray-700 transition duration-300 w-[12vw] h-[3vw] ml-[32vw]">
//               View More
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-between mt-[3vw]">
//           <div className="flex space-x-6">
//             {visibleImages.map((img, index) => (
//               <div key={index} className="rounded-2xl w-[25vw] overflow-hidden shadow-lg">
//                 <img src={img} alt={`Inspiration ${index + 1}`} className="w-full h-64 object-cover" />
//                 <div className="p-4 bg-white">
//                   <span className="bg-gray-800 text-white px-2 py-1 rounded-full">Category</span>
//                   <h3 className="font-semibold text-lg mt-2">Post Title</h3>
//                   <p className="text-gray-600 mt-1">18 Sep 2024 • 6 mins • 38 comments</p>
//                   <p className="text-gray-500 mt-2">Short description about the post goes here.</p>
//                   <div className="flex items-center mt-4">
//                     <img src="author-image.jpg" alt="Author" className="w-8 h-8 rounded-full" /> {/* Replace with author image */}
//                     <span className="ml-2 text-gray-800">Jimmy Dave</span>
//                   </div>
//                   <button className="mt-4 text-blue-500 font-semibold">Keep Reading</button>
//                 </div>
//               </div>
//             ))}
//           </div>

         
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Carousel;




// import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import img1 from "../../assets/img/blog/recent.png";
// import img2 from "../../assets/img/blog/recent2.png";
// import img3 from "../../assets/img/blog/recent3.png";
// import img4 from "../../assets/img/blog/recent4.png";
// import img5 from "../../assets/img/blog/recent5.png";
// import img6 from "../../assets/img/blog/recent6.png";
// import bgImage from "../../assets/light pink background.jpeg"; // Replace with your background image path

// const images = [img1, img2, img3, img4, img5, img6];

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Show 3 images at a time
//   const visibleImages = images.slice(currentIndex, currentIndex + 3);

//   // Handle next and previous buttons
//   const nextImageSet = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 3 >= images.length ? 0 : prevIndex + 3
//     );
//   };

//   const prevImageSet = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
//     );
//   };

//   // Auto slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextImageSet();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="w-full bg-cover bg-center flex items-center justify-center mt-10 rounded-xl p-4"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <section className="w-full max-w-6xl">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl lg:text-6xl font-bold mb-2 text-black">
//             Picked by Editors
//           </h2>
//           <p className="text-gray-500 text-lg lg:text-2xl mb-6">
//             Favorite destinations based on customer reviews
//           </p>
//           <button className="bg-black rounded-full text-white px-6 py-3 hover:bg-gray-700 transition duration-300">
//             View More
//           </button>
//         </div>

//         <div className="relative">
//           <div className="flex items-center justify-between space-x-4 overflow-x-auto scrollbar-hide">
//             {visibleImages.map((img, index) => (
//               <div
//                 key={index}
//                 className="flex-none w-60 md:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-lg"
//               >
//                 <img
//                   src={img}
//                   alt={`Inspiration ${index + 1}`}
//                   className="w-full h-40 md:h-52 lg:h-64 object-cover"
//                 />
//                 <div className="p-4 bg-white">
//                   <span className="bg-gray-800 text-white px-2 py-1 rounded-full">
//                     Category
//                   </span>
//                   <h3 className="font-semibold text-lg mt-2">Post Title</h3>
//                   <p className="text-gray-600 mt-1">
//                     18 Sep 2024 • 6 mins • 38 comments
//                   </p>
//                   <p className="text-gray-500 mt-2">
//                     Short description about the post goes here.
//                   </p>
//                   <div className="flex items-center mt-4">
//                     <img
//                       src="author-image.jpg"
//                       alt="Author"
//                       className="w-8 h-8 rounded-full"
//                     />{" "}
//                     {/* Replace with author image */}
//                     <span className="ml-2 text-gray-800">Jimmy Dave</span>
//                   </div>
//                   <button className="mt-4 text-blue-500 font-semibold">
//                     Keep Reading
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
//             <button
//               onClick={prevImageSet}
//               className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
//             >
//               <FaArrowLeft />
//             </button>
//           </div>
//           <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
//             <button
//               onClick={nextImageSet}
//               className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Carousel;



import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import img1 from "../../assets/img/blog/recent.png";
import img2 from "../../assets/img/blog/recent2.png";
import img3 from "../../assets/img/blog/recent3.png";
import img4 from "../../assets/img/blog/recent4.png";
import img5 from "../../assets/img/blog/recent5.png";
import img6 from "../../assets/img/blog/recent6.png";
import bgImage from "../../assets/light pink background.jpeg"; // Replace with your background image path

const images = [img1, img2, img3, img4, img5, img6];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 images at a time
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  // Handle next and previous buttons
  const nextImageSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  const prevImageSet = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImageSet();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-full bg-cover bg-center flex items-center justify-center mt-10 rounded-xl p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInVariants}
    >
      <section className="w-full max-w-6xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          <h2 className="text-3xl lg:text-6xl font-bold mb-2 text-black">
            Picked by Editors
          </h2>
          <p className="text-gray-500 text-lg lg:text-2xl mb-6">
            Favorite destinations based on customer reviews
          </p>
          <button className="bg-black rounded-full text-white px-6 py-3 hover:bg-gray-700 transition duration-300">
            View More
          </button>
        </motion.div>

        {/* Image Carousel */}
        <div className="relative">
          <motion.div
            className="flex items-center justify-between space-x-4 overflow-x-auto scrollbar-hide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            {visibleImages.map((img, index) => (
              <div
                key={index}
                className="flex-none w-60 md:w-80 lg:w-96 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  alt={`Inspiration ${index + 1}`}
                  className="w-full h-40 md:h-52 lg:h-64 object-cover"
                />
                <div className="p-4 bg-white">
                  <span className="bg-gray-800 text-white px-2 py-1 rounded-full">
                    Category
                  </span>
                  <h3 className="font-semibold text-lg mt-2">Post Title</h3>
                  <p className="text-gray-600 mt-1">
                    18 Sep 2024 • 6 mins • 38 comments
                  </p>
                  <p className="text-gray-500 mt-2">
                    Short description about the post goes here.
                  </p>
                  <div className="flex items-center mt-4">
                    <img
                      src="author-image.jpg"
                      alt="Author"
                      className="w-8 h-8 rounded-full"
                    />{" "}
                    {/* Replace with author image */}
                    <span className="ml-2 text-gray-800">Jimmy Dave</span>
                  </div>
                  <button className="mt-4 text-blue-500 font-semibold">
                    Keep Reading
                  </button>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <button
              onClick={prevImageSet}
              className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <button
              onClick={nextImageSet}
              className="bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Carousel;
