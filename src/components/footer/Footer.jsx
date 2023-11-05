import React from "react";
import logoFooter from "../../assets/logo.png";
import "./footer.css";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SiUber, SiDeliveroo, SiVisa } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className="aksil__footer">
        <img src={logoFooter} alt="" />
        <p>
          Aksil vous attend avec impatience dans son restaurant, prêt à vous
          régaler de saveurs uniques.
        </p>
        <ul className="aksil__footer-links">
          <li>
            <a href="#home">
              <AiFillInstagram className="aksil__footer-icon" />
            </a>
          </li>
          <li>
            <a href="#home">
              <AiFillFacebook className="aksil__footer-icon" />
            </a>
          </li>
          <li>
            <a href="#home">
              <SiUber className="aksil__footer-icon" />
            </a>
          </li>
          <li>
            <a href="#home">
              <SiDeliveroo className="aksil__footer-icon" />
            </a>
          </li>
          <li>
            <a href="#home">
              <SiVisa className="aksil__footer-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="aksil__footer-bottom">
        <p>
          copyright &copy;2020 AksilFastFood. designed by <span>Olivier</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
