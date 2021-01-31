'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Profile_Bets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      betId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Bets" },
      },
      profileId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Profiles" },
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
    return queryInterface.dropTable('Profile_Bets');
  }
};