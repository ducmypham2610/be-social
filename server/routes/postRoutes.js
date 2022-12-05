const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/', postController.uploadPostImage , postController.createPost);
router.get('/:id',postController.getPostById);
router.get('/',postController.getAllPosts);

module.exports = router;