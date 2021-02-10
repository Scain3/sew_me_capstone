'use strict';
module.exports = (sequelize, DataTypes) => {
  const TailorMade = sequelize.define('TailorMade', {
    patternId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER,
    clothing: DataTypes.STRING,
    fabricType: DataTypes.STRING,
    fabricColor: DataTypes.STRING,
    patternImage: DataTypes.TEXT,
    fabricImage: DataTypes.TEXT,
    fabricQuantity: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  TailorMade.associate = function(models) {
    // associations can be defined here
    TailorMade.belongsTo(models.Pattern, {foreignKey: 'patternId'});
    TailorMade.belongsTo(models.Fabric, {foreignKey: 'fabricId'});
    TailorMade.hasMany(models.CartItem, {foreignKey: 'tailorId'});
  };
  return TailorMade;
};
