const express = require("express");
const router = express.Router();

router.get("/test", (req, res) =>
  res.json({ msg: "routing from the profile is working" })
);

module.exports = router;
