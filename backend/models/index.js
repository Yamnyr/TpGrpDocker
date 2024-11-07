const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || 'database',
    process.env.MYSQL_USER || 'root',
    process.env.MYSQL_PASSWORD || 'root',
    {
        host: process.env.MYSQL_HOST || 'mysql',
        dialect: 'mysql',
        logging: false
    }
);

const Message = require('./message')(sequelize, DataTypes);

const db = {
    sequelize,
    Message
};

sequelize.sync()
    .then(() => {
        console.log("Les tables ont été créées!");
    })
    .catch((error) => {
        console.error('Erreur lors de la synchronisation de la base de données:', error);
    });

module.exports = db;
