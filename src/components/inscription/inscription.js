import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './inscription.css';

function Inscription() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    mot_de_passe: '',
    adresse_postale: '',
    telephone: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données au backend
    axios.post('http://localhost:5000/api/inscription', formData)
      .then((response) => {
        setMessage(response.data.message);

        // Vérifier si l'utilisateur est renvoyé
        if (response.data.user) {
          // Enregistrer les informations de l'utilisateur dans le stockage local
          localStorage.setItem('utilisateur', JSON.stringify(response.data.user));
          console.log('Utilisateur inscrit et stocké :', response.data.user);

          // Redirection vers la page d'accueil
          navigate('/');
        }
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Erreur de connexion au serveur.');
        }
        console.error('Erreur:', error);
      });
  };

  return (
    <div className="inscription-container">
      <h1>Inscription</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pseudo :</label>
          <input
            type="text"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Adresse Postale :</label>
          <input
            type="text"
            name="adresse_postale"
            value={formData.adresse_postale}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Téléphone :</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;
