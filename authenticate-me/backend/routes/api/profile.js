
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Profile, Bet, Profile_Bet } = require('../../db/models')


router.get('/', asyncHandler(async(req,res) => {
    const profile = await Profile.findAll()
    res.json(profile);

}))

router.post('/:betId',
  asyncHandler(async (req, res) => {
  const betId = parseInt(req.params.betId, 10)
  const profileId = 1;
    console.log(betId);
    const saved = await Profile_Bet.create({
      betId,
      profileId,
    });
    res.json(saved);
  })
);
module.exports = router;