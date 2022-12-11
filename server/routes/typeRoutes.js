const express = require('express');
const typeController = require('../controllers/typeController');
const router = express.Router();

router.post('/',typeController.createType);
router.get('/',typeController.getAllTypes);
router.get('/:id',typeController.getTypeById);

module.exports = router;