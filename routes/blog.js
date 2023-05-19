const  express = require('express');
const router = express.Router();


//match controller and the routes
const createComment = require('../controllers/commentContoller');
const {createPost, getAllPosts} = require('../controllers/PostController');
const {createLike, unlikePost} = require('../controllers/LikeController');

router.get('/posts', getAllPosts);
router.post('/comments/create', createComment)
router.post('/posts/create', createPost);
router.post('/like/create', createLike);
router.post('/like/unlike', unlikePost);

module.exports = router;