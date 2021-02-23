'use strict';
module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define('Measurement', {
    chest: DataTypes.INTEGER,
    shoulders: DataTypes.INTEGER,
    sleeves: DataTypes.INTEGER,
    biceps: DataTypes.INTEGER,
    wrist: DataTypes.INTEGER,
    waist: DataTypes.INTEGER,
    jacketLength: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    hip: DataTypes.INTEGER,
    thighCircumference: DataTypes.INTEGER,
    kneeCircumference: DataTypes.INTEGER,
    ankleCircumference: DataTypes.INTEGER,
    waistToAnkle: DataTypes.INTEGER,
    ankleToKnee: DataTypes.INTEGER,
    kneeToThigh: DataTypes.INTEGER,
    backRise: DataTypes.INTEGER,
    frontRise: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Measurement.associate = function(models) {
    // associations can be defined here
    Measurement.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Measurement;
};
