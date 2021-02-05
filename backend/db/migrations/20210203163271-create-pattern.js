'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Patterns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patternCompany: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      patternNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      patternType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image1: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image2: {
        type: Sequelize.TEXT,
      },
      image3: {
        type: Sequelize.TEXT,
      },
      image4: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
    return queryInterface.dropTable('Patterns');
  }
};
