import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import Navbar2 from "../components/Navbar2"
const Home = () => {
  return (
    <>
    <Navbar2 />
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Hero
        title={
          "Welcome to MediSync | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
