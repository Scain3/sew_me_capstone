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
          postalCode: 6000
        },
        {
          streetAddress1: '2222 Falsity',
          city: 'False',
          state: 'Florida',
          country: 'United States',
          postalCode: 9000
        },
        {
          streetAddress1: '1111 Fake Lane',
          city: 'Faker',
          state: 'Iowa',
          country: 'United States',
          postalCode: 3344
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
