const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Bet } = require("../../db/models");

router.post('/saveBets', asyncHandler(async (req,res) => {
    const { teams, homeTeamMoneyLine, awayTeamMoneyLine, homeTeamSpread, awayTeamSpread, overTotal, underTotal, details, profileId } = req.body
    const bet = await Bet.create({
      profileId,
      teams,
      homeTeamMoneyLine,
      awayTeamMoneyLine,
      homeTeamSpread,
      overTotal,
      underTotal,
      details,
    });
    
    res.json({ bet })
    
}))

module.exports = router;