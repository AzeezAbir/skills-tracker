const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows your server to parse JSON data

// Basic Route for Testing
app.get("/", (req, res) => {
  res.send("Skills-Tracker API is running perfectly!");
});

// Server Setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
