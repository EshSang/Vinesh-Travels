import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

const App = () => {
  return (
    <div className="toursite">
      {/* <Header /> */}
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
