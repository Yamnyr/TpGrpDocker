const fs = require('fs');
const path = require('path');
const { sequelize } = require('../models');  // Assurez-vous que ce chemin est correct

async function runSeeders() {
    try {
        const seedersPath = path.join(__dirname);  // Dossier où se trouvent les seeders
        const seeders = fs
            .readdirSync(seedersPath)
            .filter(file => file.endsWith('.js') && file !== 'index.js')  // Exclut index.js

        for (const seederFile of seeders) {
            const seeder = require(path.join(seedersPath, seederFile));
            await seeder.up(sequelize.getQueryInterface(), sequelize);
        }

        console.log('Tous les seeders ont été exécutés avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'exécution des seeders :', error);
    }
}

module.exports = runSeeders;
