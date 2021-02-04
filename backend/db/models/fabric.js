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
  };
  return Fabric;
};
