const { Router } = require('express');
const express = require('express');
const swipeController = require('../controllers/swipeController');

const router = express.Router();

router.put('/like',swipeController.handleSwipedRight);
module.exports = router;