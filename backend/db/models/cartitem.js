'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    patternId: DataTypes.INTEGER,
    tailorId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER,
    pattern_quantity: DataTypes.INTEGER,
    fabric_quantity: DataTypes.INTEGER
  }, {});
  CartItem.associate = function(models) {
    // associations can be defined here
    CartItem.belongsTo(models.Cart, {foreignKey: 'cartId'});
    CartItem.belongsTo(models.TailorMade, {foreignKey: 'tailorId'});
    CartItem.belongsTo(models.Fabric, {foreignKey: 'fabricId'});
  };
  return CartItem;
};
