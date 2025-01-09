import "./chambre.css";
import chambre from "../assets/chambre-cover.jpeg";
import standard from "../assets/standard.jpg"
import confort from "../assets/chambre-cover.jpeg"
import standing from "../assets/standing.jpg"
import suite from "../assets/suite.jpg"


function Chambre() {
  const rooms = [
    {
      type: "Classique",
      description: "Chambres standard avec tout le confort essentiel.",
      numero: "1",
      image: standard,
    },
    {
      type: "Confort",
      description: "Chambres confortables pour un séjour relaxant.",
      numero: "2",
      image: confort,
    },
    {
      type: "Standing",
      description: "Chambres deluxe avec des équipements haut de gamme.",
      numero: "3",
      image: standing,
    },
    {
      type: "Suite",
      description: "Suites luxueuses pour une expérience inoubliable.",
      numero: "4",
      image: suite,
    },
  ];

  return (
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
              <p className="room-numero"> Numéro de chambre : {room.numero}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chambre;
