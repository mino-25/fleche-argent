const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Vide par défaut sur XAMPP
  database: 'login', // Remplacez par le nom de votre base de données
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.log('Erreur de connexion à la base de données :', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});

// Route pour récupérer les utilisateurs
app.get('/utilisateurs', (req, res) => {
  const sql = 'SELECT * FROM utilisateurs';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Route pour l'inscription
app.post('/api/inscription', (req, res) => {
  const { pseudo, email, mot_de_passe, adresse_postale, telephone } = req.body;

  if (!pseudo || !email || !mot_de_passe) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  const sql = 'INSERT INTO utilisateurs (pseudo, email, mot_de_passe, adresse_postale, telephone) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [pseudo, email, mot_de_passe, adresse_postale, telephone], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.status(201).json({ message: 'Inscription réussie.', userId: result.insertId });
  });
});

// Route pour la connexion
app.post('/api/connexion', (req, res) => {
  const { email, mot_de_passe } = req.body;

  if (!email || !mot_de_passe) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
  }

  const sql = 'SELECT * FROM utilisateurs WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Erreur lors de la requête :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé.' });
    }

    const user = results[0];

    // Comparaison directe des mots de passe
    if (user.mot_de_passe !== mot_de_passe) {
      return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }

    res.status(200).json({ message: 'Connexion réussie.', user });
  });
});

// Route pour gérer les messages de contact
app.post('/api/contact', (req, res) => {
  const { nom, prenom, entreprise, email, pays, sujet, message } = req.body;

  if (!nom || !prenom || !email || !sujet || !message) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  const sql = 'INSERT INTO contacts (nom, prenom, entreprise, email, pays, sujet, message, date_envoie) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())';
  db.query(sql, [nom, prenom, entreprise, email, pays, sujet, message], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.status(201).json({ message: 'Message envoyé avec succès.' });
  });
});

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
