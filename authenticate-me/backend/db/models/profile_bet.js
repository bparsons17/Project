'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile_Bet = sequelize.define('Profile_Bet', {
    betId: DataTypes.INTEGER,
    profileId: DataTypes.INTEGER
  }, {});
  Profile_Bet.associate = function(models) {
    // associations can be defined here
    Profile_Bet.belongsTo(models.Bet, { foreignKey: "betId" });
    Profile_Bet.belongsTo(models.Profile, { foreignKey: "profileId" });
  };
  return Profile_Bet;
};