const express = require('express');
const feedControler = require('../controllers/loggerController')

const router = express.Router();
router.get('/logger', feedControler.loggerGreeting)
router.get('/logger', feedControler.logger)

module.exports = router;