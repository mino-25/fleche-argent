import React, { useState } from 'react';
import axios from 'axios';
import './inscription.css';

function Inscription() {
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    mot_de_passe: '',
    adresse_postale: '',
    telephone: '',
  });

  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Etat pour le menu responsive

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données au backend
    axios
      .post('http://localhost:5000/api/inscription', formData)
      .then((response) => {
        setMessage(response.data.message);
        setFormData({
          pseudo: '',
          email: '',
          mot_de_passe: '',
          adresse_postale: '',
          telephone: '',
        });
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Vos informations sont déjà existantes');
        }
      });
  };

  // Fonction pour afficher/masquer le menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="inscription-container">
      {/* Bouton hamburger pour le menu responsive */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Menu responsive */}
      <nav className={`responsive-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/chambres">Nos Chambres</a></li>
          <li><a href="/restaurant">Notre Restaurant</a></li>
          <li><a href="/massage">Nos Massages</a></li>
          <li><a href="/reservation">Réservation</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <h1>Inscription</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pseudo :</label>
          <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} required />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input type="password" name="mot_de_passe" value={formData.mot_de_passe} onChange={handleChange} required />
        </div>
        <div>
          <label>Adresse Postale :</label>
          <input type="text" name="adresse_postale" value={formData.adresse_postale} onChange={handleChange} />
        </div>
        <div>
          <label>Téléphone :</label>
          <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
