const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Bet } = require('../../db/models')


router.get(
  "/:betId",
  asyncHandler(async (req, res) => {
    const betId = parseInt(req.params.betId, 10);
    const bet = await Bet.findByPk(betId);
    return res.json(bet);
  })
);

module.exports = router;