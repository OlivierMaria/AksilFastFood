import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="aksil__navbar">
      <div className="aksil__navbar-links">
        <div className="aksil__navbar-links_logo">
          <img
            src="../../Design sans titre - 2023-11-01T233621.100.png"
            alt=""
          />
        </div>
        <div className="aksil__navbar__links-link">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#home">Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
