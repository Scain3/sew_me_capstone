'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Addresses', [
        {
          streetAddress1: 'Unit 42',
          streetAddress2: '3465 Fakeway',
          city: 'Peith',
          state: 'Georgia',
          country: 'United States',
          postalCode: 6000,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          streetAddress1: '2222 Falsity',
          streetAddress2: null,
          city: 'False',
          state: 'Florida',
          country: 'United States',
          postalCode: 9000,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          streetAddress1: '1111 Fake Lane',
          streetAddress2: null,
          city: 'Faker',
          state: 'Iowa',
          country: 'United States',
          postalCode: 3344,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
