'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs");
const { Address, Measurement } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // const address1 = await Address.findOne({
    //   where: {
    //     state: 'Georgia'
    //   }
    // })

    // const address2 = await Address.findOne({
    //   where: {
    //     state: 'Florida'
    //   }
    // })

    // const address3 = await Address.findOne({
    //   where: {
    //     state: 'Iowa'
    //   }
    // })

    // const measure1 = await Measurement.findOne({
    //   where: {
    //     chest: 40.5
    //   }
    // })

    // const measure2 = await Measurement.findOne({
    //   where: {
    //     chest: 32
    //   }
    // })

    // const measure3 = await Measurement.findOne({
    //   where: {
    //     chest: 35
    //   }
    // })

    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Demo',
        lastName: 'Lition',
        username: 'Demo-lition',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        addressId: 1,
        measurementId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Fake',
        lastName: 'User1',
        username: 'FakeUser1',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        addressId: 2,
        measurementId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Fake',
        lastName: 'User2',
        username: 'FakeUser2',
        email: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        addressId: 3,
        measurementId: 3,
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