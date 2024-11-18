// import React from "react";

// const Footer = () => {
//   return (
//     <div className="px-[30px] md:px-[30px]">
//       <div className="w-full h-fit bg-gray-300 rounded-[30px] my-10 flex justify-center items-center py-10 px-5 text-center flex-col ">
//         {/* <b>Developed by</b> <br /> Piyush <br /> Piyush <br /> Piyush <br />{" "}
//         Piyush */}
//         Flight Booking System
//       </div>
//     </div>
//   );
// };

// export default Footer;





// import React from 'react';
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { MdLocationOn, MdOutlineAccessTime } from 'react-icons/md';
// import { HiOutlinePhone } from 'react-icons/hi';
// import { NavLink } from 'react-router-dom';
// import img1 from "../../assets/skybluee.jpg"

// const Footer = () => {
//   return (
//     <footer className="bg-black text-gray-400 py-8 px-4 mt-[4vw]">
//       {/* Top section with logo and need help */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
        
//         {/* Company Logo */}
//         <div className="flex items-center">
//           <div className="bg-yellow-400 rounded-full p-2">
//             {/* Placeholder for the logo, assuming it's a palm tree-like icon */}
//             <NavLink to="/"><div className="text-black text-2xl font-bold">WeBreak</div></NavLink>
//           </div>
//         </div>
        
//         {/* Need Help Section */}
//         <div className="flex items-center space-x-2 text-white">
//           <HiOutlinePhone className="text-yellow-400" />
//           <p>Need help? Call us</p>
//           <p className="text-yellow-400 font-bold">7033825186</p>
//         </div>
//       </div>

//       {/* Horizontal line */}
//       <hr className="border-gray-600 mb-8" />

//       {/* Footer sections */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Contact Section */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
//           <p className="flex items-center mb-2">
//             <MdLocationOn className="mr-2" /> 4517 Delhi Rohini sector-22, India 39495
//           </p>
//           <p className="flex items-center mb-2">
//             <MdOutlineAccessTime className="mr-2" /> Hours: 8:00 - 17:00, Mon - Sat
//           </p>
//           <p className="flex items-center mb-2">
//             <HiOutlinePhone className="mr-2" /> 1-800-222-8888
//           </p>
//           <p className="flex items-center">
//             <span className="mr-2">@</span> support@webreak.com
//           </p>
//         </div>

//         {/* Support Section */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
//           <ul>
//             <li className="mb-2 hover:text-white cursor-pointer">Forum support</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Help Center</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Live chat</li>
//             <li className="mb-2 hover:text-white cursor-pointer">How it works</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Security</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Privacy</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Charges logs</li>
//           </ul>
//         </div>

//         {/* Company Section */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
//           <ul>
//             <li className="mb-2 hover:text-white cursor-pointer">About Us</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Community Blog</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Jobs and Careers</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Contact Us</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Our Awards</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Agencies</li>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div>
//           <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
//           <ul>
//             <li className="mb-2 hover:text-white cursor-pointer">Tour Guide</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Tour Booking</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Hotel Booking</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Ticket Booking</li>
//             <li className="mb-2 hover:text-white cursor-pointer">Rental Services</li>
//           </ul>
//         </div>

//       </div>

//       {/* Horizontal line */}
//       <hr className="border-gray-800 mt-8 mb-8" />

//       {/* Legal and Social Icons */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
        
//         {/* Legal Links */}
//         <div className="flex space-x-4">
//           <a href="#" className="hover:text-white">Terms of Service</a>
//           <a href="#" className="hover:text-white">Privacy Policy</a>
//           <a href="#" className="hover:text-white">Cookies Policy</a>
//           <a href="#" className="hover:text-white">Data Processing</a>
//           <a href="#" className="hover:text-white">Data Policy</a>
//           <a href="#" className="hover:text-white">Refund Policy</a>
//         </div>
        
//         {/* Social Media Icons */}
//         <div className="flex items-center space-x-4">
//           <a href="#" className="hover:text-white"><FaFacebookF /></a>
//           <a href="#" className="hover:text-white"><FaInstagram /></a>
//           <a href="#" className="hover:text-white"><FaTwitter /></a>
//           <a href="#" className="hover:text-white"><FaYoutube /></a>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-4 text-gray-500">
//         &copy; 2024 WeBreak Inc. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdOutlineAccessTime } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/skybluee.jpg";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-gray-900 py-8 px-4 mt-[4vw]"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Top section with logo and need help */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-4">
        {/* Company Logo */}
        <div className="flex items-center">
          <div className="bg-yellow-400 rounded-full p-2">
            <NavLink to="/">
              <div className="text-black text-2xl font-bold">WeBreak</div>
            </NavLink>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="flex items-center space-x-2 text-white">
          <HiOutlinePhone className="text-yellow-400" />
          <p>Need help? Call us</p>
          <p className="text-yellow-400 font-bold">7033825186</p>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="border-gray-600 mb-8" />

      {/* Footer sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <MdLocationOn className="mr-2" /> 4517 Delhi Rohini sector-22, India 39495
          </p>
          <p className="flex items-center mb-2">
            <MdOutlineAccessTime className="mr-2" /> Hours: 8:00 - 17:00, Mon - Sat
          </p>
          <p className="flex items-center mb-2">
            <HiOutlinePhone className="mr-2" /> 1-800-222-8888
          </p>
          <p className="flex items-center">
            <span className="mr-2">@</span> support@webreak.com
          </p>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Forum support</li>
            <li className="mb-2 hover:text-white cursor-pointer">Help Center</li>
            <li className="mb-2 hover:text-white cursor-pointer">Live chat</li>
            <li className="mb-2 hover:text-white cursor-pointer">How it works</li>
            <li className="mb-2 hover:text-white cursor-pointer">Security</li>
            <li className="mb-2 hover:text-white cursor-pointer">Privacy</li>
            <li className="mb-2 hover:text-white cursor-pointer">Charges logs</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Company</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">About Us</li>
            <li className="mb-2 hover:text-white cursor-pointer">Community Blog</li>
            <li className="mb-2 hover:text-white cursor-pointer">Jobs and Careers</li>
            <li className="mb-2 hover:text-white cursor-pointer">Contact Us</li>
            <li className="mb-2 hover:text-white cursor-pointer">Our Awards</li>
            <li className="mb-2 hover:text-white cursor-pointer">Agencies</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Tour Guide</li>
            <li className="mb-2 hover:text-white cursor-pointer">Tour Booking</li>
            <li className="mb-2 hover:text-white cursor-pointer">Hotel Booking</li>
            <li className="mb-2 hover:text-white cursor-pointer">Ticket Booking</li>
            <li className="mb-2 hover:text-white cursor-pointer">Rental Services</li>
          </ul>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="border-gray-800 mt-8 mb-8" />

      {/* Legal and Social Icons */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Legal Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookies Policy</a>
          <a href="#" className="hover:text-white">Data Processing</a>
          <a href="#" className="hover:text-white">Data Policy</a>
          <a href="#" className="hover:text-white">Refund Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaYoutube /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-gray-900">
        &copy; 2024 WeBreak Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
