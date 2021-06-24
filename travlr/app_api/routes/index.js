const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/trips');

/* GET home page */
router
    .route('/trips')
    .get(ctrlMain.tripsList)
    .post(ctrlMain.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(ctrlMain.tripsFindByCode)
    .put(ctrlMain.tripsUpdateTrip);

module.exports = router;