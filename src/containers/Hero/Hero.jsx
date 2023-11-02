import React from "react";
import "./hero.css";
import hero from "../../assets/hero.png";
import { BsBasket2Fill } from "react-icons/bs";

function Hero() {
  return (
    <div className="aksil__hero section__padding">
      <div className="aksil__hero-content">
        <h1>
          Découvrez nos délicieux <span>snacks</span> préparés avec soin.
        </h1>
        <p>
          {" "}
          Notre menu diversifié offre quelque chose pour tout le monde. Alors,
          n'hésitez plus et plongez dans une expérience gastronomique
          inoubliable en appuyant sur le bouton ci-dessus pour explorer notre
          menu alléchant.
        </p>

        <button className="aksil__hero-CTA">
          Je découvre le menu <BsBasket2Fill className="askil__cart-icon" />
        </button>
      </div>
      <div className="aksil__hero-image">
        <img src={hero} alt="" />
      </div>
    </div>
  );
}

export default Hero;
