import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="aksil__navbar">
      <div className="aksil__navbar-links">
        <div className="aksil__navbar-links_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="aksil__navbar__links-link">
          <p>
            <a href="#home">Accueil</a>
          </p>
          <p>
            <a href="#home">A propos</a>
          </p>
          <p>
            <a href="#home">Menu</a>
          </p>
          <p>
            <a href="#home">Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
