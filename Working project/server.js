const express = require("express");
const app = express();
const path = require("path");
const apiRoutes = require('./routes/api');

const port = 3000;

app.set("view engine", "ejs");

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use('/api',apiRoutes)


app.get("/", (req, res) => {
  res.render("index");
});


app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
