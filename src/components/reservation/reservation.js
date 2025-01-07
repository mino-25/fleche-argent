const express = require('express');
const app = express();

app.post('/reserve', async (req, res) => {
    const { roomId, pseudoId, date, telephone, email, } = req.body;
    // Logique pour vérifier la disponibilité et réserver.
    res.send({ success: true, message: "Chambre réservée !" });
});

