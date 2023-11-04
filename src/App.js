import React from "react";
import { Navbar, Infos, Testimonial } from "./components";
import { Hero, AboutUs, Menu, Contact } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Infos />
      <AboutUs />
      <Menu />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
