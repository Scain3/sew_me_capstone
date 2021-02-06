'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItems = sequelize.define('CartItems', {
    patternId: DataTypes.INTEGER,
    tailorId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER,
    pattern_quantity: DataTypes.INTEGER,
    fabric_quantity: DataTypes.INTEGER
  }, {});
  CartItems.associate = function(models) {
    // associations can be defined here
  };
  return CartItems;
};