const express = require('express');
const root = require('../controllers/root');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', root);

module.exports = app;
