import React, { useState } from "react";
import { addComment, likePost } from "../services/postService";
import { format } from "timeago.js";
import { Avatar } from "@mui/material";
import Love from "@mui/icons-material/FavoriteBorder";
import { Fab } from "@mui/material";
import PostImage from "./PostImage";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Images from "@mui/icons-material/InsertPhotoOutlined";
import Link from "@mui/icons-material/Inventory2Outlined";
import FB from "@mui/icons-material/FacebookOutlined";
import IG from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/userService";
import { addPost, getPosts } from "../services/postService";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import axios from "axios";


function Post({ data }) {

  // Dialog
  const [user, setUser] = useState(null);
  const [open1, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [textPost, setTextPost] = useState("");
  const [fileList, setFileList] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUser(userId)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, [posts]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (fileList.length !== 0) {
      formData.append("image", fileList);
      console.log(fileList);
    }
    formData.append("user", userId);
    formData.append("content", textPost);
    addPost(formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(textPost);
    console.log(fileList);
    handleClose();
  };

  const onFileChange = (e) => {
    setFileList(e.target.files[0]);
  };


  const userId = localStorage.getItem("UserId");
  const postId = data._id;
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(data.like);

  const ITEM_HEIGHT = 48;

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose3 = () => {
    setOpen(false);
  };


  // Delete Post
  const deletePost = async(id) => {
    console.log(id);
    try {
      const response = await axios.delete(`http://localhost:8000/posts/${id}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // Update
  const updatePost = async(id, p) => {
    console.log(id, p);
    try {
      const response = await axios.patch(`http://localhost:8000/posts/${id}`,{content:p});
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    finally{
      handleClose3();
    }
  };



  return (
    <div className="Post">
      <div className="PostHeader">
        {data.user.photo ? (
          <Avatar src={require(`../../public/img/avatar/${data.user.photo}`)} />
        ) : (
          <Avatar
            src="/static/images/avatar/1.jpg"
            alt={data.user.name}
          />
        )}
        <div className="PostHeaderInfo">
          <h3>{data.user.name}</h3>
          <p>{format(data.created_at)}</p>
        </div>
        {/* Tạo button more */}
        { user?._id === data.user._id ? (
          <>
            <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
            <MoreVertIcon />
          </IconButton>
            <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{ marginLeft: "3%", marginTop: "-3%", padding: "1%", fontSize: "0.8rem"}}
            >
              <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
              <MenuItem onClick={()=>deletePost(data._id)}>Delete</MenuItem>
            </Menu>
          </>
        ):null}

        <Dialog
          onClose={handleClose}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open1}
        >
          <DialogTitle color={"#E94057"}>Edit Post</DialogTitle>
          <DialogContent>
            <DialogContentText>Hi {user?.name},</DialogContentText>
            <form>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                defaultValue={data.content}
                autoFocus
                margin="normal"
                id="post"
                label="My Post"
                type="textarea"
                fullWidth
                variant="outlined"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid #dedede",
                  outline: "none",
                  resize: "none",
                  fontSize: "1rem",
                  padding: "1rem",
                  fontFamily: "Roboto",
                  borderRadius: "5px",
                }}
                onChange={(e) => setTextPost(e.target.value)}
              />
              <div className="files">
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={onFileChange}
                  />
                  <Fab
                    sx={{ bgcolor: "#FFF", color: "#F27121" }}
                    component="span"
                    aria-label="add"
                  >
                    <Images />
                  </Fab>
                </label>

                <Fab
                  sx={{ bgcolor: "#FFF", color: "secondary", margin: 2 }}
                  aria-label="file"
                >
                  <Link />
                </Fab>
                <Fab sx={{ bgcolor: "#FFF", color: "#2374E1" }} aria-label="fb">
                  <FB />
                </Fab>
                <Fab
                  sx={{ bgcolor: "#FFF", color: "#E94057", margin: 2 }}
                  aria-label="ig"
                >
                  <IG />
                </Fab>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose1}
              sx={{
                color: "#E94057",
                border: "1px solid #E94057",
                "&:hover": {
                  backgroundColor: "#E94057",
                  color: "#FFF",
                  border: "1px solid #E94057",
                },
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={() => updatePost(data._id, textPost)}
              variant="contained"
              sx={{
                bgcolor: "#E94057",
                "&:hover": {
                  backgroundColor: "#942837",
                  color: "#FFF",
                },
              }}
            >
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="PostBody">
        <p>{data.content}</p>
        {data.image && (
          // <PostImage imageSource={data.image } />
          <img
            className="postImages"
            src={require(`../Assets/Images/Cloud/${data.image}`)}
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
        <div className="Comment" key={c._id}>
          <div className="CommentHeader">
          {c.user.photo ? <Avatar src={require(`../../public/img/avatar/${c.user.photo}`)} /> : <Avatar
                  src="/static/images/avatar/1.jpg"
                  alt={c.user.name}
                />}
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