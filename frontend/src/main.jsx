// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContextProvider } from "./context/authContext.jsx";
// // import { Auth0Provider } from '@auth0/auth0-react';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <ToastContainer />
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>


//   </>
// );



import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <Auth0Provider
      domain="dev-m3takfex5fu54kub.us.auth0.com" // Replace with your Auth0 domain
      clientId="8mBg2bwpCKd7uYOzHDqh7JWRstaVIenb" // Replace with your Auth0 Client ID
      authorizationParams={{
        redirect_uri: window.location.origin + "/", // Replace with your desired redirect path
      }}
    >
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Auth0Provider>
  </>
);







// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContextProvider } from "./context/authContext.jsx";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ToastContainer />
//     <Auth0Provider
//       domain="dev-m3takfex5fu54kub.us.auth0.com" // Replace with your Auth0 domain
//       clientId="8mBg2bwpCKd7uYOzHDqh7JWRstaVIenb" // Replace with your Auth0 Client ID
//       authorizationParams={{
//         redirect_uri: `${window.location.origin}/`, // Replace with your desired redirect path
//       }}
//     >
//       <AuthContextProvider>
//         <App />
//       </AuthContextProvider>
//     </Auth0Provider>
//   </React.StrictMode>
// );




// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContextProvider } from "./context/authContext.jsx";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ToastContainer />
//     <Auth0Provider
//       domain="dev-m3takfex5fu54kub.us.auth0.com" // Ensure this is your correct Auth0 domain
//       clientId="8mBg2bwpCKd7uYOzHDqh7JWRstaVIenb" // Ensure this is your correct Auth0 Client ID
//       authorizationParams={{
//         redirect_uri: `${window.location.origin}/`, // Make sure this redirect URI matches your Auth0 settings
//       }}
//     >
//       <AuthContextProvider>
//         <App />
//       </AuthContextProvider>
//     </Auth0Provider>
//   </React.StrictMode>
// );
