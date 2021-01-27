'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.hasMany(models.Bet, {foreignKey: 'profileId'})
    Profile.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Profile;
};