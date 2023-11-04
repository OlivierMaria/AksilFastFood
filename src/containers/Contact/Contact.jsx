import React from "react";
import "./contact.css";
import MapView from "../../components/MapView/MapView.jsx";

function Contact() {
  return (
    <div className="aksil__contact section__margin">
      <h4>C'est trés simple</h4>
      <h2>Nous retrouver</h2>
      <div className="aksil__contact-content">
        <div className="aksil__contact-content_text"></div>
        <div className="aksil__contact-content_map">
          <MapView />
        </div>
      </div>
    </div>
  );
}

export default Contact;
