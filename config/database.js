import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Création d'un pool de connexions
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}).promise();

// Fonction pour tester la connexion
async function testConnection() {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS solution');
        console.log('Connexion réussie. Résultat :', rows[0].solution); // Affiche 2
    } catch (err) {
        console.error('Erreur lors de la connexion ou de la requête :', err.message);
    }
}

// Appeler la fonction pour tester la connexion
testConnection();

// Exporter le pool pour utilisation dans d'autres fichiers
export default pool;
