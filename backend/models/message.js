
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
        }
    }, {
        tableName: 'message',
        timestamps: true
    });

    return Message;
};
