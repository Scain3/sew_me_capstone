'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Measurements', [
      {
      chest,
      shoulders,
      sleeves,
      biceps,
      wrist,
      waist,
      jacketLength,
      height
    },
    {},
    {}], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Measurements', null, {});

  }
};
