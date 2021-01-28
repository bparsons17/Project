'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "Profile_Bet",
      foreignKey: 'profileId',
      otherKey: 'betId'
    }
    Profile.belongsTo(models.User, {foreignKey: 'userId'})
    Profile.belongsToMany(models.Bet, columnMapping)
  };
  return Profile;
};