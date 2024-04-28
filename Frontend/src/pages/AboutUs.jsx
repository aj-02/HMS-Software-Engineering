import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
     <Navbar />
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Hero
        title={"Learn More About Us | MediSync"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
