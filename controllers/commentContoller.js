const Comment = require('../models/commentModel');
const Post = require('../models/postModel');
 
createComment = async (req, res) => {

    try{
        //fetch data from req boy
        const {post, user, body} = req.body;

        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //save this in the data base this is an alternative of create
        const savedComment = await comment.save();

        //find the  post using id and then add that post's comment array and add this comment to it,
        const updatedPost = await Post.findByIdAndUpdate(post,  {$push: {comments: savedComment._id} }, {new: true}  )
                                    .populate('comments')
                                    .exec();

       res.status(200).json({
         post: updatedPost
       })
        
    }
    catch(err){

        console.error(err.message);
        res.status(500).json({
            message: "Wrong call"
        })

    }

}

module.exports = createComment;