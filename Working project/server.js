const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/api');
const User = require('./models/User');
const connectDB = require('./config/db');

connectDB();

const port = 3000;

app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/dashboard', async (req, res) => {
  const users = await User.find().select('-password');
  res.render('dashboard', { users });
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
