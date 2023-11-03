import React from "react";
import "./menu.css";

function Menu() {
  return (
    <div className="aksil__menu-container section__margin">
      <h4>Notre irrésistible menu :</h4>
      <h2>
        Menu d'Aksil Fast<span className="aksil__about-span">Food</span>
      </h2>
      <div className="aksil__menu">
        <div className="aksil__menu-left_button">
          <button>Tout</button>
          <button>Tacos</button>
          <button>Pizza</button>
          <button>Sandwiches</button>
          <button>Burger</button>
          <button>Assiettes</button>
          <button>Paninis</button>
        </div>
        <div className="aksil__menu-right_card"></div>
      </div>
    </div>
  );
}

export default Menu;
