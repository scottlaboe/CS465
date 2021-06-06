const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/trips');

/* GET home page */
router
    .route('/trips')
    .get(ctrlMain.tripsList);

router
    .route('/trips/:tripCode')
    .get(ctrlMain.tripsFindByCode);

module.exports = router;