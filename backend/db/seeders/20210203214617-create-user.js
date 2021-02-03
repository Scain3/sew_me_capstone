'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");
const { Address, Measurement } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const address1 = await Address.findOne({
      where: {
        streetAddress1: 'Unit 42'
      }
    })

    const address2 = await Address.findOne({
      where: {
        streetAddress1: '2222 Falsity'
      }
    })

    const address3 = await Address.findOne({
      where: {
        streetAddress1: '1111 Fake Lane'
      }
    })

    const measure1 = await Measurement.findOne({
      where: {
        chest: 40.5
      }
    })

    const measure2 = await Measurement.findOne({
      where: {
        chest: 32
      }
    })

    const measure3 = await Measurement.findOne({
      where: {
        chest: 35
      }
    })

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'Lition',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        addressId: address1,
        measurementId: measure1,
      },
      {
        firstName: 'Fake',
        lastName: 'User1',
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        addressId: address2,
        measurementId: measure2,
      },
      {
        firstName: 'Fake',
        lastName: 'User2',
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        addressId: address3,
        measurementId: measure3,
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
