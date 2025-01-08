import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm({ utilisateurId }) {
  const [formData, setFormData] = useState({
    chambre_id: '',
    date_debut: '',
    date_fin: '',
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

    axios.post('http://localhost:5000/api/reservation', {
      ...formData,
      utilisateur_id: utilisateurId,
    })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Erreur lors de la réservation.');
        }
      });
  };

  return (
    <div>
      <h2>Réserver une chambre</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Chambre ID :</label>
          <input
            type="number"
            name="chambre_id"
            value={formData.chambre_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date début :</label>
          <input
            type="date"
            name="date_debut"
            value={formData.date_debut}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date fin :</label>
          <input
            type="date"
            name="date_fin"
            value={formData.date_fin}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
}

export default ReservationForm;
