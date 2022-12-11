const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require('./routes/userRoutes');
const swipeRoutes = require('./routes/swipeRoutes');
const messageRoutes = require('./routes/messageRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const typeRoutes = require('./routes/typeRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "10kb",
  })
);

app.use("/users",userRoutes);
app.use("/swipe",swipeRoutes);
app.use("/conversations",conversationRoutes);
app.use("/messages",messageRoutes);
app.use("/posts",postRoutes);
app.use("/comments",commentRoutes);
app.use("/types",typeRoutes);

module.exports = app;