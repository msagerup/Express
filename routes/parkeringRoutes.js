const express = require('express');
const parkeringController = require('../controllers/parkeringController.js');
const router = express.Router();

router.get('/parkering', parkeringController.parkeringsArea);

module.exports = router;
