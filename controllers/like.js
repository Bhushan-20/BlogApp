
const Post = require("../models/postModel");
const Like = require("../models/likeMode");


//Liking Post
exports.likepost = async (req,res) =>{
    try{
        const {post,user} = req.body;
        const like = new Like({
            post,user,
        });
        const saveLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}} ,{new:true}).populate("likes").exec();

        res.status(200).json({
            post:updatePost
        })
    }
    catch(error){
        return res.status(500).json({
            error: "Error While liking Post"
        })
    }
}


//Unlike Post
exports.unlikepost = async(req,res) => {
    try{
        const {post,like} = req.body;
        //find and delete the like collection 
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});
        const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes: deleteLike._id}},{new:true});

        res.json({
            post:updatePost
        })

    }
    catch(error){
        return res.status(500).json({
            error: "Error While Unliking Post"
        })
    }
}