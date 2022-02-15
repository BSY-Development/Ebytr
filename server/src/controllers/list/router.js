const express = require('express');
const create = require('./create');
const get = require('./get');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', get);

module.exports = router;
