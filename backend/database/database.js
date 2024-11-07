
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mariadb',
        logging: console.log,
        retry: {
            max: 5,
            backoffBase: 1000,
            backoffExponent: 1.5,
        },
    }
);

module.exports = sequelize;