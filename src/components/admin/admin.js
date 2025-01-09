import React, { useEffect, useState } from "react";
import axios from "axios";
import Delete from "../assets/delete.png";

function Admin() {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [messages, setMessages] = useState([]);

  // Récupérer les utilisateurs
  useEffect(() => {
    axios
      .get("http://localhost:5000/utilisateurs")
      .then((response) => setUtilisateurs(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des utilisateurs :", error));
  }, []);

  // Récupérer les réservations
  useEffect(() => {
    axios
      .get("http://localhost:5000/reservations")
      .then((response) => setReservations(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des réservations :", error));
  }, []);

  // Récupérer les messages de contact
  useEffect(() => {
    axios
      .get("http://localhost:5000/messages")
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Erreur lors de la récupération des messages :", error));
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:5000/utilisateurs/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setUtilisateurs((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
      });
  };

  const handleDeleteReservation = (id) => {
    axios
      .delete(`http://localhost:5000/reservations/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setReservations((prevReservations) =>
          prevReservations.filter((res) => res.id !== id)
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la réservation :", error);
      });
  };

  const handleDeleteMessage = (id) => {
    axios
      .delete(`http://localhost:5000/messages/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du message :", error);
      });
  };

  return (
    <div className="admin-page">
      <h1>Page Admin</h1>
      
      {/* Liste des utilisateurs */}
      <section>
        <h2>Utilisateurs</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pseudo</th>
              <th>Email</th>
              <th>Adresse</th>
              <th>Téléphone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {utilisateurs.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.pseudo}</td>
                <td>{user.email}</td>
                <td>{user.adresse_postale || "Non spécifié"}</td>
                <td>{user.telephone || "Non spécifié"}</td>
                <td>
                  <img
                    src={Delete}
                    alt="Supprimer"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleDeleteUser(user.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Liste des réservations */}
      <section>
        <h2>Réservations</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Utilisateur</th>
              <th>Email</th>
              <th>Chambre</th>
              <th>Date début</th>
              <th>Date fin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.pseudo}</td>
                <td>{res.email}</td>
                <td>{res.chambre_id}</td>
                <td>{res.date_debut}</td>
                <td>{res.date_fin}</td>
                <td>
                  <img
                    src={Delete}
                    alt="Supprimer"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleDeleteReservation(res.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Liste des messages */}
      <section>
        <h2>Messages de contact</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Pays</th>
              <th>Sujet</th>
              <th>Message</th>
              <th>Date d'envoi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.id}</td>
                <td>{msg.nom}</td>
                <td>{msg.prenom}</td>
                <td>{msg.email}</td>
                <td>{msg.pays || "Non spécifié"}</td>
                <td>{msg.sujet}</td>
                <td>{msg.message}</td>
                <td>{msg.date_envoie}</td>
                <td>
                  <img
                    src={Delete}
                    alt="Supprimer"
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    onClick={() => handleDeleteMessage(msg.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Admin;
