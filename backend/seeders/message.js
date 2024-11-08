'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('message', [
            { message: 'Github',
                lien: 'https://github.com/Yamnyr/TpGrpDocker',
                createdAt: new Date(),
                updatedAt: new Date()},
            { message: 'Presentation',
                lien: 'https://github.com/Yamnyr/TpGrpDocker',
                createdAt: new Date(),
                updatedAt: new Date()},
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('message', null, {});
    }
};
