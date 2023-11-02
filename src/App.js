import React from "react";
import { Navbar, Infos } from "./components";
import { Hero } from "./containers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background__gradient">
        <Navbar />
        <Hero />
      </div>
      <Infos />
    </div>
  );
}

export default App;
