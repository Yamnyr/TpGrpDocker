module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('message', [{
            message: 'Voici notre projet docker',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('message', null, {});
    }
};
