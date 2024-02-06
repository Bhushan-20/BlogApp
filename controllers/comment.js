//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req,res) => {
    try{
        //fetch data 
        const {post,user,body} = req.body;
        //create a comment obj
        const comment = new Comment({
            post,user,body
        });

        const saveComment = await comment.save();

        //find the post using id and add  new comment to comment array
         const updatePost = await Post.findByIdAndUpdate(post,{$push: {comments: saveComment._id}},{new:true}).populate("comments").exec();
         res.status(200).json({
            post:updatePost,
         });

    }
    catch(error){
        return res.status(500).json({
            error: "Error While adding comment"
        })
    }
}