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
         bet: "Over 24.5 points",
         details:
           "Wlll Lebron James score over 24.5 points against the Dallas Mavericks?",
         odds: "-125",
         opponent: "Dallas Mavericks",
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         id:2,
         player: "Lebron James",
         bet: "Under 24.5 points",
         details:
           "Wlll Lebron James score less than 24.5 points against the Dallas Mavericks?",
         odds: "+105",
         opponent: "Dallas Mavericks",
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       { 
         id:3,
         player: "Luka Doncic",
         bet: "Over 8.5 assists",
         details:
           "Wlll Luka Doncic have more than 8.5 assists vs the Los Angeles Lakers",
         odds: "-102",
         opponent: "Los Angeles Lakers",
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         id:4,
         player: "Luka Doncic",
         bet: "Under 8.5 assists",
         details:
           "Wlll Luka Doncic have less than 8.5 assists vs the Los Angeles Lakers",
         odds: "-118",
         opponent: "Los Angeles Lakers",
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

      */
   Example:
   return queryInterface.bulkDelete('Bets', null, {});
  }
};
