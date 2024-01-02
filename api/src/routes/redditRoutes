const express = require('express');
const { fetchHot, fetchNew, fetchRising } = require('../controllers/redditController');

const router = express.Router();

router.get('/hot', fetchHot);
router.get('/new', fetchNew);
router.get('/rising', fetchRising);

module.exports = router;
