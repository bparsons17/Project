'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    player: DataTypes.STRING,
    bet: DataTypes.STRING,
    details: DataTypes.TEXT,
    odds: DataTypes.STRING,
    opponent: DataTypes.STRING
  }, {});
  Bet.associate = function(models) {
    // associations can be defined here
     const columnMapping = {
       through: "Profile_Bet",
       foreignKey: "betId",
       otherKey: "profileId",
     };
     Bet.belongsToMany(models.Profile, columnMapping);
  };
  return Bet;
};