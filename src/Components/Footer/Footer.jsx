import React, { useState } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const handleButtonClick = () => {
    setShowLogin(!showLogin);
    navigate("/log");
  };

  return (
    <div className="Footer">
      <div className="copyright">
        <h3> 2023 Arjay. All rights reserved.</h3>
      </div>

      <div className="loginlogout">
        <button className="btn" onClick={handleButtonClick}>
          {showLogin ? "To logout" : " To login"}
        </button>
      </div>
    </div>
  );
};

export default Footer;
