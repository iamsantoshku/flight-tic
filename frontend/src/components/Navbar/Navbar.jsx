

import React, { useState, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { FaUser, FaAngleDown } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import img1 from "../../assets/logo7.png";

function Navbar() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isUserLoggedIn = localStorage.getItem("token") !== "null";
  const { user, token } = useContext(authContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setShowProfileDropdown(false);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setShowProfileDropdown(false);
  };

  return (
    <header className="bg-white fixed top-0 w-full z-20 shadow-md mb-[2vw]">
      <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto mt-5 px-[30px] md:px-[30px]">
        <NavLink to="/" className="flex">
          <img
            className="light-mode bg-orange-500 rounded h-10 w-10"
            src={img1}
            alt="webreak"
          />
          <img
            className="dark-mode hidden"
            src="assets/imgs/template/logo-w.svg"
            alt="Company Logo"
          />
        </NavLink>

        <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-[8%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5 z-[10]`}>
          {/* Other navigation links */}

          <ul className="hidden lg:flex space-x-8">
            <li className="relative group">
              <NavLink className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-orange-500`} to="/">
                Home
                <FaAngleDown className="ml-1" />
              </NavLink>
              <div className="absolute hidden justify-between h-35 space-y-3 group-hover:block bg-white shadow-lg w-64 rounded-md">
                <div className="p-4 hover:text-orange-400">
                  <h5 className="text-lg font-bold">Book, Pack, Go! Your Ultimate Travel Companion</h5>
                  <NavLink className="mt-4 btn btn-brand-secondary" to="/explore">Explore Now</NavLink>
                </div>
              </div>
            </li>
            <li className="relative group">
              <NavLink className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-orange-500`} to="/search">
                Tickets
                <FaAngleDown className="ml-1" />
              </NavLink>
              <ul className="absolute hidden group-hover:block justify-between h-35 space-y-2 bg-white shadow-lg w-64 rounded-lg ">
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/search">Flight tickets</NavLink></li>
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/tickets-2">Train tickets</NavLink></li>
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/book-ticket">Ticket details</NavLink></li>
              </ul>
            </li>

            <li className="relative group">
              <NavLink className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-orange-500`} to="/blog-grid">
                Blog
                <FaAngleDown className="ml-1" />
              </NavLink>
              <ul className={`absolute ${isDarkMode ? 'text-white' : 'text-gray-800'} hidden group-hover:block justify-between h-35 space-y-2 bg-white shadow-lg w-64 rounded-md `}>
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-grid">Grid Full</NavLink></li>
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-grid-2">Grid Sidebar</NavLink></li>
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-grid-3">List</NavLink></li>
                <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-detail">Blog Details</NavLink></li>
              </ul>
            </li>
          </ul>

          <ul className="hidden lg:flex space-x-8 ml-5">
            <li>
              <NavLink className={`text-gray-800 hover:text-orange-500 ${isDarkMode ? 'text-white' : ''}`} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-end items-center">
          {/* Language and Currency Components */}
          {/* Profile and Hamburger Menu */}
          {/* Sign-in/Sign-out Button */}
          <div className="lang flex ml-20">
            <div className="logo mt-1 gap-5 size-5">
              <TfiWorld />
            </div>
            <div className="det">
              <span className={`text-gray-800 ${isDarkMode ? 'text-white' : ''}`}>{selectedLanguage}</span>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md z-10">
                <ul>          <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleLanguageChange('EN')}>English</li>
                  <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleLanguageChange('FR')}>French</li>
                  <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleLanguageChange('CN')}>Chinese</li>
                </ul>
              </div>
            </div>
            <div>
              <FaAngleDown className="ml-1 mt-1 gray-300 " />
            </div>
          </div>

          <div className="relative group ml-20">
            <span className={`text-gray-800 ${isDarkMode ? 'text-white' : ''}`}>{selectedCurrency}</span>
            <div className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md z-10">
              <FaAngleDown className="ml-1" />
              <ul>
                <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleCurrencyChange('USD')}>USD</li>
                <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleCurrencyChange('EUR')}>EUR</li>
                <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleCurrencyChange('SGP')}>SGP</li>
              </ul>
            </div>
          </div>

          <div className="relative ml-20">
            {isUserLoggedIn ? (
              <div className="relative">
                <img
                  src={profilePic}
                  alt="User Profile"
                  className="w-[50px] h-[50px] rounded-full cursor-pointer"
                  onClick={toggleProfileDropdown}
                />
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <ul className="py-2">
                      <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to="/profile-info">Profile-info</Link>
                      </li>
                      {isAdmin && (
                        <>
                          <li className="hover:bg-gray-100 px-4 py-2">
                            <Link to="/admin">Admin</Link>
                          </li>
                          <li className="hover:bg-gray-100 px-4 py-2">
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                        </>
                      )}
                      <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to="/settings">Settings</Link>
                      </li>
                      <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to="/login">Logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
                  Sign in
                </button>
              </Link>
            )}
          </div>

          <RxHamburgerMenu
            onClick={toggleMenu}
            name={menuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;



// import React, { useState, useContext } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link, NavLink } from "react-router-dom";
// import { authContext } from "../../context/authContext";
// import { FaUser, FaAngleDown } from 'react-icons/fa';
// import { TfiWorld } from "react-icons/tfi";
// import img1 from "../../assets/logo7.png";

// function Navbar() {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";
//   const isUserLoggedIn = localStorage.getItem("token") !== "null";
//   const { user, token } = useContext(authContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('EN');
//   const [selectedCurrency, setSelectedCurrency] = useState('USD');
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//   };

//   const handleLanguageChange = (lang) => {
//     setSelectedLanguage(lang);
//     setShowProfileDropdown(false);
//   };

//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//     setShowProfileDropdown(false);
//   };

//   return (
//     <header className="bg-white fixed top-0 w-full z-20 shadow-md mb-[2vw]">
//       <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto p-4 md:px-6">
//         <NavLink to="/" className="flex">
//           <img className="rounded h-10 w-10" src={img1} alt="webreak" />
//         </NavLink>

//         {/* Hamburger Menu Icon */}
//         <RxHamburgerMenu
//           onClick={toggleMenu}
//           className="text-3xl cursor-pointer md:hidden"
//         />

//         {/* Navigation Links */}
//         <div className={`nav-links ${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center w-full md:w-auto bg-white md:bg-transparent absolute md:static top-[60px] left-0 md:left-auto`}>
//           <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto text-gray-800">
//             <li className="group relative md:static">
//               <NavLink to="/" className="px-4 py-2 flex items-center hover:text-orange-500">
//                 Home <FaAngleDown className="ml-1" />
//               </NavLink>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-4">
//                 <h5 className="text-lg font-bold">Book, Pack, Go!</h5>
//                 <NavLink to="/explore" className="block mt-2 text-blue-500">Explore Now</NavLink>
//               </div>
//             </li>
//             <li className="group relative md:static">
//               <NavLink to="/search" className="px-4 py-2 flex items-center hover:text-orange-500">
//                 Tickets <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-2">
//                 <li><NavLink to="/search" className="block py-2 hover:text-orange-400">Flight tickets</NavLink></li>
//                 <li><NavLink to="/tickets-2" className="block py-2 hover:text-orange-400">Train tickets</NavLink></li>
//                 <li><NavLink to="/book-ticket" className="block py-2 hover:text-orange-400">Ticket details</NavLink></li>
//               </ul>
//             </li>
//             <li className="group relative md:static">
//               <NavLink to="/blog-grid" className="px-4 py-2 flex items-center hover:text-orange-500">
//                 Blog <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-2">
//                 <li><NavLink to="/blog-grid" className="block py-2 hover:text-orange-400">Grid Full</NavLink></li>
//                 <li><NavLink to="/blog-grid-2" className="block py-2 hover:text-orange-400">Grid Sidebar</NavLink></li>
//                 <li><NavLink to="/blog-grid-3" className="block py-2 hover:text-orange-400">List</NavLink></li>
//                 <li><NavLink to="/blog-detail" className="block py-2 hover:text-orange-400">Blog Details</NavLink></li>
//               </ul>
//             </li>
//             <ul className=" mt-2 ">
//             <li>
//               <NavLink to="/contact" className="px-4 py-2 mt-[3vw] hover:text-orange-500">Contact</NavLink>
//             </li>

//             </ul>
            
//           </ul>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-14">
//           <div className="relative group mr-[0vw] flex">
//             <div className="mr-1 mt-1">
//             <TfiWorld />

//             </div>
//             <div className="selelang">
//             <span className="ml-2 cursor-pointer">{selectedLanguage}</span>
//             <ul className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md mt-2">
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleLanguageChange('EN')}>English</li>
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleLanguageChange('FR')}>French</li>
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleLanguageChange('CN')}>Chinese</li>
//             </ul>

