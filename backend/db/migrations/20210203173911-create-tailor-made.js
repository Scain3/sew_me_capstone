'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TailorMades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patternId: {
        type: Sequelize.INTEGER,
        references: {  model: 'Patterns' }
      },
      fabricId: {
        type: Sequelize.INTEGER,
        references: { model: 'Fabrics' }
      },
      type: {
        type: Sequelize.STRING,
      },
      patternImage: {
        type: Sequelize.TEXT,
      },
      fabricImage: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.FLOAT,
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
    return queryInterface.dropTable('TailorMades');
  }
};
