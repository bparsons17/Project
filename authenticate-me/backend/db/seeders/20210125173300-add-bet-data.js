'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert(
     "Bets",
     [
       {
         teams: "Kansas City Chiefs vs Tampa Bay Buccaneers",
         moneyline: "KC -166 TB +146",
         spread: "KC -3 TB +3",
         total: "o57 u57",
         details:
           "Game will take place at Raymond James Stadium in Tampa Bay Florida",
         userId: 1,
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
     ],
     {}
   );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bets', null, {});
  }
};
