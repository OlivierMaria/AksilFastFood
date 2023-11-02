import React from "react";
import "./AboutUs.css";
import { SiUbereats, SiDeliveroo } from "react-icons/si";

function AboutUs() {
  return (
    <div className="aksil__about section__margin">
      <div className="aksil__about-content_right">
        <h2>
          À Propos d'Aksil Fast<span className="aksil__about-span">Food</span>
        </h2>
        <p>
          À Aksil Fast Food, nous ne faisons pas de compromis quand il s'agit de
          la gourmandise. Depuis notre création, notre obsession pour la qualité
          culinaire ne cesse de grandir. Chaque plat que nous servons est une
          déclaration de notre engagement envers le goût et la fraîcheur. Venez
          goûter la différence chez Aksil Fast Food.
        </p>
      </div>
      <div className="aksil__about-icons">
        <p>Retrouvez nous aussi sur</p>
        <div className="aksil__about-icons_background">
          <SiUbereats className="aksil__about-icon" />
        </div>
        <div className="aksil__about-icons_background">
          <SiDeliveroo className="aksil__about-icon" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
