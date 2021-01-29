'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bet = sequelize.define('Bet', {
    player: DataTypes.STRING,
    over: DataTypes.STRING,
    under: DataTypes.STRING,
    details: DataTypes.STRING
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