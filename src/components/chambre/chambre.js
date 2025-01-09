import React from "react";
import "./chambre.css";
import chambre from "../assets/chambre-cover.jpg";
import standard from "../assets/standard.jpg";
import confort from "../assets/confort.jpg";
import standing from "../assets/standing.jpg";
import suite from "../assets/suite.jpg";

function Chambre() {
  const rooms = [
    {
      type: "Classique",
      description: "Chambres standard avec tout le confort essentiel.",
      image: standard,
    },
    {
      type: "Confort",
      description: "Chambres confortables pour un séjour relaxant.",
      image: confort,
    },
    {
      type: "Standing",
      description: "Chambres deluxe avec des équipements haut de gamme.",
      image: standing,
    },
    {
      type: "Suite",
      description: "Suites luxueuses pour une expérience inoubliable.",
      image: suite,
    },
  ];

  return (
    <div className="chambre-container">
      {/* Section des chambres */}
      <div className="chambres">
        <div className="chambres-header">
          <img src={chambre} alt="Chambre" />
          <h1>Nos Chambres</h1>
          <p>Découvrez nos différentes catégories de chambres</p>
        </div>
        <div className="room-container">
          {rooms.map((room, index) => (
            <div className="room-card" key={index}>
              <img
                src={room.image}
                alt={`Image de la chambre ${room.type}`}
                className="room-image"
              />
              <div className="room-info">
                <h2 className="room-type">{room.type}</h2>
                <p className="room-description">{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chambre;
