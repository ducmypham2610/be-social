const mongoose = require("mongoose");
const {Schema} = mongoose;

const supportSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    title: {
        type: String
    },
    message: {
        type: String
    },
    isAnswered: {
        type: Boolean,
        default: false
    }
},{
    timestamps:true
})

const Support = mongoose.model("Support", supportSchema);

module.exports = Support;