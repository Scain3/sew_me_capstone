'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fabric = sequelize.define('Fabric', {
    type: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING
  }, {});
  Fabric.associate = function(models) {
    // associations can be defined here
    Fabric.hasMany(models.TailorMade, {foreignKey: 'fabricId'});
    Fabric.hasMany(models.CartItem, {foreignKey: 'fabricId'})
  };
  return Fabric;
};
