import React from "react";
import { Navbar, Infos } from "./components";
import { Hero, AboutUs } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Infos />
      <AboutUs />
    </div>
  );
}

export default App;
