
const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { Profile } = require('../../db/models')


router.get('/', asyncHandler(async(req,res) => {
    const profile = await Profile.findAll()
    res.json(profile);

}))

module.exports = router;