// import React from 'react';
// import { FaUser, FaPhone, FaHandshake, FaGlobe, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
// import axios from 'axios';
// // import SummaryApi from '../common';
// import { BACKENDURL } from '../Config/Config';
// import { useState } from 'react';
// const ContactPage = () => {

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');


//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const contactData = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     };
//     window.location.reload();
  
//     try {
//       const response = await axios.post(BACKENDURL + "/api/v1/contacts/contact", contactData);
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Something went wrong. Please try again later.');
//     }
//   };
  
//   return (
//     <div className="container mx-auto p-8 mt-40">
//       {/* User-Friendly Section */}
//       <section className="text-center">
        
//         <h2 className="text-5xl font-semibold">
//   Contact Our<span className="text-black font-bold"> Friendly Experts </span>Team
// </h2>
//         <p className="mt-2 text-gray-500">Any questions? We would be happy to help you.</p>

//         <div className="flex flex-wrap justify-center mt-8">
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaUser size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Help & Support</h3>
//               <p className="text-gray-500 mt-2">
//                 For help with a current product or service or refer to FAQs and developer tools.
//               </p>
//               <a href="mailto:support@alithemes.com" className="text-blue-500 mt-4 block">support@alithemes.com</a>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaPhone size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Call Us</h3>
//               <p className="text-gray-500 mt-2">Call us to speak to a member of our team.</p>
//               <p className="text-blue-500 mt-4">(+91)7033825186 </p>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaHandshake size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Business Department</h3>
//               <p className="text-gray-500 mt-2">
//                 Contact the sales department about cooperation projects.
//               </p>
//               <p className="text-blue-500 mt-4">(+01) 789 453 23</p>
//             </div>
//           </div>
//           <div className="p-4 md:w-1/4">
//             <div className="border rounded-lg p-6 text-center">
//               <FaGlobe size={32} className="mx-auto mb-4" />
//               <h3 className="text-lg font-semibold">Global Branch</h3>
//               <p className="text-gray-500 mt-2">
//                 Contact us to open our branches globally.
//               </p>
//               <p className="text-blue-500 mt-4">(+01) 345 456 23</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Get in Touch Section */}
//       <section className="mt-16">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full lg:w-7/12">
//             <h1 className="text-5xl font-semobold text-black mb-8">Get in Touch</h1>
//             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8" >
            
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="mt-1 p-2 w-full border rounded-md"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="mt-1 p-2 w-full border rounded-md"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="email@domain.com"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="block text-gray-700">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Phone number"
//                   className="mt-1 p-2 w-full border rounded-md"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//               <div className="mt-4">
//                 <label className="block text-gray-700">Your Message</label>
//                 <textarea
//                   placeholder="Leave us a message..."
//                   className="mt-1 p-2 w-full border rounded-md h-24"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </div>
//               <div className="mt-4 flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <p className="text-sm text-gray-600">
//                   Agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>
//                 </p>
//               </div>
//               <button className="bg-black text-white rounded-lg mt-6 px-6 py-2">
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
//             <div className="bg-yellow-100 p-4 rounded-lg text-center">
//               <p className="font-semibold text-xl">1684 people used Webreak Global in the last 24 hours</p>
//             </div>           
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
// };

// export default ContactPage;



