import React from "react";
import { Navbar, Infos, Testimonial, Footer } from "./components";
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
      <Footer />
    </div>
  );
}

export default App;
