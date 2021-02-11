'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CartItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patternId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Patterns" }
      },
      tailorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "TailorMades" }
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Carts" }
      },
      fabricId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "Fabrics" }
      },
      pattern_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      fabric_quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
    return queryInterface.dropTable('CartItems');
  }
};
