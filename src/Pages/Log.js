import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Items from "../Components/Items/Items";
import Login from "../Pages/Login";
import { useNavigate } from "react-router-dom";

import "./CSS/Login.css";

const Log = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginSubmit = () => {
    navigate("/Home");
  };
  return (
    <div>
      <Header />

      <div className="login-container">
        {showLogin ? (
          <div className="item-login">
            <Login />
          </div>
        ) : (
          <Items />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Log;
