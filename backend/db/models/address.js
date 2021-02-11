'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    streetAddress1: DataTypes.STRING,
    streetAddress2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.belongsTo(models.User, { foreignKey: 'userId'})
  };
  return Address;
};
