const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.post('/', postController.uploadPostImage , postController.createPost);
router.get('/:userId',postController.findPostsByUserId);
router.get('/:id',postController.getPostById);
router.delete('/:id',postController.deletePost);
router.get('/',postController.getAllPosts);
router.patch('/:id/likePost',postController.likePost);

module.exports = router;