//             </div>
            
            
//           </div>

//           <div className="relative group ">
//             <span className="cursor-pointer">{selectedCurrency}</span>
//             <ul className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md mt-2 ">
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleCurrencyChange('USD')}>USD</li>
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleCurrencyChange('EUR')}>EUR</li>
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleCurrencyChange('SGP')}>SGP</li>
//             </ul>
//           </div>

//           {/* Profile and Sign-In Button */}
//           <div className="relative">
//             {isUserLoggedIn ? (
//               <img
//                 src={profilePic}
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 onClick={toggleProfileDropdown}
//               />
//             ) : (
//               <Link to="/login">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign in</button>
//               </Link>
//             )}
//             {showProfileDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
//                 <ul>
//                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/profile">Profile</Link></li>
//                   <li className="hover:bg-gray-100 px-4 py-2">
//                          <Link to="/profile-info">Profile-info</Link>
//                        </li>
//                   {isAdmin && (
//                     <>
//                       <li className="px-4 py-2 hover:bg-gray-100"><Link to="/admin">Admin</Link></li>
//                       <li className="px-4 py-2 hover:bg-gray-100"><Link to="/dashboard">Dashboard</Link></li>
//                     </>
//                   )}
//                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/settings">Settings</Link></li>
//                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/login">Logout</Link></li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;




