const express = require("express");
const app = express();
const path = require("path");

const port = 3000 || env.process.port;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const username = req.body.username.trim().toUpperCase();
  const password = req.body.password.trim();

  res.render("dashboard", {
    username,
    password,
  });
});

app.post("/api/hello", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password is not below 6 Character" });
  }

  res.status(200).send({
    message: `User data recevied sucessfully`,
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
