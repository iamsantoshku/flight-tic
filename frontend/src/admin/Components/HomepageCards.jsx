// import React from "react";
// import { Link } from "react-router-dom";

// const HomepageCards = ({ title, description, to }) => {
//   return (
//     <div>
//       <div className="max-w-sm my-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//         <Link to={to}>
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//         </Link>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           {description}
//         </p>
//         <Link
//           to={to}
//           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Go
//           <svg
//             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default HomepageCards;




import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Adminhome from "./Adminhome";

const HomepageCards = ({ title, description, to }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here, like clearing tokens or session data
    localStorage.removeItem("authToken"); // Example for clearing a token from localStorage
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <>
    {/* <Adminhome/>   */}

    {/* <button
            onClick={handleLogout}
            className=" top-0"
          >
            Logout
          </button>  
      <div> */}
        <div className="max-w-sm my-5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to={to}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <Link
            to={to}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Go
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <button
            onClick={handleLogout}
            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Logout
          </button>
        </div>
      {/* </div> */}
    </>

  );
};

export default HomepageCards;

