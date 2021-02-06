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
        allowNull: false,
        references: { model: "Patterns" }
      },
      tailorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "TailorMades" }
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Carts" }
      },
      fabricId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Fabrics" }
      },
      pattern_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fabric_quantity: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('CartItems');
  }
};