// import React, { useState, useContext } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link, NavLink } from "react-router-dom";
// import { authContext } from "../../context/authContext";
// import { FaUser, FaAngleDown } from 'react-icons/fa';
// import { TfiWorld } from "react-icons/tfi";
// import img1 from "../../assets/logo7.png";

// function Navbar() {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";
//   const isUserLoggedIn = localStorage.getItem("token") !== "null";
//   const { user, token } = useContext(authContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('EN');
//   const [selectedCurrency, setSelectedCurrency] = useState('USD');
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);

//   const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//   };

//   const handleLanguageChange = (lang) => {
//     setSelectedLanguage(lang);
//     setShowProfileDropdown(false);
//   };

//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//     setShowProfileDropdown(false);
//   };

//   return (
//     <header className="bg-white fixed top-0 w-full z-20 shadow-md mb-[2vw]">
//       <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto p-4 md:px-6">
//         <NavLink to="/" className="flex">
//           <img className="rounded h-10 w-10" src={img1} alt="webreak" />
//         </NavLink>

//         {/* Hamburger Menu Icon */}
//         <RxHamburgerMenu
//           onClick={toggleMenu}
//           className="text-3xl cursor-pointer md:hidden"
//         />

//         {/* Navigation Links */}
//         <div className={`nav-links ${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center w-full md:w-auto bg-white md:bg-transparent absolute md:static top-[60px] left-0 md:left-auto`}>
//           <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto text-gray-800">
//             <li className="group relative md:static">
//               <NavLink to="/" className="px-4 py-2 flex items-center hover:text-orange-500">
//                 Home <FaAngleDown className="ml-1" />
//               </NavLink>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-4">
//                 <h5 className="text-lg font-bold">Book, Pack, Go!</h5>
//                 <NavLink to="/explore" className="block mt-2 text-blue-500">Explore Now</NavLink>
//               </div>
//             </li>
//             <li className="group relative md:static">
//               <NavLink to="/search" className="px-4 py-2 flex items-center hover:text-orange-500">
//                 Tickets <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-2">
//                 <li><NavLink to="/search" className="block py-2 hover:text-orange-400">Flight tickets</NavLink></li>
//                 <li><NavLink to="/tickets-2" className="block py-2 hover:text-orange-400">Train tickets</NavLink></li>
//                 <li><NavLink to="/book-ticket" className="block py-2 hover:text-orange-400">Ticket details</NavLink></li>
//               </ul>
//             </li>
//             <li className="group relative md:static">
//               <NavLink to="/blog-grid" className="px-4 py-2 flex items-center hover:text-orange-500">
//                 Blog <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-2">
//                 <li><NavLink to="/blog-grid" className="block py-2 hover:text-orange-400">Grid Full</NavLink></li>
//                 <li><NavLink to="/blog-grid-2" className="block py-2 hover:text-orange-400">Grid Sidebar</NavLink></li>
//                 <li><NavLink to="/blog-grid-3" className="block py-2 hover:text-orange-400">List</NavLink></li>
//                 <li><NavLink to="/blog-detail" className="block py-2 hover:text-orange-400">Blog Details</NavLink></li>
//               </ul>
//             </li>
//             <li>
//               <NavLink to="/contact" className="px-4 py-2 mt-[3vw] hover:text-orange-500">Contact</NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-14">
//           <div className="relative group mr-[0vw] flex">
//             <div className="mr-1 mt-1">
//               <TfiWorld />
//             </div>
//             <div className="selelang">
//               <span className="ml-2 cursor-pointer">{selectedLanguage}</span>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md mt-2">
//                 <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleLanguageChange('EN')}>English</li>
//                 <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleLanguageChange('FR')}>French</li>
//                 <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleLanguageChange('CN')}>Chinese</li>
//               </ul>
//             </div>
//           </div>

