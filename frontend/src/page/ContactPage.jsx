import React from 'react';
import { FaUser, FaPhone, FaHandshake, FaGlobe, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
// import SummaryApi from '../common';
import { BACKENDURL } from '../Config/Config';
import { useState } from 'react';
const ContactPage = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const contactData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };
    window.location.reload();
  
    try {
      const response = await axios.post(BACKENDURL + "/api/v1/contacts/contact", contactData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Something went wrong. Please try again later.');
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
              <a href="mailto:support@alithemes.com" className="text-blue-500 mt-4 block">support@alithemes.com</a>
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
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8" >
            
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
                  Agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>
                </p>
              </div>
              <button className="bg-black text-white rounded-lg mt-6 px-6 py-2">
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <p className="font-semibold text-xl">1684 people used Webreak Global in the last 24 hours</p>
            </div>           
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ContactPage;

