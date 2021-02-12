'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Carts', [
        {userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Carts', null, {});

  }
};