import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaHandshake,
  FaGlobe,
} from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    try {
      const response = await axios.post(
        BACKENDURL + "/api/v1/contacts/contact",
        contactData
      );
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-8 mt-40">
      {/* User-Friendly Section */}
      <section className="text-center">
        <h2 className="text-5xl font-semibold">
          Contact Our<span className="text-black font-bold"> Friendly Experts </span>Team
        </h2>
        <p className="mt-2 text-gray-500">Any questions? We would be happy to help you.</p>

        <div className="flex flex-wrap justify-center mt-8">
          <div className="p-4 md:w-1/4">
            <div className="border rounded-lg p-6 text-center">
              <FaUser size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Help & Support</h3>
              <p className="text-gray-500 mt-2">
                For help with a current product or service or refer to FAQs and developer tools.
              </p>
              <a href="mailto:support@alithemes.com" className="text-blue-500 mt-4 block">
                support@alithemes.com
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="border rounded-lg p-6 text-center">
              <FaPhone size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="text-gray-500 mt-2">Call us to speak to a member of our team.</p>
              <p className="text-blue-500 mt-4">(+91)7033825186 </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="border rounded-lg p-6 text-center">
              <FaHandshake size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Business Department</h3>
              <p className="text-gray-500 mt-2">
                Contact the sales department about cooperation projects.
              </p>
              <p className="text-blue-500 mt-4">(+01) 789 453 23</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4">
            <div className="border rounded-lg p-6 text-center">
              <FaGlobe size={32} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">Global Branch</h3>
              <p className="text-gray-500 mt-2">
                Contact us to open our branches globally.
              </p>
              <p className="text-blue-500 mt-4">(+01) 345 456 23</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="mt-16">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-7/12">
            <h1 className="text-5xl font-semobold text-black mb-8">Get in Touch</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="mt-1 p-2 w-full border rounded-md"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="mt-1 p-2 w-full border rounded-md"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Your Message</label>
                <textarea
                  placeholder="Leave us a message..."
                  className="mt-1 p-2 w-full border rounded-md h-24"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mt-4 flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-sm text-gray-600">
                  Agree to our{" "}
                  <span className="text-blue-500">Terms of Service</span> and{" "}
                  <span className="text-blue-500">Privacy Policy</span>
                </p>
              </div>
              <button className="bg-black text-white rounded-lg mt-6 px-6 py-2">
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <p className="font-semibold text-xl">
                1684 people used Webreak Global in the last 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Visit Us at Our Location
        </h2>
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198443470863!2d-122.4194154846811!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2e4e7b6b%3A0x56c3db0d3ff7abcb!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1631884478239!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
            className="w-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;




// import React, { useState } from 'react';
// import { FaUser, FaPhone, FaHandshake, FaGlobe, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
// import axios from 'axios';
// import { BACKENDURL } from '../Config/Config';

// const ContactPage = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const contactData = {
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       message,
//     };

//     try {
//       const response = await axios.post(BACKENDURL + "/api/v1/contacts/contact", contactData);
//       alert(response.data.message);
//       window.location.reload();
//     } catch (error) {
//       console.error('Error sending message:', error);
//       alert('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div className="container mx-auto p-8 mt-40">
//       {/* User-Friendly Section */}
//       <section className="text-center mb-16">
//         <h2 className="text-5xl font-semibold mb-4">
//           Contact Our <span className="text-black font-bold">Friendly Experts</span> Team
//         </h2>
//         <p className="text-lg text-gray-600">Any questions? We would be happy to help you.</p>

//         <div className="flex flex-wrap justify-center mt-8 space-y-6 lg:space-y-0 lg:space-x-6">
//           {/* Contact Cards */}
//           <div className="p-4 w-full md:w-1/4 hover:scale-105 transform transition duration-300 ease-in-out">
//             <div className="border rounded-lg p-6 text-center bg-white shadow-xl hover:shadow-2xl transition-all">
//               <FaUser size={32} className="mx-auto mb-4 text-yellow-500" />
//               <h3 className="text-lg font-semibold">Help & Support</h3>
//               <p className="text-gray-500 mt-2">
//                 For help with a current product or service or refer to FAQs and developer tools.
//               </p>
//               <a href="mailto:support@alithemes.com" className="text-blue-500 mt-4 block">support@alithemes.com</a>
//             </div>
//           </div>

//           <div className="p-4 w-full md:w-1/4 hover:scale-105 transform transition duration-300 ease-in-out">
//             <div className="border rounded-lg p-6 text-center bg-white shadow-xl hover:shadow-2xl transition-all">
//               <FaPhone size={32} className="mx-auto mb-4 text-blue-500" />
//               <h3 className="text-lg font-semibold">Call Us</h3>
//               <p className="text-gray-500 mt-2">Call us to speak to a member of our team.</p>
//               <p className="text-blue-500 mt-4">(+91) 7033825186</p>
//             </div>
//           </div>

//           <div className="p-4 w-full md:w-1/4 hover:scale-105 transform transition duration-300 ease-in-out">
//             <div className="border rounded-lg p-6 text-center bg-white shadow-xl hover:shadow-2xl transition-all">
//               <FaHandshake size={32} className="mx-auto mb-4 text-green-500" />
//               <h3 className="text-lg font-semibold">Business Department</h3>
//               <p className="text-gray-500 mt-2">
//                 Contact the sales department about cooperation projects.
//               </p>
//               <p className="text-blue-500 mt-4">(+01) 789 453 23</p>
//             </div>
//           </div>

//           <div className="p-4 w-full md:w-1/4 hover:scale-105 transform transition duration-300 ease-in-out">
//             <div className="border rounded-lg p-6 text-center bg-white shadow-xl hover:shadow-2xl transition-all">
//               <FaGlobe size={32} className="mx-auto mb-4 text-purple-500" />
//               <h3 className="text-lg font-semibold">Global Branch</h3>
//               <p className="text-gray-500 mt-2">
//                 Contact us to open our branches globally.
//               </p>
//               <p className="text-blue-500 mt-4">(+01) 345 456 23</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Get in Touch Section */}
//       <section className="mt-16">
//         <div className="flex flex-wrap justify-between">
//           <div className="w-full lg:w-7/12">
//             <h1 className="text-5xl font-semibold text-black mb-8">Get in Touch</h1>
//             <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <label className="block text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="email@domain.com"
//                   className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="block text-gray-700">Phone Number</label>
//                 <input
//                   type="text"
//                   placeholder="Phone number"
//                   className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>

//               <div className="mt-4">
//                 <label className="block text-gray-700">Your Message</label>
//                 <textarea
//                   placeholder="Leave us a message..."
//                   className="mt-1 p-2 w-full border rounded-md h-24 focus:ring-2 focus:ring-blue-500"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </div>

//               <div className="mt-4 flex items-center">
//                 <input type="checkbox" className="mr-2" />
//                 <p className="text-sm text-gray-600">
//                   Agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>
//                 </p>
//               </div>

//               <button className="bg-black text-white rounded-lg mt-6 px-6 py-2 hover:bg-gray-800 transition-colors">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Info Section */}
//           <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
//             <div className="bg-yellow-100 p-4 rounded-lg text-center">
//               <p className="font-semibold text-xl">1684 people used Webreak Global in the last 24 hours</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;
