'use strict';
module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define('Measurement', {
    chest: DataTypes.INTEGER,
    shoulders: DataTypes.INTEGER,
    sleeves: DataTypes.INTEGER,
    biceps: DataTypes.INTEGER,
    wrist: DataTypes.INTEGER,
    waist: DataTypes.INTEGER,
    jacket_length: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {});
  Measurement.associate = function(models) {
    // associations can be defined here
  };
  return Measurement;
};