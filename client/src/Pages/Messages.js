import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Messages.css";
import React, { useState, useEffect, useRef, useContext } from "react";
import SendIcon from "@mui/icons-material/Telegram";
import Facetime from "@mui/icons-material/Videocam";
import { Avatar } from "@mui/material";
import { Fab } from "@mui/material";
import Images from "@mui/icons-material/InsertPhotoOutlined";
import FB from "@mui/icons-material/FacebookOutlined";
import IG from "@mui/icons-material/Instagram";
import MicIcon from "@mui/icons-material/Mic";
import UserImage from "../Components/UserImage";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Jisoo from "../Assets/Images/Cloud/Jisoo2.jpg";
import Jisoo2 from "../Assets/Images/Cloud/Jisoo.jpg";

import { io } from "socket.io-client";
import { getUser } from "../services/userService";
import {
  getConversations,
  getConversationOfTwoUsers,
} from "../services/conversationService";
import axios from "axios";
import Conversation from "../Components/Conversation";
import Message from "../Components/Message";
import { useParams } from "react-router-dom";

export default function Messages() {
  const { friendId } = useParams();
  const socket = useRef();
  const scrollRef = useRef();
  const userId = localStorage.getItem("UserId");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState([]);
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    getConversationOfTwoUsers(userId, friendId)
      .then((res) => setCurrentChat(res.data.conversation))
      .catch((err) => console.log(err));
  }, [friendId]);

  useEffect(() => {
    getUser(userId)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getUser(friendId)
      .then((res) => setFriend(res.data.user))
      .catch((err) => console.log(err));
  }, [friendId]);

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
  }, [user]);


  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/messages/" + currentChat?._id
        );
        setMessages(response.data.messages);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    document.getElementById("input-text").value = "";

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/messages",
        message
      );
      setMessages([...messages, response.data.newMessage]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  const calculateAge = (dob) => {
    const yearOfBirth = new Date(dob).getFullYear();
    const now = new Date().getFullYear();
    const age = now - yearOfBirth
    return age;
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const submitMessage = async (e) => {
    if (e.key === "Enter") {
      const message = {
        sender: user._id,
        text: newMessage,
        conversationId: currentChat._id,
      };
  
      const receiverId = currentChat.members.find(
        (member) => member !== user._id
      );
  
      document.getElementById("input-text").value = "";
  
      socket.current.emit("sendMessage", {
        senderId: user._id,
        receiverId,
        text: newMessage,
      });
  
      try {
        const response = await axios.post(
          "http://localhost:8000/messages",
          message
        );
        setMessages([...messages, response.data.newMessage]);
        setNewMessage("");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <Layout>
      <div className="Messages">
        <div className="Chat">
          <div className="WChat">
            <div className="Name">

              <h3>{friend.name}</h3>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                style={{ background: "#E94057", zIndex: "1" }}
              >
                <Facetime />
              </Fab>
            </div>
            <div className="History">
              {currentChat ? (
                <div>
                  {messages.map((m,index) => (
                    <div key={index} ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
              ) : (
                <span className="noConversationText">
                  Open a conversation to start a chat.
                </span>
              )}
            </div>
            <div className="ToolBox">
              <div className="image">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#F27121" }}
                >
                  <Images />
                </Fab>
              </div>
              <div className="voice">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#8A2BE2" }}
                >
                  <MicIcon />
                </Fab>
              </div>
              <div className="file">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#2374E1" }}
                >
                  <FB />
                </Fab>
              </div>
              <div className="file">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#e94057" }}
                >
                  <IG />
                </Fab>
              </div>
              <div className="text">
                <input
                  id="input-text"
                  type="text"
                  placeholder="Type a message"
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={submitMessage}
                />
              </div>
              <div className="send">
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  style={{ backgroundColor: "#e94057" }}
                >
                  <SendIcon onClick={handleSubmit} />
                </Fab>
              </div>
            </div>
          </div>
        </div>
        <div className="Profile">
          <div className="Main">
            {friend?.photo && <img src={require(`../Assets/Images/Cloud/${friend.photo}`)} />}
          </div>
          <div className="Info">
            <div className="Name">
              <h3>
                {friend.name}, <span>{calculateAge(friend.dob)}</span>
              </h3>
              <p>{friend.address}</p>
              <p>{friend.about}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

//DATA
const itemData = [
  {
    img: Jisoo,
    title: "Jisoo123",
  },
  {
    img: Jisoo2,
    title: "Jisoo123",
  },
  {
    img: Jisoo,
    title: "Jisoo123",
  },
  {
    img: Jisoo,
    title: "Jisoo123",
  },
  {
    img: Jisoo2,
    title: "Jisoo123",
  },
  {
    img: Jisoo,
    title: "Jisoo123",
  },
];