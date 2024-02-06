const express = require("express");
const router = express.Router();

//Import
const {createComment} = require("../controllers/comment")
const {createPost,getAllposts} = require("../controllers/post")
const {likepost,unlikepost} = require("../controllers/like");

//Mapping
router.post("/comment/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllposts);
router.post("/likes/like",likepost);
router.post("/like/unlike",unlikepost);


module.exports = router

