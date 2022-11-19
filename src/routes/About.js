import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import AboutContent from "../Components/AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="ABOUT ME" text="Temitope is a Frontend dveloper, Technical writter and Content creator."/>
      <AboutContent />
      <Footer />
     
    </>
  );
};

export default About;