//           <div className="relative group">
//             <span className="cursor-pointer">{selectedCurrency}</span>
//             <ul className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md mt-2">
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleCurrencyChange('USD')}>USD</li>
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleCurrencyChange('EUR')}>EUR</li>
//               <li className="px-4 py-2 hover:bg-yellow-100" onClick={() => handleCurrencyChange('SGP')}>SGP</li>
//             </ul>
//           </div>

//           {/* Profile and Sign-In Button */}
//           <div className="relative">
//             {isUserLoggedIn ? (
//               <img
//                 src={profilePic}
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 onClick={toggleProfileDropdown}
//               />
//             ) : (
//               <Link to="/login">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign in</button>
//               </Link>
//             )}
//             {showProfileDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48">
//                 <ul>
//                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/profile">Profile</Link></li>
//                   <li className="hover:bg-gray-100 px-4 py-2"><Link to="/profile-info">Profile-info</Link></li>
//                   {isAdmin && (
//                     <>
//                       <li className="px-4 py-2 hover:bg-gray-100"><Link to="/admin">Admin</Link></li>
//                       <li className="px-4 py-2 hover:bg-gray-100"><Link to="/dashboard">Dashboard</Link></li>
//                     </>
//                   )}
//                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/settings">Settings</Link></li>
//                   <li className="px-4 py-2 hover:bg-gray-100"><Link to="/login">Logout</Link></li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;








// import React, { useState, useContext } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link, NavLink } from "react-router-dom";
// import { authContext } from "../../context/authContext";
// import { FaUser, FaAngleDown } from "react-icons/fa";
// import { TfiWorld } from "react-icons/tfi";
// import img1 from "../../assets/logo7.png";

// function Navbar() {
//   const isAdmin = localStorage.getItem("isAdmin") === "true";
//   const isUserLoggedIn = localStorage.getItem("token") !== "null";
//   const { user, token } = useContext(authContext);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("EN");
//   const [selectedCurrency, setSelectedCurrency] = useState("USD");
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
//   const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

//   const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//   };

//   const handleLanguageChange = (lang) => {
//     setSelectedLanguage(lang);
//     setShowLanguageDropdown(false);
//   };

//   const handleCurrencyChange = (currency) => {
//     setSelectedCurrency(currency);
//     setShowCurrencyDropdown(false);
//   };

//   return (
//     <header className="bg-white fixed top-0 w-full z-20 shadow-md">
//       <nav className="flex justify-between items-center max-w-[1800px] mx-auto p-4 md:px-6">
//         {/* Logo */}
//         <NavLink to="/" className="flex">
//           <img className="rounded h-10 w-10" src={img1} alt="webreak" />
//         </NavLink>

//         {/* Hamburger Menu Icon */}
//         <RxHamburgerMenu
//           onClick={toggleMenu}
//           className="text-3xl cursor-pointer md:hidden"
//         />

