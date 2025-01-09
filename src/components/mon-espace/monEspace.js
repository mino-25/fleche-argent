import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MonEspace() {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    pseudo: '',
    email: '',
    adresse_postale: '',
    telephone: '',
  });
  const utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
  const navigate = useNavigate();

  // Récupérer les réservations de l'utilisateur et initialiser les données du formulaire
  useEffect(() => {
    if (utilisateur && !formData.pseudo) {  // Ajout d'une condition pour éviter de réinitialiser formData à chaque rendu
      console.log('Utilisateur récupéré:', utilisateur);

      // Récupérer les réservations de l'utilisateur
      axios
        .get(`http://localhost:5000/reservations/${utilisateur.id}`)
        .then((response) => setReservations(response.data))
        .catch((error) => console.error('Erreur lors de la récupération des réservations:', error));

      // Initialiser les données du formulaire avec les informations de l'utilisateur
      setFormData({
        pseudo: utilisateur.pseudo || '',
        email: utilisateur.email || '',
        adresse_postale: utilisateur.adresse_postale || '',
        telephone: utilisateur.telephone || '',
      });
    }
  }, [utilisateur, formData.pseudo]);  // La dépendance à formData.pseudo évite la boucle infinie

  // Fonction pour déconnecter l'utilisateur
  const handleLogout = () => {
    // Supprimer les informations utilisateur du localStorage
    localStorage.removeItem('utilisateur');
    // Rediriger vers la page d'accueil
    navigate('/');
  };

  // Fonction pour mettre à jour les informations utilisateur
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Valeur modifiée:', name, value); // Vérifie si on capte les changements
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data envoyé:', formData); // Vérifie les données envoyées

    axios
      .put(`http://localhost:5000/utilisateurs/${utilisateur.id}`, formData)
      .then((response) => {
        alert('Informations mises à jour avec succès');
        // Mettre à jour les données dans le localStorage
        localStorage.setItem('utilisateur', JSON.stringify({ ...utilisateur, ...formData }));
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour des informations :', error);
        alert("Erreur lors de la mise à jour des informations.");
      });
  };

  if (!utilisateur) {
    return <p>Chargement...</p>; // Affiche un message de chargement si l'utilisateur n'est pas encore défini
  }

  return (
    <div className="mon-espace">
      <h1>Mon Espace</h1>
      <p>Bienvenue, {utilisateur ? utilisateur.pseudo : 'Invité'} !</p>

      {/* Formulaire de modification des informations utilisateur */}
      <section>
        <h2>Modifier mes informations</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="adresse_postale">Adresse</label>
            <input
              type="text"
              id="adresse_postale"
              name="adresse_postale"
              value={formData.adresse_postale}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telephone">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sauvegarder</button>
        </form>
      </section>

      {/* Tableau des réservations de l'utilisateur */}
      <section>
        <h2>Mes Réservations</h2>
        {reservations.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Chambre</th>
                <th>Date Début</th>
                <th>Date Fin</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.chambre_id}</td>
                  <td>{reservation.date_debut}</td>
                  <td>{reservation.date_fin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Vous n'avez pas de réservations.</p>
        )}
      </section>

      {/* Bouton de déconnexion */}
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
}

export default MonEspace;
