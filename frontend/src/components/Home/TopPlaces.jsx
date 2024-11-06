// import React, { useRef } from "react";
// import HotelCards from "../Card/HotelCards";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

// import "swiper/css";

// import { flightLocationData } from "../../assets/data/FlightData";

// const TopPlaces = () => {
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
//     <div className="mt-5 max-w-[1400px] mx-auto">
//       <div className="mb-5">
//         <h1 className="text-[35px] md:text-[50px] font-bold">
//           Choose your tour!
//         </h1>
//       </div>

//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         slidesPerView={1}
//         spaceBetween={10}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 60,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 70,
//           },
//         }}
//       >
//         {flightLocationData.map((data, index) => (
//           <SwiperSlide
//             className="w-full flex justify-center items-center"
//             key={index}
//           >
//             <HotelCards data={data} />
//           </SwiperSlide>
//         ))}
//         <div className="flex gap-2 my-5">
//           <div
//             className="w-[45px] h-[45px] border-[1px] border-black flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-prev"
//             onClick={goPrev}
//           >
//             <HiOutlineArrowSmLeft size={25} />
//           </div>
//           <div
//             className="w-[45px] h-[45px] border-[1px] border-black flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next"
//             onClick={goNext}
//           >
//             <HiOutlineArrowSmRight size={25} />
//           </div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default TopPlaces;




// import React, { useRef } from "react";
// import HotelCards from "../Card/HotelCards";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

// import "swiper/css";
// import "swiper/css/navigation"; // Import swiper navigation styles

// import { flightLocationData } from "../../assets/data/FlightData";

// const TopPlaces = () => {
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
//       <div className="mb-5">
//         <h1 className="text-[35px] md:text-[50px] font-bold">
//           {/* Choose your tour! */}
//         </h1>
//       </div>

//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         slidesPerView={1}
//         spaceBetween={10}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 60,
//           },
//         }}
//       >
//         {flightLocationData.map((data, index) => (
//           <SwiperSlide
//             className="w-full flex justify-center items-center"
//             key={index}
//           >
//             <HotelCards data={data} />
//           </SwiperSlide>
//         ))}

//         {/* Navigation Arrows */}
//         <div className="absolute inset-0 flex justify-between items-center z-2">
//           {/* Left Arrow */}
//           <div
//             className="w-[35px] h-[35px]  flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-prev left-1"
//             onClick={goPrev}
//           >
//             <HiOutlineArrowSmLeft size={25} />
//           </div>

//           {/* Right Arrow */}
//           <div
//             className="w-[35px] h-[35px]  flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next right-1"
//             onClick={goNext}
//           >
//             <HiOutlineArrowSmRight size={25} />
//           </div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default TopPlaces;






import React, { useRef } from "react";
import HotelCards from "../Card/HotelCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module

import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles

import { flightLocationData } from "../../assets/data/FlightData";

const TopPlaces = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="mt-[9vw] max-w-[1400px] mx-auto relative">
      <div className="mb-5">
        <h1 className="text-[35px] md:text-[50px] font-bold">
          {/* Choose your tour! */}
        </h1>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]} // Include Autoplay module
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // Autoplay continues after interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
      >
        {flightLocationData.map((data, index) => (
          <SwiperSlide
            className="w-full flex justify-center items-center"
            key={index}
          >
            <HotelCards data={data} />
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex justify-between items-center z-2">
          {/* Left Arrow */}
          <div
            className="w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-prev left-1"
            onClick={goPrev}
          >
            <HiOutlineArrowSmLeft size={25} />
          </div>

          {/* Right Arrow */}
          <div
            className="w-[35px] h-[35px] flex justify-center items-center rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200 swiper-button-next right-1"
            onClick={goNext}
          >
            <HiOutlineArrowSmRight size={25} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TopPlaces;

