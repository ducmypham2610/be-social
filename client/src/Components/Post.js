import React, { useState } from "react";
import { addComment, likePost } from "../services/postService";
import { format } from "timeago.js";
import { Avatar } from "@mui/material";
import Love from "@mui/icons-material/FavoriteBorder";
import { Fab } from "@mui/material";
function Post({ data }) {
  const userId = localStorage.getItem("UserId");
  const postId = data._id;
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(data.like);

  const submitComment = (e) => {
    if (e.key === "Enter") {
      addComment(comment, userId, postId);
      document.getElementById("comment-input").value = "";
    }
  };

  const onClickLikePost = () => {
    likePost(postId)
      .then((res) => setLike(res.data.updatedPost.like))
      .catch((err) => console.log(err));
  };

  return (
    <div className="Post">
      <div className="PostHeader">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <div className="PostHeaderInfo">
          <h3>{data.user.name}</h3>
          <p>{format(data.created_at)}</p>
        </div>
      </div>
      <div className="PostBody">
        <p>{data.content}</p>
        {data.image && (
          <img
            className="postImages"
            src={require(`../Assets/Images/Post/${data.image}`)}
            alt="Post"
          />
        )}
      </div>
      <div className="PostFooter">
        <Fab
          size="small"
          aria-label="love"
          sx={{
            color: "#FFFFFF",
            background: "#E94057",
            marginRight: "3%",
            zIndex: "1",
            "&:hover": { color: "#942837" },
          }}
          onClick={onClickLikePost}
        >
          <Love />
        </Fab>
        <b>{like}</b>
        <input
          style={{
            outline: "none",
            width: "17rem",
            padding: "2%",
            fontSize: "1rem",
            backgroundColor: "#FFF",
            borderRadius: "10px",
            border: "1px solid #dedede",
            marginLeft: "5%",
          }}
          type="text"
          id="comment-input"
          placeholder="Add a comment..."
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={submitComment}
        />
      </div>
      {/* COMMENT */}
      {data.comments?.map((c) => (
        <div className="Comment">
          <div className="CommentHeader">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 35, height: 35, margin: 1 }}
            />
          </div>
          <div className="CommentBody">
            <div className="CommentHeaderInfo">
              <h3>{c.user.name}</h3>
              <p>{format(c.created_at)}</p>
            </div>
            <div className="CommentText">
              <p>{c.text} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
