

// import React, { useState } from "react";
// import backimg from "../assets/banner-booking.png";

// const BookTicketBox = ({
//   formData,
//   handleFormDataChange,
//   handleFlightSearch,
// }) => {
//   const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

//   const handleTripTypeChange = (type) => {
//     setIsReturn(type === "return");
//   };

//   return (
//     <div
//     // relative bg-cover bg-center px-0 h-[125vh] sm:h-[107vh] w-full
//     // w-[100vw] h-[75vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mt-[4.8vw] -ml-[3.3vw]
//       className="w-[100vw] h-[140vh] sm:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mt-[4.8vw] -ml-[3.3vw]"
//       // back w-[100vw] relative bg-cover bg-center h-[80vh] -ml-12
//       // 
//       style={{
//         backgroundImage: `linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255,0.3)), url(${backimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         marginRight: "10vw",
//       }}
//     >
//       {/* Header Section */}
     
//       <div className="head text-center mb-5 mt-[20vw] sm:mt-[0vw]">
//         <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
//           A World Of Luxury Awaits For You
//         </h1>
//         <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
//           We Provide Our Best Facilities For You
//         </h3>
//       </div>

//       <div className="bg-white bg-opacity-90 p-5 rounded-lg shadow-lg w-[85vw]  min-h-[35vh] ">
//         <div className="flex flex-col h-full min-h-[25vh] max-h-[30vh] justify-between">
//           <div className="flex gap-5 items-center justify-start mb-3">
//             {/* One Way and Return Buttons */}
//             <button
//               className={`px-4 py-2 rounded-lg ${!isReturn ? 'bg-orange-500' : 'bg-orange-50'} hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("oneWay")}
//             >
//               One Way
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg ${isReturn ? 'bg-orange-500' : 'bg-orange-50'} hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("return")}
//             >
//               Return
//             </button>
//           </div>

//           <div className="flex justify-between gap-5 flex-wrap">
//             {/* From and To Input */}
//             <div className="flex gap-5 border-[1px] w-full xl:w-auto border-gray-300 rounded-[20px] flex-col xl:flex-row">
//               <div className="flex flex-col p-5 w-full xl:w-[280px]">
//                 <h1 className="text-lg">From</h1>
//                 <input
//                   name="from"
//                   type="text"
//                   placeholder="Delhi"
//                   value={formData.from}
//                   className="outline-none bg-gray-50 text-[20px] xl:text-[24px] w-full"
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//               <div className="flex flex-col p-5 border-t-[1px] xl:border-l-[1px] xl:border-t-0 border-gray-300 w-full xl:w-[280px]">
//                 <h1 className="text-lg">To</h1>
//                 <input
//                   name="to"
//                   type="text"
//                   value={formData.to}
//                   placeholder="Mumbai"
//                   className="outline-none bg-gray-50 text-[20px] xl:text-[24px] w-full"
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//             </div>

//             {/* Departure Date and Return Date */}
//             <div className="flex gap-5 border-[1px] w-full xl:w-auto border-gray-300 rounded-[20px] flex-col xl:flex-row">
//               <div className="flex flex-col p-5 w-full xl:w-[200px]">
//                 <h1 className="text-lg">Departure Date</h1>
//                 <input
//                   name="departDate"
//                   type="date"
//                   value={formData.departDate}
//                   className="outline-none bg-gray-50 text-[18px] sm:text-[20px] w-full"
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//               {isReturn && (
//                 <div className="flex flex-col p-5 w-full xl:w-[200px] border-t-[1px] xl:border-l-[1px] xl:border-t-0 border-gray-300">
//                   <h1 className="text-lg">Return Date</h1>
//                   <input
//                     name="returnDate"
//                     type="date"
//                     value={formData.returnDate}
//                     className="outline-none  bg-gray-50 text-[18px] sm:text-[20px] w-full"
//                     onChange={handleFormDataChange}
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Flight Type Dropdown */}
//             <div className="flex gap-5 border-[1px] w-full xl:w-[200px] border-gray-300 rounded-[20px]">
//               <div className="flex flex-col p-5 w-full">
//                 <h1 className="text-lg">Flight Type</h1>
//                 <select
//                   name="flightType"
//                   id="flightType"
//                   className="w-full text-lg  bg-gray-50 mt-3 outline-none border-none"
//                   onChange={handleFormDataChange}
//                 >
//                   <option value="Economy">Economy</option>
//                   <option value="Premium">Premium</option>
//                   <option value="Business">Business</option>
//                   <option value="First">First</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           {/* Search Flights Button */}
//           <button
//             className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-5 py-2 mt-5 rounded-xl transition duration-100 h-[3.5vw] w-[11vw]"
//             onClick={handleFlightSearch}
//           >
//             Search Flights
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookTicketBox;





