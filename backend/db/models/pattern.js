'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pattern = sequelize.define('Pattern', {
    patternCompany: DataTypes.STRING,
    patternNumber: DataTypes.STRING,
    patternType: DataTypes.STRING,
    images: DataTypes.TEXT,
    price: DataTypes.FLOAT
  }, {});
  Pattern.associate = function(models) {
    // associations can be defined here
  };
  return Pattern;
};
