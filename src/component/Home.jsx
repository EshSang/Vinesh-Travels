import React from "react";
import "../styles/home.css";
import img1 from "../images/img1.jpg";

const Home = () => {
  return (
    <div>
      <div className="homelogo">
        <img src={img1} alt="Description" />
      </div>
      <div className="welcometext">
           <h2> Welcome to Vinesh Tours</h2>
        </div>
    </div>
  );
};

export default Home;
