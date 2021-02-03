'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    streetAddress1: DataTypes.STRING,
    streetAddress2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};
