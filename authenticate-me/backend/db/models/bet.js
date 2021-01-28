'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    teams: DataTypes.STRING,
    homeTeamMoneyLine: DataTypes.STRING,
    awayTeamMoneyLine: DataTypes.STRING,
    homeTeamSpread: DataTypes.STRING,
    awayTeamSpread: DataTypes.STRING,
    overTotal: DataTypes.STRING,
    underTotal: DataTypes.STRING,
    details: DataTypes.TEXT,
    profileId: DataTypes.INTEGER
  }, {});
  Bet.associate = function(models) {
    // associations can be defined here
     const columnMapping = {
       through: 'Profile_Bet',
       foreignKey: 'betId',
       otherKey: 'profileId'
     }
     Bet.belongsToMany(models.Profile, columnMapping);
  };
  return Bet;
};