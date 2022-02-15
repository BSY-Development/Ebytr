const express = require('express');
const list = require('./list/router');

const root = express.Router({ mergeParams: true });

root.use('/list', list);

module.exports = root;
