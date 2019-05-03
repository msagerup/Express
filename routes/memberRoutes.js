const express = require('express');
const memberController = require('../controllers/memberController');

const router = express.Router();
router.get('/members', memberController.members);

// Get single member
router.get('/members/:id', memberController.member);
// Create member
router.post('/members', memberController.createMember);

module.exports = router;