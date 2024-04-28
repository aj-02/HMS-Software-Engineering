import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import axios from "axios";
import Hero from "../components/Hero";
import ReportForm from "../components/ReportForm";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/report/post");
        setAppointments(response.data.appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <>
      <Navbar2 />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Hero
        title={"Schedule Your Appointment | MediSync"}
        imageUrl={"/signin.png"}
      />
      <ReportForm/>

      
    </>
  );
};

export default AppointmentsPage;
