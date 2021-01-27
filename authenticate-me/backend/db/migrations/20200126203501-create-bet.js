'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teams: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeTeamMoneyLine: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      awayTeamMoneyLine: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      homeTeamSpread: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      awayTeamSpread: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      overTotal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      underTotal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      details: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: { model: 'Profiles'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bets');
  }
};