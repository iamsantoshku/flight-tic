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
    <section className="px-[30px] md:px-[30px]">
      {/* <HeroSection /> */}
      <Hero/>
      {/* <ValuesWeProvide /> */}
      <div className=" mt-[237px] ">
      <Planesliding />

      </div>
      
      <TopPlaces />

      <FlightList/>
      <FlightListHome/>
      <DownloadAppSection/>
      <ExperienceSection/>
      <div className="mt mt-[3vw]">
      <HowItWorks/>

      </div>
      
      {/* <HomeTicketBookingBox /> */}
      
      {/* <Testimonials /> */}
      {/* <LetGetToKnow /> */}
      
    </section>
  );
};

export default Home;
