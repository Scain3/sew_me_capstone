'use strict';
module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define('CartItem', {
    patternId: DataTypes.INTEGER,
    patternCompany: DataTypes.STRING,
    patternNumber: DataTypes. STRING,
    patternType: DataTypes.STRING,
    patternImage: DataTypes.TEXT,
    tailorId: DataTypes.INTEGER,
    tailorType: DataTypes.STRING,
    tailorColor: DataTypes.STRING,
    tailorImage: DataTypes.STRING,
    cartId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER,
    fabricColor: DataTypes.STRING,
    fabricType: DataTypes.STRING,
    fabricImage: DataTypes.TEXT,
    fabricPrice: DataTypes.FLOAT,
    patternPrice: DataTypes.FLOAT,
    tailorPrice: DataTypes.FLOAT,
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
