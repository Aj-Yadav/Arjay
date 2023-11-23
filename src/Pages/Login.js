import React, { useState } from "react";
import "./CSS/Login.css";
import { useNavigate } from "react-router-dom";

import { useDataContext } from "../Context/DataProvider";

const Login = ({ onSubmit }) => {
  const navigate = useNavigate();

  const { handleButtonClick, showLogin } = useDataContext();

  const handleFormSubmit = (onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  });

  return (
    <div className="login-container">
      <div className="login-logout">
        <form onSubmit={handleFormSubmit}>
          <input className="textfile" type="text" placeholder="userName" />
          <input
            className="textfile"
            type="email"
            placeholder="Email"
            autoComplete="username"
          />
          <input
            className="textfile"
            type="password"
            placeholder="password"
            autoComplete="current-password"
          />
          <button className="textfile" onClick={handleButtonClick}>
            {showLogin ? "login" : "logout"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
