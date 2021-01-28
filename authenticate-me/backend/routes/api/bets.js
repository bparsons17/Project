const express = require("express");
const router = express.Router()
const asyncHandler = require("express-async-handler");
const { Bet, Profile_Bet } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) =>{
    const bets = await Bet.findAll()
    res.json(bets)
}))
router.get('/profile', asyncHandler(async(req,res) => {
    const profileId = 1;
    const profileBets = await Profile_Bet.findAll({
        where: {
            profileId
        }, include: {
            model: Bet
        }
    })
    console.log(profileBets)
    res.json(profileBets)

}))

module.exports = router;