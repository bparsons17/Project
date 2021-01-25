'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    teams: DataTypes.STRING,
    moneyline: DataTypes.STRING,
    spread: DataTypes.STRING,
    total: DataTypes.STRING,
    details: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Bet.associate = function(models) {
    // associations can be defined here
    Bet.belongsTo(models.User, { foreignKey: 'userId'})
    Bet.hasMany(models.Profile, { foreignKey: 'betId' })
  };
  return Bet;
};