const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/register.html"));
});

module.exports = router;