// import React, { useState } from "react";
// import backimg from "../assets/banner-booking.png";

// const BookTicketBox = ({
//   formData,
//   handleFormDataChange,
//   handleFlightSearch,
// }) => {
//   const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

//   const handleTripTypeChange = (type) => {
//     setIsReturn(type === "return");
//   };

//   return (
//     <div
//       className="w-full h-[140vh] sm:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto px-4 sm:px-8"
//       style={{
//         backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5)), url(${backimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Header Section */}
//       <div className="text-center mb-8 sm:mb-12">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//           A World Of Luxury Awaits For You
//         </h1>
//         <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//           We Provide Our Best Facilities For You
//         </h3>
//       </div>

//       {/* Form Section */}
//       <div className="bg-white bg-opacity-90 p-5 rounded-lg shadow-lg w-full sm:w-[85%] lg:w-[70%] xl:w-[60%]">
//         <div className="flex flex-col space-y-5">
//           <div className="flex gap-3 sm:gap-5 items-center justify-center">
//             {/* One Way and Return Buttons */}
//             <button
//               className={`px-4 py-2 rounded-lg w-[40%] sm:w-auto ${
//                 !isReturn ? "bg-orange-500 text-white" : "bg-orange-50"
//               } hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("oneWay")}
//             >
//               One Way
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg w-[40%] sm:w-auto ${
//                 isReturn ? "bg-orange-500 text-white" : "bg-orange-50"
//               } hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("return")}
//             >
//               Return
//             </button>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* From and To Input */}
//             <div className="border border-gray-300 rounded-lg p-4">
//               <h1 className="text-lg">From</h1>
//               <input
//                 name="from"
//                 type="text"
//                 placeholder="Delhi"
//                 value={formData.from}
//                 className="outline-none bg-gray-50 text-lg w-full mt-2"
//                 onChange={handleFormDataChange}
//               />
//             </div>
//             <div className="border border-gray-300 rounded-lg p-4">
//               <h1 className="text-lg">To</h1>
//               <input
//                 name="to"
//                 type="text"
//                 value={formData.to}
//                 placeholder="Mumbai"
//                 className="outline-none bg-gray-50 text-lg w-full mt-2"
//                 onChange={handleFormDataChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {/* Departure Date and Return Date */}
//             <div className="border border-gray-300 rounded-lg p-4">
//               <h1 className="text-lg">Departure Date</h1>
//               <input
//                 name="departDate"
//                 type="date"
//                 value={formData.departDate}
//                 className="outline-none bg-gray-50 text-lg w-full mt-2"
//                 onChange={handleFormDataChange}
//               />
//             </div>
//             {isReturn && (
//               <div className="border border-gray-300 rounded-lg p-4">
//                 <h1 className="text-lg">Return Date</h1>
//                 <input
//                   name="returnDate"
//                   type="date"
//                   value={formData.returnDate}
//                   className="outline-none bg-gray-50 text-lg w-full mt-2"
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//             )}
//           </div>

//           <div className="border border-gray-300 rounded-lg p-4">
//             <h1 className="text-lg">Flight Type</h1>
//             <select
//               name="flightType"
//               id="flightType"
//               className="w-full bg-gray-50 mt-3 outline-none text-lg"
//               onChange={handleFormDataChange}
//             >
//               <option value="Economy">Economy</option>
//               <option value="Premium">Premium</option>
//               <option value="Business">Business</option>
//               <option value="First">First</option>
//             </select>
//           </div>

//           <button
//             className="hover:bg-blue-800 bg-blue-500 text-white px-5 py-3 mt-5 rounded-lg w-full sm:w-auto mx-auto"
//             onClick={handleFlightSearch}
//           >
//             Search Flights
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookTicketBox;



// import React, { useState } from "react";
// import backimg from "../assets/banner-booking.png";

// const BookTicketBox = ({
//   formData,
//   handleFormDataChange,
//   handleFlightSearch,
// }) => {
//   const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

//   const handleTripTypeChange = (type) => {
//     setIsReturn(type === "return");
//   };

//   return (
//     <div
//       className="w-full h-[160vh] sm:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mt-[4.8vw]"
//       style={{
//         backgroundImage: `linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255,0.3)), url(${backimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         marginRight: "10vw",
//       }}
//     >
//       {/* Header Section */}
//       <div className="head text-center mb-5 -mt-[10vw] sm:mt-[0vw]">
//         <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
//           A World Of Luxury Awaits For You
//         </h1>
//         <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
//           We Provide Our Best Facilities For You
//         </h3>
//       </div>

//       <div className="bg-white bg-opacity-90 p-7 rounded-lg shadow-lg w-[85vw]">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 flex-wrap">
//           {/* One Way and Return Buttons */}
//           <div className="flex gap-2 mb-4 lg:mb-0">
//             <button
//               className={`px-4 py-2 rounded-lg ${
//                 !isReturn ? "bg-orange-500" : "bg-orange-50"
//               } hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("oneWay")}
//             >
//               One Way
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg ${
//                 isReturn ? "bg-orange-500" : "bg-orange-50"
//               } hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("return")}
//             >
//               Return
//             </button>
//           </div>

//           {/* Input fields in one row for larger screens */}
//           <div className="flex flex-col lg:flex-row gap-4 flex-wrap items-center w-full">
//             {/* From Input */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">From</label>
//               <input
//                 name="from"
//                 type="text"
//                 placeholder="Delhi"
//                 value={formData.from}
//                 className="outline-none bg-gray-50 text-[20px] w-full"
//                 onChange={handleFormDataChange}
//               />
//             </div>

//             {/* To Input */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">To</label>
//               <input
//                 name="to"
//                 type="text"
//                 placeholder="Mumbai"
//                 value={formData.to}
//                 className="outline-none bg-gray-50 text-[20px] w-full"
//                 onChange={handleFormDataChange}
//               />
//             </div>

//             {/* Departure Date */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">Departure Date</label>
//               <input
//                 name="departDate"
//                 type="date"
//                 value={formData.departDate}
//                 className="outline-none bg-gray-50 text-[18px] w-full"
//                 onChange={handleFormDataChange}
//               />
//             </div>

//             {/* Return Date */}
//             {isReturn && (
//               <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//                 <label className="text-lg">Return Date</label>
//                 <input
//                   name="returnDate"
//                   type="date"
//                   value={formData.returnDate}
//                   className="outline-none bg-gray-50 text-[18px] w-full"
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//             )}

//             {/* Flight Type */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">Flight Type</label>
//               <select
//                 name="flightType"
//                 className="w-full text-lg bg-gray-50 mt-3 outline-none"
//                 value={formData.flightType}
//                 onChange={handleFormDataChange}
//               >
//                 <option value="Economy">Economy</option>
//                 <option value="Premium">Premium</option>
//                 <option value="Business">Business</option>
//                 <option value="First">First</option>
//               </select>
//             </div>

           
//             <div>
//   <button
//     className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-6 py-4 mt-2 lg:mt-0 rounded-full transition duration-100 
//                text-sm md:text-base lg:text-lg 
//                h-auto  w-full sm:w-[250px] md:w-[250px] lg:w-[160px]"
//     onClick={handleFlightSearch}
//   >
//     Search Flights
//   </button>
// </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookTicketBox;



// import React, { useState } from "react";
// import backimg from "../assets/banner-booking.png";

// const BookTicketBox = ({
//   formData,
//   handleFormDataChange,
//   handleFlightSearch,
// }) => {
//   const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

//   const handleTripTypeChange = (type) => {
//     setIsReturn(type === "return");
//   };

//   return (
//     <div
//       className="w-full h-[160vh] sm:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mt-[4.8vw]"
//       style={{
//         backgroundImage: `linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255,0.3)), url(${backimg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         marginRight: "10vw",
//       }}
//     >
//       {/* Header Section */}
//       <div className="head text-center mb-5 -mt-[10vw] sm:mt-[0vw]">
//         <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
//           A World Of Luxury Awaits For You
//         </h1>
//         <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
//           We Provide Our Best Facilities For You
//         </h3>
//       </div>

//       <div className="bg-white bg-opacity-90 p-3 pb-10 rounded-lg shadow-lg w-[85vw]">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 flex-wrap">
//           {/* One Way and Return Buttons */}
//           <div className="flex gap-2 mb-4 lg:mb-0">
//             <button
//               className={`px-4 py-2 rounded-lg ${
//                 !isReturn ? "bg-orange-500" : "bg-orange-50"
//               } hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("oneWay")}
//             >
//               One Way
//             </button>
//             <button
//               className={`px-4 py-2 rounded-lg ${
//                 isReturn ? "bg-orange-500" : "bg-orange-50"
//               } hover:bg-orange-300`}
//               onClick={() => handleTripTypeChange("return")}
//             >
//               Return
//             </button>
//           </div>

//           {/* Input fields in one row for larger screens */}
//           <div className="flex flex-col lg:flex-row lg:gap-2 lg:items-center w-full flex-wrap">
//             {/* From Input */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">From</label>
//               <input
//                 name="from"
//                 type="text"
//                 placeholder="Delhi"
//                 value={formData.from}
//                 className="outline-none bg-gray-50 text-[20px] w-full"
//                 onChange={handleFormDataChange}
//               />
//             </div>

//             {/* To Input */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">To</label>
//               <input
//                 name="to"
//                 type="text"
//                 placeholder="Mumbai"
//                 value={formData.to}
//                 className="outline-none bg-gray-50 text-[20px] w-full"
//                 onChange={handleFormDataChange}
//               />
//             </div>

//             {/* Departure Date */}
//             <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">Departure Date</label>
//               <input
//                 name="departDate"
//                 type="date"
//                 value={formData.departDate}
//                 className="outline-none bg-gray-50 text-[18px] w-full"
//                 onChange={handleFormDataChange}
//               />
//             </div>

//             {/* Return Date */}
//             {isReturn && (
//               <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//                 <label className="text-lg">Return Date</label>
//                 <input
//                   name="returnDate"
//                   type="date"
//                   value={formData.returnDate}
//                   className="outline-none bg-gray-50 text-[18px] w-full"
//                   onChange={handleFormDataChange}
//                 />
//               </div>
//             )}

//             {/* Flight Type */}
//             <div className="flex flex-col p-3 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto">
//               <label className="text-lg">Flight Type</label>
//               <select
//                 name="flightType"
//                 className="w-full text-lg bg-gray-50 mt-3 outline-none"
//                 value={formData.flightType}
//                 onChange={handleFormDataChange}
//               >
//                 <option value="Economy">Economy</option>
//                 <option value="Premium">Premium</option>
//                 <option value="Business">Business</option>
//                 <option value="First">First</option>
//               </select>
//             </div>

//             {/* Search Button */}
//             <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 w-full lg:w-auto">
//               <button
//                 className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-3 py-4 rounded-full transition duration-100 text-sm md:text-base lg:text-lg h-auto"
//                 onClick={handleFlightSearch}
//               >
//                 Search Flights
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookTicketBox;




import React, { useState } from "react";
import backimg from "../assets/banner-booking.png";

const BookTicketBox = ({
  formData,
  handleFormDataChange,
  handleFlightSearch,
}) => {
  const [isReturn, setIsReturn] = useState(true); // State to track if return is selected

  const handleTripTypeChange = (type) => {
    setIsReturn(type === "return");
  };

  return (
    <div
      className="w-full h-[160vh] sm:h-[90vh] flex flex-col items-center justify-center bg-cover bg-center mx-auto mt-[4.8vw]"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255), rgba(255, 255, 255,0.3)), url(${backimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginRight: "10vw",
      }}
    >
      {/* Header Section */}
      <div className="head text-center mb-5 -mt-[10vw] sm:mt-[0vw]">
        <h1 className="text-[8vw] sm:text-[35px] md:text-[50px] font-bold text-gray-900 mb-1">
          A World Of Luxury Awaits For You
        </h1>
        <h3 className="text-[4vw] sm:text-[20px] md:text-[25px] font-semibold text-gray-900">
          We Provide Our Best Facilities For You
        </h3>
      </div>

      <div className="bg-white bg-opacity-90 p-5 pb-10 rounded-lg shadow-lg w-[90vw] md:w-[85vw] lg:w-[85vw]">
        {/* Buttons for One Way and Return */}
        <div className="flex gap-2 mb-5 justify-center">
          <button
            className={`px-4 py-2 rounded-lg ${
              !isReturn ? "bg-orange-500" : "bg-orange-50"
            } hover:bg-orange-300`}
            onClick={() => handleTripTypeChange("oneWay")}
          >
            One Way
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              isReturn ? "bg-orange-500" : "bg-orange-50"
            } hover:bg-orange-300`}
            onClick={() => handleTripTypeChange("return")}
          >
            Return
          </button>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 flex-wrap">
          {/* From Input */}
          <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto lg:flex-[2]">
            <label className="text-lg">From</label>
            <input
              name="from"
              type="text"
              placeholder="Delhi"
              value={formData.from}
              className="outline-none bg-gray-50 text-[20px] w-full"
              onChange={handleFormDataChange}
            />
          </div>

          {/* To Input */}
          <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto lg:flex-[2]">
            <label className="text-lg">To</label>
            <input
              name="to"
              type="text"
              placeholder="Mumbai"
              value={formData.to}
              className="outline-none bg-gray-50 text-[20px] w-full"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Departure Date */}
          <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto lg:flex-1">
            <label className="text-lg">Departure Date</label>
            <input
              name="departDate"
              type="date"
              value={formData.departDate}
              className="outline-none bg-gray-50 text-[18px] w-full"
              onChange={handleFormDataChange}
            />
          </div>

          {/* Return Date */}
          {isReturn && (
            <div className="flex flex-col p-4 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto lg:flex-1">
              <label className="text-lg">Return Date</label>
              <input
                name="returnDate"
                type="date"
                value={formData.returnDate}
                className="outline-none bg-gray-50 text-[18px] w-full"
                onChange={handleFormDataChange}
              />
            </div>
          )}

          {/* Flight Type */}
          <div className="flex flex-col p-3 border-[1px] border-gray-300 rounded-lg w-full lg:w-auto lg:flex-1">
            <label className="text-lg">Flight Type</label>
            <select
              name="flightType"
              className="w-full text-lg bg-gray-50 mt-3 outline-none"
              value={formData.flightType}
              onChange={handleFormDataChange}
            >
              <option value="Economy">Economy</option>
              <option value="Premium">Premium</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 w-full lg:w-auto">
            <button
              className="hover:bg-[#1E293B] bg-[#bebebe] text-black hover:text-white px-6 py-5 rounded-full transition duration-100 text-sm md:text-base lg:text-lg h-auto"
              onClick={handleFlightSearch}
            >
              Search Flights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketBox;
