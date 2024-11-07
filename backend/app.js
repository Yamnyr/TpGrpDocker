// app.js
const express = require('express');
const cors = require('cors'); // Importer le package CORS
const app = express();
const port = process.env.PORT || 5000;
const { sequelize } = require('./models'); // Importer l'instance de Sequelize
const messageRoutes = require('./routes/messageRoutes'); // Importer les routes

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json()); // Middleware pour parser le corps des requêtes en JSON

// Utiliser les routes pour les messages
app.use('/messages', messageRoutes);

// Synchroniser Sequelize et démarrer le serveur
sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
