'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    betId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.belongsTo(models.User, { foreignKey: 'userId' })
    Profile.belongsTo(models.Bet, { foreignKey: 'betId' });
  };
  return Profile;
};