//         {/* Navigation Links */}
//         <div
//           className={`${
//             menuOpen ? "flex" : "hidden"
//           } md:flex flex-col md:flex-row items-center w-full md:w-auto bg-white md:bg-transparent absolute md:static top-[60px] left-0 md:left-auto`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-8 w-full md:w-auto text-gray-800">
//             <li className="group relative">
//               <NavLink
//                 to="/"
//                 className="px-4 py-2 flex items-center hover:text-orange-500"
//               >
//                 Home <FaAngleDown className="ml-1" />
//               </NavLink>
//               <div className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-4 z-10">
//                 <h5 className="text-lg font-bold">Book, Pack, Go!</h5>
//                 <NavLink to="/explore" className="block mt-2 text-blue-500">
//                   Explore Now
//                 </NavLink>
//               </div>
//             </li>
//             <li className="group relative">
//               <NavLink
//                 to="/search"
//                 className="px-4 py-2 flex items-center hover:text-orange-500"
//               >
//                 Tickets <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-2 z-10">
//                 <li>
//                   <NavLink to="/search" className="block py-2 hover:text-orange-400">
//                     Flight tickets
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/tickets-2" className="block py-2 hover:text-orange-400">
//                     Train tickets
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/book-ticket" className="block py-2 hover:text-orange-400">
//                     Ticket details
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="group relative">
//               <NavLink
//                 to="/blog-grid"
//                 className="px-4 py-2 flex items-center hover:text-orange-500"
//               >
//                 Blog <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block bg-white shadow-lg w-64 rounded-md mt-2 p-2 z-10">
//                 <li>
//                   <NavLink to="/blog-grid" className="block py-2 hover:text-orange-400">
//                     Grid Full
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/blog-grid-2" className="block py-2 hover:text-orange-400">
//                     Grid Sidebar
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/blog-grid-3" className="block py-2 hover:text-orange-400">
//                     List
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/blog-detail" className="block py-2 hover:text-orange-400">
//                     Blog Details
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <NavLink to="/contact" className="px-4 py-2 hover:text-orange-500">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-12">
//           {/* Language Selector */}
//           <div
//             className="relative flex items-center cursor-pointer"
//             onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
//           >
//             <TfiWorld className="mr-2" />
//             <span>{selectedLanguage}</span>
//             {showLanguageDropdown && (
//               <ul className="absolute bg-white shadow-lg w-32 rounded-md mt-2 z-10">
//                 <li
//                   className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
//                   onClick={() => handleLanguageChange("EN")}
//                 >
//                   English
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
//                   onClick={() => handleLanguageChange("FR")}
//                 >
//                   French
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
//                   onClick={() => handleLanguageChange("CN")}
//                 >
//                   Chinese
//                 </li>
//               </ul>
//             )}
//           </div>

//           {/* Currency Selector */}
//           <div
//             className="relative cursor-pointer"
//             onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
//           >
//             <span>{selectedCurrency}</span>
//             {showCurrencyDropdown && (
//               <ul className="absolute bg-white shadow-lg w-32 rounded-md mt-2 z-10">
//                 <li
//                   className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
//                   onClick={() => handleCurrencyChange("USD")}
//                 >
//                   USD
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
//                   onClick={() => handleCurrencyChange("EUR")}
//                 >
//                   EUR
//                 </li>
//                 <li
//                   className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
//                   onClick={() => handleCurrencyChange("SGP")}
//                 >
//                   SGP
//                 </li>
//               </ul>
//             )}
//           </div>

//           {/* Profile or Sign-In Button */}
//           <div className="relative">
//             {isUserLoggedIn ? (
//               <img
//                 src={profilePic}
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer"
//                 onClick={toggleProfileDropdown}
//               />
//             ) : (
//               <Link to="/login">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
//                   Sign in
//                 </button>
//               </Link>
//             )}
//             {showProfileDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 z-10">
//                 <ul>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link to="/profile">Profile</Link>
//                   </li>
//                   {isAdmin && (
//                     <>
//                       <li className="px-4 py-2 hover:bg-gray-100">
//                         <Link to="/admin">Admin</Link>
//                       </li>
//                       <li className="px-4 py-2 hover:bg-gray-100">
//                         <Link to="/admin/dashboard">Dashboard</Link>
//                       </li>
//                     </>
//                   )}
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <button onClick={() => console.log("Logged out")}>
//                       Log Out
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
