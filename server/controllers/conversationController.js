const Conversation = require("../models/conversationModel");

// start a new conversation
exports.startConversation = async (req, res) => {
  const newConversation = await Conversation.create({
    members: [req.body.senderId, req.body.receiverId],
  });

  return res.status(200).json({
    status: "success",
    newConversation,
  });
};

// get conversation of a user
exports.getConversation = async (req, res) => {
  const userId = req.params.userId;
  console.log(userId)
  const conversations = await Conversation.find({
    members: { $in: [userId] },
  });

  if (!conversations) {
    return res.status(204).json({
      status: "No conversation found with this user id",
    });
  }

  return res.status(200).json({
    status: "success",
    conversations,
  });
};

// get conversation includes two userId
exports.getConversationOfTwoUsers = async (req, res) => {
  const { firstUserId, secondUserId } = req.params;
  const conversation = await Conversation.findOne({
    members: { $all: [firstUserId, secondUserId] },
  });
  if (!conversation) {
    return res.status(204).json({
      message: "No conversation found",
    });
  }
  return res.status(200).json({
    message: "success",
    conversation,
  });
};
