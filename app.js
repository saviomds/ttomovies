const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/indexRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");

require("dotenv").config();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

app.use("/", indexRoutes);
app.use("/", registerRoutes);
app.use("/", loginRoutes);

app.use("/admin", adminRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
