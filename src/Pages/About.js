import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./CSS/Login.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-div">
        <p>
          Established with a passion for delivering exceptional products and a
          seamless shopping experience, Arjay has been curating the latest
          trends and timeless classics since 2023. What began as a vision has
          evolved into an online haven for those who appreciate a perfect blend
          of style, affordability, and reliability.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
