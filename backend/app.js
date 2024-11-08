const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { sequelize } = require('./models');
const runSeeders = require('./seeders');
const messageRoutes = require('./routes/messageRoutes');

const db = require('./models');
app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());

app.use('/messages', messageRoutes);

async function resetDatabase() {
    try {
        // Force: true va supprimer et recréer toutes les tables
        await db.sequelize.sync({ force: true });
        console.log('Base de données réinitialisée avec succès');

        // Exécuter les seeders après la réinitialisation
        await runSeeders();
        console.log('Données initiales insérées avec succès');
    } catch (error) {
        console.error('Erreur lors de la réinitialisation de la base de données:', error);
        throw error;
    }
}

async function startServer() {
    try {
        // Réinitialiser la base de données
        await resetDatabase();

        // Démarrer le serveur
        app.listen(port, () => {
            console.log(`Serveur en cours d'exécution sur le port ${port}`);
        });
    } catch (error) {
        console.error('Erreur lors du démarrage du serveur:', error);
        process.exit(1);
    }
}

// Lancer le serveur
startServer();