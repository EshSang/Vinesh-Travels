import React from "react";
// import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";

const App = () => {
  return (
    <div className="toursite">
      {/* <Header /> */}
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
