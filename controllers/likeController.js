const Like = require('../models/likeModel');
const Post = require('../models/postModel');


const createLike = async (req, res) => {

   try{

       const  {post, user} = req.body;

       const like = new Like({
         post, user
       });

       const likeSave = await like.save();

       const updatePost = await Post.findByIdAndUpdate(post, {$push: {likes: likeSave._id} }, {new: true})
       .populate('likes')
       .exec();

       res.status(200).json({
       post: updatePost,
       message: "your like is sucessfully saved"
       })


   }
   catch(err){

    res.statue(500).json({
      message: "Something went wrong with your apii please check the code"
    })

   }

}

const unlikePost = async (req, res) => {

  const {post, like} = req.body;

  const deleteLike = await Like.findOneAndDelete({post: post, _id: like});
  //update the post collection

  const  updatedPost = await Post.findByIdAndDelete(post, {$pull: {likes: deleteLike._id}}, {new: true})

  res.status(200).json({
    message: "You have sucessfully unliked the post",
  })
}

module.exports = {createLike, unlikePost};