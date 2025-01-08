import React, { useState, useEffect } from 'react';
import './reservation.css'
import ReservationCover from '../assets/reservation-cover.jpg';
import axios from 'axios';

function ReservationForm() {
  const [formData, setFormData] = useState({
    chambre_id: '',
    date_debut: '',
    date_fin: '',
  });
  const [utilisateurId, setUtilisateurId] = useState(null); // Stocke l'ID utilisateur
  const [message, setMessage] = useState('');

  // Récupérer l'ID utilisateur depuis le localStorage
  useEffect(() => {
    const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    if (utilisateur && utilisateur.id) {
      setUtilisateurId(utilisateur.id);
    } else {
      setMessage('La reservation est reservé à nos clients possédent un compte.');
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!utilisateurId) {
      setMessage('Impossible d\'envoyer la réservation : utilisateur non identifié.');
      return;
    }

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
    <div className="reservation">
      <div className='reservation-cover'>
        <img src={ReservationCover} alt="Reservation Cover" />
        <h2>Réserver une chambre</h2>
        <p>On vous invite à visiter notre page CHAMBRE pour trouver la suite qui vous convient puis stipuler simplement le numéro de chambre et vos dates .</p>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Numéro de Chambre :</label>
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
    </div>
  );
}

export default ReservationForm;
