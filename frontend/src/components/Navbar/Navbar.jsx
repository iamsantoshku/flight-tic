

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
//   const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

//   const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//   };

//   const toggleLanguageDropdown = () => {
//     setShowLanguageDropdown(!showLanguageDropdown); // Toggle language dropdown
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
//       <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto mt-5 px-[30px] md:px-[30px]">
//         <NavLink to="/" className="flex">
//           <img
//             className="light-mode bg-orange-500 rounded h-10 w-10"
//             src={img1}
//             alt="webreak"
//           />
//           <img
//             className="dark-mode hidden"
//             src="assets/imgs/template/logo-w.svg"
//             alt="Company Logo"
//           />
//         </NavLink>

//         <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-[8%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5 z-[10]`}>
//           {/* Other navigation links */}

//           <ul className="hidden lg:flex space-x-8">
//             <li className="relative group">
//               <NavLink className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-orange-500`} to="/">
//                 Home
//                 <FaAngleDown className="ml-1" />
//               </NavLink>
//               <div className="absolute hidden justify-between h-35 space-y-3 group-hover:block bg-white shadow-lg w-64 rounded-md">
//                 <div className="p-4 hover:text-orange-400">
//                   <h5 className="text-lg font-bold">Book, Pack, Go! Your Ultimate Travel Companion</h5>
//                   <NavLink className="mt-4 btn btn-brand-secondary" to="/explore">Explore Now</NavLink>
//                 </div>
//               </div>
//             </li>
//             <li className="relative group">
//               <NavLink className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-orange-500`} to="/search">
//                 Tickets
//                 <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className="absolute hidden group-hover:block justify-between h-35 space-y-2 bg-white shadow-lg w-64 rounded-lg ">
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/search">Flight tickets</NavLink></li>
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/tickets-2">Train tickets</NavLink></li>
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/book-ticket">Ticket details</NavLink></li>
//               </ul>
//             </li>

//             <li className="relative group">
//               <NavLink className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-orange-500`} to="/blog-grid">
//                 Blog
//                 <FaAngleDown className="ml-1" />
//               </NavLink>
//               <ul className={`absolute ${isDarkMode ? 'text-white' : 'text-gray-800'} hidden group-hover:block justify-between h-35 space-y-2 bg-white shadow-lg w-64 rounded-md `}>
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-grid">Grid Full</NavLink></li>
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-grid-2">Grid Sidebar</NavLink></li>
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-grid-3">List</NavLink></li>
//                 <li className="hover:text-orange-400 px-4 py-2"><NavLink to="/blog-detail">Blog Details</NavLink></li>
//               </ul>
//             </li>
//           </ul>

//           <ul className="hidden lg:flex space-x-8 ml-5">
//             <li>
//               <NavLink className={`text-gray-800 hover:text-orange-500 ${isDarkMode ? 'text-white' : ''}`} to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>



// <div className="flex justify-end items-center">
//           <div className="lang flex ml-20 relative">
//             <div className="logo mt-1 gap-5 size-5">
//               <TfiWorld />
//             </div>
//             <div className="det cursor-pointer" onClick={toggleLanguageDropdown}>
//               <span className={`text-gray-800 ${isDarkMode ? "text-white" : ""}`}>{selectedLanguage}</span>
//             </div>
//             <FaAngleDown className="ml-1 mt-1 gray-300" onClick={toggleLanguageDropdown} />

//             {/* Language Dropdown */}
//             {showLanguageDropdown && (
//               <div className="absolute top-full mt-2 left-0 bg-white shadow-lg w-32 rounded-md z-10">
//                 <ul>
//                   <li className="hover:bg-yellow-100 cursor-pointer px-4 py-2" onClick={() => handleLanguageChange("EN")}>English</li>
//                   <li className="hover:bg-yellow-100 cursor-pointer px-4 py-2" onClick={() => handleLanguageChange("FR")}>French</li>
//                   <li className="hover:bg-yellow-100 cursor-pointer px-4 py-2" onClick={() => handleLanguageChange("CN")}>Chinese</li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           <div className="relative group ml-20">
//             <span className={`text-gray-800 ${isDarkMode ? 'text-white' : ''}`}>{selectedCurrency}</span>
//             <div className="absolute hidden group-hover:block bg-white shadow-lg w-32 rounded-md z-10">
//               <FaAngleDown className="ml-1" />
//               <ul>
//                 <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleCurrencyChange('USD')}>USD</li>
//                 <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleCurrencyChange('EUR')}>EUR</li>
//                 <li className="hover:bg-yellow-100 cursor-pointer" onClick={() => handleCurrencyChange('SGP')}>SGP</li>
//               </ul>
//             </div>
//           </div>

//           <div className="relative ml-20">
//             {isUserLoggedIn ? (
//               <div className="relative">
//                 <img
//                   src={profilePic}
//                   alt="User Profile"
//                   className="w-[50px] h-[50px] rounded-full cursor-pointer"
//                   onClick={toggleProfileDropdown}
//                 />
//                 {showProfileDropdown && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
//                     <ul className="py-2">
//                       <li className="hover:bg-gray-100 px-4 py-2">
//                         <Link to="/profile">Profile</Link>
//                       </li>
//                       <li className="hover:bg-gray-100 px-4 py-2">
//                         <Link to="/profile-info">Profile-info</Link>
//                       </li>
//                       {isAdmin && (
//                         <>
//                           <li className="hover:bg-gray-100 px-4 py-2">
//                             <Link to="/admin">Admin</Link>
//                           </li>
//                           <li className="hover:bg-gray-100 px-4 py-2">
//                             <Link to="/dashboard">Dashboard</Link>
//                           </li>
//                         </>
//                       )}
//                       <li className="hover:bg-gray-100 px-4 py-2">
//                         <Link to="/settings">Settings</Link>
//                       </li>
//                       <li className="hover:bg-gray-100 px-4 py-2">
//                         <Link to="/login">Logout</Link>
//                       </li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link to="/login">
//                 <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
//                   Sign in
//                 </button>
//               </Link>
//             )}
//           </div>

