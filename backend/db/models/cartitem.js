'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    patternId: DataTypes.INTEGER,
    patternColor: DataTypes.STRING,
    patternType: DataTypes.STRING,
    patternImage: DataTypes.TEXT,
    tailorId: DataTypes.INTEGER,
    cartId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER,
    fabricColor: DataTypes.STRING,
    fabricType: DataTypes.STRING,
    fabricImage: DataTypes.TEXT,
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
