const Post = require("../models/postModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/Assets/Images/Cloud");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

exports.uploadPostImage = multer({
  storage: storage,
}).single("image");

exports.createPost = async (req, res) => {
  let image;
  console.log(req.file);
  if (req.file) image = req.file.filename;
  const { user, content } = req.body;
  const post = await Post.create({ content, user, image });
  return res.status(200).json({
    status: "success",
    post,
  });
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  return res.status(200).json({
    status: "success",
    posts,
  });
};

exports.getPostById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const post = await Post.findById(id);
  if (!post) {
    return res.status(204).json({
      status: "No post found !",
    });
  }

  return res.status(200).json({
    status: "success",
    post,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!post) {
    return res.status(204).json({
      status: "Can not update post",
    });
  }

  return res.status(200).json({
    status: "Update successfully",
    post,
  });
};

exports.deletePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findByIdAndDelete(id);
  if (!post) {
    return res.status(204).json({
      status: "No content",
    });
  }

  return res.status(200).json({
    status: "Deleted successfully !",
  });
};

exports.likePost = async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id);
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { like: post.like + 1 },
    { new: true }
  );
  return res.status(200).json({
    status: "Liked",
    updatedPost,
  });
};

exports.findPostsByUserId = async (req,res) => {
  // console.log(req.params);
  const userId = req.params.userId;
  const posts = await Post.find({user:userId});
  // console.log(posts)
  if(!posts) {
    return res.status(204).json({
      status:"No posts found"
    })
  }
  return res.status(200).json({
    status:"Found posts",
    posts
  })
}