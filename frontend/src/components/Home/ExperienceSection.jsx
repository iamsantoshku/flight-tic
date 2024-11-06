// ExperienceSection.js
import React from "react";
import { FaGlobe, FaPlane, FaSuitcase, FaLock } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-6 md:space-y-0 px-4 md:px-16 py-10 bg-white mt-[3vw]">
      <div className="flex flex-col items-center text-center">
        <FaGlobe className="text-4xl mb-3 text-pink-500" />
        <h3 className="font-semibold text-lg">300,000+ Experiences</h3>
        <p className="text-gray-500">Make memories around the world.</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <FaPlane className="text-4xl mb-3 text-blue-400" />
        <h3 className="font-semibold text-lg">Reserve now, Pay later</h3>
        <p className="text-gray-500">Book your spot first, pay later.</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <FaSuitcase className="text-4xl mb-3 text-blue-300" />
        <h3 className="font-semibold text-lg">Trusted Reviews</h3>
        <p className="text-gray-500">4.8 stars from 160,000+ Trustpilot reviews.</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <FaLock className="text-4xl mb-3 text-purple-500" />
        <h3 className="font-semibold text-lg">Security Assurance</h3>
        <p className="text-gray-500">Data security through encryption.</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
