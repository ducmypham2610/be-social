const Message = require("../models/messageModel");

// add (send) message
exports.addMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);
  console.log(newMessage);
  return res.status(200).json({
    message: "success",
    newMessage,
  });
};

// get message
exports.getMessage = async (req,res) => {
    const convId = req.params.conversationId;
    const messages = await Message.find({
        conversationId: convId
    })

    if(!messages) {
        return res.status(204).json({
            message:"No messages found!"
        })
    }

    return res.status(200).json({
        message: "success",
        messages
    })
}
