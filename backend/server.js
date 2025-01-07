const express = require('express');
require('dotenv').config();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD, // Vide par défaut sur XAMPP
  database: process.env.MYSQL_DATABASE, // Remplacez par le nom de votre base de données
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
  
    // Vérification des données reçues
    if (!pseudo || !email || !mot_de_passe) {
      return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
    }
  
    // Insertion dans la base de données
    const sql = 'INSERT INTO utilisateurs (pseudo, email, mot_de_passe, adresse_postale, telephone) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [pseudo, email, mot_de_passe, adresse_postale, telephone], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'insertion :', err);
        return res.status(500).json({ message: 'Erreur du serveur.' });
      }
      res.status(201).json({ message: 'Inscription réussie.', userId: result.insertId });
    });
  });
  

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
