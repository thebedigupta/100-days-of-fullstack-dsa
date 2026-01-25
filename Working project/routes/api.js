const express = require("express");
const router = express.Router();
const User = require("../models/User");

const MIN_USERNAME_LENGTH = 6;
const MIN_PASSWORD_LENGTH = 6;

function validateUsername(username) {
  if (!username) return "Username is required";
  if (username.length < MIN_USERNAME_LENGTH)
    return `Username must be ${MIN_USERNAME_LENGTH} characters`;
  return null;
}

router.post("/hello", (req, res) => {
  const username = req.body.username?.trim();

  const error = validateUsername(username);
  if (error) return res.status(400).json({ error });

  res.status(200).json({
    message: `Hello ${username.toUpperCase()}`,
  });
});

router.post("/submit", async (req, res) => {
    console.log("POST /api/submit hit", req.body);
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  try {
    const user = await User.create({
      username,
      password,
      email,
    });
    console.log("Saved user:", user);
    res.status(201).json({
      message: "User saved to database",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user " });
  }
});

module.exports = router;
