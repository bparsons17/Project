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
         homeTeamMoneyLine: "KC -166",
         awayTeamMoneyLine: "TB +146",
         homeTeamSpread: "KC -3",
         awayTeamSpread: "TB +3",
         overTotal: "o57",
         underTotal: "u57",
         details:
           "Game will take place at Raymond James Stadium in Tampa Bay Florida",
         profileId: 1,
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         teams: "LA Rams vs Green Bay Packers",
         homeTeamMoneyLine: "GB -332",
         awayTeamMoneyLine: "LA +290",
         homeTeamSpread: "GB -7",
         awayTeamSpread: "LA +7",
         overTotal: "o47",
         underTotal: "u47",
         details:
           "Game will take place at Lambeau Field in Green Bay Wisconsin",
         profileId: 1,
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         teams: "Baltimore Ravens vs Buffalo Bills",
         homeTeamMoneyLine: "BUFF -170",
         awayTeamMoneyLine: "BAL +150",
         homeTeamSpread: "BUFF -3",
         awayTeamSpread: "BAL +3",
         overTotal: "o49",
         underTotal: "u49",
         details: "Game will take place at Orchard Park in Buffalo New York",
         profileId: 1,
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         teams: "Pittsburgh Steelers vs Cleveland Browns",
         homeTeamMoneyLine: "PITT -175",
         awayTeamMoneyLine: "CLE +155",
         homeTeamSpread: "PITT -5",
         awayTeamSpread: "CLE +5",
         overTotal: "o47",
         underTotal: "u47",
         details:
           "Game will take place at Heinz Field in Pittsburgh Pennsylvania",
         profileId: 1,
         createdAt: new Date("2021-01-05"),
         updatedAt: new Date("2021-01-05"),
       },
       {
         teams: "New Oreleans Saints vs Carolina Panthers",
         homeTeamMoneyLine: "NO -260",
         awayTeamMoneyLine: "CAR +220",
         homeTeamSpread: "NO -6.5",
         awayTeamSpread: "CAR +6.5",
         overTotal: "o51",
         underTotal: "u51",
         details:
           "Game will take place at Mercedes-Benz Superdome in New Orleans Louisiana",
         profileId: 1,

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
