const express = require('express');
const conversationController = require('../controllers/conversationController');
const router = express.Router();

// routes
router.post("/",conversationController.startConversation);
router.get("/:userId",conversationController.getConversation);
router.get("/find/:firstUserId/:secondUserId",conversationController.getConversationOfTwoUsers);

module.exports = router;