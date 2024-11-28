// import React, { useState } from "react";
// import { FaEdit } from "react-icons/fa";

// const PromoComponent = () => {
//   const [promoCode, setPromoCode] = useState("RFsaJYg");
//   const [shareLink, setShareLink] = useState("https://emt.bio/RFsaJYg");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const handlePromoChange = (e) => {
//     setPromoCode(e.target.value);
//   };

//   const handleShareLinkChange = (e) => {
//     setShareLink(e.target.value);
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md p-4 sm:p-6 w-full max-w-5xl mx-auto mt-20">
//       {/* Promo Code and Share Link Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//         <div className="w-full sm:w-auto">
//           <label className="block text-sm font-semibold text-gray-600">Promo Code</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={promoCode}
//               onChange={handlePromoChange}
//               className="border border-gray-300 rounded-md p-2 w-full"
//             />
//           ) : (
//             <p className="font-bold text-gray-800">{promoCode}</p>
//           )}
//         </div>

//         <div className="w-full sm:w-auto">
//           <label className="block text-sm font-semibold text-gray-600">Share Link</label>
//           {isEditing ? (
//             <input
//               type="text"
//               value={shareLink}
//               onChange={handleShareLinkChange}
//               className="border border-gray-300 rounded-md p-2 w-full"
//             />
//           ) : (
//             <p className="font-bold text-gray-800 truncate">{shareLink}</p>
//           )}
//         </div>

//         <button
//           onClick={handleEdit}
//           className="flex items-center gap-2 text-blue-500 border border-blue-500 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white transition-all"
//         >
//           <FaEdit />
//           {isEditing ? "Save" : "Edit"}
//         </button>
//       </div>

//       {/* Total Earnings Section */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold text-gray-800">Total Earnings: <span className="text-blue-600 font-bold">₹ 0</span></h2>
//       </div>

//       <hr className="my-6 border-gray-200" />

//       {/* Coupon Code Section */}
//       <div>
//         <h3 className="text-lg font-bold text-gray-800">Coupon Code #1</h3>
//         <p className="text-blue-600 font-semibold mt-1">{promoCode}</p>
//         <div className="mt-4">
//           <h4 className="text-gray-600 font-semibold">Click/Bookings Details</h4>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
//             <div className="bg-blue-50 p-4 rounded-md text-center shadow-sm">
//               <p className="text-gray-500 text-sm">Total Clicks</p>
//               <p className="font-bold text-gray-800">0</p>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-md text-center shadow-sm">
//               <p className="text-gray-500 text-sm">Total Registrations</p>
//               <p className="font-bold text-gray-800">0</p>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-md text-center shadow-sm">
//               <p className="text-gray-500 text-sm">Total Flight Bookings</p>
//               <p className="font-bold text-gray-800">0</p>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-md text-center shadow-sm">
//               <p className="text-gray-500 text-sm">Total Hotel Bookings</p>
//               <p className="font-bold text-gray-800">0</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PromoComponent;



import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const PromoComponent = () => {
  const [promoCode, setPromoCode] = useState("RFsaJYg");
  const [shareLink, setShareLink] = useState("https://emt.bio/RFsaJYg");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleShareLinkChange = (e) => {
    setShareLink(e.target.value);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg rounded-lg p-4 sm:p-10 max-w-5xl mx-auto mt-20 border-t-4 border-blue-500">
      {/* Promo Code and Share Link Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="w-full sm:w-auto">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Promo Code</label>
          {isEditing ? (
            <input
              type="text"
              value={promoCode}
              onChange={handlePromoChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          ) : (
            <p className="font-bold text-xl text-gray-800 bg-blue-50 px-4 py-2 rounded-md shadow-md">
              {promoCode}
            </p>
          )}
        </div>

        <div className="w-full sm:w-auto">
          <label className="block text-sm font-semibold text-gray-600 mb-2">Share Link</label>
          {isEditing ? (
            <input
              type="text"
              value={shareLink}
              onChange={handleShareLinkChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          ) : (
            <p className="font-bold text-gray-800 bg-green-50 px-4 py-2 rounded-md shadow-md truncate">
              {shareLink}
            </p>
          )}
        </div>

        <button
          onClick={handleEdit}
          className="flex items-center gap-2 text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md shadow-md font-medium transition-transform transform hover:scale-105 focus:outline-none"
        >
          <FaEdit />
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {/* Total Earnings Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800">
          Total Earnings: <span className="text-blue-500">₹ 0</span>
        </h2>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Coupon Code Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800">Coupon Code #1</h3>
        <p className="text-blue-600 font-semibold mt-2 text-lg bg-blue-50 px-4 py-2 inline-block rounded-md shadow-md">
          {promoCode}
        </p>
        <div className="mt-6">
          <h4 className="text-gray-600 font-semibold mb-4">Click/Bookings Details</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-500 text-sm">Total Clicks</p>
              <p className="font-extrabold text-xl text-blue-700">0</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-500 text-sm">Total Registrations</p>
              <p className="font-extrabold text-xl text-green-700">0</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-500 text-sm">Total Flight Bookings</p>
              <p className="font-extrabold text-xl text-purple-700">0</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-500 text-sm">Total Hotel Bookings</p>
              <p className="font-extrabold text-xl text-yellow-700">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoComponent;
