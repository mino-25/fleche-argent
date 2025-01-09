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

    // Récupérer les informations de l'utilisateur inscrit
    const userSql = 'SELECT * FROM utilisateurs WHERE id = ?';
    db.query(userSql, [result.insertId], (err, userResult) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'utilisateur inscrit :', err);
        return res.status(500).json({ message: 'Erreur du serveur.' });
      }

      // Renvoyer les informations de l'utilisateur inscrit dans la réponse
      const user = userResult[0];
      res.status(201).json({ message: 'Inscription réussie.', user });
    });
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

app.post('/api/contact', (req, res) => {
  const { nom, prenom, entreprise, email, pays, sujet, message } = req.body;

  // Étape 1 : Log des données reçues
  console.log('Données reçues :', req.body);

  if (!nom || !prenom || !email || !sujet || !message) {
    console.log('Champs obligatoires manquants');
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  const sql = 'INSERT INTO contacts (nom, prenom, entreprise, email, pays, sujet, message, date_envoie) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())';

  // Étape 2 : Log avant l'exécution de la requête SQL
  console.log('Requête SQL :', sql);

  db.query(sql, [nom, prenom, entreprise, email, pays, sujet, message], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion dans la base de données :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }

    // Étape 3 : Log après l'insertion réussie
    console.log('Message inséré avec succès, ID :', result.insertId);
    res.status(201).json({ message: 'Message envoyé avec succès.' });
  });
});

// Route pour récupérer tous les messages de contact
app.get('/messages', (req, res) => {
  const sql = 'SELECT * FROM contacts ORDER BY date_envoie DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des messages :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.json(results);
  });
});

// Route pour supprimer un message
app.delete('/messages/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM contacts WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression du message :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.json({ message: 'Message supprimé avec succès.' });
  });
});




app.post('/api/reservation', (req, res) => {
  const { utilisateur_id, chambre_id, date_debut, date_fin } = req.body;

  if (!utilisateur_id || !chambre_id || !date_debut || !date_fin) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
  }

  // Vérifier si la chambre est disponible
  const checkAvailabilitySql = `
    SELECT * FROM reservations
    WHERE chambre_id = ?
    AND (date_debut <= ? AND date_fin >= ?)
  `;

  db.query(checkAvailabilitySql, [chambre_id, date_fin, date_debut], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification de la disponibilité :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'La chambre n\'est pas disponible pour ces dates.' });
    }

    // Ajouter la réservation
    const reservationSql = `
      INSERT INTO reservations (utilisateur_id, chambre_id, date_debut, date_fin)
      VALUES (?, ?, ?, ?)
    `;
    db.query(reservationSql, [utilisateur_id, chambre_id, date_debut, date_fin], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de la réservation :', err);
        return res.status(500).json({ message: 'Erreur du serveur.' });
      }

      res.status(201).json({ message: 'Réservation réussie.', reservationId: result.insertId });
    });
  });
});

// Route pour récupérer les réservations
app.get('/reservations', (req, res) => {
  const sql = `
    SELECT r.id, r.date_debut, r.date_fin, r.chambre_id, u.pseudo, u.email
    FROM reservations r
    JOIN utilisateurs u ON r.utilisateur_id = u.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des réservations :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.json(results);
  });
});

app.delete('/reservations/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM reservations WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de la réservation :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.json({ message: 'Réservation supprimée avec succès.' });
  });
});

app.delete('/utilisateurs/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM utilisateurs WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.json({ message: 'Utilisateur supprimé avec succès.' });
  });
});


// Route pour récupérer les réservations d'un utilisateur
app.get('/reservations/:utilisateurId', (req, res) => {
  const utilisateurId = req.params.utilisateurId;
  const sql = 'SELECT * FROM reservations WHERE utilisateur_id = ?';

  db.query(sql, [utilisateurId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});


// Route pour mettre à jour les informations de l'utilisateur
app.put('/utilisateurs/:id', (req, res) => {
  const { id } = req.params;
  const { pseudo, email, adresse_postale, telephone } = req.body;

  const sql = `
    UPDATE utilisateurs
    SET pseudo = ?, email = ?, adresse_postale = ?, telephone = ?
    WHERE id = ?
  `;

  db.query(sql, [pseudo, email, adresse_postale, telephone, id], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour des informations :', err);
      return res.status(500).json({ message: 'Erreur du serveur.' });
    }
    res.json({ message: 'Informations mises à jour avec succès.' });
  });
});

// Route pour récupérer tous les avis
app.get('/avis', (req, res) => {
  db.query('SELECT * FROM avis ORDER BY date_creation DESC', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur de récupération des avis' });
    } else {
      res.json(results);
    }
  });
});

// Route pour ajouter un nouvel avis
app.post('/avis', (req, res) => {
  const { nom, avis } = req.body;
  const query = 'INSERT INTO avis (nom, avis) VALUES (?, ?)';
  db.query(query, [nom, avis], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'avis' });
    } else {
      res.status(201).json({ id: results.insertId, nom, avis });
    }
  });
});



// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
