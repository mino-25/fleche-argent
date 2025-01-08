import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assurez-vous que le package 'react-router-dom' est installé.
import "./resto.css";
import coverImage from "../assets/resto.jpg";
import ambianceImage from "../assets/plat.jpg";
import chefImage from "../assets/confort.jpg";
import dish1 from "../assets/standing.jpg";
import dish2 from "../assets/suite.jpg";
import dish3 from "../assets/confort.jpg";

function Resto() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu

  const menu = [
    {
      name: "Filet de Bœuf Rossini",
      description: "Un classique français avec foie gras et sauce Périgourdine.",
      image: dish1,
    },
    {
      name: "Saumon en Croûte",
      description: "Servi avec une réduction de citron et des légumes croquants.",
      image: dish2,
    },
    {
      name: "Tartelette aux Fruits Rouges",
      description: "Dessert maison, frais et gourmand.",
      image: dish3,
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle l'état du menu mobile
  };

  return (
    <div className="restaurant">
      {/* Bouton de menu mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu mobile */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/chambre">Chambre</Link></li>
          <li><Link to="/resto">Restaurant</Link></li>
          <li><Link to="/massage">Salon de massage</Link></li>
          <li><Link to="/reservation">Réservation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Section Header */}
      <div className="restaurant-header">
        <img
          src={coverImage}
          alt="Restaurant de l'hôtel"
          className="restaurant-cover"
        />
        <div className="header-text">
          <h1>Bienvenue au Restaurant de l'Hôtel</h1>
          <p>Découvrez une expérience gastronomique unique et raffinée.</p>
        </div>
      </div>

      {/* Section Présentation */}
      <section className="about-restaurant">
        <div className="presentation">
          <img
            src={ambianceImage}
            alt="Ambiance du restaurant"
            className="presentation-image"
          />
          <div className="presentation-text">
            <h2>Notre Restaurant</h2>
            <p>
              Situé au cœur de l'hôtel, notre restaurant offre un cadre
              chaleureux et raffiné. Avec une décoration élégante et une vue
              exceptionnelle, chaque repas est une expérience inoubliable.
            </p>
            <p>
              Nos plats, préparés avec soin par des chefs expérimentés, mettent
              à l'honneur les produits locaux et de saison, pour vous offrir une
              cuisine savoureuse et authentique.
            </p>
          </div>
        </div>

        <div className="chef">
          <img
            src={chefImage}
            alt="Notre chef"
            className="chef-image"
          />
          <h2>Rencontrez notre Chef</h2>
          <p>
            Le Chef [Nom du Chef] est passionné par la gastronomie. Avec une
            expérience de plus de 15 ans dans des restaurants étoilés, il
            propose une cuisine à la fois créative et respectueuse des
            traditions culinaires françaises.
          </p>
        </div>
      </section>

      {/* Section Menu */}
      <section className="menu">
        <h2>Notre Menu</h2>
        <div className="menu-container">
          {menu.map((dish, index) => (
            <div className="menu-item" key={index}>
              <img
                src={dish.image}
                alt={dish.name}
                className="menu-item-image"
              />
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resto;
