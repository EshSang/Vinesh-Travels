import React from "react";
import "../styles/home.css";
import img9 from "../images/img9.png";

const Home = () => {
  return (
    <div>
      <div className="homelogo">
        <img src={img9} alt="Description" />
      </div>
      <div className="welcometext">
        <h1> Welcome to </h1>
        <h3> Vinesh Tours </h3>
      </div>
    </div>
  );
};

export default Home;
