import "./spa.css";
import coverImage from "../assets/salon.jpg";
import ambianceImage from "../assets/lit.jpg";
import massageImage1 from "../assets/relax.jpg";
import massageImage2 from "../assets/pierre.jpg";
import massageImage3 from "../assets/perso.jpg";

function Spa() {
  const services = [
    {
      name: "Massage Relaxant",
      description: "Un massage apaisant qui soulage les tensions et revitalise votre corps.",
      image: massageImage1,
    },
    {
      name: "Massage aux Pierres Chaudes",
      description: "Un soin profond pour libérer l'énergie et détendre les muscles.",
      image: massageImage2,
    },
    {
      name: "Massage Signature",
      description: "Une expérience personnalisée, adaptée à vos besoins spécifiques.",
      image: massageImage3,
    },
  ];

  return (
    <div className="spa">
      {/* Section Header */}
      <header className="spa-header">
        <img
          src={coverImage}
          alt="Salon de massage de luxe"
          className="spa-cover"
        />
        <div className="header-text">
          <h1>Bienvenue au Spa de l'Hôtel</h1>
          <p>Découvrez un havre de paix et de relaxation au cœur de notre hôtel.</p>
        </div>
      </header>

      {/* Section Présentation */}
      <section className="about-spa">
        <div className="presentation">
          <img
            src={ambianceImage}
            alt="Ambiance du Spa"
            className="presentation-image"
          />
          <div className="presentation-text">
            <h2>Notre Salon de Massage</h2>
            <p>
              Situé dans un espace calme et raffiné, notre spa est l'endroit idéal pour
              vous détendre et vous ressourcer. Avec des installations modernes et une
              atmosphère apaisante, chaque visite est une véritable évasion sensorielle.
            </p>
            <p>
              Nos praticiens expérimentés utilisent des techniques variées et des produits
              haut de gamme pour garantir un moment de relaxation inoubliable.
            </p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="spa-services">
        <h2>Nos Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Spa;
