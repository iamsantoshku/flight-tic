import React from "react";
import HeroSection from "../components/Home/Hero";
import TopPlaces from "../components/Home/TopPlaces";
import ValuesWeProvide from "../components/Home/ValuesWeProvide";
import Testimonials from "../components/Home/Testimonials";
import LetGetToKnow from "../components/Home/LetGetToKnow";
import BookTicketBox from "../components/BookTicketBox";
import HomeTicketBookingBox from "../components/HomeTicketBookingBox";
import Hero from "../components/Home/Hero";
import Planesliding from "../components/Home/PlaneSliding";
import FlightList from "../components/Home/FlightList";
import FlightListHome from "../components/Home/FlightListHome";
import DownloadAppSection from "../components/Home/DownloadAppSection";
import Footer from "../components/Footer/Footer";
import ExperienceSection from "../components/Home/ExperienceSection";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <section className="">
      {/* px-[30px] md:px-[30px] */}     
      <Hero/>    
      <div className=" px-[20px] md:px-[20px] ">
      <Planesliding />
      </div>

      <div className="px-[20px] md:px-[10px]">
      <TopPlaces />
      </div>
      
      <div className="px-[20px] md:px-[10px] " >
      <FlightList/>
      </div>
     
      <FlightListHome/>
      <DownloadAppSection/>
      <ExperienceSection/>
      <div className="mt mt-[3vw]">
      <HowItWorks/>

      </div>
      
      
      
    </section>
  );
};

export default Home;





// src/pages/Home.js
// import React from "react";
// import HeroSection from "../components/Home/Hero";
// import TopPlaces from "../components/Home/TopPlaces";
// import ValuesWeProvide from "../components/Home/ValuesWeProvide";
// import Testimonials from "../components/Home/Testimonials";
// import LetGetToKnow from "../components/Home/LetGetToKnow";
// import BookTicketBox from "../components/BookTicketBox";
// import HomeTicketBookingBox from "../components/HomeTicketBookingBox";
// import Hero from "../components/Home/Hero";
// import Planesliding from "../components/Home/PlaneSliding";
// import FlightList from "../components/Home/FlightList";
// import FlightListHome from "../components/Home/FlightListHome";
// import DownloadAppSection from "../components/Home/DownloadAppSection";
// import Footer from "../components/Footer/Footer";
// import ExperienceSection from "../components/Home/ExperienceSection";
// import HowItWorks from "../components/HowItWorks";

// import UseInView from "../helpers/UseInView";

// const Home = () => {
//   // Custom hook for each section
//   const [heroRef, heroInView] = UseInView();
//   const [planeSlidingRef, planeInView] = UseInView();
//   const [topPlacesRef, topPlacesInView] = UseInView();
//   const [flightListRef, flightListInView] = UseInView();
//   const [downloadAppRef, downloadAppInView] = UseInView();
//   const [experienceRef, experienceInView] = UseInView();
//   const [howItWorksRef, howItWorksInView] = UseInView();

//   return (
//     <section className="">
//       {/* Hero Section */}
//       <div
//         ref={heroRef}
//         className={`transition-opacity duration-700 ${
//           heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <Hero />
//       </div>

//       {/* Plane Sliding Section */}
//       <div
//         ref={planeSlidingRef}
//         className={`px-[20px] md:px-[20px] transition-opacity duration-700 ${
//           planeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <Planesliding />
//       </div>

//       {/* Top Places Section */}
//       <div
//         ref={topPlacesRef}
//         className={`px-[20px] md:px-[10px] transition-opacity duration-700 ${
//           topPlacesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <TopPlaces />
//       </div>

//       {/* Flight List Section */}
//       <div
//         ref={flightListRef}
//         className={`px-[20px] md:px-[10px] transition-opacity duration-700 ${
//           flightListInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <FlightList />
//       </div>

//       {/* Flight List Home */}
//       <div
//         ref={downloadAppRef}
//         className={`transition-opacity duration-700 ${
//           downloadAppInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <FlightListHome />
//       </div>

//       {/* Download App Section */}
//       <div
//         ref={experienceRef}
//         className={`transition-opacity duration-700 ${
//           experienceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <DownloadAppSection />
//       </div>

//       {/* Experience Section */}
//       <div
//         ref={howItWorksRef}
//         className={`transition-opacity duration-700 ${
//           howItWorksInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//         }`}
//       >
//         <ExperienceSection />
//       </div>

//       {/* How It Works */}
//       <div className="mt mt-[3vw]">
//         <HowItWorks />
//       </div>
//     </section>
//   );
// };

// export default Home;
