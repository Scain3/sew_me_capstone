'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");
const { Address, Measurement } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'Lition',
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Fake',
        lastName: 'User1',
        username: 'FakeUser1',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Fake',
        lastName: 'User2',
        username: 'FakeUser2',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
