import React from "react";
import "../styles/header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="top-navbar">
        <div className="menu-list">
          <div className="nav-item"> Home </div>
          <div className="nav-item"> About </div>
          <div className="nav-item"> Reviews </div>
          <div className="nav-item"> Hire </div>
          <div className="nav-item"> Contact Us </div>
        </div>
      </div>

      <div>
        <img src={logo} alt="Description" className="imglogo" />
      </div>
    </div>
  );
};

export default Header;
