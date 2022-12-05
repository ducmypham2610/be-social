import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Post.css";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Avatar } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// import Comment from '@mui/icons-material/ShortText';

import { Fab } from "@mui/material";
import Images from "@mui/icons-material/InsertPhotoOutlined";
import Link from "@mui/icons-material/Inventory2Outlined";
import FB from "@mui/icons-material/FacebookOutlined";
import IG from "@mui/icons-material/Instagram";

import Post from "../Components/Post";

import { getUser } from "../services/userService";
import { addPost, getPosts } from "../services/postService";

export default function Global() {
  const userId = localStorage.getItem("UserId");
  const [user, setUser] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [textPost, setTextPost] = useState("");
  const [fileList, setFileList] = useState(null);
  const [posts, setPosts] = useState([]);

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
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitPost = () => {
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
  };

  const onFileChange = (e) => {
    setFileList(e.target.files[0]);
  };

  return (
    <Layout>
      <div className="Global">
        <Dialog
          onClose={handleClose}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
        >
          <DialogTitle color={"#E94057"}>Create Post</DialogTitle>
          <DialogContent>
            <DialogContentText>Hi {user?.name},</DialogContentText>
            <form>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                placeholder="What's on your mind?"
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
              onClick={handleClose}
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
              onClick={handleSubmitPost}
              variant="contained"
              sx={{
                bgcolor: "#E94057",
                "&:hover": {
                  backgroundColor: "#942837",
                  color: "#FFF",
                },
              }}
            >
              Post
            </Button>
          </DialogActions>
        </Dialog>
        {/* NewFeed */}
        <div className="NewFeed">
          <div className="ToolPost">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Button variant="outlined" onClick={handleClickOpen}>
              What's on your mind?
            </Button>
          </div>
          {posts && posts.slice().reverse().map((p) => <Post key={p._id} data={p} />)}
        </div>
      </div>
    </Layout>
  );
}
