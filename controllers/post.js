const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{
         const {title,body} = req.body;
         const post = new Post({
            title,body,
         });
         const savePost = await post.save();

         res.status(200).json({
            success:true,
            post:savePost
         })

    }
    catch(error){
        return res.status(500).json({
            error: "Post Not Created!!",
        });
    }
}


exports.getAllposts = async (req,res) => {
   try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts
        })

   }
   catch(error){
    return res.status(500).json({
        error: "No Posts present",
    });
   }
}