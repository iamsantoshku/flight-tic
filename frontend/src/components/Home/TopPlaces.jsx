



import React, { useRef } from "react";
import HotelCards from "../Card/HotelCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import "swiper/css";
import "swiper/css/navigation";

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
    <div className="mt-[7vw] max-w-[1400px] mx-auto relative">
      <div className="mb-5">
        <h1 className="text-[35px] md:text-[50px] font-bold">
          {/* Choose your tour! */}
        </h1>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        spaceBetween={0} // Reduce space to zero to minimize gaps
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 2, // Minimal space on smaller screens
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5, // Minimal space on larger screens
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
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-5 z-10">
          {/* Left Arrow */}
          <div
            className="mr-[2vw] w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-200 text-gray-400 hover:text-black cursor-pointer transition duration-200"
            onClick={goPrev}
          >
            <HiOutlineArrowSmLeft size={25} />
          </div>

          {/* Right Arrow */}
          <div
            className="ml-[2vw] w-[40px] h-[40px] flex justify-center items-center rounded-full bg-gray-200 text-gray-400 hover:text-black cursor-pointer transition duration-200"
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



// import React, { useRef } from "react";
// import HotelCards from "../Card/HotelCards";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

// import "swiper/css";
// import "swiper/css/navigation";

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
//     <div className="mt-10 max-w-[95%] lg:max-w-[1400px] mx-auto relative">
//       <div className="mb-5 text-center lg:text-left">
//         <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
//           Choose your tour!
//         </h1>
//       </div>

//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation, Autoplay]}
//         slidesPerView={1}
//         spaceBetween={10}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 15,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 25,
//           },
//         }}
//       >
//         {flightLocationData.map((data, index) => (
//           <SwiperSlide
//             className="flex justify-center items-center"
//             key={index}
//           >
//             <HotelCards data={data} />
//           </SwiperSlide>
//         ))}

//         {/* Navigation Arrows */}
//         <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-5 z-10">
//           {/* Left Arrow */}
//           <div
//             className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center rounded-full bg-gray-200 text-gray-400 hover:text-black cursor-pointer transition duration-200"
//             onClick={goPrev}
//           >
//             <HiOutlineArrowSmLeft size={20} className="lg:size-25" />
//           </div>

//           {/* Right Arrow */}
//           <div
//             className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center rounded-full bg-gray-200 text-gray-400 hover:text-black cursor-pointer transition duration-200"
//             onClick={goNext}
//           >
//             <HiOutlineArrowSmRight size={20} className="lg:size-25" />
//           </div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default TopPlaces;
