import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import backimg from "../../assets/two piolet image.jpg"
import playstr from "../../assets/googleplay.png"
import applestr from "../../assets/appstore.png"

const DownloadAppSection = () => {
  return (
    <div className="w-[90vw] h-[75vh] mx-auto flex mt-[5vw] overflow-hidden rounded-xl">
      {/* Left Side (Text and Button) */}
      <div className="w-[50vw] bg-blue-100 flex flex-col justify-center p-10">
        <button className="bg-white  text-black font-semibold py-3 px-4 rounded-lg mb-4 text-sm w-[20vw]">
          Install App and Get Discount Code
        </button>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover Seamless  Travel with WeBreak
        </h1>
        <p className="text-gray-700 text-lg md:text-xl font-semibold mb-6">
          Embark on a journey like never before with Travila – your ultimate travel companion.
        </p>
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 rounded-md"
          >
            
            <img src={playstr} alt="" />
          </a>
          <a
            href="#"
            className="flex items-center bg-gray-100 hover:bg-gray-200 p-2 rounded-md"
          >
            
            <img src={applestr} alt="" />
          </a>
        </div>
      </div>

      {/* Right Side (Image Background) */}
      <div
        className="w-[40vw] bg-cover bg-center"
        style={{
          backgroundImage: `url(${backimg})`,
        }}
      />
    </div>
  );
};

export default DownloadAppSection;
