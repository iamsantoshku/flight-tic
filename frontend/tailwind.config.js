/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as the default font
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        ...colors,
        primaryColor: "#3D5CB8",
        primaryDark: "#334C99",
        textDark: "#0F172A",
        textLight: "#64748B",
        extraLight: "#F1F5F9",
      },
    },
  },
  plugins: [],
};




// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class", // Enable dark mode with the 'class' strategy
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Poppins", "sans-serif"], // Default font
//         montserrat: ["Montserrat", "sans-serif"], // Alternate font
//         poppins: ["Poppins", "sans-serif"], // Added explicitly
//       },
//       colors: {
//         ...colors, // Include Tailwind's default colors
//         primaryColor: "#3D5CB8",
//         primaryDark: "#334C99",
//         secondaryColor: "#FF5722", // Add a secondary accent color
//         textDark: "#0F172A",
//         textLight: "#64748B",
//         extraLight: "#F1F5F9",
//         bgLight: "#E5E7EB", // Subtle background for light mode
//         bgDark: "#1E293B", // Background for dark mode
//         accentLight: "#FBBF24", // Accent color for light mode
//         accentDark: "#F87171", // Accent color for dark mode
//       },
//       spacing: {
//         18: "4.5rem", // Custom spacing
//         22: "5.5rem",
//         100: "25rem",
//         128: "32rem", // For large containers
//       },
//       animation: {
//         "fade-in": "fadeIn 1s ease-in-out",
//         "fade-in-up": "fadeInUp 1s ease-in-out",
//         "fade-in-down": "fadeInDown 1s ease-in-out",
//         "fade-in-left": "fadeInLeft 1s ease-in-out",
//         "fade-in-right": "fadeInRight 1s ease-in-out",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         fadeInUp: {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeInDown: {
//           "0%": { opacity: "0", transform: "translateY(-20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeInLeft: {
//           "0%": { opacity: "0", transform: "translateX(-20px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         fadeInRight: {
//           "0%": { opacity: "0", transform: "translateX(20px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//       },
//       borderRadius: {
//         xl: "1rem",
//         "2xl": "1.5rem",
//         "3xl": "2rem", // Extra large rounded corners
//       },
//       boxShadow: {
//         primary: "0px 4px 10px rgba(61, 92, 184, 0.3)", // Shadow with primary color
//         card: "0px 6px 15px rgba(0, 0, 0, 0.1)", // Card shadow
//       },
//       screens: {
//         "3xl": "1920px", // For ultra-wide screens
//       },
//     },
//   },
//   plugins: [
//     require("@tailwindcss/forms"), // Adds better form styles
//     require("@tailwindcss/typography"), // For prose and rich text
//     require("@tailwindcss/aspect-ratio"), // For maintaining aspect ratios
//   ],
// };
