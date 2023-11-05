import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./mapView.css";

const MapView = () => {
  const position = [43.7012, 7.2619]; // Coordonnées de "Aksil Fastfood à Nice"

  return (
    <MapContainer
      center={position}
      zoom={15}
      minZoom={13} // Définit le niveau de zoom minimal
      style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Aksil Fastfood à Nice</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