//           <RxHamburgerMenu
//             onClick={toggleMenu}
//             name={menuOpen ? "close" : "menu"}
//             className="text-3xl cursor-pointer md:hidden"
//           />
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;




import React, { useState, useContext, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { FaUser, FaAngleDown } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import img1 from "../../assets/logo7.png";

function Navbar() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isUserLoggedIn = localStorage.getItem("token") !== "null";
  const { user, token } = useContext(authContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const profilePic = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleCurrencyDropdown = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setShowCurrencyDropdown(false);  // Fix: close the currency dropdown after selection
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white fixed top-0 w-full z-20 shadow-md">
      <nav className="flex justify-between items-center w-full max-w-[1800px] mx-auto py-4 px-5 md:px-10">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            className="bg-orange-500 rounded h-10 w-10"
            src={img1}
            alt="webreak"
          />
        </NavLink>

        {/* Nav Links and Dropdowns */}
        <div
          className={`fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center md:space-x-8 md:space-y-0 space-y-5 p-8 md:p-0 z-10 ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8">
            <li className="relative group">
              <NavLink
                className="flex items-center hover:text-orange-500"
                to="/"
                onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
              >
                Home
                <FaAngleDown className="ml-1" />
              </NavLink>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-64">
                <div className="p-4 hover:text-orange-400">
                  <h5 className="text-lg font-bold">Your Ultimate Travel Companion</h5>
                  <NavLink className="mt-4 btn btn-brand-secondary" to="/explore">
                    Explore Now
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="relative group">
              <NavLink
                className="flex items-center hover:text-orange-500"
                to="/search"
                onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
              >
                Tickets
                <FaAngleDown className="ml-1" />
              </NavLink>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-64">
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/search">Flight tickets</NavLink>
                </li>
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/tickets-2">Train tickets</NavLink>
                </li>
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/book-ticket">Ticket details</NavLink>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <NavLink
                className="flex items-center hover:text-orange-500"
                to="/blog-grid"
                onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
              >
                Blog
                <FaAngleDown className="ml-1" />
              </NavLink>
              <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-64">
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/blog-grid">Grid Full</NavLink>
                </li>
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/blog-grid-2">Grid Sidebar</NavLink>
                </li>
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/blog-grid-3">List</NavLink>
                </li>
                <li className="hover:text-orange-400 px-4 py-2">
                  <NavLink to="/blog-detail">Blog Details</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className="hover:text-orange-500"
                to="/contact"
                onClick={closeMobileMenu} // Close the mobile menu when a link is clicked
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side - Language, Currency, Profile */}
        <div className="flex items-center space-x-5">
          {/* Language */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleLanguageDropdown}
            >
              <TfiWorld />
              <span className="ml-1">{selectedLanguage}</span>
              <FaAngleDown className="ml-1" />
            </div>
            {showLanguageDropdown && (
              <div className="absolute top-full mt-2 bg-white shadow-lg w-32 rounded-md z-10">
                <ul>
                  <li
                    className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                    onClick={() => handleLanguageChange("EN")}
                  >
                    English
                  </li>
                  <li
                    className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                    onClick={() => handleLanguageChange("FR")}
                  >
                    French
                  </li>
                  <li
                    className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                    onClick={() => handleLanguageChange("CN")}
                  >
                    Chinese
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Currency */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleCurrencyDropdown}
            >
              <span>{selectedCurrency}</span>
              <FaAngleDown className="ml-1" />
            </div>
            {showCurrencyDropdown && (
              <div className="absolute top-full mt-2 bg-white shadow-lg w-32 rounded-md z-10">
                <ul>
                  <li
                    className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                    onClick={() => handleCurrencyChange("USD")}
                  >
                    USD
                  </li>
                  <li
                    className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                    onClick={() => handleCurrencyChange("EUR")}
                  >
                    EUR
                  </li>
                  <li
                    className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                    onClick={() => handleCurrencyChange("INR")}
                  >
                    INR
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile */}
          {/* <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleProfileDropdown}
            >
              <img
                className="rounded-full w-10 h-10"
                src={profilePic}
                alt="profile"
              />
              <FaAngleDown className="ml-1" />
            </div>
            {showProfileDropdown && (
              <div className="absolute top-full mt-2 bg-white shadow-lg w-48 rounded-md z-10">
                <ul>
                  {isUserLoggedIn ? (
                    <li
                      className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                      onClick={closeMobileMenu}
                    >
                      <Link to="/profile">Profile</Link>
                    </li>
                  ) : (
                    <li
                      className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                      onClick={closeMobileMenu}
                    >
                      <Link to="/login">Login</Link>
                    </li>
                  )}
                  {isAdmin && (
                    <li
                      className="hover:bg-yellow-100 cursor-pointer px-4 py-2"
                      onClick={closeMobileMenu}
                    >
                      <Link to="/admin">Admin Dashboard</Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div> */}
          {/* correct  */}

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




          {/* Mobile Menu Button */}
          <div
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;