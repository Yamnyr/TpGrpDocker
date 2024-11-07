'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('message', [
            { message: 'Voici notre projet docker',
                createdAt: new Date(),
                updatedAt: new Date()},
        ], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('message', null, {});
    }
};
