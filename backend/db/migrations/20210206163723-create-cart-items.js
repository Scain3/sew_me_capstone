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
      patternCompany: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      patternNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      patternType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      patternImage: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tailorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "TailorMades" }
      },
      tailorType: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tailorColor: {
        type: Sequelize.STRING,
        allowNull: true

      },
      tailorImages: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
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
      fabricColor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fabricType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fabricImage: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
