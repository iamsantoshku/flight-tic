

import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [tripType, setTripType] = useState('One Way');
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
  });
  const navigate = useNavigate();

  const navToSearchPage = () => {
    const { from, to, departDate, returnDate } = formData;
    navigate(`/search?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to toggle trip type
  const toggleTripType = (type) => {
    setTripType(type);
    setShowReturnDate(type === 'Round Trip');
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-10 bg-gray-50 w-[90vw] max-w-8xl ml-[4.5vw] -mt-20  ">
      {/* Trip Type Selection */}

      <div className="flex mb-4 space-x-4 relative lg:-ml-[70vw] z-10 ml-0 sm:ml-[-10vw] md:ml-[-15vw] ">
        <button
          onClick={() => toggleTripType('One Way')}
          className={`py-2 px-4 font-medium ${
            tripType === 'One Way' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
          } rounded-lg`}
        >
          One Way
        </button>
        <button
          onClick={() => toggleTripType('Round Trip')}
          className={`py-2 px-4 font-medium ${
            tripType === 'Round Trip' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
          } rounded-lg`}
        >
          Round Trip
        </button>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full" style={{ width: '86vw' }}>

      
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">

        

      {/* Search Form */}
      
          {/* From */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <div className="flex flex-col w-full">
              <label className="text-xs text-gray-500">From</label>
              <input
                type="text"
                name="from"
                placeholder="Enter origin"
                value={formData.from}
                onChange={handleChange}
                className="outline-none text-lg text-black w-full"
              />
            </div>
          </div>

          {/* To */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <div className="flex flex-col w-full">
              <label className="text-xs text-gray-500">To</label>
              <input
                type="text"
                name="to"
                placeholder="Enter destination"
                value={formData.to}
                onChange={handleChange}
                className="outline-none text-lg text-black w-full"
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <div className="flex flex-col w-full">
              <label className="text-xs text-gray-500">Departure Date</label>
              <input
                type="date"
                name="departDate"
                value={formData.departDate}
                onChange={handleChange}
                className="outline-none text-lg text-black w-full"
              />
            </div>
          </div>

          {/* Return Date (visible only if Round Trip is selected) */}
          {showReturnDate && (
            <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
              <FaCalendarAlt className="text-gray-500 mr-2" />
              <div className="flex flex-col w-full">
                <label className="text-xs text-gray-500">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="outline-none text-lg text-black w-full"
                />
              </div>
            </div>
          )}

          {/* Guests */}
          <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
            <FaUser className="text-gray-500 mr-2" />
            <div className="flex flex-col w-full">
              <label className="text-xs text-gray-500">Guest</label>
              <select
                name="guests"
                className="outline-none text-lg w-full"
                onChange={handleChange}
                value={formData.guests || "2 adults, 2 children"}
              >
                <option value="2 adults, 2 children">2 adults, 2 children</option>
                <option value="1 adult">1 adult</option>
                <option value="3 adults, 1 child">3 adults, 1 child</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-end">
            <button
              onClick={navToSearchPage}
              className="flex items-center px-9 py-4 bg-black text-white rounded-full text-sm font-medium w-full md:w-auto"
            >
              <FaSearch className="mr-2" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;



// import React, { useState } from 'react';
// import { FaSearch, FaCalendarAlt, FaUser, FaMapMarkerAlt } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const SearchComponent = () => {
//   const [tripType, setTripType] = useState('One Way');
//   const [showReturnDate, setShowReturnDate] = useState(false);
//   const [formData, setFormData] = useState({
//     from: '',
//     to: '',
//     departDate: '',
//     returnDate: '',
//     guests: '2 adults, 2 children',
//   });
//   const navigate = useNavigate();

//   const navToSearchPage = () => {
//     const { from, to, departDate, returnDate } = formData;
//     navigate(`/search?from=${from}&to=${to}&departDate=${departDate}&returnDate=${returnDate}`);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const toggleTripType = (type) => {
//     setTripType(type);
//     setShowReturnDate(type === 'Round Trip');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center rounded-lg p-6 md:p-10 bg-gray-50 w-[86vw] max-w-8xl mx-auto mt-8 md:mt-20">
//       {/* Trip Type Selection */}
//       <div className="flex space-x-4 mb-4 w-full md:w-auto justify-start md:justify-center">
//         <button
//           onClick={() => toggleTripType('One Way')}
//           className={`py-2 px-4 font-medium ${
//             tripType === 'One Way' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
//           } rounded-lg`}
//         >
//           One Way
//         </button>
//         <button
//           onClick={() => toggleTripType('Round Trip')}
//           className={`py-2 px-4 font-medium ${
//             tripType === 'Round Trip' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
//           } rounded-lg`}
//         >
//           Round Trip
//         </button>
//       </div>
      
//       <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-full">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//           {/* From */}
//           <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <div className="flex flex-col w-full">
//               <label className="text-xs text-gray-500">From</label>
//               <input
//                 type="text"
//                 name="from"
//                 placeholder="Enter origin"
//                 value={formData.from}
//                 onChange={handleChange}
//                 className="outline-none text-lg text-black w-full"
//               />
//             </div>
//           </div>

//           {/* To */}
//           <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
//             <FaMapMarkerAlt className="text-gray-500 mr-2" />
//             <div className="flex flex-col w-full">
//               <label className="text-xs text-gray-500">To</label>
//               <input
//                 type="text"
//                 name="to"
//                 placeholder="Enter destination"
//                 value={formData.to}
//                 onChange={handleChange}
//                 className="outline-none text-lg text-black w-full"
//               />
//             </div>
//           </div>

//           {/* Departure Date */}
//           <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
//             <FaCalendarAlt className="text-gray-500 mr-2" />
//             <div className="flex flex-col w-full">
//               <label className="text-xs text-gray-500">Departure Date</label>
//               <input
//                 type="date"
//                 name="departDate"
//                 value={formData.departDate}
//                 onChange={handleChange}
//                 className="outline-none text-lg text-black w-full"
//               />
//             </div>
//           </div>

//           {/* Return Date (only if Round Trip is selected) */}
//           {showReturnDate && (
//             <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
//               <FaCalendarAlt className="text-gray-500 mr-2" />
//               <div className="flex flex-col w-full">
//                 <label className="text-xs text-gray-500">Return Date</label>
//                 <input
//                   type="date"
//                   name="returnDate"
//                   value={formData.returnDate}
//                   onChange={handleChange}
//                   className="outline-none text-lg text-black w-full"
//                 />
//               </div>
//             </div>
//           )}

//           {/* Guests */}
//           <div className="flex items-center border border-gray-300 p-3 rounded-lg w-full">
//             <FaUser className="text-gray-500 mr-2" />
//             <div className="flex flex-col w-full">
//               <label className="text-xs text-gray-500">Guests</label>
//               <select
//                 name="guests"
//                 className="outline-none text-lg w-full"
//                 onChange={handleChange}
//                 value={formData.guests}
//               >
//                 <option value="2 adults, 2 children">2 adults, 2 children</option>
//                 <option value="1 adult">1 adult</option>
//                 <option value="3 adults, 1 child">3 adults, 1 child</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>
//           </div>

//           {/* Search Button */}
//           <div className="flex justify-center md:justify-end col-span-full mt-4 md:mt-0">
//             <button
//               onClick={navToSearchPage}
//               className="flex items-center px-9 py-4 bg-black text-white rounded-full text-sm font-medium w-full md:w-auto"
//             >
//               <FaSearch className="mr-2" /> Search
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;
