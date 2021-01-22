const express = require("express");
const router = express.Router();
const apiRouter = require("./api");


router.use("/api", apiRouter);

router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello World!");
});

// Z6aNXpOX - untenHTt3jvTog50rlsJtaJPg_Y;

module.exports = router;
