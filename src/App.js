import React from "react";
import { Navbar } from "./components";
import { Hero } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background__radient">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
