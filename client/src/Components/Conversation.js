import React, { useEffect, useState } from "react";
import "../Assets/CSS/Pages/Messages.css";
import { getUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import Nancy from '../Assets/Images/Cloud/Nancy.jpg';
import { Avatar } from "@mui/material";


function Conversation({ conversation, currentUser }) {
  let navigate = useNavigate();
  const friendId = conversation.members.find((m) => m !== currentUser._id);
  const [user, setUser] = useState(null);

  const onClickConversation = () => {
    navigate(`/messages/${friendId}`);
  }

  useEffect(() => {
    getUser(friendId)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, [currentUser, conversation]);
  return (
    <div onClick={() => onClickConversation()}>
      <div className="KeyChat Selected">
        <div className="KeyChatImage">
          {user?.photo && (
            <Avatar src={require(`../Assets/Images/Cloud/${user.photo}`)} />
          )}
        </div>
        <div className="KeyChatName">
          <h3>{user?.name}</h3>
        </div>
        <div className="KeyChatTime">
        </div>
      </div>
    </div>
  );
}

export default Conversation;