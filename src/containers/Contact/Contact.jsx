import React from "react";
import "./contact.css";
import MapView from "../../components/MapView/MapView.jsx";

import { BiTime, BiMapPin, BiPhoneCall } from "react-icons/bi";

function Contact() {
  return (
    <div className="aksil__contact section__margin">
      <h4>C'est trés simple</h4>
      <h2>Nous retrouver</h2>
      <div className="aksil__contact-content">
        <div className="aksil__contact-content_text ">
          <div className="aksil__contact-content__p">
            <BiTime className="aksil__contact-icon" />{" "}
            <p>
              Votre restaurant est ouver de 10 heures à 23 heures 7j/7 sans
              intéruption.
            </p>
          </div>
          <div className="aksil__contact-content__p">
            <BiMapPin className="aksil__contact-icon" />{" "}
            <p>
              Nous sommes situé au 130 Boulevard Gambetta 06000 Nice. Vous
              pouvez aussi consultez la carte.
            </p>
          </div>
          <div className="aksil__contact-content__p">
            <BiPhoneCall className="aksil__contact-icon" />{" "}
            <p>
              Apellez-nous au 09 83 47 60 33. Nous restons disponible pour
              toutes commandes et/ou informations
            </p>
          </div>
        </div>
        <div className="aksil__contact-content_map">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default Contact;
