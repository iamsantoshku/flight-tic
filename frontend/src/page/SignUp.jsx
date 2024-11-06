import React, { useEffect, useState } from "react";
import { BACKENDURL } from "../Config/Config";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../assets/img/blog/google.svg"
import facebook from "../assets/img/blog/facebook.svg"
import img1 from "../assets/logo7.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    for (const key in formData) {
      if (!formData[key]) {
        toast.error(
          `${key === "name"
            ? "Full Name"
            : key === "email"
              ? "Email"
              : key === "password"
                ? "Password"
                : key
          } is required`
        );
        return;
      } else if (key === "email" && !emailRegex.test(formData.email)) {
        toast.error("Invalid email format");
        return;
      } else if (key === "password" && !passwordRegex.test(formData.password)) {
        toast.error(
          "Password must contain at least 8 characters, including uppercase, lowercase letters, and numbers"
        );
        return;
      }
    }

    try {
      const SignUpURL = BACKENDURL + "/api/v1/auth/register";

      const response = await fetch(SignUpURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful registration
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Redirect to login page
        navigate("/login");
      } else {
        // Error response from backend
        toast.error(data.error);
      }
    } catch (error) {
      console.log(error);
      // Handle network or other errors
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="px-[30px] md:px-[30px] my-10 mt-[7vw]">
      <div className="flex flex-col items-center justify-center p-0 md:px-6 md:py-8 mx-auto md:min-h-[60vh] lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Signup today!
            </h1> */}
            <div className="head1 mt-5 ">
              <div className="logo flex ">
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
                <div className="reg">
                  <h2 className="text-4xl font-bold mb-4 ml-5">Register</h2>

                </div>

              </div>


              {/* <h1 className="mb-4 text-lg ml-[2vw]">Hello There!</h1> */}
              <div className="flex gap-2 mb-6">
                <button className="flex items-center gap-2 bg-white border border-gray-300 p-2 rounded-md hover:bg-black hover:text-white transition-colors">
                  <img src={google} alt="Google" className="w-9 h-7" />
                  <span className="flex-1 text-left">Signup in with Google</span>
                </button>
                <button className="flex ml-[2vw]items-center gap-2 bg-white border border-gray-300 p-2 rounded-md hover:bg-black hover:text-white transition-colors">
                  <img src={facebook} alt="Facebook" className="w-7 h-7" />
                  <span className="flex-1 text-left"></span>
                </button>
              </div>
            </div>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="someone@domain.com"
                  required=""
                  onChange={handleFormDataChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="someone@domain.com"
                  required=""
                  onChange={handleFormDataChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleFormDataChange}
                />
              </div>
              <button
                onClick={handleSignup}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Signup
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Allready have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
