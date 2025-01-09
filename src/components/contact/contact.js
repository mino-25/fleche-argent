import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';
import ContactCover from '../assets/contact-cover.jpg';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    entreprise: '',
    email: '',
    pays: '',
    sujet: '',
    message: '',
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
      .post('http://localhost:5000/api/contact', formData)
      .then((response) => {
        setMessage('Votre message a bien été envoyé.');
        setFormData({
          nom: '',
          prenom: '',
          entreprise: '',
          email: '',
          pays: '',
          sujet: '',
          message: '',
        });
      })
      .catch((error) => {
        setMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
      });
  };

  return (
    <div className="contact">
      <img src={ContactCover} alt="" />
      <h1>Contact</h1>
      {message && <p>{message}</p>}
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div>
          <label>Prénom :</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>
        <div>
          <label>Entreprise :</label>
          <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Pays :</label>
          <input type="text" name="pays" value={formData.pays} onChange={handleChange} />
        </div>
        <div>
          <label>Sujet :</label>
          <input type="text" name="sujet" value={formData.sujet} onChange={handleChange} required />
        </div>
        <div>
          <label>Message :</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
