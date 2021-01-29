const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const betsRouter = require('./bets.js')
const betRouter = require('./bet')
const profileRouter = require('./profile.js')

const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../../utils/auth.js");
const { User } = require("../../db/models");
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
router.use("/session", sessionRouter);

router.use("/users", usersRouter);
router.use('/bets', betsRouter)
router.use('/bet', betRouter)
router.use('/profile', profileRouter)



// router.post("/test", function (req, res) {
//   res.json({ requestBody: req.body });
// });




module.exports = router;
