 //import the mongoose library
 const mongoose = require('mongoose');

 const commentSchema = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" //this is a reference to the post model
    },

    user: {
        type: String,
        required: true,
    },

    body: {
        type: String,
        required: true,
    }

 });

 //export
 module.exports = mongoose.model('Comment', commentSchema);