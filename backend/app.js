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

db.sequelize.sync({ alter: false })
    .then(async () => {
        console.log('Base de données synchronisée');

        await runSeeders();

        app.listen(port, () => {
            console.log(`Serveur en cours d'exécution sur le port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Erreur de synchronisation de la base de données :', error);
    });
