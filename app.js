const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/login.html"));
});
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/update/admin.html"));
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
