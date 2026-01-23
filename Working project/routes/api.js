const express = require("express");
const router = express.Router();
const MIN_USERNAME_LENGTH = 6;
const MIN_PASSWORD_LENGTH = 6;

router.post("/hello", (req, res) => {
  const username = req.body.username?.trim();

  function validateUsername(username) {
    if (!username) return { error: "Username is required" };
    if (username.length < MIN_USERNAME_LENGTH)
      return `username must be ${MIN_USERNAME_LENGTH} characters`;
    return null;
  }
  const error = validateUsername(username);
  if (error) return res.status(400).json({ error });

  res.status(200).json({
    message: `Hello ${username.toUpperCase()}`,
  });
});

router.post("/submit", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return res
      .status(400)
      .json({ error: "Password must be at least 6 characters" });
  }

  res.status(200).json({
    message: "User data submitted Sucessfully",
  });
});

module.exports = router;
