'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pattern = sequelize.define('Pattern', {
    patternCompany: DataTypes.STRING,
    patternNumber: DataTypes.STRING,
    patternType: DataTypes.STRING,
    image1: DataTypes.TEXT,
    image2: DataTypes.TEXT,
    image3: DataTypes.TEXT,
    image4: DataTypes.TEXT,
    price: DataTypes.FLOAT
  }, {});
  Pattern.associate = function(models) {
    // associations can be defined here
    Pattern.hasMany(models.CartItem, {foreignKey: 'patternId'});
    Pattern.hasMany(models.TailorMade, {foreignKey: 'patternId'});
  };
  return Pattern;
};
