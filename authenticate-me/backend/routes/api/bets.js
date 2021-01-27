const express = require("express");
const router = express.Router()
const asyncHandler = require("express-async-handler");
const { Bet } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) =>{
    const bets = await Bet.findAll()
    res.json(bets)
}))

module.exports = router;