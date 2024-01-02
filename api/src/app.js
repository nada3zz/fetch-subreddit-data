
const express = require('express');
const admin = require('firebase-admin');
const { initializedApp } = require('./config/firebase');
const redditRoutes = require('./routes/redditRoutes');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/reddit', redditRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

