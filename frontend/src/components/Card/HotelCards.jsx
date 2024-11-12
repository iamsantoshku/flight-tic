



// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { HiLocationMarker } from "react-icons/hi";

// const HotelCards = (props) => {
//   return (
//     <div className="w-[370px] rounded-[30px] overflow-hidden border-[1px] border-gray-300 pb-0 h-full gap-1 flex">
//       <div className="relative rounded-[30px] overflow-hidden">
//         <img
//           src={props.data.imageUrl}
//           alt="Hotel"
//           className="w-[470px] h-[220px] object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default HotelCards;


import React from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const HotelCards = (props) => {
  return (
    <div className="w-[440px] rounded-[30px] overflow-hidden border-[1px] border-gray-300 pb-0 h-full gap-1 flex">
      <div className="relative rounded-[30px] overflow-hidden">
        <img
          src={props.data.imageUrl}
          alt="Hotel"
          className="w-[440px] h-[250px] object-cover"
        />
      </div>
    </div>
  );
};

export default HotelCards;
