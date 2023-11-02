import React from "react";
import "./infos.css";
import { BiTime, BiMapPin, BiPhoneCall } from "react-icons/bi";

function Infos() {
  return (
    <div className="aksil__infos section__padding ">
      <div className="aksil__infos-content">
        <div className="aksil__infos-content_card">
          <BiTime className="aksil__infos-icon" />
          <h4>10:00 H – 23:00 H</h4>
          <p>Du lundi au dimanche</p>
        </div>
        <div className="aksil__infos-content_card">
          <BiMapPin className="aksil__infos-icon" />
          <h4>130 Boulevard Gambetta</h4>
          <p>06000 Nice</p>
        </div>
        <div className="aksil__infos-content_card">
          <BiPhoneCall className="aksil__infos-icon" />
          <h4>09 83 47 60 33</h4>
          <p>Apellez-nous</p>
        </div>
      </div>
    </div>
  );
}

export default Infos;
