// import React from "react";
// import { FaWallet } from "react-icons/fa";
// import { BsArrowRight, BsGraphUp } from "react-icons/bs";
// import { MdOutlineFlight, MdTrain, MdHotel, MdDirectionsBus } from "react-icons/md";

// const WalletDashboard = () => {
//   return (
//     <div className="bg-blue-50 p-6 m-20">
//       {/* Header */}
//       <div className="flex justify-between items-center bg-blue-200 p-4 rounded-md shadow-md">
//         <h1 className="text-xl font-bold flex items-center">
//           <FaWallet className="mr-2 text-blue-600" /> EMT Wallet
//         </h1>
//         <h2 className="text-xl font-bold text-blue-600">EMT Cash 0</h2>
//       </div>

//       {/* Transfer Money Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//         <div className="bg-white p-4 rounded-md shadow-md">
//           <h3 className="text-lg font-semibold">Transfer Money</h3>
//           <p className="text-sm text-gray-500 mt-1">Transfer your Money to Bank Account</p>
//           <div className="mt-4">
//             <BsArrowRight className="text-blue-600 text-2xl inline" />
//           </div>
//         </div>

//         {/* Money Spent Overview */}
//         <div className="bg-white p-4 rounded-md shadow-md">
//           <h3 className="text-lg font-semibold">Money Spent</h3>
//           <div className="flex justify-around mt-4">
//             <div className="flex items-center flex-col">
//               <MdOutlineFlight className="text-blue-500 text-2xl" />
//               <p>Flight</p>
//               <p className="font-bold">0</p>
//             </div>
//             <div className="flex items-center flex-col">
//               <MdTrain className="text-cyan-500 text-2xl" />
//               <p>Train</p>
//               <p className="font-bold">0</p>
//             </div>
//             <div className="flex items-center flex-col">
//               <MdHotel className="text-red-500 text-2xl" />
//               <p>Hotel</p>
//               <p className="font-bold">0</p>
//             </div>
//             <div className="flex items-center flex-col">
//               <MdDirectionsBus className="text-yellow-500 text-2xl" />
//               <p>Bus</p>
//               <p className="font-bold">0</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
//         <div className="bg-purple-50 p-4 rounded-md shadow-md flex items-center">
//           <BsGraphUp className="text-purple-600 text-2xl mr-4" />
//           <div>
//             <h4 className="text-sm font-semibold">Total Spend</h4>
//             <p className="text-lg font-bold">₹ 0</p>
//           </div>
//         </div>
//         <div className="bg-green-50 p-4 rounded-md shadow-md flex items-center">
//           <BsGraphUp className="text-green-600 text-2xl mr-4" />
//           <div>
//             <h4 className="text-sm font-semibold">Total Refund</h4>
//             <p className="text-lg font-bold">₹ 0</p>
//           </div>
//         </div>
//         <div className="bg-blue-50 p-4 rounded-md shadow-md flex items-center">
//           <BsGraphUp className="text-blue-600 text-2xl mr-4" />
//           <div>
//             <h4 className="text-sm font-semibold">Total Cashback</h4>
//             <p className="text-lg font-bold">₹ 0</p>
//           </div>
//         </div>
//       </div>

//       {/* Transaction Section */}
//       <div className="mt-6 bg-white p-4 rounded-md shadow-md">
//         <h3 className="text-lg font-semibold">EaseMyTrip Passbook</h3>
//         <div className="mt-4">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="text-left bg-gray-100">
//                 <th className="p-2">Transactions</th>
//                 <th className="p-2">Amount</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Comment</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="p-2 text-gray-500">No transactions</td>
//                 <td className="p-2 text-gray-500">-</td>
//                 <td className="p-2 text-gray-500">-</td>
//                 <td className="p-2 text-gray-500">-</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WalletDashboard;



import React from "react";
import { FaWallet } from "react-icons/fa";
import { BsArrowRight, BsGraphUp } from "react-icons/bs";
import { MdOutlineFlight, MdTrain, MdHotel, MdDirectionsBus } from "react-icons/md";

const WalletDashboard = () => {
  return (
    <div className="bg-blue-50 p-4 sm:p-6 mt-20">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-200 p-7 rounded-md shadow-md">
        <h1 className="text-xl font-bold flex items-center">
          <FaWallet className="mr-2 text-blue-600" /> EMT Wallet
        </h1>
        <h2 className="text-xl font-bold text-blue-600">EMT Cash 0</h2>
      </div>

      {/* Transfer Money Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6 mx-2 sm:mx-0">
        <div className="bg-white p-4 rounded-md shadow-md w-full">
          <h3 className="text-lg font-semibold">Transfer Money</h3>
          <p className="text-sm text-gray-500 mt-1">Transfer your Money to Bank Account</p>
          <div className="mt-4">
            <BsArrowRight className="text-blue-600 text-2xl inline" />
          </div>
        </div>

        {/* Money Spent Overview */}
        <div className="bg-white p-7 rounded-md shadow-md w-full">
          <h3 className="text-lg font-semibold">Money Spent</h3>
          <div className="flex justify-around mt-4">
            <div className="flex items-center flex-col">
              <MdOutlineFlight className="text-blue-500 text-2xl" />
              <p>Flight</p>
              <p className="font-bold">0</p>
            </div>
            <div className="flex items-center flex-col">
              <MdTrain className="text-cyan-500 text-2xl" />
              <p>Train</p>
              <p className="font-bold">0</p>
            </div>
            <div className="flex items-center flex-col">
              <MdHotel className="text-red-500 text-2xl" />
              <p>Hotel</p>
              <p className="font-bold">0</p>
            </div>
            <div className="flex items-center flex-col">
              <MdDirectionsBus className="text-yellow-500 text-2xl" />
              <p>Bus</p>
              <p className="font-bold">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6 mx-2 sm:mx-0">
        <div className="bg-purple-50 p-9 rounded-md shadow-md flex items-center w-full">
          <BsGraphUp className="text-purple-600 text-2xl mr-4" />
          <div>
            <h4 className="text-sm font-semibold">Total Spend</h4>
            <p className="text-lg font-bold">₹ 0</p>
          </div>
        </div>
        <div className="bg-green-50 p-9 rounded-md shadow-md flex items-center w-full">
          <BsGraphUp className="text-green-600 text-2xl mr-4" />
          <div>
            <h4 className="text-sm font-semibold">Total Refund</h4>
            <p className="text-lg font-bold">₹ 0</p>
          </div>
        </div>
        <div className="bg-blue-50 p-9 rounded-md shadow-md flex items-center w-full">
          <BsGraphUp className="text-blue-600 text-2xl mr-4" />
          <div>
            <h4 className="text-sm font-semibold">Total Cashback</h4>
            <p className="text-lg font-bold">₹ 0</p>
          </div>
        </div>
      </div>

      {/* Transaction Section */}
      <div className="mt-4 sm:mt-6 bg-white p-4 rounded-md shadow-md mx-2 sm:mx-0">
        <h3 className="text-lg font-semibold">EaseMyTrip Passbook</h3>
        <div className="mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-2">Transactions</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
                <th className="p-2">Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-gray-500">No transactions</td>
                <td className="p-2 text-gray-500">-</td>
                <td className="p-2 text-gray-500">-</td>
                <td className="p-2 text-gray-500">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
