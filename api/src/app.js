
const express = require('express');
const admin = require('firebase-admin');
const { initializedApp } = require('./config/firebase');
const redditRoutes = require('./routes/redditRoutes');


const app = express();
const port = 5000;

app.use(
  cors({
    origin: 'http://localhost:3000', 
    methods: 'GET', 
    credentials: true, 
  })
);

app.use(express.json());

app.use('/r/flutterDev', redditRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

