const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});
const authController = require('../controllers/authentication');
const ctrlMain = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

/* GET home page */
router
    .route('/trips')
    .get(ctrlMain.tripsList)
    .post(auth, ctrlMain.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(ctrlMain.tripsFindByCode)
    .put(auth, ctrlMain.tripsUpdateTrip);

module.exports = router;