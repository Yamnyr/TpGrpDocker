
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lien: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'message',
        timestamps: true
    });

    return Message;
};
