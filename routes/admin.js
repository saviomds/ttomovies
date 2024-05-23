const express = require("express");
const router = express.Router();
const path = require("path");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  // Check if username and password match the credentials
  if (username === "admin" && password === "01010") {
    res.sendFile(path.join(__dirname, "../public/update/admin.html"));
  } else {
    res.send("Invalid credentials");
  }
});

module.exports = router;
