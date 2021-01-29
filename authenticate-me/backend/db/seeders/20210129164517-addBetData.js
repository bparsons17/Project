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
         id: 1,
         player: "Lebron James",
         over: "24.5 Points",
         under: "24.5 Points",
         details:
           "Will Lebron James score more or less than 24.5 points vs the Portland Trailblazers",
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         id: 2,
         player: "Luka Doncic",
         over: "8.5 assists",
         under: "8.5 assists",
         details:
           "Will Luka Doncic have more than 8.5 points vs the Orlando Magic",
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
