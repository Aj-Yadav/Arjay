import React from "react";
import "./Header.css";
import img from "../../Assets/Arjay.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo-title">
        <img src={img} alt="" />
        <h1>Fashion Store</h1>
      </div>
      <div className="Header-components">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/log">Log</Link>
      </div>
    </div>
  );
};

export default Header;
