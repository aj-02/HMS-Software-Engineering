import React, { useState, useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import axios from "axios";
import "./History.css";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/appointment/getall");
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
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="container">
      
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>NIC</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Appointment Date</th>
              <th>Department</th>
              <th>Has Visited</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.firstName}</td>
                <td>{appointment.lastName}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.nic}</td>
                <td>{appointment.dob}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.appointment_date}</td>
                <td>{appointment.department}</td>
                <td>{appointment.hasVisited ? "Yes" : "No"}</td>
                <td>{appointment.address}</td>
                <td>{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </>
  );
};

export default AppointmentsPage;
