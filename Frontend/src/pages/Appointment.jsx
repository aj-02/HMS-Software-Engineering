import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import Navbar from "../components/Navbar";

const Appointment = () => {
  return (
    <>
     <Navbar />
     <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Hero
        title={"Schedule Your Appointment | MediSync"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
