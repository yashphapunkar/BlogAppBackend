const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const Likes = require('../models/likeModel');

const createPost = async (req, res) => {
  try{

    const {title, body} = req.body;

    const post = new Post({
        title,
        body
    });

    const savePost = await post.save();


    res.status(200).json({
        post: savePost,
        message: "Your post is sucessfully created now"
    })

  }

  catch(err){
    res.status(500).json({
        message: "Error while creating the post"
    })

  }
}



const getAllPosts = async (req, res) => {
    try{
     const allPosts = await Post.find({}).populate('likes').populate('comments');

     res.status(200).json({
        posts: allPosts,
        message: "These  are all the saved posts",
     });
    }
    catch(err){
        res.status(500).json({
            message: "Error while creating the post"
        })
    }
}

module.exports = {createPost, getAllPosts};