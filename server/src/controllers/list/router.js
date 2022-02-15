const express = require('express');
const create = require('./create');
const get = require('./get');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', get);
router.delete('/:id', remove);

module.exports = router;
