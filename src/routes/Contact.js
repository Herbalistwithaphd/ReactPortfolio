import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="Let's have a chat" text="for more enquiry, send me an email below." />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
