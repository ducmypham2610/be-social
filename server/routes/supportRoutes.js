const express = require('express');
const supportController = require('../controllers/supportController');
const router = express.Router();

router.post('/',supportController.createSupport);
router.get('/',supportController.getAllSupports);

module.exports = router;