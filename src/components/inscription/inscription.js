import React, { useState } from 'react';
import axios from 'axios';

function Inscription() {
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
          setMessage('Vos informations sont déjà existante');
        }
      });
  };

  return (
    <div>
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
