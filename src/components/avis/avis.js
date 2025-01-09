import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Avis() {
  const [nom, setNom] = useState('');
  const [avis, setAvis] = useState('');
  const [avisList, setAvisList] = useState([]);

  // Charger les avis depuis la base de données au chargement de la page
  useEffect(() => {
    axios
      .get('http://localhost:5000/avis') // Remplacez par l'URL correcte de votre backend
      .then((response) => {
        setAvisList(response.data); // Met à jour la liste des avis
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des avis :', error);
      });
  }, []);

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'nom') {
      setNom(value);
    } else if (name === 'avis') {
      setAvis(value);
    }
  };

  // Fonction pour soumettre un nouvel avis
  const handleSubmit = (e) => {
    e.preventDefault();

    // Création de l'avis à envoyer
    const newAvis = { nom, avis };

    axios
      .post('http://localhost:5000/avis', newAvis) // URL de l'API pour ajouter un avis
      .then((response) => {
        // Ajouter le nouvel avis à la liste existante
        setAvisList([response.data, ...avisList]);
        setNom('');
        setAvis('');
        alert('Avis envoyé avec succès');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'avis :', error);
        alert("Erreur lors de l'envoi de l'avis.");
      });
  };

  return (
    <div className="avis">
      <h1>Page des Avis</h1>

      {/* Formulaire d'ajout d'un avis */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={nom}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="avis">Avis</label>
          <textarea
            id="avis"
            name="avis"
            value={avis}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>

      {/* Affichage des avis */}
      <h2>Avis des utilisateurs</h2>
      {avisList.length > 0 ? (
        <ul>
          {avisList.map((item, index) => (
            <li key={item.id || index}>
              <strong>{item.nom} :</strong>
              <p>{item.avis}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun avis pour le moment.</p>
      )}
    </div>
  );
}

export default Avis;
