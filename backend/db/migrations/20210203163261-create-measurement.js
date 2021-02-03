'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Measurements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chest: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shoulders: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      sleeves: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      biceps: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      wrist: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      waist: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      jacketLength: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Measurements');
  }
};
