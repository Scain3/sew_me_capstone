'use strict';
module.exports = (sequelize, DataTypes) => {
  const TailorMade = sequelize.define('TailorMade', {
    patternId: DataTypes.INTEGER,
    fabricId: DataTypes.INTEGER
  }, {});
  TailorMade.associate = function(models) {
    // associations can be defined here
  };
  return TailorMade;
};