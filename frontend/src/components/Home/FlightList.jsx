// import React, { useRef } from "react";
// import TopFlight from "../Card/TopFlight"; // Import the correct TopFlight component
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

// import "swiper/css";
// import "swiper/css/navigation"; // Import swiper navigation styles

// import { flightLocationData } from "../../assets/data/FlightData2";
// // flightLocationData
// const FlightList = () => {
//     const swiperRef = useRef(null);

//     const goNext = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slideNext();
//         }
//     };

//     const goPrev = () => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slidePrev();
//         }
//     };

//     return (
//         <div className="mt-[9vw] max-w-[1400px] mx-auto relative">
//             <div className="mb-5 flex justify-between items-center">
//                 <div className="flex flex-col">
//                 <h1 className="text-[35px] md:text-[50px] font-bold">
//                     {/* Choose your tour! */}
//                     Flight Offer Deals
                    
//                 </h1>
//                 <h1 className="text-[25px]  text-gray-500 md:text-[25px] font-semibold">
//                     {/* Choose your tour! */}
//                     Competitive fares for your route-specific searches.
                    
//                 </h1>

//                 </div>            

//                 {/* Navigation Arrows (Top Right Positioning) */}
//                 <div className="flex space-x-2">
//                     <div
//                         className="w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-prev"
//                         onClick={goPrev}
//                     >
//                         <HiOutlineArrowSmLeft size={25} />
//                     </div>
//                     <div
//                         className="w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next"
//                         onClick={goNext}
//                     >
//                         <HiOutlineArrowSmRight size={25} />
//                     </div>
//                 </div>
//             </div>

//             <Swiper
//                 ref={swiperRef}
//                 modules={[Navigation]}
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 2,
//                         spaceBetween: 10,
//                     },
                   
//                 }}
//             >
//                 {flightLocationData.map((data, index) => (
//                     <SwiperSlide
//                         className="w-full flex justify-center items-center"
//                         key={index}
//                     >
//                         <TopFlight data={data} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default FlightList;






// import React, { useRef } from "react";
// import TopFlight from "../Card/TopFlight";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

// import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

// import "swiper/css";
// import "swiper/css/navigation"; // Import Swiper navigation styles

// import { flightLocationData } from "../../assets/data/FlightData2";

// const FlightList = () => {
//   const swiperRef = useRef(null);

//   const goNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   const goPrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <div className="mt-[9vw] max-w-[1400px] mx-auto relative">
//       <div className="mb-5 flex justify-between items-center">
//         <div className="flex flex-col">
//           <h1 className="text-[35px] md:text-[50px] font-bold">
//             Flight Offer Deals
//           </h1>
//           <h1 className="text-[25px] text-gray-500 md:text-[25px] font-semibold">
//             Competitive fares for your route-specific searches.
//           </h1>
//         </div>

//         {/* Navigation Arrows (Top Right Positioning) */}
//         <div className="flex space-x-2">
//           <div
//             className="w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-prev"
//             onClick={goPrev}
//           >
//             {/* <HiOutlineArrowSmLeft size={25} /> */}
//           </div>
//           <div
//             className="w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next"
//             onClick={goNext}
//           >
//             {/* <HiOutlineArrowSmRight size={25} /> */}
//           </div>
//         </div>
//       </div>

//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation, Autoplay]} // Include Autoplay in modules
//         slidesPerView={1}
//         spaceBetween={10}
//         autoplay={{
//           delay: 3000, // Time delay between slides (in milliseconds)
//           disableOnInteraction: false, // Keep autoplay active even after user interaction
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//         }}
//       >
//         {flightLocationData.map((data, index) => (
//           <SwiperSlide
//             className="w-full flex justify-center items-center"
//             key={index}
//           >
//             <TopFlight data={data} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FlightList;




import React, { useRef } from "react";
import TopFlight from "../Card/TopFlight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import only Autoplay module

import "swiper/css";

import { flightLocationData } from "../../assets/data/FlightData2";

const FlightList = () => {
  const swiperRef = useRef(null);

  return (
    <div className="mt-[9vw] max-w-[1400px] mx-auto relative">
      <div className="mb-5">
        <div className="flex flex-col">
          <h1 className="text-[35px] md:text-[50px] font-bold">
          <span className="text-red-500">🔥</span>
            Flight Offer Deals
          </h1>
          <h1 className="text-[25px] text-gray-500 md:text-[25px] font-semibold ml-2">
            Competitive fares for your route-specific searches.
          </h1>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Autoplay]} // Include only Autoplay module
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000, // Time delay between slides (in milliseconds)
          disableOnInteraction: false, // Keep autoplay active even after user interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {flightLocationData.map((data, index) => (
          <SwiperSlide
            className="w-full flex justify-center items-center"
            key={index}
          >
            <TopFlight data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlightList;
