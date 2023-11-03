import React from "react";
import { Navbar, Infos } from "./components";
import { Hero, AboutUs, Menu } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="green__wrapper">
        <Navbar />
        <Hero />
      </div>
      <Infos />
      <AboutUs />
      <Menu />
    </div>
  );
}

export default App;
