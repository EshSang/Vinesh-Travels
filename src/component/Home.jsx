import React from "react";
import "../styles/home.css";
import img9 from "../images/img9.png";

const Home = () => {
  return (
    <div>
      <div className="homelogo">
        <img src={img9} alt="Description" />
      </div>
      
      <div>
        <p className="welcometext"> Welcome to Vinesh Tours</p>
      </div>

    </div>
  );
};

export default Home;
